import "./Carousel.scss";

export function Carousel({ children }: { children: any }) {
  return (
    <div className="carousel-container">
      <div className="carousel-items-container">{children}</div>
    </div>
  );
}
