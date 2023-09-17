import { MDXRemote } from "next-mdx-remote/rsc";
import { type FC } from "react";

type Props = {
	longDescription: string;
};

export const ProductLongDescription: FC<Props> = ({ longDescription }) => {
	return (
		<div className="prose">
			<MDXRemote source={longDescription} />
		</div>
	);
};
