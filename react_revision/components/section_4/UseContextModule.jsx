import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function Header() {
  const theme = useContext(ThemeContext);

  console.log("Header Rendered");

  return <h2>Theme: {theme}</h2>;
}

export default function UseContextModule() {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={theme}>
      <Header />

      <button
        onClick={() =>
          setTheme(theme === "Light" ? "Dark" : "Light")
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}