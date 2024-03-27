module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "system-ui-font-family": false,
      },
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};

/*

Plugins

system-ui-font-family
https://github.com/JLHwung/postcss-font-family-system-ui
↳ not required w/ > 0.5% and last 2 versions and not dead

logical-properties-and-values
https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical
↳ default values are top-to-bottom and left-to-right

*/
