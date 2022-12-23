import { stringLiterals } from "../utils/constants";
import "../Styles/NoResultsFound.css";

const NoResultsFound = () => {
  return (
    <div className="no-results-wrapper">{stringLiterals.NO_RESULTS_FOUND}</div>
  );
};

export default NoResultsFound;
