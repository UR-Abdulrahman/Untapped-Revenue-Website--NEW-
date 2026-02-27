import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: path.join(__dirname),
  },
  outputFileTracingIncludes: {
    "/blog": ["./content/blog/**/*.mdx"],
    "/blog/[slug]": ["./content/blog/**/*.mdx"],
  },
};

export default nextConfig;
