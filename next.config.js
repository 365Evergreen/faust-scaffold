const { withFaust } = require("@faustwp/core");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  output: 'export',
  images: {
    domains: ["faustexample.wpengine.com"],
    unoptimized: true,
  },
  trailingSlash: true,
});
