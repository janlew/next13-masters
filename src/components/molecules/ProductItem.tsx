import Link from "next/link";
import React from "react";

import { ProductItemCover } from "@/components/atoms/ProductItemCover";
import { type ProductType } from "@/components/types";

import { formatMoney } from "@/utils";

type Product = {
	product: ProductType;
};

export const ProductItem: React.FC<Product> = ({
	product: { id, title, description, price, image },
}) => {
	return (
		<Link className="max-w-xs flex-1" href={`/product/${id}`}>
			<article className="rounded-md border border-border-color bg-background p-4 shadow-md">
				<ProductItemCover src={image.src} alt={image.alt} />
				<h2 className="my-2 text-lg font-semibold text-blue-primary">{title}</h2>
				<p className="mb-4 truncate text-text-secondary">{description}</p>
				<span className="font-bold text-blue-secondary">{formatMoney(price / 100)}</span>
			</article>
		</Link>
	);
};
