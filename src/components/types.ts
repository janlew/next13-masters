export type ProductType = {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	rating: { count: number; rate: number };
	category: string;
	price: number;
	image: {
		src: string;
		alt: string;
	};
};
