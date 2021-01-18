import React from "react";
import apiHandler from "../api/apiHandler";
import SearchBar from "../components/Search/SearchBar";

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
      <div className="homepage">
        <div className="img--header-home">
          <h1>Improve your</h1>
          <SearchBar searchResult={this.handleSearchResult} />
        </div>
        <div>
          {this.state.usersInCategory.map((each) => (
            <div key={each._id}>
              <img src={each.image} alt="" />
              <p>{each.pseudo}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryPage;
