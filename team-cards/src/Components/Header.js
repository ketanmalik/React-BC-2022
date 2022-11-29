import teamLogo from "../assets/team-logo.gif";
import "../Styles/Header.css";

const Header = () => (
  <div className="header-wrapper">
    <img src={teamLogo} alt="Team Logo" />
  </div>
);

export default Header;
