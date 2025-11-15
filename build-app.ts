await Bun.build({
  entrypoints: ['./src/backend.ts'],
  outdir: './out',
  minify: true,
  sourcemap: 'external',
});
