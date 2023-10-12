import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductsByCollectionName } from "@/api/products";
import { Section } from "@/components/layout/Section";
import { ProductsGrid } from "@/components/organisms/ProductsGrid";

export async function generateMetadata({
	params: { collection },
}: {
	params: { collection: string };
}): Promise<Metadata> {
	return {
		title: collection,
	};
}

export default async function Collections({
	params: { collection },
}: {
	params: { collection: string };
}) {
	const products = await getProductsByCollectionName(collection);

	if (!products) {
		return notFound();
	}

	return (
		<Section>
			<h1 className="mb-5 text-center text-3xl">{collection}</h1>
			<ProductsGrid products={products.data} />
		</Section>
	);
}
