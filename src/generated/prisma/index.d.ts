
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model Kamar
 * 
 */
export type Kamar = $Result.DefaultSelection<Prisma.$KamarPayload>
/**
 * Model Pemesanan
 * 
 */
export type Pemesanan = $Result.DefaultSelection<Prisma.$PemesananPayload>
/**
 * Model Pembayaran
 * 
 */
export type Pembayaran = $Result.DefaultSelection<Prisma.$PembayaranPayload>
/**
 * Model Ulasan
 * 
 */
export type Ulasan = $Result.DefaultSelection<Prisma.$UlasanPayload>
/**
 * Model Gambar
 * 
 */
export type Gambar = $Result.DefaultSelection<Prisma.$GambarPayload>
/**
 * Model Fasilitas
 * 
 */
export type Fasilitas = $Result.DefaultSelection<Prisma.$FasilitasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PeranPengguna: {
  PENGGUNA: 'PENGGUNA',
  ADMIN: 'ADMIN'
};

export type PeranPengguna = (typeof PeranPengguna)[keyof typeof PeranPengguna]


export const TipeKamar: {
  STANDAR: 'STANDAR',
  DELUXE: 'DELUXE',
  SUITE: 'SUITE',
  EKSEKUTIF: 'EKSEKUTIF'
};

export type TipeKamar = (typeof TipeKamar)[keyof typeof TipeKamar]


export const StatusKamar: {
  TERSEDIA: 'TERSEDIA',
  DIPESAN: 'DIPESAN',
  PERBAIKAN: 'PERBAIKAN'
};

export type StatusKamar = (typeof StatusKamar)[keyof typeof StatusKamar]


export const StatusPemesanan: {
  MENUNGGU: 'MENUNGGU',
  DIKONFIRMASI: 'DIKONFIRMASI',
  DIBATALKAN: 'DIBATALKAN',
  SELESAI: 'SELESAI'
};

export type StatusPemesanan = (typeof StatusPemesanan)[keyof typeof StatusPemesanan]


export const StatusPembayaran: {
  MENUNGGU: 'MENUNGGU',
  DIBAYAR: 'DIBAYAR',
  GAGAL: 'GAGAL',
  DIKEMBALIKAN: 'DIKEMBALIKAN'
};

export type StatusPembayaran = (typeof StatusPembayaran)[keyof typeof StatusPembayaran]

}

export type PeranPengguna = $Enums.PeranPengguna

export const PeranPengguna: typeof $Enums.PeranPengguna

export type TipeKamar = $Enums.TipeKamar

export const TipeKamar: typeof $Enums.TipeKamar

export type StatusKamar = $Enums.StatusKamar

export const StatusKamar: typeof $Enums.StatusKamar

export type StatusPemesanan = $Enums.StatusPemesanan

export const StatusPemesanan: typeof $Enums.StatusPemesanan

export type StatusPembayaran = $Enums.StatusPembayaran

export const StatusPembayaran: typeof $Enums.StatusPembayaran

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs>;

  /**
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs>;

  /**
   * `prisma.kamar`: Exposes CRUD operations for the **Kamar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kamars
    * const kamars = await prisma.kamar.findMany()
    * ```
    */
  get kamar(): Prisma.KamarDelegate<ExtArgs>;

  /**
   * `prisma.pemesanan`: Exposes CRUD operations for the **Pemesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pemesanans
    * const pemesanans = await prisma.pemesanan.findMany()
    * ```
    */
  get pemesanan(): Prisma.PemesananDelegate<ExtArgs>;

  /**
   * `prisma.pembayaran`: Exposes CRUD operations for the **Pembayaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembayarans
    * const pembayarans = await prisma.pembayaran.findMany()
    * ```
    */
  get pembayaran(): Prisma.PembayaranDelegate<ExtArgs>;

  /**
   * `prisma.ulasan`: Exposes CRUD operations for the **Ulasan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ulasans
    * const ulasans = await prisma.ulasan.findMany()
    * ```
    */
  get ulasan(): Prisma.UlasanDelegate<ExtArgs>;

  /**
   * `prisma.gambar`: Exposes CRUD operations for the **Gambar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gambars
    * const gambars = await prisma.gambar.findMany()
    * ```
    */
  get gambar(): Prisma.GambarDelegate<ExtArgs>;

  /**
   * `prisma.fasilitas`: Exposes CRUD operations for the **Fasilitas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fasilitas
    * const fasilitas = await prisma.fasilitas.findMany()
    * ```
    */
  get fasilitas(): Prisma.FasilitasDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    Hotel: 'Hotel',
    Kamar: 'Kamar',
    Pemesanan: 'Pemesanan',
    Pembayaran: 'Pembayaran',
    Ulasan: 'Ulasan',
    Gambar: 'Gambar',
    Fasilitas: 'Fasilitas'
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
      modelProps: "account" | "session" | "verificationToken" | "user" | "role" | "permission" | "hotel" | "kamar" | "pemesanan" | "pembayaran" | "ulasan" | "gambar" | "fasilitas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
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
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      Kamar: {
        payload: Prisma.$KamarPayload<ExtArgs>
        fields: Prisma.KamarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KamarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KamarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          findFirst: {
            args: Prisma.KamarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KamarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          findMany: {
            args: Prisma.KamarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>[]
          }
          create: {
            args: Prisma.KamarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          createMany: {
            args: Prisma.KamarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KamarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>[]
          }
          delete: {
            args: Prisma.KamarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          update: {
            args: Prisma.KamarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          deleteMany: {
            args: Prisma.KamarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KamarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KamarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          aggregate: {
            args: Prisma.KamarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKamar>
          }
          groupBy: {
            args: Prisma.KamarGroupByArgs<ExtArgs>
            result: $Utils.Optional<KamarGroupByOutputType>[]
          }
          count: {
            args: Prisma.KamarCountArgs<ExtArgs>
            result: $Utils.Optional<KamarCountAggregateOutputType> | number
          }
        }
      }
      Pemesanan: {
        payload: Prisma.$PemesananPayload<ExtArgs>
        fields: Prisma.PemesananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PemesananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PemesananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          findFirst: {
            args: Prisma.PemesananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PemesananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          findMany: {
            args: Prisma.PemesananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>[]
          }
          create: {
            args: Prisma.PemesananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          createMany: {
            args: Prisma.PemesananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PemesananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>[]
          }
          delete: {
            args: Prisma.PemesananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          update: {
            args: Prisma.PemesananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          deleteMany: {
            args: Prisma.PemesananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PemesananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PemesananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          aggregate: {
            args: Prisma.PemesananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePemesanan>
          }
          groupBy: {
            args: Prisma.PemesananGroupByArgs<ExtArgs>
            result: $Utils.Optional<PemesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.PemesananCountArgs<ExtArgs>
            result: $Utils.Optional<PemesananCountAggregateOutputType> | number
          }
        }
      }
      Pembayaran: {
        payload: Prisma.$PembayaranPayload<ExtArgs>
        fields: Prisma.PembayaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembayaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembayaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          findFirst: {
            args: Prisma.PembayaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembayaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          findMany: {
            args: Prisma.PembayaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          create: {
            args: Prisma.PembayaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          createMany: {
            args: Prisma.PembayaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembayaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          delete: {
            args: Prisma.PembayaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          update: {
            args: Prisma.PembayaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          deleteMany: {
            args: Prisma.PembayaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembayaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PembayaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          aggregate: {
            args: Prisma.PembayaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembayaran>
          }
          groupBy: {
            args: Prisma.PembayaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembayaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembayaranCountArgs<ExtArgs>
            result: $Utils.Optional<PembayaranCountAggregateOutputType> | number
          }
        }
      }
      Ulasan: {
        payload: Prisma.$UlasanPayload<ExtArgs>
        fields: Prisma.UlasanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UlasanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UlasanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          findFirst: {
            args: Prisma.UlasanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UlasanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          findMany: {
            args: Prisma.UlasanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>[]
          }
          create: {
            args: Prisma.UlasanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          createMany: {
            args: Prisma.UlasanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UlasanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>[]
          }
          delete: {
            args: Prisma.UlasanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          update: {
            args: Prisma.UlasanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          deleteMany: {
            args: Prisma.UlasanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UlasanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UlasanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UlasanPayload>
          }
          aggregate: {
            args: Prisma.UlasanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUlasan>
          }
          groupBy: {
            args: Prisma.UlasanGroupByArgs<ExtArgs>
            result: $Utils.Optional<UlasanGroupByOutputType>[]
          }
          count: {
            args: Prisma.UlasanCountArgs<ExtArgs>
            result: $Utils.Optional<UlasanCountAggregateOutputType> | number
          }
        }
      }
      Gambar: {
        payload: Prisma.$GambarPayload<ExtArgs>
        fields: Prisma.GambarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GambarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GambarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          findFirst: {
            args: Prisma.GambarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GambarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          findMany: {
            args: Prisma.GambarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>[]
          }
          create: {
            args: Prisma.GambarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          createMany: {
            args: Prisma.GambarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GambarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>[]
          }
          delete: {
            args: Prisma.GambarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          update: {
            args: Prisma.GambarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          deleteMany: {
            args: Prisma.GambarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GambarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GambarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          aggregate: {
            args: Prisma.GambarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGambar>
          }
          groupBy: {
            args: Prisma.GambarGroupByArgs<ExtArgs>
            result: $Utils.Optional<GambarGroupByOutputType>[]
          }
          count: {
            args: Prisma.GambarCountArgs<ExtArgs>
            result: $Utils.Optional<GambarCountAggregateOutputType> | number
          }
        }
      }
      Fasilitas: {
        payload: Prisma.$FasilitasPayload<ExtArgs>
        fields: Prisma.FasilitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FasilitasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FasilitasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          findFirst: {
            args: Prisma.FasilitasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FasilitasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          findMany: {
            args: Prisma.FasilitasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>[]
          }
          create: {
            args: Prisma.FasilitasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          createMany: {
            args: Prisma.FasilitasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FasilitasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>[]
          }
          delete: {
            args: Prisma.FasilitasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          update: {
            args: Prisma.FasilitasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          deleteMany: {
            args: Prisma.FasilitasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FasilitasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FasilitasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          aggregate: {
            args: Prisma.FasilitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFasilitas>
          }
          groupBy: {
            args: Prisma.FasilitasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FasilitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.FasilitasCountArgs<ExtArgs>
            result: $Utils.Optional<FasilitasCountAggregateOutputType> | number
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
    accounts: number
    sessions: number
    pemesanan: number
    ulasan: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    pemesanan?: boolean | UserCountOutputTypeCountPemesananArgs
    ulasan?: boolean | UserCountOutputTypeCountUlasanArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PemesananWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUlasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    permissions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    roles: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    gambar: number
    kamar: number
    ulasan: number
    fasilitas: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gambar?: boolean | HotelCountOutputTypeCountGambarArgs
    kamar?: boolean | HotelCountOutputTypeCountKamarArgs
    ulasan?: boolean | HotelCountOutputTypeCountUlasanArgs
    fasilitas?: boolean | HotelCountOutputTypeCountFasilitasArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountGambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GambarWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountKamarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KamarWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountUlasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountFasilitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FasilitasWhereInput
  }


  /**
   * Count Type KamarCountOutputType
   */

  export type KamarCountOutputType = {
    gambar: number
    pemesanan: number
  }

  export type KamarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gambar?: boolean | KamarCountOutputTypeCountGambarArgs
    pemesanan?: boolean | KamarCountOutputTypeCountPemesananArgs
  }

  // Custom InputTypes
  /**
   * KamarCountOutputType without action
   */
  export type KamarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KamarCountOutputType
     */
    select?: KamarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KamarCountOutputType without action
   */
  export type KamarCountOutputTypeCountGambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GambarWhereInput
  }

  /**
   * KamarCountOutputType without action
   */
  export type KamarCountOutputTypeCountPemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PemesananWhereInput
  }


  /**
   * Count Type UlasanCountOutputType
   */

  export type UlasanCountOutputType = {
    gambar: number
  }

  export type UlasanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gambar?: boolean | UlasanCountOutputTypeCountGambarArgs
  }

  // Custom InputTypes
  /**
   * UlasanCountOutputType without action
   */
  export type UlasanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UlasanCountOutputType
     */
    select?: UlasanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UlasanCountOutputType without action
   */
  export type UlasanCountOutputTypeCountGambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GambarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


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
    email: string | null
    password: string | null
    name: string | null
    image: string | null
    telepon: string | null
    peran: $Enums.PeranPengguna | null
    emailVerified: Date | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    image: string | null
    telepon: string | null
    peran: $Enums.PeranPengguna | null
    emailVerified: Date | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    image: number
    telepon: number
    peran: number
    emailVerified: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    image?: true
    telepon?: true
    peran?: true
    emailVerified?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    image?: true
    telepon?: true
    peran?: true
    emailVerified?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    image?: true
    telepon?: true
    peran?: true
    emailVerified?: true
    roleId?: true
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
    email: string
    password: string
    name: string
    image: string | null
    telepon: string | null
    peran: $Enums.PeranPengguna
    emailVerified: Date | null
    roleId: string | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    telepon?: boolean
    peran?: boolean
    emailVerified?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    pemesanan?: boolean | User$pemesananArgs<ExtArgs>
    ulasan?: boolean | User$ulasanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    telepon?: boolean
    peran?: boolean
    emailVerified?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    telepon?: boolean
    peran?: boolean
    emailVerified?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    pemesanan?: boolean | User$pemesananArgs<ExtArgs>
    ulasan?: boolean | User$ulasanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs> | null
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      pemesanan: Prisma.$PemesananPayload<ExtArgs>[]
      ulasan: Prisma.$UlasanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      image: string | null
      telepon: string | null
      peran: $Enums.PeranPengguna
      emailVerified: Date | null
      roleId: string | null
      createdAt: Date
      updatedAt: Date
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    role<T extends User$roleArgs<ExtArgs> = {}>(args?: Subset<T, User$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    pemesanan<T extends User$pemesananArgs<ExtArgs> = {}>(args?: Subset<T, User$pemesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findMany"> | Null>
    ulasan<T extends User$ulasanArgs<ExtArgs> = {}>(args?: Subset<T, User$ulasanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly telepon: FieldRef<"User", 'String'>
    readonly peran: FieldRef<"User", 'PeranPengguna'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly roleId: FieldRef<"User", 'String'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
   * User.role
   */
  export type User$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.pemesanan
   */
  export type User$pemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    where?: PemesananWhereInput
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    cursor?: PemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * User.ulasan
   */
  export type User$ulasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    cursor?: UlasanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
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
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelAvgAggregateOutputType = {
    rating: number | null
  }

  export type HotelSumAggregateOutputType = {
    rating: number | null
  }

  export type HotelMinAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    alamat: string | null
    kota: string | null
    negara: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    alamat: string | null
    kota: string | null
    negara: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    nama: number
    deskripsi: number
    alamat: number
    kota: number
    negara: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HotelAvgAggregateInputType = {
    rating?: true
  }

  export type HotelSumAggregateInputType = {
    rating?: true
  }

  export type HotelMinAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    alamat?: true
    kota?: true
    negara?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    alamat?: true
    kota?: true
    negara?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    alamat?: true
    kota?: true
    negara?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _avg?: HotelAvgAggregateInputType
    _sum?: HotelSumAggregateInputType
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    id: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating: number
    createdAt: Date
    updatedAt: Date
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    alamat?: boolean
    kota?: boolean
    negara?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gambar?: boolean | Hotel$gambarArgs<ExtArgs>
    kamar?: boolean | Hotel$kamarArgs<ExtArgs>
    ulasan?: boolean | Hotel$ulasanArgs<ExtArgs>
    fasilitas?: boolean | Hotel$fasilitasArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    alamat?: boolean
    kota?: boolean
    negara?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectScalar = {
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    alamat?: boolean
    kota?: boolean
    negara?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gambar?: boolean | Hotel$gambarArgs<ExtArgs>
    kamar?: boolean | Hotel$kamarArgs<ExtArgs>
    ulasan?: boolean | Hotel$ulasanArgs<ExtArgs>
    fasilitas?: boolean | Hotel$fasilitasArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      gambar: Prisma.$GambarPayload<ExtArgs>[]
      kamar: Prisma.$KamarPayload<ExtArgs>[]
      ulasan: Prisma.$UlasanPayload<ExtArgs>[]
      fasilitas: Prisma.$FasilitasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      deskripsi: string
      alamat: string
      kota: string
      negara: string
      rating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hotel"]>
    composites: {}
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotels and returns the data saved in the database.
     * @param {HotelCreateManyAndReturnArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
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
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gambar<T extends Hotel$gambarArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$gambarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findMany"> | Null>
    kamar<T extends Hotel$kamarArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$kamarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findMany"> | Null>
    ulasan<T extends Hotel$ulasanArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$ulasanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findMany"> | Null>
    fasilitas<T extends Hotel$fasilitasArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$fasilitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Hotel model
   */ 
  interface HotelFieldRefs {
    readonly id: FieldRef<"Hotel", 'String'>
    readonly nama: FieldRef<"Hotel", 'String'>
    readonly deskripsi: FieldRef<"Hotel", 'String'>
    readonly alamat: FieldRef<"Hotel", 'String'>
    readonly kota: FieldRef<"Hotel", 'String'>
    readonly negara: FieldRef<"Hotel", 'String'>
    readonly rating: FieldRef<"Hotel", 'Float'>
    readonly createdAt: FieldRef<"Hotel", 'DateTime'>
    readonly updatedAt: FieldRef<"Hotel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel createManyAndReturn
   */
  export type HotelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
  }

  /**
   * Hotel.gambar
   */
  export type Hotel$gambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    where?: GambarWhereInput
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    cursor?: GambarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Hotel.kamar
   */
  export type Hotel$kamarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    where?: KamarWhereInput
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    cursor?: KamarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Hotel.ulasan
   */
  export type Hotel$ulasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    cursor?: UlasanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * Hotel.fasilitas
   */
  export type Hotel$fasilitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    where?: FasilitasWhereInput
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    cursor?: FasilitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model Kamar
   */

  export type AggregateKamar = {
    _count: KamarCountAggregateOutputType | null
    _avg: KamarAvgAggregateOutputType | null
    _sum: KamarSumAggregateOutputType | null
    _min: KamarMinAggregateOutputType | null
    _max: KamarMaxAggregateOutputType | null
  }

  export type KamarAvgAggregateOutputType = {
    harga: number | null
    kapasitas: number | null
  }

  export type KamarSumAggregateOutputType = {
    harga: number | null
    kapasitas: number | null
  }

  export type KamarMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    nama: string | null
    deskripsi: string | null
    harga: number | null
    kapasitas: number | null
    tipe: $Enums.TipeKamar | null
    status: $Enums.StatusKamar | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KamarMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    nama: string | null
    deskripsi: string | null
    harga: number | null
    kapasitas: number | null
    tipe: $Enums.TipeKamar | null
    status: $Enums.StatusKamar | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KamarCountAggregateOutputType = {
    id: number
    hotelId: number
    nama: number
    deskripsi: number
    harga: number
    kapasitas: number
    tipe: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KamarAvgAggregateInputType = {
    harga?: true
    kapasitas?: true
  }

  export type KamarSumAggregateInputType = {
    harga?: true
    kapasitas?: true
  }

  export type KamarMinAggregateInputType = {
    id?: true
    hotelId?: true
    nama?: true
    deskripsi?: true
    harga?: true
    kapasitas?: true
    tipe?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KamarMaxAggregateInputType = {
    id?: true
    hotelId?: true
    nama?: true
    deskripsi?: true
    harga?: true
    kapasitas?: true
    tipe?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KamarCountAggregateInputType = {
    id?: true
    hotelId?: true
    nama?: true
    deskripsi?: true
    harga?: true
    kapasitas?: true
    tipe?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KamarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kamar to aggregate.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kamars
    **/
    _count?: true | KamarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KamarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KamarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KamarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KamarMaxAggregateInputType
  }

  export type GetKamarAggregateType<T extends KamarAggregateArgs> = {
        [P in keyof T & keyof AggregateKamar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKamar[P]>
      : GetScalarType<T[P], AggregateKamar[P]>
  }




  export type KamarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KamarWhereInput
    orderBy?: KamarOrderByWithAggregationInput | KamarOrderByWithAggregationInput[]
    by: KamarScalarFieldEnum[] | KamarScalarFieldEnum
    having?: KamarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KamarCountAggregateInputType | true
    _avg?: KamarAvgAggregateInputType
    _sum?: KamarSumAggregateInputType
    _min?: KamarMinAggregateInputType
    _max?: KamarMaxAggregateInputType
  }

  export type KamarGroupByOutputType = {
    id: string
    hotelId: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status: $Enums.StatusKamar
    createdAt: Date
    updatedAt: Date
    _count: KamarCountAggregateOutputType | null
    _avg: KamarAvgAggregateOutputType | null
    _sum: KamarSumAggregateOutputType | null
    _min: KamarMinAggregateOutputType | null
    _max: KamarMaxAggregateOutputType | null
  }

  type GetKamarGroupByPayload<T extends KamarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KamarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KamarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KamarGroupByOutputType[P]>
            : GetScalarType<T[P], KamarGroupByOutputType[P]>
        }
      >
    >


  export type KamarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    kapasitas?: boolean
    tipe?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    gambar?: boolean | Kamar$gambarArgs<ExtArgs>
    pemesanan?: boolean | Kamar$pemesananArgs<ExtArgs>
    _count?: boolean | KamarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kamar"]>

  export type KamarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    kapasitas?: boolean
    tipe?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kamar"]>

  export type KamarSelectScalar = {
    id?: boolean
    hotelId?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    kapasitas?: boolean
    tipe?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KamarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    gambar?: boolean | Kamar$gambarArgs<ExtArgs>
    pemesanan?: boolean | Kamar$pemesananArgs<ExtArgs>
    _count?: boolean | KamarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KamarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $KamarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kamar"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
      gambar: Prisma.$GambarPayload<ExtArgs>[]
      pemesanan: Prisma.$PemesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string
      nama: string
      deskripsi: string
      harga: number
      kapasitas: number
      tipe: $Enums.TipeKamar
      status: $Enums.StatusKamar
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kamar"]>
    composites: {}
  }

  type KamarGetPayload<S extends boolean | null | undefined | KamarDefaultArgs> = $Result.GetResult<Prisma.$KamarPayload, S>

  type KamarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KamarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KamarCountAggregateInputType | true
    }

  export interface KamarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kamar'], meta: { name: 'Kamar' } }
    /**
     * Find zero or one Kamar that matches the filter.
     * @param {KamarFindUniqueArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KamarFindUniqueArgs>(args: SelectSubset<T, KamarFindUniqueArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Kamar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KamarFindUniqueOrThrowArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KamarFindUniqueOrThrowArgs>(args: SelectSubset<T, KamarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Kamar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarFindFirstArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KamarFindFirstArgs>(args?: SelectSubset<T, KamarFindFirstArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Kamar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarFindFirstOrThrowArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KamarFindFirstOrThrowArgs>(args?: SelectSubset<T, KamarFindFirstOrThrowArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Kamars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kamars
     * const kamars = await prisma.kamar.findMany()
     * 
     * // Get first 10 Kamars
     * const kamars = await prisma.kamar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kamarWithIdOnly = await prisma.kamar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KamarFindManyArgs>(args?: SelectSubset<T, KamarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Kamar.
     * @param {KamarCreateArgs} args - Arguments to create a Kamar.
     * @example
     * // Create one Kamar
     * const Kamar = await prisma.kamar.create({
     *   data: {
     *     // ... data to create a Kamar
     *   }
     * })
     * 
     */
    create<T extends KamarCreateArgs>(args: SelectSubset<T, KamarCreateArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Kamars.
     * @param {KamarCreateManyArgs} args - Arguments to create many Kamars.
     * @example
     * // Create many Kamars
     * const kamar = await prisma.kamar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KamarCreateManyArgs>(args?: SelectSubset<T, KamarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kamars and returns the data saved in the database.
     * @param {KamarCreateManyAndReturnArgs} args - Arguments to create many Kamars.
     * @example
     * // Create many Kamars
     * const kamar = await prisma.kamar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kamars and only return the `id`
     * const kamarWithIdOnly = await prisma.kamar.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KamarCreateManyAndReturnArgs>(args?: SelectSubset<T, KamarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Kamar.
     * @param {KamarDeleteArgs} args - Arguments to delete one Kamar.
     * @example
     * // Delete one Kamar
     * const Kamar = await prisma.kamar.delete({
     *   where: {
     *     // ... filter to delete one Kamar
     *   }
     * })
     * 
     */
    delete<T extends KamarDeleteArgs>(args: SelectSubset<T, KamarDeleteArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Kamar.
     * @param {KamarUpdateArgs} args - Arguments to update one Kamar.
     * @example
     * // Update one Kamar
     * const kamar = await prisma.kamar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KamarUpdateArgs>(args: SelectSubset<T, KamarUpdateArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Kamars.
     * @param {KamarDeleteManyArgs} args - Arguments to filter Kamars to delete.
     * @example
     * // Delete a few Kamars
     * const { count } = await prisma.kamar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KamarDeleteManyArgs>(args?: SelectSubset<T, KamarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kamars
     * const kamar = await prisma.kamar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KamarUpdateManyArgs>(args: SelectSubset<T, KamarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kamar.
     * @param {KamarUpsertArgs} args - Arguments to update or create a Kamar.
     * @example
     * // Update or create a Kamar
     * const kamar = await prisma.kamar.upsert({
     *   create: {
     *     // ... data to create a Kamar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kamar we want to update
     *   }
     * })
     */
    upsert<T extends KamarUpsertArgs>(args: SelectSubset<T, KamarUpsertArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarCountArgs} args - Arguments to filter Kamars to count.
     * @example
     * // Count the number of Kamars
     * const count = await prisma.kamar.count({
     *   where: {
     *     // ... the filter for the Kamars we want to count
     *   }
     * })
    **/
    count<T extends KamarCountArgs>(
      args?: Subset<T, KamarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KamarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KamarAggregateArgs>(args: Subset<T, KamarAggregateArgs>): Prisma.PrismaPromise<GetKamarAggregateType<T>>

    /**
     * Group by Kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarGroupByArgs} args - Group by arguments.
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
      T extends KamarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KamarGroupByArgs['orderBy'] }
        : { orderBy?: KamarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KamarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKamarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kamar model
   */
  readonly fields: KamarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kamar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KamarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    gambar<T extends Kamar$gambarArgs<ExtArgs> = {}>(args?: Subset<T, Kamar$gambarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findMany"> | Null>
    pemesanan<T extends Kamar$pemesananArgs<ExtArgs> = {}>(args?: Subset<T, Kamar$pemesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Kamar model
   */ 
  interface KamarFieldRefs {
    readonly id: FieldRef<"Kamar", 'String'>
    readonly hotelId: FieldRef<"Kamar", 'String'>
    readonly nama: FieldRef<"Kamar", 'String'>
    readonly deskripsi: FieldRef<"Kamar", 'String'>
    readonly harga: FieldRef<"Kamar", 'Float'>
    readonly kapasitas: FieldRef<"Kamar", 'Int'>
    readonly tipe: FieldRef<"Kamar", 'TipeKamar'>
    readonly status: FieldRef<"Kamar", 'StatusKamar'>
    readonly createdAt: FieldRef<"Kamar", 'DateTime'>
    readonly updatedAt: FieldRef<"Kamar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kamar findUnique
   */
  export type KamarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar findUniqueOrThrow
   */
  export type KamarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar findFirst
   */
  export type KamarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kamars.
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kamar findFirstOrThrow
   */
  export type KamarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kamars.
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kamar findMany
   */
  export type KamarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter, which Kamars to fetch.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kamars.
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kamar create
   */
  export type KamarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * The data needed to create a Kamar.
     */
    data: XOR<KamarCreateInput, KamarUncheckedCreateInput>
  }

  /**
   * Kamar createMany
   */
  export type KamarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kamars.
     */
    data: KamarCreateManyInput | KamarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kamar createManyAndReturn
   */
  export type KamarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Kamars.
     */
    data: KamarCreateManyInput | KamarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kamar update
   */
  export type KamarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * The data needed to update a Kamar.
     */
    data: XOR<KamarUpdateInput, KamarUncheckedUpdateInput>
    /**
     * Choose, which Kamar to update.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar updateMany
   */
  export type KamarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kamars.
     */
    data: XOR<KamarUpdateManyMutationInput, KamarUncheckedUpdateManyInput>
    /**
     * Filter which Kamars to update
     */
    where?: KamarWhereInput
  }

  /**
   * Kamar upsert
   */
  export type KamarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * The filter to search for the Kamar to update in case it exists.
     */
    where: KamarWhereUniqueInput
    /**
     * In case the Kamar found by the `where` argument doesn't exist, create a new Kamar with this data.
     */
    create: XOR<KamarCreateInput, KamarUncheckedCreateInput>
    /**
     * In case the Kamar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KamarUpdateInput, KamarUncheckedUpdateInput>
  }

  /**
   * Kamar delete
   */
  export type KamarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    /**
     * Filter which Kamar to delete.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar deleteMany
   */
  export type KamarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kamars to delete
     */
    where?: KamarWhereInput
  }

  /**
   * Kamar.gambar
   */
  export type Kamar$gambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    where?: GambarWhereInput
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    cursor?: GambarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Kamar.pemesanan
   */
  export type Kamar$pemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    where?: PemesananWhereInput
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    cursor?: PemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * Kamar without action
   */
  export type KamarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
  }


  /**
   * Model Pemesanan
   */

  export type AggregatePemesanan = {
    _count: PemesananCountAggregateOutputType | null
    _avg: PemesananAvgAggregateOutputType | null
    _sum: PemesananSumAggregateOutputType | null
    _min: PemesananMinAggregateOutputType | null
    _max: PemesananMaxAggregateOutputType | null
  }

  export type PemesananAvgAggregateOutputType = {
    totalHarga: number | null
    jumlahTamu: number | null
  }

  export type PemesananSumAggregateOutputType = {
    totalHarga: number | null
    jumlahTamu: number | null
  }

  export type PemesananMinAggregateOutputType = {
    id: string | null
    userId: string | null
    kamarId: string | null
    checkIn: Date | null
    checkOut: Date | null
    totalHarga: number | null
    status: $Enums.StatusPemesanan | null
    jumlahTamu: number | null
    permintaanKhusus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PemesananMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    kamarId: string | null
    checkIn: Date | null
    checkOut: Date | null
    totalHarga: number | null
    status: $Enums.StatusPemesanan | null
    jumlahTamu: number | null
    permintaanKhusus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PemesananCountAggregateOutputType = {
    id: number
    userId: number
    kamarId: number
    checkIn: number
    checkOut: number
    totalHarga: number
    status: number
    jumlahTamu: number
    permintaanKhusus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PemesananAvgAggregateInputType = {
    totalHarga?: true
    jumlahTamu?: true
  }

  export type PemesananSumAggregateInputType = {
    totalHarga?: true
    jumlahTamu?: true
  }

  export type PemesananMinAggregateInputType = {
    id?: true
    userId?: true
    kamarId?: true
    checkIn?: true
    checkOut?: true
    totalHarga?: true
    status?: true
    jumlahTamu?: true
    permintaanKhusus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PemesananMaxAggregateInputType = {
    id?: true
    userId?: true
    kamarId?: true
    checkIn?: true
    checkOut?: true
    totalHarga?: true
    status?: true
    jumlahTamu?: true
    permintaanKhusus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PemesananCountAggregateInputType = {
    id?: true
    userId?: true
    kamarId?: true
    checkIn?: true
    checkOut?: true
    totalHarga?: true
    status?: true
    jumlahTamu?: true
    permintaanKhusus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PemesananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pemesanan to aggregate.
     */
    where?: PemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pemesanans to fetch.
     */
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pemesanans
    **/
    _count?: true | PemesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PemesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PemesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PemesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PemesananMaxAggregateInputType
  }

  export type GetPemesananAggregateType<T extends PemesananAggregateArgs> = {
        [P in keyof T & keyof AggregatePemesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePemesanan[P]>
      : GetScalarType<T[P], AggregatePemesanan[P]>
  }




  export type PemesananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PemesananWhereInput
    orderBy?: PemesananOrderByWithAggregationInput | PemesananOrderByWithAggregationInput[]
    by: PemesananScalarFieldEnum[] | PemesananScalarFieldEnum
    having?: PemesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PemesananCountAggregateInputType | true
    _avg?: PemesananAvgAggregateInputType
    _sum?: PemesananSumAggregateInputType
    _min?: PemesananMinAggregateInputType
    _max?: PemesananMaxAggregateInputType
  }

  export type PemesananGroupByOutputType = {
    id: string
    userId: string
    kamarId: string
    checkIn: Date
    checkOut: Date
    totalHarga: number
    status: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus: string | null
    createdAt: Date
    updatedAt: Date
    _count: PemesananCountAggregateOutputType | null
    _avg: PemesananAvgAggregateOutputType | null
    _sum: PemesananSumAggregateOutputType | null
    _min: PemesananMinAggregateOutputType | null
    _max: PemesananMaxAggregateOutputType | null
  }

  type GetPemesananGroupByPayload<T extends PemesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PemesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PemesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PemesananGroupByOutputType[P]>
            : GetScalarType<T[P], PemesananGroupByOutputType[P]>
        }
      >
    >


  export type PemesananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kamarId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalHarga?: boolean
    status?: boolean
    jumlahTamu?: boolean
    permintaanKhusus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kamar?: boolean | KamarDefaultArgs<ExtArgs>
    pembayaran?: boolean | Pemesanan$pembayaranArgs<ExtArgs>
  }, ExtArgs["result"]["pemesanan"]>

  export type PemesananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kamarId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalHarga?: boolean
    status?: boolean
    jumlahTamu?: boolean
    permintaanKhusus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kamar?: boolean | KamarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pemesanan"]>

  export type PemesananSelectScalar = {
    id?: boolean
    userId?: boolean
    kamarId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalHarga?: boolean
    status?: boolean
    jumlahTamu?: boolean
    permintaanKhusus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PemesananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kamar?: boolean | KamarDefaultArgs<ExtArgs>
    pembayaran?: boolean | Pemesanan$pembayaranArgs<ExtArgs>
  }
  export type PemesananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kamar?: boolean | KamarDefaultArgs<ExtArgs>
  }

  export type $PemesananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pemesanan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      kamar: Prisma.$KamarPayload<ExtArgs>
      pembayaran: Prisma.$PembayaranPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      kamarId: string
      checkIn: Date
      checkOut: Date
      totalHarga: number
      status: $Enums.StatusPemesanan
      jumlahTamu: number
      permintaanKhusus: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pemesanan"]>
    composites: {}
  }

  type PemesananGetPayload<S extends boolean | null | undefined | PemesananDefaultArgs> = $Result.GetResult<Prisma.$PemesananPayload, S>

  type PemesananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PemesananFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PemesananCountAggregateInputType | true
    }

  export interface PemesananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pemesanan'], meta: { name: 'Pemesanan' } }
    /**
     * Find zero or one Pemesanan that matches the filter.
     * @param {PemesananFindUniqueArgs} args - Arguments to find a Pemesanan
     * @example
     * // Get one Pemesanan
     * const pemesanan = await prisma.pemesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PemesananFindUniqueArgs>(args: SelectSubset<T, PemesananFindUniqueArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pemesanan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PemesananFindUniqueOrThrowArgs} args - Arguments to find a Pemesanan
     * @example
     * // Get one Pemesanan
     * const pemesanan = await prisma.pemesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PemesananFindUniqueOrThrowArgs>(args: SelectSubset<T, PemesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pemesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananFindFirstArgs} args - Arguments to find a Pemesanan
     * @example
     * // Get one Pemesanan
     * const pemesanan = await prisma.pemesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PemesananFindFirstArgs>(args?: SelectSubset<T, PemesananFindFirstArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pemesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananFindFirstOrThrowArgs} args - Arguments to find a Pemesanan
     * @example
     * // Get one Pemesanan
     * const pemesanan = await prisma.pemesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PemesananFindFirstOrThrowArgs>(args?: SelectSubset<T, PemesananFindFirstOrThrowArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pemesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pemesanans
     * const pemesanans = await prisma.pemesanan.findMany()
     * 
     * // Get first 10 Pemesanans
     * const pemesanans = await prisma.pemesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pemesananWithIdOnly = await prisma.pemesanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PemesananFindManyArgs>(args?: SelectSubset<T, PemesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pemesanan.
     * @param {PemesananCreateArgs} args - Arguments to create a Pemesanan.
     * @example
     * // Create one Pemesanan
     * const Pemesanan = await prisma.pemesanan.create({
     *   data: {
     *     // ... data to create a Pemesanan
     *   }
     * })
     * 
     */
    create<T extends PemesananCreateArgs>(args: SelectSubset<T, PemesananCreateArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pemesanans.
     * @param {PemesananCreateManyArgs} args - Arguments to create many Pemesanans.
     * @example
     * // Create many Pemesanans
     * const pemesanan = await prisma.pemesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PemesananCreateManyArgs>(args?: SelectSubset<T, PemesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pemesanans and returns the data saved in the database.
     * @param {PemesananCreateManyAndReturnArgs} args - Arguments to create many Pemesanans.
     * @example
     * // Create many Pemesanans
     * const pemesanan = await prisma.pemesanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pemesanans and only return the `id`
     * const pemesananWithIdOnly = await prisma.pemesanan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PemesananCreateManyAndReturnArgs>(args?: SelectSubset<T, PemesananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pemesanan.
     * @param {PemesananDeleteArgs} args - Arguments to delete one Pemesanan.
     * @example
     * // Delete one Pemesanan
     * const Pemesanan = await prisma.pemesanan.delete({
     *   where: {
     *     // ... filter to delete one Pemesanan
     *   }
     * })
     * 
     */
    delete<T extends PemesananDeleteArgs>(args: SelectSubset<T, PemesananDeleteArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pemesanan.
     * @param {PemesananUpdateArgs} args - Arguments to update one Pemesanan.
     * @example
     * // Update one Pemesanan
     * const pemesanan = await prisma.pemesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PemesananUpdateArgs>(args: SelectSubset<T, PemesananUpdateArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pemesanans.
     * @param {PemesananDeleteManyArgs} args - Arguments to filter Pemesanans to delete.
     * @example
     * // Delete a few Pemesanans
     * const { count } = await prisma.pemesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PemesananDeleteManyArgs>(args?: SelectSubset<T, PemesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pemesanans
     * const pemesanan = await prisma.pemesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PemesananUpdateManyArgs>(args: SelectSubset<T, PemesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pemesanan.
     * @param {PemesananUpsertArgs} args - Arguments to update or create a Pemesanan.
     * @example
     * // Update or create a Pemesanan
     * const pemesanan = await prisma.pemesanan.upsert({
     *   create: {
     *     // ... data to create a Pemesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pemesanan we want to update
     *   }
     * })
     */
    upsert<T extends PemesananUpsertArgs>(args: SelectSubset<T, PemesananUpsertArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananCountArgs} args - Arguments to filter Pemesanans to count.
     * @example
     * // Count the number of Pemesanans
     * const count = await prisma.pemesanan.count({
     *   where: {
     *     // ... the filter for the Pemesanans we want to count
     *   }
     * })
    **/
    count<T extends PemesananCountArgs>(
      args?: Subset<T, PemesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PemesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PemesananAggregateArgs>(args: Subset<T, PemesananAggregateArgs>): Prisma.PrismaPromise<GetPemesananAggregateType<T>>

    /**
     * Group by Pemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananGroupByArgs} args - Group by arguments.
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
      T extends PemesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PemesananGroupByArgs['orderBy'] }
        : { orderBy?: PemesananGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PemesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPemesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pemesanan model
   */
  readonly fields: PemesananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pemesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PemesananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    kamar<T extends KamarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KamarDefaultArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pembayaran<T extends Pemesanan$pembayaranArgs<ExtArgs> = {}>(args?: Subset<T, Pemesanan$pembayaranArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Pemesanan model
   */ 
  interface PemesananFieldRefs {
    readonly id: FieldRef<"Pemesanan", 'String'>
    readonly userId: FieldRef<"Pemesanan", 'String'>
    readonly kamarId: FieldRef<"Pemesanan", 'String'>
    readonly checkIn: FieldRef<"Pemesanan", 'DateTime'>
    readonly checkOut: FieldRef<"Pemesanan", 'DateTime'>
    readonly totalHarga: FieldRef<"Pemesanan", 'Float'>
    readonly status: FieldRef<"Pemesanan", 'StatusPemesanan'>
    readonly jumlahTamu: FieldRef<"Pemesanan", 'Int'>
    readonly permintaanKhusus: FieldRef<"Pemesanan", 'String'>
    readonly createdAt: FieldRef<"Pemesanan", 'DateTime'>
    readonly updatedAt: FieldRef<"Pemesanan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pemesanan findUnique
   */
  export type PemesananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanan to fetch.
     */
    where: PemesananWhereUniqueInput
  }

  /**
   * Pemesanan findUniqueOrThrow
   */
  export type PemesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanan to fetch.
     */
    where: PemesananWhereUniqueInput
  }

  /**
   * Pemesanan findFirst
   */
  export type PemesananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanan to fetch.
     */
    where?: PemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pemesanans to fetch.
     */
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pemesanans.
     */
    cursor?: PemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pemesanans.
     */
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * Pemesanan findFirstOrThrow
   */
  export type PemesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanan to fetch.
     */
    where?: PemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pemesanans to fetch.
     */
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pemesanans.
     */
    cursor?: PemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pemesanans.
     */
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * Pemesanan findMany
   */
  export type PemesananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanans to fetch.
     */
    where?: PemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pemesanans to fetch.
     */
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pemesanans.
     */
    cursor?: PemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pemesanans.
     */
    skip?: number
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * Pemesanan create
   */
  export type PemesananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * The data needed to create a Pemesanan.
     */
    data: XOR<PemesananCreateInput, PemesananUncheckedCreateInput>
  }

  /**
   * Pemesanan createMany
   */
  export type PemesananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pemesanans.
     */
    data: PemesananCreateManyInput | PemesananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pemesanan createManyAndReturn
   */
  export type PemesananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pemesanans.
     */
    data: PemesananCreateManyInput | PemesananCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pemesanan update
   */
  export type PemesananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * The data needed to update a Pemesanan.
     */
    data: XOR<PemesananUpdateInput, PemesananUncheckedUpdateInput>
    /**
     * Choose, which Pemesanan to update.
     */
    where: PemesananWhereUniqueInput
  }

  /**
   * Pemesanan updateMany
   */
  export type PemesananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pemesanans.
     */
    data: XOR<PemesananUpdateManyMutationInput, PemesananUncheckedUpdateManyInput>
    /**
     * Filter which Pemesanans to update
     */
    where?: PemesananWhereInput
  }

  /**
   * Pemesanan upsert
   */
  export type PemesananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * The filter to search for the Pemesanan to update in case it exists.
     */
    where: PemesananWhereUniqueInput
    /**
     * In case the Pemesanan found by the `where` argument doesn't exist, create a new Pemesanan with this data.
     */
    create: XOR<PemesananCreateInput, PemesananUncheckedCreateInput>
    /**
     * In case the Pemesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PemesananUpdateInput, PemesananUncheckedUpdateInput>
  }

  /**
   * Pemesanan delete
   */
  export type PemesananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter which Pemesanan to delete.
     */
    where: PemesananWhereUniqueInput
  }

  /**
   * Pemesanan deleteMany
   */
  export type PemesananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pemesanans to delete
     */
    where?: PemesananWhereInput
  }

  /**
   * Pemesanan.pembayaran
   */
  export type Pemesanan$pembayaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    where?: PembayaranWhereInput
  }

  /**
   * Pemesanan without action
   */
  export type PemesananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
  }


  /**
   * Model Pembayaran
   */

  export type AggregatePembayaran = {
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  export type PembayaranAvgAggregateOutputType = {
    jumlah: number | null
  }

  export type PembayaranSumAggregateOutputType = {
    jumlah: number | null
  }

  export type PembayaranMinAggregateOutputType = {
    id: string | null
    pemesananId: string | null
    jumlah: number | null
    metodePembayaran: string | null
    status: $Enums.StatusPembayaran | null
    idTransaksi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PembayaranMaxAggregateOutputType = {
    id: string | null
    pemesananId: string | null
    jumlah: number | null
    metodePembayaran: string | null
    status: $Enums.StatusPembayaran | null
    idTransaksi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PembayaranCountAggregateOutputType = {
    id: number
    pemesananId: number
    jumlah: number
    metodePembayaran: number
    status: number
    idTransaksi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PembayaranAvgAggregateInputType = {
    jumlah?: true
  }

  export type PembayaranSumAggregateInputType = {
    jumlah?: true
  }

  export type PembayaranMinAggregateInputType = {
    id?: true
    pemesananId?: true
    jumlah?: true
    metodePembayaran?: true
    status?: true
    idTransaksi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PembayaranMaxAggregateInputType = {
    id?: true
    pemesananId?: true
    jumlah?: true
    metodePembayaran?: true
    status?: true
    idTransaksi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PembayaranCountAggregateInputType = {
    id?: true
    pemesananId?: true
    jumlah?: true
    metodePembayaran?: true
    status?: true
    idTransaksi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PembayaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembayaran to aggregate.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembayarans
    **/
    _count?: true | PembayaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembayaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembayaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembayaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembayaranMaxAggregateInputType
  }

  export type GetPembayaranAggregateType<T extends PembayaranAggregateArgs> = {
        [P in keyof T & keyof AggregatePembayaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembayaran[P]>
      : GetScalarType<T[P], AggregatePembayaran[P]>
  }




  export type PembayaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembayaranWhereInput
    orderBy?: PembayaranOrderByWithAggregationInput | PembayaranOrderByWithAggregationInput[]
    by: PembayaranScalarFieldEnum[] | PembayaranScalarFieldEnum
    having?: PembayaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembayaranCountAggregateInputType | true
    _avg?: PembayaranAvgAggregateInputType
    _sum?: PembayaranSumAggregateInputType
    _min?: PembayaranMinAggregateInputType
    _max?: PembayaranMaxAggregateInputType
  }

  export type PembayaranGroupByOutputType = {
    id: string
    pemesananId: string
    jumlah: number
    metodePembayaran: string
    status: $Enums.StatusPembayaran
    idTransaksi: string | null
    createdAt: Date
    updatedAt: Date
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  type GetPembayaranGroupByPayload<T extends PembayaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembayaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembayaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
            : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
        }
      >
    >


  export type PembayaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pemesananId?: boolean
    jumlah?: boolean
    metodePembayaran?: boolean
    status?: boolean
    idTransaksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pemesanan?: boolean | PemesananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pemesananId?: boolean
    jumlah?: boolean
    metodePembayaran?: boolean
    status?: boolean
    idTransaksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pemesanan?: boolean | PemesananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectScalar = {
    id?: boolean
    pemesananId?: boolean
    jumlah?: boolean
    metodePembayaran?: boolean
    status?: boolean
    idTransaksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PembayaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pemesanan?: boolean | PemesananDefaultArgs<ExtArgs>
  }
  export type PembayaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pemesanan?: boolean | PemesananDefaultArgs<ExtArgs>
  }

  export type $PembayaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembayaran"
    objects: {
      pemesanan: Prisma.$PemesananPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pemesananId: string
      jumlah: number
      metodePembayaran: string
      status: $Enums.StatusPembayaran
      idTransaksi: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pembayaran"]>
    composites: {}
  }

  type PembayaranGetPayload<S extends boolean | null | undefined | PembayaranDefaultArgs> = $Result.GetResult<Prisma.$PembayaranPayload, S>

  type PembayaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PembayaranFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PembayaranCountAggregateInputType | true
    }

  export interface PembayaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembayaran'], meta: { name: 'Pembayaran' } }
    /**
     * Find zero or one Pembayaran that matches the filter.
     * @param {PembayaranFindUniqueArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembayaranFindUniqueArgs>(args: SelectSubset<T, PembayaranFindUniqueArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pembayaran that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PembayaranFindUniqueOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembayaranFindUniqueOrThrowArgs>(args: SelectSubset<T, PembayaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pembayaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindFirstArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembayaranFindFirstArgs>(args?: SelectSubset<T, PembayaranFindFirstArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pembayaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindFirstOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembayaranFindFirstOrThrowArgs>(args?: SelectSubset<T, PembayaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pembayarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany()
     * 
     * // Get first 10 Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PembayaranFindManyArgs>(args?: SelectSubset<T, PembayaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pembayaran.
     * @param {PembayaranCreateArgs} args - Arguments to create a Pembayaran.
     * @example
     * // Create one Pembayaran
     * const Pembayaran = await prisma.pembayaran.create({
     *   data: {
     *     // ... data to create a Pembayaran
     *   }
     * })
     * 
     */
    create<T extends PembayaranCreateArgs>(args: SelectSubset<T, PembayaranCreateArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pembayarans.
     * @param {PembayaranCreateManyArgs} args - Arguments to create many Pembayarans.
     * @example
     * // Create many Pembayarans
     * const pembayaran = await prisma.pembayaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembayaranCreateManyArgs>(args?: SelectSubset<T, PembayaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pembayarans and returns the data saved in the database.
     * @param {PembayaranCreateManyAndReturnArgs} args - Arguments to create many Pembayarans.
     * @example
     * // Create many Pembayarans
     * const pembayaran = await prisma.pembayaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pembayarans and only return the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembayaranCreateManyAndReturnArgs>(args?: SelectSubset<T, PembayaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pembayaran.
     * @param {PembayaranDeleteArgs} args - Arguments to delete one Pembayaran.
     * @example
     * // Delete one Pembayaran
     * const Pembayaran = await prisma.pembayaran.delete({
     *   where: {
     *     // ... filter to delete one Pembayaran
     *   }
     * })
     * 
     */
    delete<T extends PembayaranDeleteArgs>(args: SelectSubset<T, PembayaranDeleteArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pembayaran.
     * @param {PembayaranUpdateArgs} args - Arguments to update one Pembayaran.
     * @example
     * // Update one Pembayaran
     * const pembayaran = await prisma.pembayaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembayaranUpdateArgs>(args: SelectSubset<T, PembayaranUpdateArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pembayarans.
     * @param {PembayaranDeleteManyArgs} args - Arguments to filter Pembayarans to delete.
     * @example
     * // Delete a few Pembayarans
     * const { count } = await prisma.pembayaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembayaranDeleteManyArgs>(args?: SelectSubset<T, PembayaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembayarans
     * const pembayaran = await prisma.pembayaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembayaranUpdateManyArgs>(args: SelectSubset<T, PembayaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pembayaran.
     * @param {PembayaranUpsertArgs} args - Arguments to update or create a Pembayaran.
     * @example
     * // Update or create a Pembayaran
     * const pembayaran = await prisma.pembayaran.upsert({
     *   create: {
     *     // ... data to create a Pembayaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembayaran we want to update
     *   }
     * })
     */
    upsert<T extends PembayaranUpsertArgs>(args: SelectSubset<T, PembayaranUpsertArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranCountArgs} args - Arguments to filter Pembayarans to count.
     * @example
     * // Count the number of Pembayarans
     * const count = await prisma.pembayaran.count({
     *   where: {
     *     // ... the filter for the Pembayarans we want to count
     *   }
     * })
    **/
    count<T extends PembayaranCountArgs>(
      args?: Subset<T, PembayaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembayaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PembayaranAggregateArgs>(args: Subset<T, PembayaranAggregateArgs>): Prisma.PrismaPromise<GetPembayaranAggregateType<T>>

    /**
     * Group by Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranGroupByArgs} args - Group by arguments.
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
      T extends PembayaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembayaranGroupByArgs['orderBy'] }
        : { orderBy?: PembayaranGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PembayaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembayaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembayaran model
   */
  readonly fields: PembayaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembayaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembayaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pemesanan<T extends PemesananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PemesananDefaultArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Pembayaran model
   */ 
  interface PembayaranFieldRefs {
    readonly id: FieldRef<"Pembayaran", 'String'>
    readonly pemesananId: FieldRef<"Pembayaran", 'String'>
    readonly jumlah: FieldRef<"Pembayaran", 'Float'>
    readonly metodePembayaran: FieldRef<"Pembayaran", 'String'>
    readonly status: FieldRef<"Pembayaran", 'StatusPembayaran'>
    readonly idTransaksi: FieldRef<"Pembayaran", 'String'>
    readonly createdAt: FieldRef<"Pembayaran", 'DateTime'>
    readonly updatedAt: FieldRef<"Pembayaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pembayaran findUnique
   */
  export type PembayaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran findUniqueOrThrow
   */
  export type PembayaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran findFirst
   */
  export type PembayaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran findFirstOrThrow
   */
  export type PembayaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran findMany
   */
  export type PembayaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayarans to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran create
   */
  export type PembayaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembayaran.
     */
    data: XOR<PembayaranCreateInput, PembayaranUncheckedCreateInput>
  }

  /**
   * Pembayaran createMany
   */
  export type PembayaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembayarans.
     */
    data: PembayaranCreateManyInput | PembayaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pembayaran createManyAndReturn
   */
  export type PembayaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pembayarans.
     */
    data: PembayaranCreateManyInput | PembayaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembayaran update
   */
  export type PembayaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembayaran.
     */
    data: XOR<PembayaranUpdateInput, PembayaranUncheckedUpdateInput>
    /**
     * Choose, which Pembayaran to update.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran updateMany
   */
  export type PembayaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembayarans.
     */
    data: XOR<PembayaranUpdateManyMutationInput, PembayaranUncheckedUpdateManyInput>
    /**
     * Filter which Pembayarans to update
     */
    where?: PembayaranWhereInput
  }

  /**
   * Pembayaran upsert
   */
  export type PembayaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembayaran to update in case it exists.
     */
    where: PembayaranWhereUniqueInput
    /**
     * In case the Pembayaran found by the `where` argument doesn't exist, create a new Pembayaran with this data.
     */
    create: XOR<PembayaranCreateInput, PembayaranUncheckedCreateInput>
    /**
     * In case the Pembayaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembayaranUpdateInput, PembayaranUncheckedUpdateInput>
  }

  /**
   * Pembayaran delete
   */
  export type PembayaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter which Pembayaran to delete.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran deleteMany
   */
  export type PembayaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembayarans to delete
     */
    where?: PembayaranWhereInput
  }

  /**
   * Pembayaran without action
   */
  export type PembayaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
  }


  /**
   * Model Ulasan
   */

  export type AggregateUlasan = {
    _count: UlasanCountAggregateOutputType | null
    _avg: UlasanAvgAggregateOutputType | null
    _sum: UlasanSumAggregateOutputType | null
    _min: UlasanMinAggregateOutputType | null
    _max: UlasanMaxAggregateOutputType | null
  }

  export type UlasanAvgAggregateOutputType = {
    rating: number | null
  }

  export type UlasanSumAggregateOutputType = {
    rating: number | null
  }

  export type UlasanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    hotelId: string | null
    rating: number | null
    komentar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UlasanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    hotelId: string | null
    rating: number | null
    komentar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UlasanCountAggregateOutputType = {
    id: number
    userId: number
    hotelId: number
    rating: number
    komentar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UlasanAvgAggregateInputType = {
    rating?: true
  }

  export type UlasanSumAggregateInputType = {
    rating?: true
  }

  export type UlasanMinAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    rating?: true
    komentar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UlasanMaxAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    rating?: true
    komentar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UlasanCountAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    rating?: true
    komentar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UlasanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ulasan to aggregate.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ulasans
    **/
    _count?: true | UlasanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UlasanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UlasanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UlasanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UlasanMaxAggregateInputType
  }

  export type GetUlasanAggregateType<T extends UlasanAggregateArgs> = {
        [P in keyof T & keyof AggregateUlasan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUlasan[P]>
      : GetScalarType<T[P], AggregateUlasan[P]>
  }




  export type UlasanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UlasanWhereInput
    orderBy?: UlasanOrderByWithAggregationInput | UlasanOrderByWithAggregationInput[]
    by: UlasanScalarFieldEnum[] | UlasanScalarFieldEnum
    having?: UlasanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UlasanCountAggregateInputType | true
    _avg?: UlasanAvgAggregateInputType
    _sum?: UlasanSumAggregateInputType
    _min?: UlasanMinAggregateInputType
    _max?: UlasanMaxAggregateInputType
  }

  export type UlasanGroupByOutputType = {
    id: string
    userId: string
    hotelId: string
    rating: number
    komentar: string
    createdAt: Date
    updatedAt: Date
    _count: UlasanCountAggregateOutputType | null
    _avg: UlasanAvgAggregateOutputType | null
    _sum: UlasanSumAggregateOutputType | null
    _min: UlasanMinAggregateOutputType | null
    _max: UlasanMaxAggregateOutputType | null
  }

  type GetUlasanGroupByPayload<T extends UlasanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UlasanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UlasanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UlasanGroupByOutputType[P]>
            : GetScalarType<T[P], UlasanGroupByOutputType[P]>
        }
      >
    >


  export type UlasanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hotelId?: boolean
    rating?: boolean
    komentar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    gambar?: boolean | Ulasan$gambarArgs<ExtArgs>
    _count?: boolean | UlasanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ulasan"]>

  export type UlasanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hotelId?: boolean
    rating?: boolean
    komentar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ulasan"]>

  export type UlasanSelectScalar = {
    id?: boolean
    userId?: boolean
    hotelId?: boolean
    rating?: boolean
    komentar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UlasanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    gambar?: boolean | Ulasan$gambarArgs<ExtArgs>
    _count?: boolean | UlasanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UlasanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $UlasanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ulasan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
      gambar: Prisma.$GambarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      hotelId: string
      rating: number
      komentar: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ulasan"]>
    composites: {}
  }

  type UlasanGetPayload<S extends boolean | null | undefined | UlasanDefaultArgs> = $Result.GetResult<Prisma.$UlasanPayload, S>

  type UlasanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UlasanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UlasanCountAggregateInputType | true
    }

  export interface UlasanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ulasan'], meta: { name: 'Ulasan' } }
    /**
     * Find zero or one Ulasan that matches the filter.
     * @param {UlasanFindUniqueArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UlasanFindUniqueArgs>(args: SelectSubset<T, UlasanFindUniqueArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ulasan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UlasanFindUniqueOrThrowArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UlasanFindUniqueOrThrowArgs>(args: SelectSubset<T, UlasanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ulasan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanFindFirstArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UlasanFindFirstArgs>(args?: SelectSubset<T, UlasanFindFirstArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ulasan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanFindFirstOrThrowArgs} args - Arguments to find a Ulasan
     * @example
     * // Get one Ulasan
     * const ulasan = await prisma.ulasan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UlasanFindFirstOrThrowArgs>(args?: SelectSubset<T, UlasanFindFirstOrThrowArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ulasans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ulasans
     * const ulasans = await prisma.ulasan.findMany()
     * 
     * // Get first 10 Ulasans
     * const ulasans = await prisma.ulasan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ulasanWithIdOnly = await prisma.ulasan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UlasanFindManyArgs>(args?: SelectSubset<T, UlasanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ulasan.
     * @param {UlasanCreateArgs} args - Arguments to create a Ulasan.
     * @example
     * // Create one Ulasan
     * const Ulasan = await prisma.ulasan.create({
     *   data: {
     *     // ... data to create a Ulasan
     *   }
     * })
     * 
     */
    create<T extends UlasanCreateArgs>(args: SelectSubset<T, UlasanCreateArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ulasans.
     * @param {UlasanCreateManyArgs} args - Arguments to create many Ulasans.
     * @example
     * // Create many Ulasans
     * const ulasan = await prisma.ulasan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UlasanCreateManyArgs>(args?: SelectSubset<T, UlasanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ulasans and returns the data saved in the database.
     * @param {UlasanCreateManyAndReturnArgs} args - Arguments to create many Ulasans.
     * @example
     * // Create many Ulasans
     * const ulasan = await prisma.ulasan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ulasans and only return the `id`
     * const ulasanWithIdOnly = await prisma.ulasan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UlasanCreateManyAndReturnArgs>(args?: SelectSubset<T, UlasanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ulasan.
     * @param {UlasanDeleteArgs} args - Arguments to delete one Ulasan.
     * @example
     * // Delete one Ulasan
     * const Ulasan = await prisma.ulasan.delete({
     *   where: {
     *     // ... filter to delete one Ulasan
     *   }
     * })
     * 
     */
    delete<T extends UlasanDeleteArgs>(args: SelectSubset<T, UlasanDeleteArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ulasan.
     * @param {UlasanUpdateArgs} args - Arguments to update one Ulasan.
     * @example
     * // Update one Ulasan
     * const ulasan = await prisma.ulasan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UlasanUpdateArgs>(args: SelectSubset<T, UlasanUpdateArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ulasans.
     * @param {UlasanDeleteManyArgs} args - Arguments to filter Ulasans to delete.
     * @example
     * // Delete a few Ulasans
     * const { count } = await prisma.ulasan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UlasanDeleteManyArgs>(args?: SelectSubset<T, UlasanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ulasans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ulasans
     * const ulasan = await prisma.ulasan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UlasanUpdateManyArgs>(args: SelectSubset<T, UlasanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ulasan.
     * @param {UlasanUpsertArgs} args - Arguments to update or create a Ulasan.
     * @example
     * // Update or create a Ulasan
     * const ulasan = await prisma.ulasan.upsert({
     *   create: {
     *     // ... data to create a Ulasan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ulasan we want to update
     *   }
     * })
     */
    upsert<T extends UlasanUpsertArgs>(args: SelectSubset<T, UlasanUpsertArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ulasans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanCountArgs} args - Arguments to filter Ulasans to count.
     * @example
     * // Count the number of Ulasans
     * const count = await prisma.ulasan.count({
     *   where: {
     *     // ... the filter for the Ulasans we want to count
     *   }
     * })
    **/
    count<T extends UlasanCountArgs>(
      args?: Subset<T, UlasanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UlasanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ulasan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UlasanAggregateArgs>(args: Subset<T, UlasanAggregateArgs>): Prisma.PrismaPromise<GetUlasanAggregateType<T>>

    /**
     * Group by Ulasan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UlasanGroupByArgs} args - Group by arguments.
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
      T extends UlasanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UlasanGroupByArgs['orderBy'] }
        : { orderBy?: UlasanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UlasanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUlasanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ulasan model
   */
  readonly fields: UlasanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ulasan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UlasanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    gambar<T extends Ulasan$gambarArgs<ExtArgs> = {}>(args?: Subset<T, Ulasan$gambarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Ulasan model
   */ 
  interface UlasanFieldRefs {
    readonly id: FieldRef<"Ulasan", 'String'>
    readonly userId: FieldRef<"Ulasan", 'String'>
    readonly hotelId: FieldRef<"Ulasan", 'String'>
    readonly rating: FieldRef<"Ulasan", 'Int'>
    readonly komentar: FieldRef<"Ulasan", 'String'>
    readonly createdAt: FieldRef<"Ulasan", 'DateTime'>
    readonly updatedAt: FieldRef<"Ulasan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ulasan findUnique
   */
  export type UlasanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where: UlasanWhereUniqueInput
  }

  /**
   * Ulasan findUniqueOrThrow
   */
  export type UlasanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where: UlasanWhereUniqueInput
  }

  /**
   * Ulasan findFirst
   */
  export type UlasanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ulasans.
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ulasans.
     */
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * Ulasan findFirstOrThrow
   */
  export type UlasanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasan to fetch.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ulasans.
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ulasans.
     */
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * Ulasan findMany
   */
  export type UlasanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter, which Ulasans to fetch.
     */
    where?: UlasanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ulasans to fetch.
     */
    orderBy?: UlasanOrderByWithRelationInput | UlasanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ulasans.
     */
    cursor?: UlasanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ulasans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ulasans.
     */
    skip?: number
    distinct?: UlasanScalarFieldEnum | UlasanScalarFieldEnum[]
  }

  /**
   * Ulasan create
   */
  export type UlasanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * The data needed to create a Ulasan.
     */
    data: XOR<UlasanCreateInput, UlasanUncheckedCreateInput>
  }

  /**
   * Ulasan createMany
   */
  export type UlasanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ulasans.
     */
    data: UlasanCreateManyInput | UlasanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ulasan createManyAndReturn
   */
  export type UlasanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ulasans.
     */
    data: UlasanCreateManyInput | UlasanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ulasan update
   */
  export type UlasanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * The data needed to update a Ulasan.
     */
    data: XOR<UlasanUpdateInput, UlasanUncheckedUpdateInput>
    /**
     * Choose, which Ulasan to update.
     */
    where: UlasanWhereUniqueInput
  }

  /**
   * Ulasan updateMany
   */
  export type UlasanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ulasans.
     */
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyInput>
    /**
     * Filter which Ulasans to update
     */
    where?: UlasanWhereInput
  }

  /**
   * Ulasan upsert
   */
  export type UlasanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * The filter to search for the Ulasan to update in case it exists.
     */
    where: UlasanWhereUniqueInput
    /**
     * In case the Ulasan found by the `where` argument doesn't exist, create a new Ulasan with this data.
     */
    create: XOR<UlasanCreateInput, UlasanUncheckedCreateInput>
    /**
     * In case the Ulasan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UlasanUpdateInput, UlasanUncheckedUpdateInput>
  }

  /**
   * Ulasan delete
   */
  export type UlasanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    /**
     * Filter which Ulasan to delete.
     */
    where: UlasanWhereUniqueInput
  }

  /**
   * Ulasan deleteMany
   */
  export type UlasanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ulasans to delete
     */
    where?: UlasanWhereInput
  }

  /**
   * Ulasan.gambar
   */
  export type Ulasan$gambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    where?: GambarWhereInput
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    cursor?: GambarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Ulasan without action
   */
  export type UlasanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
  }


  /**
   * Model Gambar
   */

  export type AggregateGambar = {
    _count: GambarCountAggregateOutputType | null
    _min: GambarMinAggregateOutputType | null
    _max: GambarMaxAggregateOutputType | null
  }

  export type GambarMinAggregateOutputType = {
    id: string | null
    url: string | null
    hotelId: string | null
    kamarId: string | null
    ulasanId: string | null
    createdAt: Date | null
  }

  export type GambarMaxAggregateOutputType = {
    id: string | null
    url: string | null
    hotelId: string | null
    kamarId: string | null
    ulasanId: string | null
    createdAt: Date | null
  }

  export type GambarCountAggregateOutputType = {
    id: number
    url: number
    hotelId: number
    kamarId: number
    ulasanId: number
    createdAt: number
    _all: number
  }


  export type GambarMinAggregateInputType = {
    id?: true
    url?: true
    hotelId?: true
    kamarId?: true
    ulasanId?: true
    createdAt?: true
  }

  export type GambarMaxAggregateInputType = {
    id?: true
    url?: true
    hotelId?: true
    kamarId?: true
    ulasanId?: true
    createdAt?: true
  }

  export type GambarCountAggregateInputType = {
    id?: true
    url?: true
    hotelId?: true
    kamarId?: true
    ulasanId?: true
    createdAt?: true
    _all?: true
  }

  export type GambarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gambar to aggregate.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gambars
    **/
    _count?: true | GambarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GambarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GambarMaxAggregateInputType
  }

  export type GetGambarAggregateType<T extends GambarAggregateArgs> = {
        [P in keyof T & keyof AggregateGambar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGambar[P]>
      : GetScalarType<T[P], AggregateGambar[P]>
  }




  export type GambarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GambarWhereInput
    orderBy?: GambarOrderByWithAggregationInput | GambarOrderByWithAggregationInput[]
    by: GambarScalarFieldEnum[] | GambarScalarFieldEnum
    having?: GambarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GambarCountAggregateInputType | true
    _min?: GambarMinAggregateInputType
    _max?: GambarMaxAggregateInputType
  }

  export type GambarGroupByOutputType = {
    id: string
    url: string
    hotelId: string | null
    kamarId: string | null
    ulasanId: string | null
    createdAt: Date
    _count: GambarCountAggregateOutputType | null
    _min: GambarMinAggregateOutputType | null
    _max: GambarMaxAggregateOutputType | null
  }

  type GetGambarGroupByPayload<T extends GambarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GambarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GambarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GambarGroupByOutputType[P]>
            : GetScalarType<T[P], GambarGroupByOutputType[P]>
        }
      >
    >


  export type GambarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    hotelId?: boolean
    kamarId?: boolean
    ulasanId?: boolean
    createdAt?: boolean
    hotel?: boolean | Gambar$hotelArgs<ExtArgs>
    kamar?: boolean | Gambar$kamarArgs<ExtArgs>
    ulasan?: boolean | Gambar$ulasanArgs<ExtArgs>
  }, ExtArgs["result"]["gambar"]>

  export type GambarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    hotelId?: boolean
    kamarId?: boolean
    ulasanId?: boolean
    createdAt?: boolean
    hotel?: boolean | Gambar$hotelArgs<ExtArgs>
    kamar?: boolean | Gambar$kamarArgs<ExtArgs>
    ulasan?: boolean | Gambar$ulasanArgs<ExtArgs>
  }, ExtArgs["result"]["gambar"]>

  export type GambarSelectScalar = {
    id?: boolean
    url?: boolean
    hotelId?: boolean
    kamarId?: boolean
    ulasanId?: boolean
    createdAt?: boolean
  }

  export type GambarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | Gambar$hotelArgs<ExtArgs>
    kamar?: boolean | Gambar$kamarArgs<ExtArgs>
    ulasan?: boolean | Gambar$ulasanArgs<ExtArgs>
  }
  export type GambarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | Gambar$hotelArgs<ExtArgs>
    kamar?: boolean | Gambar$kamarArgs<ExtArgs>
    ulasan?: boolean | Gambar$ulasanArgs<ExtArgs>
  }

  export type $GambarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gambar"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs> | null
      kamar: Prisma.$KamarPayload<ExtArgs> | null
      ulasan: Prisma.$UlasanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      hotelId: string | null
      kamarId: string | null
      ulasanId: string | null
      createdAt: Date
    }, ExtArgs["result"]["gambar"]>
    composites: {}
  }

  type GambarGetPayload<S extends boolean | null | undefined | GambarDefaultArgs> = $Result.GetResult<Prisma.$GambarPayload, S>

  type GambarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GambarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GambarCountAggregateInputType | true
    }

  export interface GambarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gambar'], meta: { name: 'Gambar' } }
    /**
     * Find zero or one Gambar that matches the filter.
     * @param {GambarFindUniqueArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GambarFindUniqueArgs>(args: SelectSubset<T, GambarFindUniqueArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Gambar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GambarFindUniqueOrThrowArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GambarFindUniqueOrThrowArgs>(args: SelectSubset<T, GambarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Gambar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarFindFirstArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GambarFindFirstArgs>(args?: SelectSubset<T, GambarFindFirstArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Gambar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarFindFirstOrThrowArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GambarFindFirstOrThrowArgs>(args?: SelectSubset<T, GambarFindFirstOrThrowArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Gambars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gambars
     * const gambars = await prisma.gambar.findMany()
     * 
     * // Get first 10 Gambars
     * const gambars = await prisma.gambar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gambarWithIdOnly = await prisma.gambar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GambarFindManyArgs>(args?: SelectSubset<T, GambarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Gambar.
     * @param {GambarCreateArgs} args - Arguments to create a Gambar.
     * @example
     * // Create one Gambar
     * const Gambar = await prisma.gambar.create({
     *   data: {
     *     // ... data to create a Gambar
     *   }
     * })
     * 
     */
    create<T extends GambarCreateArgs>(args: SelectSubset<T, GambarCreateArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Gambars.
     * @param {GambarCreateManyArgs} args - Arguments to create many Gambars.
     * @example
     * // Create many Gambars
     * const gambar = await prisma.gambar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GambarCreateManyArgs>(args?: SelectSubset<T, GambarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gambars and returns the data saved in the database.
     * @param {GambarCreateManyAndReturnArgs} args - Arguments to create many Gambars.
     * @example
     * // Create many Gambars
     * const gambar = await prisma.gambar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gambars and only return the `id`
     * const gambarWithIdOnly = await prisma.gambar.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GambarCreateManyAndReturnArgs>(args?: SelectSubset<T, GambarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Gambar.
     * @param {GambarDeleteArgs} args - Arguments to delete one Gambar.
     * @example
     * // Delete one Gambar
     * const Gambar = await prisma.gambar.delete({
     *   where: {
     *     // ... filter to delete one Gambar
     *   }
     * })
     * 
     */
    delete<T extends GambarDeleteArgs>(args: SelectSubset<T, GambarDeleteArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Gambar.
     * @param {GambarUpdateArgs} args - Arguments to update one Gambar.
     * @example
     * // Update one Gambar
     * const gambar = await prisma.gambar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GambarUpdateArgs>(args: SelectSubset<T, GambarUpdateArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Gambars.
     * @param {GambarDeleteManyArgs} args - Arguments to filter Gambars to delete.
     * @example
     * // Delete a few Gambars
     * const { count } = await prisma.gambar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GambarDeleteManyArgs>(args?: SelectSubset<T, GambarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gambars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gambars
     * const gambar = await prisma.gambar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GambarUpdateManyArgs>(args: SelectSubset<T, GambarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gambar.
     * @param {GambarUpsertArgs} args - Arguments to update or create a Gambar.
     * @example
     * // Update or create a Gambar
     * const gambar = await prisma.gambar.upsert({
     *   create: {
     *     // ... data to create a Gambar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gambar we want to update
     *   }
     * })
     */
    upsert<T extends GambarUpsertArgs>(args: SelectSubset<T, GambarUpsertArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Gambars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarCountArgs} args - Arguments to filter Gambars to count.
     * @example
     * // Count the number of Gambars
     * const count = await prisma.gambar.count({
     *   where: {
     *     // ... the filter for the Gambars we want to count
     *   }
     * })
    **/
    count<T extends GambarCountArgs>(
      args?: Subset<T, GambarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GambarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gambar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GambarAggregateArgs>(args: Subset<T, GambarAggregateArgs>): Prisma.PrismaPromise<GetGambarAggregateType<T>>

    /**
     * Group by Gambar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarGroupByArgs} args - Group by arguments.
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
      T extends GambarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GambarGroupByArgs['orderBy'] }
        : { orderBy?: GambarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GambarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGambarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gambar model
   */
  readonly fields: GambarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gambar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GambarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends Gambar$hotelArgs<ExtArgs> = {}>(args?: Subset<T, Gambar$hotelArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    kamar<T extends Gambar$kamarArgs<ExtArgs> = {}>(args?: Subset<T, Gambar$kamarArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    ulasan<T extends Gambar$ulasanArgs<ExtArgs> = {}>(args?: Subset<T, Gambar$ulasanArgs<ExtArgs>>): Prisma__UlasanClient<$Result.GetResult<Prisma.$UlasanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Gambar model
   */ 
  interface GambarFieldRefs {
    readonly id: FieldRef<"Gambar", 'String'>
    readonly url: FieldRef<"Gambar", 'String'>
    readonly hotelId: FieldRef<"Gambar", 'String'>
    readonly kamarId: FieldRef<"Gambar", 'String'>
    readonly ulasanId: FieldRef<"Gambar", 'String'>
    readonly createdAt: FieldRef<"Gambar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gambar findUnique
   */
  export type GambarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar findUniqueOrThrow
   */
  export type GambarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar findFirst
   */
  export type GambarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gambars.
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gambars.
     */
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Gambar findFirstOrThrow
   */
  export type GambarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gambars.
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gambars.
     */
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Gambar findMany
   */
  export type GambarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambars to fetch.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gambars.
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Gambar create
   */
  export type GambarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * The data needed to create a Gambar.
     */
    data: XOR<GambarCreateInput, GambarUncheckedCreateInput>
  }

  /**
   * Gambar createMany
   */
  export type GambarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gambars.
     */
    data: GambarCreateManyInput | GambarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gambar createManyAndReturn
   */
  export type GambarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Gambars.
     */
    data: GambarCreateManyInput | GambarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gambar update
   */
  export type GambarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * The data needed to update a Gambar.
     */
    data: XOR<GambarUpdateInput, GambarUncheckedUpdateInput>
    /**
     * Choose, which Gambar to update.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar updateMany
   */
  export type GambarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gambars.
     */
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyInput>
    /**
     * Filter which Gambars to update
     */
    where?: GambarWhereInput
  }

  /**
   * Gambar upsert
   */
  export type GambarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * The filter to search for the Gambar to update in case it exists.
     */
    where: GambarWhereUniqueInput
    /**
     * In case the Gambar found by the `where` argument doesn't exist, create a new Gambar with this data.
     */
    create: XOR<GambarCreateInput, GambarUncheckedCreateInput>
    /**
     * In case the Gambar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GambarUpdateInput, GambarUncheckedUpdateInput>
  }

  /**
   * Gambar delete
   */
  export type GambarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter which Gambar to delete.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar deleteMany
   */
  export type GambarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gambars to delete
     */
    where?: GambarWhereInput
  }

  /**
   * Gambar.hotel
   */
  export type Gambar$hotelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    where?: HotelWhereInput
  }

  /**
   * Gambar.kamar
   */
  export type Gambar$kamarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KamarInclude<ExtArgs> | null
    where?: KamarWhereInput
  }

  /**
   * Gambar.ulasan
   */
  export type Gambar$ulasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ulasan
     */
    select?: UlasanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UlasanInclude<ExtArgs> | null
    where?: UlasanWhereInput
  }

  /**
   * Gambar without action
   */
  export type GambarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
  }


  /**
   * Model Fasilitas
   */

  export type AggregateFasilitas = {
    _count: FasilitasCountAggregateOutputType | null
    _min: FasilitasMinAggregateOutputType | null
    _max: FasilitasMaxAggregateOutputType | null
  }

  export type FasilitasMinAggregateOutputType = {
    id: string | null
    nama: string | null
    ikon: string | null
    hotelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FasilitasMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    ikon: string | null
    hotelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FasilitasCountAggregateOutputType = {
    id: number
    nama: number
    ikon: number
    hotelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FasilitasMinAggregateInputType = {
    id?: true
    nama?: true
    ikon?: true
    hotelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FasilitasMaxAggregateInputType = {
    id?: true
    nama?: true
    ikon?: true
    hotelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FasilitasCountAggregateInputType = {
    id?: true
    nama?: true
    ikon?: true
    hotelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FasilitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fasilitas to aggregate.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fasilitas
    **/
    _count?: true | FasilitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FasilitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FasilitasMaxAggregateInputType
  }

  export type GetFasilitasAggregateType<T extends FasilitasAggregateArgs> = {
        [P in keyof T & keyof AggregateFasilitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFasilitas[P]>
      : GetScalarType<T[P], AggregateFasilitas[P]>
  }




  export type FasilitasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FasilitasWhereInput
    orderBy?: FasilitasOrderByWithAggregationInput | FasilitasOrderByWithAggregationInput[]
    by: FasilitasScalarFieldEnum[] | FasilitasScalarFieldEnum
    having?: FasilitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FasilitasCountAggregateInputType | true
    _min?: FasilitasMinAggregateInputType
    _max?: FasilitasMaxAggregateInputType
  }

  export type FasilitasGroupByOutputType = {
    id: string
    nama: string
    ikon: string
    hotelId: string
    createdAt: Date
    updatedAt: Date
    _count: FasilitasCountAggregateOutputType | null
    _min: FasilitasMinAggregateOutputType | null
    _max: FasilitasMaxAggregateOutputType | null
  }

  type GetFasilitasGroupByPayload<T extends FasilitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FasilitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FasilitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FasilitasGroupByOutputType[P]>
            : GetScalarType<T[P], FasilitasGroupByOutputType[P]>
        }
      >
    >


  export type FasilitasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    ikon?: boolean
    hotelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fasilitas"]>

  export type FasilitasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    ikon?: boolean
    hotelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fasilitas"]>

  export type FasilitasSelectScalar = {
    id?: boolean
    nama?: boolean
    ikon?: boolean
    hotelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FasilitasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type FasilitasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $FasilitasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fasilitas"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      ikon: string
      hotelId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fasilitas"]>
    composites: {}
  }

  type FasilitasGetPayload<S extends boolean | null | undefined | FasilitasDefaultArgs> = $Result.GetResult<Prisma.$FasilitasPayload, S>

  type FasilitasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FasilitasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FasilitasCountAggregateInputType | true
    }

  export interface FasilitasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fasilitas'], meta: { name: 'Fasilitas' } }
    /**
     * Find zero or one Fasilitas that matches the filter.
     * @param {FasilitasFindUniqueArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FasilitasFindUniqueArgs>(args: SelectSubset<T, FasilitasFindUniqueArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fasilitas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FasilitasFindUniqueOrThrowArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FasilitasFindUniqueOrThrowArgs>(args: SelectSubset<T, FasilitasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fasilitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasFindFirstArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FasilitasFindFirstArgs>(args?: SelectSubset<T, FasilitasFindFirstArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fasilitas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasFindFirstOrThrowArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FasilitasFindFirstOrThrowArgs>(args?: SelectSubset<T, FasilitasFindFirstOrThrowArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Fasilitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fasilitas
     * const fasilitas = await prisma.fasilitas.findMany()
     * 
     * // Get first 10 Fasilitas
     * const fasilitas = await prisma.fasilitas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fasilitasWithIdOnly = await prisma.fasilitas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FasilitasFindManyArgs>(args?: SelectSubset<T, FasilitasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fasilitas.
     * @param {FasilitasCreateArgs} args - Arguments to create a Fasilitas.
     * @example
     * // Create one Fasilitas
     * const Fasilitas = await prisma.fasilitas.create({
     *   data: {
     *     // ... data to create a Fasilitas
     *   }
     * })
     * 
     */
    create<T extends FasilitasCreateArgs>(args: SelectSubset<T, FasilitasCreateArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Fasilitas.
     * @param {FasilitasCreateManyArgs} args - Arguments to create many Fasilitas.
     * @example
     * // Create many Fasilitas
     * const fasilitas = await prisma.fasilitas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FasilitasCreateManyArgs>(args?: SelectSubset<T, FasilitasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fasilitas and returns the data saved in the database.
     * @param {FasilitasCreateManyAndReturnArgs} args - Arguments to create many Fasilitas.
     * @example
     * // Create many Fasilitas
     * const fasilitas = await prisma.fasilitas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fasilitas and only return the `id`
     * const fasilitasWithIdOnly = await prisma.fasilitas.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FasilitasCreateManyAndReturnArgs>(args?: SelectSubset<T, FasilitasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Fasilitas.
     * @param {FasilitasDeleteArgs} args - Arguments to delete one Fasilitas.
     * @example
     * // Delete one Fasilitas
     * const Fasilitas = await prisma.fasilitas.delete({
     *   where: {
     *     // ... filter to delete one Fasilitas
     *   }
     * })
     * 
     */
    delete<T extends FasilitasDeleteArgs>(args: SelectSubset<T, FasilitasDeleteArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fasilitas.
     * @param {FasilitasUpdateArgs} args - Arguments to update one Fasilitas.
     * @example
     * // Update one Fasilitas
     * const fasilitas = await prisma.fasilitas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FasilitasUpdateArgs>(args: SelectSubset<T, FasilitasUpdateArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Fasilitas.
     * @param {FasilitasDeleteManyArgs} args - Arguments to filter Fasilitas to delete.
     * @example
     * // Delete a few Fasilitas
     * const { count } = await prisma.fasilitas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FasilitasDeleteManyArgs>(args?: SelectSubset<T, FasilitasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fasilitas
     * const fasilitas = await prisma.fasilitas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FasilitasUpdateManyArgs>(args: SelectSubset<T, FasilitasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fasilitas.
     * @param {FasilitasUpsertArgs} args - Arguments to update or create a Fasilitas.
     * @example
     * // Update or create a Fasilitas
     * const fasilitas = await prisma.fasilitas.upsert({
     *   create: {
     *     // ... data to create a Fasilitas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fasilitas we want to update
     *   }
     * })
     */
    upsert<T extends FasilitasUpsertArgs>(args: SelectSubset<T, FasilitasUpsertArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasCountArgs} args - Arguments to filter Fasilitas to count.
     * @example
     * // Count the number of Fasilitas
     * const count = await prisma.fasilitas.count({
     *   where: {
     *     // ... the filter for the Fasilitas we want to count
     *   }
     * })
    **/
    count<T extends FasilitasCountArgs>(
      args?: Subset<T, FasilitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FasilitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FasilitasAggregateArgs>(args: Subset<T, FasilitasAggregateArgs>): Prisma.PrismaPromise<GetFasilitasAggregateType<T>>

    /**
     * Group by Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasGroupByArgs} args - Group by arguments.
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
      T extends FasilitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FasilitasGroupByArgs['orderBy'] }
        : { orderBy?: FasilitasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FasilitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFasilitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fasilitas model
   */
  readonly fields: FasilitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fasilitas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FasilitasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Fasilitas model
   */ 
  interface FasilitasFieldRefs {
    readonly id: FieldRef<"Fasilitas", 'String'>
    readonly nama: FieldRef<"Fasilitas", 'String'>
    readonly ikon: FieldRef<"Fasilitas", 'String'>
    readonly hotelId: FieldRef<"Fasilitas", 'String'>
    readonly createdAt: FieldRef<"Fasilitas", 'DateTime'>
    readonly updatedAt: FieldRef<"Fasilitas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fasilitas findUnique
   */
  export type FasilitasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas findUniqueOrThrow
   */
  export type FasilitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas findFirst
   */
  export type FasilitasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fasilitas.
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitas.
     */
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Fasilitas findFirstOrThrow
   */
  export type FasilitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fasilitas.
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitas.
     */
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Fasilitas findMany
   */
  export type FasilitasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fasilitas.
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Fasilitas create
   */
  export type FasilitasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    /**
     * The data needed to create a Fasilitas.
     */
    data: XOR<FasilitasCreateInput, FasilitasUncheckedCreateInput>
  }

  /**
   * Fasilitas createMany
   */
  export type FasilitasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fasilitas.
     */
    data: FasilitasCreateManyInput | FasilitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fasilitas createManyAndReturn
   */
  export type FasilitasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Fasilitas.
     */
    data: FasilitasCreateManyInput | FasilitasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fasilitas update
   */
  export type FasilitasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    /**
     * The data needed to update a Fasilitas.
     */
    data: XOR<FasilitasUpdateInput, FasilitasUncheckedUpdateInput>
    /**
     * Choose, which Fasilitas to update.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas updateMany
   */
  export type FasilitasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fasilitas.
     */
    data: XOR<FasilitasUpdateManyMutationInput, FasilitasUncheckedUpdateManyInput>
    /**
     * Filter which Fasilitas to update
     */
    where?: FasilitasWhereInput
  }

  /**
   * Fasilitas upsert
   */
  export type FasilitasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    /**
     * The filter to search for the Fasilitas to update in case it exists.
     */
    where: FasilitasWhereUniqueInput
    /**
     * In case the Fasilitas found by the `where` argument doesn't exist, create a new Fasilitas with this data.
     */
    create: XOR<FasilitasCreateInput, FasilitasUncheckedCreateInput>
    /**
     * In case the Fasilitas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FasilitasUpdateInput, FasilitasUncheckedUpdateInput>
  }

  /**
   * Fasilitas delete
   */
  export type FasilitasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
    /**
     * Filter which Fasilitas to delete.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas deleteMany
   */
  export type FasilitasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fasilitas to delete
     */
    where?: FasilitasWhereInput
  }

  /**
   * Fasilitas without action
   */
  export type FasilitasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FasilitasInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    image: 'image',
    telepon: 'telepon',
    peran: 'peran',
    emailVerified: 'emailVerified',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const HotelScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    alamat: 'alamat',
    kota: 'kota',
    negara: 'negara',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const KamarScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    nama: 'nama',
    deskripsi: 'deskripsi',
    harga: 'harga',
    kapasitas: 'kapasitas',
    tipe: 'tipe',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KamarScalarFieldEnum = (typeof KamarScalarFieldEnum)[keyof typeof KamarScalarFieldEnum]


  export const PemesananScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kamarId: 'kamarId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    totalHarga: 'totalHarga',
    status: 'status',
    jumlahTamu: 'jumlahTamu',
    permintaanKhusus: 'permintaanKhusus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PemesananScalarFieldEnum = (typeof PemesananScalarFieldEnum)[keyof typeof PemesananScalarFieldEnum]


  export const PembayaranScalarFieldEnum: {
    id: 'id',
    pemesananId: 'pemesananId',
    jumlah: 'jumlah',
    metodePembayaran: 'metodePembayaran',
    status: 'status',
    idTransaksi: 'idTransaksi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PembayaranScalarFieldEnum = (typeof PembayaranScalarFieldEnum)[keyof typeof PembayaranScalarFieldEnum]


  export const UlasanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    hotelId: 'hotelId',
    rating: 'rating',
    komentar: 'komentar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UlasanScalarFieldEnum = (typeof UlasanScalarFieldEnum)[keyof typeof UlasanScalarFieldEnum]


  export const GambarScalarFieldEnum: {
    id: 'id',
    url: 'url',
    hotelId: 'hotelId',
    kamarId: 'kamarId',
    ulasanId: 'ulasanId',
    createdAt: 'createdAt'
  };

  export type GambarScalarFieldEnum = (typeof GambarScalarFieldEnum)[keyof typeof GambarScalarFieldEnum]


  export const FasilitasScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    ikon: 'ikon',
    hotelId: 'hotelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FasilitasScalarFieldEnum = (typeof FasilitasScalarFieldEnum)[keyof typeof FasilitasScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PeranPengguna'
   */
  export type EnumPeranPenggunaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeranPengguna'>
    


  /**
   * Reference to a field of type 'PeranPengguna[]'
   */
  export type ListEnumPeranPenggunaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeranPengguna[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipeKamar'
   */
  export type EnumTipeKamarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipeKamar'>
    


  /**
   * Reference to a field of type 'TipeKamar[]'
   */
  export type ListEnumTipeKamarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipeKamar[]'>
    


  /**
   * Reference to a field of type 'StatusKamar'
   */
  export type EnumStatusKamarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKamar'>
    


  /**
   * Reference to a field of type 'StatusKamar[]'
   */
  export type ListEnumStatusKamarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKamar[]'>
    


  /**
   * Reference to a field of type 'StatusPemesanan'
   */
  export type EnumStatusPemesananFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPemesanan'>
    


  /**
   * Reference to a field of type 'StatusPemesanan[]'
   */
  export type ListEnumStatusPemesananFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPemesanan[]'>
    


  /**
   * Reference to a field of type 'StatusPembayaran'
   */
  export type EnumStatusPembayaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPembayaran'>
    


  /**
   * Reference to a field of type 'StatusPembayaran[]'
   */
  export type ListEnumStatusPembayaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPembayaran[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    telepon?: StringNullableFilter<"User"> | string | null
    peran?: EnumPeranPenggunaFilter<"User"> | $Enums.PeranPengguna
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    pemesanan?: PemesananListRelationFilter
    ulasan?: UlasanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    telepon?: SortOrderInput | SortOrder
    peran?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    pemesanan?: PemesananOrderByRelationAggregateInput
    ulasan?: UlasanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    telepon?: StringNullableFilter<"User"> | string | null
    peran?: EnumPeranPenggunaFilter<"User"> | $Enums.PeranPengguna
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    pemesanan?: PemesananListRelationFilter
    ulasan?: UlasanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    telepon?: SortOrderInput | SortOrder
    peran?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    telepon?: StringNullableWithAggregatesFilter<"User"> | string | null
    peran?: EnumPeranPenggunaWithAggregatesFilter<"User"> | $Enums.PeranPengguna
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    roleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
    permissions?: PermissionListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
    permissions?: PermissionListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    name?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    roles?: RoleListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    description?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    roles?: RoleListRelationFilter
  }, "id" | "name">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    name?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    id?: StringFilter<"Hotel"> | string
    nama?: StringFilter<"Hotel"> | string
    deskripsi?: StringFilter<"Hotel"> | string
    alamat?: StringFilter<"Hotel"> | string
    kota?: StringFilter<"Hotel"> | string
    negara?: StringFilter<"Hotel"> | string
    rating?: FloatFilter<"Hotel"> | number
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    gambar?: GambarListRelationFilter
    kamar?: KamarListRelationFilter
    ulasan?: UlasanListRelationFilter
    fasilitas?: FasilitasListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    alamat?: SortOrder
    kota?: SortOrder
    negara?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gambar?: GambarOrderByRelationAggregateInput
    kamar?: KamarOrderByRelationAggregateInput
    ulasan?: UlasanOrderByRelationAggregateInput
    fasilitas?: FasilitasOrderByRelationAggregateInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    nama?: StringFilter<"Hotel"> | string
    deskripsi?: StringFilter<"Hotel"> | string
    alamat?: StringFilter<"Hotel"> | string
    kota?: StringFilter<"Hotel"> | string
    negara?: StringFilter<"Hotel"> | string
    rating?: FloatFilter<"Hotel"> | number
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    gambar?: GambarListRelationFilter
    kamar?: KamarListRelationFilter
    ulasan?: UlasanListRelationFilter
    fasilitas?: FasilitasListRelationFilter
  }, "id">

  export type HotelOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    alamat?: SortOrder
    kota?: SortOrder
    negara?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HotelCountOrderByAggregateInput
    _avg?: HotelAvgOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
    _sum?: HotelSumOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hotel"> | string
    nama?: StringWithAggregatesFilter<"Hotel"> | string
    deskripsi?: StringWithAggregatesFilter<"Hotel"> | string
    alamat?: StringWithAggregatesFilter<"Hotel"> | string
    kota?: StringWithAggregatesFilter<"Hotel"> | string
    negara?: StringWithAggregatesFilter<"Hotel"> | string
    rating?: FloatWithAggregatesFilter<"Hotel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
  }

  export type KamarWhereInput = {
    AND?: KamarWhereInput | KamarWhereInput[]
    OR?: KamarWhereInput[]
    NOT?: KamarWhereInput | KamarWhereInput[]
    id?: StringFilter<"Kamar"> | string
    hotelId?: StringFilter<"Kamar"> | string
    nama?: StringFilter<"Kamar"> | string
    deskripsi?: StringFilter<"Kamar"> | string
    harga?: FloatFilter<"Kamar"> | number
    kapasitas?: IntFilter<"Kamar"> | number
    tipe?: EnumTipeKamarFilter<"Kamar"> | $Enums.TipeKamar
    status?: EnumStatusKamarFilter<"Kamar"> | $Enums.StatusKamar
    createdAt?: DateTimeFilter<"Kamar"> | Date | string
    updatedAt?: DateTimeFilter<"Kamar"> | Date | string
    hotel?: XOR<HotelRelationFilter, HotelWhereInput>
    gambar?: GambarListRelationFilter
    pemesanan?: PemesananListRelationFilter
  }

  export type KamarOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kapasitas?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    gambar?: GambarOrderByRelationAggregateInput
    pemesanan?: PemesananOrderByRelationAggregateInput
  }

  export type KamarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KamarWhereInput | KamarWhereInput[]
    OR?: KamarWhereInput[]
    NOT?: KamarWhereInput | KamarWhereInput[]
    hotelId?: StringFilter<"Kamar"> | string
    nama?: StringFilter<"Kamar"> | string
    deskripsi?: StringFilter<"Kamar"> | string
    harga?: FloatFilter<"Kamar"> | number
    kapasitas?: IntFilter<"Kamar"> | number
    tipe?: EnumTipeKamarFilter<"Kamar"> | $Enums.TipeKamar
    status?: EnumStatusKamarFilter<"Kamar"> | $Enums.StatusKamar
    createdAt?: DateTimeFilter<"Kamar"> | Date | string
    updatedAt?: DateTimeFilter<"Kamar"> | Date | string
    hotel?: XOR<HotelRelationFilter, HotelWhereInput>
    gambar?: GambarListRelationFilter
    pemesanan?: PemesananListRelationFilter
  }, "id">

  export type KamarOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kapasitas?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KamarCountOrderByAggregateInput
    _avg?: KamarAvgOrderByAggregateInput
    _max?: KamarMaxOrderByAggregateInput
    _min?: KamarMinOrderByAggregateInput
    _sum?: KamarSumOrderByAggregateInput
  }

  export type KamarScalarWhereWithAggregatesInput = {
    AND?: KamarScalarWhereWithAggregatesInput | KamarScalarWhereWithAggregatesInput[]
    OR?: KamarScalarWhereWithAggregatesInput[]
    NOT?: KamarScalarWhereWithAggregatesInput | KamarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kamar"> | string
    hotelId?: StringWithAggregatesFilter<"Kamar"> | string
    nama?: StringWithAggregatesFilter<"Kamar"> | string
    deskripsi?: StringWithAggregatesFilter<"Kamar"> | string
    harga?: FloatWithAggregatesFilter<"Kamar"> | number
    kapasitas?: IntWithAggregatesFilter<"Kamar"> | number
    tipe?: EnumTipeKamarWithAggregatesFilter<"Kamar"> | $Enums.TipeKamar
    status?: EnumStatusKamarWithAggregatesFilter<"Kamar"> | $Enums.StatusKamar
    createdAt?: DateTimeWithAggregatesFilter<"Kamar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kamar"> | Date | string
  }

  export type PemesananWhereInput = {
    AND?: PemesananWhereInput | PemesananWhereInput[]
    OR?: PemesananWhereInput[]
    NOT?: PemesananWhereInput | PemesananWhereInput[]
    id?: StringFilter<"Pemesanan"> | string
    userId?: StringFilter<"Pemesanan"> | string
    kamarId?: StringFilter<"Pemesanan"> | string
    checkIn?: DateTimeFilter<"Pemesanan"> | Date | string
    checkOut?: DateTimeFilter<"Pemesanan"> | Date | string
    totalHarga?: FloatFilter<"Pemesanan"> | number
    status?: EnumStatusPemesananFilter<"Pemesanan"> | $Enums.StatusPemesanan
    jumlahTamu?: IntFilter<"Pemesanan"> | number
    permintaanKhusus?: StringNullableFilter<"Pemesanan"> | string | null
    createdAt?: DateTimeFilter<"Pemesanan"> | Date | string
    updatedAt?: DateTimeFilter<"Pemesanan"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    kamar?: XOR<KamarRelationFilter, KamarWhereInput>
    pembayaran?: XOR<PembayaranNullableRelationFilter, PembayaranWhereInput> | null
  }

  export type PemesananOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kamarId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    jumlahTamu?: SortOrder
    permintaanKhusus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    kamar?: KamarOrderByWithRelationInput
    pembayaran?: PembayaranOrderByWithRelationInput
  }

  export type PemesananWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PemesananWhereInput | PemesananWhereInput[]
    OR?: PemesananWhereInput[]
    NOT?: PemesananWhereInput | PemesananWhereInput[]
    userId?: StringFilter<"Pemesanan"> | string
    kamarId?: StringFilter<"Pemesanan"> | string
    checkIn?: DateTimeFilter<"Pemesanan"> | Date | string
    checkOut?: DateTimeFilter<"Pemesanan"> | Date | string
    totalHarga?: FloatFilter<"Pemesanan"> | number
    status?: EnumStatusPemesananFilter<"Pemesanan"> | $Enums.StatusPemesanan
    jumlahTamu?: IntFilter<"Pemesanan"> | number
    permintaanKhusus?: StringNullableFilter<"Pemesanan"> | string | null
    createdAt?: DateTimeFilter<"Pemesanan"> | Date | string
    updatedAt?: DateTimeFilter<"Pemesanan"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    kamar?: XOR<KamarRelationFilter, KamarWhereInput>
    pembayaran?: XOR<PembayaranNullableRelationFilter, PembayaranWhereInput> | null
  }, "id">

  export type PemesananOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kamarId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    jumlahTamu?: SortOrder
    permintaanKhusus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PemesananCountOrderByAggregateInput
    _avg?: PemesananAvgOrderByAggregateInput
    _max?: PemesananMaxOrderByAggregateInput
    _min?: PemesananMinOrderByAggregateInput
    _sum?: PemesananSumOrderByAggregateInput
  }

  export type PemesananScalarWhereWithAggregatesInput = {
    AND?: PemesananScalarWhereWithAggregatesInput | PemesananScalarWhereWithAggregatesInput[]
    OR?: PemesananScalarWhereWithAggregatesInput[]
    NOT?: PemesananScalarWhereWithAggregatesInput | PemesananScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pemesanan"> | string
    userId?: StringWithAggregatesFilter<"Pemesanan"> | string
    kamarId?: StringWithAggregatesFilter<"Pemesanan"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Pemesanan"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Pemesanan"> | Date | string
    totalHarga?: FloatWithAggregatesFilter<"Pemesanan"> | number
    status?: EnumStatusPemesananWithAggregatesFilter<"Pemesanan"> | $Enums.StatusPemesanan
    jumlahTamu?: IntWithAggregatesFilter<"Pemesanan"> | number
    permintaanKhusus?: StringNullableWithAggregatesFilter<"Pemesanan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pemesanan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pemesanan"> | Date | string
  }

  export type PembayaranWhereInput = {
    AND?: PembayaranWhereInput | PembayaranWhereInput[]
    OR?: PembayaranWhereInput[]
    NOT?: PembayaranWhereInput | PembayaranWhereInput[]
    id?: StringFilter<"Pembayaran"> | string
    pemesananId?: StringFilter<"Pembayaran"> | string
    jumlah?: FloatFilter<"Pembayaran"> | number
    metodePembayaran?: StringFilter<"Pembayaran"> | string
    status?: EnumStatusPembayaranFilter<"Pembayaran"> | $Enums.StatusPembayaran
    idTransaksi?: StringNullableFilter<"Pembayaran"> | string | null
    createdAt?: DateTimeFilter<"Pembayaran"> | Date | string
    updatedAt?: DateTimeFilter<"Pembayaran"> | Date | string
    pemesanan?: XOR<PemesananRelationFilter, PemesananWhereInput>
  }

  export type PembayaranOrderByWithRelationInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    jumlah?: SortOrder
    metodePembayaran?: SortOrder
    status?: SortOrder
    idTransaksi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pemesanan?: PemesananOrderByWithRelationInput
  }

  export type PembayaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pemesananId?: string
    AND?: PembayaranWhereInput | PembayaranWhereInput[]
    OR?: PembayaranWhereInput[]
    NOT?: PembayaranWhereInput | PembayaranWhereInput[]
    jumlah?: FloatFilter<"Pembayaran"> | number
    metodePembayaran?: StringFilter<"Pembayaran"> | string
    status?: EnumStatusPembayaranFilter<"Pembayaran"> | $Enums.StatusPembayaran
    idTransaksi?: StringNullableFilter<"Pembayaran"> | string | null
    createdAt?: DateTimeFilter<"Pembayaran"> | Date | string
    updatedAt?: DateTimeFilter<"Pembayaran"> | Date | string
    pemesanan?: XOR<PemesananRelationFilter, PemesananWhereInput>
  }, "id" | "pemesananId">

  export type PembayaranOrderByWithAggregationInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    jumlah?: SortOrder
    metodePembayaran?: SortOrder
    status?: SortOrder
    idTransaksi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PembayaranCountOrderByAggregateInput
    _avg?: PembayaranAvgOrderByAggregateInput
    _max?: PembayaranMaxOrderByAggregateInput
    _min?: PembayaranMinOrderByAggregateInput
    _sum?: PembayaranSumOrderByAggregateInput
  }

  export type PembayaranScalarWhereWithAggregatesInput = {
    AND?: PembayaranScalarWhereWithAggregatesInput | PembayaranScalarWhereWithAggregatesInput[]
    OR?: PembayaranScalarWhereWithAggregatesInput[]
    NOT?: PembayaranScalarWhereWithAggregatesInput | PembayaranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pembayaran"> | string
    pemesananId?: StringWithAggregatesFilter<"Pembayaran"> | string
    jumlah?: FloatWithAggregatesFilter<"Pembayaran"> | number
    metodePembayaran?: StringWithAggregatesFilter<"Pembayaran"> | string
    status?: EnumStatusPembayaranWithAggregatesFilter<"Pembayaran"> | $Enums.StatusPembayaran
    idTransaksi?: StringNullableWithAggregatesFilter<"Pembayaran"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pembayaran"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pembayaran"> | Date | string
  }

  export type UlasanWhereInput = {
    AND?: UlasanWhereInput | UlasanWhereInput[]
    OR?: UlasanWhereInput[]
    NOT?: UlasanWhereInput | UlasanWhereInput[]
    id?: StringFilter<"Ulasan"> | string
    userId?: StringFilter<"Ulasan"> | string
    hotelId?: StringFilter<"Ulasan"> | string
    rating?: IntFilter<"Ulasan"> | number
    komentar?: StringFilter<"Ulasan"> | string
    createdAt?: DateTimeFilter<"Ulasan"> | Date | string
    updatedAt?: DateTimeFilter<"Ulasan"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    hotel?: XOR<HotelRelationFilter, HotelWhereInput>
    gambar?: GambarListRelationFilter
  }

  export type UlasanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    rating?: SortOrder
    komentar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
    gambar?: GambarOrderByRelationAggregateInput
  }

  export type UlasanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UlasanWhereInput | UlasanWhereInput[]
    OR?: UlasanWhereInput[]
    NOT?: UlasanWhereInput | UlasanWhereInput[]
    userId?: StringFilter<"Ulasan"> | string
    hotelId?: StringFilter<"Ulasan"> | string
    rating?: IntFilter<"Ulasan"> | number
    komentar?: StringFilter<"Ulasan"> | string
    createdAt?: DateTimeFilter<"Ulasan"> | Date | string
    updatedAt?: DateTimeFilter<"Ulasan"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    hotel?: XOR<HotelRelationFilter, HotelWhereInput>
    gambar?: GambarListRelationFilter
  }, "id">

  export type UlasanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    rating?: SortOrder
    komentar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UlasanCountOrderByAggregateInput
    _avg?: UlasanAvgOrderByAggregateInput
    _max?: UlasanMaxOrderByAggregateInput
    _min?: UlasanMinOrderByAggregateInput
    _sum?: UlasanSumOrderByAggregateInput
  }

  export type UlasanScalarWhereWithAggregatesInput = {
    AND?: UlasanScalarWhereWithAggregatesInput | UlasanScalarWhereWithAggregatesInput[]
    OR?: UlasanScalarWhereWithAggregatesInput[]
    NOT?: UlasanScalarWhereWithAggregatesInput | UlasanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ulasan"> | string
    userId?: StringWithAggregatesFilter<"Ulasan"> | string
    hotelId?: StringWithAggregatesFilter<"Ulasan"> | string
    rating?: IntWithAggregatesFilter<"Ulasan"> | number
    komentar?: StringWithAggregatesFilter<"Ulasan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ulasan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ulasan"> | Date | string
  }

  export type GambarWhereInput = {
    AND?: GambarWhereInput | GambarWhereInput[]
    OR?: GambarWhereInput[]
    NOT?: GambarWhereInput | GambarWhereInput[]
    id?: StringFilter<"Gambar"> | string
    url?: StringFilter<"Gambar"> | string
    hotelId?: StringNullableFilter<"Gambar"> | string | null
    kamarId?: StringNullableFilter<"Gambar"> | string | null
    ulasanId?: StringNullableFilter<"Gambar"> | string | null
    createdAt?: DateTimeFilter<"Gambar"> | Date | string
    hotel?: XOR<HotelNullableRelationFilter, HotelWhereInput> | null
    kamar?: XOR<KamarNullableRelationFilter, KamarWhereInput> | null
    ulasan?: XOR<UlasanNullableRelationFilter, UlasanWhereInput> | null
  }

  export type GambarOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    hotelId?: SortOrderInput | SortOrder
    kamarId?: SortOrderInput | SortOrder
    ulasanId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    kamar?: KamarOrderByWithRelationInput
    ulasan?: UlasanOrderByWithRelationInput
  }

  export type GambarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GambarWhereInput | GambarWhereInput[]
    OR?: GambarWhereInput[]
    NOT?: GambarWhereInput | GambarWhereInput[]
    url?: StringFilter<"Gambar"> | string
    hotelId?: StringNullableFilter<"Gambar"> | string | null
    kamarId?: StringNullableFilter<"Gambar"> | string | null
    ulasanId?: StringNullableFilter<"Gambar"> | string | null
    createdAt?: DateTimeFilter<"Gambar"> | Date | string
    hotel?: XOR<HotelNullableRelationFilter, HotelWhereInput> | null
    kamar?: XOR<KamarNullableRelationFilter, KamarWhereInput> | null
    ulasan?: XOR<UlasanNullableRelationFilter, UlasanWhereInput> | null
  }, "id">

  export type GambarOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    hotelId?: SortOrderInput | SortOrder
    kamarId?: SortOrderInput | SortOrder
    ulasanId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GambarCountOrderByAggregateInput
    _max?: GambarMaxOrderByAggregateInput
    _min?: GambarMinOrderByAggregateInput
  }

  export type GambarScalarWhereWithAggregatesInput = {
    AND?: GambarScalarWhereWithAggregatesInput | GambarScalarWhereWithAggregatesInput[]
    OR?: GambarScalarWhereWithAggregatesInput[]
    NOT?: GambarScalarWhereWithAggregatesInput | GambarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gambar"> | string
    url?: StringWithAggregatesFilter<"Gambar"> | string
    hotelId?: StringNullableWithAggregatesFilter<"Gambar"> | string | null
    kamarId?: StringNullableWithAggregatesFilter<"Gambar"> | string | null
    ulasanId?: StringNullableWithAggregatesFilter<"Gambar"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Gambar"> | Date | string
  }

  export type FasilitasWhereInput = {
    AND?: FasilitasWhereInput | FasilitasWhereInput[]
    OR?: FasilitasWhereInput[]
    NOT?: FasilitasWhereInput | FasilitasWhereInput[]
    id?: StringFilter<"Fasilitas"> | string
    nama?: StringFilter<"Fasilitas"> | string
    ikon?: StringFilter<"Fasilitas"> | string
    hotelId?: StringFilter<"Fasilitas"> | string
    createdAt?: DateTimeFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeFilter<"Fasilitas"> | Date | string
    hotel?: XOR<HotelRelationFilter, HotelWhereInput>
  }

  export type FasilitasOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
  }

  export type FasilitasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama_hotelId?: FasilitasNamaHotelIdCompoundUniqueInput
    AND?: FasilitasWhereInput | FasilitasWhereInput[]
    OR?: FasilitasWhereInput[]
    NOT?: FasilitasWhereInput | FasilitasWhereInput[]
    nama?: StringFilter<"Fasilitas"> | string
    ikon?: StringFilter<"Fasilitas"> | string
    hotelId?: StringFilter<"Fasilitas"> | string
    createdAt?: DateTimeFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeFilter<"Fasilitas"> | Date | string
    hotel?: XOR<HotelRelationFilter, HotelWhereInput>
  }, "id" | "nama_hotelId">

  export type FasilitasOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FasilitasCountOrderByAggregateInput
    _max?: FasilitasMaxOrderByAggregateInput
    _min?: FasilitasMinOrderByAggregateInput
  }

  export type FasilitasScalarWhereWithAggregatesInput = {
    AND?: FasilitasScalarWhereWithAggregatesInput | FasilitasScalarWhereWithAggregatesInput[]
    OR?: FasilitasScalarWhereWithAggregatesInput[]
    NOT?: FasilitasScalarWhereWithAggregatesInput | FasilitasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fasilitas"> | string
    nama?: StringWithAggregatesFilter<"Fasilitas"> | string
    ikon?: StringWithAggregatesFilter<"Fasilitas"> | string
    hotelId?: StringWithAggregatesFilter<"Fasilitas"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fasilitas"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    roleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    roleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelCreateInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarCreateNestedManyWithoutHotelInput
    kamar?: KamarCreateNestedManyWithoutHotelInput
    ulasan?: UlasanCreateNestedManyWithoutHotelInput
    fasilitas?: FasilitasCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutHotelInput
    kamar?: KamarUncheckedCreateNestedManyWithoutHotelInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutHotelInput
    fasilitas?: FasilitasUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUpdateManyWithoutHotelNestedInput
    kamar?: KamarUpdateManyWithoutHotelNestedInput
    ulasan?: UlasanUpdateManyWithoutHotelNestedInput
    fasilitas?: FasilitasUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutHotelNestedInput
    kamar?: KamarUncheckedUpdateManyWithoutHotelNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutHotelNestedInput
    fasilitas?: FasilitasUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateManyInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KamarCreateInput = {
    id?: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutKamarInput
    gambar?: GambarCreateNestedManyWithoutKamarInput
    pemesanan?: PemesananCreateNestedManyWithoutKamarInput
  }

  export type KamarUncheckedCreateInput = {
    id?: string
    hotelId: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutKamarInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutKamarInput
  }

  export type KamarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutKamarNestedInput
    gambar?: GambarUpdateManyWithoutKamarNestedInput
    pemesanan?: PemesananUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutKamarNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutKamarNestedInput
  }

  export type KamarCreateManyInput = {
    id?: string
    hotelId: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KamarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KamarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPemesananInput
    kamar: KamarCreateNestedOneWithoutPemesananInput
    pembayaran?: PembayaranCreateNestedOneWithoutPemesananInput
  }

  export type PemesananUncheckedCreateInput = {
    id?: string
    userId: string
    kamarId: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pembayaran?: PembayaranUncheckedCreateNestedOneWithoutPemesananInput
  }

  export type PemesananUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPemesananNestedInput
    kamar?: KamarUpdateOneRequiredWithoutPemesananNestedInput
    pembayaran?: PembayaranUpdateOneWithoutPemesananNestedInput
  }

  export type PemesananUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kamarId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pembayaran?: PembayaranUncheckedUpdateOneWithoutPemesananNestedInput
  }

  export type PemesananCreateManyInput = {
    id?: string
    userId: string
    kamarId: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PemesananUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kamarId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembayaranCreateInput = {
    id?: string
    jumlah: number
    metodePembayaran: string
    status: $Enums.StatusPembayaran
    idTransaksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pemesanan: PemesananCreateNestedOneWithoutPembayaranInput
  }

  export type PembayaranUncheckedCreateInput = {
    id?: string
    pemesananId: string
    jumlah: number
    metodePembayaran: string
    status: $Enums.StatusPembayaran
    idTransaksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PembayaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: FloatFieldUpdateOperationsInput | number
    metodePembayaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    idTransaksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: PemesananUpdateOneRequiredWithoutPembayaranNestedInput
  }

  export type PembayaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pemesananId?: StringFieldUpdateOperationsInput | string
    jumlah?: FloatFieldUpdateOperationsInput | number
    metodePembayaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    idTransaksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembayaranCreateManyInput = {
    id?: string
    pemesananId: string
    jumlah: number
    metodePembayaran: string
    status: $Enums.StatusPembayaran
    idTransaksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PembayaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: FloatFieldUpdateOperationsInput | number
    metodePembayaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    idTransaksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembayaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pemesananId?: StringFieldUpdateOperationsInput | string
    jumlah?: FloatFieldUpdateOperationsInput | number
    metodePembayaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    idTransaksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UlasanCreateInput = {
    id?: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUlasanInput
    hotel: HotelCreateNestedOneWithoutUlasanInput
    gambar?: GambarCreateNestedManyWithoutUlasanInput
  }

  export type UlasanUncheckedCreateInput = {
    id?: string
    userId: string
    hotelId: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutUlasanInput
  }

  export type UlasanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUlasanNestedInput
    hotel?: HotelUpdateOneRequiredWithoutUlasanNestedInput
    gambar?: GambarUpdateManyWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutUlasanNestedInput
  }

  export type UlasanCreateManyInput = {
    id?: string
    userId: string
    hotelId: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UlasanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UlasanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    hotel?: HotelCreateNestedOneWithoutGambarInput
    kamar?: KamarCreateNestedOneWithoutGambarInput
    ulasan?: UlasanCreateNestedOneWithoutGambarInput
  }

  export type GambarUncheckedCreateInput = {
    id?: string
    url: string
    hotelId?: string | null
    kamarId?: string | null
    ulasanId?: string | null
    createdAt?: Date | string
  }

  export type GambarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneWithoutGambarNestedInput
    kamar?: KamarUpdateOneWithoutGambarNestedInput
    ulasan?: UlasanUpdateOneWithoutGambarNestedInput
  }

  export type GambarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    kamarId?: NullableStringFieldUpdateOperationsInput | string | null
    ulasanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateManyInput = {
    id?: string
    url: string
    hotelId?: string | null
    kamarId?: string | null
    ulasanId?: string | null
    createdAt?: Date | string
  }

  export type GambarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    kamarId?: NullableStringFieldUpdateOperationsInput | string | null
    ulasanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasCreateInput = {
    id?: string
    nama: string
    ikon: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutFasilitasInput
  }

  export type FasilitasUncheckedCreateInput = {
    id?: string
    nama: string
    ikon: string
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutFasilitasNestedInput
  }

  export type FasilitasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasCreateManyInput = {
    id?: string
    nama: string
    ikon: string
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumPeranPenggunaFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeranPenggunaFilter<$PrismaModel> | $Enums.PeranPengguna
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RoleNullableRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PemesananListRelationFilter = {
    every?: PemesananWhereInput
    some?: PemesananWhereInput
    none?: PemesananWhereInput
  }

  export type UlasanListRelationFilter = {
    every?: UlasanWhereInput
    some?: UlasanWhereInput
    none?: UlasanWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PemesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UlasanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    telepon?: SortOrder
    peran?: SortOrder
    emailVerified?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    telepon?: SortOrder
    peran?: SortOrder
    emailVerified?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    telepon?: SortOrder
    peran?: SortOrder
    emailVerified?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPeranPenggunaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeranPenggunaWithAggregatesFilter<$PrismaModel> | $Enums.PeranPengguna
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeranPenggunaFilter<$PrismaModel>
    _max?: NestedEnumPeranPenggunaFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GambarListRelationFilter = {
    every?: GambarWhereInput
    some?: GambarWhereInput
    none?: GambarWhereInput
  }

  export type KamarListRelationFilter = {
    every?: KamarWhereInput
    some?: KamarWhereInput
    none?: KamarWhereInput
  }

  export type FasilitasListRelationFilter = {
    every?: FasilitasWhereInput
    some?: FasilitasWhereInput
    none?: FasilitasWhereInput
  }

  export type GambarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KamarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FasilitasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    alamat?: SortOrder
    kota?: SortOrder
    negara?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    alamat?: SortOrder
    kota?: SortOrder
    negara?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    alamat?: SortOrder
    kota?: SortOrder
    negara?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type EnumTipeKamarFilter<$PrismaModel = never> = {
    equals?: $Enums.TipeKamar | EnumTipeKamarFieldRefInput<$PrismaModel>
    in?: $Enums.TipeKamar[] | ListEnumTipeKamarFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipeKamar[] | ListEnumTipeKamarFieldRefInput<$PrismaModel>
    not?: NestedEnumTipeKamarFilter<$PrismaModel> | $Enums.TipeKamar
  }

  export type EnumStatusKamarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKamar | EnumStatusKamarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKamar[] | ListEnumStatusKamarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKamar[] | ListEnumStatusKamarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKamarFilter<$PrismaModel> | $Enums.StatusKamar
  }

  export type HotelRelationFilter = {
    is?: HotelWhereInput
    isNot?: HotelWhereInput
  }

  export type KamarCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kapasitas?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KamarAvgOrderByAggregateInput = {
    harga?: SortOrder
    kapasitas?: SortOrder
  }

  export type KamarMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kapasitas?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KamarMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kapasitas?: SortOrder
    tipe?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KamarSumOrderByAggregateInput = {
    harga?: SortOrder
    kapasitas?: SortOrder
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

  export type EnumTipeKamarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipeKamar | EnumTipeKamarFieldRefInput<$PrismaModel>
    in?: $Enums.TipeKamar[] | ListEnumTipeKamarFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipeKamar[] | ListEnumTipeKamarFieldRefInput<$PrismaModel>
    not?: NestedEnumTipeKamarWithAggregatesFilter<$PrismaModel> | $Enums.TipeKamar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipeKamarFilter<$PrismaModel>
    _max?: NestedEnumTipeKamarFilter<$PrismaModel>
  }

  export type EnumStatusKamarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKamar | EnumStatusKamarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKamar[] | ListEnumStatusKamarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKamar[] | ListEnumStatusKamarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKamarWithAggregatesFilter<$PrismaModel> | $Enums.StatusKamar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKamarFilter<$PrismaModel>
    _max?: NestedEnumStatusKamarFilter<$PrismaModel>
  }

  export type EnumStatusPemesananFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPemesanan | EnumStatusPemesananFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPemesananFilter<$PrismaModel> | $Enums.StatusPemesanan
  }

  export type KamarRelationFilter = {
    is?: KamarWhereInput
    isNot?: KamarWhereInput
  }

  export type PembayaranNullableRelationFilter = {
    is?: PembayaranWhereInput | null
    isNot?: PembayaranWhereInput | null
  }

  export type PemesananCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kamarId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    jumlahTamu?: SortOrder
    permintaanKhusus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PemesananAvgOrderByAggregateInput = {
    totalHarga?: SortOrder
    jumlahTamu?: SortOrder
  }

  export type PemesananMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kamarId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    jumlahTamu?: SortOrder
    permintaanKhusus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PemesananMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kamarId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalHarga?: SortOrder
    status?: SortOrder
    jumlahTamu?: SortOrder
    permintaanKhusus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PemesananSumOrderByAggregateInput = {
    totalHarga?: SortOrder
    jumlahTamu?: SortOrder
  }

  export type EnumStatusPemesananWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPemesanan | EnumStatusPemesananFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPemesananWithAggregatesFilter<$PrismaModel> | $Enums.StatusPemesanan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPemesananFilter<$PrismaModel>
    _max?: NestedEnumStatusPemesananFilter<$PrismaModel>
  }

  export type EnumStatusPembayaranFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembayaran | EnumStatusPembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembayaranFilter<$PrismaModel> | $Enums.StatusPembayaran
  }

  export type PemesananRelationFilter = {
    is?: PemesananWhereInput
    isNot?: PemesananWhereInput
  }

  export type PembayaranCountOrderByAggregateInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    jumlah?: SortOrder
    metodePembayaran?: SortOrder
    status?: SortOrder
    idTransaksi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PembayaranAvgOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type PembayaranMaxOrderByAggregateInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    jumlah?: SortOrder
    metodePembayaran?: SortOrder
    status?: SortOrder
    idTransaksi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PembayaranMinOrderByAggregateInput = {
    id?: SortOrder
    pemesananId?: SortOrder
    jumlah?: SortOrder
    metodePembayaran?: SortOrder
    status?: SortOrder
    idTransaksi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PembayaranSumOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type EnumStatusPembayaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembayaran | EnumStatusPembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembayaranWithAggregatesFilter<$PrismaModel> | $Enums.StatusPembayaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPembayaranFilter<$PrismaModel>
    _max?: NestedEnumStatusPembayaranFilter<$PrismaModel>
  }

  export type UlasanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    rating?: SortOrder
    komentar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UlasanAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UlasanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    rating?: SortOrder
    komentar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UlasanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    rating?: SortOrder
    komentar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UlasanSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type HotelNullableRelationFilter = {
    is?: HotelWhereInput | null
    isNot?: HotelWhereInput | null
  }

  export type KamarNullableRelationFilter = {
    is?: KamarWhereInput | null
    isNot?: KamarWhereInput | null
  }

  export type UlasanNullableRelationFilter = {
    is?: UlasanWhereInput | null
    isNot?: UlasanWhereInput | null
  }

  export type GambarCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    hotelId?: SortOrder
    kamarId?: SortOrder
    ulasanId?: SortOrder
    createdAt?: SortOrder
  }

  export type GambarMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    hotelId?: SortOrder
    kamarId?: SortOrder
    ulasanId?: SortOrder
    createdAt?: SortOrder
  }

  export type GambarMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    hotelId?: SortOrder
    kamarId?: SortOrder
    ulasanId?: SortOrder
    createdAt?: SortOrder
  }

  export type FasilitasNamaHotelIdCompoundUniqueInput = {
    nama: string
    hotelId: string
  }

  export type FasilitasCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FasilitasMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FasilitasMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    ikon?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PemesananCreateNestedManyWithoutUserInput = {
    create?: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput> | PemesananCreateWithoutUserInput[] | PemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutUserInput | PemesananCreateOrConnectWithoutUserInput[]
    createMany?: PemesananCreateManyUserInputEnvelope
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
  }

  export type UlasanCreateNestedManyWithoutUserInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PemesananUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput> | PemesananCreateWithoutUserInput[] | PemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutUserInput | PemesananCreateOrConnectWithoutUserInput[]
    createMany?: PemesananCreateManyUserInputEnvelope
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
  }

  export type UlasanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type EnumPeranPenggunaFieldUpdateOperationsInput = {
    set?: $Enums.PeranPengguna
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PemesananUpdateManyWithoutUserNestedInput = {
    create?: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput> | PemesananCreateWithoutUserInput[] | PemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutUserInput | PemesananCreateOrConnectWithoutUserInput[]
    upsert?: PemesananUpsertWithWhereUniqueWithoutUserInput | PemesananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PemesananCreateManyUserInputEnvelope
    set?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    disconnect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    delete?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    update?: PemesananUpdateWithWhereUniqueWithoutUserInput | PemesananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PemesananUpdateManyWithWhereWithoutUserInput | PemesananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
  }

  export type UlasanUpdateManyWithoutUserNestedInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutUserInput | UlasanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutUserInput | UlasanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutUserInput | UlasanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PemesananUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput> | PemesananCreateWithoutUserInput[] | PemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutUserInput | PemesananCreateOrConnectWithoutUserInput[]
    upsert?: PemesananUpsertWithWhereUniqueWithoutUserInput | PemesananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PemesananCreateManyUserInputEnvelope
    set?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    disconnect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    delete?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    update?: PemesananUpdateWithWhereUniqueWithoutUserInput | PemesananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PemesananUpdateManyWithWhereWithoutUserInput | PemesananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
  }

  export type UlasanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput> | UlasanCreateWithoutUserInput[] | UlasanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutUserInput | UlasanCreateOrConnectWithoutUserInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutUserInput | UlasanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UlasanCreateManyUserInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutUserInput | UlasanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutUserInput | UlasanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type RoleCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type GambarCreateNestedManyWithoutHotelInput = {
    create?: XOR<GambarCreateWithoutHotelInput, GambarUncheckedCreateWithoutHotelInput> | GambarCreateWithoutHotelInput[] | GambarUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutHotelInput | GambarCreateOrConnectWithoutHotelInput[]
    createMany?: GambarCreateManyHotelInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type KamarCreateNestedManyWithoutHotelInput = {
    create?: XOR<KamarCreateWithoutHotelInput, KamarUncheckedCreateWithoutHotelInput> | KamarCreateWithoutHotelInput[] | KamarUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutHotelInput | KamarCreateOrConnectWithoutHotelInput[]
    createMany?: KamarCreateManyHotelInputEnvelope
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
  }

  export type UlasanCreateNestedManyWithoutHotelInput = {
    create?: XOR<UlasanCreateWithoutHotelInput, UlasanUncheckedCreateWithoutHotelInput> | UlasanCreateWithoutHotelInput[] | UlasanUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutHotelInput | UlasanCreateOrConnectWithoutHotelInput[]
    createMany?: UlasanCreateManyHotelInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type FasilitasCreateNestedManyWithoutHotelInput = {
    create?: XOR<FasilitasCreateWithoutHotelInput, FasilitasUncheckedCreateWithoutHotelInput> | FasilitasCreateWithoutHotelInput[] | FasilitasUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FasilitasCreateOrConnectWithoutHotelInput | FasilitasCreateOrConnectWithoutHotelInput[]
    createMany?: FasilitasCreateManyHotelInputEnvelope
    connect?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
  }

  export type GambarUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<GambarCreateWithoutHotelInput, GambarUncheckedCreateWithoutHotelInput> | GambarCreateWithoutHotelInput[] | GambarUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutHotelInput | GambarCreateOrConnectWithoutHotelInput[]
    createMany?: GambarCreateManyHotelInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type KamarUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<KamarCreateWithoutHotelInput, KamarUncheckedCreateWithoutHotelInput> | KamarCreateWithoutHotelInput[] | KamarUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutHotelInput | KamarCreateOrConnectWithoutHotelInput[]
    createMany?: KamarCreateManyHotelInputEnvelope
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
  }

  export type UlasanUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<UlasanCreateWithoutHotelInput, UlasanUncheckedCreateWithoutHotelInput> | UlasanCreateWithoutHotelInput[] | UlasanUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutHotelInput | UlasanCreateOrConnectWithoutHotelInput[]
    createMany?: UlasanCreateManyHotelInputEnvelope
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
  }

  export type FasilitasUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<FasilitasCreateWithoutHotelInput, FasilitasUncheckedCreateWithoutHotelInput> | FasilitasCreateWithoutHotelInput[] | FasilitasUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FasilitasCreateOrConnectWithoutHotelInput | FasilitasCreateOrConnectWithoutHotelInput[]
    createMany?: FasilitasCreateManyHotelInputEnvelope
    connect?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GambarUpdateManyWithoutHotelNestedInput = {
    create?: XOR<GambarCreateWithoutHotelInput, GambarUncheckedCreateWithoutHotelInput> | GambarCreateWithoutHotelInput[] | GambarUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutHotelInput | GambarCreateOrConnectWithoutHotelInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutHotelInput | GambarUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: GambarCreateManyHotelInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutHotelInput | GambarUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutHotelInput | GambarUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type KamarUpdateManyWithoutHotelNestedInput = {
    create?: XOR<KamarCreateWithoutHotelInput, KamarUncheckedCreateWithoutHotelInput> | KamarCreateWithoutHotelInput[] | KamarUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutHotelInput | KamarCreateOrConnectWithoutHotelInput[]
    upsert?: KamarUpsertWithWhereUniqueWithoutHotelInput | KamarUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: KamarCreateManyHotelInputEnvelope
    set?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    disconnect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    delete?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    update?: KamarUpdateWithWhereUniqueWithoutHotelInput | KamarUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: KamarUpdateManyWithWhereWithoutHotelInput | KamarUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: KamarScalarWhereInput | KamarScalarWhereInput[]
  }

  export type UlasanUpdateManyWithoutHotelNestedInput = {
    create?: XOR<UlasanCreateWithoutHotelInput, UlasanUncheckedCreateWithoutHotelInput> | UlasanCreateWithoutHotelInput[] | UlasanUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutHotelInput | UlasanCreateOrConnectWithoutHotelInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutHotelInput | UlasanUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: UlasanCreateManyHotelInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutHotelInput | UlasanUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutHotelInput | UlasanUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type FasilitasUpdateManyWithoutHotelNestedInput = {
    create?: XOR<FasilitasCreateWithoutHotelInput, FasilitasUncheckedCreateWithoutHotelInput> | FasilitasCreateWithoutHotelInput[] | FasilitasUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FasilitasCreateOrConnectWithoutHotelInput | FasilitasCreateOrConnectWithoutHotelInput[]
    upsert?: FasilitasUpsertWithWhereUniqueWithoutHotelInput | FasilitasUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: FasilitasCreateManyHotelInputEnvelope
    set?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
    disconnect?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
    delete?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
    connect?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
    update?: FasilitasUpdateWithWhereUniqueWithoutHotelInput | FasilitasUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: FasilitasUpdateManyWithWhereWithoutHotelInput | FasilitasUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: FasilitasScalarWhereInput | FasilitasScalarWhereInput[]
  }

  export type GambarUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<GambarCreateWithoutHotelInput, GambarUncheckedCreateWithoutHotelInput> | GambarCreateWithoutHotelInput[] | GambarUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutHotelInput | GambarCreateOrConnectWithoutHotelInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutHotelInput | GambarUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: GambarCreateManyHotelInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutHotelInput | GambarUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutHotelInput | GambarUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type KamarUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<KamarCreateWithoutHotelInput, KamarUncheckedCreateWithoutHotelInput> | KamarCreateWithoutHotelInput[] | KamarUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: KamarCreateOrConnectWithoutHotelInput | KamarCreateOrConnectWithoutHotelInput[]
    upsert?: KamarUpsertWithWhereUniqueWithoutHotelInput | KamarUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: KamarCreateManyHotelInputEnvelope
    set?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    disconnect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    delete?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    connect?: KamarWhereUniqueInput | KamarWhereUniqueInput[]
    update?: KamarUpdateWithWhereUniqueWithoutHotelInput | KamarUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: KamarUpdateManyWithWhereWithoutHotelInput | KamarUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: KamarScalarWhereInput | KamarScalarWhereInput[]
  }

  export type UlasanUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<UlasanCreateWithoutHotelInput, UlasanUncheckedCreateWithoutHotelInput> | UlasanCreateWithoutHotelInput[] | UlasanUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UlasanCreateOrConnectWithoutHotelInput | UlasanCreateOrConnectWithoutHotelInput[]
    upsert?: UlasanUpsertWithWhereUniqueWithoutHotelInput | UlasanUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: UlasanCreateManyHotelInputEnvelope
    set?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    disconnect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    delete?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    connect?: UlasanWhereUniqueInput | UlasanWhereUniqueInput[]
    update?: UlasanUpdateWithWhereUniqueWithoutHotelInput | UlasanUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: UlasanUpdateManyWithWhereWithoutHotelInput | UlasanUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
  }

  export type FasilitasUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<FasilitasCreateWithoutHotelInput, FasilitasUncheckedCreateWithoutHotelInput> | FasilitasCreateWithoutHotelInput[] | FasilitasUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FasilitasCreateOrConnectWithoutHotelInput | FasilitasCreateOrConnectWithoutHotelInput[]
    upsert?: FasilitasUpsertWithWhereUniqueWithoutHotelInput | FasilitasUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: FasilitasCreateManyHotelInputEnvelope
    set?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
    disconnect?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
    delete?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
    connect?: FasilitasWhereUniqueInput | FasilitasWhereUniqueInput[]
    update?: FasilitasUpdateWithWhereUniqueWithoutHotelInput | FasilitasUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: FasilitasUpdateManyWithWhereWithoutHotelInput | FasilitasUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: FasilitasScalarWhereInput | FasilitasScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutKamarInput = {
    create?: XOR<HotelCreateWithoutKamarInput, HotelUncheckedCreateWithoutKamarInput>
    connectOrCreate?: HotelCreateOrConnectWithoutKamarInput
    connect?: HotelWhereUniqueInput
  }

  export type GambarCreateNestedManyWithoutKamarInput = {
    create?: XOR<GambarCreateWithoutKamarInput, GambarUncheckedCreateWithoutKamarInput> | GambarCreateWithoutKamarInput[] | GambarUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutKamarInput | GambarCreateOrConnectWithoutKamarInput[]
    createMany?: GambarCreateManyKamarInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type PemesananCreateNestedManyWithoutKamarInput = {
    create?: XOR<PemesananCreateWithoutKamarInput, PemesananUncheckedCreateWithoutKamarInput> | PemesananCreateWithoutKamarInput[] | PemesananUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutKamarInput | PemesananCreateOrConnectWithoutKamarInput[]
    createMany?: PemesananCreateManyKamarInputEnvelope
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
  }

  export type GambarUncheckedCreateNestedManyWithoutKamarInput = {
    create?: XOR<GambarCreateWithoutKamarInput, GambarUncheckedCreateWithoutKamarInput> | GambarCreateWithoutKamarInput[] | GambarUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutKamarInput | GambarCreateOrConnectWithoutKamarInput[]
    createMany?: GambarCreateManyKamarInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type PemesananUncheckedCreateNestedManyWithoutKamarInput = {
    create?: XOR<PemesananCreateWithoutKamarInput, PemesananUncheckedCreateWithoutKamarInput> | PemesananCreateWithoutKamarInput[] | PemesananUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutKamarInput | PemesananCreateOrConnectWithoutKamarInput[]
    createMany?: PemesananCreateManyKamarInputEnvelope
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTipeKamarFieldUpdateOperationsInput = {
    set?: $Enums.TipeKamar
  }

  export type EnumStatusKamarFieldUpdateOperationsInput = {
    set?: $Enums.StatusKamar
  }

  export type HotelUpdateOneRequiredWithoutKamarNestedInput = {
    create?: XOR<HotelCreateWithoutKamarInput, HotelUncheckedCreateWithoutKamarInput>
    connectOrCreate?: HotelCreateOrConnectWithoutKamarInput
    upsert?: HotelUpsertWithoutKamarInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutKamarInput, HotelUpdateWithoutKamarInput>, HotelUncheckedUpdateWithoutKamarInput>
  }

  export type GambarUpdateManyWithoutKamarNestedInput = {
    create?: XOR<GambarCreateWithoutKamarInput, GambarUncheckedCreateWithoutKamarInput> | GambarCreateWithoutKamarInput[] | GambarUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutKamarInput | GambarCreateOrConnectWithoutKamarInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutKamarInput | GambarUpsertWithWhereUniqueWithoutKamarInput[]
    createMany?: GambarCreateManyKamarInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutKamarInput | GambarUpdateWithWhereUniqueWithoutKamarInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutKamarInput | GambarUpdateManyWithWhereWithoutKamarInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type PemesananUpdateManyWithoutKamarNestedInput = {
    create?: XOR<PemesananCreateWithoutKamarInput, PemesananUncheckedCreateWithoutKamarInput> | PemesananCreateWithoutKamarInput[] | PemesananUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutKamarInput | PemesananCreateOrConnectWithoutKamarInput[]
    upsert?: PemesananUpsertWithWhereUniqueWithoutKamarInput | PemesananUpsertWithWhereUniqueWithoutKamarInput[]
    createMany?: PemesananCreateManyKamarInputEnvelope
    set?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    disconnect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    delete?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    update?: PemesananUpdateWithWhereUniqueWithoutKamarInput | PemesananUpdateWithWhereUniqueWithoutKamarInput[]
    updateMany?: PemesananUpdateManyWithWhereWithoutKamarInput | PemesananUpdateManyWithWhereWithoutKamarInput[]
    deleteMany?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
  }

  export type GambarUncheckedUpdateManyWithoutKamarNestedInput = {
    create?: XOR<GambarCreateWithoutKamarInput, GambarUncheckedCreateWithoutKamarInput> | GambarCreateWithoutKamarInput[] | GambarUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutKamarInput | GambarCreateOrConnectWithoutKamarInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutKamarInput | GambarUpsertWithWhereUniqueWithoutKamarInput[]
    createMany?: GambarCreateManyKamarInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutKamarInput | GambarUpdateWithWhereUniqueWithoutKamarInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutKamarInput | GambarUpdateManyWithWhereWithoutKamarInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type PemesananUncheckedUpdateManyWithoutKamarNestedInput = {
    create?: XOR<PemesananCreateWithoutKamarInput, PemesananUncheckedCreateWithoutKamarInput> | PemesananCreateWithoutKamarInput[] | PemesananUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutKamarInput | PemesananCreateOrConnectWithoutKamarInput[]
    upsert?: PemesananUpsertWithWhereUniqueWithoutKamarInput | PemesananUpsertWithWhereUniqueWithoutKamarInput[]
    createMany?: PemesananCreateManyKamarInputEnvelope
    set?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    disconnect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    delete?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    update?: PemesananUpdateWithWhereUniqueWithoutKamarInput | PemesananUpdateWithWhereUniqueWithoutKamarInput[]
    updateMany?: PemesananUpdateManyWithWhereWithoutKamarInput | PemesananUpdateManyWithWhereWithoutKamarInput[]
    deleteMany?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPemesananInput = {
    create?: XOR<UserCreateWithoutPemesananInput, UserUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: UserCreateOrConnectWithoutPemesananInput
    connect?: UserWhereUniqueInput
  }

  export type KamarCreateNestedOneWithoutPemesananInput = {
    create?: XOR<KamarCreateWithoutPemesananInput, KamarUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: KamarCreateOrConnectWithoutPemesananInput
    connect?: KamarWhereUniqueInput
  }

  export type PembayaranCreateNestedOneWithoutPemesananInput = {
    create?: XOR<PembayaranCreateWithoutPemesananInput, PembayaranUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: PembayaranCreateOrConnectWithoutPemesananInput
    connect?: PembayaranWhereUniqueInput
  }

  export type PembayaranUncheckedCreateNestedOneWithoutPemesananInput = {
    create?: XOR<PembayaranCreateWithoutPemesananInput, PembayaranUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: PembayaranCreateOrConnectWithoutPemesananInput
    connect?: PembayaranWhereUniqueInput
  }

  export type EnumStatusPemesananFieldUpdateOperationsInput = {
    set?: $Enums.StatusPemesanan
  }

  export type UserUpdateOneRequiredWithoutPemesananNestedInput = {
    create?: XOR<UserCreateWithoutPemesananInput, UserUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: UserCreateOrConnectWithoutPemesananInput
    upsert?: UserUpsertWithoutPemesananInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPemesananInput, UserUpdateWithoutPemesananInput>, UserUncheckedUpdateWithoutPemesananInput>
  }

  export type KamarUpdateOneRequiredWithoutPemesananNestedInput = {
    create?: XOR<KamarCreateWithoutPemesananInput, KamarUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: KamarCreateOrConnectWithoutPemesananInput
    upsert?: KamarUpsertWithoutPemesananInput
    connect?: KamarWhereUniqueInput
    update?: XOR<XOR<KamarUpdateToOneWithWhereWithoutPemesananInput, KamarUpdateWithoutPemesananInput>, KamarUncheckedUpdateWithoutPemesananInput>
  }

  export type PembayaranUpdateOneWithoutPemesananNestedInput = {
    create?: XOR<PembayaranCreateWithoutPemesananInput, PembayaranUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: PembayaranCreateOrConnectWithoutPemesananInput
    upsert?: PembayaranUpsertWithoutPemesananInput
    disconnect?: PembayaranWhereInput | boolean
    delete?: PembayaranWhereInput | boolean
    connect?: PembayaranWhereUniqueInput
    update?: XOR<XOR<PembayaranUpdateToOneWithWhereWithoutPemesananInput, PembayaranUpdateWithoutPemesananInput>, PembayaranUncheckedUpdateWithoutPemesananInput>
  }

  export type PembayaranUncheckedUpdateOneWithoutPemesananNestedInput = {
    create?: XOR<PembayaranCreateWithoutPemesananInput, PembayaranUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: PembayaranCreateOrConnectWithoutPemesananInput
    upsert?: PembayaranUpsertWithoutPemesananInput
    disconnect?: PembayaranWhereInput | boolean
    delete?: PembayaranWhereInput | boolean
    connect?: PembayaranWhereUniqueInput
    update?: XOR<XOR<PembayaranUpdateToOneWithWhereWithoutPemesananInput, PembayaranUpdateWithoutPemesananInput>, PembayaranUncheckedUpdateWithoutPemesananInput>
  }

  export type PemesananCreateNestedOneWithoutPembayaranInput = {
    create?: XOR<PemesananCreateWithoutPembayaranInput, PemesananUncheckedCreateWithoutPembayaranInput>
    connectOrCreate?: PemesananCreateOrConnectWithoutPembayaranInput
    connect?: PemesananWhereUniqueInput
  }

  export type EnumStatusPembayaranFieldUpdateOperationsInput = {
    set?: $Enums.StatusPembayaran
  }

  export type PemesananUpdateOneRequiredWithoutPembayaranNestedInput = {
    create?: XOR<PemesananCreateWithoutPembayaranInput, PemesananUncheckedCreateWithoutPembayaranInput>
    connectOrCreate?: PemesananCreateOrConnectWithoutPembayaranInput
    upsert?: PemesananUpsertWithoutPembayaranInput
    connect?: PemesananWhereUniqueInput
    update?: XOR<XOR<PemesananUpdateToOneWithWhereWithoutPembayaranInput, PemesananUpdateWithoutPembayaranInput>, PemesananUncheckedUpdateWithoutPembayaranInput>
  }

  export type UserCreateNestedOneWithoutUlasanInput = {
    create?: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: UserCreateOrConnectWithoutUlasanInput
    connect?: UserWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutUlasanInput = {
    create?: XOR<HotelCreateWithoutUlasanInput, HotelUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: HotelCreateOrConnectWithoutUlasanInput
    connect?: HotelWhereUniqueInput
  }

  export type GambarCreateNestedManyWithoutUlasanInput = {
    create?: XOR<GambarCreateWithoutUlasanInput, GambarUncheckedCreateWithoutUlasanInput> | GambarCreateWithoutUlasanInput[] | GambarUncheckedCreateWithoutUlasanInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutUlasanInput | GambarCreateOrConnectWithoutUlasanInput[]
    createMany?: GambarCreateManyUlasanInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type GambarUncheckedCreateNestedManyWithoutUlasanInput = {
    create?: XOR<GambarCreateWithoutUlasanInput, GambarUncheckedCreateWithoutUlasanInput> | GambarCreateWithoutUlasanInput[] | GambarUncheckedCreateWithoutUlasanInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutUlasanInput | GambarCreateOrConnectWithoutUlasanInput[]
    createMany?: GambarCreateManyUlasanInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUlasanNestedInput = {
    create?: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: UserCreateOrConnectWithoutUlasanInput
    upsert?: UserUpsertWithoutUlasanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUlasanInput, UserUpdateWithoutUlasanInput>, UserUncheckedUpdateWithoutUlasanInput>
  }

  export type HotelUpdateOneRequiredWithoutUlasanNestedInput = {
    create?: XOR<HotelCreateWithoutUlasanInput, HotelUncheckedCreateWithoutUlasanInput>
    connectOrCreate?: HotelCreateOrConnectWithoutUlasanInput
    upsert?: HotelUpsertWithoutUlasanInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutUlasanInput, HotelUpdateWithoutUlasanInput>, HotelUncheckedUpdateWithoutUlasanInput>
  }

  export type GambarUpdateManyWithoutUlasanNestedInput = {
    create?: XOR<GambarCreateWithoutUlasanInput, GambarUncheckedCreateWithoutUlasanInput> | GambarCreateWithoutUlasanInput[] | GambarUncheckedCreateWithoutUlasanInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutUlasanInput | GambarCreateOrConnectWithoutUlasanInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutUlasanInput | GambarUpsertWithWhereUniqueWithoutUlasanInput[]
    createMany?: GambarCreateManyUlasanInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutUlasanInput | GambarUpdateWithWhereUniqueWithoutUlasanInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutUlasanInput | GambarUpdateManyWithWhereWithoutUlasanInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type GambarUncheckedUpdateManyWithoutUlasanNestedInput = {
    create?: XOR<GambarCreateWithoutUlasanInput, GambarUncheckedCreateWithoutUlasanInput> | GambarCreateWithoutUlasanInput[] | GambarUncheckedCreateWithoutUlasanInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutUlasanInput | GambarCreateOrConnectWithoutUlasanInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutUlasanInput | GambarUpsertWithWhereUniqueWithoutUlasanInput[]
    createMany?: GambarCreateManyUlasanInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutUlasanInput | GambarUpdateWithWhereUniqueWithoutUlasanInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutUlasanInput | GambarUpdateManyWithWhereWithoutUlasanInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutGambarInput = {
    create?: XOR<HotelCreateWithoutGambarInput, HotelUncheckedCreateWithoutGambarInput>
    connectOrCreate?: HotelCreateOrConnectWithoutGambarInput
    connect?: HotelWhereUniqueInput
  }

  export type KamarCreateNestedOneWithoutGambarInput = {
    create?: XOR<KamarCreateWithoutGambarInput, KamarUncheckedCreateWithoutGambarInput>
    connectOrCreate?: KamarCreateOrConnectWithoutGambarInput
    connect?: KamarWhereUniqueInput
  }

  export type UlasanCreateNestedOneWithoutGambarInput = {
    create?: XOR<UlasanCreateWithoutGambarInput, UlasanUncheckedCreateWithoutGambarInput>
    connectOrCreate?: UlasanCreateOrConnectWithoutGambarInput
    connect?: UlasanWhereUniqueInput
  }

  export type HotelUpdateOneWithoutGambarNestedInput = {
    create?: XOR<HotelCreateWithoutGambarInput, HotelUncheckedCreateWithoutGambarInput>
    connectOrCreate?: HotelCreateOrConnectWithoutGambarInput
    upsert?: HotelUpsertWithoutGambarInput
    disconnect?: HotelWhereInput | boolean
    delete?: HotelWhereInput | boolean
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutGambarInput, HotelUpdateWithoutGambarInput>, HotelUncheckedUpdateWithoutGambarInput>
  }

  export type KamarUpdateOneWithoutGambarNestedInput = {
    create?: XOR<KamarCreateWithoutGambarInput, KamarUncheckedCreateWithoutGambarInput>
    connectOrCreate?: KamarCreateOrConnectWithoutGambarInput
    upsert?: KamarUpsertWithoutGambarInput
    disconnect?: KamarWhereInput | boolean
    delete?: KamarWhereInput | boolean
    connect?: KamarWhereUniqueInput
    update?: XOR<XOR<KamarUpdateToOneWithWhereWithoutGambarInput, KamarUpdateWithoutGambarInput>, KamarUncheckedUpdateWithoutGambarInput>
  }

  export type UlasanUpdateOneWithoutGambarNestedInput = {
    create?: XOR<UlasanCreateWithoutGambarInput, UlasanUncheckedCreateWithoutGambarInput>
    connectOrCreate?: UlasanCreateOrConnectWithoutGambarInput
    upsert?: UlasanUpsertWithoutGambarInput
    disconnect?: UlasanWhereInput | boolean
    delete?: UlasanWhereInput | boolean
    connect?: UlasanWhereUniqueInput
    update?: XOR<XOR<UlasanUpdateToOneWithWhereWithoutGambarInput, UlasanUpdateWithoutGambarInput>, UlasanUncheckedUpdateWithoutGambarInput>
  }

  export type HotelCreateNestedOneWithoutFasilitasInput = {
    create?: XOR<HotelCreateWithoutFasilitasInput, HotelUncheckedCreateWithoutFasilitasInput>
    connectOrCreate?: HotelCreateOrConnectWithoutFasilitasInput
    connect?: HotelWhereUniqueInput
  }

  export type HotelUpdateOneRequiredWithoutFasilitasNestedInput = {
    create?: XOR<HotelCreateWithoutFasilitasInput, HotelUncheckedCreateWithoutFasilitasInput>
    connectOrCreate?: HotelCreateOrConnectWithoutFasilitasInput
    upsert?: HotelUpsertWithoutFasilitasInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutFasilitasInput, HotelUpdateWithoutFasilitasInput>, HotelUncheckedUpdateWithoutFasilitasInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumPeranPenggunaFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeranPenggunaFilter<$PrismaModel> | $Enums.PeranPengguna
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPeranPenggunaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeranPengguna | EnumPeranPenggunaFieldRefInput<$PrismaModel>
    in?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeranPengguna[] | ListEnumPeranPenggunaFieldRefInput<$PrismaModel>
    not?: NestedEnumPeranPenggunaWithAggregatesFilter<$PrismaModel> | $Enums.PeranPengguna
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeranPenggunaFilter<$PrismaModel>
    _max?: NestedEnumPeranPenggunaFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumTipeKamarFilter<$PrismaModel = never> = {
    equals?: $Enums.TipeKamar | EnumTipeKamarFieldRefInput<$PrismaModel>
    in?: $Enums.TipeKamar[] | ListEnumTipeKamarFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipeKamar[] | ListEnumTipeKamarFieldRefInput<$PrismaModel>
    not?: NestedEnumTipeKamarFilter<$PrismaModel> | $Enums.TipeKamar
  }

  export type NestedEnumStatusKamarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKamar | EnumStatusKamarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKamar[] | ListEnumStatusKamarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKamar[] | ListEnumStatusKamarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKamarFilter<$PrismaModel> | $Enums.StatusKamar
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

  export type NestedEnumTipeKamarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipeKamar | EnumTipeKamarFieldRefInput<$PrismaModel>
    in?: $Enums.TipeKamar[] | ListEnumTipeKamarFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipeKamar[] | ListEnumTipeKamarFieldRefInput<$PrismaModel>
    not?: NestedEnumTipeKamarWithAggregatesFilter<$PrismaModel> | $Enums.TipeKamar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipeKamarFilter<$PrismaModel>
    _max?: NestedEnumTipeKamarFilter<$PrismaModel>
  }

  export type NestedEnumStatusKamarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKamar | EnumStatusKamarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKamar[] | ListEnumStatusKamarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKamar[] | ListEnumStatusKamarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKamarWithAggregatesFilter<$PrismaModel> | $Enums.StatusKamar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKamarFilter<$PrismaModel>
    _max?: NestedEnumStatusKamarFilter<$PrismaModel>
  }

  export type NestedEnumStatusPemesananFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPemesanan | EnumStatusPemesananFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPemesananFilter<$PrismaModel> | $Enums.StatusPemesanan
  }

  export type NestedEnumStatusPemesananWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPemesanan | EnumStatusPemesananFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPemesananWithAggregatesFilter<$PrismaModel> | $Enums.StatusPemesanan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPemesananFilter<$PrismaModel>
    _max?: NestedEnumStatusPemesananFilter<$PrismaModel>
  }

  export type NestedEnumStatusPembayaranFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembayaran | EnumStatusPembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembayaranFilter<$PrismaModel> | $Enums.StatusPembayaran
  }

  export type NestedEnumStatusPembayaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembayaran | EnumStatusPembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembayaranWithAggregatesFilter<$PrismaModel> | $Enums.StatusPembayaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPembayaranFilter<$PrismaModel>
    _max?: NestedEnumStatusPembayaranFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    roleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    roleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PemesananCreateWithoutUserInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kamar: KamarCreateNestedOneWithoutPemesananInput
    pembayaran?: PembayaranCreateNestedOneWithoutPemesananInput
  }

  export type PemesananUncheckedCreateWithoutUserInput = {
    id?: string
    kamarId: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pembayaran?: PembayaranUncheckedCreateNestedOneWithoutPemesananInput
  }

  export type PemesananCreateOrConnectWithoutUserInput = {
    where: PemesananWhereUniqueInput
    create: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput>
  }

  export type PemesananCreateManyUserInputEnvelope = {
    data: PemesananCreateManyUserInput | PemesananCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UlasanCreateWithoutUserInput = {
    id?: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutUlasanInput
    gambar?: GambarCreateNestedManyWithoutUlasanInput
  }

  export type UlasanUncheckedCreateWithoutUserInput = {
    id?: string
    hotelId: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutUlasanInput
  }

  export type UlasanCreateOrConnectWithoutUserInput = {
    where: UlasanWhereUniqueInput
    create: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput>
  }

  export type UlasanCreateManyUserInputEnvelope = {
    data: UlasanCreateManyUserInput | UlasanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PemesananUpsertWithWhereUniqueWithoutUserInput = {
    where: PemesananWhereUniqueInput
    update: XOR<PemesananUpdateWithoutUserInput, PemesananUncheckedUpdateWithoutUserInput>
    create: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput>
  }

  export type PemesananUpdateWithWhereUniqueWithoutUserInput = {
    where: PemesananWhereUniqueInput
    data: XOR<PemesananUpdateWithoutUserInput, PemesananUncheckedUpdateWithoutUserInput>
  }

  export type PemesananUpdateManyWithWhereWithoutUserInput = {
    where: PemesananScalarWhereInput
    data: XOR<PemesananUpdateManyMutationInput, PemesananUncheckedUpdateManyWithoutUserInput>
  }

  export type PemesananScalarWhereInput = {
    AND?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
    OR?: PemesananScalarWhereInput[]
    NOT?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
    id?: StringFilter<"Pemesanan"> | string
    userId?: StringFilter<"Pemesanan"> | string
    kamarId?: StringFilter<"Pemesanan"> | string
    checkIn?: DateTimeFilter<"Pemesanan"> | Date | string
    checkOut?: DateTimeFilter<"Pemesanan"> | Date | string
    totalHarga?: FloatFilter<"Pemesanan"> | number
    status?: EnumStatusPemesananFilter<"Pemesanan"> | $Enums.StatusPemesanan
    jumlahTamu?: IntFilter<"Pemesanan"> | number
    permintaanKhusus?: StringNullableFilter<"Pemesanan"> | string | null
    createdAt?: DateTimeFilter<"Pemesanan"> | Date | string
    updatedAt?: DateTimeFilter<"Pemesanan"> | Date | string
  }

  export type UlasanUpsertWithWhereUniqueWithoutUserInput = {
    where: UlasanWhereUniqueInput
    update: XOR<UlasanUpdateWithoutUserInput, UlasanUncheckedUpdateWithoutUserInput>
    create: XOR<UlasanCreateWithoutUserInput, UlasanUncheckedCreateWithoutUserInput>
  }

  export type UlasanUpdateWithWhereUniqueWithoutUserInput = {
    where: UlasanWhereUniqueInput
    data: XOR<UlasanUpdateWithoutUserInput, UlasanUncheckedUpdateWithoutUserInput>
  }

  export type UlasanUpdateManyWithWhereWithoutUserInput = {
    where: UlasanScalarWhereInput
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyWithoutUserInput>
  }

  export type UlasanScalarWhereInput = {
    AND?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
    OR?: UlasanScalarWhereInput[]
    NOT?: UlasanScalarWhereInput | UlasanScalarWhereInput[]
    id?: StringFilter<"Ulasan"> | string
    userId?: StringFilter<"Ulasan"> | string
    hotelId?: StringFilter<"Ulasan"> | string
    rating?: IntFilter<"Ulasan"> | number
    komentar?: StringFilter<"Ulasan"> | string
    createdAt?: DateTimeFilter<"Ulasan"> | Date | string
    updatedAt?: DateTimeFilter<"Ulasan"> | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutRolesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    telepon?: StringNullableFilter<"User"> | string | null
    peran?: EnumPeranPenggunaFilter<"User"> | $Enums.PeranPengguna
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateManyWithWhereWithoutRolesInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutRolesInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: StringFilter<"Permission"> | string
    name?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
  }

  export type RoleCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
  }

  export type GambarCreateWithoutHotelInput = {
    id?: string
    url: string
    createdAt?: Date | string
    kamar?: KamarCreateNestedOneWithoutGambarInput
    ulasan?: UlasanCreateNestedOneWithoutGambarInput
  }

  export type GambarUncheckedCreateWithoutHotelInput = {
    id?: string
    url: string
    kamarId?: string | null
    ulasanId?: string | null
    createdAt?: Date | string
  }

  export type GambarCreateOrConnectWithoutHotelInput = {
    where: GambarWhereUniqueInput
    create: XOR<GambarCreateWithoutHotelInput, GambarUncheckedCreateWithoutHotelInput>
  }

  export type GambarCreateManyHotelInputEnvelope = {
    data: GambarCreateManyHotelInput | GambarCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type KamarCreateWithoutHotelInput = {
    id?: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarCreateNestedManyWithoutKamarInput
    pemesanan?: PemesananCreateNestedManyWithoutKamarInput
  }

  export type KamarUncheckedCreateWithoutHotelInput = {
    id?: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutKamarInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutKamarInput
  }

  export type KamarCreateOrConnectWithoutHotelInput = {
    where: KamarWhereUniqueInput
    create: XOR<KamarCreateWithoutHotelInput, KamarUncheckedCreateWithoutHotelInput>
  }

  export type KamarCreateManyHotelInputEnvelope = {
    data: KamarCreateManyHotelInput | KamarCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type UlasanCreateWithoutHotelInput = {
    id?: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUlasanInput
    gambar?: GambarCreateNestedManyWithoutUlasanInput
  }

  export type UlasanUncheckedCreateWithoutHotelInput = {
    id?: string
    userId: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutUlasanInput
  }

  export type UlasanCreateOrConnectWithoutHotelInput = {
    where: UlasanWhereUniqueInput
    create: XOR<UlasanCreateWithoutHotelInput, UlasanUncheckedCreateWithoutHotelInput>
  }

  export type UlasanCreateManyHotelInputEnvelope = {
    data: UlasanCreateManyHotelInput | UlasanCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type FasilitasCreateWithoutHotelInput = {
    id?: string
    nama: string
    ikon: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasUncheckedCreateWithoutHotelInput = {
    id?: string
    nama: string
    ikon: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasCreateOrConnectWithoutHotelInput = {
    where: FasilitasWhereUniqueInput
    create: XOR<FasilitasCreateWithoutHotelInput, FasilitasUncheckedCreateWithoutHotelInput>
  }

  export type FasilitasCreateManyHotelInputEnvelope = {
    data: FasilitasCreateManyHotelInput | FasilitasCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type GambarUpsertWithWhereUniqueWithoutHotelInput = {
    where: GambarWhereUniqueInput
    update: XOR<GambarUpdateWithoutHotelInput, GambarUncheckedUpdateWithoutHotelInput>
    create: XOR<GambarCreateWithoutHotelInput, GambarUncheckedCreateWithoutHotelInput>
  }

  export type GambarUpdateWithWhereUniqueWithoutHotelInput = {
    where: GambarWhereUniqueInput
    data: XOR<GambarUpdateWithoutHotelInput, GambarUncheckedUpdateWithoutHotelInput>
  }

  export type GambarUpdateManyWithWhereWithoutHotelInput = {
    where: GambarScalarWhereInput
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyWithoutHotelInput>
  }

  export type GambarScalarWhereInput = {
    AND?: GambarScalarWhereInput | GambarScalarWhereInput[]
    OR?: GambarScalarWhereInput[]
    NOT?: GambarScalarWhereInput | GambarScalarWhereInput[]
    id?: StringFilter<"Gambar"> | string
    url?: StringFilter<"Gambar"> | string
    hotelId?: StringNullableFilter<"Gambar"> | string | null
    kamarId?: StringNullableFilter<"Gambar"> | string | null
    ulasanId?: StringNullableFilter<"Gambar"> | string | null
    createdAt?: DateTimeFilter<"Gambar"> | Date | string
  }

  export type KamarUpsertWithWhereUniqueWithoutHotelInput = {
    where: KamarWhereUniqueInput
    update: XOR<KamarUpdateWithoutHotelInput, KamarUncheckedUpdateWithoutHotelInput>
    create: XOR<KamarCreateWithoutHotelInput, KamarUncheckedCreateWithoutHotelInput>
  }

  export type KamarUpdateWithWhereUniqueWithoutHotelInput = {
    where: KamarWhereUniqueInput
    data: XOR<KamarUpdateWithoutHotelInput, KamarUncheckedUpdateWithoutHotelInput>
  }

  export type KamarUpdateManyWithWhereWithoutHotelInput = {
    where: KamarScalarWhereInput
    data: XOR<KamarUpdateManyMutationInput, KamarUncheckedUpdateManyWithoutHotelInput>
  }

  export type KamarScalarWhereInput = {
    AND?: KamarScalarWhereInput | KamarScalarWhereInput[]
    OR?: KamarScalarWhereInput[]
    NOT?: KamarScalarWhereInput | KamarScalarWhereInput[]
    id?: StringFilter<"Kamar"> | string
    hotelId?: StringFilter<"Kamar"> | string
    nama?: StringFilter<"Kamar"> | string
    deskripsi?: StringFilter<"Kamar"> | string
    harga?: FloatFilter<"Kamar"> | number
    kapasitas?: IntFilter<"Kamar"> | number
    tipe?: EnumTipeKamarFilter<"Kamar"> | $Enums.TipeKamar
    status?: EnumStatusKamarFilter<"Kamar"> | $Enums.StatusKamar
    createdAt?: DateTimeFilter<"Kamar"> | Date | string
    updatedAt?: DateTimeFilter<"Kamar"> | Date | string
  }

  export type UlasanUpsertWithWhereUniqueWithoutHotelInput = {
    where: UlasanWhereUniqueInput
    update: XOR<UlasanUpdateWithoutHotelInput, UlasanUncheckedUpdateWithoutHotelInput>
    create: XOR<UlasanCreateWithoutHotelInput, UlasanUncheckedCreateWithoutHotelInput>
  }

  export type UlasanUpdateWithWhereUniqueWithoutHotelInput = {
    where: UlasanWhereUniqueInput
    data: XOR<UlasanUpdateWithoutHotelInput, UlasanUncheckedUpdateWithoutHotelInput>
  }

  export type UlasanUpdateManyWithWhereWithoutHotelInput = {
    where: UlasanScalarWhereInput
    data: XOR<UlasanUpdateManyMutationInput, UlasanUncheckedUpdateManyWithoutHotelInput>
  }

  export type FasilitasUpsertWithWhereUniqueWithoutHotelInput = {
    where: FasilitasWhereUniqueInput
    update: XOR<FasilitasUpdateWithoutHotelInput, FasilitasUncheckedUpdateWithoutHotelInput>
    create: XOR<FasilitasCreateWithoutHotelInput, FasilitasUncheckedCreateWithoutHotelInput>
  }

  export type FasilitasUpdateWithWhereUniqueWithoutHotelInput = {
    where: FasilitasWhereUniqueInput
    data: XOR<FasilitasUpdateWithoutHotelInput, FasilitasUncheckedUpdateWithoutHotelInput>
  }

  export type FasilitasUpdateManyWithWhereWithoutHotelInput = {
    where: FasilitasScalarWhereInput
    data: XOR<FasilitasUpdateManyMutationInput, FasilitasUncheckedUpdateManyWithoutHotelInput>
  }

  export type FasilitasScalarWhereInput = {
    AND?: FasilitasScalarWhereInput | FasilitasScalarWhereInput[]
    OR?: FasilitasScalarWhereInput[]
    NOT?: FasilitasScalarWhereInput | FasilitasScalarWhereInput[]
    id?: StringFilter<"Fasilitas"> | string
    nama?: StringFilter<"Fasilitas"> | string
    ikon?: StringFilter<"Fasilitas"> | string
    hotelId?: StringFilter<"Fasilitas"> | string
    createdAt?: DateTimeFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeFilter<"Fasilitas"> | Date | string
  }

  export type HotelCreateWithoutKamarInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarCreateNestedManyWithoutHotelInput
    ulasan?: UlasanCreateNestedManyWithoutHotelInput
    fasilitas?: FasilitasCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutKamarInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutHotelInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutHotelInput
    fasilitas?: FasilitasUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutKamarInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutKamarInput, HotelUncheckedCreateWithoutKamarInput>
  }

  export type GambarCreateWithoutKamarInput = {
    id?: string
    url: string
    createdAt?: Date | string
    hotel?: HotelCreateNestedOneWithoutGambarInput
    ulasan?: UlasanCreateNestedOneWithoutGambarInput
  }

  export type GambarUncheckedCreateWithoutKamarInput = {
    id?: string
    url: string
    hotelId?: string | null
    ulasanId?: string | null
    createdAt?: Date | string
  }

  export type GambarCreateOrConnectWithoutKamarInput = {
    where: GambarWhereUniqueInput
    create: XOR<GambarCreateWithoutKamarInput, GambarUncheckedCreateWithoutKamarInput>
  }

  export type GambarCreateManyKamarInputEnvelope = {
    data: GambarCreateManyKamarInput | GambarCreateManyKamarInput[]
    skipDuplicates?: boolean
  }

  export type PemesananCreateWithoutKamarInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPemesananInput
    pembayaran?: PembayaranCreateNestedOneWithoutPemesananInput
  }

  export type PemesananUncheckedCreateWithoutKamarInput = {
    id?: string
    userId: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pembayaran?: PembayaranUncheckedCreateNestedOneWithoutPemesananInput
  }

  export type PemesananCreateOrConnectWithoutKamarInput = {
    where: PemesananWhereUniqueInput
    create: XOR<PemesananCreateWithoutKamarInput, PemesananUncheckedCreateWithoutKamarInput>
  }

  export type PemesananCreateManyKamarInputEnvelope = {
    data: PemesananCreateManyKamarInput | PemesananCreateManyKamarInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithoutKamarInput = {
    update: XOR<HotelUpdateWithoutKamarInput, HotelUncheckedUpdateWithoutKamarInput>
    create: XOR<HotelCreateWithoutKamarInput, HotelUncheckedCreateWithoutKamarInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutKamarInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutKamarInput, HotelUncheckedUpdateWithoutKamarInput>
  }

  export type HotelUpdateWithoutKamarInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUpdateManyWithoutHotelNestedInput
    ulasan?: UlasanUpdateManyWithoutHotelNestedInput
    fasilitas?: FasilitasUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutKamarInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutHotelNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutHotelNestedInput
    fasilitas?: FasilitasUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type GambarUpsertWithWhereUniqueWithoutKamarInput = {
    where: GambarWhereUniqueInput
    update: XOR<GambarUpdateWithoutKamarInput, GambarUncheckedUpdateWithoutKamarInput>
    create: XOR<GambarCreateWithoutKamarInput, GambarUncheckedCreateWithoutKamarInput>
  }

  export type GambarUpdateWithWhereUniqueWithoutKamarInput = {
    where: GambarWhereUniqueInput
    data: XOR<GambarUpdateWithoutKamarInput, GambarUncheckedUpdateWithoutKamarInput>
  }

  export type GambarUpdateManyWithWhereWithoutKamarInput = {
    where: GambarScalarWhereInput
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyWithoutKamarInput>
  }

  export type PemesananUpsertWithWhereUniqueWithoutKamarInput = {
    where: PemesananWhereUniqueInput
    update: XOR<PemesananUpdateWithoutKamarInput, PemesananUncheckedUpdateWithoutKamarInput>
    create: XOR<PemesananCreateWithoutKamarInput, PemesananUncheckedCreateWithoutKamarInput>
  }

  export type PemesananUpdateWithWhereUniqueWithoutKamarInput = {
    where: PemesananWhereUniqueInput
    data: XOR<PemesananUpdateWithoutKamarInput, PemesananUncheckedUpdateWithoutKamarInput>
  }

  export type PemesananUpdateManyWithWhereWithoutKamarInput = {
    where: PemesananScalarWhereInput
    data: XOR<PemesananUpdateManyMutationInput, PemesananUncheckedUpdateManyWithoutKamarInput>
  }

  export type UserCreateWithoutPemesananInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    ulasan?: UlasanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPemesananInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    roleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPemesananInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPemesananInput, UserUncheckedCreateWithoutPemesananInput>
  }

  export type KamarCreateWithoutPemesananInput = {
    id?: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutKamarInput
    gambar?: GambarCreateNestedManyWithoutKamarInput
  }

  export type KamarUncheckedCreateWithoutPemesananInput = {
    id?: string
    hotelId: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutKamarInput
  }

  export type KamarCreateOrConnectWithoutPemesananInput = {
    where: KamarWhereUniqueInput
    create: XOR<KamarCreateWithoutPemesananInput, KamarUncheckedCreateWithoutPemesananInput>
  }

  export type PembayaranCreateWithoutPemesananInput = {
    id?: string
    jumlah: number
    metodePembayaran: string
    status: $Enums.StatusPembayaran
    idTransaksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PembayaranUncheckedCreateWithoutPemesananInput = {
    id?: string
    jumlah: number
    metodePembayaran: string
    status: $Enums.StatusPembayaran
    idTransaksi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PembayaranCreateOrConnectWithoutPemesananInput = {
    where: PembayaranWhereUniqueInput
    create: XOR<PembayaranCreateWithoutPemesananInput, PembayaranUncheckedCreateWithoutPemesananInput>
  }

  export type UserUpsertWithoutPemesananInput = {
    update: XOR<UserUpdateWithoutPemesananInput, UserUncheckedUpdateWithoutPemesananInput>
    create: XOR<UserCreateWithoutPemesananInput, UserUncheckedCreateWithoutPemesananInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPemesananInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPemesananInput, UserUncheckedUpdateWithoutPemesananInput>
  }

  export type UserUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KamarUpsertWithoutPemesananInput = {
    update: XOR<KamarUpdateWithoutPemesananInput, KamarUncheckedUpdateWithoutPemesananInput>
    create: XOR<KamarCreateWithoutPemesananInput, KamarUncheckedCreateWithoutPemesananInput>
    where?: KamarWhereInput
  }

  export type KamarUpdateToOneWithWhereWithoutPemesananInput = {
    where?: KamarWhereInput
    data: XOR<KamarUpdateWithoutPemesananInput, KamarUncheckedUpdateWithoutPemesananInput>
  }

  export type KamarUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutKamarNestedInput
    gambar?: GambarUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutKamarNestedInput
  }

  export type PembayaranUpsertWithoutPemesananInput = {
    update: XOR<PembayaranUpdateWithoutPemesananInput, PembayaranUncheckedUpdateWithoutPemesananInput>
    create: XOR<PembayaranCreateWithoutPemesananInput, PembayaranUncheckedCreateWithoutPemesananInput>
    where?: PembayaranWhereInput
  }

  export type PembayaranUpdateToOneWithWhereWithoutPemesananInput = {
    where?: PembayaranWhereInput
    data: XOR<PembayaranUpdateWithoutPemesananInput, PembayaranUncheckedUpdateWithoutPemesananInput>
  }

  export type PembayaranUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: FloatFieldUpdateOperationsInput | number
    metodePembayaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    idTransaksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembayaranUncheckedUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: FloatFieldUpdateOperationsInput | number
    metodePembayaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    idTransaksi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananCreateWithoutPembayaranInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPemesananInput
    kamar: KamarCreateNestedOneWithoutPemesananInput
  }

  export type PemesananUncheckedCreateWithoutPembayaranInput = {
    id?: string
    userId: string
    kamarId: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PemesananCreateOrConnectWithoutPembayaranInput = {
    where: PemesananWhereUniqueInput
    create: XOR<PemesananCreateWithoutPembayaranInput, PemesananUncheckedCreateWithoutPembayaranInput>
  }

  export type PemesananUpsertWithoutPembayaranInput = {
    update: XOR<PemesananUpdateWithoutPembayaranInput, PemesananUncheckedUpdateWithoutPembayaranInput>
    create: XOR<PemesananCreateWithoutPembayaranInput, PemesananUncheckedCreateWithoutPembayaranInput>
    where?: PemesananWhereInput
  }

  export type PemesananUpdateToOneWithWhereWithoutPembayaranInput = {
    where?: PemesananWhereInput
    data: XOR<PemesananUpdateWithoutPembayaranInput, PemesananUncheckedUpdateWithoutPembayaranInput>
  }

  export type PemesananUpdateWithoutPembayaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPemesananNestedInput
    kamar?: KamarUpdateOneRequiredWithoutPemesananNestedInput
  }

  export type PemesananUncheckedUpdateWithoutPembayaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kamarId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUlasanInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUlasanInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    roleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUlasanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
  }

  export type HotelCreateWithoutUlasanInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarCreateNestedManyWithoutHotelInput
    kamar?: KamarCreateNestedManyWithoutHotelInput
    fasilitas?: FasilitasCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutUlasanInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutHotelInput
    kamar?: KamarUncheckedCreateNestedManyWithoutHotelInput
    fasilitas?: FasilitasUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutUlasanInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutUlasanInput, HotelUncheckedCreateWithoutUlasanInput>
  }

  export type GambarCreateWithoutUlasanInput = {
    id?: string
    url: string
    createdAt?: Date | string
    hotel?: HotelCreateNestedOneWithoutGambarInput
    kamar?: KamarCreateNestedOneWithoutGambarInput
  }

  export type GambarUncheckedCreateWithoutUlasanInput = {
    id?: string
    url: string
    hotelId?: string | null
    kamarId?: string | null
    createdAt?: Date | string
  }

  export type GambarCreateOrConnectWithoutUlasanInput = {
    where: GambarWhereUniqueInput
    create: XOR<GambarCreateWithoutUlasanInput, GambarUncheckedCreateWithoutUlasanInput>
  }

  export type GambarCreateManyUlasanInputEnvelope = {
    data: GambarCreateManyUlasanInput | GambarCreateManyUlasanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUlasanInput = {
    update: XOR<UserUpdateWithoutUlasanInput, UserUncheckedUpdateWithoutUlasanInput>
    create: XOR<UserCreateWithoutUlasanInput, UserUncheckedCreateWithoutUlasanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUlasanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUlasanInput, UserUncheckedUpdateWithoutUlasanInput>
  }

  export type UserUpdateWithoutUlasanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUlasanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HotelUpsertWithoutUlasanInput = {
    update: XOR<HotelUpdateWithoutUlasanInput, HotelUncheckedUpdateWithoutUlasanInput>
    create: XOR<HotelCreateWithoutUlasanInput, HotelUncheckedCreateWithoutUlasanInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutUlasanInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutUlasanInput, HotelUncheckedUpdateWithoutUlasanInput>
  }

  export type HotelUpdateWithoutUlasanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUpdateManyWithoutHotelNestedInput
    kamar?: KamarUpdateManyWithoutHotelNestedInput
    fasilitas?: FasilitasUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutUlasanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutHotelNestedInput
    kamar?: KamarUncheckedUpdateManyWithoutHotelNestedInput
    fasilitas?: FasilitasUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type GambarUpsertWithWhereUniqueWithoutUlasanInput = {
    where: GambarWhereUniqueInput
    update: XOR<GambarUpdateWithoutUlasanInput, GambarUncheckedUpdateWithoutUlasanInput>
    create: XOR<GambarCreateWithoutUlasanInput, GambarUncheckedCreateWithoutUlasanInput>
  }

  export type GambarUpdateWithWhereUniqueWithoutUlasanInput = {
    where: GambarWhereUniqueInput
    data: XOR<GambarUpdateWithoutUlasanInput, GambarUncheckedUpdateWithoutUlasanInput>
  }

  export type GambarUpdateManyWithWhereWithoutUlasanInput = {
    where: GambarScalarWhereInput
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyWithoutUlasanInput>
  }

  export type HotelCreateWithoutGambarInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kamar?: KamarCreateNestedManyWithoutHotelInput
    ulasan?: UlasanCreateNestedManyWithoutHotelInput
    fasilitas?: FasilitasCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutGambarInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kamar?: KamarUncheckedCreateNestedManyWithoutHotelInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutHotelInput
    fasilitas?: FasilitasUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutGambarInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutGambarInput, HotelUncheckedCreateWithoutGambarInput>
  }

  export type KamarCreateWithoutGambarInput = {
    id?: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutKamarInput
    pemesanan?: PemesananCreateNestedManyWithoutKamarInput
  }

  export type KamarUncheckedCreateWithoutGambarInput = {
    id?: string
    hotelId: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutKamarInput
  }

  export type KamarCreateOrConnectWithoutGambarInput = {
    where: KamarWhereUniqueInput
    create: XOR<KamarCreateWithoutGambarInput, KamarUncheckedCreateWithoutGambarInput>
  }

  export type UlasanCreateWithoutGambarInput = {
    id?: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUlasanInput
    hotel: HotelCreateNestedOneWithoutUlasanInput
  }

  export type UlasanUncheckedCreateWithoutGambarInput = {
    id?: string
    userId: string
    hotelId: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UlasanCreateOrConnectWithoutGambarInput = {
    where: UlasanWhereUniqueInput
    create: XOR<UlasanCreateWithoutGambarInput, UlasanUncheckedCreateWithoutGambarInput>
  }

  export type HotelUpsertWithoutGambarInput = {
    update: XOR<HotelUpdateWithoutGambarInput, HotelUncheckedUpdateWithoutGambarInput>
    create: XOR<HotelCreateWithoutGambarInput, HotelUncheckedCreateWithoutGambarInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutGambarInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutGambarInput, HotelUncheckedUpdateWithoutGambarInput>
  }

  export type HotelUpdateWithoutGambarInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kamar?: KamarUpdateManyWithoutHotelNestedInput
    ulasan?: UlasanUpdateManyWithoutHotelNestedInput
    fasilitas?: FasilitasUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutGambarInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kamar?: KamarUncheckedUpdateManyWithoutHotelNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutHotelNestedInput
    fasilitas?: FasilitasUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type KamarUpsertWithoutGambarInput = {
    update: XOR<KamarUpdateWithoutGambarInput, KamarUncheckedUpdateWithoutGambarInput>
    create: XOR<KamarCreateWithoutGambarInput, KamarUncheckedCreateWithoutGambarInput>
    where?: KamarWhereInput
  }

  export type KamarUpdateToOneWithWhereWithoutGambarInput = {
    where?: KamarWhereInput
    data: XOR<KamarUpdateWithoutGambarInput, KamarUncheckedUpdateWithoutGambarInput>
  }

  export type KamarUpdateWithoutGambarInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutKamarNestedInput
    pemesanan?: PemesananUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateWithoutGambarInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: PemesananUncheckedUpdateManyWithoutKamarNestedInput
  }

  export type UlasanUpsertWithoutGambarInput = {
    update: XOR<UlasanUpdateWithoutGambarInput, UlasanUncheckedUpdateWithoutGambarInput>
    create: XOR<UlasanCreateWithoutGambarInput, UlasanUncheckedCreateWithoutGambarInput>
    where?: UlasanWhereInput
  }

  export type UlasanUpdateToOneWithWhereWithoutGambarInput = {
    where?: UlasanWhereInput
    data: XOR<UlasanUpdateWithoutGambarInput, UlasanUncheckedUpdateWithoutGambarInput>
  }

  export type UlasanUpdateWithoutGambarInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUlasanNestedInput
    hotel?: HotelUpdateOneRequiredWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateWithoutGambarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelCreateWithoutFasilitasInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarCreateNestedManyWithoutHotelInput
    kamar?: KamarCreateNestedManyWithoutHotelInput
    ulasan?: UlasanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutFasilitasInput = {
    id?: string
    nama: string
    deskripsi: string
    alamat: string
    kota: string
    negara: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutHotelInput
    kamar?: KamarUncheckedCreateNestedManyWithoutHotelInput
    ulasan?: UlasanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutFasilitasInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutFasilitasInput, HotelUncheckedCreateWithoutFasilitasInput>
  }

  export type HotelUpsertWithoutFasilitasInput = {
    update: XOR<HotelUpdateWithoutFasilitasInput, HotelUncheckedUpdateWithoutFasilitasInput>
    create: XOR<HotelCreateWithoutFasilitasInput, HotelUncheckedCreateWithoutFasilitasInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutFasilitasInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutFasilitasInput, HotelUncheckedUpdateWithoutFasilitasInput>
  }

  export type HotelUpdateWithoutFasilitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUpdateManyWithoutHotelNestedInput
    kamar?: KamarUpdateManyWithoutHotelNestedInput
    ulasan?: UlasanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutFasilitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    negara?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutHotelNestedInput
    kamar?: KamarUncheckedUpdateManyWithoutHotelNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PemesananCreateManyUserInput = {
    id?: string
    kamarId: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UlasanCreateManyUserInput = {
    id?: string
    hotelId: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kamar?: KamarUpdateOneRequiredWithoutPemesananNestedInput
    pembayaran?: PembayaranUpdateOneWithoutPemesananNestedInput
  }

  export type PemesananUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kamarId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pembayaran?: PembayaranUncheckedUpdateOneWithoutPemesananNestedInput
  }

  export type PemesananUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kamarId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UlasanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutUlasanNestedInput
    gambar?: GambarUpdateManyWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    telepon?: string | null
    peran?: $Enums.PeranPengguna
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
    ulasan?: UlasanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    peran?: EnumPeranPenggunaFieldUpdateOperationsInput | $Enums.PeranPengguna
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateManyHotelInput = {
    id?: string
    url: string
    kamarId?: string | null
    ulasanId?: string | null
    createdAt?: Date | string
  }

  export type KamarCreateManyHotelInput = {
    id?: string
    nama: string
    deskripsi: string
    harga: number
    kapasitas: number
    tipe: $Enums.TipeKamar
    status?: $Enums.StatusKamar
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UlasanCreateManyHotelInput = {
    id?: string
    userId: string
    rating: number
    komentar: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasCreateManyHotelInput = {
    id?: string
    nama: string
    ikon: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GambarUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kamar?: KamarUpdateOneWithoutGambarNestedInput
    ulasan?: UlasanUpdateOneWithoutGambarNestedInput
  }

  export type GambarUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    kamarId?: NullableStringFieldUpdateOperationsInput | string | null
    ulasanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    kamarId?: NullableStringFieldUpdateOperationsInput | string | null
    ulasanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KamarUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUpdateManyWithoutKamarNestedInput
    pemesanan?: PemesananUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutKamarNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutKamarNestedInput
  }

  export type KamarUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    kapasitas?: IntFieldUpdateOperationsInput | number
    tipe?: EnumTipeKamarFieldUpdateOperationsInput | $Enums.TipeKamar
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UlasanUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUlasanNestedInput
    gambar?: GambarUpdateManyWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutUlasanNestedInput
  }

  export type UlasanUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    komentar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    ikon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateManyKamarInput = {
    id?: string
    url: string
    hotelId?: string | null
    ulasanId?: string | null
    createdAt?: Date | string
  }

  export type PemesananCreateManyKamarInput = {
    id?: string
    userId: string
    checkIn: Date | string
    checkOut: Date | string
    totalHarga: number
    status?: $Enums.StatusPemesanan
    jumlahTamu: number
    permintaanKhusus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GambarUpdateWithoutKamarInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneWithoutGambarNestedInput
    ulasan?: UlasanUpdateOneWithoutGambarNestedInput
  }

  export type GambarUncheckedUpdateWithoutKamarInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    ulasanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarUncheckedUpdateManyWithoutKamarInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    ulasanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananUpdateWithoutKamarInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPemesananNestedInput
    pembayaran?: PembayaranUpdateOneWithoutPemesananNestedInput
  }

  export type PemesananUncheckedUpdateWithoutKamarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pembayaran?: PembayaranUncheckedUpdateOneWithoutPemesananNestedInput
  }

  export type PemesananUncheckedUpdateManyWithoutKamarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    jumlahTamu?: IntFieldUpdateOperationsInput | number
    permintaanKhusus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateManyUlasanInput = {
    id?: string
    url: string
    hotelId?: string | null
    kamarId?: string | null
    createdAt?: Date | string
  }

  export type GambarUpdateWithoutUlasanInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneWithoutGambarNestedInput
    kamar?: KamarUpdateOneWithoutGambarNestedInput
  }

  export type GambarUncheckedUpdateWithoutUlasanInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    kamarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarUncheckedUpdateManyWithoutUlasanInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    kamarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionCountOutputTypeDefaultArgs instead
     */
    export type PermissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HotelCountOutputTypeDefaultArgs instead
     */
    export type HotelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HotelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KamarCountOutputTypeDefaultArgs instead
     */
    export type KamarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KamarCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UlasanCountOutputTypeDefaultArgs instead
     */
    export type UlasanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UlasanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionDefaultArgs instead
     */
    export type PermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HotelDefaultArgs instead
     */
    export type HotelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HotelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KamarDefaultArgs instead
     */
    export type KamarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KamarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PemesananDefaultArgs instead
     */
    export type PemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PemesananDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PembayaranDefaultArgs instead
     */
    export type PembayaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PembayaranDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UlasanDefaultArgs instead
     */
    export type UlasanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UlasanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GambarDefaultArgs instead
     */
    export type GambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GambarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FasilitasDefaultArgs instead
     */
    export type FasilitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FasilitasDefaultArgs<ExtArgs>

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