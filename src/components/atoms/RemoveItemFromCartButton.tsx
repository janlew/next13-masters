"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { removeItem } from "@/app/cart/actions";

export const RemoveItemFromCartButton = ({cartItemId}: {cartItemId: string}) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<button
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItem(cartItemId);
					router.refresh();
				});
			}}
			className="rounded-sm bg-red-500 px-4 py-1 text-white transition-all hover:bg-red-600"
		>
			Remove
		</button>
	);
};
