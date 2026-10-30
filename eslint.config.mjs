import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    files: ["src/components/layout/Nav.tsx"],
    // Preserve the existing close-on-navigation effect; no React Compiler is enabled.
    // Revisit this new performance rule in a separate navigation refactor.
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
]);
