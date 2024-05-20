import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src"],
  format: ["cjs"],
  dts: false,
  bundle: false,
  treeshake: true,
});
