import React from "react";
/* import SocialFollow from "../components/SocialFollow"; */
import "../styles/profile.css";
import ProfileCard from "../pages/ProfileCard";

// export class MainProfile extends Component {
const MainProfile = (props) => {
  // console.log(props);
  // render() {
  return (
    <div className="main-profile">
      <div className="profile-card">
        <ProfileCard propsFromMainProfile={props} />
      </div>
      <div className="main-container">
        <div className="title">
          <h1>Alicia cooking</h1>
          <div className="food-img">
            <span>FOOD</span>
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
