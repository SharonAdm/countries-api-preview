import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useWindowSize } from "../../utils/UseWindowSize.utils";
import { commafy, getCurrency, getLanguages } from "../../utils/helpers.utils";

function Detail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { width } = useWindowSize();
  const isMobile = width <= 375;

  function getBorderCountryNames(borderCountriesList) {
    return borderCountriesList.map((countryName, index) => (
      <div className={"border-2 border-solid rounded-md mx-1 px-1 " + (isMobile ? "text-center m-2" : "")} key={index}>
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
        className=" dark:text-text-dark dark:bg-background-dark"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>

      <div className={"pt-20 mx-4 " + (isMobile ? "grid grid-cols-1 " : "grid grid-cols-2 gap-8")}>
        <div>
          <img src={state.flags.png} alt={state.flags.alt} />
        </div>
        <div>
          <h6 className={"font-bold text-4xl " + (isMobile ? "pt-10" : "")}>{state.name.common}</h6>
          <div className={"grid gap-4 pt-5 " + (isMobile ? "grid-cols-1" : "grid-cols-2")}>
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
          <div className={"pt-8 " + (isMobile ? "" : "flex")}>
            Border Countries:
            <div className={isMobile ? "grid grid-cols-3" : "flex"}>{state.borders ? getBorderCountryNames(state.borders) : "-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
