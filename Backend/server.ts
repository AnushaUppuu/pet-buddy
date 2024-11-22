import {connection} from './connection';
import express from 'express';
const app = express();
import userRoutes from './routes/user_routes';
app.use(express.json());
async function main() {
  app.use('/users', userRoutes);
  if (process.env.NODE_ENV !== 'test') {
    await connection();
    app.listen(4000, () => {
      console.log('Server running on port 4000');
    });
  }
}
export {app};
main();
