import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

import { ActiveLink } from "../atoms/ActiveLink";
import { Logo } from "../atoms/Logo";
import { SearchInput } from "../atoms/SearchInput";

import { getItemsCount } from "@/api/cart";

export const Header = async () => {
	const cartId = cookies().get("cartId")?.value;
	let cartItemsCount: number = 0;
	if (cartId) {
		const graphqlResponse = await getItemsCount(cartId);
		cartItemsCount =
			graphqlResponse?.data.reduce((acc, item) => {
				if (!item.attributes?.quantity) return acc + 0;

				return acc + item.attributes.quantity;
			}, 0) || 0;
	}

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
					<ActiveLink href="/categories/cyan">cyan</ActiveLink>
					<ActiveLink href="/categories/round">round</ActiveLink>
				</nav>

				{/* Search Bar */}
				<div className="relative">
					<SearchInput />
				</div>

				{/* User Account & Cart Icon (placeholders, ideally use SVG icons) */}
				<div className="flex items-center space-x-4">
					<SignedIn>
						<UserButton userProfileMode="navigation" />
					</SignedIn>
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<ActiveLink href="/cart">
						Cart <span>{cartItemsCount} items</span>
					</ActiveLink>
				</div>
			</div>
		</header>
	);
};
