import { Router, Request, Response } from 'express';
import { Item } from '../models/item';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
const items: Item[] = [];

router.get('/', (req: Request, res: Response) => {
  res.json(items);
});

router.get('/:id', (req: Request, res: Response) => {
  const item = items.find((i) => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
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

router.put('/:id', (req: Request, res: Response) => {
  const { name, quantity, purchased } = req.body;
  const itemIndex = items.findIndex((i) => i.id === req.params.id);

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  if (name && typeof name !== 'string') {
    return res.status(400).json({ error: 'Name must be a string' });
  }

  if (quantity && (typeof quantity !== 'number' || quantity <= 0)) {
    return res.status(400).json({ error: 'Quantity must be a positive number' });
  }

  if (purchased !== undefined && typeof purchased !== 'boolean') {
    return res.status(400).json({ error: 'Purchased must be a boolean' });
  }

  items[itemIndex] = {
    ...items[itemIndex],
    name: name || items[itemIndex].name,
    quantity: quantity || items[itemIndex].quantity,
    purchased: purchased !== undefined ? purchased : items[itemIndex].purchased,
  };

  res.json(items[itemIndex]);
});

router.delete('/:id', (req: Request, res: Response) => {
  const itemIndex = items.findIndex((i) => i.id === req.params.id);

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  items.splice(itemIndex, 1);
  res.status(204).send();
});

export default router;