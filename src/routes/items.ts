import { Router, Request, Response } from 'express';
import { Item } from '../models/item';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
const items: Item[] = [];

router.get('/', (req: Request, res: Response) => {
  res.json(items);
});

router.post('/', (req: Request, res: Response) => {
  const { name, quantity } = req.body;

  if (!name || typeof quantity !== 'number' || quantity <= 0) {
    return res.status(400).json({ error: 'Name and valid quantity are required' });
  }

  const newItem: Item = {
    id: uuidv4(),
    name,
    quantity,
    purchased: false,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

export default router;