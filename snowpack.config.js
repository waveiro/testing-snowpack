// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
  },
  devOptions: {
    secure: true,
  },
  buildOptions: {
    out: 'dist',
  },
  plugins: [
    '@snowpack/plugin-sass',
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2017",
    treeshake: true
  }
};
