import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import MediaCard from "./Card";
import { useWindowSize } from "./UseWindowSize";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState("");

  const { width } = useWindowSize();
  const isMobile = width <= 375;

  const navigate = useNavigate();

  const regions = [
    { name: "Africa", value: "africa" },
    { name: "America", value: "america" },
    { name: "Asia", value: "asia" },
    { name: "Europe", value: "europe" },
    { name: "Oceania", value: "oceania" },
  ];

  const getRegionCountriesList = (region) => {
    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getCountry = (name) => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getAllCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
    event.target.value === "All" ? getAllCountries() : getRegionCountriesList(event.target.value);
  };

  const handleInputChange = (event) => {
    event.target.value ? getCountry(event.target.value) : getAllCountries();
  };

  const showDetails = (country) => {
    navigate("/details", { state: country });
  };
  return (
    <div>
      <div className={isMobile ? " " : "flex justify-between"}>
        <div className="my-10 mx-4 " onChange={handleInputChange}>
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
        <div className="my-10 mx-4">
          <FormControl fullWidth>
            <Select value={selectedRegion} onChange={handleChange} displayEmpty inputProps={{ "aria-label": "Without label" }}>
              <MenuItem disabled value="">
                <em>Filter by Region </em>
              </MenuItem>
              <MenuItem value="All">
                <em>All</em>
              </MenuItem>
              {regions.map((region) => (
                <MenuItem key={region.value} value={region.value}>
                  {region.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={isMobile ? "grid gap-8 grid-cols-1" : "grid gap-8 grid-cols-4 ml-4 mr-0"}>
        {countries &&
          countries.map((country, index) => {
            return (
              <div className={isMobile ? "justify-self-center min-w-[75%]" : ""} key={index}>
                <MediaCard data={country} showDetails={() => showDetails(country)} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
