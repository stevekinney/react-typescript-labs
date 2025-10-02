declare module 'qs' {
  interface IStringifyOptions {
    addQueryPrefix?: boolean;
    delimiter?: string;
    encode?: boolean;
    skipNulls?: boolean;
    indices?: boolean;
    arrayFormat?: 'indices' | 'brackets' | 'repeat' | 'comma';
  }

  interface IParseOptions {
    ignoreQueryPrefix?: boolean;
    delimiter?: string;
    depth?: number;
    parameterLimit?: number;
    parseArrays?: boolean;
    decoder?: (str: string, defaultDecoder: (str: string) => string) => unknown;
    allowDots?: boolean;
  }

  export function stringify(obj: Record<string, unknown>, options?: IStringifyOptions): string;
  export function parse(str: string, options?: IParseOptions): Record<string, unknown>;
}
