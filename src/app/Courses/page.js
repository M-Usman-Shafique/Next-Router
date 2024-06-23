import Link from "next/link";
import React from "react";

function Courses() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen bg-sky-300">
      <h1 className="text-7xl font-semibold">COURSES</h1>
      <Link href="/Courses/Angular" className="text-4xl font-semibold under-line">ANGULAR</Link>
      <Link href="/Courses/Python" className="text-4xl font-semibold under-line">PYTHON</Link>


    </div>
  );
}

export default Courses;
