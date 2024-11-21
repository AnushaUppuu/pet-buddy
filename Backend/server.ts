import {connection} from './connection';
import express from 'express';
const app = express();
async function main() {
  await connection();
  app.listen(4000, () => {
    console.log('Backend is running on the 4000 port');
  });
}
main();
