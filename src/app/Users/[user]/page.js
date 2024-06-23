// Dynamic Route:
import React from "react";

function User({ params }) {
  return (
    <div className="flex flex-col gap-20 items-center justify-center h-screen bg-orange-400">
      <h3 className="text-4xl font-semibold">Welcome {params.user}!</h3>
    </div>
  );
}

export default User;
