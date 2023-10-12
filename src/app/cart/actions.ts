"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";

import { changeItemQuantity, removeItemFromCart } from "@/api/cart";

export const changeQuantityOfItem = async (cartItemId: string, quantity: number) => {
	await changeItemQuantity(cartItemId, quantity);
	// revalidateTag("cart");
};

export const removeItem = async (cartItemId: string) => {
	await removeItemFromCart(cartItemId);

	revalidateTag("cart");
};

export async function handlePaymentAction() {
	"use server";
	const cartId = cookies().get("cartId")?.value;

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: { cartId: cartId || "" },
		line_items: [
			{
				price_data: {
					currency: "eur",
					product_data: {
						name: "Stubbed product",
					},
					unit_amount: 2000,
				},
				quantity: 1,
			},
		],
		mode: "payment",
		success_url: "http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel",
	});

	if (!checkoutSession.url) {
		throw new Error("Missing checkout session url");
	}

	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
