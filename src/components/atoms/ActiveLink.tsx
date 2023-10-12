"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FC } from "react";

type Props<T extends string> = {
	href: Route<T> | URL;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink: FC<Props<string>> = ({
	href,
	children,
	className = "text-white",
	activeClassName = "border-b border-white",
}) => {
	const pathname = usePathname();
	const hrefString = `${href as string}`;
	const isActive =
		`/${pathname.split("/")[1]}` === href ||
		pathname === href ||
		(pathname.split("/")[1] === "categories" &&
			pathname.split("/")[2] === hrefString.split("/")[2]);

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
