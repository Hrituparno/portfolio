/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Force fresh build - disable caching
    generateBuildId: async () => {
        return 'retro-build-' + Date.now()
    },
}

module.exports = nextConfig
