type IElasticShard = {
  failed: number;
  successful: number;
  total: number;
};

export type IElasticHit<TSource> = {
  _id: string;
  _index: string;
  _score: number | null;
  _source: TSource;
  _type: string;
  sort?: number[];
};

type IElasticHits<TSource> = {
  hits: IElasticHit<TSource>[];
  max_score: number | null;
  total: number;
};

export type IElastic<TSource> = {
  _shards: IElasticShard;
  hits: IElasticHits<TSource>;
  timed_out: boolean;
  took: number;
};
