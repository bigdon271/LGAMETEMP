import nextVitals from "eslint-config-next/core-web-vitals";
const config = [
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "examples/**",
      "next-env.d.ts",
      "test-results/**",
      "playwright-report/**",
    ],
  },
];

export default config;
