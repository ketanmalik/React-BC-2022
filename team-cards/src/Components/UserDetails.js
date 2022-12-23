import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Content from "./Content";
import fetchUserDetails from "../utils/githubService";

const UserDetails = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const fetchUser = async () => {
    const userData = await fetchUserDetails([id]);
    setUserInfo(userData);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="users-wrapper">
      <Content data={userInfo} />
    </div>
  );
};

export default UserDetails;
