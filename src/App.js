import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Home from "./pages/Home";
import Detail from "./pages/CountryDetail";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111517",
      darker: "#FFFFFF",
    },
    light: "#FAFAFA",
    dark: "#202C37",
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.toggle("dark"));
  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
    setIsDarkMode(isDark);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header className={"py-2 px-4 border-b-2 flex justify-between "}>
          <div className="text-xl font-bold p-3">Where in the world?</div>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <>
                <LightModeIcon />
                Light Mode
              </>
            ) : (
              <>
                <DarkModeIcon />
                Dark Mode
              </>
            )}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/details" element={<Detail isDarkMode={isDarkMode} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
