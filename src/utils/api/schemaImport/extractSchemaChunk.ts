import {
  type ASTNode,
  type NamedTypeNode,
  buildASTSchema,
  GraphQLSchema,
  Kind,
  parse,
  visit,
} from 'graphql';

import { convertToSchemaType } from 'src/utils/api/schemaManipulation/convertToSchemaType';
import { getFieldName } from 'src/utils/api/schemaManipulation/getFieldName';

type IExtractType =
  | 'removeAllComments' // the most effiecient way to reduce tokens size
  | 'removeEnumComments' // reduce somewhere around 100-300 tokens (base on big schema like our internal graph)
  | 'keepAllComments';

/**
 * Extract schema chunk from graphql schema, remove deprecated types and only return either required fields or optional fields
 */
export const extractSchemaChunk = ({
  extractType = 'removeAllComments',
  graphqlSchema,
  schemaType,
  type,
}: {
  extractType?: IExtractType;
  graphqlSchema: GraphQLSchema;
  schemaType: 'query' | 'mutation';
  type: 'requiredFieldOnly' | 'optionalFieldOnly' | 'all';
}) => {
  const schemaMainFieldAction = getFieldName({
    schema: graphqlSchema,
    type: schemaType,
  });
  const schemaSource = convertToSchemaType(graphqlSchema);
  const schemaAST = parse(schemaSource);
  const nodeLocation = new Map<string, number>();

  const isNodeHasNameValue = (
    node: unknown
  ): node is { name: { value: string } } => {
    if (typeof node !== 'object' || node === null) {
      return false;
    }
    if (!('name' in node)) {
      return false;
    }
    if (typeof node.name !== 'object' || node.name === null) {
      return false;
    }
    if (!('value' in node.name)) {
      return false;
    }
    return true;
  };

  const findNamedType = (node: ASTNode): NamedTypeNode | null => {
    if (node.kind === Kind.NAMED_TYPE) {
      return node as NamedTypeNode;
    }

    let namedTypeNode: NamedTypeNode | null = null;

    visit(node, {
      NamedType(childNode) {
        namedTypeNode = childNode;
        return undefined;
      },
      enter() {
        if (namedTypeNode) {
          return 'BREAK';
        }
        return undefined;
      },
    });

    return namedTypeNode;
  };

  const { definitions } = schemaAST;
  definitions.forEach((node, index) => {
    // get index location of each definition node
    if (isNodeHasNameValue(node)) {
      nodeLocation.set(node.name.value, index);
    }
  });

  const isDeprecated = (node: {
    description?: { value: string };
    directives?: readonly { name: { value: string } }[];
  }) => {
    const description = node.description?.value;
    const descriptionHasDeprecated =
      description?.includes('@deprecated') ||
      description?.includes('@Deprecated');
    const directiveHasDeprecated = node.directives?.some(
      item => item.name.value === 'deprecated'
    );
    return descriptionHasDeprecated || directiveHasDeprecated;
  };
  const cleanedupAST = visit(schemaAST, {
    EnumTypeDefinition: {
      enter: node => {
        if (isDeprecated(node)) {
          // remove deprecated enum
          return null;
        }
        if (node.name.value === 'CurrencyCode') {
          return {
            ...node,
            description:
              extractType === 'keepAllComments' ? node.description : undefined,
            values: [
              {
                directives: [],
                kind: 'EnumValueDefinition',
                name: {
                  kind: 'Name',
                  value: '__ISO_CURRENCY_CODE__',
                },
              },
            ],
          };
        }

        if (node.name.value === 'CountryCode') {
          return {
            ...node,
            description:
              extractType === 'keepAllComments' ? node.description : undefined,
            values: [
              {
                directives: [],
                kind: 'EnumValueDefinition',
                name: {
                  kind: 'Name',
                  value: '__ISO_COUNTRY_CODE__',
                },
              },
            ],
          };
        }

        if (node.name.value === 'ConstraintUnitCode') {
          const enumNotCountryCodes =
            node.values?.filter(item => item.name.value.length !== 3) || [];
          return {
            ...node,
            description:
              extractType === 'keepAllComments' ? node.description : undefined,
            values: [
              // enum with value
              {
                directives: [],
                kind: 'EnumValueDefinition',
                name: {
                  kind: 'Name',
                  value: '__ISO_COUNTRY_CODE__',
                },
              },
              // only keep enum value with length > 3 (not ISO country code)
              ...enumNotCountryCodes,
            ],
          };
        }
        return undefined;
      },
    },
    EnumValueDefinition: {
      enter: node => {
        if (isDeprecated(node)) {
          // remove deprecated enum value
          return null;
        }
        // remove description for enum value
        return {
          ...node,
          description:
            extractType === 'keepAllComments' ? node.description : undefined,
        };
      },
    },
    FieldDefinition: {
      enter: node => {
        const fieldName = node.name.value;
        if (schemaMainFieldAction === fieldName) {
          // skip if it's a query or mutation field
          return undefined;
        }
        if (isDeprecated(node)) {
          // remove deprecated field
          return null;
        }

        const isNonNullList =
          node.type.kind === 'ListType' &&
          node.type.type.kind === 'NonNullType';
        const isNonNullType = node.type.kind === 'NonNullType';

        const isNullable = !isNonNullList && !isNonNullType;
        if (type === 'requiredFieldOnly' && (isNonNullList || isNonNullType)) {
          // return new node with description removed
          return {
            ...node,
            description:
              extractType !== 'removeAllComments'
                ? node.description
                : undefined,
          };
        }
        if (type === 'optionalFieldOnly' && isNullable) {
          // return new node with description removed
          return {
            ...node,
            description:
              extractType !== 'removeAllComments'
                ? node.description
                : undefined,
          };
        }

        if (type === 'all') {
          // return new node with description removed
          return {
            ...node,
            description:
              extractType !== 'removeAllComments'
                ? node.description
                : undefined,
          };
        }

        // get nested namedType node
        const namedTypeNode = findNamedType(node);
        // In field definition, named type node will always be found. This would just satify the type check
        if (!namedTypeNode) {
          return null;
        }
        const namedTypeLocation = nodeLocation.get(namedTypeNode.name.value);

        // safe to remove the field when this named type doesn't have any connection with other `TypeDefinition`
        if (!namedTypeLocation) {
          return null;
        }

        return {
          ...node,
          // remove description
          description:
            extractType !== 'removeAllComments' ? node.description : undefined,
        };
      },
    },

    InputObjectTypeDefinition: {
      enter: node => {
        if (isDeprecated(node)) {
          // remove deprecated type
          return null;
        }
        return {
          ...node,
          // remove description
          description:
            extractType !== 'removeAllComments' ? node.description : undefined,
        };
      },
    },

    InputValueDefinition: {
      enter: node => {
        if (isDeprecated(node)) {
          // remove deprecated input value
          return null;
        }

        const isNonNullList =
          node.type.kind === 'ListType' &&
          node.type.type.kind === 'NonNullType';
        const isNonNullType = node.type.kind === 'NonNullType';

        const isNullable = !isNonNullList && !isNonNullType;
        if (type === 'requiredFieldOnly' && (isNonNullList || isNonNullType)) {
          // return new node with description removed
          return {
            ...node,
            description:
              extractType !== 'removeAllComments'
                ? node.description
                : undefined,
          };
        }
        if (type === 'optionalFieldOnly' && isNullable) {
          // return new node with description removed
          return {
            ...node,
            description:
              extractType !== 'removeAllComments'
                ? node.description
                : undefined,
          };
        }

        if (type === 'all') {
          // return new node with description removed
          return {
            ...node,
            description:
              extractType !== 'removeAllComments'
                ? node.description
                : undefined,
          };
        }
        // get nested namedType node
        const namedTypeNode = findNamedType(node);
        // In field definition, named type node will always be found. This would just satify the type check
        if (!namedTypeNode) {
          return null;
        }
        const namedTypeLocation = nodeLocation.get(namedTypeNode.name.value);

        // safe to remove the field when this named type doesn't have any connection with other `TypeDefinition`
        if (!namedTypeLocation) {
          return null;
        }
        // remove if it doesn't satisfy any of the above conditions
        return null;
      },
    },

    ObjectTypeDefinition: {
      enter: node => {
        if (isDeprecated(node)) {
          // remove deprecated type
          return null;
        }
        return {
          ...node,
          // remove description
          description:
            extractType !== 'removeAllComments' ? node.description : undefined,
        };
      },
    },
    enter: node => ({
      ...node,
      description: undefined,
    }),
  });

  return buildASTSchema(cleanedupAST);
};
