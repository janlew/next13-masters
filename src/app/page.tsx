import { ProductsGrid } from "@/components/organisms/ProductsGrid";

export default function Home() {
	const products = [
		{
			id: 1,
			title: "Sube Sube no Mi",
			image: { src: "/owoce/Sube_Sube_no_Mi.webp", alt: "Product 1" },
			price: 2999,
			description: "be smooth and slippery",
		},
		{
			id: 2,
			title: "Kiro Kiro no Mi",
			image: { src: "/owoce/Kiro_Kiro_no_Mi.webp", alt: "Product 2" },
			price: 1999,
			description: "weight from 1 to 10,000 kilograms",
		},
		{
			id: 3,
			title: "Hana Hana no Mi",
			image: { src: "/owoce/Hana_Hana_no_Mi.webp", alt: "Product 3" },
			price: 2499,
			description: "replicate and sprout pieces of body",
		},
		{
			id: 4,
			title: "Bomu Bomu no Mi",
			image: { src: "/owoce/Bomu_Bomu_no_Mi.webp", alt: "Product 4" },
			price: 4999,
			description: "make any part of body explode",
		},
	];

	return (
		<>
			<ProductsGrid products={products} />
		</>
	);
}
