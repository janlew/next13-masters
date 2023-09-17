import { ProductItem } from "@/components/molecules/ProductItem";

import { type ProductType } from "@/components/types";

type Products = {
	products: ProductType[];
};

export const ProductsGrid: React.FC<Products> = ({ products }) => {
	return (
		<ul data-testid="products-list" className="grid grid-cols-4 gap-4">
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
