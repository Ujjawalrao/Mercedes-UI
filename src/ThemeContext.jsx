import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      applyTheme(savedTheme === "dark");
    } else {
      applyTheme(true);
    }
  }, []);

  const applyTheme = (dark) => {
    const html = document.documentElement;
    if (dark) {
      html.style.colorScheme = "dark";
      document.body.style.backgroundColor = "#1a1919";
      document.body.style.color = "#ffffff";
    } else {
      html.style.colorScheme = "light";
      document.body.style.backgroundColor = "#f9f9fc";
      document.body.style.color = "#1a1919";
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
