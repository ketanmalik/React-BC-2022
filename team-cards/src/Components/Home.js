import React from "react";
import Content from "./Content.js";
import Search from "./Search.js";
import NoResultsFound from "./NoResultsFound.js";
import fetchUserDetails from "../utils/githubService";
import "../Styles/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      filteredData: [],
    };
  }

  fetchData = async () => {
    const users = [
      "ketanmalik",
      "SumitARG",
      "aravindFrontEnd",
      "Ehraz98",
      "pandeymeenakshi",
    ];
    const userData = await fetchUserDetails(users);
    this.setState({ userData, filteredData: userData });
  };

  setFilteredData = (filteredData) => {
    this.setState({ filteredData });
  };

  async componentDidMount() {
    await this.fetchData();
  }

  render() {
    const { userData, filteredData } = this.state;
    return (
      <>
        <Search
          data={userData}
          setFilteredData={(filteredData) => this.setFilteredData(filteredData)}
        />
        {filteredData.length > 0 ? (
          <Content data={filteredData} />
        ) : (
          <NoResultsFound />
        )}
      </>
    );
  }
}

export default Home;
