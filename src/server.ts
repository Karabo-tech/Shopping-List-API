import express from 'express';
import itemRoutes from './routes/items';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/items', itemRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});