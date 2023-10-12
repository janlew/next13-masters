import { notFound } from "next/navigation";

import { getProductsByQuery } from "@/api/products";
import { Section } from "@/components/layout/Section";
import { ProductsGrid } from "@/components/organisms/ProductsGrid";

export default async function Search({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const query = searchParams.query as string;
	if (!query) {
		return notFound();
	}

	const products = await getProductsByQuery(query);

	if (!products) {
		return notFound();
	}

	return (
		<Section>
			<ProductsGrid products={products.data} />
		</Section>
	);
}
