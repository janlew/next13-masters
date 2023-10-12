import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductsByCategorySlug, getProductsCountByCategorySlug } from "@/api/products";
import { Section } from "@/components/layout/Section";
import { Pagination } from "@/components/organisms/Pagination";
import { ProductsGrid } from "@/components/organisms/ProductsGrid";

const PRODUCTS_PER_PAGE = 20;

export async function generateMetadata({
	params: { category },
}: {
	params: { category: string };
}): Promise<Metadata> {
	return {
		title: category,
	};
}

export default async function CategoryPagination({
	params: { category, pageNumber },
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(Number(pageNumber), PRODUCTS_PER_PAGE, category);
	const productsCount = await getProductsCountByCategorySlug(category);

	if (!products || !productsCount) {
		return notFound();
	}

	const pagesCount = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<Section>
			<h1 className="mb-4 text-center text-3xl">{category}</h1>
			<ProductsGrid products={products.data} />
			{pagesCount > 1 && (
				<div className="mt-8">
					<Pagination
						baseHref={`/categories/${category}`}
						pageNumber={pageNumber}
						pagesCount={pagesCount}
					/>
				</div>
			)}
		</Section>
	);
}
