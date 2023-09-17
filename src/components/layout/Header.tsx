import Link from "next/link";
import { type FC } from "react";

import { ActiveLink } from "../atoms/ActiveLink";
import { Logo } from "../atoms/Logo";

export const Header: FC = () => {
	return (
		<header className="bg-blue-primary py-4 text-background shadow-md">
			<div className="mx-auto flex max-w-screen-xl items-center justify-between px-4">
				{/* Brand Logo/Name */}
				<Link href="/">
					<Logo />
				</Link>

				{/* Navigation ActiveLinks */}
				<nav className="hidden space-x-4 md:block">
					<ActiveLink href="/">Home</ActiveLink>
					<ActiveLink href="/products">All</ActiveLink>
				</nav>

				{/* Search Bar */}
				<div className="relative">
					<input
						type="text"
						placeholder="Search products..."
						className="rounded-l-md bg-background p-2"
					/>
					<button className="rounded-r-md border-l border-blue-500  bg-gray-200 p-2">🔍</button>
				</div>

				{/* User Account & Cart Icon (placeholders, ideally use SVG icons) */}
				<div className="flex items-center space-x-4">
					<a href="/profile">[Profile]</a>
					<a href="/cart">[Cart]</a>
				</div>
			</div>
		</header>
	);
};
