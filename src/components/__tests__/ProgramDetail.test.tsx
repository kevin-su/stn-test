import { render, screen } from "@testing-library/react";

import { ProgramDetail } from "../ProgramDetail";
import React from "react";

global = Object.create(window);
const url = "http://localhost/";
Object.defineProperty(window, "location", {
  value: {
    href: url,
    hash: "#/program/67298",
  },
});

jest.mock("hooks", () => {
  const data = require("./programs-data").default;
  return {
    useProgram: (id) => data.find((item) => item.id === id),
  };
});

test("Program Detail rendered", () => {
  render(<ProgramDetail />);
  expect(screen.getByText("Dr. Death")).toBeInTheDocument();
});
