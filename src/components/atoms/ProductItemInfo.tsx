import React from "react";

import { type ProductListItemInfoFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

export const ProductItemInfo: React.FC<ProductListItemInfoFragment> = ({
	name,
	description,
	price,
	avgRating,
	ratingCount,
}) => {
	return (
		<div>
			<h3 className="my-2 text-lg font-semibold text-blue-primary">{name}</h3>
			<p className="mb-4 truncate text-text-secondary">{description}</p>
			<span className="font-bold text-blue-secondary" data-testid="product-price">
				{formatMoney(price / 100)}
			</span>
			<div>
				<span data-testid="product-rating" className="text-yellow-400">
					{avgRating}
				</span>
				<span className="ml-1 text-text-secondary">({ratingCount})</span>
			</div>
		</div>
	);
};
