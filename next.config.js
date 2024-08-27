/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['three'],
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'],
    assetExts: ['glb', 'gltf', 'png', 'jpg'],
  },
}

module.exports = nextConfig
