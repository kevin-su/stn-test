import "./Carousel.scss";

export type ProgramCardProps = {
  id: number;
  image: string;
  title: string;
};

export function ProgramCard({
  id,
  image,
  title,
}: ProgramCardProps): JSX.Element {
  return (
    <a href={`#/program/${id}`}>
      <img src={image} alt={title} />
    </a>
  );
}
