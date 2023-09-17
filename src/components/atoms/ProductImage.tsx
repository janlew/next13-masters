import Image from "next/image";
import React from "react";

type Props = {
	src: string;
	alt: string;
};

export const ProductImage: React.FC<Props> = ({ src, alt }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md bg-white p-2">
			<Image
				className="h-full w-full object-contain"
				src={src}
				alt={alt}
				height={400}
				width={400}
			/>
		</div>
	);
};
