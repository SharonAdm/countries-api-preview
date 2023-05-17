import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import App from "./App";
import Details from "./Detail";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111517",
      darker: "#FFFFFF",
    },
  },
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header className="py-2 px-4 border-b-2 flex justify-between ">
          <div className="text-xl font-bold p-3">Where in the world?</div>
          <button onClick={() => console.log("darkmode")}>
            {true ? (
              <>
                <NightlightOutlinedIcon />
                Light Mode
              </>
            ) : (
              <>
                <NightlightOutlinedIcon />
                Dark Mode
              </>
            )}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default Home;
