import Header from "./Components/Header.js";
import Content from "./Components/Content.js";
import Search from "./Components/Search.js";
import NoResultsFound from "./Components/NoResultsFound.js";
import { useState, useEffect } from "react";
import "./Styles/App.css";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const userData = [];
    const users = [
      "ketanmalik",
      "SumitARG",
      "aravindFrontEnd",
      "Ehraz98",
      "pandeymeenakshi",
    ];
    for await (const user of users) {
      const data = await fetch(`https://api.github.com/users/${user}`);
      const json = await data.json();
      userData.push(json);
    }
    setUserData(userData);
    setFilteredData(userData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Search data={userData} setFilteredData={setFilteredData} />
      {filteredData.length > 0 ? (
        <Content data={filteredData} />
      ) : (
        <NoResultsFound />
      )}
    </>
  );
};

export default App;
