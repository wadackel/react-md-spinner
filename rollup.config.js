import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";

const banner = `/*! @preserve ${pkg.name} v${pkg.version} - ${pkg.author} | ${pkg.license} license. */`;

export default {
  input: "src/index.ts",
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.dependencies)
  ],
  output: [
    {
      banner,
      file: pkg.main,
      format: "cjs"
    },
    {
      banner,
      file: pkg.module,
      format: "esm"
    }
  ],
  plugins: [
    resolve({
      extensions: [".ts", ".tsx"]
    }),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      extensions: [".ts", ".tsx"]
    })
  ]
};
