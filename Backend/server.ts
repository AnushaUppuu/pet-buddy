import {connection} from './connection';
import express from 'express';
const app = express();
import userRoutes from './routes/user_routes';
import petRoutes from './routes/pet_routes';
app.use(express.json());
async function main() {
  app.use('/users', userRoutes);
  app.use('/pets',petRoutes);
  if (process.env.NODE_ENV !== 'test') {
    try{
      await connection();
    }catch(e){
      console.log("Unable to connect",e);
      throw new Error("connection failed");
    }
 
    app.listen(4000, () => {
      console.log('Server running on port 4000');
    });
  }
}
export {app};
main();
