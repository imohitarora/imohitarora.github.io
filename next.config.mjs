/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/7965137",
        search: "?v=4",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/logo-dark.png",
        search: "",
      },
    ],
    //https://assets.aceternity.com/logo-dark.png
    //https://avatars.githubusercontent.com/u/7965137?v=4
    // domains: ["avatars.githubusercontent.com", "assets.aceternity.com"],
  },
};

export default nextConfig;
