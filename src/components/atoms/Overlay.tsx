"use client";

import { useRouter } from "next/navigation";

export const Overlay = () => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.back()}
			className="absolute inset-0 z-40 bg-slate-700 bg-opacity-60"
		/>
	);
};
