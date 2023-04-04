import { ErrorRequestHandler } from "express";
import { PlateService } from "./carte.service";
import { Plate, Message } from "./plate";

export class PlateController {
  private plateService: PlateService;
  constructor(plateService?: PlateService) {
    this.plateService = plateService || new PlateService();
  }

  async findAll(): Promise<Plate[] | Error> {
    return this.plateService.findAll();
  }

  async create(plat: Plate): Promise<Plate | Message> {
    return this.plateService.create(plat);
}
  async findOneBy(name: string): Promise<Plate | Error> {
    return this.plateService.findOneBy(name);
  }
async updateOne(name: string, quantity: number): Promise<Plate | Error> {
    return this.plateService.updateOne(name, quantity);
  }
   async findAllAvailablePlates(): Promise<Plate[] | Error> {
    return this.plateService.findAllAvailablePlates();
  }

}
