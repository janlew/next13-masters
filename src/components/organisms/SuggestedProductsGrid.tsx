import { ProductsGrid } from "./ProductsGrid";

import { getProducts } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsGrid: React.FC = async () => {
	const products = await getProducts();
	await sleep(3000);

	return <ProductsGrid products={products.slice(-4)} />;
};
