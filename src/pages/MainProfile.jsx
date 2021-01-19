import React from "react";
/* import SocialFollow from "../components/SocialFollow"; */
import "../styles/profile.css";
import ProfileCard from "../pages/ProfileCard";

<<<<<<< HEAD
// export class MainProfile extends Component {
const MainProfile = (props) => {
  // console.log(props);
  // render() {
  return (
    <div className="main-profile">
      <div className="profile-card">
        <ProfileCard propsFromMainProfile={props} />
      </div>
      <div className="food-img">
        <div className="food-img">
          <h1>Alicia cooking</h1>
          <div>
            <span>FOOD</span>
=======
export class MainProfile extends Component {
  render() {
    return (
      <div className="main-profile">
        <div className="profile-card">
          {" "}
          <ProfileCard />
        </div>
        <div className="main-container">
          <div className="title">
            <h1 className>Alicia cooking</h1>
            <div className="food-img">
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
>>>>>>> b44a6127141fca12813a72c1b043a0b0f6c55866
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt=""
            />

            <p>Yummy meal milly </p>
          </div>
        </div>
        <div className="food-img">
          <span>RUNNING</span>
          <img
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt=""
          />
          <p>Alicia cooking </p>
        </div>
      </div>
    </div>
  );
};
// }

export default MainProfile;
