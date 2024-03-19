import { Carousel } from "components";
import { usePrograms } from "hooks";

export default function Home() {
  const programsData = usePrograms();

  return (
    <div>
      <Carousel data={programsData} options={{}} />
    </div>
  );
}
