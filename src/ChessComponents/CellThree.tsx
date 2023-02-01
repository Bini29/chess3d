import React, { FC } from "react";
import { Cell } from "../Models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellThree: FC<CellProps> = ({ cell, selected, click }) => {
  console.log(selected);

  return (
    <mesh position={[cell.x, cell.y, 0]} onClick={() => click(cell)}>
      <planeGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={selected ? "red" : cell.color} />
      {cell.figure?.model && cell.figure.model(cell.figure)}
    </mesh>
  );
};
export default CellThree;
