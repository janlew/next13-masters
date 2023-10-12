import { ProductItem } from "@/components/molecules/ProductItem";
import { type ProductListItemFragment } from "@/gql/graphql";

type Products = {
	products: ProductListItemFragment[];
};

export const ProductsGrid: React.FC<Products> = ({ products }) => {
	return (
		<ul data-testid="products-list" className="grid grid-cols-4 gap-4">
			{products.map((product) => {
				if (!product || !product?.id) {
					return null;
				}

				return <ProductItem key={product?.id} product={product} />;
			})}
		</ul>
	);
};
