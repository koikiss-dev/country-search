const withPwa = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPwa({
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  reactStrictMode: true,
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
