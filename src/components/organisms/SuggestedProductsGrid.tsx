import { ProductsGrid } from "./ProductsGrid";

import { getProductsList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsGrid = async () => {
	const products = await getProductsList(1, 4);
	await sleep(3000);

	if (!products) {
		return null;
	}

	return <ProductsGrid products={products.data} />;
};
