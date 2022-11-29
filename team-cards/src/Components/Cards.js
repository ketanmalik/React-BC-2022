import "../Styles/Cards.css";
import userIcon from "../assets/user-not-found.jpeg";

const Cards = (props) => {
  const { data } = props;
  return (
    <div className="cards-wrapper">
      <div className="card-intro">
        <object data={data.photo} className="cards-img">
          <img src={userIcon} alt="Just testing." />
        </object>
        <h3>Hi, I'm {data.name}</h3>
      </div>
      <div className="card-content">
        <span>
          <b>Location: </b> {data.place}
        </span>
        <span>
          <b>Company: </b> {data.Company}
        </span>
        <span>
          <b>Designation: </b> {data.Designation}
        </span>
        <br />
      </div>
    </div>
  );
};

export default Cards;
