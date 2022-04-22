module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
  printWidth: 80,
  semi: false,
  singleQuote: true,
  endOfLine: "lf",
  tabWidth: 2,
  useTabs: true,
  trailingComma: "es5",
  arrowParens: "always",
};
