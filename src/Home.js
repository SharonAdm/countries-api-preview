import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import App from "./App";
import Details from "./Detail";
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

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header className={"py-2 px-4 border-b-2 flex justify-between " + (isDarkMode ? "dark" : "light")}>
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
          <Route path="/" element={<App isDarkMode={isDarkMode} />} />
          <Route path="/details" element={<Details isDarkMode={isDarkMode} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default Home;
