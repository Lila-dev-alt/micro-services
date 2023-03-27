import express from 'express';
import { definePlatRoutes } from '@alt-table/domain/carte';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = express();
app.use(express.json());

definePlatRoutes(app);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
