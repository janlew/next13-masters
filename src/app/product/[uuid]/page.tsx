import { Suspense } from "react";

import { type Metadata } from "next";

import { getProductById, getProducts } from "@/api/products";
import { ProductImage } from "@/components/atoms/ProductImage";
import { ProductLongDescription } from "@/components/atoms/ProductLongDescription";
import { Rating } from "@/components/atoms/Rating";
import { Section } from "@/components/layout/Section";
import { SuggestedProductsGrid } from "@/components/organisms/SuggestedProductsGrid";
import { formatMoney } from "@/utils";

export const generateStaticParams = async () => {
	const products = await getProducts();
	return products.map((product) => ({
		params: {
			uuid: product.id,
		},
	}));
};

export async function generateMetadata({
	params: { uuid },
}: {
	params: { uuid: string };
}): Promise<Metadata> {
	// fetch data
	const data = await getProductById(uuid);
	const { title, description } = data;

	return {
		title,
		description,
	};
}

export default async function Product({ params: { uuid } }: { params: { uuid: string } }) {
	const data = await getProductById(uuid);
	const { title, category, longDescription, rating, image, price } = data;
	return (
		<Section>
			<article>
				<div className="flex gap-12">
					<div className="w-full max-w-md">
						<ProductImage src={image.src} alt={title} />
					</div>
					<div className="">
						<h1 className="text-4xl">{title}</h1>
						<div className="flex justify-between align-middle">
							<h3 className="text-xl text-gray-600">{category}</h3>
							<Rating rating={rating} />
						</div>
						<h4 className="my-2 text-lg font-semibold">{formatMoney(price / 100)}</h4>
						<ProductLongDescription longDescription={longDescription} />
					</div>
				</div>
			</article>
			<aside className="mt-10">
				<Suspense fallback={"Loading..."}>
					<SuggestedProductsGrid />
				</Suspense>
			</aside>
		</Section>
	);
}
