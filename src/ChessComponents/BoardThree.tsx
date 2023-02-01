import React, { useEffect, useState } from "react";
import CellThree from "./CellThree";
import { Board } from "../Models/Board";
import { Cell } from "../Models/Cell";

const BoardThree = () => {
  const [board, setBoard] = useState(new Board());
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }
  // console.log(board);
  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }
  return (
    <mesh position={[-3.5, -3.5, 0]}>
      {board.cells.map((i, index) => {
        return (
          <React.Fragment key={index}>
            {i.map((cell) => (
              <CellThree
                key={cell.id}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
                cell={cell}
                click={click}
              />
            ))}
          </React.Fragment>
        );
      })}
    </mesh>
  );
};

export default BoardThree;
