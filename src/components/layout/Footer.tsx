import { type FC } from "react";

export const Footer: FC = () => {
	return (
		<footer className="bg-blue-primary py-12 text-background">
			<div className="container mx-auto px-4">
				{/* Brand */}
				<div className="mb-8 text-center">
					<a href="/" className="text-2xl font-bold transition-colors hover:text-blue-secondary">
						BrandName
					</a>
				</div>

				{/* Links */}
				<div className="mb-8 space-y-4 md:flex md:justify-center md:space-x-8 md:space-y-0">
					<a
						href="/about"
						className="block text-center transition-colors hover:text-blue-secondary hover:underline"
					>
						About
					</a>
					<a
						href="/privacy-policy"
						className="block text-center transition-colors hover:text-blue-secondary hover:underline"
					>
						Privacy Policy
					</a>
				</div>

				{/* Contact Info */}
				<div className="mb-8 text-center">
					<p className="text-sm">
						Email us at:{" "}
						<a
							href="mailto:support@brandname.com"
							className="underline transition-colors hover:text-blue-secondary"
						>
							support@brandname.com
						</a>
					</p>
				</div>
				<div className="flex justify-center space-x-4">
					<a
						href="https://facebook.com/brandname"
						className="transition-colors hover:text-blue-secondary"
					>
						[Facebook]
					</a>
					<a
						href="https://instagram.com/brandname"
						className="transition-colors hover:text-blue-secondary"
					>
						[Instagram]
					</a>
					<a
						href="https://twitter.com/brandname"
						className="transition-colors hover:text-blue-secondary"
					>
						[Twitter]
					</a>
				</div>
			</div>
		</footer>
	);
};
