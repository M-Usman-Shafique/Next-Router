import { NextResponse } from 'next/server'

export default function Middleware(request) {
    // if (request.nextUrl.pathname !== "/Login") {
        return NextResponse.redirect(new URL("/Login", request.url))
    // }
}

export const config = {matcher:"/Courses/:path*"}