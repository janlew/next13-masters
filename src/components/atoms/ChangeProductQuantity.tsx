"use client";

import { experimental_useOptimistic as useOptimistic } from "react";

import { changeQuantityOfItem } from "@/app/cart/actions";

export const ChangeProductQuantity = ({
	cartItemId,
	quantity,
}: {
	cartItemId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic<number>(quantity);

	return (
		<div className="flex items-center gap-2">
			<div className="w-7" data-testid="quantity">
				{optimisticQuantity}
			</div>
			<div className="flex justify-center">
				<form>
					<button
						type="submit"
						data-testid="increment"
						formAction={async () => {
							setOptimisticQuantity(optimisticQuantity + 1);
							await changeQuantityOfItem(cartItemId, optimisticQuantity + 1);
						}}
						className="h-8 w-8 rounded-xl border bg-slate-300"
					>
						+
					</button>
					<button
						type="submit"
						data-testid="decrement"
						formAction={async () => {
							setOptimisticQuantity(optimisticQuantity - 1);
							await changeQuantityOfItem(cartItemId, optimisticQuantity - 1);
						}}
						disabled={optimisticQuantity <= 1}
						className="ml-2 h-8 w-8 rounded-xl border bg-slate-300 disabled:cursor-not-allowed disabled:bg-slate-200"
					>
						-
					</button>
				</form>
			</div>
		</div>
	);
};
