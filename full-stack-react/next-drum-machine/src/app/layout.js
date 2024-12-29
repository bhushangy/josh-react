import React from "react";

import Header from "../components/Header";

import "./styles.css";
import AudioProvider from "../components/AudioProvider/AudioProvider";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AudioProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </AudioProvider>
      </body>
    </html>
  );
}

export default RootLayout;
