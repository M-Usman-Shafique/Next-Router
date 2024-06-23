import React from "react";

function Contact() {
  return (
    <div className="flex flex-col gap-7 items-center justify-center h-screen bg-lime-300">
      <h1 className="text-7xl font-semibold">CONTACT</h1>
      <h1 className="text-4xl font-semibold">(GROUP ROUTE)</h1>
      <p className="text-1xl font-medium bg-black text-white resize">Contact folder is wrapped inside a wrapper folder but still can be directly accessed using "/Contact" because the name of its wrapper folder is mentioned inside paranthesis, which helps hiding or skiping a folder from being explicitly mentioned.
      </p>
    </div>
  );
}

export default Contact;
