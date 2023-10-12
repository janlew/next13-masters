/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: unknown; output: unknown; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cart = {
  cart_items?: Maybe<CartItemRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CartCart_ItemsArgs = {
  filters?: InputMaybe<CartItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CartEntity = {
  attributes?: Maybe<Cart>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CartEntityResponse = {
  data?: Maybe<CartEntity>;
};

export type CartEntityResponseCollection = {
  data: Array<CartEntity>;
  meta: ResponseCollectionMeta;
};

export type CartFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CartFiltersInput>>>;
  cart_items?: InputMaybe<CartItemFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CartFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CartFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CartInput = {
  cart_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItem = {
  cart?: Maybe<CartEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<ProductEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CartItemEntity = {
  attributes?: Maybe<CartItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CartItemEntityResponse = {
  data?: Maybe<CartItemEntity>;
};

export type CartItemEntityResponseCollection = {
  data: Array<CartItemEntity>;
  meta: ResponseCollectionMeta;
};

export type CartItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CartItemFiltersInput>>>;
  cart?: InputMaybe<CartFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CartItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CartItemFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CartItemInput = {
  cart?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type CartItemRelationResponseCollection = {
  data: Array<CartItemEntity>;
};

export type Category = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  data: Array<CategoryEntity>;
};

export type Collection = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CollectionProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CollectionEntity = {
  attributes?: Maybe<Collection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CollectionEntityResponse = {
  data?: Maybe<CollectionEntity>;
};

export type CollectionEntityResponseCollection = {
  data: Array<CollectionEntity>;
  meta: ResponseCollectionMeta;
};

export type CollectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CollectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollectionRelationResponseCollection = {
  data: Array<CollectionEntity>;
};

export type Comment = {
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  headline: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<ProductEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommentEntity = {
  attributes?: Maybe<Comment>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CommentEntityResponse = {
  data?: Maybe<CommentEntity>;
};

export type CommentEntityResponseCollection = {
  data: Array<CommentEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  headline?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentRelationResponseCollection = {
  data: Array<CommentEntity>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Cart | CartItem | Category | Collection | Comment | I18NLocale | Product | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCart?: Maybe<CartEntityResponse>;
  createCartItem?: Maybe<CartItemEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCollection?: Maybe<CollectionEntityResponse>;
  createComment?: Maybe<CommentEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCart?: Maybe<CartEntityResponse>;
  deleteCartItem?: Maybe<CartItemEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCollection?: Maybe<CollectionEntityResponse>;
  deleteComment?: Maybe<CommentEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCart?: Maybe<CartEntityResponse>;
  updateCartItem?: Maybe<CartItemEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCollection?: Maybe<CollectionEntityResponse>;
  updateComment?: Maybe<CommentEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCartArgs = {
  data: CartInput;
};


export type MutationCreateCartItemArgs = {
  data: CartItemInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCollectionArgs = {
  data: CollectionInput;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCartArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCartItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateCartArgs = {
  data: CartInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCartItemArgs = {
  data: CartItemInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCollectionArgs = {
  data: CollectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Product = {
  avgRating?: Maybe<Scalars['Int']['output']>;
  cart_items?: Maybe<CartItemRelationResponseCollection>;
  categories?: Maybe<CategoryRelationResponseCollection>;
  collections?: Maybe<CollectionRelationResponseCollection>;
  comments?: Maybe<CommentRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  images: UploadFileRelationResponseCollection;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  ratingCount?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductCart_ItemsArgs = {
  filters?: InputMaybe<CartItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntity = {
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  avgRating?: InputMaybe<IntFilterInput>;
  cart_items?: InputMaybe<CartItemFiltersInput>;
  categories?: InputMaybe<CategoryFiltersInput>;
  collections?: InputMaybe<CollectionFiltersInput>;
  comments?: InputMaybe<CommentFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  price?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  ratingCount?: InputMaybe<IntFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  avgRating?: InputMaybe<Scalars['Int']['input']>;
  cart_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  ratingCount?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductRelationResponseCollection = {
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  cart?: Maybe<CartEntityResponse>;
  cartItem?: Maybe<CartItemEntityResponse>;
  cartItems?: Maybe<CartItemEntityResponseCollection>;
  carts?: Maybe<CartEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  collection?: Maybe<CollectionEntityResponse>;
  collections?: Maybe<CollectionEntityResponseCollection>;
  comment?: Maybe<CommentEntityResponse>;
  comments?: Maybe<CommentEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCartArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCartItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCartItemsArgs = {
  filters?: InputMaybe<CartItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCartsArgs = {
  filters?: InputMaybe<CartFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
};

export type CartAddItemMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  cartId: Scalars['ID']['input'];
  publishedAt: Scalars['DateTime']['input'];
}>;


export type CartAddItemMutation = { createCartItem?: { data?: { id?: string | null } | null } | null };

export type CartChangeItemQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartChangeItemQuantityMutation = { updateCartItem?: { data?: { id?: string | null, attributes?: { quantity?: number | null } | null } | null } | null };

export type CartCreateMutationVariables = Exact<{
  publishedAt: Scalars['DateTime']['input'];
}>;


export type CartCreateMutation = { createCart?: { data?: { id?: string | null, attributes?: { cart_items?: { data: Array<{ id?: string | null, attributes?: { quantity?: number | null, product?: { data?: { id?: string | null, attributes?: { name: string, price: number } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { data?: { id?: string | null, attributes?: { cart_items?: { data: Array<{ id?: string | null, attributes?: { quantity?: number | null, product?: { data?: { id?: string | null, attributes?: { name: string, price: number } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type CartGetItemsCountByCartIdQueryVariables = Exact<{
  cartId: Scalars['ID']['input'];
}>;


export type CartGetItemsCountByCartIdQuery = { cartItems?: { data: Array<{ attributes?: { quantity?: number | null } | null }> } | null };

export type CartRemoveCartItemWithIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartRemoveCartItemWithIdMutation = { deleteCartItem?: { data?: { id?: string | null } | null } | null };

export type ProductsAddCommentByProductIdMutationVariables = Exact<{
  headline: Scalars['String']['input'];
  content: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  publishedAt: Scalars['DateTime']['input'];
}>;


export type ProductsAddCommentByProductIdMutation = { createComment?: { data?: { id?: string | null } | null } | null };

export type ProductsGetCommentsByProductIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductsGetCommentsByProductIdQuery = { comments?: { data: Array<{ attributes?: { headline: string, content: string, rating: number, name: string, email: string } | null }> } | null };

export type ProductsGetCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGetCountQuery = { products?: { meta: { pagination: { total: number } } } | null };

export type ProductsGetCountByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetCountByCategorySlugQuery = { products?: { meta: { pagination: { total: number } } } | null };

export type ProductsGetListQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type ProductsGetListQuery = { products?: { data: Array<{ id?: string | null, attributes?: { slug: string, name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null, images: { data: Array<{ attributes?: { url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> }, categories?: { data: Array<{ attributes?: { name: string } | null }> } | null } | null }> } | null };

export type ProductsGetListByCategorySlugQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
}>;


export type ProductsGetListByCategorySlugQuery = { products?: { data: Array<{ id?: string | null, attributes?: { slug: string, name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null, images: { data: Array<{ attributes?: { url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> }, categories?: { data: Array<{ attributes?: { name: string } | null }> } | null } | null }> } | null };

export type ProductsGetListByCollectionNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type ProductsGetListByCollectionNameQuery = { products?: { data: Array<{ id?: string | null, attributes?: { slug: string, name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null, images: { data: Array<{ attributes?: { url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> }, categories?: { data: Array<{ attributes?: { name: string } | null }> } | null } | null }> } | null };

export type ProductsGetListByQueryQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type ProductsGetListByQueryQuery = { products?: { data: Array<{ id?: string | null, attributes?: { slug: string, name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null, images: { data: Array<{ attributes?: { url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> }, categories?: { data: Array<{ attributes?: { name: string } | null }> } | null } | null }> } | null };

export type ProductsGetSingleByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductsGetSingleByIdQuery = { product?: { data?: { id?: string | null, attributes?: { slug: string, name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null, images: { data: Array<{ attributes?: { url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> }, categories?: { data: Array<{ attributes?: { name: string } | null }> } | null } | null } | null } | null };

export type ProductsGetSingleBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetSingleBySlugQuery = { products?: { data: Array<{ id?: string | null, attributes?: { slug: string, name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null, images: { data: Array<{ attributes?: { url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> }, categories?: { data: Array<{ attributes?: { name: string } | null }> } | null } | null }> } | null };

export type ProductsUpdateProductRatingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  avgRating: Scalars['Int']['input'];
  ratingCount: Scalars['Int']['input'];
}>;


export type ProductsUpdateProductRatingMutation = { updateProduct?: { data?: { id?: string | null } | null } | null };

export type CommentFragment = { attributes?: { headline: string, content: string, rating: number, name: string, email: string } | null };

export type ProductItemResponseFragment = { data?: { id?: string | null, attributes?: { slug: string, name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null, images: { data: Array<{ attributes?: { url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> }, categories?: { data: Array<{ attributes?: { name: string } | null }> } | null } | null } | null };

export type ProductListItemFragment = { id?: string | null, attributes?: { slug: string, name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null, images: { data: Array<{ attributes?: { url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> }, categories?: { data: Array<{ attributes?: { name: string } | null }> } | null } | null };

export type ProductListResponseFragment = { data: Array<{ id?: string | null, attributes?: { slug: string, name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null, images: { data: Array<{ attributes?: { url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> }, categories?: { data: Array<{ attributes?: { name: string } | null }> } | null } | null }> };

export type ImageFragment = { url: string, alternativeText?: string | null, height?: number | null, width?: number | null };

export type ProductListItemInfoFragment = { name: string, description: string, price: number, avgRating?: number | null, ratingCount?: number | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CommentFragmentDoc = new TypedDocumentString(`
    fragment Comment on CommentEntity {
  attributes {
    headline
    content
    rating
    name
    email
  }
}
    `, {"fragmentName":"Comment"}) as unknown as TypedDocumentString<CommentFragment, unknown>;
export const ProductListItemInfoFragmentDoc = new TypedDocumentString(`
    fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}
    `, {"fragmentName":"ProductListItemInfo"}) as unknown as TypedDocumentString<ProductListItemInfoFragment, unknown>;
export const ImageFragmentDoc = new TypedDocumentString(`
    fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
    `, {"fragmentName":"Image"}) as unknown as TypedDocumentString<ImageFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    ...ProductListItemInfo
    slug
    images {
      data {
        attributes {
          ...Image
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
}
    fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}`, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ProductItemResponseFragmentDoc = new TypedDocumentString(`
    fragment ProductItemResponse on ProductEntityResponse {
  data {
    ...ProductListItem
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    ...ProductListItemInfo
    slug
    images {
      data {
        attributes {
          ...Image
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
}
fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}`, {"fragmentName":"ProductItemResponse"}) as unknown as TypedDocumentString<ProductItemResponseFragment, unknown>;
export const ProductListResponseFragmentDoc = new TypedDocumentString(`
    fragment ProductListResponse on ProductEntityResponseCollection {
  data {
    ...ProductListItem
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    ...ProductListItemInfo
    slug
    images {
      data {
        attributes {
          ...Image
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
}
fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}`, {"fragmentName":"ProductListResponse"}) as unknown as TypedDocumentString<ProductListResponseFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($productId: ID!, $quantity: Int!, $cartId: ID!, $publishedAt: DateTime!) {
  createCartItem(
    data: {product: $productId, quantity: $quantity, cart: $cartId, publishedAt: $publishedAt}
  ) {
    data {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($id: ID!, $quantity: Int!) {
  updateCartItem(id: $id, data: {quantity: $quantity}) {
    data {
      id
      attributes {
        quantity
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartChangeItemQuantityMutation, CartChangeItemQuantityMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($publishedAt: DateTime!) {
  createCart(data: {publishedAt: $publishedAt}) {
    data {
      id
      attributes {
        cart_items {
          data {
            id
            attributes {
              product {
                data {
                  id
                  attributes {
                    name
                    price
                  }
                }
              }
              quantity
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    data {
      id
      attributes {
        cart_items {
          data {
            id
            attributes {
              product {
                data {
                  id
                  attributes {
                    name
                    price
                  }
                }
              }
              quantity
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartGetItemsCountByCartIdDocument = new TypedDocumentString(`
    query CartGetItemsCountByCartId($cartId: ID!) {
  cartItems(filters: {cart: {id: {eq: $cartId}}}) {
    data {
      attributes {
        quantity
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartGetItemsCountByCartIdQuery, CartGetItemsCountByCartIdQueryVariables>;
export const CartRemoveCartItemWithIdDocument = new TypedDocumentString(`
    mutation CartRemoveCartItemWithId($id: ID!) {
  deleteCartItem(id: $id) {
    data {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CartRemoveCartItemWithIdMutation, CartRemoveCartItemWithIdMutationVariables>;
export const ProductsAddCommentByProductIdDocument = new TypedDocumentString(`
    mutation ProductsAddCommentByProductId($headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!, $productId: ID!, $publishedAt: DateTime!) {
  createComment(
    data: {headline: $headline, content: $content, rating: $rating, name: $name, email: $email, product: $productId, publishedAt: $publishedAt}
  ) {
    data {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsAddCommentByProductIdMutation, ProductsAddCommentByProductIdMutationVariables>;
export const ProductsGetCommentsByProductIdDocument = new TypedDocumentString(`
    query ProductsGetCommentsByProductId($id: ID!) {
  comments(filters: {product: {id: {eq: $id}}}) {
    data {
      ...Comment
    }
  }
}
    fragment Comment on CommentEntity {
  attributes {
    headline
    content
    rating
    name
    email
  }
}`) as unknown as TypedDocumentString<ProductsGetCommentsByProductIdQuery, ProductsGetCommentsByProductIdQueryVariables>;
export const ProductsGetCountDocument = new TypedDocumentString(`
    query ProductsGetCount {
  products {
    meta {
      pagination {
        total
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetCountQuery, ProductsGetCountQueryVariables>;
export const ProductsGetCountByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetCountByCategorySlug($slug: String!) {
  products(filters: {categories: {slug: {eq: $slug}}}) {
    meta {
      pagination {
        total
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetCountByCategorySlugQuery, ProductsGetCountByCategorySlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($page: Int!, $pageSize: Int!, $sort: [String]) {
  products(pagination: {page: $page, pageSize: $pageSize}, sort: $sort) {
    ...ProductListResponse
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    ...ProductListItemInfo
    slug
    images {
      data {
        attributes {
          ...Image
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
}
fragment ProductListResponse on ProductEntityResponseCollection {
  data {
    ...ProductListItem
  }
}
fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetListByCategorySlug($page: Int!, $pageSize: Int!, $slug: String!) {
  products(
    pagination: {page: $page, pageSize: $pageSize}
    filters: {categories: {slug: {eq: $slug}}}
  ) {
    ...ProductListResponse
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    ...ProductListItemInfo
    slug
    images {
      data {
        attributes {
          ...Image
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
}
fragment ProductListResponse on ProductEntityResponseCollection {
  data {
    ...ProductListItem
  }
}
fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}`) as unknown as TypedDocumentString<ProductsGetListByCategorySlugQuery, ProductsGetListByCategorySlugQueryVariables>;
export const ProductsGetListByCollectionNameDocument = new TypedDocumentString(`
    query ProductsGetListByCollectionName($name: String!) {
  products(filters: {collections: {name: {eq: $name}}}) {
    ...ProductListResponse
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    ...ProductListItemInfo
    slug
    images {
      data {
        attributes {
          ...Image
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
}
fragment ProductListResponse on ProductEntityResponseCollection {
  data {
    ...ProductListItem
  }
}
fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}`) as unknown as TypedDocumentString<ProductsGetListByCollectionNameQuery, ProductsGetListByCollectionNameQueryVariables>;
export const ProductsGetListByQueryDocument = new TypedDocumentString(`
    query ProductsGetListByQuery($query: String!) {
  products(filters: {name: {contains: $query}}) {
    ...ProductListResponse
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    ...ProductListItemInfo
    slug
    images {
      data {
        attributes {
          ...Image
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
}
fragment ProductListResponse on ProductEntityResponseCollection {
  data {
    ...ProductListItem
  }
}
fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}`) as unknown as TypedDocumentString<ProductsGetListByQueryQuery, ProductsGetListByQueryQueryVariables>;
export const ProductsGetSingleByIdDocument = new TypedDocumentString(`
    query ProductsGetSingleById($id: ID!) {
  product(id: $id) {
    ...ProductItemResponse
  }
}
    fragment ProductItemResponse on ProductEntityResponse {
  data {
    ...ProductListItem
  }
}
fragment ProductListItem on ProductEntity {
  id
  attributes {
    ...ProductListItemInfo
    slug
    images {
      data {
        attributes {
          ...Image
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
}
fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}`) as unknown as TypedDocumentString<ProductsGetSingleByIdQuery, ProductsGetSingleByIdQueryVariables>;
export const ProductsGetSingleBySlugDocument = new TypedDocumentString(`
    query ProductsGetSingleBySlug($slug: String!) {
  products(filters: {slug: {eq: $slug}}) {
    ...ProductListResponse
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    ...ProductListItemInfo
    slug
    images {
      data {
        attributes {
          ...Image
        }
      }
    }
    categories {
      data {
        attributes {
          name
        }
      }
    }
  }
}
fragment ProductListResponse on ProductEntityResponseCollection {
  data {
    ...ProductListItem
  }
}
fragment Image on UploadFile {
  url
  alternativeText
  height
  width
}
fragment ProductListItemInfo on Product {
  name
  description
  price
  avgRating
  ratingCount
}`) as unknown as TypedDocumentString<ProductsGetSingleBySlugQuery, ProductsGetSingleBySlugQueryVariables>;
export const ProductsUpdateProductRatingDocument = new TypedDocumentString(`
    mutation ProductsUpdateProductRating($id: ID!, $avgRating: Int!, $ratingCount: Int!) {
  updateProduct(id: $id, data: {avgRating: $avgRating, ratingCount: $ratingCount}) {
    data {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsUpdateProductRatingMutation, ProductsUpdateProductRatingMutationVariables>;