/** @type {import('next').NextConfig} */
const staticExport = process.env.PORTFOLIO_STATIC_EXPORT === '1';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

if (basePath && (!basePath.startsWith('/') || basePath.endsWith('/'))) {
  throw new Error('NEXT_PUBLIC_BASE_PATH deve iniziare con / e non terminare con /.');
}

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  ...(basePath ? { basePath } : {}),
  ...(staticExport
    ? { output: 'export', trailingSlash: true, images: { unoptimized: true } }
    : { async headers() { return [{ source: '/:path*', headers: securityHeaders }]; } }),
};

module.exports = nextConfig;
