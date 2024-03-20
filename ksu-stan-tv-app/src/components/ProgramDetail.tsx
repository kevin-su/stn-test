import "./programDetail.scss";

import { ProgramProps } from "data";
import { useProgram } from "hooks";

export function ProgramDetail(): JSX.Element {
  const id: ProgramProps["id"] = +window.location.hash.split("/").pop();
  const {
    title = "",
    image = "",
    description = "",
    rating,
    year,
    type,
    genre,
    language,
  }: ProgramProps = useProgram(id) || {};
  const labels = [rating, year, type, genre, language].filter(Boolean);

  if (!id) {
    return null;
  }

  return (
    title && (
      <div className="program-detail">
        <div className="program-figure">
          <img className="program-image" src={image} alt={title} />
        </div>
        <div>
          <h1 className="program-title">{title}</h1>
          <ul className="program-labels">
            {labels.map((label) => (
              <li className="program-label-item" key={`content-label-${label}`}>
                {label}
              </li>
            ))}
          </ul>
          <p className="program-description">{description}</p>
        </div>
      </div>
    )
  );
}
