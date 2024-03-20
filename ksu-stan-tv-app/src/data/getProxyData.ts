export function getProxyData(key: string, request: () => any) {
  return new Proxy([], {
    get: async function (target: any) {
      if (!target[key] && request) {
        target[key] = await request();
      }

      return target[key];
    },
  });
}
