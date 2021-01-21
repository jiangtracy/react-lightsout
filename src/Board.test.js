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

  
  const cell = container.querySelector("#1-1");
  

  fireEvent.click(cell);

  



});

