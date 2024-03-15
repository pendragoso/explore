import { ColumnDetail } from 'src/components/schema-validator/customColumns/_ColumnDetail';

type Props = {
  validatedResult: string;
};

export const RuleValidatedColumn = ({ validatedResult }: Props) => (
  <ColumnDetail result={validatedResult} />
);
