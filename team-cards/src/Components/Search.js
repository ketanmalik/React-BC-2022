import { useState } from "react";
import data from "../data/teamData.json";
import "../Styles/Search.css";

const searchTeamMembers = (e, searchTerm, setFilteredData) => {
  e.preventDefault();
  const filteredData = data.filter((teamMember) =>
    teamMember.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  setFilteredData(filteredData);
};

const Search = ({ setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <div className="search-wrapper">
      <form onSubmit={(e) => searchTeamMembers(e, searchTerm, setFilteredData)}>
        <input
          className="search-box"
          type="text"
          placeholder="Search by name..."
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default Search;
