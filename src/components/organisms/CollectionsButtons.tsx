import { type Route } from "next";
import Link from "next/link";
import { type FC } from "react";

export const CollectionsButtons: FC = () => {
	return (
		<div>
			<h2 className="text-center text-2xl">Check our collections</h2>
			<div className="mt-4 flex items-center justify-center gap-10">
				<Link
					className="rounded-md bg-blue-primary px-5 py-3 text-white"
					href={"/collections/summer" as Route}
				>
					summer
				</Link>
				<Link
					className="rounded-md bg-blue-primary px-5 py-3 text-white"
					href={"/collections/winter" as Route}
				>
					winter
				</Link>
			</div>
		</div>
	);
};
