import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./Figure/Figure";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  aviliable: boolean;
  id: number;

  constructor(
    borad: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = borad;
    this.aviliable = false;
    this.id = Math.random();
  }
}
