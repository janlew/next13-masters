import { getProductsByPage } from "@/api/products";
import { Section } from "@/components/layout/Section";
import { Pagination } from "@/components/organisms/Pagination";
import { ProductsGrid } from "@/components/organisms/ProductsGrid";

const PRODUCTS_COUNT = 4206;
const PRODUCTS_PER_PAGE = 20;
const PAGES_COUNT = Math.ceil(PRODUCTS_COUNT / PRODUCTS_PER_PAGE);

export const generateStaticParams = async () => {
	return [
		{ params: { pageNumber: "1" } },
		{ params: { pageNumber: "2" } },
		{ params: { pageNumber: "3" } },
		{ params: { pageNumber: "4" } },
	];
};

export default async function ProductsPagination({
	params: { pageNumber },
}: {
	params: { pageNumber: string };
}) {
	const products = await getProductsByPage(Number(pageNumber) - 1);

	return (
		<Section>
			<ProductsGrid products={products} />
			<div className="mt-8">
				<Pagination baseHref="/products" pageNumber={pageNumber} pagesCount={PAGES_COUNT} />
			</div>
		</Section>
	);
}
