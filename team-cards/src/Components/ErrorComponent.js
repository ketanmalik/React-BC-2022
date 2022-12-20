import { useRouteError } from "react-router-dom";
import Header from "./Header";
import "../Styles/ErrorComponent.css";

const ErrorComponent = () => {
  const errorData = useRouteError();
  return (
    <>
      <Header />
      <div className="error-component-wrapper">
        <h2>We're sorry, what you're looking for doesn't exist!</h2>
        <h4>Error: {errorData.data || errorData.message}</h4>
      </div>
    </>
  );
};

export default ErrorComponent;
