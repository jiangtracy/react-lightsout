import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just 3 props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 * 
 * - id: id that the cell should render to
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

function Cell({ flipCellsAroundMe, isLit, id }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td className={classes} id={id} onClick={flipCellsAroundMe} />;
}

export default Cell;
