export class Plate {
   name!: string;
   description!: string;
   price!: number;
   type!: "Apéritif" | "Entrée" | "Plat principal" | "Dessert"| "Boisson" ;
  quantity: number = 0;

   constructor(name: string, type: "Apéritif" | "Entrée" | "Plat principal" | "Dessert"| "Boisson", quantity = 0) {
    this.name = name;
    this.type = type;
    this.quantity = quantity;
  }
 static isType (value: string) {
    const types = ["Apéritif","Entrée","Plat principal","Dessert","Boisson"]
   return types.indexOf(value);

  }
}

export class Message {
   static  error: string
}


