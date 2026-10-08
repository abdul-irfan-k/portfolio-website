import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  reactCompiler: true,
  cacheComponents: true,
  partialPrefetching: true,
  cacheLife: {
    projects: {
      stale: 86400,
      revalidate: 86400,
      expire: 2592000,
    },
  },
  experimental: {
    turbopackRustReactCompiler: true,
  },
  async redirects() {
    return [
      {
        source: "/work/:project_name",
        destination: "/projects/:project_name",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
