import { app } from './app';

export function hello(world: string = 'world'): void {
  return console.log(`Hello ${world}! `);
}

const start = (async function () {
  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
})();
