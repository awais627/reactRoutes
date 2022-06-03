import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div>
      ErrorPage
      <button onClick={navigate("/aside")}>Back to Home Page</button>
    </div>
  );
};

export default ErrorPage;
