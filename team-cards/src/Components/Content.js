import "../Styles/Content.css";
import Cards from "../Components/Cards.js";

const Content = (props) => {
  return (
    <div className="content-wrapper">
      <span>Know the Team</span>
      <hr />
      <div className="teamMembers-details">
        {props.data.map((teamMember, i) => (
          <Cards data={teamMember} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Content;
