import Content from "./Content.js";
import Search from "./Search.js";
import NoResultsFound from "./NoResultsFound.js";
import { useState, useEffect } from "react";
import fetchUserDetails from "../utils/githubService";
import "../Styles/Home.css";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const users = [
      "ketanmalik",
      "SumitARG",
      "aravindFrontEnd",
      "Ehraz98",
      "pandeymeenakshi",
    ];

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
      {filteredData.length > 0 ? (
        <Content data={filteredData} />
      ) : (
        <NoResultsFound />
      )}
    </>
  );
};

export default Home;
