"use server";

import { revalidateTag } from "next/cache";

import { addItemToCart, changeItemQuantity, getOrCreateCart } from "@/api/cart";
import { addCommentToProduct, getProductComments, updateProductRating } from "@/api/products";
import { type CommentFragment } from "@/gql/graphql";

export const addComment = async (productId: string, comment: CommentFragment) => {
	await addCommentToProduct(productId, comment);

	const comments = await getProductComments(productId);

	if (comments?.data) {
		console.log("comments", comments.data.length, comments.data);
		const sumRating = comments.data.reduce((acc, comment) => {
			if (!comment?.attributes?.rating) {
				return acc;
			}
			return acc + comment.attributes.rating;
		}, 0);

		const avgRating = Math.ceil(sumRating / comments.data.length);
		const ratingCount = comments.data.length;

		await updateProductRating(productId, avgRating, ratingCount);
	}
};

export async function addToCart(productId: string) {
	const cart = await getOrCreateCart();

	if (!cart?.data?.id) {
		throw new Error("Error while getting cart");
	}

	if (!productId) {
		throw new Error("Error while getting product");
	}

	let itemFromCart;

	if (cart?.data?.attributes?.cart_items?.data.length) {
		itemFromCart = cart.data.attributes.cart_items.data.find((item) => {
			if (!item.attributes || !item.attributes.product || !item.attributes.product.data) {
				return null;
			}
			return item.attributes.product.data.id === productId;
		});
	}

	if (itemFromCart && itemFromCart.attributes) {
		const currentQuantity = itemFromCart.attributes.quantity;
		const cartItemId = itemFromCart.id;

		if (currentQuantity && cartItemId) {
			await changeItemQuantity(cartItemId, currentQuantity + 1);
		}
	} else {
		await addItemToCart(cart.data.id, productId);
	}

	revalidateTag("cart");
}
