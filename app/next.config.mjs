/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.codex-cmr.com",
      },
    ],
  },

  // Improve SEO with additional headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ];
  },

  // Disable X-Powered-By header for security
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Redirect legacy routes
  async redirects() {
    return [
      {
        source: "/projects/chatbot",
        destination: "/projects/codexchatbot",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
