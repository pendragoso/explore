import { removeDuplicateConst } from 'codegen/utils/removeDuplicateConst';
import { describe, expect, test } from 'vitest';

describe('removeDuplicateConst', () => {
  test('should remove duplicate const', () => {
    const text = `
/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};
/** ordering argument of a cursor */
export const cursorOrdering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC',
} as const;

export type CursorOrdering =
  (typeof cursorOrdering)[keyof typeof cursorOrdering];

/** column ordering options */
export const orderBy = {
  /** in ascending order, nulls last */
  Asc: 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst: 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast: 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc: 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst: 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast: 'DESC_NULLS_LAST',
} as const;

export type OrderBy = (typeof orderBy)[keyof typeof orderBy];

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};


/** ordering argument of a cursor */
export const cursorOrdering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC',
} as const;

export type CursorOrdering =
  (typeof cursorOrdering)[keyof typeof cursorOrdering];

/** column ordering options */
/** column ordering options */
export const orderBy = {
  /** in ascending order, nulls last */
  Asc: 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst: 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast: 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc: 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst: 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
DescNullsLast: 'DESC_NULLS_LAST',
} as const;

export type OrderBy = (typeof orderBy)[keyof typeof orderBy];
/** column ordering options */
export const orderBy = {
  /** in ascending order, nulls last */
  Asc: 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst: 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast: 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc: 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst: 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast: 'DESC_NULLS_LAST',
} as const;

export type OrderBy = (typeof orderBy)[keyof typeof orderBy];
    `;
    expect(removeDuplicateConst(text)).toMatchInlineSnapshot(`
      "
      /** Boolean expression to compare columns of type \\"numeric\\". All fields are combined with logical 'AND'. */
      export type Numeric_Comparison_Exp = {
        _eq?: InputMaybe<Scalars['numeric']>;
        _gt?: InputMaybe<Scalars['numeric']>;
        _gte?: InputMaybe<Scalars['numeric']>;
        _in?: InputMaybe<Array<Scalars['numeric']>>;
        _is_null?: InputMaybe<Scalars['Boolean']>;
        _lt?: InputMaybe<Scalars['numeric']>;
        _lte?: InputMaybe<Scalars['numeric']>;
        _neq?: InputMaybe<Scalars['numeric']>;
        _nin?: InputMaybe<Array<Scalars['numeric']>>;
      };
      /** ordering argument of a cursor */
      export const cursorOrdering = {
        /** ascending ordering of the cursor */
        Asc: 'ASC',
        /** descending ordering of the cursor */
        Desc: 'DESC',
      } as const;

      export type CursorOrdering =
        (typeof cursorOrdering)[keyof typeof cursorOrdering];

      /** column ordering options */
      export const orderBy = {
        /** in ascending order, nulls last */
        Asc: 'ASC',
        /** in ascending order, nulls first */
        AscNullsFirst: 'ASC_NULLS_FIRST',
        /** in ascending order, nulls last */
        AscNullsLast: 'ASC_NULLS_LAST',
        /** in descending order, nulls first */
        Desc: 'DESC',
        /** in descending order, nulls first */
        DescNullsFirst: 'DESC_NULLS_FIRST',
        /** in descending order, nulls last */
        DescNullsLast: 'DESC_NULLS_LAST',
      } as const;

      export type OrderBy = (typeof orderBy)[keyof typeof orderBy];

      /** Boolean expression to compare columns of type \\"numeric\\". All fields are combined with logical 'AND'. */
      export type Numeric_Comparison_Exp = {
        _eq?: InputMaybe<Scalars['numeric']>;
        _gt?: InputMaybe<Scalars['numeric']>;
        _gte?: InputMaybe<Scalars['numeric']>;
        _in?: InputMaybe<Array<Scalars['numeric']>>;
        _is_null?: InputMaybe<Scalars['Boolean']>;
        _lt?: InputMaybe<Scalars['numeric']>;
        _lte?: InputMaybe<Scalars['numeric']>;
        _neq?: InputMaybe<Scalars['numeric']>;
        _nin?: InputMaybe<Array<Scalars['numeric']>>;
      };


                                                                                                                                                                                                         

                                                                                          

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

                                                                   
          "
    `);
  });
});
