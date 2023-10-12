/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($productId: ID!, $quantity: Int!, $cartId: ID!, $publishedAt: DateTime!) {\n  createCartItem(\n    data: {product: $productId, quantity: $quantity, cart: $cartId, publishedAt: $publishedAt}\n  ) {\n    data {\n      id\n    }\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($id: ID!, $quantity: Int!) {\n  updateCartItem(id: $id, data: {quantity: $quantity}) {\n    data {\n      id\n      attributes {\n        quantity\n      }\n    }\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate($publishedAt: DateTime!) {\n  createCart(data: {publishedAt: $publishedAt}) {\n    data {\n      id\n      attributes {\n        cart_items {\n          data {\n            id\n            attributes {\n              product {\n                data {\n                  id\n                  attributes {\n                    name\n                    price\n                  }\n                }\n              }\n              quantity\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    data {\n      id\n      attributes {\n        cart_items {\n          data {\n            id\n            attributes {\n              product {\n                data {\n                  id\n                  attributes {\n                    name\n                    price\n                  }\n                }\n              }\n              quantity\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "query CartGetItemsCountByCartId($cartId: ID!) {\n  cartItems(filters: {cart: {id: {eq: $cartId}}}) {\n    data {\n      attributes {\n        quantity\n      }\n    }\n  }\n}": types.CartGetItemsCountByCartIdDocument,
    "mutation CartRemoveCartItemWithId($id: ID!) {\n  deleteCartItem(id: $id) {\n    data {\n      id\n    }\n  }\n}": types.CartRemoveCartItemWithIdDocument,
    "mutation ProductsAddCommentByProductId($headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!, $productId: ID!, $publishedAt: DateTime!) {\n  createComment(\n    data: {headline: $headline, content: $content, rating: $rating, name: $name, email: $email, product: $productId, publishedAt: $publishedAt}\n  ) {\n    data {\n      id\n    }\n  }\n}": types.ProductsAddCommentByProductIdDocument,
    "query ProductsGetCommentsByProductId($id: ID!) {\n  comments(filters: {product: {id: {eq: $id}}}) {\n    data {\n      ...Comment\n    }\n  }\n}": types.ProductsGetCommentsByProductIdDocument,
    "query ProductsGetCount {\n  products {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}": types.ProductsGetCountDocument,
    "query ProductsGetCountByCategorySlug($slug: String!) {\n  products(filters: {categories: {slug: {eq: $slug}}}) {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}": types.ProductsGetCountByCategorySlugDocument,
    "query ProductsGetList($page: Int!, $pageSize: Int!, $sort: [String]) {\n  products(pagination: {page: $page, pageSize: $pageSize}, sort: $sort) {\n    ...ProductListResponse\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategorySlug($page: Int!, $pageSize: Int!, $slug: String!) {\n  products(\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {categories: {slug: {eq: $slug}}}\n  ) {\n    ...ProductListResponse\n  }\n}": types.ProductsGetListByCategorySlugDocument,
    "query ProductsGetListByCollectionName($name: String!) {\n  products(filters: {collections: {name: {eq: $name}}}) {\n    ...ProductListResponse\n  }\n}": types.ProductsGetListByCollectionNameDocument,
    "query ProductsGetListByQuery($query: String!) {\n  products(filters: {name: {contains: $query}}) {\n    ...ProductListResponse\n  }\n}": types.ProductsGetListByQueryDocument,
    "query ProductsGetSingleById($id: ID!) {\n  product(id: $id) {\n    ...ProductItemResponse\n  }\n}": types.ProductsGetSingleByIdDocument,
    "query ProductsGetSingleBySlug($slug: String!) {\n  products(filters: {slug: {eq: $slug}}) {\n    ...ProductListResponse\n  }\n}": types.ProductsGetSingleBySlugDocument,
    "mutation ProductsUpdateProductRating($id: ID!, $avgRating: Int!, $ratingCount: Int!) {\n  updateProduct(id: $id, data: {avgRating: $avgRating, ratingCount: $ratingCount}) {\n    data {\n      id\n    }\n  }\n}": types.ProductsUpdateProductRatingDocument,
    "fragment Comment on CommentEntity {\n  attributes {\n    headline\n    content\n    rating\n    name\n    email\n  }\n}": types.CommentFragmentDoc,
    "fragment ProductItemResponse on ProductEntityResponse {\n  data {\n    ...ProductListItem\n  }\n}": types.ProductItemResponseFragmentDoc,
    "fragment ProductListItem on ProductEntity {\n  id\n  attributes {\n    ...ProductListItemInfo\n    slug\n    images {\n      data {\n        attributes {\n          ...Image\n        }\n      }\n    }\n    categories {\n      data {\n        attributes {\n          name\n        }\n      }\n    }\n  }\n}": types.ProductListItemFragmentDoc,
    "fragment ProductListResponse on ProductEntityResponseCollection {\n  data {\n    ...ProductListItem\n  }\n}": types.ProductListResponseFragmentDoc,
    "fragment Image on UploadFile {\n  url\n  alternativeText\n  height\n  width\n}": types.ImageFragmentDoc,
    "fragment ProductListItemInfo on Product {\n  name\n  description\n  price\n  avgRating\n  ratingCount\n}": types.ProductListItemInfoFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($productId: ID!, $quantity: Int!, $cartId: ID!, $publishedAt: DateTime!) {\n  createCartItem(\n    data: {product: $productId, quantity: $quantity, cart: $cartId, publishedAt: $publishedAt}\n  ) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($id: ID!, $quantity: Int!) {\n  updateCartItem(id: $id, data: {quantity: $quantity}) {\n    data {\n      id\n      attributes {\n        quantity\n      }\n    }\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($publishedAt: DateTime!) {\n  createCart(data: {publishedAt: $publishedAt}) {\n    data {\n      id\n      attributes {\n        cart_items {\n          data {\n            id\n            attributes {\n              product {\n                data {\n                  id\n                  attributes {\n                    name\n                    price\n                  }\n                }\n              }\n              quantity\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    data {\n      id\n      attributes {\n        cart_items {\n          data {\n            id\n            attributes {\n              product {\n                data {\n                  id\n                  attributes {\n                    name\n                    price\n                  }\n                }\n              }\n              quantity\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetItemsCountByCartId($cartId: ID!) {\n  cartItems(filters: {cart: {id: {eq: $cartId}}}) {\n    data {\n      attributes {\n        quantity\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetItemsCountByCartIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveCartItemWithId($id: ID!) {\n  deleteCartItem(id: $id) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').CartRemoveCartItemWithIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductsAddCommentByProductId($headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!, $productId: ID!, $publishedAt: DateTime!) {\n  createComment(\n    data: {headline: $headline, content: $content, rating: $rating, name: $name, email: $email, product: $productId, publishedAt: $publishedAt}\n  ) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').ProductsAddCommentByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCommentsByProductId($id: ID!) {\n  comments(filters: {product: {id: {eq: $id}}}) {\n    data {\n      ...Comment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCommentsByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCount {\n  products {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCountByCategorySlug($slug: String!) {\n  products(filters: {categories: {slug: {eq: $slug}}}) {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($page: Int!, $pageSize: Int!, $sort: [String]) {\n  products(pagination: {page: $page, pageSize: $pageSize}, sort: $sort) {\n    ...ProductListResponse\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategorySlug($page: Int!, $pageSize: Int!, $slug: String!) {\n  products(\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {categories: {slug: {eq: $slug}}}\n  ) {\n    ...ProductListResponse\n  }\n}"): typeof import('./graphql').ProductsGetListByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCollectionName($name: String!) {\n  products(filters: {collections: {name: {eq: $name}}}) {\n    ...ProductListResponse\n  }\n}"): typeof import('./graphql').ProductsGetListByCollectionNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByQuery($query: String!) {\n  products(filters: {name: {contains: $query}}) {\n    ...ProductListResponse\n  }\n}"): typeof import('./graphql').ProductsGetListByQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSingleById($id: ID!) {\n  product(id: $id) {\n    ...ProductItemResponse\n  }\n}"): typeof import('./graphql').ProductsGetSingleByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSingleBySlug($slug: String!) {\n  products(filters: {slug: {eq: $slug}}) {\n    ...ProductListResponse\n  }\n}"): typeof import('./graphql').ProductsGetSingleBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductsUpdateProductRating($id: ID!, $avgRating: Int!, $ratingCount: Int!) {\n  updateProduct(id: $id, data: {avgRating: $avgRating, ratingCount: $ratingCount}) {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').ProductsUpdateProductRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Comment on CommentEntity {\n  attributes {\n    headline\n    content\n    rating\n    name\n    email\n  }\n}"): typeof import('./graphql').CommentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItemResponse on ProductEntityResponse {\n  data {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductItemResponseFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on ProductEntity {\n  id\n  attributes {\n    ...ProductListItemInfo\n    slug\n    images {\n      data {\n        attributes {\n          ...Image\n        }\n      }\n    }\n    categories {\n      data {\n        attributes {\n          name\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListResponse on ProductEntityResponseCollection {\n  data {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductListResponseFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Image on UploadFile {\n  url\n  alternativeText\n  height\n  width\n}"): typeof import('./graphql').ImageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemInfo on Product {\n  name\n  description\n  price\n  avgRating\n  ratingCount\n}"): typeof import('./graphql').ProductListItemInfoFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
