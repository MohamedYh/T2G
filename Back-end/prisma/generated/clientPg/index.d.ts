
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>
/**
 * Model Data
 * 
 */
export type Data = $Result.DefaultSelection<Prisma.$DataPayload>
/**
 * Model Background_Image
 * 
 */
export type Background_Image = $Result.DefaultSelection<Prisma.$Background_ImagePayload>
/**
 * Model Column
 * 
 */
export type Column = $Result.DefaultSelection<Prisma.$ColumnPayload>
/**
 * Model Bars
 * 
 */
export type Bars = $Result.DefaultSelection<Prisma.$BarsPayload>
/**
 * Model Pie
 * 
 */
export type Pie = $Result.DefaultSelection<Prisma.$PiePayload>
/**
 * Model Donut
 * 
 */
export type Donut = $Result.DefaultSelection<Prisma.$DonutPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Line
 * 
 */
export type Line = $Result.DefaultSelection<Prisma.$LinePayload>
/**
 * Model Column_Line
 * 
 */
export type Column_Line = $Result.DefaultSelection<Prisma.$Column_LinePayload>
/**
 * Model Column_Area
 * 
 */
export type Column_Area = $Result.DefaultSelection<Prisma.$Column_AreaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs>;

  /**
   * `prisma.data`: Exposes CRUD operations for the **Data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data
    * const data = await prisma.data.findMany()
    * ```
    */
  get data(): Prisma.DataDelegate<ExtArgs>;

  /**
   * `prisma.background_Image`: Exposes CRUD operations for the **Background_Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Background_Images
    * const background_Images = await prisma.background_Image.findMany()
    * ```
    */
  get background_Image(): Prisma.Background_ImageDelegate<ExtArgs>;

  /**
   * `prisma.column`: Exposes CRUD operations for the **Column** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Columns
    * const columns = await prisma.column.findMany()
    * ```
    */
  get column(): Prisma.ColumnDelegate<ExtArgs>;

  /**
   * `prisma.bars`: Exposes CRUD operations for the **Bars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bars
    * const bars = await prisma.bars.findMany()
    * ```
    */
  get bars(): Prisma.BarsDelegate<ExtArgs>;

  /**
   * `prisma.pie`: Exposes CRUD operations for the **Pie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pies
    * const pies = await prisma.pie.findMany()
    * ```
    */
  get pie(): Prisma.PieDelegate<ExtArgs>;

  /**
   * `prisma.donut`: Exposes CRUD operations for the **Donut** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donuts
    * const donuts = await prisma.donut.findMany()
    * ```
    */
  get donut(): Prisma.DonutDelegate<ExtArgs>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs>;

  /**
   * `prisma.line`: Exposes CRUD operations for the **Line** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lines
    * const lines = await prisma.line.findMany()
    * ```
    */
  get line(): Prisma.LineDelegate<ExtArgs>;

  /**
   * `prisma.column_Line`: Exposes CRUD operations for the **Column_Line** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Column_Lines
    * const column_Lines = await prisma.column_Line.findMany()
    * ```
    */
  get column_Line(): Prisma.Column_LineDelegate<ExtArgs>;

  /**
   * `prisma.column_Area`: Exposes CRUD operations for the **Column_Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Column_Areas
    * const column_Areas = await prisma.column_Area.findMany()
    * ```
    */
  get column_Area(): Prisma.Column_AreaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Projects: 'Projects',
    Data: 'Data',
    Background_Image: 'Background_Image',
    Column: 'Column',
    Bars: 'Bars',
    Pie: 'Pie',
    Donut: 'Donut',
    Area: 'Area',
    Line: 'Line',
    Column_Line: 'Column_Line',
    Column_Area: 'Column_Area'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "projects" | "data" | "background_Image" | "column" | "bars" | "pie" | "donut" | "area" | "line" | "column_Line" | "column_Area"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      Data: {
        payload: Prisma.$DataPayload<ExtArgs>
        fields: Prisma.DataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          findFirst: {
            args: Prisma.DataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          findMany: {
            args: Prisma.DataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPayload>[]
          }
          create: {
            args: Prisma.DataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          createMany: {
            args: Prisma.DataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          update: {
            args: Prisma.DataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          deleteMany: {
            args: Prisma.DataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          aggregate: {
            args: Prisma.DataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateData>
          }
          groupBy: {
            args: Prisma.DataGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataCountArgs<ExtArgs>
            result: $Utils.Optional<DataCountAggregateOutputType> | number
          }
        }
      }
      Background_Image: {
        payload: Prisma.$Background_ImagePayload<ExtArgs>
        fields: Prisma.Background_ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Background_ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Background_ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_ImagePayload>
          }
          findFirst: {
            args: Prisma.Background_ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Background_ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_ImagePayload>
          }
          findMany: {
            args: Prisma.Background_ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_ImagePayload>[]
          }
          create: {
            args: Prisma.Background_ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_ImagePayload>
          }
          createMany: {
            args: Prisma.Background_ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Background_ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_ImagePayload>
          }
          update: {
            args: Prisma.Background_ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_ImagePayload>
          }
          deleteMany: {
            args: Prisma.Background_ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Background_ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Background_ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Background_ImagePayload>
          }
          aggregate: {
            args: Prisma.Background_ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackground_Image>
          }
          groupBy: {
            args: Prisma.Background_ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Background_ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.Background_ImageCountArgs<ExtArgs>
            result: $Utils.Optional<Background_ImageCountAggregateOutputType> | number
          }
        }
      }
      Column: {
        payload: Prisma.$ColumnPayload<ExtArgs>
        fields: Prisma.ColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColumnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findFirst: {
            args: Prisma.ColumnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findMany: {
            args: Prisma.ColumnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          create: {
            args: Prisma.ColumnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          createMany: {
            args: Prisma.ColumnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ColumnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          update: {
            args: Prisma.ColumnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          deleteMany: {
            args: Prisma.ColumnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ColumnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          aggregate: {
            args: Prisma.ColumnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumn>
          }
          groupBy: {
            args: Prisma.ColumnGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnCountArgs<ExtArgs>
            result: $Utils.Optional<ColumnCountAggregateOutputType> | number
          }
        }
      }
      Bars: {
        payload: Prisma.$BarsPayload<ExtArgs>
        fields: Prisma.BarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarsPayload>
          }
          findFirst: {
            args: Prisma.BarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarsPayload>
          }
          findMany: {
            args: Prisma.BarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarsPayload>[]
          }
          create: {
            args: Prisma.BarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarsPayload>
          }
          createMany: {
            args: Prisma.BarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarsPayload>
          }
          update: {
            args: Prisma.BarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarsPayload>
          }
          deleteMany: {
            args: Prisma.BarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarsPayload>
          }
          aggregate: {
            args: Prisma.BarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBars>
          }
          groupBy: {
            args: Prisma.BarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarsCountArgs<ExtArgs>
            result: $Utils.Optional<BarsCountAggregateOutputType> | number
          }
        }
      }
      Pie: {
        payload: Prisma.$PiePayload<ExtArgs>
        fields: Prisma.PieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiePayload>
          }
          findFirst: {
            args: Prisma.PieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiePayload>
          }
          findMany: {
            args: Prisma.PieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiePayload>[]
          }
          create: {
            args: Prisma.PieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiePayload>
          }
          createMany: {
            args: Prisma.PieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiePayload>
          }
          update: {
            args: Prisma.PieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiePayload>
          }
          deleteMany: {
            args: Prisma.PieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiePayload>
          }
          aggregate: {
            args: Prisma.PieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePie>
          }
          groupBy: {
            args: Prisma.PieGroupByArgs<ExtArgs>
            result: $Utils.Optional<PieGroupByOutputType>[]
          }
          count: {
            args: Prisma.PieCountArgs<ExtArgs>
            result: $Utils.Optional<PieCountAggregateOutputType> | number
          }
        }
      }
      Donut: {
        payload: Prisma.$DonutPayload<ExtArgs>
        fields: Prisma.DonutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonutPayload>
          }
          findFirst: {
            args: Prisma.DonutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonutPayload>
          }
          findMany: {
            args: Prisma.DonutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonutPayload>[]
          }
          create: {
            args: Prisma.DonutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonutPayload>
          }
          createMany: {
            args: Prisma.DonutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DonutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonutPayload>
          }
          update: {
            args: Prisma.DonutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonutPayload>
          }
          deleteMany: {
            args: Prisma.DonutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DonutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonutPayload>
          }
          aggregate: {
            args: Prisma.DonutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonut>
          }
          groupBy: {
            args: Prisma.DonutGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonutGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonutCountArgs<ExtArgs>
            result: $Utils.Optional<DonutCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Line: {
        payload: Prisma.$LinePayload<ExtArgs>
        fields: Prisma.LineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findFirst: {
            args: Prisma.LineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findMany: {
            args: Prisma.LineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          create: {
            args: Prisma.LineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          createMany: {
            args: Prisma.LineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          update: {
            args: Prisma.LineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          deleteMany: {
            args: Prisma.LineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          aggregate: {
            args: Prisma.LineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLine>
          }
          groupBy: {
            args: Prisma.LineGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineCountArgs<ExtArgs>
            result: $Utils.Optional<LineCountAggregateOutputType> | number
          }
        }
      }
      Column_Line: {
        payload: Prisma.$Column_LinePayload<ExtArgs>
        fields: Prisma.Column_LineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Column_LineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_LinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Column_LineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_LinePayload>
          }
          findFirst: {
            args: Prisma.Column_LineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_LinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Column_LineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_LinePayload>
          }
          findMany: {
            args: Prisma.Column_LineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_LinePayload>[]
          }
          create: {
            args: Prisma.Column_LineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_LinePayload>
          }
          createMany: {
            args: Prisma.Column_LineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Column_LineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_LinePayload>
          }
          update: {
            args: Prisma.Column_LineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_LinePayload>
          }
          deleteMany: {
            args: Prisma.Column_LineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Column_LineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Column_LineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_LinePayload>
          }
          aggregate: {
            args: Prisma.Column_LineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumn_Line>
          }
          groupBy: {
            args: Prisma.Column_LineGroupByArgs<ExtArgs>
            result: $Utils.Optional<Column_LineGroupByOutputType>[]
          }
          count: {
            args: Prisma.Column_LineCountArgs<ExtArgs>
            result: $Utils.Optional<Column_LineCountAggregateOutputType> | number
          }
        }
      }
      Column_Area: {
        payload: Prisma.$Column_AreaPayload<ExtArgs>
        fields: Prisma.Column_AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Column_AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Column_AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_AreaPayload>
          }
          findFirst: {
            args: Prisma.Column_AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Column_AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_AreaPayload>
          }
          findMany: {
            args: Prisma.Column_AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_AreaPayload>[]
          }
          create: {
            args: Prisma.Column_AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_AreaPayload>
          }
          createMany: {
            args: Prisma.Column_AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Column_AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_AreaPayload>
          }
          update: {
            args: Prisma.Column_AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_AreaPayload>
          }
          deleteMany: {
            args: Prisma.Column_AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Column_AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Column_AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Column_AreaPayload>
          }
          aggregate: {
            args: Prisma.Column_AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumn_Area>
          }
          groupBy: {
            args: Prisma.Column_AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Column_AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Column_AreaCountArgs<ExtArgs>
            result: $Utils.Optional<Column_AreaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }


  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    data: number
    background_images: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | ProjectsCountOutputTypeCountDataArgs
    background_images?: boolean | ProjectsCountOutputTypeCountBackground_imagesArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountBackground_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Background_ImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    isConfirmed: boolean | null
    v_code: string | null
    token: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    isConfirmed: boolean | null
    v_code: string | null
    token: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    isConfirmed: number
    v_code: number
    token: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isConfirmed?: true
    v_code?: true
    token?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isConfirmed?: true
    v_code?: true
    token?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    isConfirmed?: true
    v_code?: true
    token?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    isConfirmed: boolean | null
    v_code: string
    token: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    isConfirmed?: boolean
    v_code?: boolean
    token?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    isConfirmed?: boolean
    v_code?: boolean
    token?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      isConfirmed: boolean | null
      v_code: string
      token: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isConfirmed: FieldRef<"User", 'Boolean'>
    readonly v_code: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    data_selected: number | null
    graph_selected: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    data_selected: number | null
    graph_selected: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdDate: Date | null
    name: string | null
    title: string | null
    background_color: string | null
    data_selected: number | null
    graph_selected: number | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdDate: Date | null
    name: string | null
    title: string | null
    background_color: string | null
    data_selected: number | null
    graph_selected: number | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    userId: number
    createdDate: number
    name: number
    title: number
    background_color: number
    data_selected: number
    graph_selected: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    userId?: true
    data_selected?: true
    graph_selected?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    userId?: true
    data_selected?: true
    graph_selected?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    userId?: true
    createdDate?: true
    name?: true
    title?: true
    background_color?: true
    data_selected?: true
    graph_selected?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    userId?: true
    createdDate?: true
    name?: true
    title?: true
    background_color?: true
    data_selected?: true
    graph_selected?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    userId?: true
    createdDate?: true
    name?: true
    title?: true
    background_color?: true
    data_selected?: true
    graph_selected?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    userId: number
    createdDate: Date
    name: string
    title: string
    background_color: string
    data_selected: number
    graph_selected: number
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdDate?: boolean
    name?: boolean
    title?: boolean
    background_color?: boolean
    data_selected?: boolean
    graph_selected?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    data?: boolean | Projects$dataArgs<ExtArgs>
    background_images?: boolean | Projects$background_imagesArgs<ExtArgs>
    Column?: boolean | Projects$ColumnArgs<ExtArgs>
    Bars?: boolean | Projects$BarsArgs<ExtArgs>
    Pie?: boolean | Projects$PieArgs<ExtArgs>
    Donut?: boolean | Projects$DonutArgs<ExtArgs>
    Area?: boolean | Projects$AreaArgs<ExtArgs>
    Line?: boolean | Projects$LineArgs<ExtArgs>
    Column_Line?: boolean | Projects$Column_LineArgs<ExtArgs>
    Column_Area?: boolean | Projects$Column_AreaArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>


  export type ProjectsSelectScalar = {
    id?: boolean
    userId?: boolean
    createdDate?: boolean
    name?: boolean
    title?: boolean
    background_color?: boolean
    data_selected?: boolean
    graph_selected?: boolean
  }

  export type ProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    data?: boolean | Projects$dataArgs<ExtArgs>
    background_images?: boolean | Projects$background_imagesArgs<ExtArgs>
    Column?: boolean | Projects$ColumnArgs<ExtArgs>
    Bars?: boolean | Projects$BarsArgs<ExtArgs>
    Pie?: boolean | Projects$PieArgs<ExtArgs>
    Donut?: boolean | Projects$DonutArgs<ExtArgs>
    Area?: boolean | Projects$AreaArgs<ExtArgs>
    Line?: boolean | Projects$LineArgs<ExtArgs>
    Column_Line?: boolean | Projects$Column_LineArgs<ExtArgs>
    Column_Area?: boolean | Projects$Column_AreaArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      data: Prisma.$DataPayload<ExtArgs>[]
      background_images: Prisma.$Background_ImagePayload<ExtArgs>[]
      Column: Prisma.$ColumnPayload<ExtArgs> | null
      Bars: Prisma.$BarsPayload<ExtArgs> | null
      Pie: Prisma.$PiePayload<ExtArgs> | null
      Donut: Prisma.$DonutPayload<ExtArgs> | null
      Area: Prisma.$AreaPayload<ExtArgs> | null
      Line: Prisma.$LinePayload<ExtArgs> | null
      Column_Line: Prisma.$Column_LinePayload<ExtArgs> | null
      Column_Area: Prisma.$Column_AreaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdDate: Date
      name: string
      title: string
      background_color: string
      data_selected: number
      graph_selected: number
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectsFindUniqueArgs>(args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectsFindFirstArgs>(args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectsFindManyArgs>(args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends ProjectsCreateArgs>(args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectsCreateManyArgs>(args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends ProjectsDeleteArgs>(args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectsUpdateArgs>(args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectsDeleteManyArgs>(args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectsUpdateManyArgs>(args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends ProjectsUpsertArgs>(args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    data<T extends Projects$dataArgs<ExtArgs> = {}>(args?: Subset<T, Projects$dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findMany"> | Null>
    background_images<T extends Projects$background_imagesArgs<ExtArgs> = {}>(args?: Subset<T, Projects$background_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "findMany"> | Null>
    Column<T extends Projects$ColumnArgs<ExtArgs> = {}>(args?: Subset<T, Projects$ColumnArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Bars<T extends Projects$BarsArgs<ExtArgs> = {}>(args?: Subset<T, Projects$BarsArgs<ExtArgs>>): Prisma__BarsClient<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Pie<T extends Projects$PieArgs<ExtArgs> = {}>(args?: Subset<T, Projects$PieArgs<ExtArgs>>): Prisma__PieClient<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Donut<T extends Projects$DonutArgs<ExtArgs> = {}>(args?: Subset<T, Projects$DonutArgs<ExtArgs>>): Prisma__DonutClient<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Area<T extends Projects$AreaArgs<ExtArgs> = {}>(args?: Subset<T, Projects$AreaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Line<T extends Projects$LineArgs<ExtArgs> = {}>(args?: Subset<T, Projects$LineArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Column_Line<T extends Projects$Column_LineArgs<ExtArgs> = {}>(args?: Subset<T, Projects$Column_LineArgs<ExtArgs>>): Prisma__Column_LineClient<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Column_Area<T extends Projects$Column_AreaArgs<ExtArgs> = {}>(args?: Subset<T, Projects$Column_AreaArgs<ExtArgs>>): Prisma__Column_AreaClient<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Projects model
   */ 
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'Int'>
    readonly userId: FieldRef<"Projects", 'Int'>
    readonly createdDate: FieldRef<"Projects", 'DateTime'>
    readonly name: FieldRef<"Projects", 'String'>
    readonly title: FieldRef<"Projects", 'String'>
    readonly background_color: FieldRef<"Projects", 'String'>
    readonly data_selected: FieldRef<"Projects", 'Int'>
    readonly graph_selected: FieldRef<"Projects", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }

  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
  }

  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }

  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
  }

  /**
   * Projects.data
   */
  export type Projects$dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    where?: DataWhereInput
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    cursor?: DataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * Projects.background_images
   */
  export type Projects$background_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    where?: Background_ImageWhereInput
    orderBy?: Background_ImageOrderByWithRelationInput | Background_ImageOrderByWithRelationInput[]
    cursor?: Background_ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Background_ImageScalarFieldEnum | Background_ImageScalarFieldEnum[]
  }

  /**
   * Projects.Column
   */
  export type Projects$ColumnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    where?: ColumnWhereInput
  }

  /**
   * Projects.Bars
   */
  export type Projects$BarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    where?: BarsWhereInput
  }

  /**
   * Projects.Pie
   */
  export type Projects$PieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    where?: PieWhereInput
  }

  /**
   * Projects.Donut
   */
  export type Projects$DonutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    where?: DonutWhereInput
  }

  /**
   * Projects.Area
   */
  export type Projects$AreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * Projects.Line
   */
  export type Projects$LineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    where?: LineWhereInput
  }

  /**
   * Projects.Column_Line
   */
  export type Projects$Column_LineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    where?: Column_LineWhereInput
  }

  /**
   * Projects.Column_Area
   */
  export type Projects$Column_AreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    where?: Column_AreaWhereInput
  }

  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
  }


  /**
   * Model Data
   */

  export type AggregateData = {
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  export type DataAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type DataSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type DataMinAggregateOutputType = {
    id: number | null
    data: string | null
    headers: string | null
    name: string | null
    projectId: number | null
  }

  export type DataMaxAggregateOutputType = {
    id: number | null
    data: string | null
    headers: string | null
    name: string | null
    projectId: number | null
  }

  export type DataCountAggregateOutputType = {
    id: number
    data: number
    headers: number
    name: number
    projectId: number
    _all: number
  }


  export type DataAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type DataSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type DataMinAggregateInputType = {
    id?: true
    data?: true
    headers?: true
    name?: true
    projectId?: true
  }

  export type DataMaxAggregateInputType = {
    id?: true
    data?: true
    headers?: true
    name?: true
    projectId?: true
  }

  export type DataCountAggregateInputType = {
    id?: true
    data?: true
    headers?: true
    name?: true
    projectId?: true
    _all?: true
  }

  export type DataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Data to aggregate.
     */
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Data
    **/
    _count?: true | DataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataMaxAggregateInputType
  }

  export type GetDataAggregateType<T extends DataAggregateArgs> = {
        [P in keyof T & keyof AggregateData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData[P]>
      : GetScalarType<T[P], AggregateData[P]>
  }




  export type DataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataWhereInput
    orderBy?: DataOrderByWithAggregationInput | DataOrderByWithAggregationInput[]
    by: DataScalarFieldEnum[] | DataScalarFieldEnum
    having?: DataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataCountAggregateInputType | true
    _avg?: DataAvgAggregateInputType
    _sum?: DataSumAggregateInputType
    _min?: DataMinAggregateInputType
    _max?: DataMaxAggregateInputType
  }

  export type DataGroupByOutputType = {
    id: number
    data: string
    headers: string
    name: string
    projectId: number
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  type GetDataGroupByPayload<T extends DataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataGroupByOutputType[P]>
            : GetScalarType<T[P], DataGroupByOutputType[P]>
        }
      >
    >


  export type DataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    headers?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["data"]>


  export type DataSelectScalar = {
    id?: boolean
    data?: boolean
    headers?: boolean
    name?: boolean
    projectId?: boolean
  }

  export type DataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $DataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Data"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: string
      headers: string
      name: string
      projectId: number
    }, ExtArgs["result"]["data"]>
    composites: {}
  }

  type DataGetPayload<S extends boolean | null | undefined | DataDefaultArgs> = $Result.GetResult<Prisma.$DataPayload, S>

  type DataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DataCountAggregateInputType | true
    }

  export interface DataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Data'], meta: { name: 'Data' } }
    /**
     * Find zero or one Data that matches the filter.
     * @param {DataFindUniqueArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataFindUniqueArgs>(args: SelectSubset<T, DataFindUniqueArgs<ExtArgs>>): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Data that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DataFindUniqueOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataFindUniqueOrThrowArgs>(args: SelectSubset<T, DataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindFirstArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataFindFirstArgs>(args?: SelectSubset<T, DataFindFirstArgs<ExtArgs>>): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindFirstOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataFindFirstOrThrowArgs>(args?: SelectSubset<T, DataFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data
     * const data = await prisma.data.findMany()
     * 
     * // Get first 10 Data
     * const data = await prisma.data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataWithIdOnly = await prisma.data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataFindManyArgs>(args?: SelectSubset<T, DataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Data.
     * @param {DataCreateArgs} args - Arguments to create a Data.
     * @example
     * // Create one Data
     * const Data = await prisma.data.create({
     *   data: {
     *     // ... data to create a Data
     *   }
     * })
     * 
     */
    create<T extends DataCreateArgs>(args: SelectSubset<T, DataCreateArgs<ExtArgs>>): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Data.
     * @param {DataCreateManyArgs} args - Arguments to create many Data.
     * @example
     * // Create many Data
     * const data = await prisma.data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataCreateManyArgs>(args?: SelectSubset<T, DataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Data.
     * @param {DataDeleteArgs} args - Arguments to delete one Data.
     * @example
     * // Delete one Data
     * const Data = await prisma.data.delete({
     *   where: {
     *     // ... filter to delete one Data
     *   }
     * })
     * 
     */
    delete<T extends DataDeleteArgs>(args: SelectSubset<T, DataDeleteArgs<ExtArgs>>): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Data.
     * @param {DataUpdateArgs} args - Arguments to update one Data.
     * @example
     * // Update one Data
     * const data = await prisma.data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataUpdateArgs>(args: SelectSubset<T, DataUpdateArgs<ExtArgs>>): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Data.
     * @param {DataDeleteManyArgs} args - Arguments to filter Data to delete.
     * @example
     * // Delete a few Data
     * const { count } = await prisma.data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataDeleteManyArgs>(args?: SelectSubset<T, DataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataUpdateManyArgs>(args: SelectSubset<T, DataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Data.
     * @param {DataUpsertArgs} args - Arguments to update or create a Data.
     * @example
     * // Update or create a Data
     * const data = await prisma.data.upsert({
     *   create: {
     *     // ... data to create a Data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data we want to update
     *   }
     * })
     */
    upsert<T extends DataUpsertArgs>(args: SelectSubset<T, DataUpsertArgs<ExtArgs>>): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCountArgs} args - Arguments to filter Data to count.
     * @example
     * // Count the number of Data
     * const count = await prisma.data.count({
     *   where: {
     *     // ... the filter for the Data we want to count
     *   }
     * })
    **/
    count<T extends DataCountArgs>(
      args?: Subset<T, DataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataAggregateArgs>(args: Subset<T, DataAggregateArgs>): Prisma.PrismaPromise<GetDataAggregateType<T>>

    /**
     * Group by Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataGroupByArgs['orderBy'] }
        : { orderBy?: DataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Data model
   */
  readonly fields: DataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Data model
   */ 
  interface DataFieldRefs {
    readonly id: FieldRef<"Data", 'Int'>
    readonly data: FieldRef<"Data", 'String'>
    readonly headers: FieldRef<"Data", 'String'>
    readonly name: FieldRef<"Data", 'String'>
    readonly projectId: FieldRef<"Data", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Data findUnique
   */
  export type DataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where: DataWhereUniqueInput
  }

  /**
   * Data findUniqueOrThrow
   */
  export type DataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where: DataWhereUniqueInput
  }

  /**
   * Data findFirst
   */
  export type DataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Data.
     */
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * Data findFirstOrThrow
   */
  export type DataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Data.
     */
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * Data findMany
   */
  export type DataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Data.
     */
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     */
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }

  /**
   * Data create
   */
  export type DataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * The data needed to create a Data.
     */
    data: XOR<DataCreateInput, DataUncheckedCreateInput>
  }

  /**
   * Data createMany
   */
  export type DataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Data.
     */
    data: DataCreateManyInput | DataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Data update
   */
  export type DataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * The data needed to update a Data.
     */
    data: XOR<DataUpdateInput, DataUncheckedUpdateInput>
    /**
     * Choose, which Data to update.
     */
    where: DataWhereUniqueInput
  }

  /**
   * Data updateMany
   */
  export type DataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Data.
     */
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyInput>
    /**
     * Filter which Data to update
     */
    where?: DataWhereInput
  }

  /**
   * Data upsert
   */
  export type DataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * The filter to search for the Data to update in case it exists.
     */
    where: DataWhereUniqueInput
    /**
     * In case the Data found by the `where` argument doesn't exist, create a new Data with this data.
     */
    create: XOR<DataCreateInput, DataUncheckedCreateInput>
    /**
     * In case the Data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataUpdateInput, DataUncheckedUpdateInput>
  }

  /**
   * Data delete
   */
  export type DataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter which Data to delete.
     */
    where: DataWhereUniqueInput
  }

  /**
   * Data deleteMany
   */
  export type DataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Data to delete
     */
    where?: DataWhereInput
  }

  /**
   * Data without action
   */
  export type DataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInclude<ExtArgs> | null
  }


  /**
   * Model Background_Image
   */

  export type AggregateBackground_Image = {
    _count: Background_ImageCountAggregateOutputType | null
    _avg: Background_ImageAvgAggregateOutputType | null
    _sum: Background_ImageSumAggregateOutputType | null
    _min: Background_ImageMinAggregateOutputType | null
    _max: Background_ImageMaxAggregateOutputType | null
  }

  export type Background_ImageAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type Background_ImageSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type Background_ImageMinAggregateOutputType = {
    id: number | null
    image_name: string | null
    Date: string | null
    is_set: boolean | null
    projectId: number | null
  }

  export type Background_ImageMaxAggregateOutputType = {
    id: number | null
    image_name: string | null
    Date: string | null
    is_set: boolean | null
    projectId: number | null
  }

  export type Background_ImageCountAggregateOutputType = {
    id: number
    image_name: number
    Date: number
    is_set: number
    projectId: number
    _all: number
  }


  export type Background_ImageAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type Background_ImageSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type Background_ImageMinAggregateInputType = {
    id?: true
    image_name?: true
    Date?: true
    is_set?: true
    projectId?: true
  }

  export type Background_ImageMaxAggregateInputType = {
    id?: true
    image_name?: true
    Date?: true
    is_set?: true
    projectId?: true
  }

  export type Background_ImageCountAggregateInputType = {
    id?: true
    image_name?: true
    Date?: true
    is_set?: true
    projectId?: true
    _all?: true
  }

  export type Background_ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Background_Image to aggregate.
     */
    where?: Background_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Background_Images to fetch.
     */
    orderBy?: Background_ImageOrderByWithRelationInput | Background_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Background_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Background_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Background_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Background_Images
    **/
    _count?: true | Background_ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Background_ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Background_ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Background_ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Background_ImageMaxAggregateInputType
  }

  export type GetBackground_ImageAggregateType<T extends Background_ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateBackground_Image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackground_Image[P]>
      : GetScalarType<T[P], AggregateBackground_Image[P]>
  }




  export type Background_ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Background_ImageWhereInput
    orderBy?: Background_ImageOrderByWithAggregationInput | Background_ImageOrderByWithAggregationInput[]
    by: Background_ImageScalarFieldEnum[] | Background_ImageScalarFieldEnum
    having?: Background_ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Background_ImageCountAggregateInputType | true
    _avg?: Background_ImageAvgAggregateInputType
    _sum?: Background_ImageSumAggregateInputType
    _min?: Background_ImageMinAggregateInputType
    _max?: Background_ImageMaxAggregateInputType
  }

  export type Background_ImageGroupByOutputType = {
    id: number
    image_name: string
    Date: string
    is_set: boolean
    projectId: number
    _count: Background_ImageCountAggregateOutputType | null
    _avg: Background_ImageAvgAggregateOutputType | null
    _sum: Background_ImageSumAggregateOutputType | null
    _min: Background_ImageMinAggregateOutputType | null
    _max: Background_ImageMaxAggregateOutputType | null
  }

  type GetBackground_ImageGroupByPayload<T extends Background_ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Background_ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Background_ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Background_ImageGroupByOutputType[P]>
            : GetScalarType<T[P], Background_ImageGroupByOutputType[P]>
        }
      >
    >


  export type Background_ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_name?: boolean
    Date?: boolean
    is_set?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["background_Image"]>


  export type Background_ImageSelectScalar = {
    id?: boolean
    image_name?: boolean
    Date?: boolean
    is_set?: boolean
    projectId?: boolean
  }

  export type Background_ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $Background_ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Background_Image"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image_name: string
      Date: string
      is_set: boolean
      projectId: number
    }, ExtArgs["result"]["background_Image"]>
    composites: {}
  }

  type Background_ImageGetPayload<S extends boolean | null | undefined | Background_ImageDefaultArgs> = $Result.GetResult<Prisma.$Background_ImagePayload, S>

  type Background_ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Background_ImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Background_ImageCountAggregateInputType | true
    }

  export interface Background_ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Background_Image'], meta: { name: 'Background_Image' } }
    /**
     * Find zero or one Background_Image that matches the filter.
     * @param {Background_ImageFindUniqueArgs} args - Arguments to find a Background_Image
     * @example
     * // Get one Background_Image
     * const background_Image = await prisma.background_Image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Background_ImageFindUniqueArgs>(args: SelectSubset<T, Background_ImageFindUniqueArgs<ExtArgs>>): Prisma__Background_ImageClient<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Background_Image that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Background_ImageFindUniqueOrThrowArgs} args - Arguments to find a Background_Image
     * @example
     * // Get one Background_Image
     * const background_Image = await prisma.background_Image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Background_ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, Background_ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Background_ImageClient<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Background_Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_ImageFindFirstArgs} args - Arguments to find a Background_Image
     * @example
     * // Get one Background_Image
     * const background_Image = await prisma.background_Image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Background_ImageFindFirstArgs>(args?: SelectSubset<T, Background_ImageFindFirstArgs<ExtArgs>>): Prisma__Background_ImageClient<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Background_Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_ImageFindFirstOrThrowArgs} args - Arguments to find a Background_Image
     * @example
     * // Get one Background_Image
     * const background_Image = await prisma.background_Image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Background_ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, Background_ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__Background_ImageClient<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Background_Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Background_Images
     * const background_Images = await prisma.background_Image.findMany()
     * 
     * // Get first 10 Background_Images
     * const background_Images = await prisma.background_Image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const background_ImageWithIdOnly = await prisma.background_Image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Background_ImageFindManyArgs>(args?: SelectSubset<T, Background_ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Background_Image.
     * @param {Background_ImageCreateArgs} args - Arguments to create a Background_Image.
     * @example
     * // Create one Background_Image
     * const Background_Image = await prisma.background_Image.create({
     *   data: {
     *     // ... data to create a Background_Image
     *   }
     * })
     * 
     */
    create<T extends Background_ImageCreateArgs>(args: SelectSubset<T, Background_ImageCreateArgs<ExtArgs>>): Prisma__Background_ImageClient<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Background_Images.
     * @param {Background_ImageCreateManyArgs} args - Arguments to create many Background_Images.
     * @example
     * // Create many Background_Images
     * const background_Image = await prisma.background_Image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Background_ImageCreateManyArgs>(args?: SelectSubset<T, Background_ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Background_Image.
     * @param {Background_ImageDeleteArgs} args - Arguments to delete one Background_Image.
     * @example
     * // Delete one Background_Image
     * const Background_Image = await prisma.background_Image.delete({
     *   where: {
     *     // ... filter to delete one Background_Image
     *   }
     * })
     * 
     */
    delete<T extends Background_ImageDeleteArgs>(args: SelectSubset<T, Background_ImageDeleteArgs<ExtArgs>>): Prisma__Background_ImageClient<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Background_Image.
     * @param {Background_ImageUpdateArgs} args - Arguments to update one Background_Image.
     * @example
     * // Update one Background_Image
     * const background_Image = await prisma.background_Image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Background_ImageUpdateArgs>(args: SelectSubset<T, Background_ImageUpdateArgs<ExtArgs>>): Prisma__Background_ImageClient<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Background_Images.
     * @param {Background_ImageDeleteManyArgs} args - Arguments to filter Background_Images to delete.
     * @example
     * // Delete a few Background_Images
     * const { count } = await prisma.background_Image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Background_ImageDeleteManyArgs>(args?: SelectSubset<T, Background_ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Background_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Background_Images
     * const background_Image = await prisma.background_Image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Background_ImageUpdateManyArgs>(args: SelectSubset<T, Background_ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Background_Image.
     * @param {Background_ImageUpsertArgs} args - Arguments to update or create a Background_Image.
     * @example
     * // Update or create a Background_Image
     * const background_Image = await prisma.background_Image.upsert({
     *   create: {
     *     // ... data to create a Background_Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Background_Image we want to update
     *   }
     * })
     */
    upsert<T extends Background_ImageUpsertArgs>(args: SelectSubset<T, Background_ImageUpsertArgs<ExtArgs>>): Prisma__Background_ImageClient<$Result.GetResult<Prisma.$Background_ImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Background_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_ImageCountArgs} args - Arguments to filter Background_Images to count.
     * @example
     * // Count the number of Background_Images
     * const count = await prisma.background_Image.count({
     *   where: {
     *     // ... the filter for the Background_Images we want to count
     *   }
     * })
    **/
    count<T extends Background_ImageCountArgs>(
      args?: Subset<T, Background_ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Background_ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Background_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Background_ImageAggregateArgs>(args: Subset<T, Background_ImageAggregateArgs>): Prisma.PrismaPromise<GetBackground_ImageAggregateType<T>>

    /**
     * Group by Background_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Background_ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Background_ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Background_ImageGroupByArgs['orderBy'] }
        : { orderBy?: Background_ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Background_ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackground_ImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Background_Image model
   */
  readonly fields: Background_ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Background_Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Background_ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Background_Image model
   */ 
  interface Background_ImageFieldRefs {
    readonly id: FieldRef<"Background_Image", 'Int'>
    readonly image_name: FieldRef<"Background_Image", 'String'>
    readonly Date: FieldRef<"Background_Image", 'String'>
    readonly is_set: FieldRef<"Background_Image", 'Boolean'>
    readonly projectId: FieldRef<"Background_Image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Background_Image findUnique
   */
  export type Background_ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Background_Image to fetch.
     */
    where: Background_ImageWhereUniqueInput
  }

  /**
   * Background_Image findUniqueOrThrow
   */
  export type Background_ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Background_Image to fetch.
     */
    where: Background_ImageWhereUniqueInput
  }

  /**
   * Background_Image findFirst
   */
  export type Background_ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Background_Image to fetch.
     */
    where?: Background_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Background_Images to fetch.
     */
    orderBy?: Background_ImageOrderByWithRelationInput | Background_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Background_Images.
     */
    cursor?: Background_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Background_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Background_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Background_Images.
     */
    distinct?: Background_ImageScalarFieldEnum | Background_ImageScalarFieldEnum[]
  }

  /**
   * Background_Image findFirstOrThrow
   */
  export type Background_ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Background_Image to fetch.
     */
    where?: Background_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Background_Images to fetch.
     */
    orderBy?: Background_ImageOrderByWithRelationInput | Background_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Background_Images.
     */
    cursor?: Background_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Background_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Background_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Background_Images.
     */
    distinct?: Background_ImageScalarFieldEnum | Background_ImageScalarFieldEnum[]
  }

  /**
   * Background_Image findMany
   */
  export type Background_ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Background_Images to fetch.
     */
    where?: Background_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Background_Images to fetch.
     */
    orderBy?: Background_ImageOrderByWithRelationInput | Background_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Background_Images.
     */
    cursor?: Background_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Background_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Background_Images.
     */
    skip?: number
    distinct?: Background_ImageScalarFieldEnum | Background_ImageScalarFieldEnum[]
  }

  /**
   * Background_Image create
   */
  export type Background_ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Background_Image.
     */
    data: XOR<Background_ImageCreateInput, Background_ImageUncheckedCreateInput>
  }

  /**
   * Background_Image createMany
   */
  export type Background_ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Background_Images.
     */
    data: Background_ImageCreateManyInput | Background_ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Background_Image update
   */
  export type Background_ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Background_Image.
     */
    data: XOR<Background_ImageUpdateInput, Background_ImageUncheckedUpdateInput>
    /**
     * Choose, which Background_Image to update.
     */
    where: Background_ImageWhereUniqueInput
  }

  /**
   * Background_Image updateMany
   */
  export type Background_ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Background_Images.
     */
    data: XOR<Background_ImageUpdateManyMutationInput, Background_ImageUncheckedUpdateManyInput>
    /**
     * Filter which Background_Images to update
     */
    where?: Background_ImageWhereInput
  }

  /**
   * Background_Image upsert
   */
  export type Background_ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Background_Image to update in case it exists.
     */
    where: Background_ImageWhereUniqueInput
    /**
     * In case the Background_Image found by the `where` argument doesn't exist, create a new Background_Image with this data.
     */
    create: XOR<Background_ImageCreateInput, Background_ImageUncheckedCreateInput>
    /**
     * In case the Background_Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Background_ImageUpdateInput, Background_ImageUncheckedUpdateInput>
  }

  /**
   * Background_Image delete
   */
  export type Background_ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
    /**
     * Filter which Background_Image to delete.
     */
    where: Background_ImageWhereUniqueInput
  }

  /**
   * Background_Image deleteMany
   */
  export type Background_ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Background_Images to delete
     */
    where?: Background_ImageWhereInput
  }

  /**
   * Background_Image without action
   */
  export type Background_ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background_Image
     */
    select?: Background_ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Background_ImageInclude<ExtArgs> | null
  }


  /**
   * Model Column
   */

  export type AggregateColumn = {
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  export type ColumnAvgAggregateOutputType = {
    id: number | null
    bar_spacing: number | null
    border_radius: number | null
    border_bld: number | null
    legend_size: number | null
    axis_txt_size: number | null
    projectId: number | null
  }

  export type ColumnSumAggregateOutputType = {
    id: number | null
    bar_spacing: number | null
    border_radius: number | null
    border_bld: number | null
    legend_size: number | null
    axis_txt_size: number | null
    projectId: number | null
  }

  export type ColumnMinAggregateOutputType = {
    id: number | null
    bar_spacing: number | null
    border_radius: number | null
    border_bld: number | null
    border_color: string | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    isAxis: boolean | null
    axis_txt_size: number | null
    is_axis_txt_italic: boolean | null
    is_axis_txt_bold: boolean | null
    axis_txt_color: string | null
    axisX: string | null
    axisY: string | null
    projectId: number | null
  }

  export type ColumnMaxAggregateOutputType = {
    id: number | null
    bar_spacing: number | null
    border_radius: number | null
    border_bld: number | null
    border_color: string | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    isAxis: boolean | null
    axis_txt_size: number | null
    is_axis_txt_italic: boolean | null
    is_axis_txt_bold: boolean | null
    axis_txt_color: string | null
    axisX: string | null
    axisY: string | null
    projectId: number | null
  }

  export type ColumnCountAggregateOutputType = {
    id: number
    bar_spacing: number
    border_radius: number
    border_bld: number
    border_color: number
    isLegend: number
    legend_size: number
    is_legend_italic: number
    is_legend_bold: number
    legend_color: number
    isAxis: number
    axis_txt_size: number
    is_axis_txt_italic: number
    is_axis_txt_bold: number
    axis_txt_color: number
    axisX: number
    axisY: number
    projectId: number
    _all: number
  }


  export type ColumnAvgAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    legend_size?: true
    axis_txt_size?: true
    projectId?: true
  }

  export type ColumnSumAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    legend_size?: true
    axis_txt_size?: true
    projectId?: true
  }

  export type ColumnMinAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    border_color?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    projectId?: true
  }

  export type ColumnMaxAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    border_color?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    projectId?: true
  }

  export type ColumnCountAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    border_color?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    projectId?: true
    _all?: true
  }

  export type ColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column to aggregate.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Columns
    **/
    _count?: true | ColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnMaxAggregateInputType
  }

  export type GetColumnAggregateType<T extends ColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn[P]>
      : GetScalarType<T[P], AggregateColumn[P]>
  }




  export type ColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
    orderBy?: ColumnOrderByWithAggregationInput | ColumnOrderByWithAggregationInput[]
    by: ColumnScalarFieldEnum[] | ColumnScalarFieldEnum
    having?: ColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnCountAggregateInputType | true
    _avg?: ColumnAvgAggregateInputType
    _sum?: ColumnSumAggregateInputType
    _min?: ColumnMinAggregateInputType
    _max?: ColumnMaxAggregateInputType
  }

  export type ColumnGroupByOutputType = {
    id: number
    bar_spacing: number
    border_radius: number
    border_bld: number
    border_color: string
    isLegend: boolean
    legend_size: number
    is_legend_italic: boolean
    is_legend_bold: boolean
    legend_color: string
    isAxis: boolean
    axis_txt_size: number
    is_axis_txt_italic: boolean
    is_axis_txt_bold: boolean
    axis_txt_color: string
    axisX: string
    axisY: string
    projectId: number
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  type GetColumnGroupByPayload<T extends ColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnGroupByOutputType[P]>
        }
      >
    >


  export type ColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bar_spacing?: boolean
    border_radius?: boolean
    border_bld?: boolean
    border_color?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    isAxis?: boolean
    axis_txt_size?: boolean
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: boolean
    axisX?: boolean
    axisY?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>


  export type ColumnSelectScalar = {
    id?: boolean
    bar_spacing?: boolean
    border_radius?: boolean
    border_bld?: boolean
    border_color?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    isAxis?: boolean
    axis_txt_size?: boolean
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: boolean
    axisX?: boolean
    axisY?: boolean
    projectId?: boolean
  }

  export type ColumnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $ColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Column"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bar_spacing: number
      border_radius: number
      border_bld: number
      border_color: string
      isLegend: boolean
      legend_size: number
      is_legend_italic: boolean
      is_legend_bold: boolean
      legend_color: string
      isAxis: boolean
      axis_txt_size: number
      is_axis_txt_italic: boolean
      is_axis_txt_bold: boolean
      axis_txt_color: string
      axisX: string
      axisY: string
      projectId: number
    }, ExtArgs["result"]["column"]>
    composites: {}
  }

  type ColumnGetPayload<S extends boolean | null | undefined | ColumnDefaultArgs> = $Result.GetResult<Prisma.$ColumnPayload, S>

  type ColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ColumnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ColumnCountAggregateInputType | true
    }

  export interface ColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Column'], meta: { name: 'Column' } }
    /**
     * Find zero or one Column that matches the filter.
     * @param {ColumnFindUniqueArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnFindUniqueArgs>(args: SelectSubset<T, ColumnFindUniqueArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Column that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ColumnFindUniqueOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnFindUniqueOrThrowArgs>(args: SelectSubset<T, ColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Column that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnFindFirstArgs>(args?: SelectSubset<T, ColumnFindFirstArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Column that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnFindFirstOrThrowArgs>(args?: SelectSubset<T, ColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Columns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Columns
     * const columns = await prisma.column.findMany()
     * 
     * // Get first 10 Columns
     * const columns = await prisma.column.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnWithIdOnly = await prisma.column.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColumnFindManyArgs>(args?: SelectSubset<T, ColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Column.
     * @param {ColumnCreateArgs} args - Arguments to create a Column.
     * @example
     * // Create one Column
     * const Column = await prisma.column.create({
     *   data: {
     *     // ... data to create a Column
     *   }
     * })
     * 
     */
    create<T extends ColumnCreateArgs>(args: SelectSubset<T, ColumnCreateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Columns.
     * @param {ColumnCreateManyArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColumnCreateManyArgs>(args?: SelectSubset<T, ColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Column.
     * @param {ColumnDeleteArgs} args - Arguments to delete one Column.
     * @example
     * // Delete one Column
     * const Column = await prisma.column.delete({
     *   where: {
     *     // ... filter to delete one Column
     *   }
     * })
     * 
     */
    delete<T extends ColumnDeleteArgs>(args: SelectSubset<T, ColumnDeleteArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Column.
     * @param {ColumnUpdateArgs} args - Arguments to update one Column.
     * @example
     * // Update one Column
     * const column = await prisma.column.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColumnUpdateArgs>(args: SelectSubset<T, ColumnUpdateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Columns.
     * @param {ColumnDeleteManyArgs} args - Arguments to filter Columns to delete.
     * @example
     * // Delete a few Columns
     * const { count } = await prisma.column.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColumnDeleteManyArgs>(args?: SelectSubset<T, ColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColumnUpdateManyArgs>(args: SelectSubset<T, ColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Column.
     * @param {ColumnUpsertArgs} args - Arguments to update or create a Column.
     * @example
     * // Update or create a Column
     * const column = await prisma.column.upsert({
     *   create: {
     *     // ... data to create a Column
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column we want to update
     *   }
     * })
     */
    upsert<T extends ColumnUpsertArgs>(args: SelectSubset<T, ColumnUpsertArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnCountArgs} args - Arguments to filter Columns to count.
     * @example
     * // Count the number of Columns
     * const count = await prisma.column.count({
     *   where: {
     *     // ... the filter for the Columns we want to count
     *   }
     * })
    **/
    count<T extends ColumnCountArgs>(
      args?: Subset<T, ColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColumnAggregateArgs>(args: Subset<T, ColumnAggregateArgs>): Prisma.PrismaPromise<GetColumnAggregateType<T>>

    /**
     * Group by Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnGroupByArgs['orderBy'] }
        : { orderBy?: ColumnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Column model
   */
  readonly fields: ColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Column.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Column model
   */ 
  interface ColumnFieldRefs {
    readonly id: FieldRef<"Column", 'Int'>
    readonly bar_spacing: FieldRef<"Column", 'Float'>
    readonly border_radius: FieldRef<"Column", 'Int'>
    readonly border_bld: FieldRef<"Column", 'Int'>
    readonly border_color: FieldRef<"Column", 'String'>
    readonly isLegend: FieldRef<"Column", 'Boolean'>
    readonly legend_size: FieldRef<"Column", 'Int'>
    readonly is_legend_italic: FieldRef<"Column", 'Boolean'>
    readonly is_legend_bold: FieldRef<"Column", 'Boolean'>
    readonly legend_color: FieldRef<"Column", 'String'>
    readonly isAxis: FieldRef<"Column", 'Boolean'>
    readonly axis_txt_size: FieldRef<"Column", 'Int'>
    readonly is_axis_txt_italic: FieldRef<"Column", 'Boolean'>
    readonly is_axis_txt_bold: FieldRef<"Column", 'Boolean'>
    readonly axis_txt_color: FieldRef<"Column", 'String'>
    readonly axisX: FieldRef<"Column", 'String'>
    readonly axisY: FieldRef<"Column", 'String'>
    readonly projectId: FieldRef<"Column", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Column findUnique
   */
  export type ColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findUniqueOrThrow
   */
  export type ColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findFirst
   */
  export type ColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findFirstOrThrow
   */
  export type ColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findMany
   */
  export type ColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column create
   */
  export type ColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a Column.
     */
    data: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
  }

  /**
   * Column createMany
   */
  export type ColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Column update
   */
  export type ColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a Column.
     */
    data: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
    /**
     * Choose, which Column to update.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column updateMany
   */
  export type ColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
  }

  /**
   * Column upsert
   */
  export type ColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the Column to update in case it exists.
     */
    where: ColumnWhereUniqueInput
    /**
     * In case the Column found by the `where` argument doesn't exist, create a new Column with this data.
     */
    create: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
    /**
     * In case the Column was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
  }

  /**
   * Column delete
   */
  export type ColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter which Column to delete.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column deleteMany
   */
  export type ColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Columns to delete
     */
    where?: ColumnWhereInput
  }

  /**
   * Column without action
   */
  export type ColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
  }


  /**
   * Model Bars
   */

  export type AggregateBars = {
    _count: BarsCountAggregateOutputType | null
    _avg: BarsAvgAggregateOutputType | null
    _sum: BarsSumAggregateOutputType | null
    _min: BarsMinAggregateOutputType | null
    _max: BarsMaxAggregateOutputType | null
  }

  export type BarsAvgAggregateOutputType = {
    id: number | null
    bar_spacing: number | null
    border_radius: number | null
    border_bld: number | null
    legend_size: number | null
    axis_txt_size: number | null
    projectId: number | null
  }

  export type BarsSumAggregateOutputType = {
    id: number | null
    bar_spacing: number | null
    border_radius: number | null
    border_bld: number | null
    legend_size: number | null
    axis_txt_size: number | null
    projectId: number | null
  }

  export type BarsMinAggregateOutputType = {
    id: number | null
    bar_spacing: number | null
    border_radius: number | null
    border_bld: number | null
    border_color: string | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    isAxis: boolean | null
    axis_txt_size: number | null
    is_axis_txt_italic: boolean | null
    is_axis_txt_bold: boolean | null
    axis_txt_color: string | null
    axisX: string | null
    axisY: string | null
    projectId: number | null
  }

  export type BarsMaxAggregateOutputType = {
    id: number | null
    bar_spacing: number | null
    border_radius: number | null
    border_bld: number | null
    border_color: string | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    isAxis: boolean | null
    axis_txt_size: number | null
    is_axis_txt_italic: boolean | null
    is_axis_txt_bold: boolean | null
    axis_txt_color: string | null
    axisX: string | null
    axisY: string | null
    projectId: number | null
  }

  export type BarsCountAggregateOutputType = {
    id: number
    bar_spacing: number
    border_radius: number
    border_bld: number
    border_color: number
    isLegend: number
    legend_size: number
    is_legend_italic: number
    is_legend_bold: number
    legend_color: number
    isAxis: number
    axis_txt_size: number
    is_axis_txt_italic: number
    is_axis_txt_bold: number
    axis_txt_color: number
    axisX: number
    axisY: number
    projectId: number
    _all: number
  }


  export type BarsAvgAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    legend_size?: true
    axis_txt_size?: true
    projectId?: true
  }

  export type BarsSumAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    legend_size?: true
    axis_txt_size?: true
    projectId?: true
  }

  export type BarsMinAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    border_color?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    projectId?: true
  }

  export type BarsMaxAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    border_color?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    projectId?: true
  }

  export type BarsCountAggregateInputType = {
    id?: true
    bar_spacing?: true
    border_radius?: true
    border_bld?: true
    border_color?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    projectId?: true
    _all?: true
  }

  export type BarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bars to aggregate.
     */
    where?: BarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bars to fetch.
     */
    orderBy?: BarsOrderByWithRelationInput | BarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bars
    **/
    _count?: true | BarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarsMaxAggregateInputType
  }

  export type GetBarsAggregateType<T extends BarsAggregateArgs> = {
        [P in keyof T & keyof AggregateBars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBars[P]>
      : GetScalarType<T[P], AggregateBars[P]>
  }




  export type BarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarsWhereInput
    orderBy?: BarsOrderByWithAggregationInput | BarsOrderByWithAggregationInput[]
    by: BarsScalarFieldEnum[] | BarsScalarFieldEnum
    having?: BarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarsCountAggregateInputType | true
    _avg?: BarsAvgAggregateInputType
    _sum?: BarsSumAggregateInputType
    _min?: BarsMinAggregateInputType
    _max?: BarsMaxAggregateInputType
  }

  export type BarsGroupByOutputType = {
    id: number
    bar_spacing: number
    border_radius: number
    border_bld: number
    border_color: string
    isLegend: boolean
    legend_size: number
    is_legend_italic: boolean
    is_legend_bold: boolean
    legend_color: string
    isAxis: boolean
    axis_txt_size: number
    is_axis_txt_italic: boolean
    is_axis_txt_bold: boolean
    axis_txt_color: string
    axisX: string
    axisY: string
    projectId: number
    _count: BarsCountAggregateOutputType | null
    _avg: BarsAvgAggregateOutputType | null
    _sum: BarsSumAggregateOutputType | null
    _min: BarsMinAggregateOutputType | null
    _max: BarsMaxAggregateOutputType | null
  }

  type GetBarsGroupByPayload<T extends BarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarsGroupByOutputType[P]>
            : GetScalarType<T[P], BarsGroupByOutputType[P]>
        }
      >
    >


  export type BarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bar_spacing?: boolean
    border_radius?: boolean
    border_bld?: boolean
    border_color?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    isAxis?: boolean
    axis_txt_size?: boolean
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: boolean
    axisX?: boolean
    axisY?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bars"]>


  export type BarsSelectScalar = {
    id?: boolean
    bar_spacing?: boolean
    border_radius?: boolean
    border_bld?: boolean
    border_color?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    isAxis?: boolean
    axis_txt_size?: boolean
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: boolean
    axisX?: boolean
    axisY?: boolean
    projectId?: boolean
  }

  export type BarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $BarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bars"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bar_spacing: number
      border_radius: number
      border_bld: number
      border_color: string
      isLegend: boolean
      legend_size: number
      is_legend_italic: boolean
      is_legend_bold: boolean
      legend_color: string
      isAxis: boolean
      axis_txt_size: number
      is_axis_txt_italic: boolean
      is_axis_txt_bold: boolean
      axis_txt_color: string
      axisX: string
      axisY: string
      projectId: number
    }, ExtArgs["result"]["bars"]>
    composites: {}
  }

  type BarsGetPayload<S extends boolean | null | undefined | BarsDefaultArgs> = $Result.GetResult<Prisma.$BarsPayload, S>

  type BarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarsCountAggregateInputType | true
    }

  export interface BarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bars'], meta: { name: 'Bars' } }
    /**
     * Find zero or one Bars that matches the filter.
     * @param {BarsFindUniqueArgs} args - Arguments to find a Bars
     * @example
     * // Get one Bars
     * const bars = await prisma.bars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarsFindUniqueArgs>(args: SelectSubset<T, BarsFindUniqueArgs<ExtArgs>>): Prisma__BarsClient<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bars that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BarsFindUniqueOrThrowArgs} args - Arguments to find a Bars
     * @example
     * // Get one Bars
     * const bars = await prisma.bars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarsFindUniqueOrThrowArgs>(args: SelectSubset<T, BarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarsClient<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarsFindFirstArgs} args - Arguments to find a Bars
     * @example
     * // Get one Bars
     * const bars = await prisma.bars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarsFindFirstArgs>(args?: SelectSubset<T, BarsFindFirstArgs<ExtArgs>>): Prisma__BarsClient<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarsFindFirstOrThrowArgs} args - Arguments to find a Bars
     * @example
     * // Get one Bars
     * const bars = await prisma.bars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarsFindFirstOrThrowArgs>(args?: SelectSubset<T, BarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarsClient<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bars
     * const bars = await prisma.bars.findMany()
     * 
     * // Get first 10 Bars
     * const bars = await prisma.bars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barsWithIdOnly = await prisma.bars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarsFindManyArgs>(args?: SelectSubset<T, BarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bars.
     * @param {BarsCreateArgs} args - Arguments to create a Bars.
     * @example
     * // Create one Bars
     * const Bars = await prisma.bars.create({
     *   data: {
     *     // ... data to create a Bars
     *   }
     * })
     * 
     */
    create<T extends BarsCreateArgs>(args: SelectSubset<T, BarsCreateArgs<ExtArgs>>): Prisma__BarsClient<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bars.
     * @param {BarsCreateManyArgs} args - Arguments to create many Bars.
     * @example
     * // Create many Bars
     * const bars = await prisma.bars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarsCreateManyArgs>(args?: SelectSubset<T, BarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bars.
     * @param {BarsDeleteArgs} args - Arguments to delete one Bars.
     * @example
     * // Delete one Bars
     * const Bars = await prisma.bars.delete({
     *   where: {
     *     // ... filter to delete one Bars
     *   }
     * })
     * 
     */
    delete<T extends BarsDeleteArgs>(args: SelectSubset<T, BarsDeleteArgs<ExtArgs>>): Prisma__BarsClient<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bars.
     * @param {BarsUpdateArgs} args - Arguments to update one Bars.
     * @example
     * // Update one Bars
     * const bars = await prisma.bars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarsUpdateArgs>(args: SelectSubset<T, BarsUpdateArgs<ExtArgs>>): Prisma__BarsClient<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bars.
     * @param {BarsDeleteManyArgs} args - Arguments to filter Bars to delete.
     * @example
     * // Delete a few Bars
     * const { count } = await prisma.bars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarsDeleteManyArgs>(args?: SelectSubset<T, BarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bars
     * const bars = await prisma.bars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarsUpdateManyArgs>(args: SelectSubset<T, BarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bars.
     * @param {BarsUpsertArgs} args - Arguments to update or create a Bars.
     * @example
     * // Update or create a Bars
     * const bars = await prisma.bars.upsert({
     *   create: {
     *     // ... data to create a Bars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bars we want to update
     *   }
     * })
     */
    upsert<T extends BarsUpsertArgs>(args: SelectSubset<T, BarsUpsertArgs<ExtArgs>>): Prisma__BarsClient<$Result.GetResult<Prisma.$BarsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarsCountArgs} args - Arguments to filter Bars to count.
     * @example
     * // Count the number of Bars
     * const count = await prisma.bars.count({
     *   where: {
     *     // ... the filter for the Bars we want to count
     *   }
     * })
    **/
    count<T extends BarsCountArgs>(
      args?: Subset<T, BarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarsAggregateArgs>(args: Subset<T, BarsAggregateArgs>): Prisma.PrismaPromise<GetBarsAggregateType<T>>

    /**
     * Group by Bars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarsGroupByArgs['orderBy'] }
        : { orderBy?: BarsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bars model
   */
  readonly fields: BarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bars model
   */ 
  interface BarsFieldRefs {
    readonly id: FieldRef<"Bars", 'Int'>
    readonly bar_spacing: FieldRef<"Bars", 'Float'>
    readonly border_radius: FieldRef<"Bars", 'Int'>
    readonly border_bld: FieldRef<"Bars", 'Int'>
    readonly border_color: FieldRef<"Bars", 'String'>
    readonly isLegend: FieldRef<"Bars", 'Boolean'>
    readonly legend_size: FieldRef<"Bars", 'Int'>
    readonly is_legend_italic: FieldRef<"Bars", 'Boolean'>
    readonly is_legend_bold: FieldRef<"Bars", 'Boolean'>
    readonly legend_color: FieldRef<"Bars", 'String'>
    readonly isAxis: FieldRef<"Bars", 'Boolean'>
    readonly axis_txt_size: FieldRef<"Bars", 'Int'>
    readonly is_axis_txt_italic: FieldRef<"Bars", 'Boolean'>
    readonly is_axis_txt_bold: FieldRef<"Bars", 'Boolean'>
    readonly axis_txt_color: FieldRef<"Bars", 'String'>
    readonly axisX: FieldRef<"Bars", 'String'>
    readonly axisY: FieldRef<"Bars", 'String'>
    readonly projectId: FieldRef<"Bars", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bars findUnique
   */
  export type BarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    /**
     * Filter, which Bars to fetch.
     */
    where: BarsWhereUniqueInput
  }

  /**
   * Bars findUniqueOrThrow
   */
  export type BarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    /**
     * Filter, which Bars to fetch.
     */
    where: BarsWhereUniqueInput
  }

  /**
   * Bars findFirst
   */
  export type BarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    /**
     * Filter, which Bars to fetch.
     */
    where?: BarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bars to fetch.
     */
    orderBy?: BarsOrderByWithRelationInput | BarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bars.
     */
    cursor?: BarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bars.
     */
    distinct?: BarsScalarFieldEnum | BarsScalarFieldEnum[]
  }

  /**
   * Bars findFirstOrThrow
   */
  export type BarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    /**
     * Filter, which Bars to fetch.
     */
    where?: BarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bars to fetch.
     */
    orderBy?: BarsOrderByWithRelationInput | BarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bars.
     */
    cursor?: BarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bars.
     */
    distinct?: BarsScalarFieldEnum | BarsScalarFieldEnum[]
  }

  /**
   * Bars findMany
   */
  export type BarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    /**
     * Filter, which Bars to fetch.
     */
    where?: BarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bars to fetch.
     */
    orderBy?: BarsOrderByWithRelationInput | BarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bars.
     */
    cursor?: BarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bars.
     */
    skip?: number
    distinct?: BarsScalarFieldEnum | BarsScalarFieldEnum[]
  }

  /**
   * Bars create
   */
  export type BarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bars.
     */
    data: XOR<BarsCreateInput, BarsUncheckedCreateInput>
  }

  /**
   * Bars createMany
   */
  export type BarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bars.
     */
    data: BarsCreateManyInput | BarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bars update
   */
  export type BarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bars.
     */
    data: XOR<BarsUpdateInput, BarsUncheckedUpdateInput>
    /**
     * Choose, which Bars to update.
     */
    where: BarsWhereUniqueInput
  }

  /**
   * Bars updateMany
   */
  export type BarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bars.
     */
    data: XOR<BarsUpdateManyMutationInput, BarsUncheckedUpdateManyInput>
    /**
     * Filter which Bars to update
     */
    where?: BarsWhereInput
  }

  /**
   * Bars upsert
   */
  export type BarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bars to update in case it exists.
     */
    where: BarsWhereUniqueInput
    /**
     * In case the Bars found by the `where` argument doesn't exist, create a new Bars with this data.
     */
    create: XOR<BarsCreateInput, BarsUncheckedCreateInput>
    /**
     * In case the Bars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarsUpdateInput, BarsUncheckedUpdateInput>
  }

  /**
   * Bars delete
   */
  export type BarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
    /**
     * Filter which Bars to delete.
     */
    where: BarsWhereUniqueInput
  }

  /**
   * Bars deleteMany
   */
  export type BarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bars to delete
     */
    where?: BarsWhereInput
  }

  /**
   * Bars without action
   */
  export type BarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bars
     */
    select?: BarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarsInclude<ExtArgs> | null
  }


  /**
   * Model Pie
   */

  export type AggregatePie = {
    _count: PieCountAggregateOutputType | null
    _avg: PieAvgAggregateOutputType | null
    _sum: PieSumAggregateOutputType | null
    _min: PieMinAggregateOutputType | null
    _max: PieMaxAggregateOutputType | null
  }

  export type PieAvgAggregateOutputType = {
    id: number | null
    start_angle: number | null
    legend_size: number | null
    projectId: number | null
  }

  export type PieSumAggregateOutputType = {
    id: number | null
    start_angle: number | null
    legend_size: number | null
    projectId: number | null
  }

  export type PieMinAggregateOutputType = {
    id: number | null
    start_angle: number | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    projectId: number | null
  }

  export type PieMaxAggregateOutputType = {
    id: number | null
    start_angle: number | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    projectId: number | null
  }

  export type PieCountAggregateOutputType = {
    id: number
    start_angle: number
    isLegend: number
    legend_size: number
    is_legend_italic: number
    is_legend_bold: number
    legend_color: number
    projectId: number
    _all: number
  }


  export type PieAvgAggregateInputType = {
    id?: true
    start_angle?: true
    legend_size?: true
    projectId?: true
  }

  export type PieSumAggregateInputType = {
    id?: true
    start_angle?: true
    legend_size?: true
    projectId?: true
  }

  export type PieMinAggregateInputType = {
    id?: true
    start_angle?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    projectId?: true
  }

  export type PieMaxAggregateInputType = {
    id?: true
    start_angle?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    projectId?: true
  }

  export type PieCountAggregateInputType = {
    id?: true
    start_angle?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    projectId?: true
    _all?: true
  }

  export type PieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pie to aggregate.
     */
    where?: PieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pies to fetch.
     */
    orderBy?: PieOrderByWithRelationInput | PieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pies
    **/
    _count?: true | PieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PieMaxAggregateInputType
  }

  export type GetPieAggregateType<T extends PieAggregateArgs> = {
        [P in keyof T & keyof AggregatePie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePie[P]>
      : GetScalarType<T[P], AggregatePie[P]>
  }




  export type PieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PieWhereInput
    orderBy?: PieOrderByWithAggregationInput | PieOrderByWithAggregationInput[]
    by: PieScalarFieldEnum[] | PieScalarFieldEnum
    having?: PieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PieCountAggregateInputType | true
    _avg?: PieAvgAggregateInputType
    _sum?: PieSumAggregateInputType
    _min?: PieMinAggregateInputType
    _max?: PieMaxAggregateInputType
  }

  export type PieGroupByOutputType = {
    id: number
    start_angle: number
    isLegend: boolean
    legend_size: number
    is_legend_italic: boolean
    is_legend_bold: boolean
    legend_color: string
    projectId: number
    _count: PieCountAggregateOutputType | null
    _avg: PieAvgAggregateOutputType | null
    _sum: PieSumAggregateOutputType | null
    _min: PieMinAggregateOutputType | null
    _max: PieMaxAggregateOutputType | null
  }

  type GetPieGroupByPayload<T extends PieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PieGroupByOutputType[P]>
            : GetScalarType<T[P], PieGroupByOutputType[P]>
        }
      >
    >


  export type PieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_angle?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pie"]>


  export type PieSelectScalar = {
    id?: boolean
    start_angle?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    projectId?: boolean
  }

  export type PieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $PiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pie"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start_angle: number
      isLegend: boolean
      legend_size: number
      is_legend_italic: boolean
      is_legend_bold: boolean
      legend_color: string
      projectId: number
    }, ExtArgs["result"]["pie"]>
    composites: {}
  }

  type PieGetPayload<S extends boolean | null | undefined | PieDefaultArgs> = $Result.GetResult<Prisma.$PiePayload, S>

  type PieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PieCountAggregateInputType | true
    }

  export interface PieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pie'], meta: { name: 'Pie' } }
    /**
     * Find zero or one Pie that matches the filter.
     * @param {PieFindUniqueArgs} args - Arguments to find a Pie
     * @example
     * // Get one Pie
     * const pie = await prisma.pie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PieFindUniqueArgs>(args: SelectSubset<T, PieFindUniqueArgs<ExtArgs>>): Prisma__PieClient<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pie that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PieFindUniqueOrThrowArgs} args - Arguments to find a Pie
     * @example
     * // Get one Pie
     * const pie = await prisma.pie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PieFindUniqueOrThrowArgs>(args: SelectSubset<T, PieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PieClient<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieFindFirstArgs} args - Arguments to find a Pie
     * @example
     * // Get one Pie
     * const pie = await prisma.pie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PieFindFirstArgs>(args?: SelectSubset<T, PieFindFirstArgs<ExtArgs>>): Prisma__PieClient<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieFindFirstOrThrowArgs} args - Arguments to find a Pie
     * @example
     * // Get one Pie
     * const pie = await prisma.pie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PieFindFirstOrThrowArgs>(args?: SelectSubset<T, PieFindFirstOrThrowArgs<ExtArgs>>): Prisma__PieClient<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pies
     * const pies = await prisma.pie.findMany()
     * 
     * // Get first 10 Pies
     * const pies = await prisma.pie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pieWithIdOnly = await prisma.pie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PieFindManyArgs>(args?: SelectSubset<T, PieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pie.
     * @param {PieCreateArgs} args - Arguments to create a Pie.
     * @example
     * // Create one Pie
     * const Pie = await prisma.pie.create({
     *   data: {
     *     // ... data to create a Pie
     *   }
     * })
     * 
     */
    create<T extends PieCreateArgs>(args: SelectSubset<T, PieCreateArgs<ExtArgs>>): Prisma__PieClient<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pies.
     * @param {PieCreateManyArgs} args - Arguments to create many Pies.
     * @example
     * // Create many Pies
     * const pie = await prisma.pie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PieCreateManyArgs>(args?: SelectSubset<T, PieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pie.
     * @param {PieDeleteArgs} args - Arguments to delete one Pie.
     * @example
     * // Delete one Pie
     * const Pie = await prisma.pie.delete({
     *   where: {
     *     // ... filter to delete one Pie
     *   }
     * })
     * 
     */
    delete<T extends PieDeleteArgs>(args: SelectSubset<T, PieDeleteArgs<ExtArgs>>): Prisma__PieClient<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pie.
     * @param {PieUpdateArgs} args - Arguments to update one Pie.
     * @example
     * // Update one Pie
     * const pie = await prisma.pie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PieUpdateArgs>(args: SelectSubset<T, PieUpdateArgs<ExtArgs>>): Prisma__PieClient<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pies.
     * @param {PieDeleteManyArgs} args - Arguments to filter Pies to delete.
     * @example
     * // Delete a few Pies
     * const { count } = await prisma.pie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PieDeleteManyArgs>(args?: SelectSubset<T, PieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pies
     * const pie = await prisma.pie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PieUpdateManyArgs>(args: SelectSubset<T, PieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pie.
     * @param {PieUpsertArgs} args - Arguments to update or create a Pie.
     * @example
     * // Update or create a Pie
     * const pie = await prisma.pie.upsert({
     *   create: {
     *     // ... data to create a Pie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pie we want to update
     *   }
     * })
     */
    upsert<T extends PieUpsertArgs>(args: SelectSubset<T, PieUpsertArgs<ExtArgs>>): Prisma__PieClient<$Result.GetResult<Prisma.$PiePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieCountArgs} args - Arguments to filter Pies to count.
     * @example
     * // Count the number of Pies
     * const count = await prisma.pie.count({
     *   where: {
     *     // ... the filter for the Pies we want to count
     *   }
     * })
    **/
    count<T extends PieCountArgs>(
      args?: Subset<T, PieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PieAggregateArgs>(args: Subset<T, PieAggregateArgs>): Prisma.PrismaPromise<GetPieAggregateType<T>>

    /**
     * Group by Pie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PieGroupByArgs['orderBy'] }
        : { orderBy?: PieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pie model
   */
  readonly fields: PieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pie model
   */ 
  interface PieFieldRefs {
    readonly id: FieldRef<"Pie", 'Int'>
    readonly start_angle: FieldRef<"Pie", 'Int'>
    readonly isLegend: FieldRef<"Pie", 'Boolean'>
    readonly legend_size: FieldRef<"Pie", 'Int'>
    readonly is_legend_italic: FieldRef<"Pie", 'Boolean'>
    readonly is_legend_bold: FieldRef<"Pie", 'Boolean'>
    readonly legend_color: FieldRef<"Pie", 'String'>
    readonly projectId: FieldRef<"Pie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pie findUnique
   */
  export type PieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    /**
     * Filter, which Pie to fetch.
     */
    where: PieWhereUniqueInput
  }

  /**
   * Pie findUniqueOrThrow
   */
  export type PieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    /**
     * Filter, which Pie to fetch.
     */
    where: PieWhereUniqueInput
  }

  /**
   * Pie findFirst
   */
  export type PieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    /**
     * Filter, which Pie to fetch.
     */
    where?: PieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pies to fetch.
     */
    orderBy?: PieOrderByWithRelationInput | PieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pies.
     */
    cursor?: PieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pies.
     */
    distinct?: PieScalarFieldEnum | PieScalarFieldEnum[]
  }

  /**
   * Pie findFirstOrThrow
   */
  export type PieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    /**
     * Filter, which Pie to fetch.
     */
    where?: PieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pies to fetch.
     */
    orderBy?: PieOrderByWithRelationInput | PieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pies.
     */
    cursor?: PieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pies.
     */
    distinct?: PieScalarFieldEnum | PieScalarFieldEnum[]
  }

  /**
   * Pie findMany
   */
  export type PieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    /**
     * Filter, which Pies to fetch.
     */
    where?: PieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pies to fetch.
     */
    orderBy?: PieOrderByWithRelationInput | PieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pies.
     */
    cursor?: PieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pies.
     */
    skip?: number
    distinct?: PieScalarFieldEnum | PieScalarFieldEnum[]
  }

  /**
   * Pie create
   */
  export type PieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    /**
     * The data needed to create a Pie.
     */
    data: XOR<PieCreateInput, PieUncheckedCreateInput>
  }

  /**
   * Pie createMany
   */
  export type PieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pies.
     */
    data: PieCreateManyInput | PieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pie update
   */
  export type PieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    /**
     * The data needed to update a Pie.
     */
    data: XOR<PieUpdateInput, PieUncheckedUpdateInput>
    /**
     * Choose, which Pie to update.
     */
    where: PieWhereUniqueInput
  }

  /**
   * Pie updateMany
   */
  export type PieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pies.
     */
    data: XOR<PieUpdateManyMutationInput, PieUncheckedUpdateManyInput>
    /**
     * Filter which Pies to update
     */
    where?: PieWhereInput
  }

  /**
   * Pie upsert
   */
  export type PieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    /**
     * The filter to search for the Pie to update in case it exists.
     */
    where: PieWhereUniqueInput
    /**
     * In case the Pie found by the `where` argument doesn't exist, create a new Pie with this data.
     */
    create: XOR<PieCreateInput, PieUncheckedCreateInput>
    /**
     * In case the Pie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PieUpdateInput, PieUncheckedUpdateInput>
  }

  /**
   * Pie delete
   */
  export type PieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
    /**
     * Filter which Pie to delete.
     */
    where: PieWhereUniqueInput
  }

  /**
   * Pie deleteMany
   */
  export type PieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pies to delete
     */
    where?: PieWhereInput
  }

  /**
   * Pie without action
   */
  export type PieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pie
     */
    select?: PieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PieInclude<ExtArgs> | null
  }


  /**
   * Model Donut
   */

  export type AggregateDonut = {
    _count: DonutCountAggregateOutputType | null
    _avg: DonutAvgAggregateOutputType | null
    _sum: DonutSumAggregateOutputType | null
    _min: DonutMinAggregateOutputType | null
    _max: DonutMaxAggregateOutputType | null
  }

  export type DonutAvgAggregateOutputType = {
    id: number | null
    start_angle: number | null
    inner_radius: number | null
    legend_size: number | null
    projectId: number | null
  }

  export type DonutSumAggregateOutputType = {
    id: number | null
    start_angle: number | null
    inner_radius: number | null
    legend_size: number | null
    projectId: number | null
  }

  export type DonutMinAggregateOutputType = {
    id: number | null
    start_angle: number | null
    inner_radius: number | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    projectId: number | null
  }

  export type DonutMaxAggregateOutputType = {
    id: number | null
    start_angle: number | null
    inner_radius: number | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    projectId: number | null
  }

  export type DonutCountAggregateOutputType = {
    id: number
    start_angle: number
    inner_radius: number
    isLegend: number
    legend_size: number
    is_legend_italic: number
    is_legend_bold: number
    legend_color: number
    projectId: number
    _all: number
  }


  export type DonutAvgAggregateInputType = {
    id?: true
    start_angle?: true
    inner_radius?: true
    legend_size?: true
    projectId?: true
  }

  export type DonutSumAggregateInputType = {
    id?: true
    start_angle?: true
    inner_radius?: true
    legend_size?: true
    projectId?: true
  }

  export type DonutMinAggregateInputType = {
    id?: true
    start_angle?: true
    inner_radius?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    projectId?: true
  }

  export type DonutMaxAggregateInputType = {
    id?: true
    start_angle?: true
    inner_radius?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    projectId?: true
  }

  export type DonutCountAggregateInputType = {
    id?: true
    start_angle?: true
    inner_radius?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    projectId?: true
    _all?: true
  }

  export type DonutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donut to aggregate.
     */
    where?: DonutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donuts to fetch.
     */
    orderBy?: DonutOrderByWithRelationInput | DonutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donuts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donuts
    **/
    _count?: true | DonutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonutMaxAggregateInputType
  }

  export type GetDonutAggregateType<T extends DonutAggregateArgs> = {
        [P in keyof T & keyof AggregateDonut]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonut[P]>
      : GetScalarType<T[P], AggregateDonut[P]>
  }




  export type DonutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonutWhereInput
    orderBy?: DonutOrderByWithAggregationInput | DonutOrderByWithAggregationInput[]
    by: DonutScalarFieldEnum[] | DonutScalarFieldEnum
    having?: DonutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonutCountAggregateInputType | true
    _avg?: DonutAvgAggregateInputType
    _sum?: DonutSumAggregateInputType
    _min?: DonutMinAggregateInputType
    _max?: DonutMaxAggregateInputType
  }

  export type DonutGroupByOutputType = {
    id: number
    start_angle: number
    inner_radius: number
    isLegend: boolean
    legend_size: number
    is_legend_italic: boolean
    is_legend_bold: boolean
    legend_color: string
    projectId: number
    _count: DonutCountAggregateOutputType | null
    _avg: DonutAvgAggregateOutputType | null
    _sum: DonutSumAggregateOutputType | null
    _min: DonutMinAggregateOutputType | null
    _max: DonutMaxAggregateOutputType | null
  }

  type GetDonutGroupByPayload<T extends DonutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonutGroupByOutputType[P]>
            : GetScalarType<T[P], DonutGroupByOutputType[P]>
        }
      >
    >


  export type DonutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_angle?: boolean
    inner_radius?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donut"]>


  export type DonutSelectScalar = {
    id?: boolean
    start_angle?: boolean
    inner_radius?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    projectId?: boolean
  }

  export type DonutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $DonutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donut"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start_angle: number
      inner_radius: number
      isLegend: boolean
      legend_size: number
      is_legend_italic: boolean
      is_legend_bold: boolean
      legend_color: string
      projectId: number
    }, ExtArgs["result"]["donut"]>
    composites: {}
  }

  type DonutGetPayload<S extends boolean | null | undefined | DonutDefaultArgs> = $Result.GetResult<Prisma.$DonutPayload, S>

  type DonutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DonutFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DonutCountAggregateInputType | true
    }

  export interface DonutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donut'], meta: { name: 'Donut' } }
    /**
     * Find zero or one Donut that matches the filter.
     * @param {DonutFindUniqueArgs} args - Arguments to find a Donut
     * @example
     * // Get one Donut
     * const donut = await prisma.donut.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonutFindUniqueArgs>(args: SelectSubset<T, DonutFindUniqueArgs<ExtArgs>>): Prisma__DonutClient<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Donut that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DonutFindUniqueOrThrowArgs} args - Arguments to find a Donut
     * @example
     * // Get one Donut
     * const donut = await prisma.donut.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonutFindUniqueOrThrowArgs>(args: SelectSubset<T, DonutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonutClient<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Donut that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonutFindFirstArgs} args - Arguments to find a Donut
     * @example
     * // Get one Donut
     * const donut = await prisma.donut.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonutFindFirstArgs>(args?: SelectSubset<T, DonutFindFirstArgs<ExtArgs>>): Prisma__DonutClient<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Donut that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonutFindFirstOrThrowArgs} args - Arguments to find a Donut
     * @example
     * // Get one Donut
     * const donut = await prisma.donut.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonutFindFirstOrThrowArgs>(args?: SelectSubset<T, DonutFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonutClient<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Donuts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donuts
     * const donuts = await prisma.donut.findMany()
     * 
     * // Get first 10 Donuts
     * const donuts = await prisma.donut.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donutWithIdOnly = await prisma.donut.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonutFindManyArgs>(args?: SelectSubset<T, DonutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Donut.
     * @param {DonutCreateArgs} args - Arguments to create a Donut.
     * @example
     * // Create one Donut
     * const Donut = await prisma.donut.create({
     *   data: {
     *     // ... data to create a Donut
     *   }
     * })
     * 
     */
    create<T extends DonutCreateArgs>(args: SelectSubset<T, DonutCreateArgs<ExtArgs>>): Prisma__DonutClient<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Donuts.
     * @param {DonutCreateManyArgs} args - Arguments to create many Donuts.
     * @example
     * // Create many Donuts
     * const donut = await prisma.donut.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonutCreateManyArgs>(args?: SelectSubset<T, DonutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Donut.
     * @param {DonutDeleteArgs} args - Arguments to delete one Donut.
     * @example
     * // Delete one Donut
     * const Donut = await prisma.donut.delete({
     *   where: {
     *     // ... filter to delete one Donut
     *   }
     * })
     * 
     */
    delete<T extends DonutDeleteArgs>(args: SelectSubset<T, DonutDeleteArgs<ExtArgs>>): Prisma__DonutClient<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Donut.
     * @param {DonutUpdateArgs} args - Arguments to update one Donut.
     * @example
     * // Update one Donut
     * const donut = await prisma.donut.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonutUpdateArgs>(args: SelectSubset<T, DonutUpdateArgs<ExtArgs>>): Prisma__DonutClient<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Donuts.
     * @param {DonutDeleteManyArgs} args - Arguments to filter Donuts to delete.
     * @example
     * // Delete a few Donuts
     * const { count } = await prisma.donut.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonutDeleteManyArgs>(args?: SelectSubset<T, DonutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donuts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donuts
     * const donut = await prisma.donut.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonutUpdateManyArgs>(args: SelectSubset<T, DonutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Donut.
     * @param {DonutUpsertArgs} args - Arguments to update or create a Donut.
     * @example
     * // Update or create a Donut
     * const donut = await prisma.donut.upsert({
     *   create: {
     *     // ... data to create a Donut
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donut we want to update
     *   }
     * })
     */
    upsert<T extends DonutUpsertArgs>(args: SelectSubset<T, DonutUpsertArgs<ExtArgs>>): Prisma__DonutClient<$Result.GetResult<Prisma.$DonutPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Donuts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonutCountArgs} args - Arguments to filter Donuts to count.
     * @example
     * // Count the number of Donuts
     * const count = await prisma.donut.count({
     *   where: {
     *     // ... the filter for the Donuts we want to count
     *   }
     * })
    **/
    count<T extends DonutCountArgs>(
      args?: Subset<T, DonutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonutAggregateArgs>(args: Subset<T, DonutAggregateArgs>): Prisma.PrismaPromise<GetDonutAggregateType<T>>

    /**
     * Group by Donut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonutGroupByArgs['orderBy'] }
        : { orderBy?: DonutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donut model
   */
  readonly fields: DonutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donut.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donut model
   */ 
  interface DonutFieldRefs {
    readonly id: FieldRef<"Donut", 'Int'>
    readonly start_angle: FieldRef<"Donut", 'Int'>
    readonly inner_radius: FieldRef<"Donut", 'Int'>
    readonly isLegend: FieldRef<"Donut", 'Boolean'>
    readonly legend_size: FieldRef<"Donut", 'Int'>
    readonly is_legend_italic: FieldRef<"Donut", 'Boolean'>
    readonly is_legend_bold: FieldRef<"Donut", 'Boolean'>
    readonly legend_color: FieldRef<"Donut", 'String'>
    readonly projectId: FieldRef<"Donut", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Donut findUnique
   */
  export type DonutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    /**
     * Filter, which Donut to fetch.
     */
    where: DonutWhereUniqueInput
  }

  /**
   * Donut findUniqueOrThrow
   */
  export type DonutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    /**
     * Filter, which Donut to fetch.
     */
    where: DonutWhereUniqueInput
  }

  /**
   * Donut findFirst
   */
  export type DonutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    /**
     * Filter, which Donut to fetch.
     */
    where?: DonutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donuts to fetch.
     */
    orderBy?: DonutOrderByWithRelationInput | DonutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donuts.
     */
    cursor?: DonutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donuts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donuts.
     */
    distinct?: DonutScalarFieldEnum | DonutScalarFieldEnum[]
  }

  /**
   * Donut findFirstOrThrow
   */
  export type DonutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    /**
     * Filter, which Donut to fetch.
     */
    where?: DonutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donuts to fetch.
     */
    orderBy?: DonutOrderByWithRelationInput | DonutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donuts.
     */
    cursor?: DonutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donuts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donuts.
     */
    distinct?: DonutScalarFieldEnum | DonutScalarFieldEnum[]
  }

  /**
   * Donut findMany
   */
  export type DonutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    /**
     * Filter, which Donuts to fetch.
     */
    where?: DonutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donuts to fetch.
     */
    orderBy?: DonutOrderByWithRelationInput | DonutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donuts.
     */
    cursor?: DonutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donuts.
     */
    skip?: number
    distinct?: DonutScalarFieldEnum | DonutScalarFieldEnum[]
  }

  /**
   * Donut create
   */
  export type DonutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    /**
     * The data needed to create a Donut.
     */
    data: XOR<DonutCreateInput, DonutUncheckedCreateInput>
  }

  /**
   * Donut createMany
   */
  export type DonutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donuts.
     */
    data: DonutCreateManyInput | DonutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donut update
   */
  export type DonutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    /**
     * The data needed to update a Donut.
     */
    data: XOR<DonutUpdateInput, DonutUncheckedUpdateInput>
    /**
     * Choose, which Donut to update.
     */
    where: DonutWhereUniqueInput
  }

  /**
   * Donut updateMany
   */
  export type DonutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donuts.
     */
    data: XOR<DonutUpdateManyMutationInput, DonutUncheckedUpdateManyInput>
    /**
     * Filter which Donuts to update
     */
    where?: DonutWhereInput
  }

  /**
   * Donut upsert
   */
  export type DonutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    /**
     * The filter to search for the Donut to update in case it exists.
     */
    where: DonutWhereUniqueInput
    /**
     * In case the Donut found by the `where` argument doesn't exist, create a new Donut with this data.
     */
    create: XOR<DonutCreateInput, DonutUncheckedCreateInput>
    /**
     * In case the Donut was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonutUpdateInput, DonutUncheckedUpdateInput>
  }

  /**
   * Donut delete
   */
  export type DonutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
    /**
     * Filter which Donut to delete.
     */
    where: DonutWhereUniqueInput
  }

  /**
   * Donut deleteMany
   */
  export type DonutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donuts to delete
     */
    where?: DonutWhereInput
  }

  /**
   * Donut without action
   */
  export type DonutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donut
     */
    select?: DonutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonutInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    id: number | null
    axis_txt_size: number | null
    legend_size: number | null
    thickness: number | null
    projectId: number | null
  }

  export type AreaSumAggregateOutputType = {
    id: number | null
    axis_txt_size: number | null
    legend_size: number | null
    thickness: number | null
    projectId: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: number | null
    show_pointer_mark: boolean | null
    isAxis: boolean | null
    axis_txt_size: number | null
    is_axis_txt_italic: boolean | null
    is_axis_txt_bold: boolean | null
    axis_txt_color: string | null
    axisX: string | null
    axisY: string | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    thickness: number | null
    is_line_smoth: boolean | null
    projectId: number | null
  }

  export type AreaMaxAggregateOutputType = {
    id: number | null
    show_pointer_mark: boolean | null
    isAxis: boolean | null
    axis_txt_size: number | null
    is_axis_txt_italic: boolean | null
    is_axis_txt_bold: boolean | null
    axis_txt_color: string | null
    axisX: string | null
    axisY: string | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    thickness: number | null
    is_line_smoth: boolean | null
    projectId: number | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    show_pointer_mark: number
    isAxis: number
    axis_txt_size: number
    is_axis_txt_italic: number
    is_axis_txt_bold: number
    axis_txt_color: number
    axisX: number
    axisY: number
    isLegend: number
    legend_size: number
    is_legend_italic: number
    is_legend_bold: number
    legend_color: number
    thickness: number
    is_line_smoth: number
    projectId: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    id?: true
    axis_txt_size?: true
    legend_size?: true
    thickness?: true
    projectId?: true
  }

  export type AreaSumAggregateInputType = {
    id?: true
    axis_txt_size?: true
    legend_size?: true
    thickness?: true
    projectId?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    show_pointer_mark?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    thickness?: true
    is_line_smoth?: true
    projectId?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    show_pointer_mark?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    thickness?: true
    is_line_smoth?: true
    projectId?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    show_pointer_mark?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    thickness?: true
    is_line_smoth?: true
    projectId?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: number
    show_pointer_mark: boolean
    isAxis: boolean
    axis_txt_size: number
    is_axis_txt_italic: boolean
    is_axis_txt_bold: boolean
    axis_txt_color: string
    axisX: string
    axisY: string
    isLegend: boolean
    legend_size: number
    is_legend_italic: boolean
    is_legend_bold: boolean
    legend_color: string
    thickness: number
    is_line_smoth: boolean
    projectId: number
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: boolean
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: boolean
    axisX?: boolean
    axisY?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    thickness?: boolean
    is_line_smoth?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>


  export type AreaSelectScalar = {
    id?: boolean
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: boolean
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: boolean
    axisX?: boolean
    axisY?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    thickness?: boolean
    is_line_smoth?: boolean
    projectId?: boolean
  }

  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      show_pointer_mark: boolean
      isAxis: boolean
      axis_txt_size: number
      is_axis_txt_italic: boolean
      is_axis_txt_bold: boolean
      axis_txt_color: string
      axisX: string
      axisY: string
      isLegend: boolean
      legend_size: number
      is_legend_italic: boolean
      is_legend_bold: boolean
      legend_color: string
      thickness: number
      is_line_smoth: boolean
      projectId: number
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */ 
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'Int'>
    readonly show_pointer_mark: FieldRef<"Area", 'Boolean'>
    readonly isAxis: FieldRef<"Area", 'Boolean'>
    readonly axis_txt_size: FieldRef<"Area", 'Int'>
    readonly is_axis_txt_italic: FieldRef<"Area", 'Boolean'>
    readonly is_axis_txt_bold: FieldRef<"Area", 'Boolean'>
    readonly axis_txt_color: FieldRef<"Area", 'String'>
    readonly axisX: FieldRef<"Area", 'String'>
    readonly axisY: FieldRef<"Area", 'String'>
    readonly isLegend: FieldRef<"Area", 'Boolean'>
    readonly legend_size: FieldRef<"Area", 'Int'>
    readonly is_legend_italic: FieldRef<"Area", 'Boolean'>
    readonly is_legend_bold: FieldRef<"Area", 'Boolean'>
    readonly legend_color: FieldRef<"Area", 'String'>
    readonly thickness: FieldRef<"Area", 'Int'>
    readonly is_line_smoth: FieldRef<"Area", 'Boolean'>
    readonly projectId: FieldRef<"Area", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Line
   */

  export type AggregateLine = {
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  export type LineAvgAggregateOutputType = {
    id: number | null
    axis_txt_size: number | null
    legend_size: number | null
    thickness: number | null
    projectId: number | null
  }

  export type LineSumAggregateOutputType = {
    id: number | null
    axis_txt_size: number | null
    legend_size: number | null
    thickness: number | null
    projectId: number | null
  }

  export type LineMinAggregateOutputType = {
    id: number | null
    show_pointer_mark: boolean | null
    isAxis: boolean | null
    axis_txt_size: number | null
    is_axis_txt_italic: boolean | null
    is_axis_txt_bold: boolean | null
    axis_txt_color: string | null
    axisX: string | null
    axisY: string | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    thickness: number | null
    is_line_smoth: boolean | null
    projectId: number | null
  }

  export type LineMaxAggregateOutputType = {
    id: number | null
    show_pointer_mark: boolean | null
    isAxis: boolean | null
    axis_txt_size: number | null
    is_axis_txt_italic: boolean | null
    is_axis_txt_bold: boolean | null
    axis_txt_color: string | null
    axisX: string | null
    axisY: string | null
    isLegend: boolean | null
    legend_size: number | null
    is_legend_italic: boolean | null
    is_legend_bold: boolean | null
    legend_color: string | null
    thickness: number | null
    is_line_smoth: boolean | null
    projectId: number | null
  }

  export type LineCountAggregateOutputType = {
    id: number
    show_pointer_mark: number
    isAxis: number
    axis_txt_size: number
    is_axis_txt_italic: number
    is_axis_txt_bold: number
    axis_txt_color: number
    axisX: number
    axisY: number
    isLegend: number
    legend_size: number
    is_legend_italic: number
    is_legend_bold: number
    legend_color: number
    thickness: number
    is_line_smoth: number
    projectId: number
    _all: number
  }


  export type LineAvgAggregateInputType = {
    id?: true
    axis_txt_size?: true
    legend_size?: true
    thickness?: true
    projectId?: true
  }

  export type LineSumAggregateInputType = {
    id?: true
    axis_txt_size?: true
    legend_size?: true
    thickness?: true
    projectId?: true
  }

  export type LineMinAggregateInputType = {
    id?: true
    show_pointer_mark?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    thickness?: true
    is_line_smoth?: true
    projectId?: true
  }

  export type LineMaxAggregateInputType = {
    id?: true
    show_pointer_mark?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    thickness?: true
    is_line_smoth?: true
    projectId?: true
  }

  export type LineCountAggregateInputType = {
    id?: true
    show_pointer_mark?: true
    isAxis?: true
    axis_txt_size?: true
    is_axis_txt_italic?: true
    is_axis_txt_bold?: true
    axis_txt_color?: true
    axisX?: true
    axisY?: true
    isLegend?: true
    legend_size?: true
    is_legend_italic?: true
    is_legend_bold?: true
    legend_color?: true
    thickness?: true
    is_line_smoth?: true
    projectId?: true
    _all?: true
  }

  export type LineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Line to aggregate.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lines
    **/
    _count?: true | LineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineMaxAggregateInputType
  }

  export type GetLineAggregateType<T extends LineAggregateArgs> = {
        [P in keyof T & keyof AggregateLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLine[P]>
      : GetScalarType<T[P], AggregateLine[P]>
  }




  export type LineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineWhereInput
    orderBy?: LineOrderByWithAggregationInput | LineOrderByWithAggregationInput[]
    by: LineScalarFieldEnum[] | LineScalarFieldEnum
    having?: LineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineCountAggregateInputType | true
    _avg?: LineAvgAggregateInputType
    _sum?: LineSumAggregateInputType
    _min?: LineMinAggregateInputType
    _max?: LineMaxAggregateInputType
  }

  export type LineGroupByOutputType = {
    id: number
    show_pointer_mark: boolean
    isAxis: boolean
    axis_txt_size: number
    is_axis_txt_italic: boolean
    is_axis_txt_bold: boolean
    axis_txt_color: string
    axisX: string
    axisY: string
    isLegend: boolean
    legend_size: number
    is_legend_italic: boolean
    is_legend_bold: boolean
    legend_color: string
    thickness: number
    is_line_smoth: boolean
    projectId: number
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  type GetLineGroupByPayload<T extends LineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineGroupByOutputType[P]>
            : GetScalarType<T[P], LineGroupByOutputType[P]>
        }
      >
    >


  export type LineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: boolean
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: boolean
    axisX?: boolean
    axisY?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    thickness?: boolean
    is_line_smoth?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>


  export type LineSelectScalar = {
    id?: boolean
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: boolean
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: boolean
    axisX?: boolean
    axisY?: boolean
    isLegend?: boolean
    legend_size?: boolean
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: boolean
    thickness?: boolean
    is_line_smoth?: boolean
    projectId?: boolean
  }

  export type LineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $LinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Line"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      show_pointer_mark: boolean
      isAxis: boolean
      axis_txt_size: number
      is_axis_txt_italic: boolean
      is_axis_txt_bold: boolean
      axis_txt_color: string
      axisX: string
      axisY: string
      isLegend: boolean
      legend_size: number
      is_legend_italic: boolean
      is_legend_bold: boolean
      legend_color: string
      thickness: number
      is_line_smoth: boolean
      projectId: number
    }, ExtArgs["result"]["line"]>
    composites: {}
  }

  type LineGetPayload<S extends boolean | null | undefined | LineDefaultArgs> = $Result.GetResult<Prisma.$LinePayload, S>

  type LineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LineCountAggregateInputType | true
    }

  export interface LineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Line'], meta: { name: 'Line' } }
    /**
     * Find zero or one Line that matches the filter.
     * @param {LineFindUniqueArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineFindUniqueArgs>(args: SelectSubset<T, LineFindUniqueArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Line that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LineFindUniqueOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineFindUniqueOrThrowArgs>(args: SelectSubset<T, LineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Line that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineFindFirstArgs>(args?: SelectSubset<T, LineFindFirstArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Line that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineFindFirstOrThrowArgs>(args?: SelectSubset<T, LineFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lines
     * const lines = await prisma.line.findMany()
     * 
     * // Get first 10 Lines
     * const lines = await prisma.line.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineWithIdOnly = await prisma.line.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineFindManyArgs>(args?: SelectSubset<T, LineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Line.
     * @param {LineCreateArgs} args - Arguments to create a Line.
     * @example
     * // Create one Line
     * const Line = await prisma.line.create({
     *   data: {
     *     // ... data to create a Line
     *   }
     * })
     * 
     */
    create<T extends LineCreateArgs>(args: SelectSubset<T, LineCreateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lines.
     * @param {LineCreateManyArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineCreateManyArgs>(args?: SelectSubset<T, LineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Line.
     * @param {LineDeleteArgs} args - Arguments to delete one Line.
     * @example
     * // Delete one Line
     * const Line = await prisma.line.delete({
     *   where: {
     *     // ... filter to delete one Line
     *   }
     * })
     * 
     */
    delete<T extends LineDeleteArgs>(args: SelectSubset<T, LineDeleteArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Line.
     * @param {LineUpdateArgs} args - Arguments to update one Line.
     * @example
     * // Update one Line
     * const line = await prisma.line.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineUpdateArgs>(args: SelectSubset<T, LineUpdateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lines.
     * @param {LineDeleteManyArgs} args - Arguments to filter Lines to delete.
     * @example
     * // Delete a few Lines
     * const { count } = await prisma.line.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineDeleteManyArgs>(args?: SelectSubset<T, LineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineUpdateManyArgs>(args: SelectSubset<T, LineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Line.
     * @param {LineUpsertArgs} args - Arguments to update or create a Line.
     * @example
     * // Update or create a Line
     * const line = await prisma.line.upsert({
     *   create: {
     *     // ... data to create a Line
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Line we want to update
     *   }
     * })
     */
    upsert<T extends LineUpsertArgs>(args: SelectSubset<T, LineUpsertArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineCountArgs} args - Arguments to filter Lines to count.
     * @example
     * // Count the number of Lines
     * const count = await prisma.line.count({
     *   where: {
     *     // ... the filter for the Lines we want to count
     *   }
     * })
    **/
    count<T extends LineCountArgs>(
      args?: Subset<T, LineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LineAggregateArgs>(args: Subset<T, LineAggregateArgs>): Prisma.PrismaPromise<GetLineAggregateType<T>>

    /**
     * Group by Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineGroupByArgs['orderBy'] }
        : { orderBy?: LineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Line model
   */
  readonly fields: LineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Line.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Line model
   */ 
  interface LineFieldRefs {
    readonly id: FieldRef<"Line", 'Int'>
    readonly show_pointer_mark: FieldRef<"Line", 'Boolean'>
    readonly isAxis: FieldRef<"Line", 'Boolean'>
    readonly axis_txt_size: FieldRef<"Line", 'Int'>
    readonly is_axis_txt_italic: FieldRef<"Line", 'Boolean'>
    readonly is_axis_txt_bold: FieldRef<"Line", 'Boolean'>
    readonly axis_txt_color: FieldRef<"Line", 'String'>
    readonly axisX: FieldRef<"Line", 'String'>
    readonly axisY: FieldRef<"Line", 'String'>
    readonly isLegend: FieldRef<"Line", 'Boolean'>
    readonly legend_size: FieldRef<"Line", 'Int'>
    readonly is_legend_italic: FieldRef<"Line", 'Boolean'>
    readonly is_legend_bold: FieldRef<"Line", 'Boolean'>
    readonly legend_color: FieldRef<"Line", 'String'>
    readonly thickness: FieldRef<"Line", 'Int'>
    readonly is_line_smoth: FieldRef<"Line", 'Boolean'>
    readonly projectId: FieldRef<"Line", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Line findUnique
   */
  export type LineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findUniqueOrThrow
   */
  export type LineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findFirst
   */
  export type LineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findFirstOrThrow
   */
  export type LineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findMany
   */
  export type LineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Lines to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line create
   */
  export type LineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to create a Line.
     */
    data: XOR<LineCreateInput, LineUncheckedCreateInput>
  }

  /**
   * Line createMany
   */
  export type LineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lines.
     */
    data: LineCreateManyInput | LineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Line update
   */
  export type LineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to update a Line.
     */
    data: XOR<LineUpdateInput, LineUncheckedUpdateInput>
    /**
     * Choose, which Line to update.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line updateMany
   */
  export type LineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lines.
     */
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyInput>
    /**
     * Filter which Lines to update
     */
    where?: LineWhereInput
  }

  /**
   * Line upsert
   */
  export type LineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The filter to search for the Line to update in case it exists.
     */
    where: LineWhereUniqueInput
    /**
     * In case the Line found by the `where` argument doesn't exist, create a new Line with this data.
     */
    create: XOR<LineCreateInput, LineUncheckedCreateInput>
    /**
     * In case the Line was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineUpdateInput, LineUncheckedUpdateInput>
  }

  /**
   * Line delete
   */
  export type LineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter which Line to delete.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line deleteMany
   */
  export type LineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lines to delete
     */
    where?: LineWhereInput
  }

  /**
   * Line without action
   */
  export type LineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
  }


  /**
   * Model Column_Line
   */

  export type AggregateColumn_Line = {
    _count: Column_LineCountAggregateOutputType | null
    _avg: Column_LineAvgAggregateOutputType | null
    _sum: Column_LineSumAggregateOutputType | null
    _min: Column_LineMinAggregateOutputType | null
    _max: Column_LineMaxAggregateOutputType | null
  }

  export type Column_LineAvgAggregateOutputType = {
    id: number | null
    b_bar_spacing: number | null
    b_border_radius: number | null
    b_border_bld: number | null
    b_legend_size: number | null
    b_axis_txt_size: number | null
    l_axis_txt_size: number | null
    l_legend_size: number | null
    l_thickness: number | null
    projectId: number | null
  }

  export type Column_LineSumAggregateOutputType = {
    id: number | null
    b_bar_spacing: number | null
    b_border_radius: number | null
    b_border_bld: number | null
    b_legend_size: number | null
    b_axis_txt_size: number | null
    l_axis_txt_size: number | null
    l_legend_size: number | null
    l_thickness: number | null
    projectId: number | null
  }

  export type Column_LineMinAggregateOutputType = {
    id: number | null
    b_bar_spacing: number | null
    b_border_radius: number | null
    b_border_bld: number | null
    b_border_color: string | null
    b_isLegend: boolean | null
    b_legend_size: number | null
    b_is_legend_italic: boolean | null
    b_is_legend_bold: boolean | null
    b_legend_color: string | null
    b_isAxis: boolean | null
    b_axis_txt_size: number | null
    b_is_axis_txt_italic: boolean | null
    b_is_axis_txt_bold: boolean | null
    b_axis_txt_color: string | null
    b_axisX: string | null
    b_axisY: string | null
    l_show_pointer_mark: boolean | null
    l_isAxis: boolean | null
    l_axis_txt_size: number | null
    l_is_axis_txt_italic: boolean | null
    l_is_axis_txt_bold: boolean | null
    l_axis_txt_color: string | null
    l_axisX: string | null
    l_axisY: string | null
    l_isLegend: boolean | null
    l_legend_size: number | null
    l_is_legend_italic: boolean | null
    l_is_legend_bold: boolean | null
    l_legend_color: string | null
    l_thickness: number | null
    l_is_line_smoth: boolean | null
    projectId: number | null
  }

  export type Column_LineMaxAggregateOutputType = {
    id: number | null
    b_bar_spacing: number | null
    b_border_radius: number | null
    b_border_bld: number | null
    b_border_color: string | null
    b_isLegend: boolean | null
    b_legend_size: number | null
    b_is_legend_italic: boolean | null
    b_is_legend_bold: boolean | null
    b_legend_color: string | null
    b_isAxis: boolean | null
    b_axis_txt_size: number | null
    b_is_axis_txt_italic: boolean | null
    b_is_axis_txt_bold: boolean | null
    b_axis_txt_color: string | null
    b_axisX: string | null
    b_axisY: string | null
    l_show_pointer_mark: boolean | null
    l_isAxis: boolean | null
    l_axis_txt_size: number | null
    l_is_axis_txt_italic: boolean | null
    l_is_axis_txt_bold: boolean | null
    l_axis_txt_color: string | null
    l_axisX: string | null
    l_axisY: string | null
    l_isLegend: boolean | null
    l_legend_size: number | null
    l_is_legend_italic: boolean | null
    l_is_legend_bold: boolean | null
    l_legend_color: string | null
    l_thickness: number | null
    l_is_line_smoth: boolean | null
    projectId: number | null
  }

  export type Column_LineCountAggregateOutputType = {
    id: number
    b_bar_spacing: number
    b_border_radius: number
    b_border_bld: number
    b_border_color: number
    b_isLegend: number
    b_legend_size: number
    b_is_legend_italic: number
    b_is_legend_bold: number
    b_legend_color: number
    b_isAxis: number
    b_axis_txt_size: number
    b_is_axis_txt_italic: number
    b_is_axis_txt_bold: number
    b_axis_txt_color: number
    b_axisX: number
    b_axisY: number
    l_show_pointer_mark: number
    l_isAxis: number
    l_axis_txt_size: number
    l_is_axis_txt_italic: number
    l_is_axis_txt_bold: number
    l_axis_txt_color: number
    l_axisX: number
    l_axisY: number
    l_isLegend: number
    l_legend_size: number
    l_is_legend_italic: number
    l_is_legend_bold: number
    l_legend_color: number
    l_thickness: number
    l_is_line_smoth: number
    projectId: number
    _all: number
  }


  export type Column_LineAvgAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_legend_size?: true
    b_axis_txt_size?: true
    l_axis_txt_size?: true
    l_legend_size?: true
    l_thickness?: true
    projectId?: true
  }

  export type Column_LineSumAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_legend_size?: true
    b_axis_txt_size?: true
    l_axis_txt_size?: true
    l_legend_size?: true
    l_thickness?: true
    projectId?: true
  }

  export type Column_LineMinAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_border_color?: true
    b_isLegend?: true
    b_legend_size?: true
    b_is_legend_italic?: true
    b_is_legend_bold?: true
    b_legend_color?: true
    b_isAxis?: true
    b_axis_txt_size?: true
    b_is_axis_txt_italic?: true
    b_is_axis_txt_bold?: true
    b_axis_txt_color?: true
    b_axisX?: true
    b_axisY?: true
    l_show_pointer_mark?: true
    l_isAxis?: true
    l_axis_txt_size?: true
    l_is_axis_txt_italic?: true
    l_is_axis_txt_bold?: true
    l_axis_txt_color?: true
    l_axisX?: true
    l_axisY?: true
    l_isLegend?: true
    l_legend_size?: true
    l_is_legend_italic?: true
    l_is_legend_bold?: true
    l_legend_color?: true
    l_thickness?: true
    l_is_line_smoth?: true
    projectId?: true
  }

  export type Column_LineMaxAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_border_color?: true
    b_isLegend?: true
    b_legend_size?: true
    b_is_legend_italic?: true
    b_is_legend_bold?: true
    b_legend_color?: true
    b_isAxis?: true
    b_axis_txt_size?: true
    b_is_axis_txt_italic?: true
    b_is_axis_txt_bold?: true
    b_axis_txt_color?: true
    b_axisX?: true
    b_axisY?: true
    l_show_pointer_mark?: true
    l_isAxis?: true
    l_axis_txt_size?: true
    l_is_axis_txt_italic?: true
    l_is_axis_txt_bold?: true
    l_axis_txt_color?: true
    l_axisX?: true
    l_axisY?: true
    l_isLegend?: true
    l_legend_size?: true
    l_is_legend_italic?: true
    l_is_legend_bold?: true
    l_legend_color?: true
    l_thickness?: true
    l_is_line_smoth?: true
    projectId?: true
  }

  export type Column_LineCountAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_border_color?: true
    b_isLegend?: true
    b_legend_size?: true
    b_is_legend_italic?: true
    b_is_legend_bold?: true
    b_legend_color?: true
    b_isAxis?: true
    b_axis_txt_size?: true
    b_is_axis_txt_italic?: true
    b_is_axis_txt_bold?: true
    b_axis_txt_color?: true
    b_axisX?: true
    b_axisY?: true
    l_show_pointer_mark?: true
    l_isAxis?: true
    l_axis_txt_size?: true
    l_is_axis_txt_italic?: true
    l_is_axis_txt_bold?: true
    l_axis_txt_color?: true
    l_axisX?: true
    l_axisY?: true
    l_isLegend?: true
    l_legend_size?: true
    l_is_legend_italic?: true
    l_is_legend_bold?: true
    l_legend_color?: true
    l_thickness?: true
    l_is_line_smoth?: true
    projectId?: true
    _all?: true
  }

  export type Column_LineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column_Line to aggregate.
     */
    where?: Column_LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Column_Lines to fetch.
     */
    orderBy?: Column_LineOrderByWithRelationInput | Column_LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Column_LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Column_Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Column_Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Column_Lines
    **/
    _count?: true | Column_LineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Column_LineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Column_LineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Column_LineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Column_LineMaxAggregateInputType
  }

  export type GetColumn_LineAggregateType<T extends Column_LineAggregateArgs> = {
        [P in keyof T & keyof AggregateColumn_Line]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn_Line[P]>
      : GetScalarType<T[P], AggregateColumn_Line[P]>
  }




  export type Column_LineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Column_LineWhereInput
    orderBy?: Column_LineOrderByWithAggregationInput | Column_LineOrderByWithAggregationInput[]
    by: Column_LineScalarFieldEnum[] | Column_LineScalarFieldEnum
    having?: Column_LineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Column_LineCountAggregateInputType | true
    _avg?: Column_LineAvgAggregateInputType
    _sum?: Column_LineSumAggregateInputType
    _min?: Column_LineMinAggregateInputType
    _max?: Column_LineMaxAggregateInputType
  }

  export type Column_LineGroupByOutputType = {
    id: number
    b_bar_spacing: number
    b_border_radius: number
    b_border_bld: number
    b_border_color: string
    b_isLegend: boolean
    b_legend_size: number
    b_is_legend_italic: boolean
    b_is_legend_bold: boolean
    b_legend_color: string
    b_isAxis: boolean
    b_axis_txt_size: number
    b_is_axis_txt_italic: boolean
    b_is_axis_txt_bold: boolean
    b_axis_txt_color: string
    b_axisX: string
    b_axisY: string
    l_show_pointer_mark: boolean
    l_isAxis: boolean
    l_axis_txt_size: number
    l_is_axis_txt_italic: boolean
    l_is_axis_txt_bold: boolean
    l_axis_txt_color: string
    l_axisX: string
    l_axisY: string
    l_isLegend: boolean
    l_legend_size: number
    l_is_legend_italic: boolean
    l_is_legend_bold: boolean
    l_legend_color: string
    l_thickness: number
    l_is_line_smoth: boolean
    projectId: number
    _count: Column_LineCountAggregateOutputType | null
    _avg: Column_LineAvgAggregateOutputType | null
    _sum: Column_LineSumAggregateOutputType | null
    _min: Column_LineMinAggregateOutputType | null
    _max: Column_LineMaxAggregateOutputType | null
  }

  type GetColumn_LineGroupByPayload<T extends Column_LineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Column_LineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Column_LineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Column_LineGroupByOutputType[P]>
            : GetScalarType<T[P], Column_LineGroupByOutputType[P]>
        }
      >
    >


  export type Column_LineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    b_bar_spacing?: boolean
    b_border_radius?: boolean
    b_border_bld?: boolean
    b_border_color?: boolean
    b_isLegend?: boolean
    b_legend_size?: boolean
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: boolean
    b_isAxis?: boolean
    b_axis_txt_size?: boolean
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: boolean
    b_axisX?: boolean
    b_axisY?: boolean
    l_show_pointer_mark?: boolean
    l_isAxis?: boolean
    l_axis_txt_size?: boolean
    l_is_axis_txt_italic?: boolean
    l_is_axis_txt_bold?: boolean
    l_axis_txt_color?: boolean
    l_axisX?: boolean
    l_axisY?: boolean
    l_isLegend?: boolean
    l_legend_size?: boolean
    l_is_legend_italic?: boolean
    l_is_legend_bold?: boolean
    l_legend_color?: boolean
    l_thickness?: boolean
    l_is_line_smoth?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column_Line"]>


  export type Column_LineSelectScalar = {
    id?: boolean
    b_bar_spacing?: boolean
    b_border_radius?: boolean
    b_border_bld?: boolean
    b_border_color?: boolean
    b_isLegend?: boolean
    b_legend_size?: boolean
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: boolean
    b_isAxis?: boolean
    b_axis_txt_size?: boolean
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: boolean
    b_axisX?: boolean
    b_axisY?: boolean
    l_show_pointer_mark?: boolean
    l_isAxis?: boolean
    l_axis_txt_size?: boolean
    l_is_axis_txt_italic?: boolean
    l_is_axis_txt_bold?: boolean
    l_axis_txt_color?: boolean
    l_axisX?: boolean
    l_axisY?: boolean
    l_isLegend?: boolean
    l_legend_size?: boolean
    l_is_legend_italic?: boolean
    l_is_legend_bold?: boolean
    l_legend_color?: boolean
    l_thickness?: boolean
    l_is_line_smoth?: boolean
    projectId?: boolean
  }

  export type Column_LineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $Column_LinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Column_Line"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      b_bar_spacing: number
      b_border_radius: number
      b_border_bld: number
      b_border_color: string
      b_isLegend: boolean
      b_legend_size: number
      b_is_legend_italic: boolean
      b_is_legend_bold: boolean
      b_legend_color: string
      b_isAxis: boolean
      b_axis_txt_size: number
      b_is_axis_txt_italic: boolean
      b_is_axis_txt_bold: boolean
      b_axis_txt_color: string
      b_axisX: string
      b_axisY: string
      l_show_pointer_mark: boolean
      l_isAxis: boolean
      l_axis_txt_size: number
      l_is_axis_txt_italic: boolean
      l_is_axis_txt_bold: boolean
      l_axis_txt_color: string
      l_axisX: string
      l_axisY: string
      l_isLegend: boolean
      l_legend_size: number
      l_is_legend_italic: boolean
      l_is_legend_bold: boolean
      l_legend_color: string
      l_thickness: number
      l_is_line_smoth: boolean
      projectId: number
    }, ExtArgs["result"]["column_Line"]>
    composites: {}
  }

  type Column_LineGetPayload<S extends boolean | null | undefined | Column_LineDefaultArgs> = $Result.GetResult<Prisma.$Column_LinePayload, S>

  type Column_LineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Column_LineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Column_LineCountAggregateInputType | true
    }

  export interface Column_LineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Column_Line'], meta: { name: 'Column_Line' } }
    /**
     * Find zero or one Column_Line that matches the filter.
     * @param {Column_LineFindUniqueArgs} args - Arguments to find a Column_Line
     * @example
     * // Get one Column_Line
     * const column_Line = await prisma.column_Line.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Column_LineFindUniqueArgs>(args: SelectSubset<T, Column_LineFindUniqueArgs<ExtArgs>>): Prisma__Column_LineClient<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Column_Line that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Column_LineFindUniqueOrThrowArgs} args - Arguments to find a Column_Line
     * @example
     * // Get one Column_Line
     * const column_Line = await prisma.column_Line.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Column_LineFindUniqueOrThrowArgs>(args: SelectSubset<T, Column_LineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Column_LineClient<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Column_Line that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_LineFindFirstArgs} args - Arguments to find a Column_Line
     * @example
     * // Get one Column_Line
     * const column_Line = await prisma.column_Line.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Column_LineFindFirstArgs>(args?: SelectSubset<T, Column_LineFindFirstArgs<ExtArgs>>): Prisma__Column_LineClient<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Column_Line that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_LineFindFirstOrThrowArgs} args - Arguments to find a Column_Line
     * @example
     * // Get one Column_Line
     * const column_Line = await prisma.column_Line.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Column_LineFindFirstOrThrowArgs>(args?: SelectSubset<T, Column_LineFindFirstOrThrowArgs<ExtArgs>>): Prisma__Column_LineClient<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Column_Lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_LineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Column_Lines
     * const column_Lines = await prisma.column_Line.findMany()
     * 
     * // Get first 10 Column_Lines
     * const column_Lines = await prisma.column_Line.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const column_LineWithIdOnly = await prisma.column_Line.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Column_LineFindManyArgs>(args?: SelectSubset<T, Column_LineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Column_Line.
     * @param {Column_LineCreateArgs} args - Arguments to create a Column_Line.
     * @example
     * // Create one Column_Line
     * const Column_Line = await prisma.column_Line.create({
     *   data: {
     *     // ... data to create a Column_Line
     *   }
     * })
     * 
     */
    create<T extends Column_LineCreateArgs>(args: SelectSubset<T, Column_LineCreateArgs<ExtArgs>>): Prisma__Column_LineClient<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Column_Lines.
     * @param {Column_LineCreateManyArgs} args - Arguments to create many Column_Lines.
     * @example
     * // Create many Column_Lines
     * const column_Line = await prisma.column_Line.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Column_LineCreateManyArgs>(args?: SelectSubset<T, Column_LineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Column_Line.
     * @param {Column_LineDeleteArgs} args - Arguments to delete one Column_Line.
     * @example
     * // Delete one Column_Line
     * const Column_Line = await prisma.column_Line.delete({
     *   where: {
     *     // ... filter to delete one Column_Line
     *   }
     * })
     * 
     */
    delete<T extends Column_LineDeleteArgs>(args: SelectSubset<T, Column_LineDeleteArgs<ExtArgs>>): Prisma__Column_LineClient<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Column_Line.
     * @param {Column_LineUpdateArgs} args - Arguments to update one Column_Line.
     * @example
     * // Update one Column_Line
     * const column_Line = await prisma.column_Line.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Column_LineUpdateArgs>(args: SelectSubset<T, Column_LineUpdateArgs<ExtArgs>>): Prisma__Column_LineClient<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Column_Lines.
     * @param {Column_LineDeleteManyArgs} args - Arguments to filter Column_Lines to delete.
     * @example
     * // Delete a few Column_Lines
     * const { count } = await prisma.column_Line.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Column_LineDeleteManyArgs>(args?: SelectSubset<T, Column_LineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Column_Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_LineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Column_Lines
     * const column_Line = await prisma.column_Line.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Column_LineUpdateManyArgs>(args: SelectSubset<T, Column_LineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Column_Line.
     * @param {Column_LineUpsertArgs} args - Arguments to update or create a Column_Line.
     * @example
     * // Update or create a Column_Line
     * const column_Line = await prisma.column_Line.upsert({
     *   create: {
     *     // ... data to create a Column_Line
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column_Line we want to update
     *   }
     * })
     */
    upsert<T extends Column_LineUpsertArgs>(args: SelectSubset<T, Column_LineUpsertArgs<ExtArgs>>): Prisma__Column_LineClient<$Result.GetResult<Prisma.$Column_LinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Column_Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_LineCountArgs} args - Arguments to filter Column_Lines to count.
     * @example
     * // Count the number of Column_Lines
     * const count = await prisma.column_Line.count({
     *   where: {
     *     // ... the filter for the Column_Lines we want to count
     *   }
     * })
    **/
    count<T extends Column_LineCountArgs>(
      args?: Subset<T, Column_LineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Column_LineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Column_Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_LineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Column_LineAggregateArgs>(args: Subset<T, Column_LineAggregateArgs>): Prisma.PrismaPromise<GetColumn_LineAggregateType<T>>

    /**
     * Group by Column_Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_LineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Column_LineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Column_LineGroupByArgs['orderBy'] }
        : { orderBy?: Column_LineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Column_LineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumn_LineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Column_Line model
   */
  readonly fields: Column_LineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Column_Line.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Column_LineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Column_Line model
   */ 
  interface Column_LineFieldRefs {
    readonly id: FieldRef<"Column_Line", 'Int'>
    readonly b_bar_spacing: FieldRef<"Column_Line", 'Float'>
    readonly b_border_radius: FieldRef<"Column_Line", 'Int'>
    readonly b_border_bld: FieldRef<"Column_Line", 'Int'>
    readonly b_border_color: FieldRef<"Column_Line", 'String'>
    readonly b_isLegend: FieldRef<"Column_Line", 'Boolean'>
    readonly b_legend_size: FieldRef<"Column_Line", 'Int'>
    readonly b_is_legend_italic: FieldRef<"Column_Line", 'Boolean'>
    readonly b_is_legend_bold: FieldRef<"Column_Line", 'Boolean'>
    readonly b_legend_color: FieldRef<"Column_Line", 'String'>
    readonly b_isAxis: FieldRef<"Column_Line", 'Boolean'>
    readonly b_axis_txt_size: FieldRef<"Column_Line", 'Int'>
    readonly b_is_axis_txt_italic: FieldRef<"Column_Line", 'Boolean'>
    readonly b_is_axis_txt_bold: FieldRef<"Column_Line", 'Boolean'>
    readonly b_axis_txt_color: FieldRef<"Column_Line", 'String'>
    readonly b_axisX: FieldRef<"Column_Line", 'String'>
    readonly b_axisY: FieldRef<"Column_Line", 'String'>
    readonly l_show_pointer_mark: FieldRef<"Column_Line", 'Boolean'>
    readonly l_isAxis: FieldRef<"Column_Line", 'Boolean'>
    readonly l_axis_txt_size: FieldRef<"Column_Line", 'Int'>
    readonly l_is_axis_txt_italic: FieldRef<"Column_Line", 'Boolean'>
    readonly l_is_axis_txt_bold: FieldRef<"Column_Line", 'Boolean'>
    readonly l_axis_txt_color: FieldRef<"Column_Line", 'String'>
    readonly l_axisX: FieldRef<"Column_Line", 'String'>
    readonly l_axisY: FieldRef<"Column_Line", 'String'>
    readonly l_isLegend: FieldRef<"Column_Line", 'Boolean'>
    readonly l_legend_size: FieldRef<"Column_Line", 'Int'>
    readonly l_is_legend_italic: FieldRef<"Column_Line", 'Boolean'>
    readonly l_is_legend_bold: FieldRef<"Column_Line", 'Boolean'>
    readonly l_legend_color: FieldRef<"Column_Line", 'String'>
    readonly l_thickness: FieldRef<"Column_Line", 'Int'>
    readonly l_is_line_smoth: FieldRef<"Column_Line", 'Boolean'>
    readonly projectId: FieldRef<"Column_Line", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Column_Line findUnique
   */
  export type Column_LineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    /**
     * Filter, which Column_Line to fetch.
     */
    where: Column_LineWhereUniqueInput
  }

  /**
   * Column_Line findUniqueOrThrow
   */
  export type Column_LineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    /**
     * Filter, which Column_Line to fetch.
     */
    where: Column_LineWhereUniqueInput
  }

  /**
   * Column_Line findFirst
   */
  export type Column_LineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    /**
     * Filter, which Column_Line to fetch.
     */
    where?: Column_LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Column_Lines to fetch.
     */
    orderBy?: Column_LineOrderByWithRelationInput | Column_LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Column_Lines.
     */
    cursor?: Column_LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Column_Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Column_Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Column_Lines.
     */
    distinct?: Column_LineScalarFieldEnum | Column_LineScalarFieldEnum[]
  }

  /**
   * Column_Line findFirstOrThrow
   */
  export type Column_LineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    /**
     * Filter, which Column_Line to fetch.
     */
    where?: Column_LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Column_Lines to fetch.
     */
    orderBy?: Column_LineOrderByWithRelationInput | Column_LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Column_Lines.
     */
    cursor?: Column_LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Column_Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Column_Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Column_Lines.
     */
    distinct?: Column_LineScalarFieldEnum | Column_LineScalarFieldEnum[]
  }

  /**
   * Column_Line findMany
   */
  export type Column_LineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    /**
     * Filter, which Column_Lines to fetch.
     */
    where?: Column_LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Column_Lines to fetch.
     */
    orderBy?: Column_LineOrderByWithRelationInput | Column_LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Column_Lines.
     */
    cursor?: Column_LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Column_Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Column_Lines.
     */
    skip?: number
    distinct?: Column_LineScalarFieldEnum | Column_LineScalarFieldEnum[]
  }

  /**
   * Column_Line create
   */
  export type Column_LineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    /**
     * The data needed to create a Column_Line.
     */
    data: XOR<Column_LineCreateInput, Column_LineUncheckedCreateInput>
  }

  /**
   * Column_Line createMany
   */
  export type Column_LineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Column_Lines.
     */
    data: Column_LineCreateManyInput | Column_LineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Column_Line update
   */
  export type Column_LineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    /**
     * The data needed to update a Column_Line.
     */
    data: XOR<Column_LineUpdateInput, Column_LineUncheckedUpdateInput>
    /**
     * Choose, which Column_Line to update.
     */
    where: Column_LineWhereUniqueInput
  }

  /**
   * Column_Line updateMany
   */
  export type Column_LineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Column_Lines.
     */
    data: XOR<Column_LineUpdateManyMutationInput, Column_LineUncheckedUpdateManyInput>
    /**
     * Filter which Column_Lines to update
     */
    where?: Column_LineWhereInput
  }

  /**
   * Column_Line upsert
   */
  export type Column_LineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    /**
     * The filter to search for the Column_Line to update in case it exists.
     */
    where: Column_LineWhereUniqueInput
    /**
     * In case the Column_Line found by the `where` argument doesn't exist, create a new Column_Line with this data.
     */
    create: XOR<Column_LineCreateInput, Column_LineUncheckedCreateInput>
    /**
     * In case the Column_Line was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Column_LineUpdateInput, Column_LineUncheckedUpdateInput>
  }

  /**
   * Column_Line delete
   */
  export type Column_LineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
    /**
     * Filter which Column_Line to delete.
     */
    where: Column_LineWhereUniqueInput
  }

  /**
   * Column_Line deleteMany
   */
  export type Column_LineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column_Lines to delete
     */
    where?: Column_LineWhereInput
  }

  /**
   * Column_Line without action
   */
  export type Column_LineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Line
     */
    select?: Column_LineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_LineInclude<ExtArgs> | null
  }


  /**
   * Model Column_Area
   */

  export type AggregateColumn_Area = {
    _count: Column_AreaCountAggregateOutputType | null
    _avg: Column_AreaAvgAggregateOutputType | null
    _sum: Column_AreaSumAggregateOutputType | null
    _min: Column_AreaMinAggregateOutputType | null
    _max: Column_AreaMaxAggregateOutputType | null
  }

  export type Column_AreaAvgAggregateOutputType = {
    id: number | null
    b_bar_spacing: number | null
    b_border_radius: number | null
    b_border_bld: number | null
    b_legend_size: number | null
    b_axis_txt_size: number | null
    a_axis_txt_size: number | null
    a_legend_size: number | null
    a_thickness: number | null
    projectId: number | null
  }

  export type Column_AreaSumAggregateOutputType = {
    id: number | null
    b_bar_spacing: number | null
    b_border_radius: number | null
    b_border_bld: number | null
    b_legend_size: number | null
    b_axis_txt_size: number | null
    a_axis_txt_size: number | null
    a_legend_size: number | null
    a_thickness: number | null
    projectId: number | null
  }

  export type Column_AreaMinAggregateOutputType = {
    id: number | null
    b_bar_spacing: number | null
    b_border_radius: number | null
    b_border_bld: number | null
    b_border_color: string | null
    b_isLegend: boolean | null
    b_legend_size: number | null
    b_is_legend_italic: boolean | null
    b_is_legend_bold: boolean | null
    b_legend_color: string | null
    b_isAxis: boolean | null
    b_axis_txt_size: number | null
    b_is_axis_txt_italic: boolean | null
    b_is_axis_txt_bold: boolean | null
    b_axis_txt_color: string | null
    b_axisX: string | null
    b_axisY: string | null
    a_show_pointer_mark: boolean | null
    a_isAxis: boolean | null
    a_axis_txt_size: number | null
    a_is_axis_txt_italic: boolean | null
    a_is_axis_txt_bold: boolean | null
    a_axis_txt_color: string | null
    a_axisX: string | null
    a_axisY: string | null
    a_isLegend: boolean | null
    a_legend_size: number | null
    a_is_legend_italic: boolean | null
    a_is_legend_bold: boolean | null
    a_legend_color: string | null
    a_thickness: number | null
    a_is_line_smoth: boolean | null
    projectId: number | null
  }

  export type Column_AreaMaxAggregateOutputType = {
    id: number | null
    b_bar_spacing: number | null
    b_border_radius: number | null
    b_border_bld: number | null
    b_border_color: string | null
    b_isLegend: boolean | null
    b_legend_size: number | null
    b_is_legend_italic: boolean | null
    b_is_legend_bold: boolean | null
    b_legend_color: string | null
    b_isAxis: boolean | null
    b_axis_txt_size: number | null
    b_is_axis_txt_italic: boolean | null
    b_is_axis_txt_bold: boolean | null
    b_axis_txt_color: string | null
    b_axisX: string | null
    b_axisY: string | null
    a_show_pointer_mark: boolean | null
    a_isAxis: boolean | null
    a_axis_txt_size: number | null
    a_is_axis_txt_italic: boolean | null
    a_is_axis_txt_bold: boolean | null
    a_axis_txt_color: string | null
    a_axisX: string | null
    a_axisY: string | null
    a_isLegend: boolean | null
    a_legend_size: number | null
    a_is_legend_italic: boolean | null
    a_is_legend_bold: boolean | null
    a_legend_color: string | null
    a_thickness: number | null
    a_is_line_smoth: boolean | null
    projectId: number | null
  }

  export type Column_AreaCountAggregateOutputType = {
    id: number
    b_bar_spacing: number
    b_border_radius: number
    b_border_bld: number
    b_border_color: number
    b_isLegend: number
    b_legend_size: number
    b_is_legend_italic: number
    b_is_legend_bold: number
    b_legend_color: number
    b_isAxis: number
    b_axis_txt_size: number
    b_is_axis_txt_italic: number
    b_is_axis_txt_bold: number
    b_axis_txt_color: number
    b_axisX: number
    b_axisY: number
    a_show_pointer_mark: number
    a_isAxis: number
    a_axis_txt_size: number
    a_is_axis_txt_italic: number
    a_is_axis_txt_bold: number
    a_axis_txt_color: number
    a_axisX: number
    a_axisY: number
    a_isLegend: number
    a_legend_size: number
    a_is_legend_italic: number
    a_is_legend_bold: number
    a_legend_color: number
    a_thickness: number
    a_is_line_smoth: number
    projectId: number
    _all: number
  }


  export type Column_AreaAvgAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_legend_size?: true
    b_axis_txt_size?: true
    a_axis_txt_size?: true
    a_legend_size?: true
    a_thickness?: true
    projectId?: true
  }

  export type Column_AreaSumAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_legend_size?: true
    b_axis_txt_size?: true
    a_axis_txt_size?: true
    a_legend_size?: true
    a_thickness?: true
    projectId?: true
  }

  export type Column_AreaMinAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_border_color?: true
    b_isLegend?: true
    b_legend_size?: true
    b_is_legend_italic?: true
    b_is_legend_bold?: true
    b_legend_color?: true
    b_isAxis?: true
    b_axis_txt_size?: true
    b_is_axis_txt_italic?: true
    b_is_axis_txt_bold?: true
    b_axis_txt_color?: true
    b_axisX?: true
    b_axisY?: true
    a_show_pointer_mark?: true
    a_isAxis?: true
    a_axis_txt_size?: true
    a_is_axis_txt_italic?: true
    a_is_axis_txt_bold?: true
    a_axis_txt_color?: true
    a_axisX?: true
    a_axisY?: true
    a_isLegend?: true
    a_legend_size?: true
    a_is_legend_italic?: true
    a_is_legend_bold?: true
    a_legend_color?: true
    a_thickness?: true
    a_is_line_smoth?: true
    projectId?: true
  }

  export type Column_AreaMaxAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_border_color?: true
    b_isLegend?: true
    b_legend_size?: true
    b_is_legend_italic?: true
    b_is_legend_bold?: true
    b_legend_color?: true
    b_isAxis?: true
    b_axis_txt_size?: true
    b_is_axis_txt_italic?: true
    b_is_axis_txt_bold?: true
    b_axis_txt_color?: true
    b_axisX?: true
    b_axisY?: true
    a_show_pointer_mark?: true
    a_isAxis?: true
    a_axis_txt_size?: true
    a_is_axis_txt_italic?: true
    a_is_axis_txt_bold?: true
    a_axis_txt_color?: true
    a_axisX?: true
    a_axisY?: true
    a_isLegend?: true
    a_legend_size?: true
    a_is_legend_italic?: true
    a_is_legend_bold?: true
    a_legend_color?: true
    a_thickness?: true
    a_is_line_smoth?: true
    projectId?: true
  }

  export type Column_AreaCountAggregateInputType = {
    id?: true
    b_bar_spacing?: true
    b_border_radius?: true
    b_border_bld?: true
    b_border_color?: true
    b_isLegend?: true
    b_legend_size?: true
    b_is_legend_italic?: true
    b_is_legend_bold?: true
    b_legend_color?: true
    b_isAxis?: true
    b_axis_txt_size?: true
    b_is_axis_txt_italic?: true
    b_is_axis_txt_bold?: true
    b_axis_txt_color?: true
    b_axisX?: true
    b_axisY?: true
    a_show_pointer_mark?: true
    a_isAxis?: true
    a_axis_txt_size?: true
    a_is_axis_txt_italic?: true
    a_is_axis_txt_bold?: true
    a_axis_txt_color?: true
    a_axisX?: true
    a_axisY?: true
    a_isLegend?: true
    a_legend_size?: true
    a_is_legend_italic?: true
    a_is_legend_bold?: true
    a_legend_color?: true
    a_thickness?: true
    a_is_line_smoth?: true
    projectId?: true
    _all?: true
  }

  export type Column_AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column_Area to aggregate.
     */
    where?: Column_AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Column_Areas to fetch.
     */
    orderBy?: Column_AreaOrderByWithRelationInput | Column_AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Column_AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Column_Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Column_Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Column_Areas
    **/
    _count?: true | Column_AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Column_AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Column_AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Column_AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Column_AreaMaxAggregateInputType
  }

  export type GetColumn_AreaAggregateType<T extends Column_AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateColumn_Area]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn_Area[P]>
      : GetScalarType<T[P], AggregateColumn_Area[P]>
  }




  export type Column_AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Column_AreaWhereInput
    orderBy?: Column_AreaOrderByWithAggregationInput | Column_AreaOrderByWithAggregationInput[]
    by: Column_AreaScalarFieldEnum[] | Column_AreaScalarFieldEnum
    having?: Column_AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Column_AreaCountAggregateInputType | true
    _avg?: Column_AreaAvgAggregateInputType
    _sum?: Column_AreaSumAggregateInputType
    _min?: Column_AreaMinAggregateInputType
    _max?: Column_AreaMaxAggregateInputType
  }

  export type Column_AreaGroupByOutputType = {
    id: number
    b_bar_spacing: number
    b_border_radius: number
    b_border_bld: number
    b_border_color: string
    b_isLegend: boolean
    b_legend_size: number
    b_is_legend_italic: boolean
    b_is_legend_bold: boolean
    b_legend_color: string
    b_isAxis: boolean
    b_axis_txt_size: number
    b_is_axis_txt_italic: boolean
    b_is_axis_txt_bold: boolean
    b_axis_txt_color: string
    b_axisX: string
    b_axisY: string
    a_show_pointer_mark: boolean
    a_isAxis: boolean
    a_axis_txt_size: number
    a_is_axis_txt_italic: boolean
    a_is_axis_txt_bold: boolean
    a_axis_txt_color: string
    a_axisX: string
    a_axisY: string
    a_isLegend: boolean
    a_legend_size: number
    a_is_legend_italic: boolean
    a_is_legend_bold: boolean
    a_legend_color: string
    a_thickness: number
    a_is_line_smoth: boolean
    projectId: number
    _count: Column_AreaCountAggregateOutputType | null
    _avg: Column_AreaAvgAggregateOutputType | null
    _sum: Column_AreaSumAggregateOutputType | null
    _min: Column_AreaMinAggregateOutputType | null
    _max: Column_AreaMaxAggregateOutputType | null
  }

  type GetColumn_AreaGroupByPayload<T extends Column_AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Column_AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Column_AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Column_AreaGroupByOutputType[P]>
            : GetScalarType<T[P], Column_AreaGroupByOutputType[P]>
        }
      >
    >


  export type Column_AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    b_bar_spacing?: boolean
    b_border_radius?: boolean
    b_border_bld?: boolean
    b_border_color?: boolean
    b_isLegend?: boolean
    b_legend_size?: boolean
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: boolean
    b_isAxis?: boolean
    b_axis_txt_size?: boolean
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: boolean
    b_axisX?: boolean
    b_axisY?: boolean
    a_show_pointer_mark?: boolean
    a_isAxis?: boolean
    a_axis_txt_size?: boolean
    a_is_axis_txt_italic?: boolean
    a_is_axis_txt_bold?: boolean
    a_axis_txt_color?: boolean
    a_axisX?: boolean
    a_axisY?: boolean
    a_isLegend?: boolean
    a_legend_size?: boolean
    a_is_legend_italic?: boolean
    a_is_legend_bold?: boolean
    a_legend_color?: boolean
    a_thickness?: boolean
    a_is_line_smoth?: boolean
    projectId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column_Area"]>


  export type Column_AreaSelectScalar = {
    id?: boolean
    b_bar_spacing?: boolean
    b_border_radius?: boolean
    b_border_bld?: boolean
    b_border_color?: boolean
    b_isLegend?: boolean
    b_legend_size?: boolean
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: boolean
    b_isAxis?: boolean
    b_axis_txt_size?: boolean
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: boolean
    b_axisX?: boolean
    b_axisY?: boolean
    a_show_pointer_mark?: boolean
    a_isAxis?: boolean
    a_axis_txt_size?: boolean
    a_is_axis_txt_italic?: boolean
    a_is_axis_txt_bold?: boolean
    a_axis_txt_color?: boolean
    a_axisX?: boolean
    a_axisY?: boolean
    a_isLegend?: boolean
    a_legend_size?: boolean
    a_is_legend_italic?: boolean
    a_is_legend_bold?: boolean
    a_legend_color?: boolean
    a_thickness?: boolean
    a_is_line_smoth?: boolean
    projectId?: boolean
  }

  export type Column_AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $Column_AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Column_Area"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      b_bar_spacing: number
      b_border_radius: number
      b_border_bld: number
      b_border_color: string
      b_isLegend: boolean
      b_legend_size: number
      b_is_legend_italic: boolean
      b_is_legend_bold: boolean
      b_legend_color: string
      b_isAxis: boolean
      b_axis_txt_size: number
      b_is_axis_txt_italic: boolean
      b_is_axis_txt_bold: boolean
      b_axis_txt_color: string
      b_axisX: string
      b_axisY: string
      a_show_pointer_mark: boolean
      a_isAxis: boolean
      a_axis_txt_size: number
      a_is_axis_txt_italic: boolean
      a_is_axis_txt_bold: boolean
      a_axis_txt_color: string
      a_axisX: string
      a_axisY: string
      a_isLegend: boolean
      a_legend_size: number
      a_is_legend_italic: boolean
      a_is_legend_bold: boolean
      a_legend_color: string
      a_thickness: number
      a_is_line_smoth: boolean
      projectId: number
    }, ExtArgs["result"]["column_Area"]>
    composites: {}
  }

  type Column_AreaGetPayload<S extends boolean | null | undefined | Column_AreaDefaultArgs> = $Result.GetResult<Prisma.$Column_AreaPayload, S>

  type Column_AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Column_AreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Column_AreaCountAggregateInputType | true
    }

  export interface Column_AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Column_Area'], meta: { name: 'Column_Area' } }
    /**
     * Find zero or one Column_Area that matches the filter.
     * @param {Column_AreaFindUniqueArgs} args - Arguments to find a Column_Area
     * @example
     * // Get one Column_Area
     * const column_Area = await prisma.column_Area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Column_AreaFindUniqueArgs>(args: SelectSubset<T, Column_AreaFindUniqueArgs<ExtArgs>>): Prisma__Column_AreaClient<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Column_Area that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Column_AreaFindUniqueOrThrowArgs} args - Arguments to find a Column_Area
     * @example
     * // Get one Column_Area
     * const column_Area = await prisma.column_Area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Column_AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, Column_AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Column_AreaClient<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Column_Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_AreaFindFirstArgs} args - Arguments to find a Column_Area
     * @example
     * // Get one Column_Area
     * const column_Area = await prisma.column_Area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Column_AreaFindFirstArgs>(args?: SelectSubset<T, Column_AreaFindFirstArgs<ExtArgs>>): Prisma__Column_AreaClient<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Column_Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_AreaFindFirstOrThrowArgs} args - Arguments to find a Column_Area
     * @example
     * // Get one Column_Area
     * const column_Area = await prisma.column_Area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Column_AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, Column_AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Column_AreaClient<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Column_Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Column_Areas
     * const column_Areas = await prisma.column_Area.findMany()
     * 
     * // Get first 10 Column_Areas
     * const column_Areas = await prisma.column_Area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const column_AreaWithIdOnly = await prisma.column_Area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Column_AreaFindManyArgs>(args?: SelectSubset<T, Column_AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Column_Area.
     * @param {Column_AreaCreateArgs} args - Arguments to create a Column_Area.
     * @example
     * // Create one Column_Area
     * const Column_Area = await prisma.column_Area.create({
     *   data: {
     *     // ... data to create a Column_Area
     *   }
     * })
     * 
     */
    create<T extends Column_AreaCreateArgs>(args: SelectSubset<T, Column_AreaCreateArgs<ExtArgs>>): Prisma__Column_AreaClient<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Column_Areas.
     * @param {Column_AreaCreateManyArgs} args - Arguments to create many Column_Areas.
     * @example
     * // Create many Column_Areas
     * const column_Area = await prisma.column_Area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Column_AreaCreateManyArgs>(args?: SelectSubset<T, Column_AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Column_Area.
     * @param {Column_AreaDeleteArgs} args - Arguments to delete one Column_Area.
     * @example
     * // Delete one Column_Area
     * const Column_Area = await prisma.column_Area.delete({
     *   where: {
     *     // ... filter to delete one Column_Area
     *   }
     * })
     * 
     */
    delete<T extends Column_AreaDeleteArgs>(args: SelectSubset<T, Column_AreaDeleteArgs<ExtArgs>>): Prisma__Column_AreaClient<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Column_Area.
     * @param {Column_AreaUpdateArgs} args - Arguments to update one Column_Area.
     * @example
     * // Update one Column_Area
     * const column_Area = await prisma.column_Area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Column_AreaUpdateArgs>(args: SelectSubset<T, Column_AreaUpdateArgs<ExtArgs>>): Prisma__Column_AreaClient<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Column_Areas.
     * @param {Column_AreaDeleteManyArgs} args - Arguments to filter Column_Areas to delete.
     * @example
     * // Delete a few Column_Areas
     * const { count } = await prisma.column_Area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Column_AreaDeleteManyArgs>(args?: SelectSubset<T, Column_AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Column_Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Column_Areas
     * const column_Area = await prisma.column_Area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Column_AreaUpdateManyArgs>(args: SelectSubset<T, Column_AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Column_Area.
     * @param {Column_AreaUpsertArgs} args - Arguments to update or create a Column_Area.
     * @example
     * // Update or create a Column_Area
     * const column_Area = await prisma.column_Area.upsert({
     *   create: {
     *     // ... data to create a Column_Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column_Area we want to update
     *   }
     * })
     */
    upsert<T extends Column_AreaUpsertArgs>(args: SelectSubset<T, Column_AreaUpsertArgs<ExtArgs>>): Prisma__Column_AreaClient<$Result.GetResult<Prisma.$Column_AreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Column_Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_AreaCountArgs} args - Arguments to filter Column_Areas to count.
     * @example
     * // Count the number of Column_Areas
     * const count = await prisma.column_Area.count({
     *   where: {
     *     // ... the filter for the Column_Areas we want to count
     *   }
     * })
    **/
    count<T extends Column_AreaCountArgs>(
      args?: Subset<T, Column_AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Column_AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Column_Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Column_AreaAggregateArgs>(args: Subset<T, Column_AreaAggregateArgs>): Prisma.PrismaPromise<GetColumn_AreaAggregateType<T>>

    /**
     * Group by Column_Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Column_AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Column_AreaGroupByArgs['orderBy'] }
        : { orderBy?: Column_AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Column_AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumn_AreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Column_Area model
   */
  readonly fields: Column_AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Column_Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Column_AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Column_Area model
   */ 
  interface Column_AreaFieldRefs {
    readonly id: FieldRef<"Column_Area", 'Int'>
    readonly b_bar_spacing: FieldRef<"Column_Area", 'Float'>
    readonly b_border_radius: FieldRef<"Column_Area", 'Int'>
    readonly b_border_bld: FieldRef<"Column_Area", 'Int'>
    readonly b_border_color: FieldRef<"Column_Area", 'String'>
    readonly b_isLegend: FieldRef<"Column_Area", 'Boolean'>
    readonly b_legend_size: FieldRef<"Column_Area", 'Int'>
    readonly b_is_legend_italic: FieldRef<"Column_Area", 'Boolean'>
    readonly b_is_legend_bold: FieldRef<"Column_Area", 'Boolean'>
    readonly b_legend_color: FieldRef<"Column_Area", 'String'>
    readonly b_isAxis: FieldRef<"Column_Area", 'Boolean'>
    readonly b_axis_txt_size: FieldRef<"Column_Area", 'Int'>
    readonly b_is_axis_txt_italic: FieldRef<"Column_Area", 'Boolean'>
    readonly b_is_axis_txt_bold: FieldRef<"Column_Area", 'Boolean'>
    readonly b_axis_txt_color: FieldRef<"Column_Area", 'String'>
    readonly b_axisX: FieldRef<"Column_Area", 'String'>
    readonly b_axisY: FieldRef<"Column_Area", 'String'>
    readonly a_show_pointer_mark: FieldRef<"Column_Area", 'Boolean'>
    readonly a_isAxis: FieldRef<"Column_Area", 'Boolean'>
    readonly a_axis_txt_size: FieldRef<"Column_Area", 'Int'>
    readonly a_is_axis_txt_italic: FieldRef<"Column_Area", 'Boolean'>
    readonly a_is_axis_txt_bold: FieldRef<"Column_Area", 'Boolean'>
    readonly a_axis_txt_color: FieldRef<"Column_Area", 'String'>
    readonly a_axisX: FieldRef<"Column_Area", 'String'>
    readonly a_axisY: FieldRef<"Column_Area", 'String'>
    readonly a_isLegend: FieldRef<"Column_Area", 'Boolean'>
    readonly a_legend_size: FieldRef<"Column_Area", 'Int'>
    readonly a_is_legend_italic: FieldRef<"Column_Area", 'Boolean'>
    readonly a_is_legend_bold: FieldRef<"Column_Area", 'Boolean'>
    readonly a_legend_color: FieldRef<"Column_Area", 'String'>
    readonly a_thickness: FieldRef<"Column_Area", 'Int'>
    readonly a_is_line_smoth: FieldRef<"Column_Area", 'Boolean'>
    readonly projectId: FieldRef<"Column_Area", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Column_Area findUnique
   */
  export type Column_AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    /**
     * Filter, which Column_Area to fetch.
     */
    where: Column_AreaWhereUniqueInput
  }

  /**
   * Column_Area findUniqueOrThrow
   */
  export type Column_AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    /**
     * Filter, which Column_Area to fetch.
     */
    where: Column_AreaWhereUniqueInput
  }

  /**
   * Column_Area findFirst
   */
  export type Column_AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    /**
     * Filter, which Column_Area to fetch.
     */
    where?: Column_AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Column_Areas to fetch.
     */
    orderBy?: Column_AreaOrderByWithRelationInput | Column_AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Column_Areas.
     */
    cursor?: Column_AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Column_Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Column_Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Column_Areas.
     */
    distinct?: Column_AreaScalarFieldEnum | Column_AreaScalarFieldEnum[]
  }

  /**
   * Column_Area findFirstOrThrow
   */
  export type Column_AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    /**
     * Filter, which Column_Area to fetch.
     */
    where?: Column_AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Column_Areas to fetch.
     */
    orderBy?: Column_AreaOrderByWithRelationInput | Column_AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Column_Areas.
     */
    cursor?: Column_AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Column_Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Column_Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Column_Areas.
     */
    distinct?: Column_AreaScalarFieldEnum | Column_AreaScalarFieldEnum[]
  }

  /**
   * Column_Area findMany
   */
  export type Column_AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    /**
     * Filter, which Column_Areas to fetch.
     */
    where?: Column_AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Column_Areas to fetch.
     */
    orderBy?: Column_AreaOrderByWithRelationInput | Column_AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Column_Areas.
     */
    cursor?: Column_AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Column_Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Column_Areas.
     */
    skip?: number
    distinct?: Column_AreaScalarFieldEnum | Column_AreaScalarFieldEnum[]
  }

  /**
   * Column_Area create
   */
  export type Column_AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Column_Area.
     */
    data: XOR<Column_AreaCreateInput, Column_AreaUncheckedCreateInput>
  }

  /**
   * Column_Area createMany
   */
  export type Column_AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Column_Areas.
     */
    data: Column_AreaCreateManyInput | Column_AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Column_Area update
   */
  export type Column_AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Column_Area.
     */
    data: XOR<Column_AreaUpdateInput, Column_AreaUncheckedUpdateInput>
    /**
     * Choose, which Column_Area to update.
     */
    where: Column_AreaWhereUniqueInput
  }

  /**
   * Column_Area updateMany
   */
  export type Column_AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Column_Areas.
     */
    data: XOR<Column_AreaUpdateManyMutationInput, Column_AreaUncheckedUpdateManyInput>
    /**
     * Filter which Column_Areas to update
     */
    where?: Column_AreaWhereInput
  }

  /**
   * Column_Area upsert
   */
  export type Column_AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Column_Area to update in case it exists.
     */
    where: Column_AreaWhereUniqueInput
    /**
     * In case the Column_Area found by the `where` argument doesn't exist, create a new Column_Area with this data.
     */
    create: XOR<Column_AreaCreateInput, Column_AreaUncheckedCreateInput>
    /**
     * In case the Column_Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Column_AreaUpdateInput, Column_AreaUncheckedUpdateInput>
  }

  /**
   * Column_Area delete
   */
  export type Column_AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
    /**
     * Filter which Column_Area to delete.
     */
    where: Column_AreaWhereUniqueInput
  }

  /**
   * Column_Area deleteMany
   */
  export type Column_AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column_Areas to delete
     */
    where?: Column_AreaWhereInput
  }

  /**
   * Column_Area without action
   */
  export type Column_AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column_Area
     */
    select?: Column_AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Column_AreaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    isConfirmed: 'isConfirmed',
    v_code: 'v_code',
    token: 'token'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdDate: 'createdDate',
    name: 'name',
    title: 'title',
    background_color: 'background_color',
    data_selected: 'data_selected',
    graph_selected: 'graph_selected'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const DataScalarFieldEnum: {
    id: 'id',
    data: 'data',
    headers: 'headers',
    name: 'name',
    projectId: 'projectId'
  };

  export type DataScalarFieldEnum = (typeof DataScalarFieldEnum)[keyof typeof DataScalarFieldEnum]


  export const Background_ImageScalarFieldEnum: {
    id: 'id',
    image_name: 'image_name',
    Date: 'Date',
    is_set: 'is_set',
    projectId: 'projectId'
  };

  export type Background_ImageScalarFieldEnum = (typeof Background_ImageScalarFieldEnum)[keyof typeof Background_ImageScalarFieldEnum]


  export const ColumnScalarFieldEnum: {
    id: 'id',
    bar_spacing: 'bar_spacing',
    border_radius: 'border_radius',
    border_bld: 'border_bld',
    border_color: 'border_color',
    isLegend: 'isLegend',
    legend_size: 'legend_size',
    is_legend_italic: 'is_legend_italic',
    is_legend_bold: 'is_legend_bold',
    legend_color: 'legend_color',
    isAxis: 'isAxis',
    axis_txt_size: 'axis_txt_size',
    is_axis_txt_italic: 'is_axis_txt_italic',
    is_axis_txt_bold: 'is_axis_txt_bold',
    axis_txt_color: 'axis_txt_color',
    axisX: 'axisX',
    axisY: 'axisY',
    projectId: 'projectId'
  };

  export type ColumnScalarFieldEnum = (typeof ColumnScalarFieldEnum)[keyof typeof ColumnScalarFieldEnum]


  export const BarsScalarFieldEnum: {
    id: 'id',
    bar_spacing: 'bar_spacing',
    border_radius: 'border_radius',
    border_bld: 'border_bld',
    border_color: 'border_color',
    isLegend: 'isLegend',
    legend_size: 'legend_size',
    is_legend_italic: 'is_legend_italic',
    is_legend_bold: 'is_legend_bold',
    legend_color: 'legend_color',
    isAxis: 'isAxis',
    axis_txt_size: 'axis_txt_size',
    is_axis_txt_italic: 'is_axis_txt_italic',
    is_axis_txt_bold: 'is_axis_txt_bold',
    axis_txt_color: 'axis_txt_color',
    axisX: 'axisX',
    axisY: 'axisY',
    projectId: 'projectId'
  };

  export type BarsScalarFieldEnum = (typeof BarsScalarFieldEnum)[keyof typeof BarsScalarFieldEnum]


  export const PieScalarFieldEnum: {
    id: 'id',
    start_angle: 'start_angle',
    isLegend: 'isLegend',
    legend_size: 'legend_size',
    is_legend_italic: 'is_legend_italic',
    is_legend_bold: 'is_legend_bold',
    legend_color: 'legend_color',
    projectId: 'projectId'
  };

  export type PieScalarFieldEnum = (typeof PieScalarFieldEnum)[keyof typeof PieScalarFieldEnum]


  export const DonutScalarFieldEnum: {
    id: 'id',
    start_angle: 'start_angle',
    inner_radius: 'inner_radius',
    isLegend: 'isLegend',
    legend_size: 'legend_size',
    is_legend_italic: 'is_legend_italic',
    is_legend_bold: 'is_legend_bold',
    legend_color: 'legend_color',
    projectId: 'projectId'
  };

  export type DonutScalarFieldEnum = (typeof DonutScalarFieldEnum)[keyof typeof DonutScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    show_pointer_mark: 'show_pointer_mark',
    isAxis: 'isAxis',
    axis_txt_size: 'axis_txt_size',
    is_axis_txt_italic: 'is_axis_txt_italic',
    is_axis_txt_bold: 'is_axis_txt_bold',
    axis_txt_color: 'axis_txt_color',
    axisX: 'axisX',
    axisY: 'axisY',
    isLegend: 'isLegend',
    legend_size: 'legend_size',
    is_legend_italic: 'is_legend_italic',
    is_legend_bold: 'is_legend_bold',
    legend_color: 'legend_color',
    thickness: 'thickness',
    is_line_smoth: 'is_line_smoth',
    projectId: 'projectId'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const LineScalarFieldEnum: {
    id: 'id',
    show_pointer_mark: 'show_pointer_mark',
    isAxis: 'isAxis',
    axis_txt_size: 'axis_txt_size',
    is_axis_txt_italic: 'is_axis_txt_italic',
    is_axis_txt_bold: 'is_axis_txt_bold',
    axis_txt_color: 'axis_txt_color',
    axisX: 'axisX',
    axisY: 'axisY',
    isLegend: 'isLegend',
    legend_size: 'legend_size',
    is_legend_italic: 'is_legend_italic',
    is_legend_bold: 'is_legend_bold',
    legend_color: 'legend_color',
    thickness: 'thickness',
    is_line_smoth: 'is_line_smoth',
    projectId: 'projectId'
  };

  export type LineScalarFieldEnum = (typeof LineScalarFieldEnum)[keyof typeof LineScalarFieldEnum]


  export const Column_LineScalarFieldEnum: {
    id: 'id',
    b_bar_spacing: 'b_bar_spacing',
    b_border_radius: 'b_border_radius',
    b_border_bld: 'b_border_bld',
    b_border_color: 'b_border_color',
    b_isLegend: 'b_isLegend',
    b_legend_size: 'b_legend_size',
    b_is_legend_italic: 'b_is_legend_italic',
    b_is_legend_bold: 'b_is_legend_bold',
    b_legend_color: 'b_legend_color',
    b_isAxis: 'b_isAxis',
    b_axis_txt_size: 'b_axis_txt_size',
    b_is_axis_txt_italic: 'b_is_axis_txt_italic',
    b_is_axis_txt_bold: 'b_is_axis_txt_bold',
    b_axis_txt_color: 'b_axis_txt_color',
    b_axisX: 'b_axisX',
    b_axisY: 'b_axisY',
    l_show_pointer_mark: 'l_show_pointer_mark',
    l_isAxis: 'l_isAxis',
    l_axis_txt_size: 'l_axis_txt_size',
    l_is_axis_txt_italic: 'l_is_axis_txt_italic',
    l_is_axis_txt_bold: 'l_is_axis_txt_bold',
    l_axis_txt_color: 'l_axis_txt_color',
    l_axisX: 'l_axisX',
    l_axisY: 'l_axisY',
    l_isLegend: 'l_isLegend',
    l_legend_size: 'l_legend_size',
    l_is_legend_italic: 'l_is_legend_italic',
    l_is_legend_bold: 'l_is_legend_bold',
    l_legend_color: 'l_legend_color',
    l_thickness: 'l_thickness',
    l_is_line_smoth: 'l_is_line_smoth',
    projectId: 'projectId'
  };

  export type Column_LineScalarFieldEnum = (typeof Column_LineScalarFieldEnum)[keyof typeof Column_LineScalarFieldEnum]


  export const Column_AreaScalarFieldEnum: {
    id: 'id',
    b_bar_spacing: 'b_bar_spacing',
    b_border_radius: 'b_border_radius',
    b_border_bld: 'b_border_bld',
    b_border_color: 'b_border_color',
    b_isLegend: 'b_isLegend',
    b_legend_size: 'b_legend_size',
    b_is_legend_italic: 'b_is_legend_italic',
    b_is_legend_bold: 'b_is_legend_bold',
    b_legend_color: 'b_legend_color',
    b_isAxis: 'b_isAxis',
    b_axis_txt_size: 'b_axis_txt_size',
    b_is_axis_txt_italic: 'b_is_axis_txt_italic',
    b_is_axis_txt_bold: 'b_is_axis_txt_bold',
    b_axis_txt_color: 'b_axis_txt_color',
    b_axisX: 'b_axisX',
    b_axisY: 'b_axisY',
    a_show_pointer_mark: 'a_show_pointer_mark',
    a_isAxis: 'a_isAxis',
    a_axis_txt_size: 'a_axis_txt_size',
    a_is_axis_txt_italic: 'a_is_axis_txt_italic',
    a_is_axis_txt_bold: 'a_is_axis_txt_bold',
    a_axis_txt_color: 'a_axis_txt_color',
    a_axisX: 'a_axisX',
    a_axisY: 'a_axisY',
    a_isLegend: 'a_isLegend',
    a_legend_size: 'a_legend_size',
    a_is_legend_italic: 'a_is_legend_italic',
    a_is_legend_bold: 'a_is_legend_bold',
    a_legend_color: 'a_legend_color',
    a_thickness: 'a_thickness',
    a_is_line_smoth: 'a_is_line_smoth',
    projectId: 'projectId'
  };

  export type Column_AreaScalarFieldEnum = (typeof Column_AreaScalarFieldEnum)[keyof typeof Column_AreaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isConfirmed?: BoolNullableFilter<"User"> | boolean | null
    v_code?: StringFilter<"User"> | string
    token?: StringFilter<"User"> | string
    projects?: ProjectsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isConfirmed?: SortOrderInput | SortOrder
    v_code?: SortOrder
    token?: SortOrder
    projects?: ProjectsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isConfirmed?: BoolNullableFilter<"User"> | boolean | null
    v_code?: StringFilter<"User"> | string
    token?: StringFilter<"User"> | string
    projects?: ProjectsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isConfirmed?: SortOrderInput | SortOrder
    v_code?: SortOrder
    token?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isConfirmed?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    v_code?: StringWithAggregatesFilter<"User"> | string
    token?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: IntFilter<"Projects"> | number
    userId?: IntFilter<"Projects"> | number
    createdDate?: DateTimeFilter<"Projects"> | Date | string
    name?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    background_color?: StringFilter<"Projects"> | string
    data_selected?: IntFilter<"Projects"> | number
    graph_selected?: IntFilter<"Projects"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    data?: DataListRelationFilter
    background_images?: Background_ImageListRelationFilter
    Column?: XOR<ColumnNullableRelationFilter, ColumnWhereInput> | null
    Bars?: XOR<BarsNullableRelationFilter, BarsWhereInput> | null
    Pie?: XOR<PieNullableRelationFilter, PieWhereInput> | null
    Donut?: XOR<DonutNullableRelationFilter, DonutWhereInput> | null
    Area?: XOR<AreaNullableRelationFilter, AreaWhereInput> | null
    Line?: XOR<LineNullableRelationFilter, LineWhereInput> | null
    Column_Line?: XOR<Column_LineNullableRelationFilter, Column_LineWhereInput> | null
    Column_Area?: XOR<Column_AreaNullableRelationFilter, Column_AreaWhereInput> | null
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
    name?: SortOrder
    title?: SortOrder
    background_color?: SortOrder
    data_selected?: SortOrder
    graph_selected?: SortOrder
    user?: UserOrderByWithRelationInput
    data?: DataOrderByRelationAggregateInput
    background_images?: Background_ImageOrderByRelationAggregateInput
    Column?: ColumnOrderByWithRelationInput
    Bars?: BarsOrderByWithRelationInput
    Pie?: PieOrderByWithRelationInput
    Donut?: DonutOrderByWithRelationInput
    Area?: AreaOrderByWithRelationInput
    Line?: LineOrderByWithRelationInput
    Column_Line?: Column_LineOrderByWithRelationInput
    Column_Area?: Column_AreaOrderByWithRelationInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    userId?: IntFilter<"Projects"> | number
    createdDate?: DateTimeFilter<"Projects"> | Date | string
    name?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    background_color?: StringFilter<"Projects"> | string
    data_selected?: IntFilter<"Projects"> | number
    graph_selected?: IntFilter<"Projects"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    data?: DataListRelationFilter
    background_images?: Background_ImageListRelationFilter
    Column?: XOR<ColumnNullableRelationFilter, ColumnWhereInput> | null
    Bars?: XOR<BarsNullableRelationFilter, BarsWhereInput> | null
    Pie?: XOR<PieNullableRelationFilter, PieWhereInput> | null
    Donut?: XOR<DonutNullableRelationFilter, DonutWhereInput> | null
    Area?: XOR<AreaNullableRelationFilter, AreaWhereInput> | null
    Line?: XOR<LineNullableRelationFilter, LineWhereInput> | null
    Column_Line?: XOR<Column_LineNullableRelationFilter, Column_LineWhereInput> | null
    Column_Area?: XOR<Column_AreaNullableRelationFilter, Column_AreaWhereInput> | null
  }, "id">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
    name?: SortOrder
    title?: SortOrder
    background_color?: SortOrder
    data_selected?: SortOrder
    graph_selected?: SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _avg?: ProjectsAvgOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
    _sum?: ProjectsSumOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projects"> | number
    userId?: IntWithAggregatesFilter<"Projects"> | number
    createdDate?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
    name?: StringWithAggregatesFilter<"Projects"> | string
    title?: StringWithAggregatesFilter<"Projects"> | string
    background_color?: StringWithAggregatesFilter<"Projects"> | string
    data_selected?: IntWithAggregatesFilter<"Projects"> | number
    graph_selected?: IntWithAggregatesFilter<"Projects"> | number
  }

  export type DataWhereInput = {
    AND?: DataWhereInput | DataWhereInput[]
    OR?: DataWhereInput[]
    NOT?: DataWhereInput | DataWhereInput[]
    id?: IntFilter<"Data"> | number
    data?: StringFilter<"Data"> | string
    headers?: StringFilter<"Data"> | string
    name?: StringFilter<"Data"> | string
    projectId?: IntFilter<"Data"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type DataOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    headers?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type DataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DataWhereInput | DataWhereInput[]
    OR?: DataWhereInput[]
    NOT?: DataWhereInput | DataWhereInput[]
    data?: StringFilter<"Data"> | string
    headers?: StringFilter<"Data"> | string
    name?: StringFilter<"Data"> | string
    projectId?: IntFilter<"Data"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id">

  export type DataOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    headers?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    _count?: DataCountOrderByAggregateInput
    _avg?: DataAvgOrderByAggregateInput
    _max?: DataMaxOrderByAggregateInput
    _min?: DataMinOrderByAggregateInput
    _sum?: DataSumOrderByAggregateInput
  }

  export type DataScalarWhereWithAggregatesInput = {
    AND?: DataScalarWhereWithAggregatesInput | DataScalarWhereWithAggregatesInput[]
    OR?: DataScalarWhereWithAggregatesInput[]
    NOT?: DataScalarWhereWithAggregatesInput | DataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Data"> | number
    data?: StringWithAggregatesFilter<"Data"> | string
    headers?: StringWithAggregatesFilter<"Data"> | string
    name?: StringWithAggregatesFilter<"Data"> | string
    projectId?: IntWithAggregatesFilter<"Data"> | number
  }

  export type Background_ImageWhereInput = {
    AND?: Background_ImageWhereInput | Background_ImageWhereInput[]
    OR?: Background_ImageWhereInput[]
    NOT?: Background_ImageWhereInput | Background_ImageWhereInput[]
    id?: IntFilter<"Background_Image"> | number
    image_name?: StringFilter<"Background_Image"> | string
    Date?: StringFilter<"Background_Image"> | string
    is_set?: BoolFilter<"Background_Image"> | boolean
    projectId?: IntFilter<"Background_Image"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type Background_ImageOrderByWithRelationInput = {
    id?: SortOrder
    image_name?: SortOrder
    Date?: SortOrder
    is_set?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type Background_ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Background_ImageWhereInput | Background_ImageWhereInput[]
    OR?: Background_ImageWhereInput[]
    NOT?: Background_ImageWhereInput | Background_ImageWhereInput[]
    image_name?: StringFilter<"Background_Image"> | string
    Date?: StringFilter<"Background_Image"> | string
    is_set?: BoolFilter<"Background_Image"> | boolean
    projectId?: IntFilter<"Background_Image"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id">

  export type Background_ImageOrderByWithAggregationInput = {
    id?: SortOrder
    image_name?: SortOrder
    Date?: SortOrder
    is_set?: SortOrder
    projectId?: SortOrder
    _count?: Background_ImageCountOrderByAggregateInput
    _avg?: Background_ImageAvgOrderByAggregateInput
    _max?: Background_ImageMaxOrderByAggregateInput
    _min?: Background_ImageMinOrderByAggregateInput
    _sum?: Background_ImageSumOrderByAggregateInput
  }

  export type Background_ImageScalarWhereWithAggregatesInput = {
    AND?: Background_ImageScalarWhereWithAggregatesInput | Background_ImageScalarWhereWithAggregatesInput[]
    OR?: Background_ImageScalarWhereWithAggregatesInput[]
    NOT?: Background_ImageScalarWhereWithAggregatesInput | Background_ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Background_Image"> | number
    image_name?: StringWithAggregatesFilter<"Background_Image"> | string
    Date?: StringWithAggregatesFilter<"Background_Image"> | string
    is_set?: BoolWithAggregatesFilter<"Background_Image"> | boolean
    projectId?: IntWithAggregatesFilter<"Background_Image"> | number
  }

  export type ColumnWhereInput = {
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    id?: IntFilter<"Column"> | number
    bar_spacing?: FloatFilter<"Column"> | number
    border_radius?: IntFilter<"Column"> | number
    border_bld?: IntFilter<"Column"> | number
    border_color?: StringFilter<"Column"> | string
    isLegend?: BoolFilter<"Column"> | boolean
    legend_size?: IntFilter<"Column"> | number
    is_legend_italic?: BoolFilter<"Column"> | boolean
    is_legend_bold?: BoolFilter<"Column"> | boolean
    legend_color?: StringFilter<"Column"> | string
    isAxis?: BoolFilter<"Column"> | boolean
    axis_txt_size?: IntFilter<"Column"> | number
    is_axis_txt_italic?: BoolFilter<"Column"> | boolean
    is_axis_txt_bold?: BoolFilter<"Column"> | boolean
    axis_txt_color?: StringFilter<"Column"> | string
    axisX?: StringFilter<"Column"> | string
    axisY?: StringFilter<"Column"> | string
    projectId?: IntFilter<"Column"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type ColumnOrderByWithRelationInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type ColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    bar_spacing?: FloatFilter<"Column"> | number
    border_radius?: IntFilter<"Column"> | number
    border_bld?: IntFilter<"Column"> | number
    border_color?: StringFilter<"Column"> | string
    isLegend?: BoolFilter<"Column"> | boolean
    legend_size?: IntFilter<"Column"> | number
    is_legend_italic?: BoolFilter<"Column"> | boolean
    is_legend_bold?: BoolFilter<"Column"> | boolean
    legend_color?: StringFilter<"Column"> | string
    isAxis?: BoolFilter<"Column"> | boolean
    axis_txt_size?: IntFilter<"Column"> | number
    is_axis_txt_italic?: BoolFilter<"Column"> | boolean
    is_axis_txt_bold?: BoolFilter<"Column"> | boolean
    axis_txt_color?: StringFilter<"Column"> | string
    axisX?: StringFilter<"Column"> | string
    axisY?: StringFilter<"Column"> | string
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id" | "projectId">

  export type ColumnOrderByWithAggregationInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
    _count?: ColumnCountOrderByAggregateInput
    _avg?: ColumnAvgOrderByAggregateInput
    _max?: ColumnMaxOrderByAggregateInput
    _min?: ColumnMinOrderByAggregateInput
    _sum?: ColumnSumOrderByAggregateInput
  }

  export type ColumnScalarWhereWithAggregatesInput = {
    AND?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    OR?: ColumnScalarWhereWithAggregatesInput[]
    NOT?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Column"> | number
    bar_spacing?: FloatWithAggregatesFilter<"Column"> | number
    border_radius?: IntWithAggregatesFilter<"Column"> | number
    border_bld?: IntWithAggregatesFilter<"Column"> | number
    border_color?: StringWithAggregatesFilter<"Column"> | string
    isLegend?: BoolWithAggregatesFilter<"Column"> | boolean
    legend_size?: IntWithAggregatesFilter<"Column"> | number
    is_legend_italic?: BoolWithAggregatesFilter<"Column"> | boolean
    is_legend_bold?: BoolWithAggregatesFilter<"Column"> | boolean
    legend_color?: StringWithAggregatesFilter<"Column"> | string
    isAxis?: BoolWithAggregatesFilter<"Column"> | boolean
    axis_txt_size?: IntWithAggregatesFilter<"Column"> | number
    is_axis_txt_italic?: BoolWithAggregatesFilter<"Column"> | boolean
    is_axis_txt_bold?: BoolWithAggregatesFilter<"Column"> | boolean
    axis_txt_color?: StringWithAggregatesFilter<"Column"> | string
    axisX?: StringWithAggregatesFilter<"Column"> | string
    axisY?: StringWithAggregatesFilter<"Column"> | string
    projectId?: IntWithAggregatesFilter<"Column"> | number
  }

  export type BarsWhereInput = {
    AND?: BarsWhereInput | BarsWhereInput[]
    OR?: BarsWhereInput[]
    NOT?: BarsWhereInput | BarsWhereInput[]
    id?: IntFilter<"Bars"> | number
    bar_spacing?: FloatFilter<"Bars"> | number
    border_radius?: IntFilter<"Bars"> | number
    border_bld?: IntFilter<"Bars"> | number
    border_color?: StringFilter<"Bars"> | string
    isLegend?: BoolFilter<"Bars"> | boolean
    legend_size?: IntFilter<"Bars"> | number
    is_legend_italic?: BoolFilter<"Bars"> | boolean
    is_legend_bold?: BoolFilter<"Bars"> | boolean
    legend_color?: StringFilter<"Bars"> | string
    isAxis?: BoolFilter<"Bars"> | boolean
    axis_txt_size?: IntFilter<"Bars"> | number
    is_axis_txt_italic?: BoolFilter<"Bars"> | boolean
    is_axis_txt_bold?: BoolFilter<"Bars"> | boolean
    axis_txt_color?: StringFilter<"Bars"> | string
    axisX?: StringFilter<"Bars"> | string
    axisY?: StringFilter<"Bars"> | string
    projectId?: IntFilter<"Bars"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type BarsOrderByWithRelationInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type BarsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: BarsWhereInput | BarsWhereInput[]
    OR?: BarsWhereInput[]
    NOT?: BarsWhereInput | BarsWhereInput[]
    bar_spacing?: FloatFilter<"Bars"> | number
    border_radius?: IntFilter<"Bars"> | number
    border_bld?: IntFilter<"Bars"> | number
    border_color?: StringFilter<"Bars"> | string
    isLegend?: BoolFilter<"Bars"> | boolean
    legend_size?: IntFilter<"Bars"> | number
    is_legend_italic?: BoolFilter<"Bars"> | boolean
    is_legend_bold?: BoolFilter<"Bars"> | boolean
    legend_color?: StringFilter<"Bars"> | string
    isAxis?: BoolFilter<"Bars"> | boolean
    axis_txt_size?: IntFilter<"Bars"> | number
    is_axis_txt_italic?: BoolFilter<"Bars"> | boolean
    is_axis_txt_bold?: BoolFilter<"Bars"> | boolean
    axis_txt_color?: StringFilter<"Bars"> | string
    axisX?: StringFilter<"Bars"> | string
    axisY?: StringFilter<"Bars"> | string
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id" | "projectId">

  export type BarsOrderByWithAggregationInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
    _count?: BarsCountOrderByAggregateInput
    _avg?: BarsAvgOrderByAggregateInput
    _max?: BarsMaxOrderByAggregateInput
    _min?: BarsMinOrderByAggregateInput
    _sum?: BarsSumOrderByAggregateInput
  }

  export type BarsScalarWhereWithAggregatesInput = {
    AND?: BarsScalarWhereWithAggregatesInput | BarsScalarWhereWithAggregatesInput[]
    OR?: BarsScalarWhereWithAggregatesInput[]
    NOT?: BarsScalarWhereWithAggregatesInput | BarsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bars"> | number
    bar_spacing?: FloatWithAggregatesFilter<"Bars"> | number
    border_radius?: IntWithAggregatesFilter<"Bars"> | number
    border_bld?: IntWithAggregatesFilter<"Bars"> | number
    border_color?: StringWithAggregatesFilter<"Bars"> | string
    isLegend?: BoolWithAggregatesFilter<"Bars"> | boolean
    legend_size?: IntWithAggregatesFilter<"Bars"> | number
    is_legend_italic?: BoolWithAggregatesFilter<"Bars"> | boolean
    is_legend_bold?: BoolWithAggregatesFilter<"Bars"> | boolean
    legend_color?: StringWithAggregatesFilter<"Bars"> | string
    isAxis?: BoolWithAggregatesFilter<"Bars"> | boolean
    axis_txt_size?: IntWithAggregatesFilter<"Bars"> | number
    is_axis_txt_italic?: BoolWithAggregatesFilter<"Bars"> | boolean
    is_axis_txt_bold?: BoolWithAggregatesFilter<"Bars"> | boolean
    axis_txt_color?: StringWithAggregatesFilter<"Bars"> | string
    axisX?: StringWithAggregatesFilter<"Bars"> | string
    axisY?: StringWithAggregatesFilter<"Bars"> | string
    projectId?: IntWithAggregatesFilter<"Bars"> | number
  }

  export type PieWhereInput = {
    AND?: PieWhereInput | PieWhereInput[]
    OR?: PieWhereInput[]
    NOT?: PieWhereInput | PieWhereInput[]
    id?: IntFilter<"Pie"> | number
    start_angle?: IntFilter<"Pie"> | number
    isLegend?: BoolFilter<"Pie"> | boolean
    legend_size?: IntFilter<"Pie"> | number
    is_legend_italic?: BoolFilter<"Pie"> | boolean
    is_legend_bold?: BoolFilter<"Pie"> | boolean
    legend_color?: StringFilter<"Pie"> | string
    projectId?: IntFilter<"Pie"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type PieOrderByWithRelationInput = {
    id?: SortOrder
    start_angle?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type PieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: PieWhereInput | PieWhereInput[]
    OR?: PieWhereInput[]
    NOT?: PieWhereInput | PieWhereInput[]
    start_angle?: IntFilter<"Pie"> | number
    isLegend?: BoolFilter<"Pie"> | boolean
    legend_size?: IntFilter<"Pie"> | number
    is_legend_italic?: BoolFilter<"Pie"> | boolean
    is_legend_bold?: BoolFilter<"Pie"> | boolean
    legend_color?: StringFilter<"Pie"> | string
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id" | "projectId">

  export type PieOrderByWithAggregationInput = {
    id?: SortOrder
    start_angle?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
    _count?: PieCountOrderByAggregateInput
    _avg?: PieAvgOrderByAggregateInput
    _max?: PieMaxOrderByAggregateInput
    _min?: PieMinOrderByAggregateInput
    _sum?: PieSumOrderByAggregateInput
  }

  export type PieScalarWhereWithAggregatesInput = {
    AND?: PieScalarWhereWithAggregatesInput | PieScalarWhereWithAggregatesInput[]
    OR?: PieScalarWhereWithAggregatesInput[]
    NOT?: PieScalarWhereWithAggregatesInput | PieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pie"> | number
    start_angle?: IntWithAggregatesFilter<"Pie"> | number
    isLegend?: BoolWithAggregatesFilter<"Pie"> | boolean
    legend_size?: IntWithAggregatesFilter<"Pie"> | number
    is_legend_italic?: BoolWithAggregatesFilter<"Pie"> | boolean
    is_legend_bold?: BoolWithAggregatesFilter<"Pie"> | boolean
    legend_color?: StringWithAggregatesFilter<"Pie"> | string
    projectId?: IntWithAggregatesFilter<"Pie"> | number
  }

  export type DonutWhereInput = {
    AND?: DonutWhereInput | DonutWhereInput[]
    OR?: DonutWhereInput[]
    NOT?: DonutWhereInput | DonutWhereInput[]
    id?: IntFilter<"Donut"> | number
    start_angle?: IntFilter<"Donut"> | number
    inner_radius?: IntFilter<"Donut"> | number
    isLegend?: BoolFilter<"Donut"> | boolean
    legend_size?: IntFilter<"Donut"> | number
    is_legend_italic?: BoolFilter<"Donut"> | boolean
    is_legend_bold?: BoolFilter<"Donut"> | boolean
    legend_color?: StringFilter<"Donut"> | string
    projectId?: IntFilter<"Donut"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type DonutOrderByWithRelationInput = {
    id?: SortOrder
    start_angle?: SortOrder
    inner_radius?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type DonutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: DonutWhereInput | DonutWhereInput[]
    OR?: DonutWhereInput[]
    NOT?: DonutWhereInput | DonutWhereInput[]
    start_angle?: IntFilter<"Donut"> | number
    inner_radius?: IntFilter<"Donut"> | number
    isLegend?: BoolFilter<"Donut"> | boolean
    legend_size?: IntFilter<"Donut"> | number
    is_legend_italic?: BoolFilter<"Donut"> | boolean
    is_legend_bold?: BoolFilter<"Donut"> | boolean
    legend_color?: StringFilter<"Donut"> | string
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id" | "projectId">

  export type DonutOrderByWithAggregationInput = {
    id?: SortOrder
    start_angle?: SortOrder
    inner_radius?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
    _count?: DonutCountOrderByAggregateInput
    _avg?: DonutAvgOrderByAggregateInput
    _max?: DonutMaxOrderByAggregateInput
    _min?: DonutMinOrderByAggregateInput
    _sum?: DonutSumOrderByAggregateInput
  }

  export type DonutScalarWhereWithAggregatesInput = {
    AND?: DonutScalarWhereWithAggregatesInput | DonutScalarWhereWithAggregatesInput[]
    OR?: DonutScalarWhereWithAggregatesInput[]
    NOT?: DonutScalarWhereWithAggregatesInput | DonutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donut"> | number
    start_angle?: IntWithAggregatesFilter<"Donut"> | number
    inner_radius?: IntWithAggregatesFilter<"Donut"> | number
    isLegend?: BoolWithAggregatesFilter<"Donut"> | boolean
    legend_size?: IntWithAggregatesFilter<"Donut"> | number
    is_legend_italic?: BoolWithAggregatesFilter<"Donut"> | boolean
    is_legend_bold?: BoolWithAggregatesFilter<"Donut"> | boolean
    legend_color?: StringWithAggregatesFilter<"Donut"> | string
    projectId?: IntWithAggregatesFilter<"Donut"> | number
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: IntFilter<"Area"> | number
    show_pointer_mark?: BoolFilter<"Area"> | boolean
    isAxis?: BoolFilter<"Area"> | boolean
    axis_txt_size?: IntFilter<"Area"> | number
    is_axis_txt_italic?: BoolFilter<"Area"> | boolean
    is_axis_txt_bold?: BoolFilter<"Area"> | boolean
    axis_txt_color?: StringFilter<"Area"> | string
    axisX?: StringFilter<"Area"> | string
    axisY?: StringFilter<"Area"> | string
    isLegend?: BoolFilter<"Area"> | boolean
    legend_size?: IntFilter<"Area"> | number
    is_legend_italic?: BoolFilter<"Area"> | boolean
    is_legend_bold?: BoolFilter<"Area"> | boolean
    legend_color?: StringFilter<"Area"> | string
    thickness?: IntFilter<"Area"> | number
    is_line_smoth?: BoolFilter<"Area"> | boolean
    projectId?: IntFilter<"Area"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    show_pointer_mark?: BoolFilter<"Area"> | boolean
    isAxis?: BoolFilter<"Area"> | boolean
    axis_txt_size?: IntFilter<"Area"> | number
    is_axis_txt_italic?: BoolFilter<"Area"> | boolean
    is_axis_txt_bold?: BoolFilter<"Area"> | boolean
    axis_txt_color?: StringFilter<"Area"> | string
    axisX?: StringFilter<"Area"> | string
    axisY?: StringFilter<"Area"> | string
    isLegend?: BoolFilter<"Area"> | boolean
    legend_size?: IntFilter<"Area"> | number
    is_legend_italic?: BoolFilter<"Area"> | boolean
    is_legend_bold?: BoolFilter<"Area"> | boolean
    legend_color?: StringFilter<"Area"> | string
    thickness?: IntFilter<"Area"> | number
    is_line_smoth?: BoolFilter<"Area"> | boolean
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id" | "projectId">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Area"> | number
    show_pointer_mark?: BoolWithAggregatesFilter<"Area"> | boolean
    isAxis?: BoolWithAggregatesFilter<"Area"> | boolean
    axis_txt_size?: IntWithAggregatesFilter<"Area"> | number
    is_axis_txt_italic?: BoolWithAggregatesFilter<"Area"> | boolean
    is_axis_txt_bold?: BoolWithAggregatesFilter<"Area"> | boolean
    axis_txt_color?: StringWithAggregatesFilter<"Area"> | string
    axisX?: StringWithAggregatesFilter<"Area"> | string
    axisY?: StringWithAggregatesFilter<"Area"> | string
    isLegend?: BoolWithAggregatesFilter<"Area"> | boolean
    legend_size?: IntWithAggregatesFilter<"Area"> | number
    is_legend_italic?: BoolWithAggregatesFilter<"Area"> | boolean
    is_legend_bold?: BoolWithAggregatesFilter<"Area"> | boolean
    legend_color?: StringWithAggregatesFilter<"Area"> | string
    thickness?: IntWithAggregatesFilter<"Area"> | number
    is_line_smoth?: BoolWithAggregatesFilter<"Area"> | boolean
    projectId?: IntWithAggregatesFilter<"Area"> | number
  }

  export type LineWhereInput = {
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    id?: IntFilter<"Line"> | number
    show_pointer_mark?: BoolFilter<"Line"> | boolean
    isAxis?: BoolFilter<"Line"> | boolean
    axis_txt_size?: IntFilter<"Line"> | number
    is_axis_txt_italic?: BoolFilter<"Line"> | boolean
    is_axis_txt_bold?: BoolFilter<"Line"> | boolean
    axis_txt_color?: StringFilter<"Line"> | string
    axisX?: StringFilter<"Line"> | string
    axisY?: StringFilter<"Line"> | string
    isLegend?: BoolFilter<"Line"> | boolean
    legend_size?: IntFilter<"Line"> | number
    is_legend_italic?: BoolFilter<"Line"> | boolean
    is_legend_bold?: BoolFilter<"Line"> | boolean
    legend_color?: StringFilter<"Line"> | string
    thickness?: IntFilter<"Line"> | number
    is_line_smoth?: BoolFilter<"Line"> | boolean
    projectId?: IntFilter<"Line"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type LineOrderByWithRelationInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type LineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    show_pointer_mark?: BoolFilter<"Line"> | boolean
    isAxis?: BoolFilter<"Line"> | boolean
    axis_txt_size?: IntFilter<"Line"> | number
    is_axis_txt_italic?: BoolFilter<"Line"> | boolean
    is_axis_txt_bold?: BoolFilter<"Line"> | boolean
    axis_txt_color?: StringFilter<"Line"> | string
    axisX?: StringFilter<"Line"> | string
    axisY?: StringFilter<"Line"> | string
    isLegend?: BoolFilter<"Line"> | boolean
    legend_size?: IntFilter<"Line"> | number
    is_legend_italic?: BoolFilter<"Line"> | boolean
    is_legend_bold?: BoolFilter<"Line"> | boolean
    legend_color?: StringFilter<"Line"> | string
    thickness?: IntFilter<"Line"> | number
    is_line_smoth?: BoolFilter<"Line"> | boolean
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id" | "projectId">

  export type LineOrderByWithAggregationInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
    _count?: LineCountOrderByAggregateInput
    _avg?: LineAvgOrderByAggregateInput
    _max?: LineMaxOrderByAggregateInput
    _min?: LineMinOrderByAggregateInput
    _sum?: LineSumOrderByAggregateInput
  }

  export type LineScalarWhereWithAggregatesInput = {
    AND?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    OR?: LineScalarWhereWithAggregatesInput[]
    NOT?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Line"> | number
    show_pointer_mark?: BoolWithAggregatesFilter<"Line"> | boolean
    isAxis?: BoolWithAggregatesFilter<"Line"> | boolean
    axis_txt_size?: IntWithAggregatesFilter<"Line"> | number
    is_axis_txt_italic?: BoolWithAggregatesFilter<"Line"> | boolean
    is_axis_txt_bold?: BoolWithAggregatesFilter<"Line"> | boolean
    axis_txt_color?: StringWithAggregatesFilter<"Line"> | string
    axisX?: StringWithAggregatesFilter<"Line"> | string
    axisY?: StringWithAggregatesFilter<"Line"> | string
    isLegend?: BoolWithAggregatesFilter<"Line"> | boolean
    legend_size?: IntWithAggregatesFilter<"Line"> | number
    is_legend_italic?: BoolWithAggregatesFilter<"Line"> | boolean
    is_legend_bold?: BoolWithAggregatesFilter<"Line"> | boolean
    legend_color?: StringWithAggregatesFilter<"Line"> | string
    thickness?: IntWithAggregatesFilter<"Line"> | number
    is_line_smoth?: BoolWithAggregatesFilter<"Line"> | boolean
    projectId?: IntWithAggregatesFilter<"Line"> | number
  }

  export type Column_LineWhereInput = {
    AND?: Column_LineWhereInput | Column_LineWhereInput[]
    OR?: Column_LineWhereInput[]
    NOT?: Column_LineWhereInput | Column_LineWhereInput[]
    id?: IntFilter<"Column_Line"> | number
    b_bar_spacing?: FloatFilter<"Column_Line"> | number
    b_border_radius?: IntFilter<"Column_Line"> | number
    b_border_bld?: IntFilter<"Column_Line"> | number
    b_border_color?: StringFilter<"Column_Line"> | string
    b_isLegend?: BoolFilter<"Column_Line"> | boolean
    b_legend_size?: IntFilter<"Column_Line"> | number
    b_is_legend_italic?: BoolFilter<"Column_Line"> | boolean
    b_is_legend_bold?: BoolFilter<"Column_Line"> | boolean
    b_legend_color?: StringFilter<"Column_Line"> | string
    b_isAxis?: BoolFilter<"Column_Line"> | boolean
    b_axis_txt_size?: IntFilter<"Column_Line"> | number
    b_is_axis_txt_italic?: BoolFilter<"Column_Line"> | boolean
    b_is_axis_txt_bold?: BoolFilter<"Column_Line"> | boolean
    b_axis_txt_color?: StringFilter<"Column_Line"> | string
    b_axisX?: StringFilter<"Column_Line"> | string
    b_axisY?: StringFilter<"Column_Line"> | string
    l_show_pointer_mark?: BoolFilter<"Column_Line"> | boolean
    l_isAxis?: BoolFilter<"Column_Line"> | boolean
    l_axis_txt_size?: IntFilter<"Column_Line"> | number
    l_is_axis_txt_italic?: BoolFilter<"Column_Line"> | boolean
    l_is_axis_txt_bold?: BoolFilter<"Column_Line"> | boolean
    l_axis_txt_color?: StringFilter<"Column_Line"> | string
    l_axisX?: StringFilter<"Column_Line"> | string
    l_axisY?: StringFilter<"Column_Line"> | string
    l_isLegend?: BoolFilter<"Column_Line"> | boolean
    l_legend_size?: IntFilter<"Column_Line"> | number
    l_is_legend_italic?: BoolFilter<"Column_Line"> | boolean
    l_is_legend_bold?: BoolFilter<"Column_Line"> | boolean
    l_legend_color?: StringFilter<"Column_Line"> | string
    l_thickness?: IntFilter<"Column_Line"> | number
    l_is_line_smoth?: BoolFilter<"Column_Line"> | boolean
    projectId?: IntFilter<"Column_Line"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type Column_LineOrderByWithRelationInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    l_show_pointer_mark?: SortOrder
    l_isAxis?: SortOrder
    l_axis_txt_size?: SortOrder
    l_is_axis_txt_italic?: SortOrder
    l_is_axis_txt_bold?: SortOrder
    l_axis_txt_color?: SortOrder
    l_axisX?: SortOrder
    l_axisY?: SortOrder
    l_isLegend?: SortOrder
    l_legend_size?: SortOrder
    l_is_legend_italic?: SortOrder
    l_is_legend_bold?: SortOrder
    l_legend_color?: SortOrder
    l_thickness?: SortOrder
    l_is_line_smoth?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type Column_LineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: Column_LineWhereInput | Column_LineWhereInput[]
    OR?: Column_LineWhereInput[]
    NOT?: Column_LineWhereInput | Column_LineWhereInput[]
    b_bar_spacing?: FloatFilter<"Column_Line"> | number
    b_border_radius?: IntFilter<"Column_Line"> | number
    b_border_bld?: IntFilter<"Column_Line"> | number
    b_border_color?: StringFilter<"Column_Line"> | string
    b_isLegend?: BoolFilter<"Column_Line"> | boolean
    b_legend_size?: IntFilter<"Column_Line"> | number
    b_is_legend_italic?: BoolFilter<"Column_Line"> | boolean
    b_is_legend_bold?: BoolFilter<"Column_Line"> | boolean
    b_legend_color?: StringFilter<"Column_Line"> | string
    b_isAxis?: BoolFilter<"Column_Line"> | boolean
    b_axis_txt_size?: IntFilter<"Column_Line"> | number
    b_is_axis_txt_italic?: BoolFilter<"Column_Line"> | boolean
    b_is_axis_txt_bold?: BoolFilter<"Column_Line"> | boolean
    b_axis_txt_color?: StringFilter<"Column_Line"> | string
    b_axisX?: StringFilter<"Column_Line"> | string
    b_axisY?: StringFilter<"Column_Line"> | string
    l_show_pointer_mark?: BoolFilter<"Column_Line"> | boolean
    l_isAxis?: BoolFilter<"Column_Line"> | boolean
    l_axis_txt_size?: IntFilter<"Column_Line"> | number
    l_is_axis_txt_italic?: BoolFilter<"Column_Line"> | boolean
    l_is_axis_txt_bold?: BoolFilter<"Column_Line"> | boolean
    l_axis_txt_color?: StringFilter<"Column_Line"> | string
    l_axisX?: StringFilter<"Column_Line"> | string
    l_axisY?: StringFilter<"Column_Line"> | string
    l_isLegend?: BoolFilter<"Column_Line"> | boolean
    l_legend_size?: IntFilter<"Column_Line"> | number
    l_is_legend_italic?: BoolFilter<"Column_Line"> | boolean
    l_is_legend_bold?: BoolFilter<"Column_Line"> | boolean
    l_legend_color?: StringFilter<"Column_Line"> | string
    l_thickness?: IntFilter<"Column_Line"> | number
    l_is_line_smoth?: BoolFilter<"Column_Line"> | boolean
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id" | "projectId">

  export type Column_LineOrderByWithAggregationInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    l_show_pointer_mark?: SortOrder
    l_isAxis?: SortOrder
    l_axis_txt_size?: SortOrder
    l_is_axis_txt_italic?: SortOrder
    l_is_axis_txt_bold?: SortOrder
    l_axis_txt_color?: SortOrder
    l_axisX?: SortOrder
    l_axisY?: SortOrder
    l_isLegend?: SortOrder
    l_legend_size?: SortOrder
    l_is_legend_italic?: SortOrder
    l_is_legend_bold?: SortOrder
    l_legend_color?: SortOrder
    l_thickness?: SortOrder
    l_is_line_smoth?: SortOrder
    projectId?: SortOrder
    _count?: Column_LineCountOrderByAggregateInput
    _avg?: Column_LineAvgOrderByAggregateInput
    _max?: Column_LineMaxOrderByAggregateInput
    _min?: Column_LineMinOrderByAggregateInput
    _sum?: Column_LineSumOrderByAggregateInput
  }

  export type Column_LineScalarWhereWithAggregatesInput = {
    AND?: Column_LineScalarWhereWithAggregatesInput | Column_LineScalarWhereWithAggregatesInput[]
    OR?: Column_LineScalarWhereWithAggregatesInput[]
    NOT?: Column_LineScalarWhereWithAggregatesInput | Column_LineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Column_Line"> | number
    b_bar_spacing?: FloatWithAggregatesFilter<"Column_Line"> | number
    b_border_radius?: IntWithAggregatesFilter<"Column_Line"> | number
    b_border_bld?: IntWithAggregatesFilter<"Column_Line"> | number
    b_border_color?: StringWithAggregatesFilter<"Column_Line"> | string
    b_isLegend?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    b_legend_size?: IntWithAggregatesFilter<"Column_Line"> | number
    b_is_legend_italic?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    b_is_legend_bold?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    b_legend_color?: StringWithAggregatesFilter<"Column_Line"> | string
    b_isAxis?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    b_axis_txt_size?: IntWithAggregatesFilter<"Column_Line"> | number
    b_is_axis_txt_italic?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    b_is_axis_txt_bold?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    b_axis_txt_color?: StringWithAggregatesFilter<"Column_Line"> | string
    b_axisX?: StringWithAggregatesFilter<"Column_Line"> | string
    b_axisY?: StringWithAggregatesFilter<"Column_Line"> | string
    l_show_pointer_mark?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    l_isAxis?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    l_axis_txt_size?: IntWithAggregatesFilter<"Column_Line"> | number
    l_is_axis_txt_italic?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    l_is_axis_txt_bold?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    l_axis_txt_color?: StringWithAggregatesFilter<"Column_Line"> | string
    l_axisX?: StringWithAggregatesFilter<"Column_Line"> | string
    l_axisY?: StringWithAggregatesFilter<"Column_Line"> | string
    l_isLegend?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    l_legend_size?: IntWithAggregatesFilter<"Column_Line"> | number
    l_is_legend_italic?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    l_is_legend_bold?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    l_legend_color?: StringWithAggregatesFilter<"Column_Line"> | string
    l_thickness?: IntWithAggregatesFilter<"Column_Line"> | number
    l_is_line_smoth?: BoolWithAggregatesFilter<"Column_Line"> | boolean
    projectId?: IntWithAggregatesFilter<"Column_Line"> | number
  }

  export type Column_AreaWhereInput = {
    AND?: Column_AreaWhereInput | Column_AreaWhereInput[]
    OR?: Column_AreaWhereInput[]
    NOT?: Column_AreaWhereInput | Column_AreaWhereInput[]
    id?: IntFilter<"Column_Area"> | number
    b_bar_spacing?: FloatFilter<"Column_Area"> | number
    b_border_radius?: IntFilter<"Column_Area"> | number
    b_border_bld?: IntFilter<"Column_Area"> | number
    b_border_color?: StringFilter<"Column_Area"> | string
    b_isLegend?: BoolFilter<"Column_Area"> | boolean
    b_legend_size?: IntFilter<"Column_Area"> | number
    b_is_legend_italic?: BoolFilter<"Column_Area"> | boolean
    b_is_legend_bold?: BoolFilter<"Column_Area"> | boolean
    b_legend_color?: StringFilter<"Column_Area"> | string
    b_isAxis?: BoolFilter<"Column_Area"> | boolean
    b_axis_txt_size?: IntFilter<"Column_Area"> | number
    b_is_axis_txt_italic?: BoolFilter<"Column_Area"> | boolean
    b_is_axis_txt_bold?: BoolFilter<"Column_Area"> | boolean
    b_axis_txt_color?: StringFilter<"Column_Area"> | string
    b_axisX?: StringFilter<"Column_Area"> | string
    b_axisY?: StringFilter<"Column_Area"> | string
    a_show_pointer_mark?: BoolFilter<"Column_Area"> | boolean
    a_isAxis?: BoolFilter<"Column_Area"> | boolean
    a_axis_txt_size?: IntFilter<"Column_Area"> | number
    a_is_axis_txt_italic?: BoolFilter<"Column_Area"> | boolean
    a_is_axis_txt_bold?: BoolFilter<"Column_Area"> | boolean
    a_axis_txt_color?: StringFilter<"Column_Area"> | string
    a_axisX?: StringFilter<"Column_Area"> | string
    a_axisY?: StringFilter<"Column_Area"> | string
    a_isLegend?: BoolFilter<"Column_Area"> | boolean
    a_legend_size?: IntFilter<"Column_Area"> | number
    a_is_legend_italic?: BoolFilter<"Column_Area"> | boolean
    a_is_legend_bold?: BoolFilter<"Column_Area"> | boolean
    a_legend_color?: StringFilter<"Column_Area"> | string
    a_thickness?: IntFilter<"Column_Area"> | number
    a_is_line_smoth?: BoolFilter<"Column_Area"> | boolean
    projectId?: IntFilter<"Column_Area"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type Column_AreaOrderByWithRelationInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    a_show_pointer_mark?: SortOrder
    a_isAxis?: SortOrder
    a_axis_txt_size?: SortOrder
    a_is_axis_txt_italic?: SortOrder
    a_is_axis_txt_bold?: SortOrder
    a_axis_txt_color?: SortOrder
    a_axisX?: SortOrder
    a_axisY?: SortOrder
    a_isLegend?: SortOrder
    a_legend_size?: SortOrder
    a_is_legend_italic?: SortOrder
    a_is_legend_bold?: SortOrder
    a_legend_color?: SortOrder
    a_thickness?: SortOrder
    a_is_line_smoth?: SortOrder
    projectId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type Column_AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: Column_AreaWhereInput | Column_AreaWhereInput[]
    OR?: Column_AreaWhereInput[]
    NOT?: Column_AreaWhereInput | Column_AreaWhereInput[]
    b_bar_spacing?: FloatFilter<"Column_Area"> | number
    b_border_radius?: IntFilter<"Column_Area"> | number
    b_border_bld?: IntFilter<"Column_Area"> | number
    b_border_color?: StringFilter<"Column_Area"> | string
    b_isLegend?: BoolFilter<"Column_Area"> | boolean
    b_legend_size?: IntFilter<"Column_Area"> | number
    b_is_legend_italic?: BoolFilter<"Column_Area"> | boolean
    b_is_legend_bold?: BoolFilter<"Column_Area"> | boolean
    b_legend_color?: StringFilter<"Column_Area"> | string
    b_isAxis?: BoolFilter<"Column_Area"> | boolean
    b_axis_txt_size?: IntFilter<"Column_Area"> | number
    b_is_axis_txt_italic?: BoolFilter<"Column_Area"> | boolean
    b_is_axis_txt_bold?: BoolFilter<"Column_Area"> | boolean
    b_axis_txt_color?: StringFilter<"Column_Area"> | string
    b_axisX?: StringFilter<"Column_Area"> | string
    b_axisY?: StringFilter<"Column_Area"> | string
    a_show_pointer_mark?: BoolFilter<"Column_Area"> | boolean
    a_isAxis?: BoolFilter<"Column_Area"> | boolean
    a_axis_txt_size?: IntFilter<"Column_Area"> | number
    a_is_axis_txt_italic?: BoolFilter<"Column_Area"> | boolean
    a_is_axis_txt_bold?: BoolFilter<"Column_Area"> | boolean
    a_axis_txt_color?: StringFilter<"Column_Area"> | string
    a_axisX?: StringFilter<"Column_Area"> | string
    a_axisY?: StringFilter<"Column_Area"> | string
    a_isLegend?: BoolFilter<"Column_Area"> | boolean
    a_legend_size?: IntFilter<"Column_Area"> | number
    a_is_legend_italic?: BoolFilter<"Column_Area"> | boolean
    a_is_legend_bold?: BoolFilter<"Column_Area"> | boolean
    a_legend_color?: StringFilter<"Column_Area"> | string
    a_thickness?: IntFilter<"Column_Area"> | number
    a_is_line_smoth?: BoolFilter<"Column_Area"> | boolean
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id" | "projectId">

  export type Column_AreaOrderByWithAggregationInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    a_show_pointer_mark?: SortOrder
    a_isAxis?: SortOrder
    a_axis_txt_size?: SortOrder
    a_is_axis_txt_italic?: SortOrder
    a_is_axis_txt_bold?: SortOrder
    a_axis_txt_color?: SortOrder
    a_axisX?: SortOrder
    a_axisY?: SortOrder
    a_isLegend?: SortOrder
    a_legend_size?: SortOrder
    a_is_legend_italic?: SortOrder
    a_is_legend_bold?: SortOrder
    a_legend_color?: SortOrder
    a_thickness?: SortOrder
    a_is_line_smoth?: SortOrder
    projectId?: SortOrder
    _count?: Column_AreaCountOrderByAggregateInput
    _avg?: Column_AreaAvgOrderByAggregateInput
    _max?: Column_AreaMaxOrderByAggregateInput
    _min?: Column_AreaMinOrderByAggregateInput
    _sum?: Column_AreaSumOrderByAggregateInput
  }

  export type Column_AreaScalarWhereWithAggregatesInput = {
    AND?: Column_AreaScalarWhereWithAggregatesInput | Column_AreaScalarWhereWithAggregatesInput[]
    OR?: Column_AreaScalarWhereWithAggregatesInput[]
    NOT?: Column_AreaScalarWhereWithAggregatesInput | Column_AreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Column_Area"> | number
    b_bar_spacing?: FloatWithAggregatesFilter<"Column_Area"> | number
    b_border_radius?: IntWithAggregatesFilter<"Column_Area"> | number
    b_border_bld?: IntWithAggregatesFilter<"Column_Area"> | number
    b_border_color?: StringWithAggregatesFilter<"Column_Area"> | string
    b_isLegend?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    b_legend_size?: IntWithAggregatesFilter<"Column_Area"> | number
    b_is_legend_italic?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    b_is_legend_bold?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    b_legend_color?: StringWithAggregatesFilter<"Column_Area"> | string
    b_isAxis?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    b_axis_txt_size?: IntWithAggregatesFilter<"Column_Area"> | number
    b_is_axis_txt_italic?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    b_is_axis_txt_bold?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    b_axis_txt_color?: StringWithAggregatesFilter<"Column_Area"> | string
    b_axisX?: StringWithAggregatesFilter<"Column_Area"> | string
    b_axisY?: StringWithAggregatesFilter<"Column_Area"> | string
    a_show_pointer_mark?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    a_isAxis?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    a_axis_txt_size?: IntWithAggregatesFilter<"Column_Area"> | number
    a_is_axis_txt_italic?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    a_is_axis_txt_bold?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    a_axis_txt_color?: StringWithAggregatesFilter<"Column_Area"> | string
    a_axisX?: StringWithAggregatesFilter<"Column_Area"> | string
    a_axisY?: StringWithAggregatesFilter<"Column_Area"> | string
    a_isLegend?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    a_legend_size?: IntWithAggregatesFilter<"Column_Area"> | number
    a_is_legend_italic?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    a_is_legend_bold?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    a_legend_color?: StringWithAggregatesFilter<"Column_Area"> | string
    a_thickness?: IntWithAggregatesFilter<"Column_Area"> | number
    a_is_line_smoth?: BoolWithAggregatesFilter<"Column_Area"> | boolean
    projectId?: IntWithAggregatesFilter<"Column_Area"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    isConfirmed?: boolean | null
    v_code: string
    token: string
    projects?: ProjectsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    isConfirmed?: boolean | null
    v_code: string
    token: string
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    v_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    projects?: ProjectsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    v_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    isConfirmed?: boolean | null
    v_code: string
    token: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    v_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    v_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsCreateInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUpdateInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateManyInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
  }

  export type ProjectsUpdateManyMutationInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
  }

  export type DataCreateInput = {
    data: string
    headers: string
    name: string
    project: ProjectsCreateNestedOneWithoutDataInput
  }

  export type DataUncheckedCreateInput = {
    id?: number
    data: string
    headers: string
    name: string
    projectId: number
  }

  export type DataUpdateInput = {
    data?: StringFieldUpdateOperationsInput | string
    headers?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    project?: ProjectsUpdateOneRequiredWithoutDataNestedInput
  }

  export type DataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    headers?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type DataCreateManyInput = {
    id?: number
    data: string
    headers: string
    name: string
    projectId: number
  }

  export type DataUpdateManyMutationInput = {
    data?: StringFieldUpdateOperationsInput | string
    headers?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    headers?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type Background_ImageCreateInput = {
    image_name: string
    Date: string
    is_set: boolean
    project: ProjectsCreateNestedOneWithoutBackground_imagesInput
  }

  export type Background_ImageUncheckedCreateInput = {
    id?: number
    image_name: string
    Date: string
    is_set: boolean
    projectId: number
  }

  export type Background_ImageUpdateInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    is_set?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectsUpdateOneRequiredWithoutBackground_imagesNestedInput
  }

  export type Background_ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    is_set?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type Background_ImageCreateManyInput = {
    id?: number
    image_name: string
    Date: string
    is_set: boolean
    projectId: number
  }

  export type Background_ImageUpdateManyMutationInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    is_set?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Background_ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    is_set?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnCreateInput = {
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    project: ProjectsCreateNestedOneWithoutColumnInput
  }

  export type ColumnUncheckedCreateInput = {
    id?: number
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    projectId: number
  }

  export type ColumnUpdateInput = {
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    project?: ProjectsUpdateOneRequiredWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnCreateManyInput = {
    id?: number
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    projectId: number
  }

  export type ColumnUpdateManyMutationInput = {
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
  }

  export type ColumnUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type BarsCreateInput = {
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    project: ProjectsCreateNestedOneWithoutBarsInput
  }

  export type BarsUncheckedCreateInput = {
    id?: number
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    projectId: number
  }

  export type BarsUpdateInput = {
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    project?: ProjectsUpdateOneRequiredWithoutBarsNestedInput
  }

  export type BarsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type BarsCreateManyInput = {
    id?: number
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    projectId: number
  }

  export type BarsUpdateManyMutationInput = {
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
  }

  export type BarsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type PieCreateInput = {
    start_angle?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    project: ProjectsCreateNestedOneWithoutPieInput
  }

  export type PieUncheckedCreateInput = {
    id?: number
    start_angle?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    projectId: number
  }

  export type PieUpdateInput = {
    start_angle?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    project?: ProjectsUpdateOneRequiredWithoutPieNestedInput
  }

  export type PieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_angle?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type PieCreateManyInput = {
    id?: number
    start_angle?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    projectId: number
  }

  export type PieUpdateManyMutationInput = {
    start_angle?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
  }

  export type PieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_angle?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type DonutCreateInput = {
    start_angle?: number
    inner_radius?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    project: ProjectsCreateNestedOneWithoutDonutInput
  }

  export type DonutUncheckedCreateInput = {
    id?: number
    start_angle?: number
    inner_radius?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    projectId: number
  }

  export type DonutUpdateInput = {
    start_angle?: IntFieldUpdateOperationsInput | number
    inner_radius?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    project?: ProjectsUpdateOneRequiredWithoutDonutNestedInput
  }

  export type DonutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_angle?: IntFieldUpdateOperationsInput | number
    inner_radius?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type DonutCreateManyInput = {
    id?: number
    start_angle?: number
    inner_radius?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    projectId: number
  }

  export type DonutUpdateManyMutationInput = {
    start_angle?: IntFieldUpdateOperationsInput | number
    inner_radius?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
  }

  export type DonutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_angle?: IntFieldUpdateOperationsInput | number
    inner_radius?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaCreateInput = {
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
    project: ProjectsCreateNestedOneWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: number
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
    projectId: number
  }

  export type AreaUpdateInput = {
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectsUpdateOneRequiredWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaCreateManyInput = {
    id?: number
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
    projectId: number
  }

  export type AreaUpdateManyMutationInput = {
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type LineCreateInput = {
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
    project: ProjectsCreateNestedOneWithoutLineInput
  }

  export type LineUncheckedCreateInput = {
    id?: number
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
    projectId: number
  }

  export type LineUpdateInput = {
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectsUpdateOneRequiredWithoutLineNestedInput
  }

  export type LineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type LineCreateManyInput = {
    id?: number
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
    projectId: number
  }

  export type LineUpdateManyMutationInput = {
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type Column_LineCreateInput = {
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    l_show_pointer_mark?: boolean
    l_isAxis?: boolean
    l_axis_txt_size?: number
    l_is_axis_txt_italic?: boolean
    l_is_axis_txt_bold?: boolean
    l_axis_txt_color?: string
    l_axisX?: string
    l_axisY?: string
    l_isLegend?: boolean
    l_legend_size?: number
    l_is_legend_italic?: boolean
    l_is_legend_bold?: boolean
    l_legend_color?: string
    l_thickness?: number
    l_is_line_smoth?: boolean
    project: ProjectsCreateNestedOneWithoutColumn_LineInput
  }

  export type Column_LineUncheckedCreateInput = {
    id?: number
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    l_show_pointer_mark?: boolean
    l_isAxis?: boolean
    l_axis_txt_size?: number
    l_is_axis_txt_italic?: boolean
    l_is_axis_txt_bold?: boolean
    l_axis_txt_color?: string
    l_axisX?: string
    l_axisY?: string
    l_isLegend?: boolean
    l_legend_size?: number
    l_is_legend_italic?: boolean
    l_is_legend_bold?: boolean
    l_legend_color?: string
    l_thickness?: number
    l_is_line_smoth?: boolean
    projectId: number
  }

  export type Column_LineUpdateInput = {
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    l_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    l_isAxis?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_size?: IntFieldUpdateOperationsInput | number
    l_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_color?: StringFieldUpdateOperationsInput | string
    l_axisX?: StringFieldUpdateOperationsInput | string
    l_axisY?: StringFieldUpdateOperationsInput | string
    l_isLegend?: BoolFieldUpdateOperationsInput | boolean
    l_legend_size?: IntFieldUpdateOperationsInput | number
    l_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    l_legend_color?: StringFieldUpdateOperationsInput | string
    l_thickness?: IntFieldUpdateOperationsInput | number
    l_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectsUpdateOneRequiredWithoutColumn_LineNestedInput
  }

  export type Column_LineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    l_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    l_isAxis?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_size?: IntFieldUpdateOperationsInput | number
    l_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_color?: StringFieldUpdateOperationsInput | string
    l_axisX?: StringFieldUpdateOperationsInput | string
    l_axisY?: StringFieldUpdateOperationsInput | string
    l_isLegend?: BoolFieldUpdateOperationsInput | boolean
    l_legend_size?: IntFieldUpdateOperationsInput | number
    l_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    l_legend_color?: StringFieldUpdateOperationsInput | string
    l_thickness?: IntFieldUpdateOperationsInput | number
    l_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type Column_LineCreateManyInput = {
    id?: number
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    l_show_pointer_mark?: boolean
    l_isAxis?: boolean
    l_axis_txt_size?: number
    l_is_axis_txt_italic?: boolean
    l_is_axis_txt_bold?: boolean
    l_axis_txt_color?: string
    l_axisX?: string
    l_axisY?: string
    l_isLegend?: boolean
    l_legend_size?: number
    l_is_legend_italic?: boolean
    l_is_legend_bold?: boolean
    l_legend_color?: string
    l_thickness?: number
    l_is_line_smoth?: boolean
    projectId: number
  }

  export type Column_LineUpdateManyMutationInput = {
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    l_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    l_isAxis?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_size?: IntFieldUpdateOperationsInput | number
    l_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_color?: StringFieldUpdateOperationsInput | string
    l_axisX?: StringFieldUpdateOperationsInput | string
    l_axisY?: StringFieldUpdateOperationsInput | string
    l_isLegend?: BoolFieldUpdateOperationsInput | boolean
    l_legend_size?: IntFieldUpdateOperationsInput | number
    l_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    l_legend_color?: StringFieldUpdateOperationsInput | string
    l_thickness?: IntFieldUpdateOperationsInput | number
    l_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Column_LineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    l_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    l_isAxis?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_size?: IntFieldUpdateOperationsInput | number
    l_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_color?: StringFieldUpdateOperationsInput | string
    l_axisX?: StringFieldUpdateOperationsInput | string
    l_axisY?: StringFieldUpdateOperationsInput | string
    l_isLegend?: BoolFieldUpdateOperationsInput | boolean
    l_legend_size?: IntFieldUpdateOperationsInput | number
    l_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    l_legend_color?: StringFieldUpdateOperationsInput | string
    l_thickness?: IntFieldUpdateOperationsInput | number
    l_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type Column_AreaCreateInput = {
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    a_show_pointer_mark?: boolean
    a_isAxis?: boolean
    a_axis_txt_size?: number
    a_is_axis_txt_italic?: boolean
    a_is_axis_txt_bold?: boolean
    a_axis_txt_color?: string
    a_axisX?: string
    a_axisY?: string
    a_isLegend?: boolean
    a_legend_size?: number
    a_is_legend_italic?: boolean
    a_is_legend_bold?: boolean
    a_legend_color?: string
    a_thickness?: number
    a_is_line_smoth?: boolean
    project: ProjectsCreateNestedOneWithoutColumn_AreaInput
  }

  export type Column_AreaUncheckedCreateInput = {
    id?: number
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    a_show_pointer_mark?: boolean
    a_isAxis?: boolean
    a_axis_txt_size?: number
    a_is_axis_txt_italic?: boolean
    a_is_axis_txt_bold?: boolean
    a_axis_txt_color?: string
    a_axisX?: string
    a_axisY?: string
    a_isLegend?: boolean
    a_legend_size?: number
    a_is_legend_italic?: boolean
    a_is_legend_bold?: boolean
    a_legend_color?: string
    a_thickness?: number
    a_is_line_smoth?: boolean
    projectId: number
  }

  export type Column_AreaUpdateInput = {
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    a_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    a_isAxis?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_size?: IntFieldUpdateOperationsInput | number
    a_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_color?: StringFieldUpdateOperationsInput | string
    a_axisX?: StringFieldUpdateOperationsInput | string
    a_axisY?: StringFieldUpdateOperationsInput | string
    a_isLegend?: BoolFieldUpdateOperationsInput | boolean
    a_legend_size?: IntFieldUpdateOperationsInput | number
    a_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    a_legend_color?: StringFieldUpdateOperationsInput | string
    a_thickness?: IntFieldUpdateOperationsInput | number
    a_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectsUpdateOneRequiredWithoutColumn_AreaNestedInput
  }

  export type Column_AreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    a_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    a_isAxis?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_size?: IntFieldUpdateOperationsInput | number
    a_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_color?: StringFieldUpdateOperationsInput | string
    a_axisX?: StringFieldUpdateOperationsInput | string
    a_axisY?: StringFieldUpdateOperationsInput | string
    a_isLegend?: BoolFieldUpdateOperationsInput | boolean
    a_legend_size?: IntFieldUpdateOperationsInput | number
    a_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    a_legend_color?: StringFieldUpdateOperationsInput | string
    a_thickness?: IntFieldUpdateOperationsInput | number
    a_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type Column_AreaCreateManyInput = {
    id?: number
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    a_show_pointer_mark?: boolean
    a_isAxis?: boolean
    a_axis_txt_size?: number
    a_is_axis_txt_italic?: boolean
    a_is_axis_txt_bold?: boolean
    a_axis_txt_color?: string
    a_axisX?: string
    a_axisY?: string
    a_isLegend?: boolean
    a_legend_size?: number
    a_is_legend_italic?: boolean
    a_is_legend_bold?: boolean
    a_legend_color?: string
    a_thickness?: number
    a_is_line_smoth?: boolean
    projectId: number
  }

  export type Column_AreaUpdateManyMutationInput = {
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    a_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    a_isAxis?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_size?: IntFieldUpdateOperationsInput | number
    a_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_color?: StringFieldUpdateOperationsInput | string
    a_axisX?: StringFieldUpdateOperationsInput | string
    a_axisY?: StringFieldUpdateOperationsInput | string
    a_isLegend?: BoolFieldUpdateOperationsInput | boolean
    a_legend_size?: IntFieldUpdateOperationsInput | number
    a_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    a_legend_color?: StringFieldUpdateOperationsInput | string
    a_thickness?: IntFieldUpdateOperationsInput | number
    a_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Column_AreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    a_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    a_isAxis?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_size?: IntFieldUpdateOperationsInput | number
    a_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_color?: StringFieldUpdateOperationsInput | string
    a_axisX?: StringFieldUpdateOperationsInput | string
    a_axisY?: StringFieldUpdateOperationsInput | string
    a_isLegend?: BoolFieldUpdateOperationsInput | boolean
    a_legend_size?: IntFieldUpdateOperationsInput | number
    a_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    a_legend_color?: StringFieldUpdateOperationsInput | string
    a_thickness?: IntFieldUpdateOperationsInput | number
    a_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isConfirmed?: SortOrder
    v_code?: SortOrder
    token?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isConfirmed?: SortOrder
    v_code?: SortOrder
    token?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isConfirmed?: SortOrder
    v_code?: SortOrder
    token?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DataListRelationFilter = {
    every?: DataWhereInput
    some?: DataWhereInput
    none?: DataWhereInput
  }

  export type Background_ImageListRelationFilter = {
    every?: Background_ImageWhereInput
    some?: Background_ImageWhereInput
    none?: Background_ImageWhereInput
  }

  export type ColumnNullableRelationFilter = {
    is?: ColumnWhereInput | null
    isNot?: ColumnWhereInput | null
  }

  export type BarsNullableRelationFilter = {
    is?: BarsWhereInput | null
    isNot?: BarsWhereInput | null
  }

  export type PieNullableRelationFilter = {
    is?: PieWhereInput | null
    isNot?: PieWhereInput | null
  }

  export type DonutNullableRelationFilter = {
    is?: DonutWhereInput | null
    isNot?: DonutWhereInput | null
  }

  export type AreaNullableRelationFilter = {
    is?: AreaWhereInput | null
    isNot?: AreaWhereInput | null
  }

  export type LineNullableRelationFilter = {
    is?: LineWhereInput | null
    isNot?: LineWhereInput | null
  }

  export type Column_LineNullableRelationFilter = {
    is?: Column_LineWhereInput | null
    isNot?: Column_LineWhereInput | null
  }

  export type Column_AreaNullableRelationFilter = {
    is?: Column_AreaWhereInput | null
    isNot?: Column_AreaWhereInput | null
  }

  export type DataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Background_ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
    name?: SortOrder
    title?: SortOrder
    background_color?: SortOrder
    data_selected?: SortOrder
    graph_selected?: SortOrder
  }

  export type ProjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    data_selected?: SortOrder
    graph_selected?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
    name?: SortOrder
    title?: SortOrder
    background_color?: SortOrder
    data_selected?: SortOrder
    graph_selected?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdDate?: SortOrder
    name?: SortOrder
    title?: SortOrder
    background_color?: SortOrder
    data_selected?: SortOrder
    graph_selected?: SortOrder
  }

  export type ProjectsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    data_selected?: SortOrder
    graph_selected?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectsRelationFilter = {
    is?: ProjectsWhereInput
    isNot?: ProjectsWhereInput
  }

  export type DataCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    headers?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type DataAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type DataMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    headers?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type DataMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    headers?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type DataSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Background_ImageCountOrderByAggregateInput = {
    id?: SortOrder
    image_name?: SortOrder
    Date?: SortOrder
    is_set?: SortOrder
    projectId?: SortOrder
  }

  export type Background_ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type Background_ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    image_name?: SortOrder
    Date?: SortOrder
    is_set?: SortOrder
    projectId?: SortOrder
  }

  export type Background_ImageMinOrderByAggregateInput = {
    id?: SortOrder
    image_name?: SortOrder
    Date?: SortOrder
    is_set?: SortOrder
    projectId?: SortOrder
  }

  export type Background_ImageSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ColumnCountOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
  }

  export type ColumnAvgOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    legend_size?: SortOrder
    axis_txt_size?: SortOrder
    projectId?: SortOrder
  }

  export type ColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
  }

  export type ColumnMinOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
  }

  export type ColumnSumOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    legend_size?: SortOrder
    axis_txt_size?: SortOrder
    projectId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BarsCountOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
  }

  export type BarsAvgOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    legend_size?: SortOrder
    axis_txt_size?: SortOrder
    projectId?: SortOrder
  }

  export type BarsMaxOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
  }

  export type BarsMinOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    border_color?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    projectId?: SortOrder
  }

  export type BarsSumOrderByAggregateInput = {
    id?: SortOrder
    bar_spacing?: SortOrder
    border_radius?: SortOrder
    border_bld?: SortOrder
    legend_size?: SortOrder
    axis_txt_size?: SortOrder
    projectId?: SortOrder
  }

  export type PieCountOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
  }

  export type PieAvgOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    legend_size?: SortOrder
    projectId?: SortOrder
  }

  export type PieMaxOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
  }

  export type PieMinOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
  }

  export type PieSumOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    legend_size?: SortOrder
    projectId?: SortOrder
  }

  export type DonutCountOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    inner_radius?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
  }

  export type DonutAvgOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    inner_radius?: SortOrder
    legend_size?: SortOrder
    projectId?: SortOrder
  }

  export type DonutMaxOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    inner_radius?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
  }

  export type DonutMinOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    inner_radius?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    projectId?: SortOrder
  }

  export type DonutSumOrderByAggregateInput = {
    id?: SortOrder
    start_angle?: SortOrder
    inner_radius?: SortOrder
    legend_size?: SortOrder
    projectId?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    id?: SortOrder
    axis_txt_size?: SortOrder
    legend_size?: SortOrder
    thickness?: SortOrder
    projectId?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    id?: SortOrder
    axis_txt_size?: SortOrder
    legend_size?: SortOrder
    thickness?: SortOrder
    projectId?: SortOrder
  }

  export type LineCountOrderByAggregateInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type LineAvgOrderByAggregateInput = {
    id?: SortOrder
    axis_txt_size?: SortOrder
    legend_size?: SortOrder
    thickness?: SortOrder
    projectId?: SortOrder
  }

  export type LineMaxOrderByAggregateInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type LineMinOrderByAggregateInput = {
    id?: SortOrder
    show_pointer_mark?: SortOrder
    isAxis?: SortOrder
    axis_txt_size?: SortOrder
    is_axis_txt_italic?: SortOrder
    is_axis_txt_bold?: SortOrder
    axis_txt_color?: SortOrder
    axisX?: SortOrder
    axisY?: SortOrder
    isLegend?: SortOrder
    legend_size?: SortOrder
    is_legend_italic?: SortOrder
    is_legend_bold?: SortOrder
    legend_color?: SortOrder
    thickness?: SortOrder
    is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type LineSumOrderByAggregateInput = {
    id?: SortOrder
    axis_txt_size?: SortOrder
    legend_size?: SortOrder
    thickness?: SortOrder
    projectId?: SortOrder
  }

  export type Column_LineCountOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    l_show_pointer_mark?: SortOrder
    l_isAxis?: SortOrder
    l_axis_txt_size?: SortOrder
    l_is_axis_txt_italic?: SortOrder
    l_is_axis_txt_bold?: SortOrder
    l_axis_txt_color?: SortOrder
    l_axisX?: SortOrder
    l_axisY?: SortOrder
    l_isLegend?: SortOrder
    l_legend_size?: SortOrder
    l_is_legend_italic?: SortOrder
    l_is_legend_bold?: SortOrder
    l_legend_color?: SortOrder
    l_thickness?: SortOrder
    l_is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type Column_LineAvgOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_legend_size?: SortOrder
    b_axis_txt_size?: SortOrder
    l_axis_txt_size?: SortOrder
    l_legend_size?: SortOrder
    l_thickness?: SortOrder
    projectId?: SortOrder
  }

  export type Column_LineMaxOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    l_show_pointer_mark?: SortOrder
    l_isAxis?: SortOrder
    l_axis_txt_size?: SortOrder
    l_is_axis_txt_italic?: SortOrder
    l_is_axis_txt_bold?: SortOrder
    l_axis_txt_color?: SortOrder
    l_axisX?: SortOrder
    l_axisY?: SortOrder
    l_isLegend?: SortOrder
    l_legend_size?: SortOrder
    l_is_legend_italic?: SortOrder
    l_is_legend_bold?: SortOrder
    l_legend_color?: SortOrder
    l_thickness?: SortOrder
    l_is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type Column_LineMinOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    l_show_pointer_mark?: SortOrder
    l_isAxis?: SortOrder
    l_axis_txt_size?: SortOrder
    l_is_axis_txt_italic?: SortOrder
    l_is_axis_txt_bold?: SortOrder
    l_axis_txt_color?: SortOrder
    l_axisX?: SortOrder
    l_axisY?: SortOrder
    l_isLegend?: SortOrder
    l_legend_size?: SortOrder
    l_is_legend_italic?: SortOrder
    l_is_legend_bold?: SortOrder
    l_legend_color?: SortOrder
    l_thickness?: SortOrder
    l_is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type Column_LineSumOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_legend_size?: SortOrder
    b_axis_txt_size?: SortOrder
    l_axis_txt_size?: SortOrder
    l_legend_size?: SortOrder
    l_thickness?: SortOrder
    projectId?: SortOrder
  }

  export type Column_AreaCountOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    a_show_pointer_mark?: SortOrder
    a_isAxis?: SortOrder
    a_axis_txt_size?: SortOrder
    a_is_axis_txt_italic?: SortOrder
    a_is_axis_txt_bold?: SortOrder
    a_axis_txt_color?: SortOrder
    a_axisX?: SortOrder
    a_axisY?: SortOrder
    a_isLegend?: SortOrder
    a_legend_size?: SortOrder
    a_is_legend_italic?: SortOrder
    a_is_legend_bold?: SortOrder
    a_legend_color?: SortOrder
    a_thickness?: SortOrder
    a_is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type Column_AreaAvgOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_legend_size?: SortOrder
    b_axis_txt_size?: SortOrder
    a_axis_txt_size?: SortOrder
    a_legend_size?: SortOrder
    a_thickness?: SortOrder
    projectId?: SortOrder
  }

  export type Column_AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    a_show_pointer_mark?: SortOrder
    a_isAxis?: SortOrder
    a_axis_txt_size?: SortOrder
    a_is_axis_txt_italic?: SortOrder
    a_is_axis_txt_bold?: SortOrder
    a_axis_txt_color?: SortOrder
    a_axisX?: SortOrder
    a_axisY?: SortOrder
    a_isLegend?: SortOrder
    a_legend_size?: SortOrder
    a_is_legend_italic?: SortOrder
    a_is_legend_bold?: SortOrder
    a_legend_color?: SortOrder
    a_thickness?: SortOrder
    a_is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type Column_AreaMinOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_border_color?: SortOrder
    b_isLegend?: SortOrder
    b_legend_size?: SortOrder
    b_is_legend_italic?: SortOrder
    b_is_legend_bold?: SortOrder
    b_legend_color?: SortOrder
    b_isAxis?: SortOrder
    b_axis_txt_size?: SortOrder
    b_is_axis_txt_italic?: SortOrder
    b_is_axis_txt_bold?: SortOrder
    b_axis_txt_color?: SortOrder
    b_axisX?: SortOrder
    b_axisY?: SortOrder
    a_show_pointer_mark?: SortOrder
    a_isAxis?: SortOrder
    a_axis_txt_size?: SortOrder
    a_is_axis_txt_italic?: SortOrder
    a_is_axis_txt_bold?: SortOrder
    a_axis_txt_color?: SortOrder
    a_axisX?: SortOrder
    a_axisY?: SortOrder
    a_isLegend?: SortOrder
    a_legend_size?: SortOrder
    a_is_legend_italic?: SortOrder
    a_is_legend_bold?: SortOrder
    a_legend_color?: SortOrder
    a_thickness?: SortOrder
    a_is_line_smoth?: SortOrder
    projectId?: SortOrder
  }

  export type Column_AreaSumOrderByAggregateInput = {
    id?: SortOrder
    b_bar_spacing?: SortOrder
    b_border_radius?: SortOrder
    b_border_bld?: SortOrder
    b_legend_size?: SortOrder
    b_axis_txt_size?: SortOrder
    a_axis_txt_size?: SortOrder
    a_legend_size?: SortOrder
    a_thickness?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectsCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProjectsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutUserInput | ProjectsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutUserInput | ProjectsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutUserInput | ProjectsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutUserInput | ProjectsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutUserInput | ProjectsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutUserInput | ProjectsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type DataCreateNestedManyWithoutProjectInput = {
    create?: XOR<DataCreateWithoutProjectInput, DataUncheckedCreateWithoutProjectInput> | DataCreateWithoutProjectInput[] | DataUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DataCreateOrConnectWithoutProjectInput | DataCreateOrConnectWithoutProjectInput[]
    createMany?: DataCreateManyProjectInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type Background_ImageCreateNestedManyWithoutProjectInput = {
    create?: XOR<Background_ImageCreateWithoutProjectInput, Background_ImageUncheckedCreateWithoutProjectInput> | Background_ImageCreateWithoutProjectInput[] | Background_ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Background_ImageCreateOrConnectWithoutProjectInput | Background_ImageCreateOrConnectWithoutProjectInput[]
    createMany?: Background_ImageCreateManyProjectInputEnvelope
    connect?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
  }

  export type ColumnCreateNestedOneWithoutProjectInput = {
    create?: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutProjectInput
    connect?: ColumnWhereUniqueInput
  }

  export type BarsCreateNestedOneWithoutProjectInput = {
    create?: XOR<BarsCreateWithoutProjectInput, BarsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BarsCreateOrConnectWithoutProjectInput
    connect?: BarsWhereUniqueInput
  }

  export type PieCreateNestedOneWithoutProjectInput = {
    create?: XOR<PieCreateWithoutProjectInput, PieUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PieCreateOrConnectWithoutProjectInput
    connect?: PieWhereUniqueInput
  }

  export type DonutCreateNestedOneWithoutProjectInput = {
    create?: XOR<DonutCreateWithoutProjectInput, DonutUncheckedCreateWithoutProjectInput>
    connectOrCreate?: DonutCreateOrConnectWithoutProjectInput
    connect?: DonutWhereUniqueInput
  }

  export type AreaCreateNestedOneWithoutProjectInput = {
    create?: XOR<AreaCreateWithoutProjectInput, AreaUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AreaCreateOrConnectWithoutProjectInput
    connect?: AreaWhereUniqueInput
  }

  export type LineCreateNestedOneWithoutProjectInput = {
    create?: XOR<LineCreateWithoutProjectInput, LineUncheckedCreateWithoutProjectInput>
    connectOrCreate?: LineCreateOrConnectWithoutProjectInput
    connect?: LineWhereUniqueInput
  }

  export type Column_LineCreateNestedOneWithoutProjectInput = {
    create?: XOR<Column_LineCreateWithoutProjectInput, Column_LineUncheckedCreateWithoutProjectInput>
    connectOrCreate?: Column_LineCreateOrConnectWithoutProjectInput
    connect?: Column_LineWhereUniqueInput
  }

  export type Column_AreaCreateNestedOneWithoutProjectInput = {
    create?: XOR<Column_AreaCreateWithoutProjectInput, Column_AreaUncheckedCreateWithoutProjectInput>
    connectOrCreate?: Column_AreaCreateOrConnectWithoutProjectInput
    connect?: Column_AreaWhereUniqueInput
  }

  export type DataUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DataCreateWithoutProjectInput, DataUncheckedCreateWithoutProjectInput> | DataCreateWithoutProjectInput[] | DataUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DataCreateOrConnectWithoutProjectInput | DataCreateOrConnectWithoutProjectInput[]
    createMany?: DataCreateManyProjectInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type Background_ImageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Background_ImageCreateWithoutProjectInput, Background_ImageUncheckedCreateWithoutProjectInput> | Background_ImageCreateWithoutProjectInput[] | Background_ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Background_ImageCreateOrConnectWithoutProjectInput | Background_ImageCreateOrConnectWithoutProjectInput[]
    createMany?: Background_ImageCreateManyProjectInputEnvelope
    connect?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
  }

  export type ColumnUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutProjectInput
    connect?: ColumnWhereUniqueInput
  }

  export type BarsUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<BarsCreateWithoutProjectInput, BarsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BarsCreateOrConnectWithoutProjectInput
    connect?: BarsWhereUniqueInput
  }

  export type PieUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<PieCreateWithoutProjectInput, PieUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PieCreateOrConnectWithoutProjectInput
    connect?: PieWhereUniqueInput
  }

  export type DonutUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<DonutCreateWithoutProjectInput, DonutUncheckedCreateWithoutProjectInput>
    connectOrCreate?: DonutCreateOrConnectWithoutProjectInput
    connect?: DonutWhereUniqueInput
  }

  export type AreaUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<AreaCreateWithoutProjectInput, AreaUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AreaCreateOrConnectWithoutProjectInput
    connect?: AreaWhereUniqueInput
  }

  export type LineUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<LineCreateWithoutProjectInput, LineUncheckedCreateWithoutProjectInput>
    connectOrCreate?: LineCreateOrConnectWithoutProjectInput
    connect?: LineWhereUniqueInput
  }

  export type Column_LineUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<Column_LineCreateWithoutProjectInput, Column_LineUncheckedCreateWithoutProjectInput>
    connectOrCreate?: Column_LineCreateOrConnectWithoutProjectInput
    connect?: Column_LineWhereUniqueInput
  }

  export type Column_AreaUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<Column_AreaCreateWithoutProjectInput, Column_AreaUncheckedCreateWithoutProjectInput>
    connectOrCreate?: Column_AreaCreateOrConnectWithoutProjectInput
    connect?: Column_AreaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type DataUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DataCreateWithoutProjectInput, DataUncheckedCreateWithoutProjectInput> | DataCreateWithoutProjectInput[] | DataUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DataCreateOrConnectWithoutProjectInput | DataCreateOrConnectWithoutProjectInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutProjectInput | DataUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DataCreateManyProjectInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutProjectInput | DataUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DataUpdateManyWithWhereWithoutProjectInput | DataUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
  }

  export type Background_ImageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Background_ImageCreateWithoutProjectInput, Background_ImageUncheckedCreateWithoutProjectInput> | Background_ImageCreateWithoutProjectInput[] | Background_ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Background_ImageCreateOrConnectWithoutProjectInput | Background_ImageCreateOrConnectWithoutProjectInput[]
    upsert?: Background_ImageUpsertWithWhereUniqueWithoutProjectInput | Background_ImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: Background_ImageCreateManyProjectInputEnvelope
    set?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
    disconnect?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
    delete?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
    connect?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
    update?: Background_ImageUpdateWithWhereUniqueWithoutProjectInput | Background_ImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: Background_ImageUpdateManyWithWhereWithoutProjectInput | Background_ImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: Background_ImageScalarWhereInput | Background_ImageScalarWhereInput[]
  }

  export type ColumnUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutProjectInput
    upsert?: ColumnUpsertWithoutProjectInput
    disconnect?: ColumnWhereInput | boolean
    delete?: ColumnWhereInput | boolean
    connect?: ColumnWhereUniqueInput
    update?: XOR<XOR<ColumnUpdateToOneWithWhereWithoutProjectInput, ColumnUpdateWithoutProjectInput>, ColumnUncheckedUpdateWithoutProjectInput>
  }

  export type BarsUpdateOneWithoutProjectNestedInput = {
    create?: XOR<BarsCreateWithoutProjectInput, BarsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BarsCreateOrConnectWithoutProjectInput
    upsert?: BarsUpsertWithoutProjectInput
    disconnect?: BarsWhereInput | boolean
    delete?: BarsWhereInput | boolean
    connect?: BarsWhereUniqueInput
    update?: XOR<XOR<BarsUpdateToOneWithWhereWithoutProjectInput, BarsUpdateWithoutProjectInput>, BarsUncheckedUpdateWithoutProjectInput>
  }

  export type PieUpdateOneWithoutProjectNestedInput = {
    create?: XOR<PieCreateWithoutProjectInput, PieUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PieCreateOrConnectWithoutProjectInput
    upsert?: PieUpsertWithoutProjectInput
    disconnect?: PieWhereInput | boolean
    delete?: PieWhereInput | boolean
    connect?: PieWhereUniqueInput
    update?: XOR<XOR<PieUpdateToOneWithWhereWithoutProjectInput, PieUpdateWithoutProjectInput>, PieUncheckedUpdateWithoutProjectInput>
  }

  export type DonutUpdateOneWithoutProjectNestedInput = {
    create?: XOR<DonutCreateWithoutProjectInput, DonutUncheckedCreateWithoutProjectInput>
    connectOrCreate?: DonutCreateOrConnectWithoutProjectInput
    upsert?: DonutUpsertWithoutProjectInput
    disconnect?: DonutWhereInput | boolean
    delete?: DonutWhereInput | boolean
    connect?: DonutWhereUniqueInput
    update?: XOR<XOR<DonutUpdateToOneWithWhereWithoutProjectInput, DonutUpdateWithoutProjectInput>, DonutUncheckedUpdateWithoutProjectInput>
  }

  export type AreaUpdateOneWithoutProjectNestedInput = {
    create?: XOR<AreaCreateWithoutProjectInput, AreaUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AreaCreateOrConnectWithoutProjectInput
    upsert?: AreaUpsertWithoutProjectInput
    disconnect?: AreaWhereInput | boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutProjectInput, AreaUpdateWithoutProjectInput>, AreaUncheckedUpdateWithoutProjectInput>
  }

  export type LineUpdateOneWithoutProjectNestedInput = {
    create?: XOR<LineCreateWithoutProjectInput, LineUncheckedCreateWithoutProjectInput>
    connectOrCreate?: LineCreateOrConnectWithoutProjectInput
    upsert?: LineUpsertWithoutProjectInput
    disconnect?: LineWhereInput | boolean
    delete?: LineWhereInput | boolean
    connect?: LineWhereUniqueInput
    update?: XOR<XOR<LineUpdateToOneWithWhereWithoutProjectInput, LineUpdateWithoutProjectInput>, LineUncheckedUpdateWithoutProjectInput>
  }

  export type Column_LineUpdateOneWithoutProjectNestedInput = {
    create?: XOR<Column_LineCreateWithoutProjectInput, Column_LineUncheckedCreateWithoutProjectInput>
    connectOrCreate?: Column_LineCreateOrConnectWithoutProjectInput
    upsert?: Column_LineUpsertWithoutProjectInput
    disconnect?: Column_LineWhereInput | boolean
    delete?: Column_LineWhereInput | boolean
    connect?: Column_LineWhereUniqueInput
    update?: XOR<XOR<Column_LineUpdateToOneWithWhereWithoutProjectInput, Column_LineUpdateWithoutProjectInput>, Column_LineUncheckedUpdateWithoutProjectInput>
  }

  export type Column_AreaUpdateOneWithoutProjectNestedInput = {
    create?: XOR<Column_AreaCreateWithoutProjectInput, Column_AreaUncheckedCreateWithoutProjectInput>
    connectOrCreate?: Column_AreaCreateOrConnectWithoutProjectInput
    upsert?: Column_AreaUpsertWithoutProjectInput
    disconnect?: Column_AreaWhereInput | boolean
    delete?: Column_AreaWhereInput | boolean
    connect?: Column_AreaWhereUniqueInput
    update?: XOR<XOR<Column_AreaUpdateToOneWithWhereWithoutProjectInput, Column_AreaUpdateWithoutProjectInput>, Column_AreaUncheckedUpdateWithoutProjectInput>
  }

  export type DataUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DataCreateWithoutProjectInput, DataUncheckedCreateWithoutProjectInput> | DataCreateWithoutProjectInput[] | DataUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DataCreateOrConnectWithoutProjectInput | DataCreateOrConnectWithoutProjectInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutProjectInput | DataUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DataCreateManyProjectInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutProjectInput | DataUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DataUpdateManyWithWhereWithoutProjectInput | DataUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
  }

  export type Background_ImageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Background_ImageCreateWithoutProjectInput, Background_ImageUncheckedCreateWithoutProjectInput> | Background_ImageCreateWithoutProjectInput[] | Background_ImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Background_ImageCreateOrConnectWithoutProjectInput | Background_ImageCreateOrConnectWithoutProjectInput[]
    upsert?: Background_ImageUpsertWithWhereUniqueWithoutProjectInput | Background_ImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: Background_ImageCreateManyProjectInputEnvelope
    set?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
    disconnect?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
    delete?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
    connect?: Background_ImageWhereUniqueInput | Background_ImageWhereUniqueInput[]
    update?: Background_ImageUpdateWithWhereUniqueWithoutProjectInput | Background_ImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: Background_ImageUpdateManyWithWhereWithoutProjectInput | Background_ImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: Background_ImageScalarWhereInput | Background_ImageScalarWhereInput[]
  }

  export type ColumnUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutProjectInput
    upsert?: ColumnUpsertWithoutProjectInput
    disconnect?: ColumnWhereInput | boolean
    delete?: ColumnWhereInput | boolean
    connect?: ColumnWhereUniqueInput
    update?: XOR<XOR<ColumnUpdateToOneWithWhereWithoutProjectInput, ColumnUpdateWithoutProjectInput>, ColumnUncheckedUpdateWithoutProjectInput>
  }

  export type BarsUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<BarsCreateWithoutProjectInput, BarsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BarsCreateOrConnectWithoutProjectInput
    upsert?: BarsUpsertWithoutProjectInput
    disconnect?: BarsWhereInput | boolean
    delete?: BarsWhereInput | boolean
    connect?: BarsWhereUniqueInput
    update?: XOR<XOR<BarsUpdateToOneWithWhereWithoutProjectInput, BarsUpdateWithoutProjectInput>, BarsUncheckedUpdateWithoutProjectInput>
  }

  export type PieUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<PieCreateWithoutProjectInput, PieUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PieCreateOrConnectWithoutProjectInput
    upsert?: PieUpsertWithoutProjectInput
    disconnect?: PieWhereInput | boolean
    delete?: PieWhereInput | boolean
    connect?: PieWhereUniqueInput
    update?: XOR<XOR<PieUpdateToOneWithWhereWithoutProjectInput, PieUpdateWithoutProjectInput>, PieUncheckedUpdateWithoutProjectInput>
  }

  export type DonutUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<DonutCreateWithoutProjectInput, DonutUncheckedCreateWithoutProjectInput>
    connectOrCreate?: DonutCreateOrConnectWithoutProjectInput
    upsert?: DonutUpsertWithoutProjectInput
    disconnect?: DonutWhereInput | boolean
    delete?: DonutWhereInput | boolean
    connect?: DonutWhereUniqueInput
    update?: XOR<XOR<DonutUpdateToOneWithWhereWithoutProjectInput, DonutUpdateWithoutProjectInput>, DonutUncheckedUpdateWithoutProjectInput>
  }

  export type AreaUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<AreaCreateWithoutProjectInput, AreaUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AreaCreateOrConnectWithoutProjectInput
    upsert?: AreaUpsertWithoutProjectInput
    disconnect?: AreaWhereInput | boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutProjectInput, AreaUpdateWithoutProjectInput>, AreaUncheckedUpdateWithoutProjectInput>
  }

  export type LineUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<LineCreateWithoutProjectInput, LineUncheckedCreateWithoutProjectInput>
    connectOrCreate?: LineCreateOrConnectWithoutProjectInput
    upsert?: LineUpsertWithoutProjectInput
    disconnect?: LineWhereInput | boolean
    delete?: LineWhereInput | boolean
    connect?: LineWhereUniqueInput
    update?: XOR<XOR<LineUpdateToOneWithWhereWithoutProjectInput, LineUpdateWithoutProjectInput>, LineUncheckedUpdateWithoutProjectInput>
  }

  export type Column_LineUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<Column_LineCreateWithoutProjectInput, Column_LineUncheckedCreateWithoutProjectInput>
    connectOrCreate?: Column_LineCreateOrConnectWithoutProjectInput
    upsert?: Column_LineUpsertWithoutProjectInput
    disconnect?: Column_LineWhereInput | boolean
    delete?: Column_LineWhereInput | boolean
    connect?: Column_LineWhereUniqueInput
    update?: XOR<XOR<Column_LineUpdateToOneWithWhereWithoutProjectInput, Column_LineUpdateWithoutProjectInput>, Column_LineUncheckedUpdateWithoutProjectInput>
  }

  export type Column_AreaUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<Column_AreaCreateWithoutProjectInput, Column_AreaUncheckedCreateWithoutProjectInput>
    connectOrCreate?: Column_AreaCreateOrConnectWithoutProjectInput
    upsert?: Column_AreaUpsertWithoutProjectInput
    disconnect?: Column_AreaWhereInput | boolean
    delete?: Column_AreaWhereInput | boolean
    connect?: Column_AreaWhereUniqueInput
    update?: XOR<XOR<Column_AreaUpdateToOneWithWhereWithoutProjectInput, Column_AreaUpdateWithoutProjectInput>, Column_AreaUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectsCreateNestedOneWithoutDataInput = {
    create?: XOR<ProjectsCreateWithoutDataInput, ProjectsUncheckedCreateWithoutDataInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutDataInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutDataNestedInput = {
    create?: XOR<ProjectsCreateWithoutDataInput, ProjectsUncheckedCreateWithoutDataInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutDataInput
    upsert?: ProjectsUpsertWithoutDataInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutDataInput, ProjectsUpdateWithoutDataInput>, ProjectsUncheckedUpdateWithoutDataInput>
  }

  export type ProjectsCreateNestedOneWithoutBackground_imagesInput = {
    create?: XOR<ProjectsCreateWithoutBackground_imagesInput, ProjectsUncheckedCreateWithoutBackground_imagesInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutBackground_imagesInput
    connect?: ProjectsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectsUpdateOneRequiredWithoutBackground_imagesNestedInput = {
    create?: XOR<ProjectsCreateWithoutBackground_imagesInput, ProjectsUncheckedCreateWithoutBackground_imagesInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutBackground_imagesInput
    upsert?: ProjectsUpsertWithoutBackground_imagesInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutBackground_imagesInput, ProjectsUpdateWithoutBackground_imagesInput>, ProjectsUncheckedUpdateWithoutBackground_imagesInput>
  }

  export type ProjectsCreateNestedOneWithoutColumnInput = {
    create?: XOR<ProjectsCreateWithoutColumnInput, ProjectsUncheckedCreateWithoutColumnInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutColumnInput
    connect?: ProjectsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectsUpdateOneRequiredWithoutColumnNestedInput = {
    create?: XOR<ProjectsCreateWithoutColumnInput, ProjectsUncheckedCreateWithoutColumnInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutColumnInput
    upsert?: ProjectsUpsertWithoutColumnInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutColumnInput, ProjectsUpdateWithoutColumnInput>, ProjectsUncheckedUpdateWithoutColumnInput>
  }

  export type ProjectsCreateNestedOneWithoutBarsInput = {
    create?: XOR<ProjectsCreateWithoutBarsInput, ProjectsUncheckedCreateWithoutBarsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutBarsInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutBarsNestedInput = {
    create?: XOR<ProjectsCreateWithoutBarsInput, ProjectsUncheckedCreateWithoutBarsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutBarsInput
    upsert?: ProjectsUpsertWithoutBarsInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutBarsInput, ProjectsUpdateWithoutBarsInput>, ProjectsUncheckedUpdateWithoutBarsInput>
  }

  export type ProjectsCreateNestedOneWithoutPieInput = {
    create?: XOR<ProjectsCreateWithoutPieInput, ProjectsUncheckedCreateWithoutPieInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutPieInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutPieNestedInput = {
    create?: XOR<ProjectsCreateWithoutPieInput, ProjectsUncheckedCreateWithoutPieInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutPieInput
    upsert?: ProjectsUpsertWithoutPieInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutPieInput, ProjectsUpdateWithoutPieInput>, ProjectsUncheckedUpdateWithoutPieInput>
  }

  export type ProjectsCreateNestedOneWithoutDonutInput = {
    create?: XOR<ProjectsCreateWithoutDonutInput, ProjectsUncheckedCreateWithoutDonutInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutDonutInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutDonutNestedInput = {
    create?: XOR<ProjectsCreateWithoutDonutInput, ProjectsUncheckedCreateWithoutDonutInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutDonutInput
    upsert?: ProjectsUpsertWithoutDonutInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutDonutInput, ProjectsUpdateWithoutDonutInput>, ProjectsUncheckedUpdateWithoutDonutInput>
  }

  export type ProjectsCreateNestedOneWithoutAreaInput = {
    create?: XOR<ProjectsCreateWithoutAreaInput, ProjectsUncheckedCreateWithoutAreaInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutAreaInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutAreaNestedInput = {
    create?: XOR<ProjectsCreateWithoutAreaInput, ProjectsUncheckedCreateWithoutAreaInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutAreaInput
    upsert?: ProjectsUpsertWithoutAreaInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutAreaInput, ProjectsUpdateWithoutAreaInput>, ProjectsUncheckedUpdateWithoutAreaInput>
  }

  export type ProjectsCreateNestedOneWithoutLineInput = {
    create?: XOR<ProjectsCreateWithoutLineInput, ProjectsUncheckedCreateWithoutLineInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutLineInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutLineNestedInput = {
    create?: XOR<ProjectsCreateWithoutLineInput, ProjectsUncheckedCreateWithoutLineInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutLineInput
    upsert?: ProjectsUpsertWithoutLineInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutLineInput, ProjectsUpdateWithoutLineInput>, ProjectsUncheckedUpdateWithoutLineInput>
  }

  export type ProjectsCreateNestedOneWithoutColumn_LineInput = {
    create?: XOR<ProjectsCreateWithoutColumn_LineInput, ProjectsUncheckedCreateWithoutColumn_LineInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutColumn_LineInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutColumn_LineNestedInput = {
    create?: XOR<ProjectsCreateWithoutColumn_LineInput, ProjectsUncheckedCreateWithoutColumn_LineInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutColumn_LineInput
    upsert?: ProjectsUpsertWithoutColumn_LineInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutColumn_LineInput, ProjectsUpdateWithoutColumn_LineInput>, ProjectsUncheckedUpdateWithoutColumn_LineInput>
  }

  export type ProjectsCreateNestedOneWithoutColumn_AreaInput = {
    create?: XOR<ProjectsCreateWithoutColumn_AreaInput, ProjectsUncheckedCreateWithoutColumn_AreaInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutColumn_AreaInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutColumn_AreaNestedInput = {
    create?: XOR<ProjectsCreateWithoutColumn_AreaInput, ProjectsUncheckedCreateWithoutColumn_AreaInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutColumn_AreaInput
    upsert?: ProjectsUpsertWithoutColumn_AreaInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutColumn_AreaInput, ProjectsUpdateWithoutColumn_AreaInput>, ProjectsUncheckedUpdateWithoutColumn_AreaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProjectsCreateWithoutUserInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutUserInput = {
    id?: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput>
  }

  export type ProjectsCreateManyUserInputEnvelope = {
    data: ProjectsCreateManyUserInput | ProjectsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectsUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutUserInput, ProjectsUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutUserInput, ProjectsUncheckedUpdateWithoutUserInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutUserInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: IntFilter<"Projects"> | number
    userId?: IntFilter<"Projects"> | number
    createdDate?: DateTimeFilter<"Projects"> | Date | string
    name?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    background_color?: StringFilter<"Projects"> | string
    data_selected?: IntFilter<"Projects"> | number
    graph_selected?: IntFilter<"Projects"> | number
  }

  export type UserCreateWithoutProjectsInput = {
    email: string
    password: string
    isConfirmed?: boolean | null
    v_code: string
    token: string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    email: string
    password: string
    isConfirmed?: boolean | null
    v_code: string
    token: string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type DataCreateWithoutProjectInput = {
    data: string
    headers: string
    name: string
  }

  export type DataUncheckedCreateWithoutProjectInput = {
    id?: number
    data: string
    headers: string
    name: string
  }

  export type DataCreateOrConnectWithoutProjectInput = {
    where: DataWhereUniqueInput
    create: XOR<DataCreateWithoutProjectInput, DataUncheckedCreateWithoutProjectInput>
  }

  export type DataCreateManyProjectInputEnvelope = {
    data: DataCreateManyProjectInput | DataCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type Background_ImageCreateWithoutProjectInput = {
    image_name: string
    Date: string
    is_set: boolean
  }

  export type Background_ImageUncheckedCreateWithoutProjectInput = {
    id?: number
    image_name: string
    Date: string
    is_set: boolean
  }

  export type Background_ImageCreateOrConnectWithoutProjectInput = {
    where: Background_ImageWhereUniqueInput
    create: XOR<Background_ImageCreateWithoutProjectInput, Background_ImageUncheckedCreateWithoutProjectInput>
  }

  export type Background_ImageCreateManyProjectInputEnvelope = {
    data: Background_ImageCreateManyProjectInput | Background_ImageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ColumnCreateWithoutProjectInput = {
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
  }

  export type ColumnUncheckedCreateWithoutProjectInput = {
    id?: number
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
  }

  export type ColumnCreateOrConnectWithoutProjectInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput>
  }

  export type BarsCreateWithoutProjectInput = {
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
  }

  export type BarsUncheckedCreateWithoutProjectInput = {
    id?: number
    bar_spacing?: number
    border_radius?: number
    border_bld?: number
    border_color?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
  }

  export type BarsCreateOrConnectWithoutProjectInput = {
    where: BarsWhereUniqueInput
    create: XOR<BarsCreateWithoutProjectInput, BarsUncheckedCreateWithoutProjectInput>
  }

  export type PieCreateWithoutProjectInput = {
    start_angle?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
  }

  export type PieUncheckedCreateWithoutProjectInput = {
    id?: number
    start_angle?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
  }

  export type PieCreateOrConnectWithoutProjectInput = {
    where: PieWhereUniqueInput
    create: XOR<PieCreateWithoutProjectInput, PieUncheckedCreateWithoutProjectInput>
  }

  export type DonutCreateWithoutProjectInput = {
    start_angle?: number
    inner_radius?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
  }

  export type DonutUncheckedCreateWithoutProjectInput = {
    id?: number
    start_angle?: number
    inner_radius?: number
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
  }

  export type DonutCreateOrConnectWithoutProjectInput = {
    where: DonutWhereUniqueInput
    create: XOR<DonutCreateWithoutProjectInput, DonutUncheckedCreateWithoutProjectInput>
  }

  export type AreaCreateWithoutProjectInput = {
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
  }

  export type AreaUncheckedCreateWithoutProjectInput = {
    id?: number
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
  }

  export type AreaCreateOrConnectWithoutProjectInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutProjectInput, AreaUncheckedCreateWithoutProjectInput>
  }

  export type LineCreateWithoutProjectInput = {
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
  }

  export type LineUncheckedCreateWithoutProjectInput = {
    id?: number
    show_pointer_mark?: boolean
    isAxis?: boolean
    axis_txt_size?: number
    is_axis_txt_italic?: boolean
    is_axis_txt_bold?: boolean
    axis_txt_color?: string
    axisX?: string
    axisY?: string
    isLegend?: boolean
    legend_size?: number
    is_legend_italic?: boolean
    is_legend_bold?: boolean
    legend_color?: string
    thickness?: number
    is_line_smoth?: boolean
  }

  export type LineCreateOrConnectWithoutProjectInput = {
    where: LineWhereUniqueInput
    create: XOR<LineCreateWithoutProjectInput, LineUncheckedCreateWithoutProjectInput>
  }

  export type Column_LineCreateWithoutProjectInput = {
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    l_show_pointer_mark?: boolean
    l_isAxis?: boolean
    l_axis_txt_size?: number
    l_is_axis_txt_italic?: boolean
    l_is_axis_txt_bold?: boolean
    l_axis_txt_color?: string
    l_axisX?: string
    l_axisY?: string
    l_isLegend?: boolean
    l_legend_size?: number
    l_is_legend_italic?: boolean
    l_is_legend_bold?: boolean
    l_legend_color?: string
    l_thickness?: number
    l_is_line_smoth?: boolean
  }

  export type Column_LineUncheckedCreateWithoutProjectInput = {
    id?: number
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    l_show_pointer_mark?: boolean
    l_isAxis?: boolean
    l_axis_txt_size?: number
    l_is_axis_txt_italic?: boolean
    l_is_axis_txt_bold?: boolean
    l_axis_txt_color?: string
    l_axisX?: string
    l_axisY?: string
    l_isLegend?: boolean
    l_legend_size?: number
    l_is_legend_italic?: boolean
    l_is_legend_bold?: boolean
    l_legend_color?: string
    l_thickness?: number
    l_is_line_smoth?: boolean
  }

  export type Column_LineCreateOrConnectWithoutProjectInput = {
    where: Column_LineWhereUniqueInput
    create: XOR<Column_LineCreateWithoutProjectInput, Column_LineUncheckedCreateWithoutProjectInput>
  }

  export type Column_AreaCreateWithoutProjectInput = {
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    a_show_pointer_mark?: boolean
    a_isAxis?: boolean
    a_axis_txt_size?: number
    a_is_axis_txt_italic?: boolean
    a_is_axis_txt_bold?: boolean
    a_axis_txt_color?: string
    a_axisX?: string
    a_axisY?: string
    a_isLegend?: boolean
    a_legend_size?: number
    a_is_legend_italic?: boolean
    a_is_legend_bold?: boolean
    a_legend_color?: string
    a_thickness?: number
    a_is_line_smoth?: boolean
  }

  export type Column_AreaUncheckedCreateWithoutProjectInput = {
    id?: number
    b_bar_spacing?: number
    b_border_radius?: number
    b_border_bld?: number
    b_border_color?: string
    b_isLegend?: boolean
    b_legend_size?: number
    b_is_legend_italic?: boolean
    b_is_legend_bold?: boolean
    b_legend_color?: string
    b_isAxis?: boolean
    b_axis_txt_size?: number
    b_is_axis_txt_italic?: boolean
    b_is_axis_txt_bold?: boolean
    b_axis_txt_color?: string
    b_axisX?: string
    b_axisY?: string
    a_show_pointer_mark?: boolean
    a_isAxis?: boolean
    a_axis_txt_size?: number
    a_is_axis_txt_italic?: boolean
    a_is_axis_txt_bold?: boolean
    a_axis_txt_color?: string
    a_axisX?: string
    a_axisY?: string
    a_isLegend?: boolean
    a_legend_size?: number
    a_is_legend_italic?: boolean
    a_is_legend_bold?: boolean
    a_legend_color?: string
    a_thickness?: number
    a_is_line_smoth?: boolean
  }

  export type Column_AreaCreateOrConnectWithoutProjectInput = {
    where: Column_AreaWhereUniqueInput
    create: XOR<Column_AreaCreateWithoutProjectInput, Column_AreaUncheckedCreateWithoutProjectInput>
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    v_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    v_code?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type DataUpsertWithWhereUniqueWithoutProjectInput = {
    where: DataWhereUniqueInput
    update: XOR<DataUpdateWithoutProjectInput, DataUncheckedUpdateWithoutProjectInput>
    create: XOR<DataCreateWithoutProjectInput, DataUncheckedCreateWithoutProjectInput>
  }

  export type DataUpdateWithWhereUniqueWithoutProjectInput = {
    where: DataWhereUniqueInput
    data: XOR<DataUpdateWithoutProjectInput, DataUncheckedUpdateWithoutProjectInput>
  }

  export type DataUpdateManyWithWhereWithoutProjectInput = {
    where: DataScalarWhereInput
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyWithoutProjectInput>
  }

  export type DataScalarWhereInput = {
    AND?: DataScalarWhereInput | DataScalarWhereInput[]
    OR?: DataScalarWhereInput[]
    NOT?: DataScalarWhereInput | DataScalarWhereInput[]
    id?: IntFilter<"Data"> | number
    data?: StringFilter<"Data"> | string
    headers?: StringFilter<"Data"> | string
    name?: StringFilter<"Data"> | string
    projectId?: IntFilter<"Data"> | number
  }

  export type Background_ImageUpsertWithWhereUniqueWithoutProjectInput = {
    where: Background_ImageWhereUniqueInput
    update: XOR<Background_ImageUpdateWithoutProjectInput, Background_ImageUncheckedUpdateWithoutProjectInput>
    create: XOR<Background_ImageCreateWithoutProjectInput, Background_ImageUncheckedCreateWithoutProjectInput>
  }

  export type Background_ImageUpdateWithWhereUniqueWithoutProjectInput = {
    where: Background_ImageWhereUniqueInput
    data: XOR<Background_ImageUpdateWithoutProjectInput, Background_ImageUncheckedUpdateWithoutProjectInput>
  }

  export type Background_ImageUpdateManyWithWhereWithoutProjectInput = {
    where: Background_ImageScalarWhereInput
    data: XOR<Background_ImageUpdateManyMutationInput, Background_ImageUncheckedUpdateManyWithoutProjectInput>
  }

  export type Background_ImageScalarWhereInput = {
    AND?: Background_ImageScalarWhereInput | Background_ImageScalarWhereInput[]
    OR?: Background_ImageScalarWhereInput[]
    NOT?: Background_ImageScalarWhereInput | Background_ImageScalarWhereInput[]
    id?: IntFilter<"Background_Image"> | number
    image_name?: StringFilter<"Background_Image"> | string
    Date?: StringFilter<"Background_Image"> | string
    is_set?: BoolFilter<"Background_Image"> | boolean
    projectId?: IntFilter<"Background_Image"> | number
  }

  export type ColumnUpsertWithoutProjectInput = {
    update: XOR<ColumnUpdateWithoutProjectInput, ColumnUncheckedUpdateWithoutProjectInput>
    create: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput>
    where?: ColumnWhereInput
  }

  export type ColumnUpdateToOneWithWhereWithoutProjectInput = {
    where?: ColumnWhereInput
    data: XOR<ColumnUpdateWithoutProjectInput, ColumnUncheckedUpdateWithoutProjectInput>
  }

  export type ColumnUpdateWithoutProjectInput = {
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
  }

  export type ColumnUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
  }

  export type BarsUpsertWithoutProjectInput = {
    update: XOR<BarsUpdateWithoutProjectInput, BarsUncheckedUpdateWithoutProjectInput>
    create: XOR<BarsCreateWithoutProjectInput, BarsUncheckedCreateWithoutProjectInput>
    where?: BarsWhereInput
  }

  export type BarsUpdateToOneWithWhereWithoutProjectInput = {
    where?: BarsWhereInput
    data: XOR<BarsUpdateWithoutProjectInput, BarsUncheckedUpdateWithoutProjectInput>
  }

  export type BarsUpdateWithoutProjectInput = {
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
  }

  export type BarsUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    bar_spacing?: FloatFieldUpdateOperationsInput | number
    border_radius?: IntFieldUpdateOperationsInput | number
    border_bld?: IntFieldUpdateOperationsInput | number
    border_color?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
  }

  export type PieUpsertWithoutProjectInput = {
    update: XOR<PieUpdateWithoutProjectInput, PieUncheckedUpdateWithoutProjectInput>
    create: XOR<PieCreateWithoutProjectInput, PieUncheckedCreateWithoutProjectInput>
    where?: PieWhereInput
  }

  export type PieUpdateToOneWithWhereWithoutProjectInput = {
    where?: PieWhereInput
    data: XOR<PieUpdateWithoutProjectInput, PieUncheckedUpdateWithoutProjectInput>
  }

  export type PieUpdateWithoutProjectInput = {
    start_angle?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
  }

  export type PieUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_angle?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
  }

  export type DonutUpsertWithoutProjectInput = {
    update: XOR<DonutUpdateWithoutProjectInput, DonutUncheckedUpdateWithoutProjectInput>
    create: XOR<DonutCreateWithoutProjectInput, DonutUncheckedCreateWithoutProjectInput>
    where?: DonutWhereInput
  }

  export type DonutUpdateToOneWithWhereWithoutProjectInput = {
    where?: DonutWhereInput
    data: XOR<DonutUpdateWithoutProjectInput, DonutUncheckedUpdateWithoutProjectInput>
  }

  export type DonutUpdateWithoutProjectInput = {
    start_angle?: IntFieldUpdateOperationsInput | number
    inner_radius?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
  }

  export type DonutUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_angle?: IntFieldUpdateOperationsInput | number
    inner_radius?: IntFieldUpdateOperationsInput | number
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
  }

  export type AreaUpsertWithoutProjectInput = {
    update: XOR<AreaUpdateWithoutProjectInput, AreaUncheckedUpdateWithoutProjectInput>
    create: XOR<AreaCreateWithoutProjectInput, AreaUncheckedCreateWithoutProjectInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutProjectInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutProjectInput, AreaUncheckedUpdateWithoutProjectInput>
  }

  export type AreaUpdateWithoutProjectInput = {
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AreaUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LineUpsertWithoutProjectInput = {
    update: XOR<LineUpdateWithoutProjectInput, LineUncheckedUpdateWithoutProjectInput>
    create: XOR<LineCreateWithoutProjectInput, LineUncheckedCreateWithoutProjectInput>
    where?: LineWhereInput
  }

  export type LineUpdateToOneWithWhereWithoutProjectInput = {
    where?: LineWhereInput
    data: XOR<LineUpdateWithoutProjectInput, LineUncheckedUpdateWithoutProjectInput>
  }

  export type LineUpdateWithoutProjectInput = {
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LineUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    isAxis?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_size?: IntFieldUpdateOperationsInput | number
    is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    axis_txt_color?: StringFieldUpdateOperationsInput | string
    axisX?: StringFieldUpdateOperationsInput | string
    axisY?: StringFieldUpdateOperationsInput | string
    isLegend?: BoolFieldUpdateOperationsInput | boolean
    legend_size?: IntFieldUpdateOperationsInput | number
    is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    legend_color?: StringFieldUpdateOperationsInput | string
    thickness?: IntFieldUpdateOperationsInput | number
    is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Column_LineUpsertWithoutProjectInput = {
    update: XOR<Column_LineUpdateWithoutProjectInput, Column_LineUncheckedUpdateWithoutProjectInput>
    create: XOR<Column_LineCreateWithoutProjectInput, Column_LineUncheckedCreateWithoutProjectInput>
    where?: Column_LineWhereInput
  }

  export type Column_LineUpdateToOneWithWhereWithoutProjectInput = {
    where?: Column_LineWhereInput
    data: XOR<Column_LineUpdateWithoutProjectInput, Column_LineUncheckedUpdateWithoutProjectInput>
  }

  export type Column_LineUpdateWithoutProjectInput = {
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    l_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    l_isAxis?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_size?: IntFieldUpdateOperationsInput | number
    l_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_color?: StringFieldUpdateOperationsInput | string
    l_axisX?: StringFieldUpdateOperationsInput | string
    l_axisY?: StringFieldUpdateOperationsInput | string
    l_isLegend?: BoolFieldUpdateOperationsInput | boolean
    l_legend_size?: IntFieldUpdateOperationsInput | number
    l_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    l_legend_color?: StringFieldUpdateOperationsInput | string
    l_thickness?: IntFieldUpdateOperationsInput | number
    l_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Column_LineUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    l_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    l_isAxis?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_size?: IntFieldUpdateOperationsInput | number
    l_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    l_axis_txt_color?: StringFieldUpdateOperationsInput | string
    l_axisX?: StringFieldUpdateOperationsInput | string
    l_axisY?: StringFieldUpdateOperationsInput | string
    l_isLegend?: BoolFieldUpdateOperationsInput | boolean
    l_legend_size?: IntFieldUpdateOperationsInput | number
    l_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    l_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    l_legend_color?: StringFieldUpdateOperationsInput | string
    l_thickness?: IntFieldUpdateOperationsInput | number
    l_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Column_AreaUpsertWithoutProjectInput = {
    update: XOR<Column_AreaUpdateWithoutProjectInput, Column_AreaUncheckedUpdateWithoutProjectInput>
    create: XOR<Column_AreaCreateWithoutProjectInput, Column_AreaUncheckedCreateWithoutProjectInput>
    where?: Column_AreaWhereInput
  }

  export type Column_AreaUpdateToOneWithWhereWithoutProjectInput = {
    where?: Column_AreaWhereInput
    data: XOR<Column_AreaUpdateWithoutProjectInput, Column_AreaUncheckedUpdateWithoutProjectInput>
  }

  export type Column_AreaUpdateWithoutProjectInput = {
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    a_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    a_isAxis?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_size?: IntFieldUpdateOperationsInput | number
    a_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_color?: StringFieldUpdateOperationsInput | string
    a_axisX?: StringFieldUpdateOperationsInput | string
    a_axisY?: StringFieldUpdateOperationsInput | string
    a_isLegend?: BoolFieldUpdateOperationsInput | boolean
    a_legend_size?: IntFieldUpdateOperationsInput | number
    a_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    a_legend_color?: StringFieldUpdateOperationsInput | string
    a_thickness?: IntFieldUpdateOperationsInput | number
    a_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Column_AreaUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    b_bar_spacing?: FloatFieldUpdateOperationsInput | number
    b_border_radius?: IntFieldUpdateOperationsInput | number
    b_border_bld?: IntFieldUpdateOperationsInput | number
    b_border_color?: StringFieldUpdateOperationsInput | string
    b_isLegend?: BoolFieldUpdateOperationsInput | boolean
    b_legend_size?: IntFieldUpdateOperationsInput | number
    b_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    b_legend_color?: StringFieldUpdateOperationsInput | string
    b_isAxis?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_size?: IntFieldUpdateOperationsInput | number
    b_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    b_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    b_axis_txt_color?: StringFieldUpdateOperationsInput | string
    b_axisX?: StringFieldUpdateOperationsInput | string
    b_axisY?: StringFieldUpdateOperationsInput | string
    a_show_pointer_mark?: BoolFieldUpdateOperationsInput | boolean
    a_isAxis?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_size?: IntFieldUpdateOperationsInput | number
    a_is_axis_txt_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_axis_txt_bold?: BoolFieldUpdateOperationsInput | boolean
    a_axis_txt_color?: StringFieldUpdateOperationsInput | string
    a_axisX?: StringFieldUpdateOperationsInput | string
    a_axisY?: StringFieldUpdateOperationsInput | string
    a_isLegend?: BoolFieldUpdateOperationsInput | boolean
    a_legend_size?: IntFieldUpdateOperationsInput | number
    a_is_legend_italic?: BoolFieldUpdateOperationsInput | boolean
    a_is_legend_bold?: BoolFieldUpdateOperationsInput | boolean
    a_legend_color?: StringFieldUpdateOperationsInput | string
    a_thickness?: IntFieldUpdateOperationsInput | number
    a_is_line_smoth?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectsCreateWithoutDataInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutDataInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutDataInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutDataInput, ProjectsUncheckedCreateWithoutDataInput>
  }

  export type ProjectsUpsertWithoutDataInput = {
    update: XOR<ProjectsUpdateWithoutDataInput, ProjectsUncheckedUpdateWithoutDataInput>
    create: XOR<ProjectsCreateWithoutDataInput, ProjectsUncheckedCreateWithoutDataInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutDataInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutDataInput, ProjectsUncheckedUpdateWithoutDataInput>
  }

  export type ProjectsUpdateWithoutDataInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutBackground_imagesInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutBackground_imagesInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutBackground_imagesInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutBackground_imagesInput, ProjectsUncheckedCreateWithoutBackground_imagesInput>
  }

  export type ProjectsUpsertWithoutBackground_imagesInput = {
    update: XOR<ProjectsUpdateWithoutBackground_imagesInput, ProjectsUncheckedUpdateWithoutBackground_imagesInput>
    create: XOR<ProjectsCreateWithoutBackground_imagesInput, ProjectsUncheckedCreateWithoutBackground_imagesInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutBackground_imagesInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutBackground_imagesInput, ProjectsUncheckedUpdateWithoutBackground_imagesInput>
  }

  export type ProjectsUpdateWithoutBackground_imagesInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutBackground_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutColumnInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutColumnInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutColumnInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutColumnInput, ProjectsUncheckedCreateWithoutColumnInput>
  }

  export type ProjectsUpsertWithoutColumnInput = {
    update: XOR<ProjectsUpdateWithoutColumnInput, ProjectsUncheckedUpdateWithoutColumnInput>
    create: XOR<ProjectsCreateWithoutColumnInput, ProjectsUncheckedCreateWithoutColumnInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutColumnInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutColumnInput, ProjectsUncheckedUpdateWithoutColumnInput>
  }

  export type ProjectsUpdateWithoutColumnInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutBarsInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutBarsInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutBarsInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutBarsInput, ProjectsUncheckedCreateWithoutBarsInput>
  }

  export type ProjectsUpsertWithoutBarsInput = {
    update: XOR<ProjectsUpdateWithoutBarsInput, ProjectsUncheckedUpdateWithoutBarsInput>
    create: XOR<ProjectsCreateWithoutBarsInput, ProjectsUncheckedCreateWithoutBarsInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutBarsInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutBarsInput, ProjectsUncheckedUpdateWithoutBarsInput>
  }

  export type ProjectsUpdateWithoutBarsInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutBarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutPieInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutPieInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutPieInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutPieInput, ProjectsUncheckedCreateWithoutPieInput>
  }

  export type ProjectsUpsertWithoutPieInput = {
    update: XOR<ProjectsUpdateWithoutPieInput, ProjectsUncheckedUpdateWithoutPieInput>
    create: XOR<ProjectsCreateWithoutPieInput, ProjectsUncheckedCreateWithoutPieInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutPieInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutPieInput, ProjectsUncheckedUpdateWithoutPieInput>
  }

  export type ProjectsUpdateWithoutPieInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutPieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutDonutInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutDonutInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutDonutInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutDonutInput, ProjectsUncheckedCreateWithoutDonutInput>
  }

  export type ProjectsUpsertWithoutDonutInput = {
    update: XOR<ProjectsUpdateWithoutDonutInput, ProjectsUncheckedUpdateWithoutDonutInput>
    create: XOR<ProjectsCreateWithoutDonutInput, ProjectsUncheckedCreateWithoutDonutInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutDonutInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutDonutInput, ProjectsUncheckedUpdateWithoutDonutInput>
  }

  export type ProjectsUpdateWithoutDonutInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutDonutInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutAreaInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutAreaInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutAreaInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutAreaInput, ProjectsUncheckedCreateWithoutAreaInput>
  }

  export type ProjectsUpsertWithoutAreaInput = {
    update: XOR<ProjectsUpdateWithoutAreaInput, ProjectsUncheckedUpdateWithoutAreaInput>
    create: XOR<ProjectsCreateWithoutAreaInput, ProjectsUncheckedCreateWithoutAreaInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutAreaInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutAreaInput, ProjectsUncheckedUpdateWithoutAreaInput>
  }

  export type ProjectsUpdateWithoutAreaInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutLineInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutLineInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutLineInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutLineInput, ProjectsUncheckedCreateWithoutLineInput>
  }

  export type ProjectsUpsertWithoutLineInput = {
    update: XOR<ProjectsUpdateWithoutLineInput, ProjectsUncheckedUpdateWithoutLineInput>
    create: XOR<ProjectsCreateWithoutLineInput, ProjectsUncheckedCreateWithoutLineInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutLineInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutLineInput, ProjectsUncheckedUpdateWithoutLineInput>
  }

  export type ProjectsUpdateWithoutLineInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutLineInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutColumn_LineInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutColumn_LineInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Area?: Column_AreaUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutColumn_LineInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutColumn_LineInput, ProjectsUncheckedCreateWithoutColumn_LineInput>
  }

  export type ProjectsUpsertWithoutColumn_LineInput = {
    update: XOR<ProjectsUpdateWithoutColumn_LineInput, ProjectsUncheckedUpdateWithoutColumn_LineInput>
    create: XOR<ProjectsCreateWithoutColumn_LineInput, ProjectsUncheckedCreateWithoutColumn_LineInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutColumn_LineInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutColumn_LineInput, ProjectsUncheckedUpdateWithoutColumn_LineInput>
  }

  export type ProjectsUpdateWithoutColumn_LineInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutColumn_LineInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutColumn_AreaInput = {
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    user: UserCreateNestedOneWithoutProjectsInput
    data?: DataCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageCreateNestedManyWithoutProjectInput
    Column?: ColumnCreateNestedOneWithoutProjectInput
    Bars?: BarsCreateNestedOneWithoutProjectInput
    Pie?: PieCreateNestedOneWithoutProjectInput
    Donut?: DonutCreateNestedOneWithoutProjectInput
    Area?: AreaCreateNestedOneWithoutProjectInput
    Line?: LineCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutColumn_AreaInput = {
    id?: number
    userId: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
    data?: DataUncheckedCreateNestedManyWithoutProjectInput
    background_images?: Background_ImageUncheckedCreateNestedManyWithoutProjectInput
    Column?: ColumnUncheckedCreateNestedOneWithoutProjectInput
    Bars?: BarsUncheckedCreateNestedOneWithoutProjectInput
    Pie?: PieUncheckedCreateNestedOneWithoutProjectInput
    Donut?: DonutUncheckedCreateNestedOneWithoutProjectInput
    Area?: AreaUncheckedCreateNestedOneWithoutProjectInput
    Line?: LineUncheckedCreateNestedOneWithoutProjectInput
    Column_Line?: Column_LineUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutColumn_AreaInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutColumn_AreaInput, ProjectsUncheckedCreateWithoutColumn_AreaInput>
  }

  export type ProjectsUpsertWithoutColumn_AreaInput = {
    update: XOR<ProjectsUpdateWithoutColumn_AreaInput, ProjectsUncheckedUpdateWithoutColumn_AreaInput>
    create: XOR<ProjectsCreateWithoutColumn_AreaInput, ProjectsUncheckedCreateWithoutColumn_AreaInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutColumn_AreaInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutColumn_AreaInput, ProjectsUncheckedUpdateWithoutColumn_AreaInput>
  }

  export type ProjectsUpdateWithoutColumn_AreaInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutColumn_AreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateManyUserInput = {
    id?: number
    createdDate?: Date | string
    name: string
    title?: string
    background_color?: string
    data_selected?: number
    graph_selected?: number
  }

  export type ProjectsUpdateWithoutUserInput = {
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUpdateManyWithoutProjectNestedInput
    Column?: ColumnUpdateOneWithoutProjectNestedInput
    Bars?: BarsUpdateOneWithoutProjectNestedInput
    Pie?: PieUpdateOneWithoutProjectNestedInput
    Donut?: DonutUpdateOneWithoutProjectNestedInput
    Area?: AreaUpdateOneWithoutProjectNestedInput
    Line?: LineUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
    data?: DataUncheckedUpdateManyWithoutProjectNestedInput
    background_images?: Background_ImageUncheckedUpdateManyWithoutProjectNestedInput
    Column?: ColumnUncheckedUpdateOneWithoutProjectNestedInput
    Bars?: BarsUncheckedUpdateOneWithoutProjectNestedInput
    Pie?: PieUncheckedUpdateOneWithoutProjectNestedInput
    Donut?: DonutUncheckedUpdateOneWithoutProjectNestedInput
    Area?: AreaUncheckedUpdateOneWithoutProjectNestedInput
    Line?: LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Line?: Column_LineUncheckedUpdateOneWithoutProjectNestedInput
    Column_Area?: Column_AreaUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    background_color?: StringFieldUpdateOperationsInput | string
    data_selected?: IntFieldUpdateOperationsInput | number
    graph_selected?: IntFieldUpdateOperationsInput | number
  }

  export type DataCreateManyProjectInput = {
    id?: number
    data: string
    headers: string
    name: string
  }

  export type Background_ImageCreateManyProjectInput = {
    id?: number
    image_name: string
    Date: string
    is_set: boolean
  }

  export type DataUpdateWithoutProjectInput = {
    data?: StringFieldUpdateOperationsInput | string
    headers?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DataUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    headers?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DataUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    headers?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Background_ImageUpdateWithoutProjectInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    is_set?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Background_ImageUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    is_set?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Background_ImageUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    is_set?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsCountOutputTypeDefaultArgs instead
     */
    export type ProjectsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsDefaultArgs instead
     */
    export type ProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DataDefaultArgs instead
     */
    export type DataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Background_ImageDefaultArgs instead
     */
    export type Background_ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Background_ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ColumnDefaultArgs instead
     */
    export type ColumnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ColumnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarsDefaultArgs instead
     */
    export type BarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PieDefaultArgs instead
     */
    export type PieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DonutDefaultArgs instead
     */
    export type DonutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DonutDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AreaDefaultArgs instead
     */
    export type AreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AreaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LineDefaultArgs instead
     */
    export type LineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Column_LineDefaultArgs instead
     */
    export type Column_LineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Column_LineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Column_AreaDefaultArgs instead
     */
    export type Column_AreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Column_AreaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}