// middleware.js
import { NextResponse } from 'next/server';


export function middleware(req) {
  if (req?.nextUrl?.pathname?.startsWith('/admin')) {
    const GH_ADMIN_ID = req.cookies.get('GH_ADMIN_ID');
    const GH_ADMIN_PASSWORD = req.cookies.get('GH_ADMIN_PASSWORD');

    // Redirect to login if cookies are missing
    if (!GH_ADMIN_ID || !GH_ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL('/auth', req.url));
    }

    if (GH_ADMIN_ID?.value && GH_ADMIN_PASSWORD?.value) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/auth', req.url));
    }
  }
  else if (req?.nextUrl?.pathname?.startsWith('/auth')) {
    const GH_ADMIN_ID = req.cookies.get('GH_ADMIN_ID');
    const GH_ADMIN_PASSWORD = req.cookies.get('GH_ADMIN_PASSWORD');

    if (GH_ADMIN_ID?.value && GH_ADMIN_PASSWORD?.value) {
      return NextResponse.redirect(new URL('/admin', req.url));
    } else {
      return NextResponse.next();
    }

  }
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/auth', '/auth/:path*'], // Apply this middleware to all admin routes
};
