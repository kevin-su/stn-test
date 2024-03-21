import { Header, ProgramsCarousel } from "components";

export default function Home() {
  return (
    <div className="app-template">
      <Header />
      <div className="carousel-section">
        <ProgramsCarousel />
      </div>
    </div>
  );
}
