import Image from "next/image";
import React from "react";

type Props = {
	src: string;
	alt: string;
};

export const ProductItemCover: React.FC<Props> = ({ src, alt }) => {
	return (
		<div className="aspect-square rounded-sm">
			<Image className="h-full w-full object-cover" src={src} alt={alt} height={192} width={192} />
		</div>
	);
};
