import { getPrograms, getProxyData } from "data";
import { useEffect, useState } from "react";

// const cachedProgramsData = new Proxy([], {
//   get: async function (target: any) {
//     if (!target.programsData) {
//       // Fetch data if it's not cached
//       target.programsData = await getPrograms();
//     } else {
//       console.log("Returning cached data...");
//       // return target.data;
//     }

//     return target.programsData;
//   },
// });

export function usePrograms() {
  const [programsData, setProgramsData] = useState<any>([]);

  useEffect(() => {
    (async () =>
      setProgramsData(
        await getProxyData("programsData", getPrograms).programsData
      ))();
  }, []);

  return programsData;
}
