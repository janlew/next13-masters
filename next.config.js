/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "127.0.0.1",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "cdn.pixabay.com",
			},
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
			},
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
			{
				source: "/categories/cyan",
				destination: "/categories/cyan/1",
				permanent: false,
			},
			{
				source: "/categories/nervously",
				destination: "/categories/nervously/1",
				permanent: false,
			},
			{
				source: "/categories/relationships",
				destination: "/categories/relationships/1",
				permanent: false,
			},
			{
				source: "/categories/round",
				destination: "/categories/round/1",
				permanent: false,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
