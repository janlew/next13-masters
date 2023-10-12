import { redirect } from "next/navigation";
import Stripe from "stripe";

import { Section } from "@/components/layout/Section";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const session = await stripe.checkout.sessions.retrieve(searchParams.sessionId);

	return (
		<Section>
			<h1>{session.payment_status}</h1>
		</Section>
	);
}
