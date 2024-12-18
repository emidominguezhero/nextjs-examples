import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Next.js Examples",
	description: ""
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: Readonly<RootLayoutProps>) {
	const pages = [
		{ name: "Server", path: "rick-and-morty-server" },
		{ name: "Client", path: "rick-and-morty-client" },
		{ name: "Client with Action", path: "rick-and-morty-client-with-action" },
		{ name: "Parallel routes", path: "parallel-routes" }
	];

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<nav
					style={{
						display: "flex",
						alignItems: "center",
						gap: "1rem",
						padding: "1rem"
					}}
				>
					{pages.map((page) => (
						<Link href={`/${page.path}`} key={page.path}>
							{page.name}
						</Link>
					))}
				</nav>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(40vw, 1fr))",
						gap: "1rem",
						padding: "1rem"
					}}
				>
					{props.children}
				</div>
			</body>
		</html>
	);
}
