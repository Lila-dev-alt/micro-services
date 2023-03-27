import { Plate } from "./plate";

export class PlateRepository {
  private plates: Plate[] = [];

  public findAll(): Plate[] {
    return this.plates;
  }

  public create(plate: Plate): Plate {
    this.plates.push(plate);
    return plate;
  }
}
