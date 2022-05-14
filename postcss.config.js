module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "system-ui-font-family": false,
        "logical-properties-and-values": {
          dir: "ltr",
        },
      },
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
