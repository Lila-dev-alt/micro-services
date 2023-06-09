import { Message, Plate } from "./plate";

export class PlateRepository {
  private plates: Plate[] = [];

  public findAll(): Plate[] | Error {
    if (this.plates.length === 0) {
       throw new Error('There is no plates. Please create one');

    }
    return this.plates;
  }

  public create(plate: Plate): Plate | Message {
     if (this.plates.find((p) => p.name == plate.name)) {
      return {
        message: 'Deux plats ne peuvent pas avoir le même nom',
      };
    }
   if (Plate.isType(plate.type) === -1) {
      return {
        message: "Le type d'un plat doit être parmis ces propositions : Apéritif,Entrée,Plat principal,Dessert,Boisson",
      };
    } 
      const newPlate: Plate = {
    ...plate,
    quantity: plate.quantity ? plate.quantity : 0,
    name: plate.name,
    type: plate.type,
    description: plate.description,
    price: plate.price
    
  };

    this.plates.push(newPlate);
    return newPlate;
  }
  public findOneBy(name: string): Plate | Error {
    const plat = this.plates.find((plat) => name == plat.name);
    if (!plat) {
      throw new Error('This plate does not exist !');
    } 
    return plat;
  }
   public updateOne(name: string, quantity: number): Plate | Error {
    const plat = this.plates.find((plat) => name == plat.name);
    if (!plat) {
      throw new Error('This plate does not exist !');
    } 
    plat.quantity = quantity;
    return plat;
  }
  public findAllAvailablePlates(): Plate[] | Error {
      const availablePlates = this.plates.filter(plate => plate.quantity > 0);
      if (!availablePlates) {
        throw new Error('There is no available plates.');

      }
    return availablePlates;
    }

}
