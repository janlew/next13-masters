"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			data-testid="add-to-cart-button"
			type="submit"
			disabled={pending}
			className="rounded-md border bg-blue-primary px-6 py-4 text-white transition-all hover:bg-blue-600 disabled:cursor-wait"
		>
			Add to cart
		</button>
	);
};
