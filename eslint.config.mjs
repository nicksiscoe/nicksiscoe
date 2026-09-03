import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// NOTE: eslint is pinned to v9 and typescript to v6 (see package.json).
// eslint-config-next's bundled eslint-plugin-react does not support eslint 10,
// and its typescript-eslint does not support TS 7 yet. Re-test both bumps on
// the next upgrade pass; `npm run lint` fails loudly if they start working.

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
