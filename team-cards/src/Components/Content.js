import "../Styles/Content.css";
import Cards from "../Components/Cards.js";
import data from "../data/teamData.json";

const Content = () => (
  <div className="content-wrapper">
    <span>Know the Team</span>
    <hr />
    <div className="teamMembers-details">
      {data.map((teamMember, i) => (
        <Cards data={teamMember} key={i} />
      ))}
    </div>
  </div>
);

export default Content;
