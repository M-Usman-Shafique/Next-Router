"use client"
import "./globals.css";
import React, { useState } from "react";
import NavHeader from "./Component/NavHeader";

export default function RootLayout({ children }) {
  const [brand, setBrand] = useState("Devcloud");
  return (
    <html lang="en">
      <body>
        <NavHeader brand={brand}/>
        {children}
      </body>
    </html>
  );
}
