import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    // Next build outputs (either when run inside demo/ or from repo root)
    ".next/**",
    "out/**",
    "build/**",
    "demo/.next/**",
    "demo/out/**",
    "demo/build/**",

    // Common noise
    "node_modules/**",
    "demo/node_modules/**",
    ".vercel/**",
    "demo/.vercel/**",

    // Next/TS generated
    "next-env.d.ts",
    "demo/next-env.d.ts",
  ]),
]);

export default eslintConfig;
