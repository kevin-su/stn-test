import { Carousel, Header } from "components";

import { usePrograms } from "hooks";

export default function Home() {
  const programsData = usePrograms() || [];

  return (
    <>
      <Header />
      <Carousel data={programsData} />
    </>
  );
}
