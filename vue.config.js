const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
  transpileDependencies: true,
});
