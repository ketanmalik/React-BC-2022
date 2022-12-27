import { useEffect, useState } from "react";
import stateCities from "../assets/state-city.json";

const useStateToFindCities = (state) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cities = stateCities[state];
      setCities(cities);
    };
    fetchData();
  }, [state]);

  return cities;
};

export default useStateToFindCities;
