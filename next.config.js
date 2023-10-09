/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
