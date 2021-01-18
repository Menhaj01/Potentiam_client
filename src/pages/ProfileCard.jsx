import React from "react";
import "../styles/profile.css";
import SocialFollow from "../components/SocialFollow";
import { withUser } from "../components/Auth/withUser";

const ProfileCard = (props) => {
  console.log(props);

  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
            alt="img"
          />
        </div>
        <div className="lower-container">
          <span> {props.context.user.following.length} following </span>
          <span> {props.context.user.following.length} followers</span>
        </div>
        <div>
          <SocialFollow />
        </div>
        <div>
          <h3>Have someone write your letters of recommendation.</h3>
          <p>
            Give them plenty of time to write the letters. You should be
            thinking well in advance aboutwhich teachers you want to write
            recommendations.Give them plenty of time to write the letters. You
            should be thinking well in advance aboutwhich teachers you want to
            write recommendations.Give them plenty of time to write the letters.
            You should be thinking well in advance aboutwhich teachers you want
            to write recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withUser(ProfileCard);
