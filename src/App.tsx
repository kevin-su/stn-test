import "./App.css";

import { Router, pagesRoute } from "pages";

import { Header } from "components";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="app-template">
        <Header />
        <Router routes={pagesRoute} />
      </div>
    </div>
  );
}
