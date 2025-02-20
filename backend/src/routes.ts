import express, { request } from 'express';
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';
const routes = express.Router();
// index, show, create, update, delete
routes.get('/items', ItemsController.index);
routes.post('/points', PointsController.create);
routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);

export default routes;