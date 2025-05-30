import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',               // Home page (public)
    '/sign-in(.*)',    // Allow sign-in
    '/sign-up(.*)'     // Allow sign-up (optional)
  ],
});

export const config = {
  matcher: [
    '/dashboard(.*)',   // ✅ Protect dashboard
    '/startsafe(.*)',   // Protect your tools
    '/tools(.*)',
    '/fixlog(.*)',
  ],
};
