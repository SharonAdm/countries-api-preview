import React from "react";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

function App() {
  return (
    <div>
      <header className="py-2 px-20 border-b-2 flex justify-between">
        <div className="text-xl font-bold p-3">Where in the world?</div>
        <button onClick={() => console.log("dark mode")}>
          <NightlightOutlinedIcon />
          Dark Mode
        </button>
      </header>
    </div>
  );
}

export default App;
