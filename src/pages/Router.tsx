import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type HistoryPushProps = {
  url: string;
  state?: object;
  title?: string;
};

export type PageRouteProps = {
  path: string;
  element: JSX.Element;
};

type RouteProps = {
  routes: Array<PageRouteProps>;
};

const RouterContext = createContext({});

export const useRouter = () => useContext(RouterContext);

export function Router({ routes }: RouteProps): JSX.Element {
  const [routePath, setRoutePath] = useState<string>(
    window.location.hash || "/"
  );

  window.addEventListener("hashchange", ({ currentTarget }) => {
    const { location: { hash = "" } = {} } = currentTarget as any;
    routeChange(hash);
  });

  const routeChange = useCallback(
    (hash: string) => {
      const locationHash = hash.slice(1).split("/").filter(Boolean)?.[0] || "/";
      locationHash !== routePath && setRoutePath(locationHash);
    },
    [routePath]
  );

  useEffect(() => {
    window.addEventListener("keydown", function (event) {
      const key = event.key; // const {key} = event; ES6+
      if (key === "Backspace" || key === "Delete") {
        window.history.back();
        return false;
      }
    });

    !window.location.hash && window.history.pushState(null, "home", "/");
  }, []);

  useEffect(() => {
    routeChange(window.location.hash);
  }, [routeChange]);

  const component =
    (routePath &&
      routes.find(
        ({ path }) =>
          routePath &&
          ((routePath === "/" && routePath === path) ||
            new RegExp(routePath).test(path))
      )?.element) ||
    null;

  return (
    <RouterContext.Provider value={{}}>{component}</RouterContext.Provider>
  );
}
