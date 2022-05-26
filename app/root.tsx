import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData
} from "@remix-run/react";

import { NavList } from "./components/nav";

import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Veronica Garcia Resume",
	viewport: "width=device-width,initial-scale=1",
});

export function links() {
	return [
		{ rel: "stylesheet", href: styles }, 
		{ rel: "preconnect", href: "https://fonts.googleapis.com" }, 
		{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" }, 
		{ 
			rel: "stylesheet", 
			href: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;800&display=swap"
		}
	];
}

export const loader: LoaderFunction = async ({
	request,
}) => {
	const url = new URL(request.url);
	const theme = url.searchParams.get("theme");
	return theme;
};

export default function App() {

	const theme = useLoaderData();

	return (
		<html lang="en" data-theme={theme === "light" ? "light" : "black"}>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<div className="flex flex-col flex-wrap items-center">
					<div className="flex flex-col flex-wrap items-center w-screen max-w-7xl py-2">
						<Link className="sr-only absolute badge px-2 focus:not-sr-only focus:px-2 focus:absolute focus:h-5" to="#maincontent">Skip to main content</Link>
						<header className="max-w-6xl w-full">
							<NavList />
						</header>
						<main id="maincontent" className="max-w-6xl">
							<Outlet />
						</main>
						<footer>
              veronicaines.garcia@gmail.com
						</footer>
					</div>
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
