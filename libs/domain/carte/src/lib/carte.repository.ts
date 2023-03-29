import { Message, Plate } from "./plate";

export class PlateRepository {
  private plates: Plate[] = [];

  public findAll(): Plate[] {
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
    quantity: 0,
    name: plate.name,
    type: plate.type,
    description: plate.description,
    price: plate.price
    
  };

    this.plates.push(newPlate);
    return newPlate;
  }
  public findOneBy(name: string): Plate | Message {
    const plat = this.plates.find((plat) => name == plat.name);
    if (!plat) {
      return {
        message:
          "Mauvais plat",
      };
    }
    return plat;
  }
}
