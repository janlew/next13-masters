import Link from "next/link";
import React from "react";

import { ProductItemCover } from "@/components/atoms/ProductItemCover";
import { ProductItemInfo } from "@/components/atoms/ProductItemInfo";
import { type ProductListItemFragment } from "@/gql/graphql";

type Product = {
	product: ProductListItemFragment;
};

export const ProductItem: React.FC<Product> = ({ product }) => {
	const images = product.attributes?.images?.data;
	const imageUrl = images?.[0]?.attributes?.url;

	return (
		<li>
			<Link href={`/product/${product.attributes?.slug}`}>
				<article className="rounded-md border border-border-color bg-background p-4 shadow-md">
					{imageUrl && <ProductItemCover url={imageUrl} alternativeText={""} />}
					<ProductItemInfo
						name={product.attributes?.name ?? ""}
						description={product.attributes?.description ?? ""}
						price={product.attributes?.price ?? 0}
						avgRating={product?.attributes?.avgRating || 0}
						ratingCount={product?.attributes?.ratingCount || 0}
					/>
				</article>
			</Link>
		</li>
	);
};
