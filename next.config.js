/** @type {import('next').NextConfig} */

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
  //   }),
  //   new MiniCssExtractPlugin({ filename: 'styles.css' }),
  // ],
  reactStrictMode: false,
  distDir: "build", // this is where App Engine expects files to be. by default .next will be the build folder that confuses the App Engine.
};

module.exports = nextConfig;
