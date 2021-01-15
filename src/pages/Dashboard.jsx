import React from "react";
import FormUser from "../components/Forms/FormUser";

const Dashboard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          marginBottom: 20,
        }}
      >
        Protected Dashboard
      </h1>
      <FormUser />
    </div>
  );
};

export default Dashboard;
