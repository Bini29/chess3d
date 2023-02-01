import { Colors } from "../Colors";
import ModelKing from "../../assets/figures3d/ModelKing";
import { Cell } from "../Cell";

export enum FigureNames {
  FIGURE = "Фигура",
  KING = "Король",
  KNIGHT = "Конь",
  PAWN = "Пешка",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "Слон",
}
export class Figure {
  color: Colors;
  model: typeof ModelKing | null;
  cell: Cell;
  name: FigureNames;
  id: number;
  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.model = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }
  canMove(target: Cell): boolean {
    return true;
  }
  moveFigure(target: Cell) {}
}
