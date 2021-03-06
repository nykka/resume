import type { MetaFunction } from "@remix-run/node";
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from "@remix-run/react";
import { useEffect, useState } from "react";

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

export default function App() {

	const [subMenuName, setSubMenuName] = useState<string | null>();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [theme, setTheme] = useState<"dark" | "light">("dark");
	const [closeMenuButton, setCloseMenuButton] = useState<
		React.MutableRefObject<HTMLButtonElement | null> | null
	>();
	
	function handleOpenMenu(status?: "open" | "close") {
		const mobileMenuButton = document.querySelector(
			"#hamburguer-button"
		) as HTMLElement;
		status === "close" && mobileMenuButton.focus();
		status === "close" 
			? mobileMenuButton?.setAttribute("aria-expanded", "false") 
			: mobileMenuButton?.setAttribute("aria-expanded", "true");
		status === "close" ? setIsMenuOpen(false) : setIsMenuOpen(true);
	}

	function handleOpenSubMenu(e: React.MouseEvent<HTMLButtonElement>){
		const target = e.currentTarget;
		const ariaControls = target.getAttribute("aria-controls");
		const ariaExpanded = target.getAttribute("aria-expanded");
		ariaControls === subMenuName 
			? setSubMenuName(null) 
			: setSubMenuName(ariaControls);
		ariaExpanded === "true" 
			? target.setAttribute("aria-expanded", "false") 
			: target.setAttribute("aria-expanded", "true");
	};

	useEffect(() => {
		if(isMenuOpen && closeMenuButton){
			closeMenuButton?.current?.focus();
		}
	},[isMenuOpen]);

	useEffect(() => {
		const body = document.querySelector("body");
		const mobileNav = document.querySelector("#mobile-nav");
		const mobileMenuButton = document.querySelector(
			"#hamburguer-button"
		) as HTMLElement;

		function closeSubmenu (e: KeyboardEvent): void {
			if(e.key === "Escape") {
				if(mobileNav){
					mobileMenuButton?.focus();
				}
				setSubMenuName(null);
				setIsMenuOpen(false);
			};
		};
		body?.addEventListener("keydown", (e) => closeSubmenu(e));
		return () => body?.removeEventListener("keydown", (e) => closeSubmenu(e));
	}, []);

	useEffect(() => {
		const body = document.querySelector("body");
		function closeSubmenu (e: MouseEvent): void {
			const target = e.target as HTMLElement;
			if(target.getAttribute("aria-controls") === null) {
				setSubMenuName(null);
			}
		};
		body?.addEventListener("click", (e) => closeSubmenu(e));
		return () => body?.removeEventListener("click", (e) => closeSubmenu(e));
	}, []);

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
							<NavList 
							  handleChangeTheme={setTheme}
								theme={theme} 
								subMenuName={subMenuName} 
								isMenuOpen={isMenuOpen} 
								handleOpenSubMenu={handleOpenSubMenu} 
								handleOpenMenu={handleOpenMenu}
								setCloseMenuButton={setCloseMenuButton}
							/>
						</header>
						<main id="maincontent" className={
							`max-w-6xl ${isMenuOpen ? "hidden sm:block" : "block"}`
						}>
							<Outlet />
						</main>
						<footer className={`${isMenuOpen ? "hidden sm:block" : "block"}`}>
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
