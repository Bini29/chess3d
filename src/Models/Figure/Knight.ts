import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import ModelKnight from "../../assets/figures3d/ModelKnight";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.model = ModelKnight;
    this.name = FigureNames.PAWN;
  }
}
