import { type ProductType } from "@/components/types";

export interface ResponseType {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
}

export const getProducts = async (): Promise<ProductType[]> => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products?take=20`);
	const json = (await response.json()) as ResponseType[];
	const data = json.map(productResponseToProductType);
	return data;
};

export const getProductsByPage = async (page: number): Promise<ProductType[]> => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20&offset=${page}`,
	);
	const json = (await response.json()) as ResponseType[];
	const data = json.map(productResponseToProductType);
	return data;
};

export const getProductById = async (id: ResponseType["id"]) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const json = (await response.json()) as ResponseType;
	return productResponseToProductType(json);
};

const productResponseToProductType = (product: ResponseType): ProductType => {
	return {
		id: product.id,
		title: product.title,
		category: product.category,
		description: product.description,
		longDescription: product.longDescription,
		rating: product.rating,
		price: product.price,
		image: {
			src: product.image,
			alt: product.title,
		},
	};
};
