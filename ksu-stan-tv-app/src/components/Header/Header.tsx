import "./header.scss";

import image from "./logo.svg";

export function Header(): JSX.Element {
  return (
    <div className="app-header">
      <a href={`/`} className="app-logo">
        <img src={image} alt="stan" />
      </a>
      <nav className="app-nav">
        <ul className="app-nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">TV Shows</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
