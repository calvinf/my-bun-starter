import { serve } from 'bun';
import index from '../index.html';

const server = serve({
  port: Number(process.env.PORT) || 5173,
  development: process.env.NODE_ENV !== 'production' && {
    hmr: true,
    console: true,
  },

  routes: {
    '/*': index,
    '/api/hello': () => Response.json({ message: 'hello starter' }),
  },
});

console.log(`Listening on ${server.url}`);
