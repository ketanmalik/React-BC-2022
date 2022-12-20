import React from "react";
import "../Styles/Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  setSearchTerm = (searchTerm) => this.setState({ searchTerm });

  searchTeamMembers = (e) => {
    e.preventDefault();
    const { data } = this.props;
    const { searchTerm } = this.state;
    const filteredData = data.filter((teamMember) =>
      teamMember.name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
    this.props.setFilteredData(filteredData);
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="search-wrapper">
        <form onSubmit={(e) => this.searchTeamMembers(e)}>
          <input
            className="search-box"
            type="text"
            placeholder="Search by name..."
            defaultValue={searchTerm}
            onChange={(e) => this.setSearchTerm(e.target.value)}
          />
          <button className="search-button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
