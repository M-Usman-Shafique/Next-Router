import React from "react";
import Link from "next/link";

// COMMON LAYOUT:
function LinkHeader({ brand }) {
  return (
    <div className="h-16 px-5 flex items-center justify-between text-xl font-semibold bg-slate-600 text-white">      
      <Link href="/" className="text-2xl">
        {brand}
      </Link>
      <div className="flex gap-10">
        <Link href="/Courses">Courses</Link>
        <Link href="/Products">Products</Link>
        {/* <Link href="/Login">Login</Link> */}
        <Link href="/blog/saas/kkk/123/aec/1313/nmi">Blog</Link>
        <Link href="/Users">Users</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default LinkHeader;
