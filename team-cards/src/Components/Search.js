import { useState } from "react";
import { stringLiterals } from "../utils/constants";
import "../Styles/Search.css";

const searchTeamMembers = (e, searchTerm, setFilteredData, data) => {
  e.preventDefault();
  const filteredData = data.filter((teamMember) =>
    teamMember.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  setFilteredData(filteredData);
};

const Search = ({ setFilteredData, data }) => {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <div className="search-wrapper">
      <form
        onSubmit={(e) =>
          searchTeamMembers(e, searchTerm, setFilteredData, data)
        }
      >
        <input
          className="search-box"
          type="text"
          placeholder="Search by name..."
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">{stringLiterals.SEARCH}</button>
      </form>
    </div>
  );
};

export default Search;
