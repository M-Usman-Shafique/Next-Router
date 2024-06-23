import Link from "next/link";
import React from "react";

function Users() {
  const users = ["Alsa", "Peter", "Olivia", "Gabriel", "Michael"]
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen bg-orange-400">
      <h1 className="text-7xl font-semibold">USERS</h1>
      <ul className="text-3xl ul-users">
        {users.map((user, i) => (
        <li key={i}>
        <Link href={`/Users/${user}`}>{user}</Link>
      </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
