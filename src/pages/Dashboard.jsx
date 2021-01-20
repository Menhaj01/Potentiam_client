import React from "react";
import FormUser from "../components/Forms/FormUser";
import SocialFollow from "../components/SocialFollow";
import ResumeDashboard from "../components/ResumeDashboard";
import SettingDashboard from "../components/SettingDashboard";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Dashboard.css";
// import SidebarDashboad from "../components/Sidebar_Dashboad";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

// const DashboardResume = (props) => {

class DashboardResume extends React.Component {
  state = {
    myFollowing: [],
    topThreeUser: [],
    followingToSend: [],
  };

  componentDidMount() {
    this.props.context.user.following.map((follow) => {
      // console.log(follow);
      apiHandler.getOneUser(follow).then((apiResponse) => {
        this.setState({
          myFollowing: [...this.state.myFollowing, apiResponse],
        });
      });
    });
  }

  handleClick = (following) => {
    this.setState({
      myFollowing: [...this.state.followingToSend, following],
    });
  };

  render() {
    const currentUser = this.props.context.user;
    // console.log(this.state.myFollowing.length);
    console.log(this.state.followingToSend);
    return (
      <div id="general-container">
        <header className="sideBar">
          <ul className="sideBar-ul">
            <li>Profile</li>
          </ul>
        </header>

        <section className="dashboard-content">
          {/* **********SECTION 1************ */}
          <div className="dashboard-sect-one sect-commun">
            <ResumeDashboard />
          </div>

          {/* **********SECTION 2************ */}
          <div className="dashboard-sect-two sect-commun">
            <div className="popularUser-container">
              <div className="popularUser-filtered">
                <h2>Top posts</h2>
                <div className="top-popularUsers">
                  <img
                    src="https://images.pexels.com/photos/5639625/pexels-photo-5639625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div className="top-popularUsers">
                  <img
                    src="https://images.pexels.com/photos/5639625/pexels-photo-5639625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div className="top-popularUsers">
                  <img
                    src="https://images.pexels.com/photos/5639625/pexels-photo-5639625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
              </div>
              <div className="popularUser-socialLinks">
                <h2>Linked accounts</h2>
                <div className="social-links">
                  {/* ********SOCIAL LINKS*********** */}
                  {currentUser.links &&
                    currentUser.links.map((link, i) => {
                      return link.network === "Youtube" ? (
                        <a
                          key={link._id}
                          href={link.url}
                          className="youtube socials"
                        >
                          <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                      ) : link.network === "Twitter" ? (
                        <a
                          key={link._id}
                          href={link.url}
                          className="twitter socials"
                        >
                          <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                      ) : link.network === "Facebook" ? (
                        <a
                          key={link._id}
                          href={link.url}
                          className="facebook socials"
                        >
                          <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                      ) : link.network === "Instagram" ? (
                        <a
                          key={link._id}
                          href={link.url}
                          className="instagram socials"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                      ) : link.network === "Snapchat" ? (
                        <a
                          key={link._id}
                          href={link.url}
                          className="instagram socials"
                        >
                          <FontAwesomeIcon icon={faSnapchat} size="2x" />
                        </a>
                      ) : (
                        <p key={i + "link"}>No social network</p>
                      );
                    })}
                  {/* ********END OCIAL LINKS*********** */}
                </div>
              </div>
            </div>
          </div>

          {/* **********SECTION 3************ */}
          <div className="dashboard-sect-three sect-commun">
            <div className="sect-three-mainImg">
              <img
                src="https://images.pexels.com/photos/5639625/pexels-photo-5639625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="following-container">
              {this.state.myFollowing.length > 0 &&
                this.state.myFollowing.map((item) => {
                  return (
                    <div key={item._id} className="sect-three-myFollowing">
                      <div className="myFollowing-img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="myFollowing-info">
                        <h3>{item.pseudo}</h3>
                      </div>
                      <div>
                        <button
                          onClick={() => this.handleClick(item)}
                          className="myFollowing-addBtn"
                        >
                          Add
                        </button>
                        <button
                          onClick={this.handleClick}
                          className="myFollowing-rmvBtn"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>

      // <React.Fragment>
      //   <div id="sidebar-container">
      //     <ul className="sidebar">
      //       <li onClick={this.handleToggle} id="resume" className="active item">
      //         {/* {<AiFillDashboard />} */}
      //         Resume
      //       </li>
      //       <li onClick={this.handleToggle} id="picture" className=" item">
      //         {/* {<FaImage />} */}
      //         Picture
      //       </li>
      //       <li onClick={this.handleToggle} id="form" className="item">
      //         {/* {<FaChromecast />} */}
      //         Form
      //       </li>
      //       <li
      //         onClick={this.handleToggle}
      //         id="setting"
      //         className="setting item"
      //       >
      //         {/* {<AiFillSetting />} */}
      //         Setting
      //       </li>
      //     </ul>
      //   </div>

      //   {/* *********condition for resume page*********** */}
      //   {this.state.resumePage && (
      //     <div
      //       style={{
      //         display: "flex",
      //         flexDirection: "column",
      //         alignItems: "center",
      //       }}
      //     >
      //       <h1
      //         style={{
      //           marginBottom: 20,
      //         }}
      //       >
      //         Resumé PAGE
      //       </h1>
      //       <ResumeDashboard />
      //     </div>
      //   )}
      //   {/* *********condition for FormPAge********** */}
      //   {this.state.formPage && (
      //     <div
      //       style={{
      //         display: "flex",
      //         flexDirection: "column",
      //         alignItems: "center",
      //       }}
      //     >
      //       <h1
      //         style={{
      //           marginBottom: 20,
      //         }}
      //       >
      //         Form User
      //       </h1>
      //       <FormUser />
      //     </div>
      //   )}

      //   {/* *************condition for settingPage******************* */}
      //   {this.state.settingPage && (
      //     <div
      //       style={{
      //         display: "flex",
      //         flexDirection: "column",
      //         alignItems: "center",
      //       }}
      //     >
      //       <h1
      //         style={{
      //           marginBottom: 20,
      //         }}
      //       >
      //         Setting User
      //       </h1>
      //       <SettingDashboard />
      //     </div>
      //   )}

      //   {/* <SidebarDashboad /> */}
      // </React.Fragment>
    );
  }
}

export default withUser(DashboardResume);
