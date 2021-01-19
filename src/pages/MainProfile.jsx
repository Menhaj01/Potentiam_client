import React from "react";
/* import SocialFollow from "../components/SocialFollow"; */
import "../styles/profile.css";
import ProfileCard from "../pages/ProfileCard";
import apiHandler from "../api/apiHandler";

// export class MainProfile extends Component {
class MainProfile extends React.Component {
  state = {
    userToDisplay: null,
  };

  componentDidMount() {
    apiHandler.getOneUser(this.props.match.params.id).then((data) => {
      this.setState({
        userToDisplay: data,
      });
    });
  }

  render() {
    if (!this.state.userToDisplay) {
      return <p>Page is loading ...</p>;
    }
    // console.log(this.state.userToDisplay);
    return (
      <div className="main-profile">
        <div className="profile-card">
          <ProfileCard propsFromMainProfile={this.state.userToDisplay} />
        </div>
        <div className="main-container">
          <div className="title">
            <h1>{this.state.userToDisplay.pseudo}</h1>
            <span>FOOD</span>
            <div className="food-img">
              <img
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""
              />

              <p>Yummy meal milly </p>
            </div>

            <span>RUNNING</span>
            <div className="food-img">
              <img
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""
              />
              <p>Alicia cooking </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainProfile;
