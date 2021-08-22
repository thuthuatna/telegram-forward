import { app } from './app';
import * as dotenv from 'dotenv';

dotenv.config();

export function hello(world: string = 'world'): void {
  return console.log(`Hello ${world}! `);
}

const start = (async function () {
  app.listen(process.env.PORT, () => {
    console.log('Listening on port 3000!');
  });
})();
