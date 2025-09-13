
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
 * Model Pokemon
 * 
 */
export type Pokemon = $Result.DefaultSelection<Prisma.$PokemonPayload>
/**
 * Model Classification
 * 
 */
export type Classification = $Result.DefaultSelection<Prisma.$ClassificationPayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model Resistance
 * 
 */
export type Resistance = $Result.DefaultSelection<Prisma.$ResistancePayload>
/**
 * Model PokemonType
 * 
 */
export type PokemonType = $Result.DefaultSelection<Prisma.$PokemonTypePayload>
/**
 * Model PokemonResistance
 * 
 */
export type PokemonResistance = $Result.DefaultSelection<Prisma.$PokemonResistancePayload>
/**
 * Model Evolution
 * 
 */
export type Evolution = $Result.DefaultSelection<Prisma.$EvolutionPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemon`: Exposes CRUD operations for the **Pokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemon
    * const pokemon = await prisma.pokemon.findMany()
    * ```
    */
  get pokemon(): Prisma.PokemonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classification`: Exposes CRUD operations for the **Classification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classifications
    * const classifications = await prisma.classification.findMany()
    * ```
    */
  get classification(): Prisma.ClassificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resistance`: Exposes CRUD operations for the **Resistance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resistances
    * const resistances = await prisma.resistance.findMany()
    * ```
    */
  get resistance(): Prisma.ResistanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemonType`: Exposes CRUD operations for the **PokemonType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonTypes
    * const pokemonTypes = await prisma.pokemonType.findMany()
    * ```
    */
  get pokemonType(): Prisma.PokemonTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemonResistance`: Exposes CRUD operations for the **PokemonResistance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonResistances
    * const pokemonResistances = await prisma.pokemonResistance.findMany()
    * ```
    */
  get pokemonResistance(): Prisma.PokemonResistanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evolution`: Exposes CRUD operations for the **Evolution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evolutions
    * const evolutions = await prisma.evolution.findMany()
    * ```
    */
  get evolution(): Prisma.EvolutionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.0
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Pokemon: 'Pokemon',
    Classification: 'Classification',
    Type: 'Type',
    Resistance: 'Resistance',
    PokemonType: 'PokemonType',
    PokemonResistance: 'PokemonResistance',
    Evolution: 'Evolution'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pokemon" | "classification" | "type" | "resistance" | "pokemonType" | "pokemonResistance" | "evolution"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Pokemon: {
        payload: Prisma.$PokemonPayload<ExtArgs>
        fields: Prisma.PokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findFirst: {
            args: Prisma.PokemonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findMany: {
            args: Prisma.PokemonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          create: {
            args: Prisma.PokemonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          createMany: {
            args: Prisma.PokemonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          delete: {
            args: Prisma.PokemonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          update: {
            args: Prisma.PokemonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          deleteMany: {
            args: Prisma.PokemonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          upsert: {
            args: Prisma.PokemonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          aggregate: {
            args: Prisma.PokemonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemon>
          }
          groupBy: {
            args: Prisma.PokemonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonCountAggregateOutputType> | number
          }
        }
      }
      Classification: {
        payload: Prisma.$ClassificationPayload<ExtArgs>
        fields: Prisma.ClassificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          findFirst: {
            args: Prisma.ClassificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          findMany: {
            args: Prisma.ClassificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          create: {
            args: Prisma.ClassificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          createMany: {
            args: Prisma.ClassificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          delete: {
            args: Prisma.ClassificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          update: {
            args: Prisma.ClassificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          deleteMany: {
            args: Prisma.ClassificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          upsert: {
            args: Prisma.ClassificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          aggregate: {
            args: Prisma.ClassificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassification>
          }
          groupBy: {
            args: Prisma.ClassificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassificationCountArgs<ExtArgs>
            result: $Utils.Optional<ClassificationCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      Resistance: {
        payload: Prisma.$ResistancePayload<ExtArgs>
        fields: Prisma.ResistanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResistanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResistanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          findFirst: {
            args: Prisma.ResistanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResistanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          findMany: {
            args: Prisma.ResistanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>[]
          }
          create: {
            args: Prisma.ResistanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          createMany: {
            args: Prisma.ResistanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResistanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>[]
          }
          delete: {
            args: Prisma.ResistanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          update: {
            args: Prisma.ResistanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          deleteMany: {
            args: Prisma.ResistanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResistanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResistanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>[]
          }
          upsert: {
            args: Prisma.ResistanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          aggregate: {
            args: Prisma.ResistanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResistance>
          }
          groupBy: {
            args: Prisma.ResistanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResistanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResistanceCountArgs<ExtArgs>
            result: $Utils.Optional<ResistanceCountAggregateOutputType> | number
          }
        }
      }
      PokemonType: {
        payload: Prisma.$PokemonTypePayload<ExtArgs>
        fields: Prisma.PokemonTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          findFirst: {
            args: Prisma.PokemonTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          findMany: {
            args: Prisma.PokemonTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>[]
          }
          create: {
            args: Prisma.PokemonTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          createMany: {
            args: Prisma.PokemonTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>[]
          }
          delete: {
            args: Prisma.PokemonTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          update: {
            args: Prisma.PokemonTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          deleteMany: {
            args: Prisma.PokemonTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>[]
          }
          upsert: {
            args: Prisma.PokemonTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonTypePayload>
          }
          aggregate: {
            args: Prisma.PokemonTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonType>
          }
          groupBy: {
            args: Prisma.PokemonTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonTypeCountAggregateOutputType> | number
          }
        }
      }
      PokemonResistance: {
        payload: Prisma.$PokemonResistancePayload<ExtArgs>
        fields: Prisma.PokemonResistanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonResistanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonResistanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload>
          }
          findFirst: {
            args: Prisma.PokemonResistanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonResistanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload>
          }
          findMany: {
            args: Prisma.PokemonResistanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload>[]
          }
          create: {
            args: Prisma.PokemonResistanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload>
          }
          createMany: {
            args: Prisma.PokemonResistanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonResistanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload>[]
          }
          delete: {
            args: Prisma.PokemonResistanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload>
          }
          update: {
            args: Prisma.PokemonResistanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload>
          }
          deleteMany: {
            args: Prisma.PokemonResistanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonResistanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonResistanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload>[]
          }
          upsert: {
            args: Prisma.PokemonResistanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonResistancePayload>
          }
          aggregate: {
            args: Prisma.PokemonResistanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonResistance>
          }
          groupBy: {
            args: Prisma.PokemonResistanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonResistanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonResistanceCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonResistanceCountAggregateOutputType> | number
          }
        }
      }
      Evolution: {
        payload: Prisma.$EvolutionPayload<ExtArgs>
        fields: Prisma.EvolutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvolutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvolutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          findFirst: {
            args: Prisma.EvolutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvolutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          findMany: {
            args: Prisma.EvolutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>[]
          }
          create: {
            args: Prisma.EvolutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          createMany: {
            args: Prisma.EvolutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvolutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>[]
          }
          delete: {
            args: Prisma.EvolutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          update: {
            args: Prisma.EvolutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          deleteMany: {
            args: Prisma.EvolutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvolutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvolutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>[]
          }
          upsert: {
            args: Prisma.EvolutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvolutionPayload>
          }
          aggregate: {
            args: Prisma.EvolutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvolution>
          }
          groupBy: {
            args: Prisma.EvolutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvolutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvolutionCountArgs<ExtArgs>
            result: $Utils.Optional<EvolutionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pokemon?: PokemonOmit
    classification?: ClassificationOmit
    type?: TypeOmit
    resistance?: ResistanceOmit
    pokemonType?: PokemonTypeOmit
    pokemonResistance?: PokemonResistanceOmit
    evolution?: EvolutionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type PokemonCountOutputType
   */

  export type PokemonCountOutputType = {
    types: number
    resistances: number
    evolutions: number
    preEvolutions: number
  }

  export type PokemonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    types?: boolean | PokemonCountOutputTypeCountTypesArgs
    resistances?: boolean | PokemonCountOutputTypeCountResistancesArgs
    evolutions?: boolean | PokemonCountOutputTypeCountEvolutionsArgs
    preEvolutions?: boolean | PokemonCountOutputTypeCountPreEvolutionsArgs
  }

  // Custom InputTypes
  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCountOutputType
     */
    select?: PokemonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonTypeWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountResistancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonResistanceWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountEvolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolutionWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountPreEvolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolutionWhereInput
  }


  /**
   * Count Type ClassificationCountOutputType
   */

  export type ClassificationCountOutputType = {
    pokemons: number
  }

  export type ClassificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | ClassificationCountOutputTypeCountPokemonsArgs
  }

  // Custom InputTypes
  /**
   * ClassificationCountOutputType without action
   */
  export type ClassificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassificationCountOutputType
     */
    select?: ClassificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassificationCountOutputType without action
   */
  export type ClassificationCountOutputTypeCountPokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    pokemons: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | TypeCountOutputTypeCountPokemonsArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountPokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonTypeWhereInput
  }


  /**
   * Count Type ResistanceCountOutputType
   */

  export type ResistanceCountOutputType = {
    pokemons: number
  }

  export type ResistanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | ResistanceCountOutputTypeCountPokemonsArgs
  }

  // Custom InputTypes
  /**
   * ResistanceCountOutputType without action
   */
  export type ResistanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResistanceCountOutputType
     */
    select?: ResistanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResistanceCountOutputType without action
   */
  export type ResistanceCountOutputTypeCountPokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonResistanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Pokemon
   */

  export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  export type PokemonAvgAggregateOutputType = {
    id: number | null
    number: number | null
    classificationId: number | null
  }

  export type PokemonSumAggregateOutputType = {
    id: number | null
    number: number | null
    classificationId: number | null
  }

  export type PokemonMinAggregateOutputType = {
    id: number | null
    number: number | null
    name: string | null
    imageUrl: string | null
    classificationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PokemonMaxAggregateOutputType = {
    id: number | null
    number: number | null
    name: string | null
    imageUrl: string | null
    classificationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PokemonCountAggregateOutputType = {
    id: number
    number: number
    name: number
    imageUrl: number
    classificationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PokemonAvgAggregateInputType = {
    id?: true
    number?: true
    classificationId?: true
  }

  export type PokemonSumAggregateInputType = {
    id?: true
    number?: true
    classificationId?: true
  }

  export type PokemonMinAggregateInputType = {
    id?: true
    number?: true
    name?: true
    imageUrl?: true
    classificationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PokemonMaxAggregateInputType = {
    id?: true
    number?: true
    name?: true
    imageUrl?: true
    classificationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PokemonCountAggregateInputType = {
    id?: true
    number?: true
    name?: true
    imageUrl?: true
    classificationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to aggregate.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pokemon
    **/
    _count?: true | PokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonMaxAggregateInputType
  }

  export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemon[P]>
      : GetScalarType<T[P], AggregatePokemon[P]>
  }




  export type PokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonWhereInput
    orderBy?: PokemonOrderByWithAggregationInput | PokemonOrderByWithAggregationInput[]
    by: PokemonScalarFieldEnum[] | PokemonScalarFieldEnum
    having?: PokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonCountAggregateInputType | true
    _avg?: PokemonAvgAggregateInputType
    _sum?: PokemonSumAggregateInputType
    _min?: PokemonMinAggregateInputType
    _max?: PokemonMaxAggregateInputType
  }

  export type PokemonGroupByOutputType = {
    id: number
    number: number
    name: string
    imageUrl: string | null
    classificationId: number
    createdAt: Date
    updatedAt: Date
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  type GetPokemonGroupByPayload<T extends PokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonGroupByOutputType[P]>
        }
      >
    >


  export type PokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    name?: boolean
    imageUrl?: boolean
    classificationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
    types?: boolean | Pokemon$typesArgs<ExtArgs>
    resistances?: boolean | Pokemon$resistancesArgs<ExtArgs>
    evolutions?: boolean | Pokemon$evolutionsArgs<ExtArgs>
    preEvolutions?: boolean | Pokemon$preEvolutionsArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    name?: boolean
    imageUrl?: boolean
    classificationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    name?: boolean
    imageUrl?: boolean
    classificationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectScalar = {
    id?: boolean
    number?: boolean
    name?: boolean
    imageUrl?: boolean
    classificationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PokemonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "name" | "imageUrl" | "classificationId" | "createdAt" | "updatedAt", ExtArgs["result"]["pokemon"]>
  export type PokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
    types?: boolean | Pokemon$typesArgs<ExtArgs>
    resistances?: boolean | Pokemon$resistancesArgs<ExtArgs>
    evolutions?: boolean | Pokemon$evolutionsArgs<ExtArgs>
    preEvolutions?: boolean | Pokemon$preEvolutionsArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokemonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
  }
  export type PokemonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classification?: boolean | ClassificationDefaultArgs<ExtArgs>
  }

  export type $PokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pokemon"
    objects: {
      classification: Prisma.$ClassificationPayload<ExtArgs>
      types: Prisma.$PokemonTypePayload<ExtArgs>[]
      resistances: Prisma.$PokemonResistancePayload<ExtArgs>[]
      evolutions: Prisma.$EvolutionPayload<ExtArgs>[]
      preEvolutions: Prisma.$EvolutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: number
      name: string
      imageUrl: string | null
      classificationId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pokemon"]>
    composites: {}
  }

  type PokemonGetPayload<S extends boolean | null | undefined | PokemonDefaultArgs> = $Result.GetResult<Prisma.$PokemonPayload, S>

  type PokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonCountAggregateInputType | true
    }

  export interface PokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pokemon'], meta: { name: 'Pokemon' } }
    /**
     * Find zero or one Pokemon that matches the filter.
     * @param {PokemonFindUniqueArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonFindUniqueArgs>(args: SelectSubset<T, PokemonFindUniqueArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pokemon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonFindUniqueOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonFindFirstArgs>(args?: SelectSubset<T, PokemonFindFirstArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon
     * const pokemon = await prisma.pokemon.findMany()
     * 
     * // Get first 10 Pokemon
     * const pokemon = await prisma.pokemon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonFindManyArgs>(args?: SelectSubset<T, PokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pokemon.
     * @param {PokemonCreateArgs} args - Arguments to create a Pokemon.
     * @example
     * // Create one Pokemon
     * const Pokemon = await prisma.pokemon.create({
     *   data: {
     *     // ... data to create a Pokemon
     *   }
     * })
     * 
     */
    create<T extends PokemonCreateArgs>(args: SelectSubset<T, PokemonCreateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pokemon.
     * @param {PokemonCreateManyArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonCreateManyArgs>(args?: SelectSubset<T, PokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pokemon and returns the data saved in the database.
     * @param {PokemonCreateManyAndReturnArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pokemon.
     * @param {PokemonDeleteArgs} args - Arguments to delete one Pokemon.
     * @example
     * // Delete one Pokemon
     * const Pokemon = await prisma.pokemon.delete({
     *   where: {
     *     // ... filter to delete one Pokemon
     *   }
     * })
     * 
     */
    delete<T extends PokemonDeleteArgs>(args: SelectSubset<T, PokemonDeleteArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pokemon.
     * @param {PokemonUpdateArgs} args - Arguments to update one Pokemon.
     * @example
     * // Update one Pokemon
     * const pokemon = await prisma.pokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonUpdateArgs>(args: SelectSubset<T, PokemonUpdateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pokemon.
     * @param {PokemonDeleteManyArgs} args - Arguments to filter Pokemon to delete.
     * @example
     * // Delete a few Pokemon
     * const { count } = await prisma.pokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonDeleteManyArgs>(args?: SelectSubset<T, PokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonUpdateManyArgs>(args: SelectSubset<T, PokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon and returns the data updated in the database.
     * @param {PokemonUpdateManyAndReturnArgs} args - Arguments to update many Pokemon.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pokemon.
     * @param {PokemonUpsertArgs} args - Arguments to update or create a Pokemon.
     * @example
     * // Update or create a Pokemon
     * const pokemon = await prisma.pokemon.upsert({
     *   create: {
     *     // ... data to create a Pokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon we want to update
     *   }
     * })
     */
    upsert<T extends PokemonUpsertArgs>(args: SelectSubset<T, PokemonUpsertArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCountArgs} args - Arguments to filter Pokemon to count.
     * @example
     * // Count the number of Pokemon
     * const count = await prisma.pokemon.count({
     *   where: {
     *     // ... the filter for the Pokemon we want to count
     *   }
     * })
    **/
    count<T extends PokemonCountArgs>(
      args?: Subset<T, PokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonAggregateArgs>(args: Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>

    /**
     * Group by Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonGroupByArgs} args - Group by arguments.
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
      T extends PokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonGroupByArgs['orderBy'] }
        : { orderBy?: PokemonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pokemon model
   */
  readonly fields: PokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classification<T extends ClassificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassificationDefaultArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    types<T extends Pokemon$typesArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resistances<T extends Pokemon$resistancesArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$resistancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evolutions<T extends Pokemon$evolutionsArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$evolutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preEvolutions<T extends Pokemon$preEvolutionsArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$preEvolutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pokemon model
   */
  interface PokemonFieldRefs {
    readonly id: FieldRef<"Pokemon", 'Int'>
    readonly number: FieldRef<"Pokemon", 'Int'>
    readonly name: FieldRef<"Pokemon", 'String'>
    readonly imageUrl: FieldRef<"Pokemon", 'String'>
    readonly classificationId: FieldRef<"Pokemon", 'Int'>
    readonly createdAt: FieldRef<"Pokemon", 'DateTime'>
    readonly updatedAt: FieldRef<"Pokemon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pokemon findUnique
   */
  export type PokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findUniqueOrThrow
   */
  export type PokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findFirst
   */
  export type PokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findFirstOrThrow
   */
  export type PokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findMany
   */
  export type PokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon create
   */
  export type PokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a Pokemon.
     */
    data: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
  }

  /**
   * Pokemon createMany
   */
  export type PokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon createManyAndReturn
   */
  export type PokemonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pokemon update
   */
  export type PokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a Pokemon.
     */
    data: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
    /**
     * Choose, which Pokemon to update.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon updateMany
   */
  export type PokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon updateManyAndReturn
   */
  export type PokemonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pokemon upsert
   */
  export type PokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the Pokemon to update in case it exists.
     */
    where: PokemonWhereUniqueInput
    /**
     * In case the Pokemon found by the `where` argument doesn't exist, create a new Pokemon with this data.
     */
    create: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
    /**
     * In case the Pokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
  }

  /**
   * Pokemon delete
   */
  export type PokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter which Pokemon to delete.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon deleteMany
   */
  export type PokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to delete
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to delete.
     */
    limit?: number
  }

  /**
   * Pokemon.types
   */
  export type Pokemon$typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    where?: PokemonTypeWhereInput
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    cursor?: PokemonTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * Pokemon.resistances
   */
  export type Pokemon$resistancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    where?: PokemonResistanceWhereInput
    orderBy?: PokemonResistanceOrderByWithRelationInput | PokemonResistanceOrderByWithRelationInput[]
    cursor?: PokemonResistanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonResistanceScalarFieldEnum | PokemonResistanceScalarFieldEnum[]
  }

  /**
   * Pokemon.evolutions
   */
  export type Pokemon$evolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    where?: EvolutionWhereInput
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    cursor?: EvolutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvolutionScalarFieldEnum | EvolutionScalarFieldEnum[]
  }

  /**
   * Pokemon.preEvolutions
   */
  export type Pokemon$preEvolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    where?: EvolutionWhereInput
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    cursor?: EvolutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvolutionScalarFieldEnum | EvolutionScalarFieldEnum[]
  }

  /**
   * Pokemon without action
   */
  export type PokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
  }


  /**
   * Model Classification
   */

  export type AggregateClassification = {
    _count: ClassificationCountAggregateOutputType | null
    _avg: ClassificationAvgAggregateOutputType | null
    _sum: ClassificationSumAggregateOutputType | null
    _min: ClassificationMinAggregateOutputType | null
    _max: ClassificationMaxAggregateOutputType | null
  }

  export type ClassificationAvgAggregateOutputType = {
    id: number | null
  }

  export type ClassificationSumAggregateOutputType = {
    id: number | null
  }

  export type ClassificationMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClassificationMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ClassificationCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ClassificationAvgAggregateInputType = {
    id?: true
  }

  export type ClassificationSumAggregateInputType = {
    id?: true
  }

  export type ClassificationMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClassificationMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ClassificationCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ClassificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classification to aggregate.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classifications
    **/
    _count?: true | ClassificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassificationMaxAggregateInputType
  }

  export type GetClassificationAggregateType<T extends ClassificationAggregateArgs> = {
        [P in keyof T & keyof AggregateClassification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassification[P]>
      : GetScalarType<T[P], AggregateClassification[P]>
  }




  export type ClassificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassificationWhereInput
    orderBy?: ClassificationOrderByWithAggregationInput | ClassificationOrderByWithAggregationInput[]
    by: ClassificationScalarFieldEnum[] | ClassificationScalarFieldEnum
    having?: ClassificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassificationCountAggregateInputType | true
    _avg?: ClassificationAvgAggregateInputType
    _sum?: ClassificationSumAggregateInputType
    _min?: ClassificationMinAggregateInputType
    _max?: ClassificationMaxAggregateInputType
  }

  export type ClassificationGroupByOutputType = {
    id: number
    name: string
    _count: ClassificationCountAggregateOutputType | null
    _avg: ClassificationAvgAggregateOutputType | null
    _sum: ClassificationSumAggregateOutputType | null
    _min: ClassificationMinAggregateOutputType | null
    _max: ClassificationMaxAggregateOutputType | null
  }

  type GetClassificationGroupByPayload<T extends ClassificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassificationGroupByOutputType[P]>
            : GetScalarType<T[P], ClassificationGroupByOutputType[P]>
        }
      >
    >


  export type ClassificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pokemons?: boolean | Classification$pokemonsArgs<ExtArgs>
    _count?: boolean | ClassificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ClassificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["classification"]>
  export type ClassificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | Classification$pokemonsArgs<ExtArgs>
    _count?: boolean | ClassificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classification"
    objects: {
      pokemons: Prisma.$PokemonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["classification"]>
    composites: {}
  }

  type ClassificationGetPayload<S extends boolean | null | undefined | ClassificationDefaultArgs> = $Result.GetResult<Prisma.$ClassificationPayload, S>

  type ClassificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassificationCountAggregateInputType | true
    }

  export interface ClassificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classification'], meta: { name: 'Classification' } }
    /**
     * Find zero or one Classification that matches the filter.
     * @param {ClassificationFindUniqueArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassificationFindUniqueArgs>(args: SelectSubset<T, ClassificationFindUniqueArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassificationFindUniqueOrThrowArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindFirstArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassificationFindFirstArgs>(args?: SelectSubset<T, ClassificationFindFirstArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindFirstOrThrowArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classifications
     * const classifications = await prisma.classification.findMany()
     * 
     * // Get first 10 Classifications
     * const classifications = await prisma.classification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classificationWithIdOnly = await prisma.classification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassificationFindManyArgs>(args?: SelectSubset<T, ClassificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classification.
     * @param {ClassificationCreateArgs} args - Arguments to create a Classification.
     * @example
     * // Create one Classification
     * const Classification = await prisma.classification.create({
     *   data: {
     *     // ... data to create a Classification
     *   }
     * })
     * 
     */
    create<T extends ClassificationCreateArgs>(args: SelectSubset<T, ClassificationCreateArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classifications.
     * @param {ClassificationCreateManyArgs} args - Arguments to create many Classifications.
     * @example
     * // Create many Classifications
     * const classification = await prisma.classification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassificationCreateManyArgs>(args?: SelectSubset<T, ClassificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classifications and returns the data saved in the database.
     * @param {ClassificationCreateManyAndReturnArgs} args - Arguments to create many Classifications.
     * @example
     * // Create many Classifications
     * const classification = await prisma.classification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classifications and only return the `id`
     * const classificationWithIdOnly = await prisma.classification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classification.
     * @param {ClassificationDeleteArgs} args - Arguments to delete one Classification.
     * @example
     * // Delete one Classification
     * const Classification = await prisma.classification.delete({
     *   where: {
     *     // ... filter to delete one Classification
     *   }
     * })
     * 
     */
    delete<T extends ClassificationDeleteArgs>(args: SelectSubset<T, ClassificationDeleteArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classification.
     * @param {ClassificationUpdateArgs} args - Arguments to update one Classification.
     * @example
     * // Update one Classification
     * const classification = await prisma.classification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassificationUpdateArgs>(args: SelectSubset<T, ClassificationUpdateArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classifications.
     * @param {ClassificationDeleteManyArgs} args - Arguments to filter Classifications to delete.
     * @example
     * // Delete a few Classifications
     * const { count } = await prisma.classification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassificationDeleteManyArgs>(args?: SelectSubset<T, ClassificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classifications
     * const classification = await prisma.classification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassificationUpdateManyArgs>(args: SelectSubset<T, ClassificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifications and returns the data updated in the database.
     * @param {ClassificationUpdateManyAndReturnArgs} args - Arguments to update many Classifications.
     * @example
     * // Update many Classifications
     * const classification = await prisma.classification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classifications and only return the `id`
     * const classificationWithIdOnly = await prisma.classification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classification.
     * @param {ClassificationUpsertArgs} args - Arguments to update or create a Classification.
     * @example
     * // Update or create a Classification
     * const classification = await prisma.classification.upsert({
     *   create: {
     *     // ... data to create a Classification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classification we want to update
     *   }
     * })
     */
    upsert<T extends ClassificationUpsertArgs>(args: SelectSubset<T, ClassificationUpsertArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationCountArgs} args - Arguments to filter Classifications to count.
     * @example
     * // Count the number of Classifications
     * const count = await prisma.classification.count({
     *   where: {
     *     // ... the filter for the Classifications we want to count
     *   }
     * })
    **/
    count<T extends ClassificationCountArgs>(
      args?: Subset<T, ClassificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassificationAggregateArgs>(args: Subset<T, ClassificationAggregateArgs>): Prisma.PrismaPromise<GetClassificationAggregateType<T>>

    /**
     * Group by Classification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationGroupByArgs} args - Group by arguments.
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
      T extends ClassificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassificationGroupByArgs['orderBy'] }
        : { orderBy?: ClassificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classification model
   */
  readonly fields: ClassificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemons<T extends Classification$pokemonsArgs<ExtArgs> = {}>(args?: Subset<T, Classification$pokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Classification model
   */
  interface ClassificationFieldRefs {
    readonly id: FieldRef<"Classification", 'Int'>
    readonly name: FieldRef<"Classification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Classification findUnique
   */
  export type ClassificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification findUniqueOrThrow
   */
  export type ClassificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification findFirst
   */
  export type ClassificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifications.
     */
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification findFirstOrThrow
   */
  export type ClassificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifications.
     */
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification findMany
   */
  export type ClassificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classifications to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification create
   */
  export type ClassificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Classification.
     */
    data: XOR<ClassificationCreateInput, ClassificationUncheckedCreateInput>
  }

  /**
   * Classification createMany
   */
  export type ClassificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classifications.
     */
    data: ClassificationCreateManyInput | ClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classification createManyAndReturn
   */
  export type ClassificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data used to create many Classifications.
     */
    data: ClassificationCreateManyInput | ClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classification update
   */
  export type ClassificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Classification.
     */
    data: XOR<ClassificationUpdateInput, ClassificationUncheckedUpdateInput>
    /**
     * Choose, which Classification to update.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification updateMany
   */
  export type ClassificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classifications.
     */
    data: XOR<ClassificationUpdateManyMutationInput, ClassificationUncheckedUpdateManyInput>
    /**
     * Filter which Classifications to update
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to update.
     */
    limit?: number
  }

  /**
   * Classification updateManyAndReturn
   */
  export type ClassificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data used to update Classifications.
     */
    data: XOR<ClassificationUpdateManyMutationInput, ClassificationUncheckedUpdateManyInput>
    /**
     * Filter which Classifications to update
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to update.
     */
    limit?: number
  }

  /**
   * Classification upsert
   */
  export type ClassificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Classification to update in case it exists.
     */
    where: ClassificationWhereUniqueInput
    /**
     * In case the Classification found by the `where` argument doesn't exist, create a new Classification with this data.
     */
    create: XOR<ClassificationCreateInput, ClassificationUncheckedCreateInput>
    /**
     * In case the Classification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassificationUpdateInput, ClassificationUncheckedUpdateInput>
  }

  /**
   * Classification delete
   */
  export type ClassificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter which Classification to delete.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification deleteMany
   */
  export type ClassificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classifications to delete
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to delete.
     */
    limit?: number
  }

  /**
   * Classification.pokemons
   */
  export type Classification$pokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    where?: PokemonWhereInput
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    cursor?: PokemonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Classification without action
   */
  export type ClassificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeSumAggregateOutputType = {
    id: number | null
  }

  export type TypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id?: true
  }

  export type TypeSumAggregateInputType = {
    id?: true
  }

  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: number
    name: string
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pokemons?: boolean | Type$pokemonsArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["type"]>
  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | Type$pokemonsArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      pokemons: Prisma.$PokemonTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {TypeCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types and returns the data updated in the database.
     * @param {TypeUpdateManyAndReturnArgs} args - Arguments to update many Types.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
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
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemons<T extends Type$pokemonsArgs<ExtArgs> = {}>(args?: Subset<T, Type$pokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Type model
   */
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'Int'>
    readonly name: FieldRef<"Type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type createManyAndReturn
   */
  export type TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type updateManyAndReturn
   */
  export type TypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Type.pokemons
   */
  export type Type$pokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    where?: PokemonTypeWhereInput
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    cursor?: PokemonTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Model Resistance
   */

  export type AggregateResistance = {
    _count: ResistanceCountAggregateOutputType | null
    _avg: ResistanceAvgAggregateOutputType | null
    _sum: ResistanceSumAggregateOutputType | null
    _min: ResistanceMinAggregateOutputType | null
    _max: ResistanceMaxAggregateOutputType | null
  }

  export type ResistanceAvgAggregateOutputType = {
    id: number | null
  }

  export type ResistanceSumAggregateOutputType = {
    id: number | null
  }

  export type ResistanceMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ResistanceMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ResistanceCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ResistanceAvgAggregateInputType = {
    id?: true
  }

  export type ResistanceSumAggregateInputType = {
    id?: true
  }

  export type ResistanceMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ResistanceMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ResistanceCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ResistanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resistance to aggregate.
     */
    where?: ResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resistances to fetch.
     */
    orderBy?: ResistanceOrderByWithRelationInput | ResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resistances
    **/
    _count?: true | ResistanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResistanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResistanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResistanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResistanceMaxAggregateInputType
  }

  export type GetResistanceAggregateType<T extends ResistanceAggregateArgs> = {
        [P in keyof T & keyof AggregateResistance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResistance[P]>
      : GetScalarType<T[P], AggregateResistance[P]>
  }




  export type ResistanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResistanceWhereInput
    orderBy?: ResistanceOrderByWithAggregationInput | ResistanceOrderByWithAggregationInput[]
    by: ResistanceScalarFieldEnum[] | ResistanceScalarFieldEnum
    having?: ResistanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResistanceCountAggregateInputType | true
    _avg?: ResistanceAvgAggregateInputType
    _sum?: ResistanceSumAggregateInputType
    _min?: ResistanceMinAggregateInputType
    _max?: ResistanceMaxAggregateInputType
  }

  export type ResistanceGroupByOutputType = {
    id: number
    name: string
    _count: ResistanceCountAggregateOutputType | null
    _avg: ResistanceAvgAggregateOutputType | null
    _sum: ResistanceSumAggregateOutputType | null
    _min: ResistanceMinAggregateOutputType | null
    _max: ResistanceMaxAggregateOutputType | null
  }

  type GetResistanceGroupByPayload<T extends ResistanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResistanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResistanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResistanceGroupByOutputType[P]>
            : GetScalarType<T[P], ResistanceGroupByOutputType[P]>
        }
      >
    >


  export type ResistanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pokemons?: boolean | Resistance$pokemonsArgs<ExtArgs>
    _count?: boolean | ResistanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resistance"]>

  export type ResistanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["resistance"]>

  export type ResistanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["resistance"]>

  export type ResistanceSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ResistanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["resistance"]>
  export type ResistanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | Resistance$pokemonsArgs<ExtArgs>
    _count?: boolean | ResistanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResistanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResistanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResistancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resistance"
    objects: {
      pokemons: Prisma.$PokemonResistancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["resistance"]>
    composites: {}
  }

  type ResistanceGetPayload<S extends boolean | null | undefined | ResistanceDefaultArgs> = $Result.GetResult<Prisma.$ResistancePayload, S>

  type ResistanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResistanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResistanceCountAggregateInputType | true
    }

  export interface ResistanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resistance'], meta: { name: 'Resistance' } }
    /**
     * Find zero or one Resistance that matches the filter.
     * @param {ResistanceFindUniqueArgs} args - Arguments to find a Resistance
     * @example
     * // Get one Resistance
     * const resistance = await prisma.resistance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResistanceFindUniqueArgs>(args: SelectSubset<T, ResistanceFindUniqueArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resistance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResistanceFindUniqueOrThrowArgs} args - Arguments to find a Resistance
     * @example
     * // Get one Resistance
     * const resistance = await prisma.resistance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResistanceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResistanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resistance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceFindFirstArgs} args - Arguments to find a Resistance
     * @example
     * // Get one Resistance
     * const resistance = await prisma.resistance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResistanceFindFirstArgs>(args?: SelectSubset<T, ResistanceFindFirstArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resistance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceFindFirstOrThrowArgs} args - Arguments to find a Resistance
     * @example
     * // Get one Resistance
     * const resistance = await prisma.resistance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResistanceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResistanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resistances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resistances
     * const resistances = await prisma.resistance.findMany()
     * 
     * // Get first 10 Resistances
     * const resistances = await prisma.resistance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resistanceWithIdOnly = await prisma.resistance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResistanceFindManyArgs>(args?: SelectSubset<T, ResistanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resistance.
     * @param {ResistanceCreateArgs} args - Arguments to create a Resistance.
     * @example
     * // Create one Resistance
     * const Resistance = await prisma.resistance.create({
     *   data: {
     *     // ... data to create a Resistance
     *   }
     * })
     * 
     */
    create<T extends ResistanceCreateArgs>(args: SelectSubset<T, ResistanceCreateArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resistances.
     * @param {ResistanceCreateManyArgs} args - Arguments to create many Resistances.
     * @example
     * // Create many Resistances
     * const resistance = await prisma.resistance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResistanceCreateManyArgs>(args?: SelectSubset<T, ResistanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resistances and returns the data saved in the database.
     * @param {ResistanceCreateManyAndReturnArgs} args - Arguments to create many Resistances.
     * @example
     * // Create many Resistances
     * const resistance = await prisma.resistance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resistances and only return the `id`
     * const resistanceWithIdOnly = await prisma.resistance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResistanceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResistanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resistance.
     * @param {ResistanceDeleteArgs} args - Arguments to delete one Resistance.
     * @example
     * // Delete one Resistance
     * const Resistance = await prisma.resistance.delete({
     *   where: {
     *     // ... filter to delete one Resistance
     *   }
     * })
     * 
     */
    delete<T extends ResistanceDeleteArgs>(args: SelectSubset<T, ResistanceDeleteArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resistance.
     * @param {ResistanceUpdateArgs} args - Arguments to update one Resistance.
     * @example
     * // Update one Resistance
     * const resistance = await prisma.resistance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResistanceUpdateArgs>(args: SelectSubset<T, ResistanceUpdateArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resistances.
     * @param {ResistanceDeleteManyArgs} args - Arguments to filter Resistances to delete.
     * @example
     * // Delete a few Resistances
     * const { count } = await prisma.resistance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResistanceDeleteManyArgs>(args?: SelectSubset<T, ResistanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resistances
     * const resistance = await prisma.resistance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResistanceUpdateManyArgs>(args: SelectSubset<T, ResistanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resistances and returns the data updated in the database.
     * @param {ResistanceUpdateManyAndReturnArgs} args - Arguments to update many Resistances.
     * @example
     * // Update many Resistances
     * const resistance = await prisma.resistance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resistances and only return the `id`
     * const resistanceWithIdOnly = await prisma.resistance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResistanceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResistanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resistance.
     * @param {ResistanceUpsertArgs} args - Arguments to update or create a Resistance.
     * @example
     * // Update or create a Resistance
     * const resistance = await prisma.resistance.upsert({
     *   create: {
     *     // ... data to create a Resistance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resistance we want to update
     *   }
     * })
     */
    upsert<T extends ResistanceUpsertArgs>(args: SelectSubset<T, ResistanceUpsertArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceCountArgs} args - Arguments to filter Resistances to count.
     * @example
     * // Count the number of Resistances
     * const count = await prisma.resistance.count({
     *   where: {
     *     // ... the filter for the Resistances we want to count
     *   }
     * })
    **/
    count<T extends ResistanceCountArgs>(
      args?: Subset<T, ResistanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResistanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResistanceAggregateArgs>(args: Subset<T, ResistanceAggregateArgs>): Prisma.PrismaPromise<GetResistanceAggregateType<T>>

    /**
     * Group by Resistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceGroupByArgs} args - Group by arguments.
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
      T extends ResistanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResistanceGroupByArgs['orderBy'] }
        : { orderBy?: ResistanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResistanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResistanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resistance model
   */
  readonly fields: ResistanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resistance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResistanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemons<T extends Resistance$pokemonsArgs<ExtArgs> = {}>(args?: Subset<T, Resistance$pokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Resistance model
   */
  interface ResistanceFieldRefs {
    readonly id: FieldRef<"Resistance", 'Int'>
    readonly name: FieldRef<"Resistance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Resistance findUnique
   */
  export type ResistanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistance to fetch.
     */
    where: ResistanceWhereUniqueInput
  }

  /**
   * Resistance findUniqueOrThrow
   */
  export type ResistanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistance to fetch.
     */
    where: ResistanceWhereUniqueInput
  }

  /**
   * Resistance findFirst
   */
  export type ResistanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistance to fetch.
     */
    where?: ResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resistances to fetch.
     */
    orderBy?: ResistanceOrderByWithRelationInput | ResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resistances.
     */
    cursor?: ResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resistances.
     */
    distinct?: ResistanceScalarFieldEnum | ResistanceScalarFieldEnum[]
  }

  /**
   * Resistance findFirstOrThrow
   */
  export type ResistanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistance to fetch.
     */
    where?: ResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resistances to fetch.
     */
    orderBy?: ResistanceOrderByWithRelationInput | ResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resistances.
     */
    cursor?: ResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resistances.
     */
    distinct?: ResistanceScalarFieldEnum | ResistanceScalarFieldEnum[]
  }

  /**
   * Resistance findMany
   */
  export type ResistanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistances to fetch.
     */
    where?: ResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resistances to fetch.
     */
    orderBy?: ResistanceOrderByWithRelationInput | ResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resistances.
     */
    cursor?: ResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resistances.
     */
    skip?: number
    distinct?: ResistanceScalarFieldEnum | ResistanceScalarFieldEnum[]
  }

  /**
   * Resistance create
   */
  export type ResistanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resistance.
     */
    data: XOR<ResistanceCreateInput, ResistanceUncheckedCreateInput>
  }

  /**
   * Resistance createMany
   */
  export type ResistanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resistances.
     */
    data: ResistanceCreateManyInput | ResistanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resistance createManyAndReturn
   */
  export type ResistanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * The data used to create many Resistances.
     */
    data: ResistanceCreateManyInput | ResistanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resistance update
   */
  export type ResistanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resistance.
     */
    data: XOR<ResistanceUpdateInput, ResistanceUncheckedUpdateInput>
    /**
     * Choose, which Resistance to update.
     */
    where: ResistanceWhereUniqueInput
  }

  /**
   * Resistance updateMany
   */
  export type ResistanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resistances.
     */
    data: XOR<ResistanceUpdateManyMutationInput, ResistanceUncheckedUpdateManyInput>
    /**
     * Filter which Resistances to update
     */
    where?: ResistanceWhereInput
    /**
     * Limit how many Resistances to update.
     */
    limit?: number
  }

  /**
   * Resistance updateManyAndReturn
   */
  export type ResistanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * The data used to update Resistances.
     */
    data: XOR<ResistanceUpdateManyMutationInput, ResistanceUncheckedUpdateManyInput>
    /**
     * Filter which Resistances to update
     */
    where?: ResistanceWhereInput
    /**
     * Limit how many Resistances to update.
     */
    limit?: number
  }

  /**
   * Resistance upsert
   */
  export type ResistanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resistance to update in case it exists.
     */
    where: ResistanceWhereUniqueInput
    /**
     * In case the Resistance found by the `where` argument doesn't exist, create a new Resistance with this data.
     */
    create: XOR<ResistanceCreateInput, ResistanceUncheckedCreateInput>
    /**
     * In case the Resistance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResistanceUpdateInput, ResistanceUncheckedUpdateInput>
  }

  /**
   * Resistance delete
   */
  export type ResistanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter which Resistance to delete.
     */
    where: ResistanceWhereUniqueInput
  }

  /**
   * Resistance deleteMany
   */
  export type ResistanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resistances to delete
     */
    where?: ResistanceWhereInput
    /**
     * Limit how many Resistances to delete.
     */
    limit?: number
  }

  /**
   * Resistance.pokemons
   */
  export type Resistance$pokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    where?: PokemonResistanceWhereInput
    orderBy?: PokemonResistanceOrderByWithRelationInput | PokemonResistanceOrderByWithRelationInput[]
    cursor?: PokemonResistanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonResistanceScalarFieldEnum | PokemonResistanceScalarFieldEnum[]
  }

  /**
   * Resistance without action
   */
  export type ResistanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
  }


  /**
   * Model PokemonType
   */

  export type AggregatePokemonType = {
    _count: PokemonTypeCountAggregateOutputType | null
    _avg: PokemonTypeAvgAggregateOutputType | null
    _sum: PokemonTypeSumAggregateOutputType | null
    _min: PokemonTypeMinAggregateOutputType | null
    _max: PokemonTypeMaxAggregateOutputType | null
  }

  export type PokemonTypeAvgAggregateOutputType = {
    id: number | null
    pokemonId: number | null
    typeId: number | null
  }

  export type PokemonTypeSumAggregateOutputType = {
    id: number | null
    pokemonId: number | null
    typeId: number | null
  }

  export type PokemonTypeMinAggregateOutputType = {
    id: number | null
    pokemonId: number | null
    typeId: number | null
  }

  export type PokemonTypeMaxAggregateOutputType = {
    id: number | null
    pokemonId: number | null
    typeId: number | null
  }

  export type PokemonTypeCountAggregateOutputType = {
    id: number
    pokemonId: number
    typeId: number
    _all: number
  }


  export type PokemonTypeAvgAggregateInputType = {
    id?: true
    pokemonId?: true
    typeId?: true
  }

  export type PokemonTypeSumAggregateInputType = {
    id?: true
    pokemonId?: true
    typeId?: true
  }

  export type PokemonTypeMinAggregateInputType = {
    id?: true
    pokemonId?: true
    typeId?: true
  }

  export type PokemonTypeMaxAggregateInputType = {
    id?: true
    pokemonId?: true
    typeId?: true
  }

  export type PokemonTypeCountAggregateInputType = {
    id?: true
    pokemonId?: true
    typeId?: true
    _all?: true
  }

  export type PokemonTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonType to aggregate.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonTypes
    **/
    _count?: true | PokemonTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonTypeMaxAggregateInputType
  }

  export type GetPokemonTypeAggregateType<T extends PokemonTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonType[P]>
      : GetScalarType<T[P], AggregatePokemonType[P]>
  }




  export type PokemonTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonTypeWhereInput
    orderBy?: PokemonTypeOrderByWithAggregationInput | PokemonTypeOrderByWithAggregationInput[]
    by: PokemonTypeScalarFieldEnum[] | PokemonTypeScalarFieldEnum
    having?: PokemonTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonTypeCountAggregateInputType | true
    _avg?: PokemonTypeAvgAggregateInputType
    _sum?: PokemonTypeSumAggregateInputType
    _min?: PokemonTypeMinAggregateInputType
    _max?: PokemonTypeMaxAggregateInputType
  }

  export type PokemonTypeGroupByOutputType = {
    id: number
    pokemonId: number
    typeId: number
    _count: PokemonTypeCountAggregateOutputType | null
    _avg: PokemonTypeAvgAggregateOutputType | null
    _sum: PokemonTypeSumAggregateOutputType | null
    _min: PokemonTypeMinAggregateOutputType | null
    _max: PokemonTypeMaxAggregateOutputType | null
  }

  type GetPokemonTypeGroupByPayload<T extends PokemonTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonTypeGroupByOutputType[P]>
        }
      >
    >


  export type PokemonTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemonId?: boolean
    typeId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonType"]>

  export type PokemonTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemonId?: boolean
    typeId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonType"]>

  export type PokemonTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemonId?: boolean
    typeId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonType"]>

  export type PokemonTypeSelectScalar = {
    id?: boolean
    pokemonId?: boolean
    typeId?: boolean
  }

  export type PokemonTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pokemonId" | "typeId", ExtArgs["result"]["pokemonType"]>
  export type PokemonTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }
  export type PokemonTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }
  export type PokemonTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }

  export type $PokemonTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonType"
    objects: {
      pokemon: Prisma.$PokemonPayload<ExtArgs>
      type: Prisma.$TypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pokemonId: number
      typeId: number
    }, ExtArgs["result"]["pokemonType"]>
    composites: {}
  }

  type PokemonTypeGetPayload<S extends boolean | null | undefined | PokemonTypeDefaultArgs> = $Result.GetResult<Prisma.$PokemonTypePayload, S>

  type PokemonTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonTypeCountAggregateInputType | true
    }

  export interface PokemonTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonType'], meta: { name: 'PokemonType' } }
    /**
     * Find zero or one PokemonType that matches the filter.
     * @param {PokemonTypeFindUniqueArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonTypeFindUniqueArgs>(args: SelectSubset<T, PokemonTypeFindUniqueArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokemonType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonTypeFindUniqueOrThrowArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeFindFirstArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonTypeFindFirstArgs>(args?: SelectSubset<T, PokemonTypeFindFirstArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeFindFirstOrThrowArgs} args - Arguments to find a PokemonType
     * @example
     * // Get one PokemonType
     * const pokemonType = await prisma.pokemonType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokemonTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonTypes
     * const pokemonTypes = await prisma.pokemonType.findMany()
     * 
     * // Get first 10 PokemonTypes
     * const pokemonTypes = await prisma.pokemonType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonTypeWithIdOnly = await prisma.pokemonType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonTypeFindManyArgs>(args?: SelectSubset<T, PokemonTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokemonType.
     * @param {PokemonTypeCreateArgs} args - Arguments to create a PokemonType.
     * @example
     * // Create one PokemonType
     * const PokemonType = await prisma.pokemonType.create({
     *   data: {
     *     // ... data to create a PokemonType
     *   }
     * })
     * 
     */
    create<T extends PokemonTypeCreateArgs>(args: SelectSubset<T, PokemonTypeCreateArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokemonTypes.
     * @param {PokemonTypeCreateManyArgs} args - Arguments to create many PokemonTypes.
     * @example
     * // Create many PokemonTypes
     * const pokemonType = await prisma.pokemonType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonTypeCreateManyArgs>(args?: SelectSubset<T, PokemonTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonTypes and returns the data saved in the database.
     * @param {PokemonTypeCreateManyAndReturnArgs} args - Arguments to create many PokemonTypes.
     * @example
     * // Create many PokemonTypes
     * const pokemonType = await prisma.pokemonType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonTypes and only return the `id`
     * const pokemonTypeWithIdOnly = await prisma.pokemonType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokemonType.
     * @param {PokemonTypeDeleteArgs} args - Arguments to delete one PokemonType.
     * @example
     * // Delete one PokemonType
     * const PokemonType = await prisma.pokemonType.delete({
     *   where: {
     *     // ... filter to delete one PokemonType
     *   }
     * })
     * 
     */
    delete<T extends PokemonTypeDeleteArgs>(args: SelectSubset<T, PokemonTypeDeleteArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokemonType.
     * @param {PokemonTypeUpdateArgs} args - Arguments to update one PokemonType.
     * @example
     * // Update one PokemonType
     * const pokemonType = await prisma.pokemonType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonTypeUpdateArgs>(args: SelectSubset<T, PokemonTypeUpdateArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokemonTypes.
     * @param {PokemonTypeDeleteManyArgs} args - Arguments to filter PokemonTypes to delete.
     * @example
     * // Delete a few PokemonTypes
     * const { count } = await prisma.pokemonType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonTypeDeleteManyArgs>(args?: SelectSubset<T, PokemonTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonTypes
     * const pokemonType = await prisma.pokemonType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonTypeUpdateManyArgs>(args: SelectSubset<T, PokemonTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonTypes and returns the data updated in the database.
     * @param {PokemonTypeUpdateManyAndReturnArgs} args - Arguments to update many PokemonTypes.
     * @example
     * // Update many PokemonTypes
     * const pokemonType = await prisma.pokemonType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokemonTypes and only return the `id`
     * const pokemonTypeWithIdOnly = await prisma.pokemonType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokemonType.
     * @param {PokemonTypeUpsertArgs} args - Arguments to update or create a PokemonType.
     * @example
     * // Update or create a PokemonType
     * const pokemonType = await prisma.pokemonType.upsert({
     *   create: {
     *     // ... data to create a PokemonType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonType we want to update
     *   }
     * })
     */
    upsert<T extends PokemonTypeUpsertArgs>(args: SelectSubset<T, PokemonTypeUpsertArgs<ExtArgs>>): Prisma__PokemonTypeClient<$Result.GetResult<Prisma.$PokemonTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokemonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeCountArgs} args - Arguments to filter PokemonTypes to count.
     * @example
     * // Count the number of PokemonTypes
     * const count = await prisma.pokemonType.count({
     *   where: {
     *     // ... the filter for the PokemonTypes we want to count
     *   }
     * })
    **/
    count<T extends PokemonTypeCountArgs>(
      args?: Subset<T, PokemonTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonTypeAggregateArgs>(args: Subset<T, PokemonTypeAggregateArgs>): Prisma.PrismaPromise<GetPokemonTypeAggregateType<T>>

    /**
     * Group by PokemonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonTypeGroupByArgs} args - Group by arguments.
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
      T extends PokemonTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonTypeGroupByArgs['orderBy'] }
        : { orderBy?: PokemonTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PokemonTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonType model
   */
  readonly fields: PokemonTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PokemonType model
   */
  interface PokemonTypeFieldRefs {
    readonly id: FieldRef<"PokemonType", 'Int'>
    readonly pokemonId: FieldRef<"PokemonType", 'Int'>
    readonly typeId: FieldRef<"PokemonType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PokemonType findUnique
   */
  export type PokemonTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType findUniqueOrThrow
   */
  export type PokemonTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType findFirst
   */
  export type PokemonTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonTypes.
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonTypes.
     */
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * PokemonType findFirstOrThrow
   */
  export type PokemonTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonType to fetch.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonTypes.
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonTypes.
     */
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * PokemonType findMany
   */
  export type PokemonTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter, which PokemonTypes to fetch.
     */
    where?: PokemonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonTypes to fetch.
     */
    orderBy?: PokemonTypeOrderByWithRelationInput | PokemonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonTypes.
     */
    cursor?: PokemonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonTypes.
     */
    skip?: number
    distinct?: PokemonTypeScalarFieldEnum | PokemonTypeScalarFieldEnum[]
  }

  /**
   * PokemonType create
   */
  export type PokemonTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a PokemonType.
     */
    data: XOR<PokemonTypeCreateInput, PokemonTypeUncheckedCreateInput>
  }

  /**
   * PokemonType createMany
   */
  export type PokemonTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonTypes.
     */
    data: PokemonTypeCreateManyInput | PokemonTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonType createManyAndReturn
   */
  export type PokemonTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * The data used to create many PokemonTypes.
     */
    data: PokemonTypeCreateManyInput | PokemonTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonType update
   */
  export type PokemonTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a PokemonType.
     */
    data: XOR<PokemonTypeUpdateInput, PokemonTypeUncheckedUpdateInput>
    /**
     * Choose, which PokemonType to update.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType updateMany
   */
  export type PokemonTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonTypes.
     */
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyInput>
    /**
     * Filter which PokemonTypes to update
     */
    where?: PokemonTypeWhereInput
    /**
     * Limit how many PokemonTypes to update.
     */
    limit?: number
  }

  /**
   * PokemonType updateManyAndReturn
   */
  export type PokemonTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * The data used to update PokemonTypes.
     */
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyInput>
    /**
     * Filter which PokemonTypes to update
     */
    where?: PokemonTypeWhereInput
    /**
     * Limit how many PokemonTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonType upsert
   */
  export type PokemonTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the PokemonType to update in case it exists.
     */
    where: PokemonTypeWhereUniqueInput
    /**
     * In case the PokemonType found by the `where` argument doesn't exist, create a new PokemonType with this data.
     */
    create: XOR<PokemonTypeCreateInput, PokemonTypeUncheckedCreateInput>
    /**
     * In case the PokemonType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonTypeUpdateInput, PokemonTypeUncheckedUpdateInput>
  }

  /**
   * PokemonType delete
   */
  export type PokemonTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
    /**
     * Filter which PokemonType to delete.
     */
    where: PokemonTypeWhereUniqueInput
  }

  /**
   * PokemonType deleteMany
   */
  export type PokemonTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonTypes to delete
     */
    where?: PokemonTypeWhereInput
    /**
     * Limit how many PokemonTypes to delete.
     */
    limit?: number
  }

  /**
   * PokemonType without action
   */
  export type PokemonTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonType
     */
    select?: PokemonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonType
     */
    omit?: PokemonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonTypeInclude<ExtArgs> | null
  }


  /**
   * Model PokemonResistance
   */

  export type AggregatePokemonResistance = {
    _count: PokemonResistanceCountAggregateOutputType | null
    _avg: PokemonResistanceAvgAggregateOutputType | null
    _sum: PokemonResistanceSumAggregateOutputType | null
    _min: PokemonResistanceMinAggregateOutputType | null
    _max: PokemonResistanceMaxAggregateOutputType | null
  }

  export type PokemonResistanceAvgAggregateOutputType = {
    id: number | null
    pokemonId: number | null
    resistanceId: number | null
  }

  export type PokemonResistanceSumAggregateOutputType = {
    id: number | null
    pokemonId: number | null
    resistanceId: number | null
  }

  export type PokemonResistanceMinAggregateOutputType = {
    id: number | null
    pokemonId: number | null
    resistanceId: number | null
  }

  export type PokemonResistanceMaxAggregateOutputType = {
    id: number | null
    pokemonId: number | null
    resistanceId: number | null
  }

  export type PokemonResistanceCountAggregateOutputType = {
    id: number
    pokemonId: number
    resistanceId: number
    _all: number
  }


  export type PokemonResistanceAvgAggregateInputType = {
    id?: true
    pokemonId?: true
    resistanceId?: true
  }

  export type PokemonResistanceSumAggregateInputType = {
    id?: true
    pokemonId?: true
    resistanceId?: true
  }

  export type PokemonResistanceMinAggregateInputType = {
    id?: true
    pokemonId?: true
    resistanceId?: true
  }

  export type PokemonResistanceMaxAggregateInputType = {
    id?: true
    pokemonId?: true
    resistanceId?: true
  }

  export type PokemonResistanceCountAggregateInputType = {
    id?: true
    pokemonId?: true
    resistanceId?: true
    _all?: true
  }

  export type PokemonResistanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonResistance to aggregate.
     */
    where?: PokemonResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonResistances to fetch.
     */
    orderBy?: PokemonResistanceOrderByWithRelationInput | PokemonResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonResistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonResistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonResistances
    **/
    _count?: true | PokemonResistanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonResistanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonResistanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonResistanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonResistanceMaxAggregateInputType
  }

  export type GetPokemonResistanceAggregateType<T extends PokemonResistanceAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonResistance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonResistance[P]>
      : GetScalarType<T[P], AggregatePokemonResistance[P]>
  }




  export type PokemonResistanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonResistanceWhereInput
    orderBy?: PokemonResistanceOrderByWithAggregationInput | PokemonResistanceOrderByWithAggregationInput[]
    by: PokemonResistanceScalarFieldEnum[] | PokemonResistanceScalarFieldEnum
    having?: PokemonResistanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonResistanceCountAggregateInputType | true
    _avg?: PokemonResistanceAvgAggregateInputType
    _sum?: PokemonResistanceSumAggregateInputType
    _min?: PokemonResistanceMinAggregateInputType
    _max?: PokemonResistanceMaxAggregateInputType
  }

  export type PokemonResistanceGroupByOutputType = {
    id: number
    pokemonId: number
    resistanceId: number
    _count: PokemonResistanceCountAggregateOutputType | null
    _avg: PokemonResistanceAvgAggregateOutputType | null
    _sum: PokemonResistanceSumAggregateOutputType | null
    _min: PokemonResistanceMinAggregateOutputType | null
    _max: PokemonResistanceMaxAggregateOutputType | null
  }

  type GetPokemonResistanceGroupByPayload<T extends PokemonResistanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonResistanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonResistanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonResistanceGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonResistanceGroupByOutputType[P]>
        }
      >
    >


  export type PokemonResistanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemonId?: boolean
    resistanceId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    resistance?: boolean | ResistanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonResistance"]>

  export type PokemonResistanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemonId?: boolean
    resistanceId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    resistance?: boolean | ResistanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonResistance"]>

  export type PokemonResistanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemonId?: boolean
    resistanceId?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    resistance?: boolean | ResistanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonResistance"]>

  export type PokemonResistanceSelectScalar = {
    id?: boolean
    pokemonId?: boolean
    resistanceId?: boolean
  }

  export type PokemonResistanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pokemonId" | "resistanceId", ExtArgs["result"]["pokemonResistance"]>
  export type PokemonResistanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    resistance?: boolean | ResistanceDefaultArgs<ExtArgs>
  }
  export type PokemonResistanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    resistance?: boolean | ResistanceDefaultArgs<ExtArgs>
  }
  export type PokemonResistanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    resistance?: boolean | ResistanceDefaultArgs<ExtArgs>
  }

  export type $PokemonResistancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonResistance"
    objects: {
      pokemon: Prisma.$PokemonPayload<ExtArgs>
      resistance: Prisma.$ResistancePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pokemonId: number
      resistanceId: number
    }, ExtArgs["result"]["pokemonResistance"]>
    composites: {}
  }

  type PokemonResistanceGetPayload<S extends boolean | null | undefined | PokemonResistanceDefaultArgs> = $Result.GetResult<Prisma.$PokemonResistancePayload, S>

  type PokemonResistanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonResistanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonResistanceCountAggregateInputType | true
    }

  export interface PokemonResistanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonResistance'], meta: { name: 'PokemonResistance' } }
    /**
     * Find zero or one PokemonResistance that matches the filter.
     * @param {PokemonResistanceFindUniqueArgs} args - Arguments to find a PokemonResistance
     * @example
     * // Get one PokemonResistance
     * const pokemonResistance = await prisma.pokemonResistance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonResistanceFindUniqueArgs>(args: SelectSubset<T, PokemonResistanceFindUniqueArgs<ExtArgs>>): Prisma__PokemonResistanceClient<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokemonResistance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonResistanceFindUniqueOrThrowArgs} args - Arguments to find a PokemonResistance
     * @example
     * // Get one PokemonResistance
     * const pokemonResistance = await prisma.pokemonResistance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonResistanceFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonResistanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonResistanceClient<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonResistance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonResistanceFindFirstArgs} args - Arguments to find a PokemonResistance
     * @example
     * // Get one PokemonResistance
     * const pokemonResistance = await prisma.pokemonResistance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonResistanceFindFirstArgs>(args?: SelectSubset<T, PokemonResistanceFindFirstArgs<ExtArgs>>): Prisma__PokemonResistanceClient<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonResistance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonResistanceFindFirstOrThrowArgs} args - Arguments to find a PokemonResistance
     * @example
     * // Get one PokemonResistance
     * const pokemonResistance = await prisma.pokemonResistance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonResistanceFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonResistanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonResistanceClient<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokemonResistances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonResistanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonResistances
     * const pokemonResistances = await prisma.pokemonResistance.findMany()
     * 
     * // Get first 10 PokemonResistances
     * const pokemonResistances = await prisma.pokemonResistance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonResistanceWithIdOnly = await prisma.pokemonResistance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonResistanceFindManyArgs>(args?: SelectSubset<T, PokemonResistanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokemonResistance.
     * @param {PokemonResistanceCreateArgs} args - Arguments to create a PokemonResistance.
     * @example
     * // Create one PokemonResistance
     * const PokemonResistance = await prisma.pokemonResistance.create({
     *   data: {
     *     // ... data to create a PokemonResistance
     *   }
     * })
     * 
     */
    create<T extends PokemonResistanceCreateArgs>(args: SelectSubset<T, PokemonResistanceCreateArgs<ExtArgs>>): Prisma__PokemonResistanceClient<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokemonResistances.
     * @param {PokemonResistanceCreateManyArgs} args - Arguments to create many PokemonResistances.
     * @example
     * // Create many PokemonResistances
     * const pokemonResistance = await prisma.pokemonResistance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonResistanceCreateManyArgs>(args?: SelectSubset<T, PokemonResistanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonResistances and returns the data saved in the database.
     * @param {PokemonResistanceCreateManyAndReturnArgs} args - Arguments to create many PokemonResistances.
     * @example
     * // Create many PokemonResistances
     * const pokemonResistance = await prisma.pokemonResistance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonResistances and only return the `id`
     * const pokemonResistanceWithIdOnly = await prisma.pokemonResistance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonResistanceCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonResistanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokemonResistance.
     * @param {PokemonResistanceDeleteArgs} args - Arguments to delete one PokemonResistance.
     * @example
     * // Delete one PokemonResistance
     * const PokemonResistance = await prisma.pokemonResistance.delete({
     *   where: {
     *     // ... filter to delete one PokemonResistance
     *   }
     * })
     * 
     */
    delete<T extends PokemonResistanceDeleteArgs>(args: SelectSubset<T, PokemonResistanceDeleteArgs<ExtArgs>>): Prisma__PokemonResistanceClient<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokemonResistance.
     * @param {PokemonResistanceUpdateArgs} args - Arguments to update one PokemonResistance.
     * @example
     * // Update one PokemonResistance
     * const pokemonResistance = await prisma.pokemonResistance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonResistanceUpdateArgs>(args: SelectSubset<T, PokemonResistanceUpdateArgs<ExtArgs>>): Prisma__PokemonResistanceClient<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokemonResistances.
     * @param {PokemonResistanceDeleteManyArgs} args - Arguments to filter PokemonResistances to delete.
     * @example
     * // Delete a few PokemonResistances
     * const { count } = await prisma.pokemonResistance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonResistanceDeleteManyArgs>(args?: SelectSubset<T, PokemonResistanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonResistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonResistanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonResistances
     * const pokemonResistance = await prisma.pokemonResistance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonResistanceUpdateManyArgs>(args: SelectSubset<T, PokemonResistanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonResistances and returns the data updated in the database.
     * @param {PokemonResistanceUpdateManyAndReturnArgs} args - Arguments to update many PokemonResistances.
     * @example
     * // Update many PokemonResistances
     * const pokemonResistance = await prisma.pokemonResistance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokemonResistances and only return the `id`
     * const pokemonResistanceWithIdOnly = await prisma.pokemonResistance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonResistanceUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonResistanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokemonResistance.
     * @param {PokemonResistanceUpsertArgs} args - Arguments to update or create a PokemonResistance.
     * @example
     * // Update or create a PokemonResistance
     * const pokemonResistance = await prisma.pokemonResistance.upsert({
     *   create: {
     *     // ... data to create a PokemonResistance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonResistance we want to update
     *   }
     * })
     */
    upsert<T extends PokemonResistanceUpsertArgs>(args: SelectSubset<T, PokemonResistanceUpsertArgs<ExtArgs>>): Prisma__PokemonResistanceClient<$Result.GetResult<Prisma.$PokemonResistancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokemonResistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonResistanceCountArgs} args - Arguments to filter PokemonResistances to count.
     * @example
     * // Count the number of PokemonResistances
     * const count = await prisma.pokemonResistance.count({
     *   where: {
     *     // ... the filter for the PokemonResistances we want to count
     *   }
     * })
    **/
    count<T extends PokemonResistanceCountArgs>(
      args?: Subset<T, PokemonResistanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonResistanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonResistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonResistanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonResistanceAggregateArgs>(args: Subset<T, PokemonResistanceAggregateArgs>): Prisma.PrismaPromise<GetPokemonResistanceAggregateType<T>>

    /**
     * Group by PokemonResistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonResistanceGroupByArgs} args - Group by arguments.
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
      T extends PokemonResistanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonResistanceGroupByArgs['orderBy'] }
        : { orderBy?: PokemonResistanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PokemonResistanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonResistanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonResistance model
   */
  readonly fields: PokemonResistanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonResistance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonResistanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resistance<T extends ResistanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResistanceDefaultArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PokemonResistance model
   */
  interface PokemonResistanceFieldRefs {
    readonly id: FieldRef<"PokemonResistance", 'Int'>
    readonly pokemonId: FieldRef<"PokemonResistance", 'Int'>
    readonly resistanceId: FieldRef<"PokemonResistance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PokemonResistance findUnique
   */
  export type PokemonResistanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    /**
     * Filter, which PokemonResistance to fetch.
     */
    where: PokemonResistanceWhereUniqueInput
  }

  /**
   * PokemonResistance findUniqueOrThrow
   */
  export type PokemonResistanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    /**
     * Filter, which PokemonResistance to fetch.
     */
    where: PokemonResistanceWhereUniqueInput
  }

  /**
   * PokemonResistance findFirst
   */
  export type PokemonResistanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    /**
     * Filter, which PokemonResistance to fetch.
     */
    where?: PokemonResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonResistances to fetch.
     */
    orderBy?: PokemonResistanceOrderByWithRelationInput | PokemonResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonResistances.
     */
    cursor?: PokemonResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonResistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonResistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonResistances.
     */
    distinct?: PokemonResistanceScalarFieldEnum | PokemonResistanceScalarFieldEnum[]
  }

  /**
   * PokemonResistance findFirstOrThrow
   */
  export type PokemonResistanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    /**
     * Filter, which PokemonResistance to fetch.
     */
    where?: PokemonResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonResistances to fetch.
     */
    orderBy?: PokemonResistanceOrderByWithRelationInput | PokemonResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonResistances.
     */
    cursor?: PokemonResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonResistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonResistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonResistances.
     */
    distinct?: PokemonResistanceScalarFieldEnum | PokemonResistanceScalarFieldEnum[]
  }

  /**
   * PokemonResistance findMany
   */
  export type PokemonResistanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    /**
     * Filter, which PokemonResistances to fetch.
     */
    where?: PokemonResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonResistances to fetch.
     */
    orderBy?: PokemonResistanceOrderByWithRelationInput | PokemonResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonResistances.
     */
    cursor?: PokemonResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonResistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonResistances.
     */
    skip?: number
    distinct?: PokemonResistanceScalarFieldEnum | PokemonResistanceScalarFieldEnum[]
  }

  /**
   * PokemonResistance create
   */
  export type PokemonResistanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    /**
     * The data needed to create a PokemonResistance.
     */
    data: XOR<PokemonResistanceCreateInput, PokemonResistanceUncheckedCreateInput>
  }

  /**
   * PokemonResistance createMany
   */
  export type PokemonResistanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonResistances.
     */
    data: PokemonResistanceCreateManyInput | PokemonResistanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonResistance createManyAndReturn
   */
  export type PokemonResistanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * The data used to create many PokemonResistances.
     */
    data: PokemonResistanceCreateManyInput | PokemonResistanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonResistance update
   */
  export type PokemonResistanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    /**
     * The data needed to update a PokemonResistance.
     */
    data: XOR<PokemonResistanceUpdateInput, PokemonResistanceUncheckedUpdateInput>
    /**
     * Choose, which PokemonResistance to update.
     */
    where: PokemonResistanceWhereUniqueInput
  }

  /**
   * PokemonResistance updateMany
   */
  export type PokemonResistanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonResistances.
     */
    data: XOR<PokemonResistanceUpdateManyMutationInput, PokemonResistanceUncheckedUpdateManyInput>
    /**
     * Filter which PokemonResistances to update
     */
    where?: PokemonResistanceWhereInput
    /**
     * Limit how many PokemonResistances to update.
     */
    limit?: number
  }

  /**
   * PokemonResistance updateManyAndReturn
   */
  export type PokemonResistanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * The data used to update PokemonResistances.
     */
    data: XOR<PokemonResistanceUpdateManyMutationInput, PokemonResistanceUncheckedUpdateManyInput>
    /**
     * Filter which PokemonResistances to update
     */
    where?: PokemonResistanceWhereInput
    /**
     * Limit how many PokemonResistances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonResistance upsert
   */
  export type PokemonResistanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    /**
     * The filter to search for the PokemonResistance to update in case it exists.
     */
    where: PokemonResistanceWhereUniqueInput
    /**
     * In case the PokemonResistance found by the `where` argument doesn't exist, create a new PokemonResistance with this data.
     */
    create: XOR<PokemonResistanceCreateInput, PokemonResistanceUncheckedCreateInput>
    /**
     * In case the PokemonResistance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonResistanceUpdateInput, PokemonResistanceUncheckedUpdateInput>
  }

  /**
   * PokemonResistance delete
   */
  export type PokemonResistanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
    /**
     * Filter which PokemonResistance to delete.
     */
    where: PokemonResistanceWhereUniqueInput
  }

  /**
   * PokemonResistance deleteMany
   */
  export type PokemonResistanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonResistances to delete
     */
    where?: PokemonResistanceWhereInput
    /**
     * Limit how many PokemonResistances to delete.
     */
    limit?: number
  }

  /**
   * PokemonResistance without action
   */
  export type PokemonResistanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonResistance
     */
    select?: PokemonResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonResistance
     */
    omit?: PokemonResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonResistanceInclude<ExtArgs> | null
  }


  /**
   * Model Evolution
   */

  export type AggregateEvolution = {
    _count: EvolutionCountAggregateOutputType | null
    _avg: EvolutionAvgAggregateOutputType | null
    _sum: EvolutionSumAggregateOutputType | null
    _min: EvolutionMinAggregateOutputType | null
    _max: EvolutionMaxAggregateOutputType | null
  }

  export type EvolutionAvgAggregateOutputType = {
    id: number | null
    fromPokemonId: number | null
    toPokemonId: number | null
  }

  export type EvolutionSumAggregateOutputType = {
    id: number | null
    fromPokemonId: number | null
    toPokemonId: number | null
  }

  export type EvolutionMinAggregateOutputType = {
    id: number | null
    fromPokemonId: number | null
    toPokemonId: number | null
  }

  export type EvolutionMaxAggregateOutputType = {
    id: number | null
    fromPokemonId: number | null
    toPokemonId: number | null
  }

  export type EvolutionCountAggregateOutputType = {
    id: number
    fromPokemonId: number
    toPokemonId: number
    _all: number
  }


  export type EvolutionAvgAggregateInputType = {
    id?: true
    fromPokemonId?: true
    toPokemonId?: true
  }

  export type EvolutionSumAggregateInputType = {
    id?: true
    fromPokemonId?: true
    toPokemonId?: true
  }

  export type EvolutionMinAggregateInputType = {
    id?: true
    fromPokemonId?: true
    toPokemonId?: true
  }

  export type EvolutionMaxAggregateInputType = {
    id?: true
    fromPokemonId?: true
    toPokemonId?: true
  }

  export type EvolutionCountAggregateInputType = {
    id?: true
    fromPokemonId?: true
    toPokemonId?: true
    _all?: true
  }

  export type EvolutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evolution to aggregate.
     */
    where?: EvolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolutions to fetch.
     */
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evolutions
    **/
    _count?: true | EvolutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvolutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvolutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvolutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvolutionMaxAggregateInputType
  }

  export type GetEvolutionAggregateType<T extends EvolutionAggregateArgs> = {
        [P in keyof T & keyof AggregateEvolution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvolution[P]>
      : GetScalarType<T[P], AggregateEvolution[P]>
  }




  export type EvolutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvolutionWhereInput
    orderBy?: EvolutionOrderByWithAggregationInput | EvolutionOrderByWithAggregationInput[]
    by: EvolutionScalarFieldEnum[] | EvolutionScalarFieldEnum
    having?: EvolutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvolutionCountAggregateInputType | true
    _avg?: EvolutionAvgAggregateInputType
    _sum?: EvolutionSumAggregateInputType
    _min?: EvolutionMinAggregateInputType
    _max?: EvolutionMaxAggregateInputType
  }

  export type EvolutionGroupByOutputType = {
    id: number
    fromPokemonId: number
    toPokemonId: number
    _count: EvolutionCountAggregateOutputType | null
    _avg: EvolutionAvgAggregateOutputType | null
    _sum: EvolutionSumAggregateOutputType | null
    _min: EvolutionMinAggregateOutputType | null
    _max: EvolutionMaxAggregateOutputType | null
  }

  type GetEvolutionGroupByPayload<T extends EvolutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvolutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvolutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvolutionGroupByOutputType[P]>
            : GetScalarType<T[P], EvolutionGroupByOutputType[P]>
        }
      >
    >


  export type EvolutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromPokemonId?: boolean
    toPokemonId?: boolean
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolution"]>

  export type EvolutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromPokemonId?: boolean
    toPokemonId?: boolean
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolution"]>

  export type EvolutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromPokemonId?: boolean
    toPokemonId?: boolean
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evolution"]>

  export type EvolutionSelectScalar = {
    id?: boolean
    fromPokemonId?: boolean
    toPokemonId?: boolean
  }

  export type EvolutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromPokemonId" | "toPokemonId", ExtArgs["result"]["evolution"]>
  export type EvolutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type EvolutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }
  export type EvolutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    toPokemon?: boolean | PokemonDefaultArgs<ExtArgs>
  }

  export type $EvolutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evolution"
    objects: {
      fromPokemon: Prisma.$PokemonPayload<ExtArgs>
      toPokemon: Prisma.$PokemonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fromPokemonId: number
      toPokemonId: number
    }, ExtArgs["result"]["evolution"]>
    composites: {}
  }

  type EvolutionGetPayload<S extends boolean | null | undefined | EvolutionDefaultArgs> = $Result.GetResult<Prisma.$EvolutionPayload, S>

  type EvolutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvolutionCountAggregateInputType | true
    }

  export interface EvolutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evolution'], meta: { name: 'Evolution' } }
    /**
     * Find zero or one Evolution that matches the filter.
     * @param {EvolutionFindUniqueArgs} args - Arguments to find a Evolution
     * @example
     * // Get one Evolution
     * const evolution = await prisma.evolution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvolutionFindUniqueArgs>(args: SelectSubset<T, EvolutionFindUniqueArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evolution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvolutionFindUniqueOrThrowArgs} args - Arguments to find a Evolution
     * @example
     * // Get one Evolution
     * const evolution = await prisma.evolution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvolutionFindUniqueOrThrowArgs>(args: SelectSubset<T, EvolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evolution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionFindFirstArgs} args - Arguments to find a Evolution
     * @example
     * // Get one Evolution
     * const evolution = await prisma.evolution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvolutionFindFirstArgs>(args?: SelectSubset<T, EvolutionFindFirstArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evolution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionFindFirstOrThrowArgs} args - Arguments to find a Evolution
     * @example
     * // Get one Evolution
     * const evolution = await prisma.evolution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvolutionFindFirstOrThrowArgs>(args?: SelectSubset<T, EvolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evolutions
     * const evolutions = await prisma.evolution.findMany()
     * 
     * // Get first 10 Evolutions
     * const evolutions = await prisma.evolution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evolutionWithIdOnly = await prisma.evolution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvolutionFindManyArgs>(args?: SelectSubset<T, EvolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evolution.
     * @param {EvolutionCreateArgs} args - Arguments to create a Evolution.
     * @example
     * // Create one Evolution
     * const Evolution = await prisma.evolution.create({
     *   data: {
     *     // ... data to create a Evolution
     *   }
     * })
     * 
     */
    create<T extends EvolutionCreateArgs>(args: SelectSubset<T, EvolutionCreateArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evolutions.
     * @param {EvolutionCreateManyArgs} args - Arguments to create many Evolutions.
     * @example
     * // Create many Evolutions
     * const evolution = await prisma.evolution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvolutionCreateManyArgs>(args?: SelectSubset<T, EvolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evolutions and returns the data saved in the database.
     * @param {EvolutionCreateManyAndReturnArgs} args - Arguments to create many Evolutions.
     * @example
     * // Create many Evolutions
     * const evolution = await prisma.evolution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evolutions and only return the `id`
     * const evolutionWithIdOnly = await prisma.evolution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvolutionCreateManyAndReturnArgs>(args?: SelectSubset<T, EvolutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evolution.
     * @param {EvolutionDeleteArgs} args - Arguments to delete one Evolution.
     * @example
     * // Delete one Evolution
     * const Evolution = await prisma.evolution.delete({
     *   where: {
     *     // ... filter to delete one Evolution
     *   }
     * })
     * 
     */
    delete<T extends EvolutionDeleteArgs>(args: SelectSubset<T, EvolutionDeleteArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evolution.
     * @param {EvolutionUpdateArgs} args - Arguments to update one Evolution.
     * @example
     * // Update one Evolution
     * const evolution = await prisma.evolution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvolutionUpdateArgs>(args: SelectSubset<T, EvolutionUpdateArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evolutions.
     * @param {EvolutionDeleteManyArgs} args - Arguments to filter Evolutions to delete.
     * @example
     * // Delete a few Evolutions
     * const { count } = await prisma.evolution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvolutionDeleteManyArgs>(args?: SelectSubset<T, EvolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evolutions
     * const evolution = await prisma.evolution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvolutionUpdateManyArgs>(args: SelectSubset<T, EvolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evolutions and returns the data updated in the database.
     * @param {EvolutionUpdateManyAndReturnArgs} args - Arguments to update many Evolutions.
     * @example
     * // Update many Evolutions
     * const evolution = await prisma.evolution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evolutions and only return the `id`
     * const evolutionWithIdOnly = await prisma.evolution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvolutionUpdateManyAndReturnArgs>(args: SelectSubset<T, EvolutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evolution.
     * @param {EvolutionUpsertArgs} args - Arguments to update or create a Evolution.
     * @example
     * // Update or create a Evolution
     * const evolution = await prisma.evolution.upsert({
     *   create: {
     *     // ... data to create a Evolution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evolution we want to update
     *   }
     * })
     */
    upsert<T extends EvolutionUpsertArgs>(args: SelectSubset<T, EvolutionUpsertArgs<ExtArgs>>): Prisma__EvolutionClient<$Result.GetResult<Prisma.$EvolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionCountArgs} args - Arguments to filter Evolutions to count.
     * @example
     * // Count the number of Evolutions
     * const count = await prisma.evolution.count({
     *   where: {
     *     // ... the filter for the Evolutions we want to count
     *   }
     * })
    **/
    count<T extends EvolutionCountArgs>(
      args?: Subset<T, EvolutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvolutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvolutionAggregateArgs>(args: Subset<T, EvolutionAggregateArgs>): Prisma.PrismaPromise<GetEvolutionAggregateType<T>>

    /**
     * Group by Evolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionGroupByArgs} args - Group by arguments.
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
      T extends EvolutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvolutionGroupByArgs['orderBy'] }
        : { orderBy?: EvolutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evolution model
   */
  readonly fields: EvolutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evolution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvolutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromPokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toPokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evolution model
   */
  interface EvolutionFieldRefs {
    readonly id: FieldRef<"Evolution", 'Int'>
    readonly fromPokemonId: FieldRef<"Evolution", 'Int'>
    readonly toPokemonId: FieldRef<"Evolution", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Evolution findUnique
   */
  export type EvolutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolution to fetch.
     */
    where: EvolutionWhereUniqueInput
  }

  /**
   * Evolution findUniqueOrThrow
   */
  export type EvolutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolution to fetch.
     */
    where: EvolutionWhereUniqueInput
  }

  /**
   * Evolution findFirst
   */
  export type EvolutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolution to fetch.
     */
    where?: EvolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolutions to fetch.
     */
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evolutions.
     */
    cursor?: EvolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evolutions.
     */
    distinct?: EvolutionScalarFieldEnum | EvolutionScalarFieldEnum[]
  }

  /**
   * Evolution findFirstOrThrow
   */
  export type EvolutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolution to fetch.
     */
    where?: EvolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolutions to fetch.
     */
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evolutions.
     */
    cursor?: EvolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evolutions.
     */
    distinct?: EvolutionScalarFieldEnum | EvolutionScalarFieldEnum[]
  }

  /**
   * Evolution findMany
   */
  export type EvolutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter, which Evolutions to fetch.
     */
    where?: EvolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evolutions to fetch.
     */
    orderBy?: EvolutionOrderByWithRelationInput | EvolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evolutions.
     */
    cursor?: EvolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evolutions.
     */
    skip?: number
    distinct?: EvolutionScalarFieldEnum | EvolutionScalarFieldEnum[]
  }

  /**
   * Evolution create
   */
  export type EvolutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Evolution.
     */
    data: XOR<EvolutionCreateInput, EvolutionUncheckedCreateInput>
  }

  /**
   * Evolution createMany
   */
  export type EvolutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evolutions.
     */
    data: EvolutionCreateManyInput | EvolutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evolution createManyAndReturn
   */
  export type EvolutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * The data used to create many Evolutions.
     */
    data: EvolutionCreateManyInput | EvolutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evolution update
   */
  export type EvolutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Evolution.
     */
    data: XOR<EvolutionUpdateInput, EvolutionUncheckedUpdateInput>
    /**
     * Choose, which Evolution to update.
     */
    where: EvolutionWhereUniqueInput
  }

  /**
   * Evolution updateMany
   */
  export type EvolutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evolutions.
     */
    data: XOR<EvolutionUpdateManyMutationInput, EvolutionUncheckedUpdateManyInput>
    /**
     * Filter which Evolutions to update
     */
    where?: EvolutionWhereInput
    /**
     * Limit how many Evolutions to update.
     */
    limit?: number
  }

  /**
   * Evolution updateManyAndReturn
   */
  export type EvolutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * The data used to update Evolutions.
     */
    data: XOR<EvolutionUpdateManyMutationInput, EvolutionUncheckedUpdateManyInput>
    /**
     * Filter which Evolutions to update
     */
    where?: EvolutionWhereInput
    /**
     * Limit how many Evolutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evolution upsert
   */
  export type EvolutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Evolution to update in case it exists.
     */
    where: EvolutionWhereUniqueInput
    /**
     * In case the Evolution found by the `where` argument doesn't exist, create a new Evolution with this data.
     */
    create: XOR<EvolutionCreateInput, EvolutionUncheckedCreateInput>
    /**
     * In case the Evolution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvolutionUpdateInput, EvolutionUncheckedUpdateInput>
  }

  /**
   * Evolution delete
   */
  export type EvolutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
    /**
     * Filter which Evolution to delete.
     */
    where: EvolutionWhereUniqueInput
  }

  /**
   * Evolution deleteMany
   */
  export type EvolutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evolutions to delete
     */
    where?: EvolutionWhereInput
    /**
     * Limit how many Evolutions to delete.
     */
    limit?: number
  }

  /**
   * Evolution without action
   */
  export type EvolutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evolution
     */
    select?: EvolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evolution
     */
    omit?: EvolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvolutionInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PokemonScalarFieldEnum: {
    id: 'id',
    number: 'number',
    name: 'name',
    imageUrl: 'imageUrl',
    classificationId: 'classificationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PokemonScalarFieldEnum = (typeof PokemonScalarFieldEnum)[keyof typeof PokemonScalarFieldEnum]


  export const ClassificationScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ClassificationScalarFieldEnum = (typeof ClassificationScalarFieldEnum)[keyof typeof ClassificationScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const ResistanceScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ResistanceScalarFieldEnum = (typeof ResistanceScalarFieldEnum)[keyof typeof ResistanceScalarFieldEnum]


  export const PokemonTypeScalarFieldEnum: {
    id: 'id',
    pokemonId: 'pokemonId',
    typeId: 'typeId'
  };

  export type PokemonTypeScalarFieldEnum = (typeof PokemonTypeScalarFieldEnum)[keyof typeof PokemonTypeScalarFieldEnum]


  export const PokemonResistanceScalarFieldEnum: {
    id: 'id',
    pokemonId: 'pokemonId',
    resistanceId: 'resistanceId'
  };

  export type PokemonResistanceScalarFieldEnum = (typeof PokemonResistanceScalarFieldEnum)[keyof typeof PokemonResistanceScalarFieldEnum]


  export const EvolutionScalarFieldEnum: {
    id: 'id',
    fromPokemonId: 'fromPokemonId',
    toPokemonId: 'toPokemonId'
  };

  export type EvolutionScalarFieldEnum = (typeof EvolutionScalarFieldEnum)[keyof typeof EvolutionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PokemonWhereInput = {
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    id?: IntFilter<"Pokemon"> | number
    number?: IntFilter<"Pokemon"> | number
    name?: StringFilter<"Pokemon"> | string
    imageUrl?: StringNullableFilter<"Pokemon"> | string | null
    classificationId?: IntFilter<"Pokemon"> | number
    createdAt?: DateTimeFilter<"Pokemon"> | Date | string
    updatedAt?: DateTimeFilter<"Pokemon"> | Date | string
    classification?: XOR<ClassificationScalarRelationFilter, ClassificationWhereInput>
    types?: PokemonTypeListRelationFilter
    resistances?: PokemonResistanceListRelationFilter
    evolutions?: EvolutionListRelationFilter
    preEvolutions?: EvolutionListRelationFilter
  }

  export type PokemonOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    classificationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classification?: ClassificationOrderByWithRelationInput
    types?: PokemonTypeOrderByRelationAggregateInput
    resistances?: PokemonResistanceOrderByRelationAggregateInput
    evolutions?: EvolutionOrderByRelationAggregateInput
    preEvolutions?: EvolutionOrderByRelationAggregateInput
  }

  export type PokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: number
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    name?: StringFilter<"Pokemon"> | string
    imageUrl?: StringNullableFilter<"Pokemon"> | string | null
    classificationId?: IntFilter<"Pokemon"> | number
    createdAt?: DateTimeFilter<"Pokemon"> | Date | string
    updatedAt?: DateTimeFilter<"Pokemon"> | Date | string
    classification?: XOR<ClassificationScalarRelationFilter, ClassificationWhereInput>
    types?: PokemonTypeListRelationFilter
    resistances?: PokemonResistanceListRelationFilter
    evolutions?: EvolutionListRelationFilter
    preEvolutions?: EvolutionListRelationFilter
  }, "id" | "number">

  export type PokemonOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    classificationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PokemonCountOrderByAggregateInput
    _avg?: PokemonAvgOrderByAggregateInput
    _max?: PokemonMaxOrderByAggregateInput
    _min?: PokemonMinOrderByAggregateInput
    _sum?: PokemonSumOrderByAggregateInput
  }

  export type PokemonScalarWhereWithAggregatesInput = {
    AND?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    OR?: PokemonScalarWhereWithAggregatesInput[]
    NOT?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pokemon"> | number
    number?: IntWithAggregatesFilter<"Pokemon"> | number
    name?: StringWithAggregatesFilter<"Pokemon"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Pokemon"> | string | null
    classificationId?: IntWithAggregatesFilter<"Pokemon"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pokemon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pokemon"> | Date | string
  }

  export type ClassificationWhereInput = {
    AND?: ClassificationWhereInput | ClassificationWhereInput[]
    OR?: ClassificationWhereInput[]
    NOT?: ClassificationWhereInput | ClassificationWhereInput[]
    id?: IntFilter<"Classification"> | number
    name?: StringFilter<"Classification"> | string
    pokemons?: PokemonListRelationFilter
  }

  export type ClassificationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pokemons?: PokemonOrderByRelationAggregateInput
  }

  export type ClassificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ClassificationWhereInput | ClassificationWhereInput[]
    OR?: ClassificationWhereInput[]
    NOT?: ClassificationWhereInput | ClassificationWhereInput[]
    pokemons?: PokemonListRelationFilter
  }, "id" | "name">

  export type ClassificationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ClassificationCountOrderByAggregateInput
    _avg?: ClassificationAvgOrderByAggregateInput
    _max?: ClassificationMaxOrderByAggregateInput
    _min?: ClassificationMinOrderByAggregateInput
    _sum?: ClassificationSumOrderByAggregateInput
  }

  export type ClassificationScalarWhereWithAggregatesInput = {
    AND?: ClassificationScalarWhereWithAggregatesInput | ClassificationScalarWhereWithAggregatesInput[]
    OR?: ClassificationScalarWhereWithAggregatesInput[]
    NOT?: ClassificationScalarWhereWithAggregatesInput | ClassificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Classification"> | number
    name?: StringWithAggregatesFilter<"Classification"> | string
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: IntFilter<"Type"> | number
    name?: StringFilter<"Type"> | string
    pokemons?: PokemonTypeListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pokemons?: PokemonTypeOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    pokemons?: PokemonTypeListRelationFilter
  }, "id" | "name">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _avg?: TypeAvgOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
    _sum?: TypeSumOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Type"> | number
    name?: StringWithAggregatesFilter<"Type"> | string
  }

  export type ResistanceWhereInput = {
    AND?: ResistanceWhereInput | ResistanceWhereInput[]
    OR?: ResistanceWhereInput[]
    NOT?: ResistanceWhereInput | ResistanceWhereInput[]
    id?: IntFilter<"Resistance"> | number
    name?: StringFilter<"Resistance"> | string
    pokemons?: PokemonResistanceListRelationFilter
  }

  export type ResistanceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pokemons?: PokemonResistanceOrderByRelationAggregateInput
  }

  export type ResistanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ResistanceWhereInput | ResistanceWhereInput[]
    OR?: ResistanceWhereInput[]
    NOT?: ResistanceWhereInput | ResistanceWhereInput[]
    pokemons?: PokemonResistanceListRelationFilter
  }, "id" | "name">

  export type ResistanceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ResistanceCountOrderByAggregateInput
    _avg?: ResistanceAvgOrderByAggregateInput
    _max?: ResistanceMaxOrderByAggregateInput
    _min?: ResistanceMinOrderByAggregateInput
    _sum?: ResistanceSumOrderByAggregateInput
  }

  export type ResistanceScalarWhereWithAggregatesInput = {
    AND?: ResistanceScalarWhereWithAggregatesInput | ResistanceScalarWhereWithAggregatesInput[]
    OR?: ResistanceScalarWhereWithAggregatesInput[]
    NOT?: ResistanceScalarWhereWithAggregatesInput | ResistanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resistance"> | number
    name?: StringWithAggregatesFilter<"Resistance"> | string
  }

  export type PokemonTypeWhereInput = {
    AND?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    OR?: PokemonTypeWhereInput[]
    NOT?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    id?: IntFilter<"PokemonType"> | number
    pokemonId?: IntFilter<"PokemonType"> | number
    typeId?: IntFilter<"PokemonType"> | number
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
  }

  export type PokemonTypeOrderByWithRelationInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    typeId?: SortOrder
    pokemon?: PokemonOrderByWithRelationInput
    type?: TypeOrderByWithRelationInput
  }

  export type PokemonTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pokemonId_typeId?: PokemonTypePokemonIdTypeIdCompoundUniqueInput
    AND?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    OR?: PokemonTypeWhereInput[]
    NOT?: PokemonTypeWhereInput | PokemonTypeWhereInput[]
    pokemonId?: IntFilter<"PokemonType"> | number
    typeId?: IntFilter<"PokemonType"> | number
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
  }, "id" | "pokemonId_typeId">

  export type PokemonTypeOrderByWithAggregationInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    typeId?: SortOrder
    _count?: PokemonTypeCountOrderByAggregateInput
    _avg?: PokemonTypeAvgOrderByAggregateInput
    _max?: PokemonTypeMaxOrderByAggregateInput
    _min?: PokemonTypeMinOrderByAggregateInput
    _sum?: PokemonTypeSumOrderByAggregateInput
  }

  export type PokemonTypeScalarWhereWithAggregatesInput = {
    AND?: PokemonTypeScalarWhereWithAggregatesInput | PokemonTypeScalarWhereWithAggregatesInput[]
    OR?: PokemonTypeScalarWhereWithAggregatesInput[]
    NOT?: PokemonTypeScalarWhereWithAggregatesInput | PokemonTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokemonType"> | number
    pokemonId?: IntWithAggregatesFilter<"PokemonType"> | number
    typeId?: IntWithAggregatesFilter<"PokemonType"> | number
  }

  export type PokemonResistanceWhereInput = {
    AND?: PokemonResistanceWhereInput | PokemonResistanceWhereInput[]
    OR?: PokemonResistanceWhereInput[]
    NOT?: PokemonResistanceWhereInput | PokemonResistanceWhereInput[]
    id?: IntFilter<"PokemonResistance"> | number
    pokemonId?: IntFilter<"PokemonResistance"> | number
    resistanceId?: IntFilter<"PokemonResistance"> | number
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    resistance?: XOR<ResistanceScalarRelationFilter, ResistanceWhereInput>
  }

  export type PokemonResistanceOrderByWithRelationInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    resistanceId?: SortOrder
    pokemon?: PokemonOrderByWithRelationInput
    resistance?: ResistanceOrderByWithRelationInput
  }

  export type PokemonResistanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pokemonId_resistanceId?: PokemonResistancePokemonIdResistanceIdCompoundUniqueInput
    AND?: PokemonResistanceWhereInput | PokemonResistanceWhereInput[]
    OR?: PokemonResistanceWhereInput[]
    NOT?: PokemonResistanceWhereInput | PokemonResistanceWhereInput[]
    pokemonId?: IntFilter<"PokemonResistance"> | number
    resistanceId?: IntFilter<"PokemonResistance"> | number
    pokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    resistance?: XOR<ResistanceScalarRelationFilter, ResistanceWhereInput>
  }, "id" | "pokemonId_resistanceId">

  export type PokemonResistanceOrderByWithAggregationInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    resistanceId?: SortOrder
    _count?: PokemonResistanceCountOrderByAggregateInput
    _avg?: PokemonResistanceAvgOrderByAggregateInput
    _max?: PokemonResistanceMaxOrderByAggregateInput
    _min?: PokemonResistanceMinOrderByAggregateInput
    _sum?: PokemonResistanceSumOrderByAggregateInput
  }

  export type PokemonResistanceScalarWhereWithAggregatesInput = {
    AND?: PokemonResistanceScalarWhereWithAggregatesInput | PokemonResistanceScalarWhereWithAggregatesInput[]
    OR?: PokemonResistanceScalarWhereWithAggregatesInput[]
    NOT?: PokemonResistanceScalarWhereWithAggregatesInput | PokemonResistanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokemonResistance"> | number
    pokemonId?: IntWithAggregatesFilter<"PokemonResistance"> | number
    resistanceId?: IntWithAggregatesFilter<"PokemonResistance"> | number
  }

  export type EvolutionWhereInput = {
    AND?: EvolutionWhereInput | EvolutionWhereInput[]
    OR?: EvolutionWhereInput[]
    NOT?: EvolutionWhereInput | EvolutionWhereInput[]
    id?: IntFilter<"Evolution"> | number
    fromPokemonId?: IntFilter<"Evolution"> | number
    toPokemonId?: IntFilter<"Evolution"> | number
    fromPokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    toPokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }

  export type EvolutionOrderByWithRelationInput = {
    id?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
    fromPokemon?: PokemonOrderByWithRelationInput
    toPokemon?: PokemonOrderByWithRelationInput
  }

  export type EvolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fromPokemonId_toPokemonId?: EvolutionFromPokemonIdToPokemonIdCompoundUniqueInput
    AND?: EvolutionWhereInput | EvolutionWhereInput[]
    OR?: EvolutionWhereInput[]
    NOT?: EvolutionWhereInput | EvolutionWhereInput[]
    fromPokemonId?: IntFilter<"Evolution"> | number
    toPokemonId?: IntFilter<"Evolution"> | number
    fromPokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    toPokemon?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
  }, "id" | "fromPokemonId_toPokemonId">

  export type EvolutionOrderByWithAggregationInput = {
    id?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
    _count?: EvolutionCountOrderByAggregateInput
    _avg?: EvolutionAvgOrderByAggregateInput
    _max?: EvolutionMaxOrderByAggregateInput
    _min?: EvolutionMinOrderByAggregateInput
    _sum?: EvolutionSumOrderByAggregateInput
  }

  export type EvolutionScalarWhereWithAggregatesInput = {
    AND?: EvolutionScalarWhereWithAggregatesInput | EvolutionScalarWhereWithAggregatesInput[]
    OR?: EvolutionScalarWhereWithAggregatesInput[]
    NOT?: EvolutionScalarWhereWithAggregatesInput | EvolutionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evolution"> | number
    fromPokemonId?: IntWithAggregatesFilter<"Evolution"> | number
    toPokemonId?: IntWithAggregatesFilter<"Evolution"> | number
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonCreateInput = {
    number: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification: ClassificationCreateNestedOneWithoutPokemonsInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    resistances?: PokemonResistanceCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionCreateNestedManyWithoutFromPokemonInput
    preEvolutions?: EvolutionCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonUncheckedCreateInput = {
    id?: number
    number: number
    name: string
    imageUrl?: string | null
    classificationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    resistances?: PokemonResistanceUncheckedCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionUncheckedCreateNestedManyWithoutFromPokemonInput
    preEvolutions?: EvolutionUncheckedCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: ClassificationUpdateOneRequiredWithoutPokemonsNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    resistances?: PokemonResistanceUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUpdateManyWithoutFromPokemonNestedInput
    preEvolutions?: EvolutionUpdateManyWithoutToPokemonNestedInput
  }

  export type PokemonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    classificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    resistances?: PokemonResistanceUncheckedUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUncheckedUpdateManyWithoutFromPokemonNestedInput
    preEvolutions?: EvolutionUncheckedUpdateManyWithoutToPokemonNestedInput
  }

  export type PokemonCreateManyInput = {
    id?: number
    number: number
    name: string
    imageUrl?: string | null
    classificationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokemonUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    classificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationCreateInput = {
    name: string
    pokemons?: PokemonCreateNestedManyWithoutClassificationInput
  }

  export type ClassificationUncheckedCreateInput = {
    id?: number
    name: string
    pokemons?: PokemonUncheckedCreateNestedManyWithoutClassificationInput
  }

  export type ClassificationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pokemons?: PokemonUpdateManyWithoutClassificationNestedInput
  }

  export type ClassificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pokemons?: PokemonUncheckedUpdateManyWithoutClassificationNestedInput
  }

  export type ClassificationCreateManyInput = {
    id?: number
    name: string
  }

  export type ClassificationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeCreateInput = {
    name: string
    pokemons?: PokemonTypeCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id?: number
    name: string
    pokemons?: PokemonTypeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pokemons?: PokemonTypeUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pokemons?: PokemonTypeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    id?: number
    name: string
  }

  export type TypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResistanceCreateInput = {
    name: string
    pokemons?: PokemonResistanceCreateNestedManyWithoutResistanceInput
  }

  export type ResistanceUncheckedCreateInput = {
    id?: number
    name: string
    pokemons?: PokemonResistanceUncheckedCreateNestedManyWithoutResistanceInput
  }

  export type ResistanceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pokemons?: PokemonResistanceUpdateManyWithoutResistanceNestedInput
  }

  export type ResistanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pokemons?: PokemonResistanceUncheckedUpdateManyWithoutResistanceNestedInput
  }

  export type ResistanceCreateManyInput = {
    id?: number
    name: string
  }

  export type ResistanceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResistanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonTypeCreateInput = {
    pokemon: PokemonCreateNestedOneWithoutTypesInput
    type: TypeCreateNestedOneWithoutPokemonsInput
  }

  export type PokemonTypeUncheckedCreateInput = {
    id?: number
    pokemonId: number
    typeId: number
  }

  export type PokemonTypeUpdateInput = {
    pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput
    type?: TypeUpdateOneRequiredWithoutPokemonsNestedInput
  }

  export type PokemonTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonTypeCreateManyInput = {
    id?: number
    pokemonId: number
    typeId: number
  }

  export type PokemonTypeUpdateManyMutationInput = {

  }

  export type PokemonTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonResistanceCreateInput = {
    pokemon: PokemonCreateNestedOneWithoutResistancesInput
    resistance: ResistanceCreateNestedOneWithoutPokemonsInput
  }

  export type PokemonResistanceUncheckedCreateInput = {
    id?: number
    pokemonId: number
    resistanceId: number
  }

  export type PokemonResistanceUpdateInput = {
    pokemon?: PokemonUpdateOneRequiredWithoutResistancesNestedInput
    resistance?: ResistanceUpdateOneRequiredWithoutPokemonsNestedInput
  }

  export type PokemonResistanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    resistanceId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonResistanceCreateManyInput = {
    id?: number
    pokemonId: number
    resistanceId: number
  }

  export type PokemonResistanceUpdateManyMutationInput = {

  }

  export type PokemonResistanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
    resistanceId?: IntFieldUpdateOperationsInput | number
  }

  export type EvolutionCreateInput = {
    fromPokemon: PokemonCreateNestedOneWithoutEvolutionsInput
    toPokemon: PokemonCreateNestedOneWithoutPreEvolutionsInput
  }

  export type EvolutionUncheckedCreateInput = {
    id?: number
    fromPokemonId: number
    toPokemonId: number
  }

  export type EvolutionUpdateInput = {
    fromPokemon?: PokemonUpdateOneRequiredWithoutEvolutionsNestedInput
    toPokemon?: PokemonUpdateOneRequiredWithoutPreEvolutionsNestedInput
  }

  export type EvolutionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromPokemonId?: IntFieldUpdateOperationsInput | number
    toPokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type EvolutionCreateManyInput = {
    id?: number
    fromPokemonId: number
    toPokemonId: number
  }

  export type EvolutionUpdateManyMutationInput = {

  }

  export type EvolutionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromPokemonId?: IntFieldUpdateOperationsInput | number
    toPokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClassificationScalarRelationFilter = {
    is?: ClassificationWhereInput
    isNot?: ClassificationWhereInput
  }

  export type PokemonTypeListRelationFilter = {
    every?: PokemonTypeWhereInput
    some?: PokemonTypeWhereInput
    none?: PokemonTypeWhereInput
  }

  export type PokemonResistanceListRelationFilter = {
    every?: PokemonResistanceWhereInput
    some?: PokemonResistanceWhereInput
    none?: PokemonResistanceWhereInput
  }

  export type EvolutionListRelationFilter = {
    every?: EvolutionWhereInput
    some?: EvolutionWhereInput
    none?: EvolutionWhereInput
  }

  export type PokemonTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokemonResistanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvolutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokemonCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    classificationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokemonAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    classificationId?: SortOrder
  }

  export type PokemonMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    classificationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokemonMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    classificationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokemonSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    classificationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type PokemonListRelationFilter = {
    every?: PokemonWhereInput
    some?: PokemonWhereInput
    none?: PokemonWhereInput
  }

  export type PokemonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassificationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClassificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassificationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClassificationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ClassificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResistanceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ResistanceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResistanceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ResistanceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ResistanceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PokemonScalarRelationFilter = {
    is?: PokemonWhereInput
    isNot?: PokemonWhereInput
  }

  export type TypeScalarRelationFilter = {
    is?: TypeWhereInput
    isNot?: TypeWhereInput
  }

  export type PokemonTypePokemonIdTypeIdCompoundUniqueInput = {
    pokemonId: number
    typeId: number
  }

  export type PokemonTypeCountOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type PokemonTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type PokemonTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type PokemonTypeMinOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type PokemonTypeSumOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    typeId?: SortOrder
  }

  export type ResistanceScalarRelationFilter = {
    is?: ResistanceWhereInput
    isNot?: ResistanceWhereInput
  }

  export type PokemonResistancePokemonIdResistanceIdCompoundUniqueInput = {
    pokemonId: number
    resistanceId: number
  }

  export type PokemonResistanceCountOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    resistanceId?: SortOrder
  }

  export type PokemonResistanceAvgOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    resistanceId?: SortOrder
  }

  export type PokemonResistanceMaxOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    resistanceId?: SortOrder
  }

  export type PokemonResistanceMinOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    resistanceId?: SortOrder
  }

  export type PokemonResistanceSumOrderByAggregateInput = {
    id?: SortOrder
    pokemonId?: SortOrder
    resistanceId?: SortOrder
  }

  export type EvolutionFromPokemonIdToPokemonIdCompoundUniqueInput = {
    fromPokemonId: number
    toPokemonId: number
  }

  export type EvolutionCountOrderByAggregateInput = {
    id?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
  }

  export type EvolutionAvgOrderByAggregateInput = {
    id?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
  }

  export type EvolutionMaxOrderByAggregateInput = {
    id?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
  }

  export type EvolutionMinOrderByAggregateInput = {
    id?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
  }

  export type EvolutionSumOrderByAggregateInput = {
    id?: SortOrder
    fromPokemonId?: SortOrder
    toPokemonId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClassificationCreateNestedOneWithoutPokemonsInput = {
    create?: XOR<ClassificationCreateWithoutPokemonsInput, ClassificationUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: ClassificationCreateOrConnectWithoutPokemonsInput
    connect?: ClassificationWhereUniqueInput
  }

  export type PokemonTypeCreateNestedManyWithoutPokemonInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type PokemonResistanceCreateNestedManyWithoutPokemonInput = {
    create?: XOR<PokemonResistanceCreateWithoutPokemonInput, PokemonResistanceUncheckedCreateWithoutPokemonInput> | PokemonResistanceCreateWithoutPokemonInput[] | PokemonResistanceUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonResistanceCreateOrConnectWithoutPokemonInput | PokemonResistanceCreateOrConnectWithoutPokemonInput[]
    createMany?: PokemonResistanceCreateManyPokemonInputEnvelope
    connect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
  }

  export type EvolutionCreateNestedManyWithoutFromPokemonInput = {
    create?: XOR<EvolutionCreateWithoutFromPokemonInput, EvolutionUncheckedCreateWithoutFromPokemonInput> | EvolutionCreateWithoutFromPokemonInput[] | EvolutionUncheckedCreateWithoutFromPokemonInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutFromPokemonInput | EvolutionCreateOrConnectWithoutFromPokemonInput[]
    createMany?: EvolutionCreateManyFromPokemonInputEnvelope
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
  }

  export type EvolutionCreateNestedManyWithoutToPokemonInput = {
    create?: XOR<EvolutionCreateWithoutToPokemonInput, EvolutionUncheckedCreateWithoutToPokemonInput> | EvolutionCreateWithoutToPokemonInput[] | EvolutionUncheckedCreateWithoutToPokemonInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutToPokemonInput | EvolutionCreateOrConnectWithoutToPokemonInput[]
    createMany?: EvolutionCreateManyToPokemonInputEnvelope
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
  }

  export type PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type PokemonResistanceUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<PokemonResistanceCreateWithoutPokemonInput, PokemonResistanceUncheckedCreateWithoutPokemonInput> | PokemonResistanceCreateWithoutPokemonInput[] | PokemonResistanceUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonResistanceCreateOrConnectWithoutPokemonInput | PokemonResistanceCreateOrConnectWithoutPokemonInput[]
    createMany?: PokemonResistanceCreateManyPokemonInputEnvelope
    connect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
  }

  export type EvolutionUncheckedCreateNestedManyWithoutFromPokemonInput = {
    create?: XOR<EvolutionCreateWithoutFromPokemonInput, EvolutionUncheckedCreateWithoutFromPokemonInput> | EvolutionCreateWithoutFromPokemonInput[] | EvolutionUncheckedCreateWithoutFromPokemonInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutFromPokemonInput | EvolutionCreateOrConnectWithoutFromPokemonInput[]
    createMany?: EvolutionCreateManyFromPokemonInputEnvelope
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
  }

  export type EvolutionUncheckedCreateNestedManyWithoutToPokemonInput = {
    create?: XOR<EvolutionCreateWithoutToPokemonInput, EvolutionUncheckedCreateWithoutToPokemonInput> | EvolutionCreateWithoutToPokemonInput[] | EvolutionUncheckedCreateWithoutToPokemonInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutToPokemonInput | EvolutionCreateOrConnectWithoutToPokemonInput[]
    createMany?: EvolutionCreateManyToPokemonInputEnvelope
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassificationUpdateOneRequiredWithoutPokemonsNestedInput = {
    create?: XOR<ClassificationCreateWithoutPokemonsInput, ClassificationUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: ClassificationCreateOrConnectWithoutPokemonsInput
    upsert?: ClassificationUpsertWithoutPokemonsInput
    connect?: ClassificationWhereUniqueInput
    update?: XOR<XOR<ClassificationUpdateToOneWithWhereWithoutPokemonsInput, ClassificationUpdateWithoutPokemonsInput>, ClassificationUncheckedUpdateWithoutPokemonsInput>
  }

  export type PokemonTypeUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput | PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput | PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutPokemonInput | PokemonTypeUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type PokemonResistanceUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<PokemonResistanceCreateWithoutPokemonInput, PokemonResistanceUncheckedCreateWithoutPokemonInput> | PokemonResistanceCreateWithoutPokemonInput[] | PokemonResistanceUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonResistanceCreateOrConnectWithoutPokemonInput | PokemonResistanceCreateOrConnectWithoutPokemonInput[]
    upsert?: PokemonResistanceUpsertWithWhereUniqueWithoutPokemonInput | PokemonResistanceUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: PokemonResistanceCreateManyPokemonInputEnvelope
    set?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    disconnect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    delete?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    connect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    update?: PokemonResistanceUpdateWithWhereUniqueWithoutPokemonInput | PokemonResistanceUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: PokemonResistanceUpdateManyWithWhereWithoutPokemonInput | PokemonResistanceUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: PokemonResistanceScalarWhereInput | PokemonResistanceScalarWhereInput[]
  }

  export type EvolutionUpdateManyWithoutFromPokemonNestedInput = {
    create?: XOR<EvolutionCreateWithoutFromPokemonInput, EvolutionUncheckedCreateWithoutFromPokemonInput> | EvolutionCreateWithoutFromPokemonInput[] | EvolutionUncheckedCreateWithoutFromPokemonInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutFromPokemonInput | EvolutionCreateOrConnectWithoutFromPokemonInput[]
    upsert?: EvolutionUpsertWithWhereUniqueWithoutFromPokemonInput | EvolutionUpsertWithWhereUniqueWithoutFromPokemonInput[]
    createMany?: EvolutionCreateManyFromPokemonInputEnvelope
    set?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    disconnect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    delete?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    update?: EvolutionUpdateWithWhereUniqueWithoutFromPokemonInput | EvolutionUpdateWithWhereUniqueWithoutFromPokemonInput[]
    updateMany?: EvolutionUpdateManyWithWhereWithoutFromPokemonInput | EvolutionUpdateManyWithWhereWithoutFromPokemonInput[]
    deleteMany?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
  }

  export type EvolutionUpdateManyWithoutToPokemonNestedInput = {
    create?: XOR<EvolutionCreateWithoutToPokemonInput, EvolutionUncheckedCreateWithoutToPokemonInput> | EvolutionCreateWithoutToPokemonInput[] | EvolutionUncheckedCreateWithoutToPokemonInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutToPokemonInput | EvolutionCreateOrConnectWithoutToPokemonInput[]
    upsert?: EvolutionUpsertWithWhereUniqueWithoutToPokemonInput | EvolutionUpsertWithWhereUniqueWithoutToPokemonInput[]
    createMany?: EvolutionCreateManyToPokemonInputEnvelope
    set?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    disconnect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    delete?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    update?: EvolutionUpdateWithWhereUniqueWithoutToPokemonInput | EvolutionUpdateWithWhereUniqueWithoutToPokemonInput[]
    updateMany?: EvolutionUpdateManyWithWhereWithoutToPokemonInput | EvolutionUpdateManyWithWhereWithoutToPokemonInput[]
    deleteMany?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
  }

  export type PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput> | PokemonTypeCreateWithoutPokemonInput[] | PokemonTypeUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutPokemonInput | PokemonTypeCreateOrConnectWithoutPokemonInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput | PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: PokemonTypeCreateManyPokemonInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput | PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutPokemonInput | PokemonTypeUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type PokemonResistanceUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<PokemonResistanceCreateWithoutPokemonInput, PokemonResistanceUncheckedCreateWithoutPokemonInput> | PokemonResistanceCreateWithoutPokemonInput[] | PokemonResistanceUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: PokemonResistanceCreateOrConnectWithoutPokemonInput | PokemonResistanceCreateOrConnectWithoutPokemonInput[]
    upsert?: PokemonResistanceUpsertWithWhereUniqueWithoutPokemonInput | PokemonResistanceUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: PokemonResistanceCreateManyPokemonInputEnvelope
    set?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    disconnect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    delete?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    connect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    update?: PokemonResistanceUpdateWithWhereUniqueWithoutPokemonInput | PokemonResistanceUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: PokemonResistanceUpdateManyWithWhereWithoutPokemonInput | PokemonResistanceUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: PokemonResistanceScalarWhereInput | PokemonResistanceScalarWhereInput[]
  }

  export type EvolutionUncheckedUpdateManyWithoutFromPokemonNestedInput = {
    create?: XOR<EvolutionCreateWithoutFromPokemonInput, EvolutionUncheckedCreateWithoutFromPokemonInput> | EvolutionCreateWithoutFromPokemonInput[] | EvolutionUncheckedCreateWithoutFromPokemonInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutFromPokemonInput | EvolutionCreateOrConnectWithoutFromPokemonInput[]
    upsert?: EvolutionUpsertWithWhereUniqueWithoutFromPokemonInput | EvolutionUpsertWithWhereUniqueWithoutFromPokemonInput[]
    createMany?: EvolutionCreateManyFromPokemonInputEnvelope
    set?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    disconnect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    delete?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    update?: EvolutionUpdateWithWhereUniqueWithoutFromPokemonInput | EvolutionUpdateWithWhereUniqueWithoutFromPokemonInput[]
    updateMany?: EvolutionUpdateManyWithWhereWithoutFromPokemonInput | EvolutionUpdateManyWithWhereWithoutFromPokemonInput[]
    deleteMany?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
  }

  export type EvolutionUncheckedUpdateManyWithoutToPokemonNestedInput = {
    create?: XOR<EvolutionCreateWithoutToPokemonInput, EvolutionUncheckedCreateWithoutToPokemonInput> | EvolutionCreateWithoutToPokemonInput[] | EvolutionUncheckedCreateWithoutToPokemonInput[]
    connectOrCreate?: EvolutionCreateOrConnectWithoutToPokemonInput | EvolutionCreateOrConnectWithoutToPokemonInput[]
    upsert?: EvolutionUpsertWithWhereUniqueWithoutToPokemonInput | EvolutionUpsertWithWhereUniqueWithoutToPokemonInput[]
    createMany?: EvolutionCreateManyToPokemonInputEnvelope
    set?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    disconnect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    delete?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    connect?: EvolutionWhereUniqueInput | EvolutionWhereUniqueInput[]
    update?: EvolutionUpdateWithWhereUniqueWithoutToPokemonInput | EvolutionUpdateWithWhereUniqueWithoutToPokemonInput[]
    updateMany?: EvolutionUpdateManyWithWhereWithoutToPokemonInput | EvolutionUpdateManyWithWhereWithoutToPokemonInput[]
    deleteMany?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
  }

  export type PokemonCreateNestedManyWithoutClassificationInput = {
    create?: XOR<PokemonCreateWithoutClassificationInput, PokemonUncheckedCreateWithoutClassificationInput> | PokemonCreateWithoutClassificationInput[] | PokemonUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: PokemonCreateOrConnectWithoutClassificationInput | PokemonCreateOrConnectWithoutClassificationInput[]
    createMany?: PokemonCreateManyClassificationInputEnvelope
    connect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
  }

  export type PokemonUncheckedCreateNestedManyWithoutClassificationInput = {
    create?: XOR<PokemonCreateWithoutClassificationInput, PokemonUncheckedCreateWithoutClassificationInput> | PokemonCreateWithoutClassificationInput[] | PokemonUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: PokemonCreateOrConnectWithoutClassificationInput | PokemonCreateOrConnectWithoutClassificationInput[]
    createMany?: PokemonCreateManyClassificationInputEnvelope
    connect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
  }

  export type PokemonUpdateManyWithoutClassificationNestedInput = {
    create?: XOR<PokemonCreateWithoutClassificationInput, PokemonUncheckedCreateWithoutClassificationInput> | PokemonCreateWithoutClassificationInput[] | PokemonUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: PokemonCreateOrConnectWithoutClassificationInput | PokemonCreateOrConnectWithoutClassificationInput[]
    upsert?: PokemonUpsertWithWhereUniqueWithoutClassificationInput | PokemonUpsertWithWhereUniqueWithoutClassificationInput[]
    createMany?: PokemonCreateManyClassificationInputEnvelope
    set?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    disconnect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    delete?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    connect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    update?: PokemonUpdateWithWhereUniqueWithoutClassificationInput | PokemonUpdateWithWhereUniqueWithoutClassificationInput[]
    updateMany?: PokemonUpdateManyWithWhereWithoutClassificationInput | PokemonUpdateManyWithWhereWithoutClassificationInput[]
    deleteMany?: PokemonScalarWhereInput | PokemonScalarWhereInput[]
  }

  export type PokemonUncheckedUpdateManyWithoutClassificationNestedInput = {
    create?: XOR<PokemonCreateWithoutClassificationInput, PokemonUncheckedCreateWithoutClassificationInput> | PokemonCreateWithoutClassificationInput[] | PokemonUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: PokemonCreateOrConnectWithoutClassificationInput | PokemonCreateOrConnectWithoutClassificationInput[]
    upsert?: PokemonUpsertWithWhereUniqueWithoutClassificationInput | PokemonUpsertWithWhereUniqueWithoutClassificationInput[]
    createMany?: PokemonCreateManyClassificationInputEnvelope
    set?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    disconnect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    delete?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    connect?: PokemonWhereUniqueInput | PokemonWhereUniqueInput[]
    update?: PokemonUpdateWithWhereUniqueWithoutClassificationInput | PokemonUpdateWithWhereUniqueWithoutClassificationInput[]
    updateMany?: PokemonUpdateManyWithWhereWithoutClassificationInput | PokemonUpdateManyWithWhereWithoutClassificationInput[]
    deleteMany?: PokemonScalarWhereInput | PokemonScalarWhereInput[]
  }

  export type PokemonTypeCreateNestedManyWithoutTypeInput = {
    create?: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput> | PokemonTypeCreateWithoutTypeInput[] | PokemonTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput | PokemonTypeCreateOrConnectWithoutTypeInput[]
    createMany?: PokemonTypeCreateManyTypeInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type PokemonTypeUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput> | PokemonTypeCreateWithoutTypeInput[] | PokemonTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput | PokemonTypeCreateOrConnectWithoutTypeInput[]
    createMany?: PokemonTypeCreateManyTypeInputEnvelope
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
  }

  export type PokemonTypeUpdateManyWithoutTypeNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput> | PokemonTypeCreateWithoutTypeInput[] | PokemonTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput | PokemonTypeCreateOrConnectWithoutTypeInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutTypeInput | PokemonTypeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: PokemonTypeCreateManyTypeInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutTypeInput | PokemonTypeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutTypeInput | PokemonTypeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type PokemonTypeUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput> | PokemonTypeCreateWithoutTypeInput[] | PokemonTypeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: PokemonTypeCreateOrConnectWithoutTypeInput | PokemonTypeCreateOrConnectWithoutTypeInput[]
    upsert?: PokemonTypeUpsertWithWhereUniqueWithoutTypeInput | PokemonTypeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: PokemonTypeCreateManyTypeInputEnvelope
    set?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    disconnect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    delete?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    connect?: PokemonTypeWhereUniqueInput | PokemonTypeWhereUniqueInput[]
    update?: PokemonTypeUpdateWithWhereUniqueWithoutTypeInput | PokemonTypeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: PokemonTypeUpdateManyWithWhereWithoutTypeInput | PokemonTypeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
  }

  export type PokemonResistanceCreateNestedManyWithoutResistanceInput = {
    create?: XOR<PokemonResistanceCreateWithoutResistanceInput, PokemonResistanceUncheckedCreateWithoutResistanceInput> | PokemonResistanceCreateWithoutResistanceInput[] | PokemonResistanceUncheckedCreateWithoutResistanceInput[]
    connectOrCreate?: PokemonResistanceCreateOrConnectWithoutResistanceInput | PokemonResistanceCreateOrConnectWithoutResistanceInput[]
    createMany?: PokemonResistanceCreateManyResistanceInputEnvelope
    connect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
  }

  export type PokemonResistanceUncheckedCreateNestedManyWithoutResistanceInput = {
    create?: XOR<PokemonResistanceCreateWithoutResistanceInput, PokemonResistanceUncheckedCreateWithoutResistanceInput> | PokemonResistanceCreateWithoutResistanceInput[] | PokemonResistanceUncheckedCreateWithoutResistanceInput[]
    connectOrCreate?: PokemonResistanceCreateOrConnectWithoutResistanceInput | PokemonResistanceCreateOrConnectWithoutResistanceInput[]
    createMany?: PokemonResistanceCreateManyResistanceInputEnvelope
    connect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
  }

  export type PokemonResistanceUpdateManyWithoutResistanceNestedInput = {
    create?: XOR<PokemonResistanceCreateWithoutResistanceInput, PokemonResistanceUncheckedCreateWithoutResistanceInput> | PokemonResistanceCreateWithoutResistanceInput[] | PokemonResistanceUncheckedCreateWithoutResistanceInput[]
    connectOrCreate?: PokemonResistanceCreateOrConnectWithoutResistanceInput | PokemonResistanceCreateOrConnectWithoutResistanceInput[]
    upsert?: PokemonResistanceUpsertWithWhereUniqueWithoutResistanceInput | PokemonResistanceUpsertWithWhereUniqueWithoutResistanceInput[]
    createMany?: PokemonResistanceCreateManyResistanceInputEnvelope
    set?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    disconnect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    delete?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    connect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    update?: PokemonResistanceUpdateWithWhereUniqueWithoutResistanceInput | PokemonResistanceUpdateWithWhereUniqueWithoutResistanceInput[]
    updateMany?: PokemonResistanceUpdateManyWithWhereWithoutResistanceInput | PokemonResistanceUpdateManyWithWhereWithoutResistanceInput[]
    deleteMany?: PokemonResistanceScalarWhereInput | PokemonResistanceScalarWhereInput[]
  }

  export type PokemonResistanceUncheckedUpdateManyWithoutResistanceNestedInput = {
    create?: XOR<PokemonResistanceCreateWithoutResistanceInput, PokemonResistanceUncheckedCreateWithoutResistanceInput> | PokemonResistanceCreateWithoutResistanceInput[] | PokemonResistanceUncheckedCreateWithoutResistanceInput[]
    connectOrCreate?: PokemonResistanceCreateOrConnectWithoutResistanceInput | PokemonResistanceCreateOrConnectWithoutResistanceInput[]
    upsert?: PokemonResistanceUpsertWithWhereUniqueWithoutResistanceInput | PokemonResistanceUpsertWithWhereUniqueWithoutResistanceInput[]
    createMany?: PokemonResistanceCreateManyResistanceInputEnvelope
    set?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    disconnect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    delete?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    connect?: PokemonResistanceWhereUniqueInput | PokemonResistanceWhereUniqueInput[]
    update?: PokemonResistanceUpdateWithWhereUniqueWithoutResistanceInput | PokemonResistanceUpdateWithWhereUniqueWithoutResistanceInput[]
    updateMany?: PokemonResistanceUpdateManyWithWhereWithoutResistanceInput | PokemonResistanceUpdateManyWithWhereWithoutResistanceInput[]
    deleteMany?: PokemonResistanceScalarWhereInput | PokemonResistanceScalarWhereInput[]
  }

  export type PokemonCreateNestedOneWithoutTypesInput = {
    create?: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutTypesInput
    connect?: PokemonWhereUniqueInput
  }

  export type TypeCreateNestedOneWithoutPokemonsInput = {
    create?: XOR<TypeCreateWithoutPokemonsInput, TypeUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: TypeCreateOrConnectWithoutPokemonsInput
    connect?: TypeWhereUniqueInput
  }

  export type PokemonUpdateOneRequiredWithoutTypesNestedInput = {
    create?: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutTypesInput
    upsert?: PokemonUpsertWithoutTypesInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutTypesInput, PokemonUpdateWithoutTypesInput>, PokemonUncheckedUpdateWithoutTypesInput>
  }

  export type TypeUpdateOneRequiredWithoutPokemonsNestedInput = {
    create?: XOR<TypeCreateWithoutPokemonsInput, TypeUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: TypeCreateOrConnectWithoutPokemonsInput
    upsert?: TypeUpsertWithoutPokemonsInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutPokemonsInput, TypeUpdateWithoutPokemonsInput>, TypeUncheckedUpdateWithoutPokemonsInput>
  }

  export type PokemonCreateNestedOneWithoutResistancesInput = {
    create?: XOR<PokemonCreateWithoutResistancesInput, PokemonUncheckedCreateWithoutResistancesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutResistancesInput
    connect?: PokemonWhereUniqueInput
  }

  export type ResistanceCreateNestedOneWithoutPokemonsInput = {
    create?: XOR<ResistanceCreateWithoutPokemonsInput, ResistanceUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: ResistanceCreateOrConnectWithoutPokemonsInput
    connect?: ResistanceWhereUniqueInput
  }

  export type PokemonUpdateOneRequiredWithoutResistancesNestedInput = {
    create?: XOR<PokemonCreateWithoutResistancesInput, PokemonUncheckedCreateWithoutResistancesInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutResistancesInput
    upsert?: PokemonUpsertWithoutResistancesInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutResistancesInput, PokemonUpdateWithoutResistancesInput>, PokemonUncheckedUpdateWithoutResistancesInput>
  }

  export type ResistanceUpdateOneRequiredWithoutPokemonsNestedInput = {
    create?: XOR<ResistanceCreateWithoutPokemonsInput, ResistanceUncheckedCreateWithoutPokemonsInput>
    connectOrCreate?: ResistanceCreateOrConnectWithoutPokemonsInput
    upsert?: ResistanceUpsertWithoutPokemonsInput
    connect?: ResistanceWhereUniqueInput
    update?: XOR<XOR<ResistanceUpdateToOneWithWhereWithoutPokemonsInput, ResistanceUpdateWithoutPokemonsInput>, ResistanceUncheckedUpdateWithoutPokemonsInput>
  }

  export type PokemonCreateNestedOneWithoutEvolutionsInput = {
    create?: XOR<PokemonCreateWithoutEvolutionsInput, PokemonUncheckedCreateWithoutEvolutionsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutEvolutionsInput
    connect?: PokemonWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutPreEvolutionsInput = {
    create?: XOR<PokemonCreateWithoutPreEvolutionsInput, PokemonUncheckedCreateWithoutPreEvolutionsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutPreEvolutionsInput
    connect?: PokemonWhereUniqueInput
  }

  export type PokemonUpdateOneRequiredWithoutEvolutionsNestedInput = {
    create?: XOR<PokemonCreateWithoutEvolutionsInput, PokemonUncheckedCreateWithoutEvolutionsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutEvolutionsInput
    upsert?: PokemonUpsertWithoutEvolutionsInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutEvolutionsInput, PokemonUpdateWithoutEvolutionsInput>, PokemonUncheckedUpdateWithoutEvolutionsInput>
  }

  export type PokemonUpdateOneRequiredWithoutPreEvolutionsNestedInput = {
    create?: XOR<PokemonCreateWithoutPreEvolutionsInput, PokemonUncheckedCreateWithoutPreEvolutionsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutPreEvolutionsInput
    upsert?: PokemonUpsertWithoutPreEvolutionsInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutPreEvolutionsInput, PokemonUpdateWithoutPreEvolutionsInput>, PokemonUncheckedUpdateWithoutPreEvolutionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ClassificationCreateWithoutPokemonsInput = {
    name: string
  }

  export type ClassificationUncheckedCreateWithoutPokemonsInput = {
    id?: number
    name: string
  }

  export type ClassificationCreateOrConnectWithoutPokemonsInput = {
    where: ClassificationWhereUniqueInput
    create: XOR<ClassificationCreateWithoutPokemonsInput, ClassificationUncheckedCreateWithoutPokemonsInput>
  }

  export type PokemonTypeCreateWithoutPokemonInput = {
    type: TypeCreateNestedOneWithoutPokemonsInput
  }

  export type PokemonTypeUncheckedCreateWithoutPokemonInput = {
    id?: number
    typeId: number
  }

  export type PokemonTypeCreateOrConnectWithoutPokemonInput = {
    where: PokemonTypeWhereUniqueInput
    create: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonTypeCreateManyPokemonInputEnvelope = {
    data: PokemonTypeCreateManyPokemonInput | PokemonTypeCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type PokemonResistanceCreateWithoutPokemonInput = {
    resistance: ResistanceCreateNestedOneWithoutPokemonsInput
  }

  export type PokemonResistanceUncheckedCreateWithoutPokemonInput = {
    id?: number
    resistanceId: number
  }

  export type PokemonResistanceCreateOrConnectWithoutPokemonInput = {
    where: PokemonResistanceWhereUniqueInput
    create: XOR<PokemonResistanceCreateWithoutPokemonInput, PokemonResistanceUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonResistanceCreateManyPokemonInputEnvelope = {
    data: PokemonResistanceCreateManyPokemonInput | PokemonResistanceCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type EvolutionCreateWithoutFromPokemonInput = {
    toPokemon: PokemonCreateNestedOneWithoutPreEvolutionsInput
  }

  export type EvolutionUncheckedCreateWithoutFromPokemonInput = {
    id?: number
    toPokemonId: number
  }

  export type EvolutionCreateOrConnectWithoutFromPokemonInput = {
    where: EvolutionWhereUniqueInput
    create: XOR<EvolutionCreateWithoutFromPokemonInput, EvolutionUncheckedCreateWithoutFromPokemonInput>
  }

  export type EvolutionCreateManyFromPokemonInputEnvelope = {
    data: EvolutionCreateManyFromPokemonInput | EvolutionCreateManyFromPokemonInput[]
    skipDuplicates?: boolean
  }

  export type EvolutionCreateWithoutToPokemonInput = {
    fromPokemon: PokemonCreateNestedOneWithoutEvolutionsInput
  }

  export type EvolutionUncheckedCreateWithoutToPokemonInput = {
    id?: number
    fromPokemonId: number
  }

  export type EvolutionCreateOrConnectWithoutToPokemonInput = {
    where: EvolutionWhereUniqueInput
    create: XOR<EvolutionCreateWithoutToPokemonInput, EvolutionUncheckedCreateWithoutToPokemonInput>
  }

  export type EvolutionCreateManyToPokemonInputEnvelope = {
    data: EvolutionCreateManyToPokemonInput | EvolutionCreateManyToPokemonInput[]
    skipDuplicates?: boolean
  }

  export type ClassificationUpsertWithoutPokemonsInput = {
    update: XOR<ClassificationUpdateWithoutPokemonsInput, ClassificationUncheckedUpdateWithoutPokemonsInput>
    create: XOR<ClassificationCreateWithoutPokemonsInput, ClassificationUncheckedCreateWithoutPokemonsInput>
    where?: ClassificationWhereInput
  }

  export type ClassificationUpdateToOneWithWhereWithoutPokemonsInput = {
    where?: ClassificationWhereInput
    data: XOR<ClassificationUpdateWithoutPokemonsInput, ClassificationUncheckedUpdateWithoutPokemonsInput>
  }

  export type ClassificationUpdateWithoutPokemonsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassificationUncheckedUpdateWithoutPokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonTypeUpsertWithWhereUniqueWithoutPokemonInput = {
    where: PokemonTypeWhereUniqueInput
    update: XOR<PokemonTypeUpdateWithoutPokemonInput, PokemonTypeUncheckedUpdateWithoutPokemonInput>
    create: XOR<PokemonTypeCreateWithoutPokemonInput, PokemonTypeUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonTypeUpdateWithWhereUniqueWithoutPokemonInput = {
    where: PokemonTypeWhereUniqueInput
    data: XOR<PokemonTypeUpdateWithoutPokemonInput, PokemonTypeUncheckedUpdateWithoutPokemonInput>
  }

  export type PokemonTypeUpdateManyWithWhereWithoutPokemonInput = {
    where: PokemonTypeScalarWhereInput
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyWithoutPokemonInput>
  }

  export type PokemonTypeScalarWhereInput = {
    AND?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
    OR?: PokemonTypeScalarWhereInput[]
    NOT?: PokemonTypeScalarWhereInput | PokemonTypeScalarWhereInput[]
    id?: IntFilter<"PokemonType"> | number
    pokemonId?: IntFilter<"PokemonType"> | number
    typeId?: IntFilter<"PokemonType"> | number
  }

  export type PokemonResistanceUpsertWithWhereUniqueWithoutPokemonInput = {
    where: PokemonResistanceWhereUniqueInput
    update: XOR<PokemonResistanceUpdateWithoutPokemonInput, PokemonResistanceUncheckedUpdateWithoutPokemonInput>
    create: XOR<PokemonResistanceCreateWithoutPokemonInput, PokemonResistanceUncheckedCreateWithoutPokemonInput>
  }

  export type PokemonResistanceUpdateWithWhereUniqueWithoutPokemonInput = {
    where: PokemonResistanceWhereUniqueInput
    data: XOR<PokemonResistanceUpdateWithoutPokemonInput, PokemonResistanceUncheckedUpdateWithoutPokemonInput>
  }

  export type PokemonResistanceUpdateManyWithWhereWithoutPokemonInput = {
    where: PokemonResistanceScalarWhereInput
    data: XOR<PokemonResistanceUpdateManyMutationInput, PokemonResistanceUncheckedUpdateManyWithoutPokemonInput>
  }

  export type PokemonResistanceScalarWhereInput = {
    AND?: PokemonResistanceScalarWhereInput | PokemonResistanceScalarWhereInput[]
    OR?: PokemonResistanceScalarWhereInput[]
    NOT?: PokemonResistanceScalarWhereInput | PokemonResistanceScalarWhereInput[]
    id?: IntFilter<"PokemonResistance"> | number
    pokemonId?: IntFilter<"PokemonResistance"> | number
    resistanceId?: IntFilter<"PokemonResistance"> | number
  }

  export type EvolutionUpsertWithWhereUniqueWithoutFromPokemonInput = {
    where: EvolutionWhereUniqueInput
    update: XOR<EvolutionUpdateWithoutFromPokemonInput, EvolutionUncheckedUpdateWithoutFromPokemonInput>
    create: XOR<EvolutionCreateWithoutFromPokemonInput, EvolutionUncheckedCreateWithoutFromPokemonInput>
  }

  export type EvolutionUpdateWithWhereUniqueWithoutFromPokemonInput = {
    where: EvolutionWhereUniqueInput
    data: XOR<EvolutionUpdateWithoutFromPokemonInput, EvolutionUncheckedUpdateWithoutFromPokemonInput>
  }

  export type EvolutionUpdateManyWithWhereWithoutFromPokemonInput = {
    where: EvolutionScalarWhereInput
    data: XOR<EvolutionUpdateManyMutationInput, EvolutionUncheckedUpdateManyWithoutFromPokemonInput>
  }

  export type EvolutionScalarWhereInput = {
    AND?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
    OR?: EvolutionScalarWhereInput[]
    NOT?: EvolutionScalarWhereInput | EvolutionScalarWhereInput[]
    id?: IntFilter<"Evolution"> | number
    fromPokemonId?: IntFilter<"Evolution"> | number
    toPokemonId?: IntFilter<"Evolution"> | number
  }

  export type EvolutionUpsertWithWhereUniqueWithoutToPokemonInput = {
    where: EvolutionWhereUniqueInput
    update: XOR<EvolutionUpdateWithoutToPokemonInput, EvolutionUncheckedUpdateWithoutToPokemonInput>
    create: XOR<EvolutionCreateWithoutToPokemonInput, EvolutionUncheckedCreateWithoutToPokemonInput>
  }

  export type EvolutionUpdateWithWhereUniqueWithoutToPokemonInput = {
    where: EvolutionWhereUniqueInput
    data: XOR<EvolutionUpdateWithoutToPokemonInput, EvolutionUncheckedUpdateWithoutToPokemonInput>
  }

  export type EvolutionUpdateManyWithWhereWithoutToPokemonInput = {
    where: EvolutionScalarWhereInput
    data: XOR<EvolutionUpdateManyMutationInput, EvolutionUncheckedUpdateManyWithoutToPokemonInput>
  }

  export type PokemonCreateWithoutClassificationInput = {
    number: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    resistances?: PokemonResistanceCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionCreateNestedManyWithoutFromPokemonInput
    preEvolutions?: EvolutionCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonUncheckedCreateWithoutClassificationInput = {
    id?: number
    number: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    resistances?: PokemonResistanceUncheckedCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionUncheckedCreateNestedManyWithoutFromPokemonInput
    preEvolutions?: EvolutionUncheckedCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonCreateOrConnectWithoutClassificationInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutClassificationInput, PokemonUncheckedCreateWithoutClassificationInput>
  }

  export type PokemonCreateManyClassificationInputEnvelope = {
    data: PokemonCreateManyClassificationInput | PokemonCreateManyClassificationInput[]
    skipDuplicates?: boolean
  }

  export type PokemonUpsertWithWhereUniqueWithoutClassificationInput = {
    where: PokemonWhereUniqueInput
    update: XOR<PokemonUpdateWithoutClassificationInput, PokemonUncheckedUpdateWithoutClassificationInput>
    create: XOR<PokemonCreateWithoutClassificationInput, PokemonUncheckedCreateWithoutClassificationInput>
  }

  export type PokemonUpdateWithWhereUniqueWithoutClassificationInput = {
    where: PokemonWhereUniqueInput
    data: XOR<PokemonUpdateWithoutClassificationInput, PokemonUncheckedUpdateWithoutClassificationInput>
  }

  export type PokemonUpdateManyWithWhereWithoutClassificationInput = {
    where: PokemonScalarWhereInput
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyWithoutClassificationInput>
  }

  export type PokemonScalarWhereInput = {
    AND?: PokemonScalarWhereInput | PokemonScalarWhereInput[]
    OR?: PokemonScalarWhereInput[]
    NOT?: PokemonScalarWhereInput | PokemonScalarWhereInput[]
    id?: IntFilter<"Pokemon"> | number
    number?: IntFilter<"Pokemon"> | number
    name?: StringFilter<"Pokemon"> | string
    imageUrl?: StringNullableFilter<"Pokemon"> | string | null
    classificationId?: IntFilter<"Pokemon"> | number
    createdAt?: DateTimeFilter<"Pokemon"> | Date | string
    updatedAt?: DateTimeFilter<"Pokemon"> | Date | string
  }

  export type PokemonTypeCreateWithoutTypeInput = {
    pokemon: PokemonCreateNestedOneWithoutTypesInput
  }

  export type PokemonTypeUncheckedCreateWithoutTypeInput = {
    id?: number
    pokemonId: number
  }

  export type PokemonTypeCreateOrConnectWithoutTypeInput = {
    where: PokemonTypeWhereUniqueInput
    create: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput>
  }

  export type PokemonTypeCreateManyTypeInputEnvelope = {
    data: PokemonTypeCreateManyTypeInput | PokemonTypeCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type PokemonTypeUpsertWithWhereUniqueWithoutTypeInput = {
    where: PokemonTypeWhereUniqueInput
    update: XOR<PokemonTypeUpdateWithoutTypeInput, PokemonTypeUncheckedUpdateWithoutTypeInput>
    create: XOR<PokemonTypeCreateWithoutTypeInput, PokemonTypeUncheckedCreateWithoutTypeInput>
  }

  export type PokemonTypeUpdateWithWhereUniqueWithoutTypeInput = {
    where: PokemonTypeWhereUniqueInput
    data: XOR<PokemonTypeUpdateWithoutTypeInput, PokemonTypeUncheckedUpdateWithoutTypeInput>
  }

  export type PokemonTypeUpdateManyWithWhereWithoutTypeInput = {
    where: PokemonTypeScalarWhereInput
    data: XOR<PokemonTypeUpdateManyMutationInput, PokemonTypeUncheckedUpdateManyWithoutTypeInput>
  }

  export type PokemonResistanceCreateWithoutResistanceInput = {
    pokemon: PokemonCreateNestedOneWithoutResistancesInput
  }

  export type PokemonResistanceUncheckedCreateWithoutResistanceInput = {
    id?: number
    pokemonId: number
  }

  export type PokemonResistanceCreateOrConnectWithoutResistanceInput = {
    where: PokemonResistanceWhereUniqueInput
    create: XOR<PokemonResistanceCreateWithoutResistanceInput, PokemonResistanceUncheckedCreateWithoutResistanceInput>
  }

  export type PokemonResistanceCreateManyResistanceInputEnvelope = {
    data: PokemonResistanceCreateManyResistanceInput | PokemonResistanceCreateManyResistanceInput[]
    skipDuplicates?: boolean
  }

  export type PokemonResistanceUpsertWithWhereUniqueWithoutResistanceInput = {
    where: PokemonResistanceWhereUniqueInput
    update: XOR<PokemonResistanceUpdateWithoutResistanceInput, PokemonResistanceUncheckedUpdateWithoutResistanceInput>
    create: XOR<PokemonResistanceCreateWithoutResistanceInput, PokemonResistanceUncheckedCreateWithoutResistanceInput>
  }

  export type PokemonResistanceUpdateWithWhereUniqueWithoutResistanceInput = {
    where: PokemonResistanceWhereUniqueInput
    data: XOR<PokemonResistanceUpdateWithoutResistanceInput, PokemonResistanceUncheckedUpdateWithoutResistanceInput>
  }

  export type PokemonResistanceUpdateManyWithWhereWithoutResistanceInput = {
    where: PokemonResistanceScalarWhereInput
    data: XOR<PokemonResistanceUpdateManyMutationInput, PokemonResistanceUncheckedUpdateManyWithoutResistanceInput>
  }

  export type PokemonCreateWithoutTypesInput = {
    number: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification: ClassificationCreateNestedOneWithoutPokemonsInput
    resistances?: PokemonResistanceCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionCreateNestedManyWithoutFromPokemonInput
    preEvolutions?: EvolutionCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonUncheckedCreateWithoutTypesInput = {
    id?: number
    number: number
    name: string
    imageUrl?: string | null
    classificationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    resistances?: PokemonResistanceUncheckedCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionUncheckedCreateNestedManyWithoutFromPokemonInput
    preEvolutions?: EvolutionUncheckedCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonCreateOrConnectWithoutTypesInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
  }

  export type TypeCreateWithoutPokemonsInput = {
    name: string
  }

  export type TypeUncheckedCreateWithoutPokemonsInput = {
    id?: number
    name: string
  }

  export type TypeCreateOrConnectWithoutPokemonsInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutPokemonsInput, TypeUncheckedCreateWithoutPokemonsInput>
  }

  export type PokemonUpsertWithoutTypesInput = {
    update: XOR<PokemonUpdateWithoutTypesInput, PokemonUncheckedUpdateWithoutTypesInput>
    create: XOR<PokemonCreateWithoutTypesInput, PokemonUncheckedCreateWithoutTypesInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutTypesInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutTypesInput, PokemonUncheckedUpdateWithoutTypesInput>
  }

  export type PokemonUpdateWithoutTypesInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: ClassificationUpdateOneRequiredWithoutPokemonsNestedInput
    resistances?: PokemonResistanceUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUpdateManyWithoutFromPokemonNestedInput
    preEvolutions?: EvolutionUpdateManyWithoutToPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    classificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resistances?: PokemonResistanceUncheckedUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUncheckedUpdateManyWithoutFromPokemonNestedInput
    preEvolutions?: EvolutionUncheckedUpdateManyWithoutToPokemonNestedInput
  }

  export type TypeUpsertWithoutPokemonsInput = {
    update: XOR<TypeUpdateWithoutPokemonsInput, TypeUncheckedUpdateWithoutPokemonsInput>
    create: XOR<TypeCreateWithoutPokemonsInput, TypeUncheckedCreateWithoutPokemonsInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutPokemonsInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutPokemonsInput, TypeUncheckedUpdateWithoutPokemonsInput>
  }

  export type TypeUpdateWithoutPokemonsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateWithoutPokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonCreateWithoutResistancesInput = {
    number: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification: ClassificationCreateNestedOneWithoutPokemonsInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionCreateNestedManyWithoutFromPokemonInput
    preEvolutions?: EvolutionCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonUncheckedCreateWithoutResistancesInput = {
    id?: number
    number: number
    name: string
    imageUrl?: string | null
    classificationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionUncheckedCreateNestedManyWithoutFromPokemonInput
    preEvolutions?: EvolutionUncheckedCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonCreateOrConnectWithoutResistancesInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutResistancesInput, PokemonUncheckedCreateWithoutResistancesInput>
  }

  export type ResistanceCreateWithoutPokemonsInput = {
    name: string
  }

  export type ResistanceUncheckedCreateWithoutPokemonsInput = {
    id?: number
    name: string
  }

  export type ResistanceCreateOrConnectWithoutPokemonsInput = {
    where: ResistanceWhereUniqueInput
    create: XOR<ResistanceCreateWithoutPokemonsInput, ResistanceUncheckedCreateWithoutPokemonsInput>
  }

  export type PokemonUpsertWithoutResistancesInput = {
    update: XOR<PokemonUpdateWithoutResistancesInput, PokemonUncheckedUpdateWithoutResistancesInput>
    create: XOR<PokemonCreateWithoutResistancesInput, PokemonUncheckedCreateWithoutResistancesInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutResistancesInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutResistancesInput, PokemonUncheckedUpdateWithoutResistancesInput>
  }

  export type PokemonUpdateWithoutResistancesInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: ClassificationUpdateOneRequiredWithoutPokemonsNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUpdateManyWithoutFromPokemonNestedInput
    preEvolutions?: EvolutionUpdateManyWithoutToPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutResistancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    classificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUncheckedUpdateManyWithoutFromPokemonNestedInput
    preEvolutions?: EvolutionUncheckedUpdateManyWithoutToPokemonNestedInput
  }

  export type ResistanceUpsertWithoutPokemonsInput = {
    update: XOR<ResistanceUpdateWithoutPokemonsInput, ResistanceUncheckedUpdateWithoutPokemonsInput>
    create: XOR<ResistanceCreateWithoutPokemonsInput, ResistanceUncheckedCreateWithoutPokemonsInput>
    where?: ResistanceWhereInput
  }

  export type ResistanceUpdateToOneWithWhereWithoutPokemonsInput = {
    where?: ResistanceWhereInput
    data: XOR<ResistanceUpdateWithoutPokemonsInput, ResistanceUncheckedUpdateWithoutPokemonsInput>
  }

  export type ResistanceUpdateWithoutPokemonsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResistanceUncheckedUpdateWithoutPokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PokemonCreateWithoutEvolutionsInput = {
    number: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification: ClassificationCreateNestedOneWithoutPokemonsInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    resistances?: PokemonResistanceCreateNestedManyWithoutPokemonInput
    preEvolutions?: EvolutionCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonUncheckedCreateWithoutEvolutionsInput = {
    id?: number
    number: number
    name: string
    imageUrl?: string | null
    classificationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    resistances?: PokemonResistanceUncheckedCreateNestedManyWithoutPokemonInput
    preEvolutions?: EvolutionUncheckedCreateNestedManyWithoutToPokemonInput
  }

  export type PokemonCreateOrConnectWithoutEvolutionsInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutEvolutionsInput, PokemonUncheckedCreateWithoutEvolutionsInput>
  }

  export type PokemonCreateWithoutPreEvolutionsInput = {
    number: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification: ClassificationCreateNestedOneWithoutPokemonsInput
    types?: PokemonTypeCreateNestedManyWithoutPokemonInput
    resistances?: PokemonResistanceCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionCreateNestedManyWithoutFromPokemonInput
  }

  export type PokemonUncheckedCreateWithoutPreEvolutionsInput = {
    id?: number
    number: number
    name: string
    imageUrl?: string | null
    classificationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    types?: PokemonTypeUncheckedCreateNestedManyWithoutPokemonInput
    resistances?: PokemonResistanceUncheckedCreateNestedManyWithoutPokemonInput
    evolutions?: EvolutionUncheckedCreateNestedManyWithoutFromPokemonInput
  }

  export type PokemonCreateOrConnectWithoutPreEvolutionsInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutPreEvolutionsInput, PokemonUncheckedCreateWithoutPreEvolutionsInput>
  }

  export type PokemonUpsertWithoutEvolutionsInput = {
    update: XOR<PokemonUpdateWithoutEvolutionsInput, PokemonUncheckedUpdateWithoutEvolutionsInput>
    create: XOR<PokemonCreateWithoutEvolutionsInput, PokemonUncheckedCreateWithoutEvolutionsInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutEvolutionsInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutEvolutionsInput, PokemonUncheckedUpdateWithoutEvolutionsInput>
  }

  export type PokemonUpdateWithoutEvolutionsInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: ClassificationUpdateOneRequiredWithoutPokemonsNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    resistances?: PokemonResistanceUpdateManyWithoutPokemonNestedInput
    preEvolutions?: EvolutionUpdateManyWithoutToPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutEvolutionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    classificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    resistances?: PokemonResistanceUncheckedUpdateManyWithoutPokemonNestedInput
    preEvolutions?: EvolutionUncheckedUpdateManyWithoutToPokemonNestedInput
  }

  export type PokemonUpsertWithoutPreEvolutionsInput = {
    update: XOR<PokemonUpdateWithoutPreEvolutionsInput, PokemonUncheckedUpdateWithoutPreEvolutionsInput>
    create: XOR<PokemonCreateWithoutPreEvolutionsInput, PokemonUncheckedCreateWithoutPreEvolutionsInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutPreEvolutionsInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutPreEvolutionsInput, PokemonUncheckedUpdateWithoutPreEvolutionsInput>
  }

  export type PokemonUpdateWithoutPreEvolutionsInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: ClassificationUpdateOneRequiredWithoutPokemonsNestedInput
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    resistances?: PokemonResistanceUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUpdateManyWithoutFromPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutPreEvolutionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    classificationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    resistances?: PokemonResistanceUncheckedUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUncheckedUpdateManyWithoutFromPokemonNestedInput
  }

  export type PokemonTypeCreateManyPokemonInput = {
    id?: number
    typeId: number
  }

  export type PokemonResistanceCreateManyPokemonInput = {
    id?: number
    resistanceId: number
  }

  export type EvolutionCreateManyFromPokemonInput = {
    id?: number
    toPokemonId: number
  }

  export type EvolutionCreateManyToPokemonInput = {
    id?: number
    fromPokemonId: number
  }

  export type PokemonTypeUpdateWithoutPokemonInput = {
    type?: TypeUpdateOneRequiredWithoutPokemonsNestedInput
  }

  export type PokemonTypeUncheckedUpdateWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonTypeUncheckedUpdateManyWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonResistanceUpdateWithoutPokemonInput = {
    resistance?: ResistanceUpdateOneRequiredWithoutPokemonsNestedInput
  }

  export type PokemonResistanceUncheckedUpdateWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    resistanceId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonResistanceUncheckedUpdateManyWithoutPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    resistanceId?: IntFieldUpdateOperationsInput | number
  }

  export type EvolutionUpdateWithoutFromPokemonInput = {
    toPokemon?: PokemonUpdateOneRequiredWithoutPreEvolutionsNestedInput
  }

  export type EvolutionUncheckedUpdateWithoutFromPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    toPokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type EvolutionUncheckedUpdateManyWithoutFromPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    toPokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type EvolutionUpdateWithoutToPokemonInput = {
    fromPokemon?: PokemonUpdateOneRequiredWithoutEvolutionsNestedInput
  }

  export type EvolutionUncheckedUpdateWithoutToPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromPokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type EvolutionUncheckedUpdateManyWithoutToPokemonInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromPokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonCreateManyClassificationInput = {
    id?: number
    number: number
    name: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokemonUpdateWithoutClassificationInput = {
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: PokemonTypeUpdateManyWithoutPokemonNestedInput
    resistances?: PokemonResistanceUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUpdateManyWithoutFromPokemonNestedInput
    preEvolutions?: EvolutionUpdateManyWithoutToPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutClassificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: PokemonTypeUncheckedUpdateManyWithoutPokemonNestedInput
    resistances?: PokemonResistanceUncheckedUpdateManyWithoutPokemonNestedInput
    evolutions?: EvolutionUncheckedUpdateManyWithoutFromPokemonNestedInput
    preEvolutions?: EvolutionUncheckedUpdateManyWithoutToPokemonNestedInput
  }

  export type PokemonUncheckedUpdateManyWithoutClassificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonTypeCreateManyTypeInput = {
    id?: number
    pokemonId: number
  }

  export type PokemonTypeUpdateWithoutTypeInput = {
    pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput
  }

  export type PokemonTypeUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonTypeUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonResistanceCreateManyResistanceInput = {
    id?: number
    pokemonId: number
  }

  export type PokemonResistanceUpdateWithoutResistanceInput = {
    pokemon?: PokemonUpdateOneRequiredWithoutResistancesNestedInput
  }

  export type PokemonResistanceUncheckedUpdateWithoutResistanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonResistanceUncheckedUpdateManyWithoutResistanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonId?: IntFieldUpdateOperationsInput | number
  }



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