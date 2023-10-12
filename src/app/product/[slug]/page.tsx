import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { addToCart } from "../actions";

import { getProductBySlug, getProductComments } from "@/api/products";
import { AddToCartButton } from "@/components/atoms/AddToCartButton";
import { ProductImage } from "@/components/atoms/ProductImage";
import { ProductLongDescription } from "@/components/atoms/ProductLongDescription";
import { Section } from "@/components/layout/Section";
import { ProductComments } from "@/components/organisms/ProductComments";
import { RelatedProductsGrid } from "@/components/organisms/RelatedProductsGrid";
import { formatMoney } from "@/utils";

// export const generateStaticParams = async () => {
// 	const response = await getProductsList(1, 80);

// 	if (!response) {
// 		throw new Error("Products not found");
// 	}

// 	const products = response.data;

// 	return products.map((product) => ({
// 		params: {
// 			slug: product.attributes?.slug,
// 		},
// 	}));
// };

export async function generateMetadata({
	params: { slug },
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const response = await getProductBySlug(slug);

	if (!response) {
		throw new Error("Product not found");
	}

	const name = response.data[0]?.attributes?.name;
	const description = response.data[0]?.attributes?.description;

	return {
		title: name,
		description,
	};
}

export default async function Product({ params: { slug } }: { params: { slug: string } }) {
	const response = await getProductBySlug(slug);

	if (!response) {
		notFound();
	}

	const productId = response.data[0]?.id;
	const name = response.data[0]?.attributes?.name;
	const description = response.data[0]?.attributes?.description;
	const price = response.data[0]?.attributes?.price;
	const categories = response.data[0]?.attributes?.categories?.data;
	const firstCategory = categories?.[0]?.attributes?.name;
	const images = response.data[0]?.attributes?.images?.data;
	const imageUrl = images?.[0]?.attributes?.url;

	const commentsResponse = await getProductComments(productId || "");

	return (
		<Section>
			<article>
				<div className="flex gap-12">
					{imageUrl && (
						<div className="w-full max-w-md">
							<ProductImage url={imageUrl} alternativeText={name} />
						</div>
					)}
					<div className="">
						<h1 className="text-4xl">{name}</h1>
						<div className="flex justify-between align-middle">
							<h3 className="text-xl text-gray-600">{firstCategory}</h3>
							{/* <Rating rating={rating} /> */}
						</div>
						{price && <h4 className="my-2 text-lg font-semibold">{formatMoney(price / 100)}</h4>}
						<ProductLongDescription longDescription={description || ""} />
						<form
							action={async () => {
								"use server";
								await addToCart(productId || "");
							}}
							className="mt-4"
						>
							<AddToCartButton />
						</form>
					</div>
				</div>
			</article>
			<ProductComments productId={productId || ""} comments={commentsResponse?.data || []} />
			<aside className="mt-10">
				<Suspense fallback={"Loading..."}>
					<RelatedProductsGrid />
				</Suspense>
			</aside>
		</Section>
	);
}
