import teamLogo from "../assets/team-logo.gif";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => (
  <div className="header-wrapper">
    <Link to="/">
      <img className="team-logo" src={teamLogo} alt="Team Logo" />
    </Link>
  </div>
);

export default Header;
