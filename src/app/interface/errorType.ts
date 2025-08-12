export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenricErrorSources = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
