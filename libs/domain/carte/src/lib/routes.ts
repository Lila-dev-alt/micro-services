import { Application } from 'express';
import { PlateController } from "./carte.controller";
const controller = new PlateController();


export const definePlatRoutes = (app: Application) => {
  app.get('/', async (req, res) => {
    res.send({"message" : "this is working"});
  });
   app.get('/api/plates', async (req, res) => {
    const plats = await controller.findAll();
    res.send(plats);
  });
  app.post('/api/plate', async (req, res) => {
    const plat = await controller.create(req.body);
    res.send(plat);
  });
};