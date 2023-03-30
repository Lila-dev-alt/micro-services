import { PlateRepository } from "./carte.repository";
import { Plate, Message } from "./plate";

export class PlateService {
  private readonly plateRepository: PlateRepository;
  constructor(plateRepository?: PlateRepository) {
    this.plateRepository = plateRepository || new PlateRepository();
  }

  async findAll(): Promise<Plate[] | Error> {
    return this.plateRepository.findAll();
  }

    async create(plat: Plate): Promise<Plate | Message> {
    return this.plateRepository.create(plat);
  }

   async findOneBy(name: string): Promise<Plate | Error> {
    return this.plateRepository.findOneBy(name);
  }
}
