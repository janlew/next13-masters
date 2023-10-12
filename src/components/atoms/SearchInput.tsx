"use client";

import { type Route } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FC } from "react";

export const SearchInput: FC = () => {
	const router = useRouter();
	const [value, setValue] = useState<string>("");
	const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (debounceTimeoutRef.current) {
			clearTimeout(debounceTimeoutRef.current);
		}

		debounceTimeoutRef.current = setTimeout(() => {
			if (value.length) {
				router.push(`/search?query=${value}` as Route);
				setValue("");
			}
		}, 500);

		return () => {
			if (debounceTimeoutRef.current) {
				clearTimeout(debounceTimeoutRef.current);
			}
		};
	}, [value]);

	return (
		<input
			value={value}
			onChange={(e) => setValue(e.target.value)}
			type="text"
			placeholder="Search products..."
			className="rounded-md bg-background p-2 text-gray-800"
			role="searchbox"
		/>
	);
};
