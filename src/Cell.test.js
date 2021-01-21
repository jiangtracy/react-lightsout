import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

it("matches snapshot", function() {
  const {container} = render(<Cell isLit={true}/>);
  expect(container).toMatchSnapshot();
});

it("generate the correct color", function() {
  const {container, debug} = render(<Cell isLit={true}/>);
  debug(container);
  expect(container.querySelector("td")).toHaveClass("Cell-lit");
});





