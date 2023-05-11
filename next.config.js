module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/outstatic",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/outstatic/:slug",
        destination: "/studio/:slug", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/api/outstatic",
        destination: "/api/studio",
        permanent: true,
      },
      {
        source: "/api/outstatic/:slug",
        destination: "/api/studio/:slug", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};
