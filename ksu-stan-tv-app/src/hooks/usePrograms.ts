import { useEffect, useState } from "react";

import { getPrograms } from "data";

const cachedProgramsData = new Proxy([], {
  get: async function (target: any) {
    if (!target.programsData) {
      // Fetch data if it's not cached
      target.programsData = await getPrograms();
    } else {
      console.log("Returning cached data...");
      // return target.data;
    }

    return target.programsData;
  },
});

export function usePrograms() {
  const [programsData, setProgramsData] = useState<any>([]);

  useEffect(() => {
    (async () => setProgramsData(await cachedProgramsData.programsData))();
  }, []);

  return programsData;
}
