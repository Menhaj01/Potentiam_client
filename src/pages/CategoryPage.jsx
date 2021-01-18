import React from "react";

class CategoryPage extends React.Component {
  state = {
    usersInCategory: [],
  };

  componentDidMount() {}

  render() {
    console.log(this.props.match.id);
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}

export default CategoryPage;
