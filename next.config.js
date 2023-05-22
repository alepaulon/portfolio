/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.loom.com',
                port: '',
                pathname: '/sessions/**',
            },
        ],
    },
}

module.exports = nextConfig

