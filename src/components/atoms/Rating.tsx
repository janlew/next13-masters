import React from "react";

interface RatingProps {
	rating: { rate: number; count: number };
}

export const Rating: React.FC<RatingProps> = ({ rating: { rate, count } }) => {
	const roundedRate = Math.round(rate);

	return (
		<div className="flex items-center space-x-2">
			{[...Array<number>(5)].map((_, index) => (
				<svg
					key={index}
					className={`h-5 w-5 ${index < roundedRate ? "text-yellow-400" : "text-gray-300"}`}
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M10 15.27L16.18 21l-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 21z" />
				</svg>
			))}

			<span className="text-sm text-gray-500">({count} reviews)</span>
		</div>
	);
};
