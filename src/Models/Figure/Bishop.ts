import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import ModelBishop from "../../assets/figures3d/ModelBishop";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.model = ModelBishop;
    this.name = FigureNames.PAWN;
  }
}
