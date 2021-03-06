import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "@remix-run/react";
import image from "../images/v.svg";

export function NavList({
	theme, 
	subMenuName, 
	isMenuOpen, 
	handleOpenSubMenu, 
	handleOpenMenu,
	setCloseMenuButton,
	handleChangeTheme
}: {
	theme: string; 
	subMenuName: string | null | undefined;
	isMenuOpen: boolean;
	handleOpenSubMenu: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleOpenMenu: (status?: "open" | "close") => void;
	setCloseMenuButton: (ref: React.MutableRefObject<HTMLButtonElement | null> | null) => void;
	handleChangeTheme: (theme: "dark" | "light") => void;
}) {

	useEffect(() => {
		const mobileNav = document.querySelector("#mobile-nav");
		const navList = mobileNav?.querySelector("ul") as HTMLElement;
		const focusableEls = navList?.querySelectorAll(".mobile-nav-link") as NodeListOf<HTMLLIElement>;
		const firstFocusableEl = focusableEls[0];  
		const lastFocusableEl = focusableEls[focusableEls.length - 1];

		function circleBackFocus (e: KeyboardEvent): void {
			const isTabPressed = (e.key === "Tab" || e.code === "9");

			if (!isTabPressed) { 
				return; 
			}

			if( e.shiftKey ) /* shift + tab */ {
				if(document.activeElement === firstFocusableEl) {
					lastFocusableEl.focus();
					e.preventDefault();
				}
			} else /* tab */ {
				if(document.activeElement === lastFocusableEl) {
					firstFocusableEl.focus();
					e.preventDefault();
				}
			}
		};
		navList?.addEventListener("keydown", (e) => circleBackFocus(e));
		return () => navList?.removeEventListener("keydown", (e) => circleBackFocus(e));
	}, []);

	const location = useLocation();
	const closeMenuButton = useRef<HTMLButtonElement | null>(null);

	function handleTheme(){
		const themeButton = document.querySelector("#theme-button") as HTMLElement;
		handleChangeTheme(theme === "dark" ? "light" : "dark");
		themeButton.focus();
	}

	useEffect(() => {
		setCloseMenuButton(closeMenuButton);
	}, []);

	useEffect(() => {
		handleOpenMenu("close");
	}, [location]);

	const navClasses = "fixed right-0 top-0 w-full h-full z-10 bg-warning-content text-white";
	const classes = "w-full block text-left p-3 h-full btn-square btn-ghost mobile-nav-link";
	const liClasses = "relative w-full sm:w-auto";

	return (
		<div className="flex px-8">
			{/* LOGO */}
			<div className="flex-1">
				<NavLink to="/" className="flex items-center h-full">
					<img 
						src={image} 
						alt="Veronica's personal page" 
						className="w-6 h-6 rounded-full"
					/>
				</NavLink>
			</div>
			{/* HAMBURGUER */}
			<button onClick={() => handleOpenMenu()} id="hamburguer-button" className="btn-ghost flex justify-center items-center gap-3 sm:hidden px-3.5"  aria-expanded="false" aria-controls="mobile-nav">
				<svg role="img" aria-label="Hamburguer Icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
					<title>Hamburguer Icon</title>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
				<span className="inline-block">Menu</span>
			</button>
			{/* MOBILE MENU */}
			<nav className={`flex-none ${isMenuOpen ? navClasses : "hidden"} sm:hidden`} id="mobile-nav">
				
				<ul id="nav-list" className="flex inline-flex flex-col sm:flex-row w-full sm:w-auto">
					<li className={liClasses}>
						<button ref={closeMenuButton} id="close-menu" onClick={() => handleOpenMenu("close")} className="block text-left p-3 w-full btn-square btn-ghost flex items-center gap-3 sm:hidden mobile-nav-link">
							<span className="inline-block pointer-events-none">close menu</span>
						</button>
					</li>
					<li className={liClasses}>
						<NavLink
							to={`/?theme=${theme}`}
							className={({ isActive }) =>
								isActive ? `active ${classes}` : `${classes}`
							}
							end
						>
							resume
						</NavLink>
					</li>
					<li className={liClasses}>
						<span className="w-full block text-left p-3 h-full sm:italic">comics</span>
						<ul id="comics-menu" className="absolute w-full">
							<li>
								<NavLink 
									to={`/comics/abs?theme=${theme}`}
									className={({ isActive }) =>
										isActive ? `active ${classes}` : `${classes}`
									}
								>
										abs
								</NavLink>
							</li>
							<li>
								<NavLink 
									to={`/comics/trinidad?theme=${theme}`}
									className={({ isActive }) =>
										isActive ? `active ${classes}` : `${classes}`
									}
								>
										trinidad
								</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			{/* DESKTOP MENU */}
			<nav className="flex-none hidden sm:block" tabIndex={0}>
				<ul className="flex inline-flex flex-col sm:flex-row w-full sm:w-auto">
					<li className={liClasses}>
						<NavLink
							to={`/?theme=${theme}`}
							className={({ isActive }) =>
								isActive ? `active ${classes}` : `${classes}`
							}
							end
						>
							resume
						</NavLink>
					</li>
					<li className={liClasses}>
						<button 
							type="button" 
							aria-controls="comics-menu" 
							aria-expanded="false" 
							onClick={handleOpenSubMenu}
							className={subMenuName === "comics-menu" ? `active flex items-center ${classes}` : `flex items-center ${classes}`}
						>
							comics
							<svg 
								className="fill-current" 
								xmlns="http://www.w3.org/2000/svg" 
								width="20" 
								height="20" 
								viewBox="0 0 24 24"
								aria-labelledby="chevron-down"
								focusable="false"
								aria-hidden
							>
								<title id="chevron-down">Chevron pointing down</title>
								<path 
									d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
								/>
							</svg>
						</button>
						{subMenuName === "comics-menu" && (
							<ul id="comics-menu" className="absolute w-full">
								<li>
									<NavLink 
										to={`/comics/abs?theme=${theme}`}
										className={({ isActive }) =>
											isActive ? `active ${classes}` : `${classes}`
										}
									>
										abs
									</NavLink>
								</li>
								<li>
									<NavLink 
										to={`/comics/trinidad?theme=${theme}`}
										className={({ isActive }) =>
											isActive ? `active ${classes}` : `${classes}`
										}
									>
										trinidad
									</NavLink>
								</li>
							</ul>
						)}
					</li>
					<li className={`${liClasses} hidden sm:block`}>
						<button onClick={handleTheme} className={classes} id="theme-button">
							{theme === "light" ? (
								<svg role="img" aria-label="Moon icon (dark theme)" className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
									<title>Moon icon (dark theme)</title>
									<path fill="black" d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
								</svg>
							) : (
								<svg role="img" aria-label="Sun Icon (light theme)" className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
									<title>Sun Icon (light theme)</title>
									<path fill="white" d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
								</svg>
							)}
						</button>
					</li>
				</ul>
			</nav>
			{/* THEME MOBILE BUTTON */}
			{!isMenuOpen && (
				<button onClick={handleTheme} id="theme-button" className="flex items-center justify-center btn-square btn-ghost block sm:hidden">
					{theme === "light" ? (
						<svg role="img" aria-label="Moon icon (dark theme)" className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
							<title>Moon icon (dark theme)</title>
							<path fill="black" d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
						</svg>
					) : (
						<svg role="img" aria-label="Sun Icon (light theme)" className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
							<title>Sun Icon (light theme)</title>
							<path fill="white" d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
						</svg>
					)}
				</button>
			)}
			
		</div>
	);
}