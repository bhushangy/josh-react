"use client";
import React from "react";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";

export const ThemeContext = React.createContext(null);

function ThemeProvider({ initialTheme, children }) {
  const [theme, setTheme] = React.useState(initialTheme);

  const themeColors = theme === "light" ? LIGHT_COLORS : DARK_COLORS;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html lang="en" style={themeColors}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
