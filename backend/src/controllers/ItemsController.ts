import { Response, Request } from "express";
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
    const IP = '10.0.0.105'

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        name: item.title,
        image_url: `http://${IP}:3333/uploads/${item.image}`,
      }
    });

    response.json(serializedItems);
  }
}

export default new ItemsController;