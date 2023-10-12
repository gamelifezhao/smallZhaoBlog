/** @type {import('next').NextConfig} */

const SemiWebpackPlugin = require("@douyinfe/semi-webpack-plugin").default;
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  server: {
    port: 5000, // 指定要使用的端口号
  },
  images: {
    domains: ["p3-juejin.byteimg.com"], // 允许的主机名列表
  },
  async rewrites() {
    return [
      {
        source: "/:path*", // 这里设置路径规则
        destination: "/:path*", // 这里设置路径规则
      },
    ];
  },
  webpack: (config, ctx) => {
    config.plugins.push(
      new SemiWebpackPlugin({
        theme: "semi-theme-small-zhao-test",
        // include: "~/scss/local.scss",
      })
    );
    return config;
  },
  transpilePackages: [
    "@douyinfe/semi-ui",
    "@douyinfe/semi-icons",
    "@douyinfe/semi-illustrations",
  ],
};

module.exports = withBundleAnalyzer(nextConfig);
