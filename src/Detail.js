import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();

  function commafy(num) {
    let str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  function getCurrency(currencyObject) {
    let str = "";
    Object.keys(currencyObject).forEach((key) => {
      str += currencyObject[key].name + " ";
    });
    return str;
  }

  function getLanguages(languagesObject) {
    let str = "";
    Object.keys(languagesObject).forEach((key) => {
      str += languagesObject[key] + " ";
    });
    return str;
  }

  function getBorderCountryNames(borderCountriesList) {
    return borderCountriesList.map((countryName, index) => (
      <div className="border-2 border-solid rounded-md mx-1" key={index}>
        {countryName}
      </div>
    ));
  }

  return (
    <div className="mt-8 mx-4">
      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          navigate("/");
        }}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>

      <div className="grid grid-cols-2 gap-8 pt-20 mx-4">
        <div>
          <img src={state.flags.png} alt={state.flags.alt} />
        </div>
        <div>
          <h6 className="font-bold text-4xl">{state.name.common}</h6>
          <div className="grid grid-cols-2 gap-4 pt-5">
            <div>
              <div className="flex">
                <div className="font-bold">Official Name: </div>
                {state.name.official ? state.name.official : "-"}
              </div>
              <div className="flex">
                <div className="font-bold">Population: </div> {state.population ? commafy(state.population) : "-"}
              </div>
              <div className="flex">
                <div className="font-bold">Region: </div> {state.region ? state.region : "-"}
              </div>
              <div className="flex">
                <div className="font-bold">Sub Region: </div> {state.subregion ? state.subregion : "-"}
              </div>
              <div className="flex">
                <div className="font-bold">apital: </div> {state.capital ? state.capital : "-"}
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="font-bold">Top Level Domain: </div> {state.tld ? state.tld : "-"}
              </div>
              <div className="flex">
                <div className="font-bold">Currencies: </div> {state.currencies ? getCurrency(state.currencies) : "-"}
              </div>
              <div className="flex">
                <div className="font-bold">Languages: </div> {state.languages ? getLanguages(state.languages) : "-"}
              </div>
            </div>
          </div>
          <div className="pt-8 flex">Border Countries: {state.borders ? getBorderCountryNames(state.borders) : "-"}</div>
        </div>
      </div>
    </div>
  );
}

export default Details;
