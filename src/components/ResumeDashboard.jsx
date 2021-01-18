import React from "react";
import { withUser } from "../components/Auth/withUser";

const ResumeDashboard = (props) => {
  const { context } = props;

  return (
    <div id="resumeContainer">
      <header>
        <img src={context.user && context.user.image} alt="" />
        <div className="textHeader">
          <p>Hi {context.user && context.user.pseudo}</p>
          <p>Welcome Back</p>
        </div>
      </header>
    </div>
  );
};

export default withUser(ResumeDashboard);
