import Home from "./Home";
import { PageRouteProps } from "./Router";
import Program from "./Program";

export const pagesRoute = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/program/:id",
    element: <Program />,
  },
] as Array<PageRouteProps>;
