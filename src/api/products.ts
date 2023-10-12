import {
	ProductsAddCommentByProductIdDocument,
	ProductsGetCommentsByProductIdDocument,
	ProductsGetCountByCategorySlugDocument,
	ProductsGetCountDocument,
	ProductsGetListByCategorySlugDocument,
	ProductsGetListByCollectionNameDocument,
	ProductsGetListByQueryDocument,
	ProductsGetListDocument,
	ProductsGetSingleBySlugDocument,
	ProductsUpdateProductRatingDocument,
	type CommentFragment,
} from "./../gql/graphql";
import { executeGraphql } from "./graphql";

export const getProductsList = async (page: number, pageSize = 20, sort?: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { page, pageSize, sort },
	});

	return graphqlResponse.products;
};

export const getProductsCount = async () => {
	const graphqlResponse = await executeGraphql({ query: ProductsGetCountDocument, variables: {} });

	return graphqlResponse.products?.meta.pagination.total;
};

export const getProductsByCategorySlug = async (
	page: number,
	pageSize = 20,
	categorySlug: string,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListByCategorySlugDocument,
		variables: {
			page,
			pageSize,
			slug: categorySlug,
		},
	});

	return graphqlResponse.products;
};

export const getProductsCountByCategorySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetCountByCategorySlugDocument,
		variables: {
			slug: categorySlug,
		},
	});

	return graphqlResponse.products?.meta.pagination.total;
};

export const getProductsByCollectionName = async (name: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListByCollectionNameDocument,
		variables: {
			name,
		},
	});

	return graphqlResponse.products;
};

export const getProductsByQuery = async (query: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListByQueryDocument,
		variables: {
			query,
		},
	});

	return graphqlResponse.products;
};

export const getProductBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSingleBySlugDocument,
		variables: { slug },
	});

	return graphqlResponse.products;
};

export const getProductComments = async (productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetCommentsByProductIdDocument,
		variables: { id: productId },
		cache: "no-store",
	});

	return graphqlResponse.comments;
};

export const addCommentToProduct = async (productId: string, comment: CommentFragment) => {
	const currentDate = new Date();
	const formattedDate = currentDate.toISOString();

	await executeGraphql({
		query: ProductsAddCommentByProductIdDocument,
		variables: {
			headline: comment?.attributes?.headline || "",
			content: comment?.attributes?.content || "",
			rating: comment?.attributes?.rating || 1,
			name: comment?.attributes?.name || "",
			email: comment?.attributes?.email || "",
			productId,
			publishedAt: formattedDate,
		},
		cache: "no-store",
	});
};

export const updateProductRating = async (productId: string, avgRating: number, ratingCount: number) => {
	await executeGraphql({
		query: ProductsUpdateProductRatingDocument,
		variables: { id: productId, avgRating, ratingCount },
		cache: "no-store",
	});
};
