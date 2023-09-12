import Link from "next/link";
import React from "react";

import { ProductItemCover } from "@/components/atoms/ProductItemCover";
import { ProductItemInfo } from "@/components/atoms/ProductItemInfo";

import { type ProductType } from "@/components/types";

type Product = {
	product: ProductType;
};

export const ProductItem: React.FC<Product> = ({
	product: { id, title, description, price, image },
}) => {
	return (
		<li className="max-w-xs flex-1">
			<Link href={`/product/${id}`}>
				<article className="rounded-md border border-border-color bg-background p-4 shadow-md">
					<ProductItemCover src={image.src} alt={image.alt} />
					<ProductItemInfo title={title} description={description} price={price} />
				</article>
			</Link>
		</li>
	);
};
