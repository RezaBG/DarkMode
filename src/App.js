import React from "react";

import useDarkMode from "./useDarkMode";

import "./App.css";

const App = () => {
  const [theme, toggelTheme] = useDarkMode();

  return (
    <div
      className="app"
      style={{
        background: theme === "dark" ? "#212121" : "#ffffff",
        transform: ".2s all",
      }}
    >
      <button type="button" onClick={toggelTheme}>
        Switch Theme
      </button>
    </div>
  );
};

export default App;
