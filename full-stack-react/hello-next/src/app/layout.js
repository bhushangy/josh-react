// 'use client';
import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  // Print log on server and client
  // if (typeof window === "undefined") {
  //   console.log(`This is rendered on server`);
  // }
  // if (typeof window !== "undefined") {
  //   console.log(`This is rendered on client`);
  // }

  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {new Date().toLocaleString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
