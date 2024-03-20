import { Carousel, ProgramCard, ProgramCardProps } from "components";

import { usePrograms } from "hooks";

export function ProgramsCarousel(): any {
  const data: any = usePrograms() || [];

  return (
    <Carousel>
      {data.map(({ image, id, title }: ProgramCardProps) => (
        <div className="item" key={`carousel-${id}`}>
          <ProgramCard id={id} image={image} title={title} />
        </div>
      ))}
    </Carousel>
  );
}
