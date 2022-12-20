import React from "react";
import Content from "./Content";
import fetchUserDetails from "../utils/githubService";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: [] };
  }

  fetchUser = async () => {
    const id = window.location.href.split("/")[4];
    const userInfo = await fetchUserDetails([id]);
    this.setState({ userInfo });
  };

  async componentDidMount() {
    await this.fetchUser();
  }

  render() {
    const { userInfo } = this.state;

    return (
      <div className="users-wrapper">
        <Content data={userInfo} />
      </div>
    );
  }
}

export default UserDetails;
