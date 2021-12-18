const withPwa = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPwa({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
