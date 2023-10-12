import { notFound } from "next/navigation";

import { getProductsCount, getProductsList } from "@/api/products";
import { Section } from "@/components/layout/Section";
import { Pagination } from "@/components/organisms/Pagination";
import { ProductsGrid } from "@/components/organisms/ProductsGrid";
import { ProductSort } from "@/components/organisms/ProductSort";

const PRODUCTS_PER_PAGE = 20;

// export const generateStaticParams = async () => {
// 	return [
// 		{ params: { pageNumber: "1" } },
// 		{ params: { pageNumber: "2" } },
// 		{ params: { pageNumber: "3" } },
// 		{ params: { pageNumber: "4" } },
// 	];
// };

export default async function ProductsPagination({
	params: { pageNumber },
	searchParams: { sort },
}: {
	params: { pageNumber: string };
	searchParams: { sort: string };
}) {
	const products = await getProductsList(
		Number(pageNumber),
		20,
		sort
			? sort === "price"
				? "price:desc"
				: sort === "rating"
				? "avgRating:desc"
				: undefined
			: undefined,
	);
	const productsCount = await getProductsCount();

	if (!products || !productsCount) {
		return notFound();
	}

	const pagesCount = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<Section>
			<div className="mb-4">
				<ProductSort />
			</div>
			<ProductsGrid products={products.data} />
			{pagesCount > 1 && (
				<div className="mt-8">
					<Pagination baseHref="/products" pageNumber={pageNumber} pagesCount={pagesCount} />
				</div>
			)}
		</Section>
	);
}
