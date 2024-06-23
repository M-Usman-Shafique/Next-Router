'use client'
import React from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

function About() {
  const router = useRouter();
  const navigate = (page) => {
    router.push('/About/' + page)
  }
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-screen bg-red-400">
      <h1 className="text-7xl font-semibold">ABOUT</h1>
      {/* NESTED NAVIGATION ROUTES: */}
      <button onClick={() => navigate("Developer")} className="text-4xl font-semibold under-line">DEVELOPER</button>
      <button onClick={() => navigate("Company")} className="text-4xl font-semibold under-line">COMPANY</button>

      {/* NESTED LINKING ROUTES: */}
      {/* <Link href="/About/Developer" className="text-2xl font-medium">DEVELOPER</Link>
      <Link href="/About/Company" className="text-2xl font-medium">COMPANY</Link> */}
    </div>
  );
}

export default About;
