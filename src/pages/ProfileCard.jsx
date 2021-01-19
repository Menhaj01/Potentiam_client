import React from "react";
import "../styles/profile.css";
import SocialFollow from "../components/SocialFollow";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
// import apiHandler from "../api/apiHandler";

// class ProfileCard extends React.Component {
class ProfileCard extends React.Component {
  state = {
    userToDisplay: [],
  };

  componentDidMount() {
    apiHandler
      .getOneUser(this.props.propsFromMainProfile.match.params.id)
      .then((data) => {
        this.setState({
          userToDisplay: data,
        });
      });
  }

  render() {
    // console.log(this.props.propsFromParent.match.params.id);
    // console.log(
    //   this.state.userToDisplay.following
    //     ? this.state.userToDisplay.following.length
    //     : 0
    // );
    return (
      <div className="Card">
        <div className="upper-container">
          <div className="image-follwers ">
            <div className="image-container">
              <img src={this.state.userToDisplay.image} alt="img" />
            </div>
            <div className="lower-container">
              <span>
                {" "}
                {this.state.userToDisplay.following
                  ? this.state.userToDisplay.following.length
                  : 0}{" "}
                following{" "}
              </span>
              <span>
                {" "}
                {this.state.userToDisplay.followers
                  ? this.state.userToDisplay.followers.length
                  : 0}{" "}
                followers
              </span>
            </div>
          </div>
          <div>
            <SocialFollow propsFromProfileCard={this.state.userToDisplay} />
          </div>
          <div>
            <h3>Description</h3>
            <p>{this.state.userToDisplay.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(ProfileCard);
