/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		formats: ['image/webp', 'image/avif'],
		domains: ['media.graphassets.com', '*'],
	}
};