import { ProductItem } from "../molecules/ProductItem";

import { getProductsList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const RelatedProductsGrid = async () => {
	const products = await getProductsList(1, 4);
	await sleep(3000);

	if (!products) {
		return null;
	}

	return (
		<ul data-testid="related-products" className="grid grid-cols-4 gap-4">
			{products.data.map((product) => {
				if (!product || !product?.id) {
					return null;
				}

				return <ProductItem key={product?.id} product={product} />;
			})}
		</ul>
	);
};
