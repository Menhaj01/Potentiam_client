import React from "react";
import apiHandler from "../api/apiHandler";

class CategoryPage extends React.Component {
  state = {
    usersInCategory: [],
  };

  componentDidMount() {
    apiHandler.getUsersByCategory(this.props.match.params.id).then((data) => {
      this.setState({
        usersInCategory: data,
      });
      console.log(this.state.usersInCategory);
    });
  }

  render() {
    return (
      <div>
        {this.state.usersInCategory.map((each) => (
          <div>
            <img src={each.image} alt="" />
            <p>{each.pseudo}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryPage;
