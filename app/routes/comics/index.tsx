import type { LoaderFunction } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({
  request,
}) => {
  const url = new URL(request.url);
  const theme = url.searchParams.get("theme");
	return theme;
};

export default function Index() {

	const theme = useLoaderData(); 

  return (
    <div className="text-center flex flex-col items-center py-20">
      <h1 className="py-2 text-6xl font-bold">My comics</h1>
      <nav>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box">
          <li>
            <NavLink
              to={`/comics/abs?theme=${theme}`}
            >
              abs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
