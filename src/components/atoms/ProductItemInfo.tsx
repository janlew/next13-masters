import React from "react";

import { formatMoney } from "@/utils";

type Info = {
	title: string;
	description: string;
	price: number;
};

export const ProductItemInfo: React.FC<Info> = ({ title, description, price }) => {
	return (
		<div>
			<h2 className="my-2 text-lg font-semibold text-blue-primary">{title}</h2>
			<p className="mb-4 truncate text-text-secondary">{description}</p>
			<span className="font-bold text-blue-secondary">{formatMoney(price / 100)}</span>
		</div>
	);
};
