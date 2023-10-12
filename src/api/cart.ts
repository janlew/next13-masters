import { cookies } from "next/headers";

import { executeGraphql } from "./graphql";

import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartGetItemsCountByCartIdDocument,
	CartRemoveCartItemWithIdDocument,
} from "@/gql/graphql";

export const getOrCreateCart = async () => {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();

	if (!cart || !cart?.data?.id) {
		throw new Error("Could not create cart");
	}

	cookies().set("cartId", cart.data.id, {
		httpOnly: true,
		sameSite: "lax",
	});

	return cart;
};

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const graphqlResponse = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			cache: "no-store",
			next: {
				tags: ["cart"],
			},
		});
		if (graphqlResponse.cart?.data) {
			return graphqlResponse.cart;
		}
	}

	return null;
};

export const createCart = async () => {
	const currentDate = new Date();
	const formattedDate = currentDate.toISOString();
	const graphqlResponse = await executeGraphql({
		query: CartCreateDocument,
		variables: { publishedAt: formattedDate },
		cache: "no-store",
	});

	return graphqlResponse.createCart;
};

export const addItemToCart = async (cartId: string, productId: string) => {
	const currentDate = new Date();
	const formattedDate = currentDate.toISOString();

	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			productId,
			quantity: 1,
			cartId,
			publishedAt: formattedDate,
		},
		cache: "no-store",
	});
};

export const removeItemFromCart = async (cartItemId: string) => {
	await executeGraphql({
		query: CartRemoveCartItemWithIdDocument,
		variables: {
			id: cartItemId,
		},
		cache: "no-store",
	});
};

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	const response = await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			id: itemId,
			quantity,
		},
		cache: "no-store",
	});
	return response.updateCartItem;
};

export const getItemsCount = async (cartId: string) => {
	const response = await executeGraphql({
		query: CartGetItemsCountByCartIdDocument,
		variables: { cartId },
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});

	return response.cartItems;
};
