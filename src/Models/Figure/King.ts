import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import ModelKing from "../../assets/figures3d/ModelKing";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.model = ModelKing;
    this.name = FigureNames.PAWN;
  }
}
