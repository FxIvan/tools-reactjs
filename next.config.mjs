/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        implementation: 'sass-embedded',
        sassOptions: {
            includePaths: ['./styles'],
        },
    },
};

export default nextConfig;
