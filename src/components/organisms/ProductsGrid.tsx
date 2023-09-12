import { ProductItem } from "@/components/molecules/ProductItem";

import { type ProductType } from "@/components/types";

type Products = {
	products: ProductType[];
};

export const ProductsGrid: React.FC<Products> = ({ products }) => {
	return (
		<section className="container mx-auto px-4 py-8 lg:px-8">
			<div className="flex flex-wrap justify-between gap-5">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};
