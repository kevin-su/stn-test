import "./App.css";

import { Router, pagesRoute } from "pages";

import React from "react";

export default function App() {
  return (
    <div className="App">
      <Router routes={pagesRoute} />
    </div>
  );
}
