import { type Route } from "next";
import { type FC } from "react";

import { ActiveLink } from "./ActiveLink";

type Props = {
	baseHref: string;
	page: number;
	text?: string;
};

export const PaginationItem: FC<Props> = ({ baseHref, page, text = `${page}` }) => {
	return (
		<li className="rounded border border-gray-300 p-2">
			<ActiveLink
				href={`${baseHref}/${page}` as Route}
				className="text-gray-600 hover:text-gray-800"
				activeClassName="text-blue-500 hover:text-blue-700 font-semibold"
			>
				{text}
			</ActiveLink>
		</li>
	);
};
