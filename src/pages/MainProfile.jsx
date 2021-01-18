import React, { Component } from "react";
/* import SocialFollow from "../components/SocialFollow"; */
import "../styles/profile.css";
import ProfileCard from "../pages/ProfileCard";

export class MainProfile extends Component {
  render() {
    return (
      <div className="main-profile">
        <div className="profile-card">
          {" "}
          <ProfileCard />
        </div>
        <div className="food-img">
          <div className="food-img">
            <h1>Alicia cooking</h1>
            <div>
              <span>FOOD</span>
              <img
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="image"
              />

              <p>Yummy meal milly </p>
            </div>
          </div>
          <div className="food-img">
            <span>RUNNING</span>
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="image"
            />
            <p>Alicia cooking </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainProfile;
