/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    remotePatterns:[
      {
      hostname:"avatars.githubusercontent.com",
      protocol:"https", 
      },
      {
        hostname:"images.app.goo.gl",
        protocol:"https",
      },  
      {
        hostname:"images.google.com",
        protocol:"https",
      }, 
      {
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "source.unsplash.com",
			},
    ],
  },
};

export default nextConfig;
