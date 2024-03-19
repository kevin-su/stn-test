import { useEffect, useState } from "react";

import { getPrograms } from "data";

export function usePrograms() {
  const [programsData, setProgramsData] = useState<any>();

  useEffect(() => {
    (async () => {
      const data = await getPrograms();
      setProgramsData(data);
    })();
  }, [programsData]);

  return programsData;
}
