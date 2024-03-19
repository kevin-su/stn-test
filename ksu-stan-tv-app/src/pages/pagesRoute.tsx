import Home from "./Home";
import { PageRouteProps } from "./Router";
import Program from "./Program";

export const pagesRoute = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "program",
    element: <Program />,
  },
] as Array<PageRouteProps>;
