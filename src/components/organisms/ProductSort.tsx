"use client";

import { type Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ProductSort = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const sort = searchParams.get("sort");

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
		switch (e.target.value) {
			case "price":
				router.push(`${pathname}?sort=price` as Route);
				break;
			case "rating":
				router.push(`${pathname}?sort=rating` as Route);
				break;
			default:
				router.push(`${pathname.split("?")[0]}` as Route);
				break;
		}
	};

	return (
		<div className="flex items-center gap-4">
			<select
				value={sort || "default"}
				className="rounded-md bg-slate-400 p-2"
				onChange={handleSelect}
			>
				<option value="default">Default</option>
				<option data-testid="sort-by-price" value="price">
					Price
				</option>
				<option data-testid="sort-by-rating" value="rating">
					Rating
				</option>
			</select>
		</div>
	);
};
