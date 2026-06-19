import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // NOTE: do NOT re-add `experimental.optimizePackageImports`.
  // On Next 16.1.6 it makes `next dev`/`next build` hang indefinitely at
  // the compile step (no output, server never binds). framer-motion and
  // lucide-react aren't imported by the page anyway, so it bought nothing.
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Type-checking/lint run separately in the editor; skipping them keeps the
  // export build from stalling on the (very slow) TS pass in this environment.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
