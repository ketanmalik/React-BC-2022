import { useState } from "react";
import useStateToFindCities from "../utils/stateCityHook";
import stateCities from "../assets/state-city.json";
import { stringLiterals } from "../utils/constants";
import "../Styles/Filters.css";

const Filters = () => {
  const [selectedState, setSelectedState] = useState(
    "Andaman and Nicobar Islands"
  );
  const [selectedCity, setSelectedCity] = useState("");
  const citiesList = useStateToFindCities(selectedState);
  return (
    <div className="filters-wrapper">
      <div className="state-city-wrapper">
        {stringLiterals.STATE} &emsp;
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {Object.keys(stateCities).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="state-city-wrapper">
        {stringLiterals.CITY} &emsp;
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {citiesList.map((city, i) => (
            <option key={city + i}>{city}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
