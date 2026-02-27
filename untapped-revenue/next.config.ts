import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingIncludes: {
    "/blog": ["./content/blog/**/*.mdx"],
    "/blog/[slug]": ["./content/blog/**/*.mdx"],
  },
};

export default nextConfig;
