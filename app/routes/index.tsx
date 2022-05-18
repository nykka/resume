import { Link } from "@remix-run/react";
import image from "../images/nykka.png";

export default function Index() {
  return (
    <div className="py-20">
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
          {/* <p className="font-bold">About me</p> */}
          <h1 className="py-2 text-6xl font-bold">Hi! I’m Vero ~ aka Nykka, and my pronouns are she/her.</h1>
          <p className="py-2 text-2xl">I'm a <strong>Front End Developer</strong> with a focus on web/web app development, pixel perfection, UX/UI, and accessibility. I like to work in diverse environments where caring for the best practices and teamwork are priorities. </p>
          <p className="py-2 text-2xl">I love to participate in communities whose mission is to spread and share knowledge, especially to minorities and underrepresented communities. I’m actually a staff member in FrontendCafé a tech server in Discord. <Link to="https://discord.gg/2P99cTQZ" target="_blank" className="link hover:no-underline">Click here to join the server.</Link></p>
          <p className="py-2 text-2xl">In my free time I write and draw my own comic books. If you are interested in them, you can <Link className="link hover:no-underline" to="/comics">click here to read my comics.</Link></p>
        </div>
      </div>
    </div>
  );
}
