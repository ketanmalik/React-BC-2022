import "../Styles/ErrorComponent.css";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const errorData = useRouteError();
  return (
    <div className="error-component-wrapper">
      <h1>Error Component</h1>
      <h4>Error: {errorData.data || errorData.message}</h4>;
    </div>
  );
};

export default ErrorComponent;
