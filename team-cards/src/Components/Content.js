import "../Styles/Content.css";
import { stringLiterals } from "../utils/constants";
import Cards from "../Components/Cards.js";

const Content = (props) => {
  return (
    <div className="content-wrapper">
      <span>{stringLiterals.KNOW_THE_TEAM}</span>
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
