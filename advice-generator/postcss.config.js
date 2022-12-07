const autoPrefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    autoPrefixer,
    postcssPresetEnv({
      stage: 0
    }),
    require("cssnano")
  ]
};
