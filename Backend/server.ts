import {connection} from './connection';
import express from 'express';
const app = express();
import userRoutes from './routes/user_routes';
async function main() {
  await connection();
  app.use('/users',userRoutes);
  app.listen(4000, () => {
    console.log('Backend is running on the 4000 port');
  });
}
main();
