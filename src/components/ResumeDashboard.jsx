import React from "react";
import { withUser } from "../components/Auth/withUser";

const ResumeDashboard = (props) => {
  const { context } = props;

  return (
    <div id="resumeContainer">
      <header>
        <img
          src="https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div className="textHeader">
          <p>Hi {context.user && context.user.pseudo}</p>
          <p>Welcome Back</p>
        </div>
      </header>
    </div>
  );
};

export default withUser(ResumeDashboard);
