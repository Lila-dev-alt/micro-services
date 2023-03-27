import { PlateRepository } from "./carte.repository";
import { Plate } from "./plate";

export class PlateService {
  private readonly plateRepository: PlateRepository;
  constructor(plateRepository?: PlateRepository) {
    this.plateRepository = plateRepository || new PlateRepository();
  }

  async findAll(): Promise<Plate[]> {
    return this.plateRepository.findAll();
  }

    async create(plat: Plate): Promise<Plate> {
    return this.plateRepository.create(plat);
  }
}
