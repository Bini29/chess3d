import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import ModelRook from "../../assets/figures3d/ModelRook";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.model = ModelRook;
    this.name = FigureNames.PAWN;
  }
}
