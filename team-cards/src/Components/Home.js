import Content from "./Content.js";
import Search from "./Search.js";
import Filters from "./Filters.js";
import NoResultsFound from "./NoResultsFound.js";
import { useState, useEffect } from "react";
import fetchUserDetails from "../utils/githubService";
import { users } from "../utils/constants";
import "../Styles/Home.css";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const userData = await fetchUserDetails(users);
    setUserData(userData);
    setFilteredData(userData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Search data={userData} setFilteredData={setFilteredData} />
      <Filters />
      {filteredData.length > 0 ? (
        <Content data={filteredData} />
      ) : (
        <NoResultsFound />
      )}
    </>
  );
};

export default Home;
