import React, { type FC } from "react";

type Props = {
	children: React.ReactNode;
};

export const Section: FC<Props> = ({ children }) => {
	return <section className="mx-auto max-w-screen-xl px-4 py-11">{children}</section>;
};
