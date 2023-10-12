import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { handlePaymentAction } from "./actions";

import { getCartFromCookies } from "@/api/cart";
import { ChangeProductQuantity } from "@/components/atoms/ChangeProductQuantity";
import { RemoveItemFromCartButton } from "@/components/atoms/RemoveItemFromCartButton";
import { Section } from "@/components/layout/Section";
import { formatMoney } from "@/utils";

export default async function Cart() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const response = await getCartFromCookies();

	if (!response) {
		redirect("/");
	}

	const cartItems = response.data?.attributes?.cart_items?.data ?? [];

	return (
		<Section>
			<div>
				<h1>Order #{cartId} summary</h1>
				<table className="table-fixed">
					<thead>
						<tr>
							<th className="px-2">Product</th>
							<th className="px-2 text-center">Quantity</th>
							<th className="px-2">Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{cartItems.map((item) => {
							if (!item?.attributes?.product) {
								return null;
							}
							const cartItemId = item?.id || "";
							const productName = item.attributes?.product.data?.attributes?.name || "";
							const productQuantity = item.attributes.quantity || 0;
							const productPrice = item.attributes?.product.data?.attributes?.price || 0;
							return (
								<tr key={item.id}>
									<td className="px-2">{productName}</td>
									<td className="px-2 text-center">
										<ChangeProductQuantity cartItemId={cartItemId} quantity={productQuantity} />
									</td>
									<td className="px-2">{formatMoney((productPrice * productQuantity) / 100)}</td>
									<td>
										<RemoveItemFromCartButton cartItemId={cartItemId} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<form action={handlePaymentAction} className="mt-4">
					<button className="w-full max-w-xs rounded-md bg-blue-primary px-5 py-3 text-white">
						Pay
					</button>
				</form>
			</div>
		</Section>
	);
}
