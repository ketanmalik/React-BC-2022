import { Link } from "react-router-dom";
import "../Styles/Cards.css";

const Cards = (props) => {
  const { data } = props;
  return (
    <div className="cards-wrapper">
      <Link className="card-intro" to={`/user/${data.login}`}>
        <img src={data.avatar_url} className="cards-img" alt="Just testing." />
        <h3>Hi, I'm {data.name}</h3>
      </Link>
      <div className="card-content">
        <span>
          <b>Location: </b> {data.location}
        </span>
        <span>
          <b>Company: </b> {data.company}
        </span>
        <span>
          <b>Designation: </b> {data.bio}
        </span>
        <br />
      </div>
    </div>
  );
};

export default Cards;
