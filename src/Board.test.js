import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

it('tests rendering the starter board', function() {
	const { container, debug } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);

	debug(container);

	expect(container).toMatchSnapshot();
});


it('tests cell-clicking', function() {
  const { container, debug } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0.3} />);

  debug(container);

  const cell = container.querySelector("#C1-1");
  
  const cellLeft = container.querySelector("#C1-0");
  const cellRight = container.querySelector("#C1-2");
  const cellUp = container.querySelector("#C0-1");
  const cellDown = container.querySelector("#C2-1");

  const cellLeftIsLit = cellLeft.classList.contains("Cell-lit");
  const cellRightIsLit = cellRight.classList.contains("Cell-lit");
  const cellUpIsLit = cellUp.classList.contains("Cell-lit");
  const cellDownIsLit = cellDown.classList.contains("Cell-lit");

  fireEvent.click(cell);

  expect(cellLeft.classList.contains("Cell-lit")).not.toEqual(cellLeftIsLit);
  expect(cellRight.classList.contains("Cell-lit")).not.toEqual(cellRightIsLit);
  expect(cellUp.classList.contains("Cell-lit")).not.toEqual(cellUpIsLit);
  expect(cellDown.classList.contains("Cell-lit")).not.toEqual(cellDownIsLit);

});


it('tests win', function() {
  const { container, debug } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />);

  expect(container.querySelector("h3")).toHaveClass("winMsg");
});

