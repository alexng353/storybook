import { defineConfig } from "tsup";

export default defineConfig((_options) => ({
  entry: ["src/index.ts"],
  // noExternal: ["tailwind-variants"],
  banner: {
    //     js: `import { dirname } from 'node:path'
    // import { fileURLToPath } from 'node:url'
    //
    // const __dirname = typeof __dirname !== 'undefined'
    //   ? __dirname
    //   : dirname(fileURLToPath(import.meta.url))`,
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  esbuildOptions(options, _context) {
    options.metafile = true;
  },
  minify: true,
  outDir: "dist",
  dts: true,
  tsconfig: "tsconfig.build.json",
  format: ["cjs"],
}));
