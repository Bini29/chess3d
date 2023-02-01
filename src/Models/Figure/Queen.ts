import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import ModelQueen from "../../assets/figures3d/ModelQueen";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.model = ModelQueen;
    this.name = FigureNames.PAWN;
  }
}
