import React from "react";
import { FaImage, FaChromecast } from "react-icons/fa";
import { AiFillSetting, AiFillDashboard } from "react-icons/ai";
import "../styles/Dashboard.css";

const Sidebar_Dashboad = () => {
  return (
    <div id="sidebar-container">
      <ul className="sidebar">
        <li className="active item">{<AiFillDashboard />}</li>
        <li className="item">{<FaImage />}</li>
        <li className="item">{<FaChromecast />}</li>
        <li className="setting item">{<AiFillSetting />}</li>
      </ul>
    </div>
  );
};

export default Sidebar_Dashboad;
