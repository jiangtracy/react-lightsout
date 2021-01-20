import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.3 }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for (let row = 0; row < nrows; row++) {
      let rowArray = [];
      for (let col = 0; col < ncols; col++) {
        let isLightOn = Math.random() < chanceLightStartsOn;
        rowArray.push(isLightOn);
      }
      initialBoard.push(rowArray);
    }

    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    for (let row = 0; row < nrows; row++) {
      for (let col = 0; col < ncols; col++) {
        if (board[row][col]) return false;
      }
    }
    return true;
  }

  function flipCellsAround(y, x) {
    setBoard((oldBoard) => {
      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      let boardCopy = [];
      for (let row of oldBoard) {
        boardCopy.push([...row]);
      }

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);

      // TODO: return the copy
      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return (
      <h3 className="winMsg">Congrats you have won!</h3>
    )
  }

  // make table board
  return (
    <div className="Board">
      <table>
        <tbody>
          {board.map((row, rowNum) => {
            return (<tr key={`row-${rowNum}`}>
              {row.map((val, colNum) => 
                 (
                  <Cell
                    key={`${rowNum}-${colNum}`}
                    isLit={val}
                    flipCellsAroundMe={() => flipCellsAround(rowNum, colNum)} />
                )
              )}
            </tr>)
          })
          }
        </tbody>
      </table>
    </div>
  )
  // TODO
}

export default Board;
