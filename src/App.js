import React, { useState, useEffect } from "react";
import { FormControl, InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState("");

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  console.log(countries);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <header className="py-2 px-20 border-b-2 flex justify-between">
        <div className="text-xl font-bold p-3">Where in the world?</div>
        <button onClick={() => console.log("dark mode")}>
          <NightlightOutlinedIcon />
          Dark Mode
        </button>
      </header>

      <div className="flex justify-between">
        <div className="my-10 mx-20">
          <TextField
            fullWidth
            placeholder="search for a country..."
            id="country-input"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="my-10 mx-20">
          <FormControl fullWidth>
            <Select value={selectedRegion} onChange={handleChange} displayEmpty inputProps={{ "aria-label": "Without label" }}>
              <MenuItem disabled value="">
                <em>Filter by Region </em>
              </MenuItem>
              {regions.map((region) => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default App;
