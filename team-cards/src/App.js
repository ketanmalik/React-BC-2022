import Header from "./Components/Header.js";
import Content from "./Components/Content.js";
import Search from "./Components/Search.js";
import data from "./data/teamData.json";
import { useState } from "react";
import "./Styles/App.css";

const App = () => {
  const [filteredData, setFilteredData] = useState(data);
  return (
    <>
      <Header />
      <Search setFilteredData={setFilteredData} />
      <Content data={filteredData} />
    </>
  );
};

export default App;
