import { PlateRepository } from "./plate.repository";
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
   async updateOne(name: string, quantity: number): Promise<Plate | Error> {
    return this.plateRepository.updateOne(name, quantity);
  }
  
   async findAllAvailablePlates(): Promise<Plate[] | Error> {
    return this.plateRepository.findAllAvailablePlates();
  }
}
