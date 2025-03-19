"use client";

import React from "react";
import Cookies from "js-cookie";
import clsx from "clsx";
import { Rss, Sun, Moon } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Header.module.css";

function Header({ theme, className, ...delegated }) {
  const [currentTheme, setNextTheme] = React.useState(theme);

  function handleThemeToggle() {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setNextTheme(nextTheme);

    const rootEle = document.documentElement;
    rootEle.classList.toggle("dark");
    rootEle.setAttribute("data-color-theme", nextTheme);

    Cookies.set("color-theme", nextTheme, {
      expires: 1000,
    });
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <button className={styles.action} onClick={handleThemeToggle}>
          {currentTheme === "light" && <Sun size="1.5rem" />}
          {currentTheme === "dark" && <Moon size="1.5rem" />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
