export interface Loggly {
  error(
    message: object | string,
    tags?: string[],
    callback?: (err: any, results: any) => void,
  ): this;
  warn(
    message: object | string,
    tags?: string[],
    callback?: (err: any, results: any) => void,
  ): this;
  info(
    message: object | string,
    tags?: string[],
    callback?: (err: any, results: any) => void,
  ): this;
  trace(
    message: object | string,
    tags?: string[],
    callback?: (err: any, results: any) => void,
  ): this;
  log(
    message: object | string,
    tags?: string[],
    callback?: (err: any, results: any) => void,
  ): this;
}

declare const Logger: Loggly;
