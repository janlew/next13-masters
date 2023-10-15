import { ProductsGrid } from "./ProductsGrid";

import { getProductsList } from "@/api/products";

export const SuggestedProductsGrid = async () => {
	const products = await getProductsList(1, 4);

	if (!products) {
		return null;
	}

	return <ProductsGrid products={products.data} />;
};
