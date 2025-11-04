/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["three"],

  images: {
    // Allow Next.js to optimize images from Cloudinary
    domains: ["res.cloudinary.com"],
    // Optional: If you use Cloudinary transformations, you can use a loader below
    loader: "default",
  },

  // Optional: keep your custom resolver setup
  resolver: {
    sourceExts: ["js", "jsx", "json", "ts", "tsx", "cjs", "mjs"],
    assetExts: ["glb", "gltf", "png", "jpg"],
  },
};

module.exports = nextConfig;
