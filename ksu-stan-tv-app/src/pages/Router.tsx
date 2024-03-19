import {
  Fragment,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type HistoryPushProps = {
  url: string;
  state?: object;
  title?: string;
};

type RouterContextProps = {
  historyPush: (
    url: HistoryPushProps["url"],
    title: HistoryPushProps["title"],
    state: HistoryPushProps["state"]
  ) => void;
};

export type PageRouteProps = {
  path: string;
  element: JSX.Element;
};

type RouteProps = {
  routes: Array<PageRouteProps>;
};

const RouterContext = createContext<RouterContextProps>({
  historyPush: () => {},
});

export const useRouter = () => useContext(RouterContext);

export function Router({ routes }: RouteProps): JSX.Element {
  const historyPush = (
    url: HistoryPushProps["url"],
    title: HistoryPushProps["title"] = "",
    state: HistoryPushProps["state"] = {}
  ) => {
    const pushChangeEvent = new CustomEvent("onpushstate", {
      detail: {
        state,
        title,
        url,
      },
    });
    document.dispatchEvent(pushChangeEvent);
    return window.history.pushState(state, title, url);
  };

  document.addEventListener(
    "onpushstate",
    ({ detail: { url = "" } = {} }: any) => routeChange(url),
    false
  );

  const value = useMemo(
    () =>
      ({
        historyPush,
      } as any),
    []
  );

  const [routePath, setRoutePath] = useState<string>(
    window.location.hash || "/"
  );

  window.addEventListener("hashchange", ({ currentTarget }) => {
    const { location: { hash = "" } = {} } = currentTarget as any;
    routeChange(hash);
  });

  const routeChange = useCallback(
    (hash: string) => {
      const locationHash = hash.slice(1) || "/";
      locationHash !== routePath && setRoutePath(locationHash);
    },
    [routePath]
  );

  useEffect(() => {
    routeChange(window.location.hash);
  }, [routeChange]);

  return (
    <RouterContext.Provider value={value}>
      {routePath &&
        routes.map(({ path, element }, i) => {
          return routePath.includes(path) ? (
            <Fragment key={`route-${path}-${i}`}>{element}</Fragment>
          ) : null;
        })}
    </RouterContext.Provider>
  );
}
