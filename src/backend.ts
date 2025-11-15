import starter from '../public/starter.html';
import { serve } from 'bun';

serve({
  static: {
    '/': starter,
  },

  port: process.env.PORT ? parseInt(process.env.PORT) : 5173,

  development: process.env.NODE_ENV === 'development',

  // API requests
  async fetch() {
    return new Response('hello starter');
  },
});
