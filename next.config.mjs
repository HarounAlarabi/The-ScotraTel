/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kkegsgshjfgaxkifdqly.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",

        //kkegsgshjfgaxkifdqly.supabase.co/storage/v1/object/public/cabin-images/cabin-006.jpg
      },
    ],
  },
};

export default nextConfig;
