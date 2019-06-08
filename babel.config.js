const { NODE_ENV: env } = process.env;

const presets = [
  [
    "@babel/preset-env",
    {
      targets: "> 0.25%, last 2 versions, not ie < 11",
      modules: env === "test" ? "commonjs" : false
    }
  ],
  "@babel/preset-react",
  "@babel/preset-typescript"
];

const plugins = ["@babel/plugin-proposal-class-properties", "macros"];

module.exports = {
  presets,
  plugins
};
