import { Link } from "react-router-dom";
import { stringLiterals } from "../utils/constants.js";
import "../Styles/Cards.css";

const Cards = (props) => {
  const { data } = props;
  return (
    <div className="cards-wrapper">
      <Link className="card-intro" to={`/user/${data.login}`}>
        <img src={data.avatar_url} className="cards-img" alt="Just testing." />
        <h3>
          {stringLiterals.HI_I_AM} {data.name}
        </h3>
      </Link>
      <div className="card-content">
        <span>
          <b>{stringLiterals.LOCATION} </b> {data.location}
        </span>
        <span>
          <b>{stringLiterals.COMPANY} </b> {data.company}
        </span>
        <span>
          <b>{stringLiterals.DESIGNATION} </b> {data.bio}
        </span>
        <br />
      </div>
    </div>
  );
};

export default Cards;
