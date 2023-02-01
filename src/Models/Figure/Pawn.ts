import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import ModelPawn from "../../assets/figures3d/ModelPawn";

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.model = ModelPawn;
    this.name = FigureNames.PAWN;
  }
}
