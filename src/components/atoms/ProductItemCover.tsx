import Image from "next/image";
import React from "react";

import { type ImageFragment } from "@/gql/graphql";

const STRAPI_URL = process.env.STRAPI_URL;

export const ProductItemCover: React.FC<ImageFragment> = ({
	url,
	alternativeText,
	height,
	width,
}) => {
	return (
		<div className="aspect-square overflow-hidden rounded-sm">
			<Image
				className="h-full w-full object-cover"
				src={`${STRAPI_URL}${url}`}
				alt={alternativeText || ""}
				height={height || 192}
				width={width || 192}
			/>
		</div>
	);
};
