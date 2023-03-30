import { Application } from 'express';
import { PlateController } from "./carte.controller";
import { Plate } from './plate';
const controller = new PlateController();


export const definePlatRoutes = (app: Application) => {
  app.get('/', async (req, res) => {
    res.send({"message" : "this is working"});
  });
   app.get('/api/plates', async (req, res) => {
   try {
       const plats = await controller.findAll();
    res.send(plats);
    }catch(e) {
    res.status(404).send("Il n'y a pas de plats. Veuillez en créer un");
}
  });
  app.post('/api/plate', async (req, res) => {
    const plat = await controller.create(req.body);
    res.send(plat);
  });
  app.get('/api/plate/:name', async (req, res) => {
    try {
    const name: string = req.params.name;
    const plat = await controller.findOneBy(name);
    res.send(plat);
}catch(e) {
    res.status(404).send("Ce plat n'existe pas");

} });

   app.get('/api/plate/update/:name', async (req, res) => {
    try {
    const name: string = req.params.name;
    const quantity: number = req.body.quantity;
    const plat = await controller.updateOne(name, quantity);
    res.send(plat);
}catch(e) {
    res.status(404).send("Ce plat n'existe pas");

} });
};