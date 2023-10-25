/** @type {import('next').NextConfig} */

// 配置动态主题
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
const semi = require("@douyinfe/semi-next").default({
  /* the extension options */
});
const nextConfig = {
  server: {
    port: 5000, // 指定要使用的端口号
  },
  images: {
    domains: ["p3-juejin.byteimg.com", "pic2.zhimg.com"], // 允许的主机名列表
  },
  async rewrites() {
    return [
      {
        source: "/:path*", // 这里设置路径规则
        destination: "/:path*", // 这里设置路径规则
      },
    ];
  },
  transpilePackages: [
    "@douyinfe/semi-ui",
    "@douyinfe/semi-icons",
    "@douyinfe/semi-illustrations",
  ],
};

module.exports = semi(nextConfig);
