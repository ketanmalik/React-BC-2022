import { useRouteError } from "react-router-dom";
import Header from "./Header";
import { stringLiterals } from "../utils/constants";
import "../Styles/ErrorComponent.css";

const ErrorComponent = () => {
  const errorData = useRouteError();
  return (
    <>
      <Header />
      <div className="error-component-wrapper">
        <h2>{stringLiterals.ERROR_PAGE_MSG_1}</h2>
        <h4>
          {stringLiterals.ERROR} {errorData.data || errorData.message}
        </h4>
      </div>
    </>
  );
};

export default ErrorComponent;
