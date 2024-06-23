"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div className="about-box">
      {pathName !== "/About" ? (
        <>
          <Link href="/About" className="text-2xl font-medium space-about">
            Back To About
          </Link>
        </>
      ) : null}
      {children}
    </div>
  );
}

export default Layout;
