import { Link } from "@remix-run/react";
import image from "../images/nykka.png";

export default function Index() {
	return (
		<div className="py-20">
			<section>
				<div className="card w-full text-left flex flex-col flex-wrap items-left">
					<div className="card-body items-left text-left w-full">
						<div className="avatar">
							<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
								<img
									src={image}
									alt="White and black cartoon of myself. I have both of my hands over each sides of my face, my eyes are closed and I have an expression of daydreaming about something really cute."
								/>
							</div>
						</div> 
						<h1 className="text-1xl uppercase font-bold mt-4">about me</h1>
						<h2 className="text-6xl font-bold -mt-2">Hi! I’m Vero ~ aka Nykka, and my pronouns are she/her.</h2> 
						<p className="text-2xl mt-4">I'm a <span className="font-bold">Front End Developer</span> with a focus on web/web app development, pixel perfection, UX/UI, and accessibility. I like to work in diverse environments where caring for the best practices and teamwork are priorities. </p>
						<p className="text-2xl mt-4">I love to participate in communities whose mission is to spread and share knowledge, especially to minorities and underrepresented communities. I’m actually a staff member in FrontendCafé a tech server in Discord. <a href="https://discord.gg/2P99cTQZ" target="_blank" className="link hover:no-underline">Join the server.</a></p>
						<p className="text-2xl mt-4">In my free time I write and draw my own comic books. If you are interested in them, you can <Link className="link hover:no-underline" to="/comics">read my comics.</Link></p>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="card w-full text-left flex flex-col flex-wrap items-left">
					<div className="card-body items-left text-left w-full space-y-4">
						<h2 className="text-2xl uppercase font-bold">What I want</h2>
						<p className="text-4xl">In the future I want to become a senior developer specialized in accessibility. I’d love to master TypeScript and to keep helping others to become developers.</p>
					</div>
				</div>
			</section>
			<section>
				<div className="card w-full text-left flex flex-col flex-wrap items-left">
					<div className="card-body items-left text-left w-full space-y-4">
						<h2 className="text-5xl font-bold">Current experience</h2>
						<p className="text-2xl">I’m working as a Front End Developer at Smalls since August 2020. </p>
						<p className="text-2xl">Smalls is a New York startup that offers a human-grade cat food subscription service shipped to your door. <Link to="https://www.smalls.com/" target="_blank" className="link hover:no-underline">Visit Smalls site.</Link></p>
						<div className="text-2xl">
							<span className="font-bold">Some of my responsibilities at Smalls are: </span>
							<ul className="inline">
								<li className="inline">Turn Figma designs into features for our React applications, </li>
								<li className="inline">improve web performance, and accessibility, </li>
								<li className="inline">create documentation of our processes, </li>
								<li className="inline">set up A/B tests using Google Optimize, </li>
								<li className="inline">give feedback to the UI designers about better practices and UX improvements. </li>
							</ul>
						</div>
						<div className="text-2xl">
							<span className="font-bold">And our stack is: </span>
							<ul className="inline">
								<li className="inline">React, </li>
								<li className="inline">TypeScript, </li>
								<li className="inline">Redux, </li>
								<li className="inline">React Query, </li>
								<li className="inline">Styled Components, </li>
								<li className="inline">Tailwind, </li>
								<li className="inline">Storybook, </li>
								<li className="inline">Cypress, </li>
								<li className="inline">Contentful, </li>
								<li className="inline">Google Optimize, </li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
