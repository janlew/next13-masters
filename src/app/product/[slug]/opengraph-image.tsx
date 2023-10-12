import { ImageResponse } from "next/server";

import { getProductBySlug } from "@/api/products";

export const runtime = "edge";

export const contentType = "image/png";

export const size = {
	width: 1200,
	height: 630,
};

export const alt = "Open Graph Image";

export default async function OpenGraphImage({ params: { slug } }: { params: { slug: string } }) {
	const response = await getProductBySlug(slug);

	if (!response) {
		throw new Error("Product not found");
	}

	const name = response.data[0]?.attributes?.name;
	const description = response.data[0]?.attributes?.description;
	const categories = response.data[0]?.attributes?.categories?.data;
	const firstCategory = categories?.[0]?.attributes?.name;
	const images = response.data[0]?.attributes?.images?.data;
	const imageUrl = images?.[0]?.attributes?.url;

	return new ImageResponse(
		(
			<div style={{ display: "flex", gap: "10px" }}>
				<img
					src={"http://localhost:1337" + imageUrl || ""}
					alt={name || ""}
					height={630}
					width={630}
				/>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<h1>{name}</h1>
					<p style={{ maxWidth: "300px" }}>{description}</p>
					<p>{firstCategory}</p>
				</div>
			</div>
		),
	);
}
