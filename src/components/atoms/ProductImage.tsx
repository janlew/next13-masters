import Image from "next/image";
import React from "react";

import { type ImageFragment } from "@/gql/graphql";

const STRAPI_URL = process.env.STRAPI_URL;

export const ProductImage: React.FC<ImageFragment> = ({ url, alternativeText, height, width }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md bg-white p-2">
			<Image
				className="h-full w-full object-contain"
				src={`${STRAPI_URL}${url}`}
				alt={alternativeText || ""}
				height={height || 400}
				width={width || 400}
			/>
		</div>
	);
};
