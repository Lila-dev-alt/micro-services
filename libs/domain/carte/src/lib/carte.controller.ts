import { PlateService } from "./carte.service";
import { Plate } from "./plate";

export class PlateController {
  private plateService: PlateService;
  constructor(plateService?: PlateService) {
    this.plateService = plateService || new PlateService();
  }

  async findAll(): Promise<Plate[]> {
    return this.plateService.findAll();
  }

  async create(plat: Plate): Promise<Plate> {
    return this.plateService.create(plat);
}
}
