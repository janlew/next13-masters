import { type FC } from "react";

import { PaginationItem } from "../atoms/PaginationItem";

const FIRST_PAGE = 1;
const PAGE_BUFFER = 3;

type Props = {
	baseHref: string;
	pageNumber: string;
	pagesCount: number;
};

export const Pagination: FC<Props> = ({ baseHref, pageNumber, pagesCount }) => {
	const currentPage = Number(pageNumber);
	const prevPageNumber = currentPage > 1 ? currentPage - 1 : null;
	const nextPageNumber = currentPage < pagesCount ? currentPage + 1 : null;

	return (
		<ul className="flex items-center justify-center gap-2">
			{/* BACK ITEM */}
			{prevPageNumber && <PaginationItem baseHref={baseHref} page={prevPageNumber} text="Back" />}
			{/* FIRST ITEM */}
			{currentPage !== 1 && <PaginationItem baseHref={baseHref} page={1} />}

			{currentPage === FIRST_PAGE + PAGE_BUFFER && <PaginationItem baseHref={baseHref} page={2} />}
			{currentPage - FIRST_PAGE > PAGE_BUFFER && (
				<li>
					<span>...</span>
				</li>
			)}
			{/* PREV NEIGHBOR */}
			{prevPageNumber && currentPage > 2 && (
				<PaginationItem baseHref={baseHref} page={prevPageNumber} />
			)}
			{/* CURRENT */}
			<PaginationItem baseHref={baseHref} page={currentPage} />
			{/* NEXT NEIGHBOR */}
			{nextPageNumber && currentPage < pagesCount - 1 && (
				<PaginationItem baseHref={baseHref} page={nextPageNumber} />
			)}

			{pagesCount - currentPage > PAGE_BUFFER && (
				<li>
					<span>...</span>
				</li>
			)}
			{currentPage === pagesCount - PAGE_BUFFER && (
				<PaginationItem baseHref={baseHref} page={pagesCount - 1} />
			)}

			{/* LAST ITEM */}
			{currentPage !== pagesCount && <PaginationItem baseHref={baseHref} page={pagesCount} />}
			{/* NEXT ITEM */}
			{nextPageNumber && <PaginationItem baseHref={baseHref} page={nextPageNumber} text="Next" />}
		</ul>
	);
};
