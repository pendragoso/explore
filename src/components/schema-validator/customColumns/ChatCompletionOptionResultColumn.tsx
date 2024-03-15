import { ColumnDetail } from 'src/components/schema-validator/customColumns/_ColumnDetail';

type Props = {
  result: string;
};

export const ChatCompletionOptionResultColumn = ({ result }: Props) => (
  <ColumnDetail result={result} />
);
