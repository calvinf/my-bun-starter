import { serve } from 'bun';

serve({
  port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
  development: process.env.NODE_ENV === 'development',

  routes: {
    '/': new Response(await Bun.file('./public/starter.html').bytes(), {
      headers: { 'Content-Type': 'text/html' },
    }),
  },

  // API requests
  fetch() {
    return new Response('hello starter');
  },
});
