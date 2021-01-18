import React from "react";
import FormUser from "../components/Forms/FormUser";
import ResumeDashboard from "../components/ResumeDashboard";
import SettingDashboard from "../components/SettingDashboard";
// import { FaImage, FaChromecast } from "react-icons/fa";
// import { AiFillSetting, AiFillDashboard } from "react-icons/ai";
import "../styles/Dashboard.css";
// import SidebarDashboad from "../components/Sidebar_Dashboad";

class DashboardResume extends React.Component {
  state = {
    resumePage: true,
    formPage: false,
    settingPage: false,
  };

  handleToggle = (event) => {
    const activeResume = document.getElementById("resume");
    const activeForm = document.getElementById("form");
    const activeSetting = document.getElementById("setting");

    if (event.target.id === "resume") {
      // console.log(activeResume);
      activeResume.classList.add("active");
      activeForm.classList.remove("active");
      activeSetting.classList.remove("active");
      this.setState({
        resumePage: true,
        formPage: false,
        settingPage: false,
      });
    } else if (event.target.id === "form") {
      activeResume.classList.remove("active");
      activeForm.classList.add("active");
      activeSetting.classList.remove("active");
      this.setState({
        resumePage: false,
        formPage: true,
        settingPage: false,
      });
    } else if (event.target.id === "setting") {
      activeResume.classList.remove("active");
      activeForm.classList.remove("active");
      activeSetting.classList.add("active");
      this.setState({
        resumePage: false,
        formPage: false,
        settingPage: true,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-container">
          <ul className="sidebar">
            <li onClick={this.handleToggle} id="resume" className="active item">
              {/* {<AiFillDashboard />} */}
              Resume
            </li>
            <li onClick={this.handleToggle} id="picture" className=" item">
              {/* {<FaImage />} */}
              Picture
            </li>
            <li onClick={this.handleToggle} id="form" className="item">
              {/* {<FaChromecast />} */}
              Form
            </li>
            <li
              onClick={this.handleToggle}
              id="setting"
              className="setting item"
            >
              {/* {<AiFillSetting />} */}
              Setting
            </li>
          </ul>
        </div>

        {/* *********condition for resume page*********** */}
        {this.state.resumePage && (
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
              Resumé PAGE
            </h1>
            <ResumeDashboard />
          </div>
        )}
        {/* *********condition for FormPAge********** */}
        {this.state.formPage && (
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
              Form User
            </h1>
            <FormUser />
          </div>
        )}

        {/* *************condition for settingPage******************* */}
        {this.state.settingPage && (
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
              Setting User
            </h1>
            <SettingDashboard />
          </div>
        )}

        {/* <SidebarDashboad /> */}
      </React.Fragment>
    );
  }
}

export default DashboardResume;
