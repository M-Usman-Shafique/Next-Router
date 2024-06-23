import React from "react";
import { useRouter } from "next/navigation";

// COMMON LAYOUT:
function NavHeader({ brand }) {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };
  return (
    <div className="h-16 px-5 flex items-center justify-between text-xl font-semibold bg-slate-600 text-white">

      <button onClick={() => navigate("/")} className="text-2xl">
        {brand}
      </button>
      <div className="flex gap-10">
      <button onClick={() => navigate("/sandbox")}>Sandbox</button>
        <button onClick={() => navigate("/Courses")}>Courses</button>
        <button onClick={() => navigate("/Products")}>Products</button>
        <button onClick={() => navigate("/blog/saas/kkk/123/aec/1313/nmi")}>Blog</button>
        {/* <button onClick={() => navigate("/Login")}>Login</button> */}
        <button onClick={() => navigate("/Users")}>Users</button>
        <button onClick={() => navigate("/About")}>About</button>
        <button onClick={() => navigate("/Contact")}>Contact</button>
      </div>
    </div>
  );
}

export default NavHeader;