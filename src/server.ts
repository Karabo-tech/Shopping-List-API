import express from 'express';
import itemRoutes from './routes/items';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});