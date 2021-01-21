import React from "react";
import apiHandler from "../api/apiHandler";
import SearchBar from "../components/Search/SearchBar";
import "../styles/categoryPage.css";

class CategoryPage extends React.Component {
  state = {
    usersInCategory: [],
    sortUp: true,
  };

  componentDidMount() {
    apiHandler.getUsersByCategory(this.props.match.params.id, this.state.sortName).then((data) => {
      this.setState({
        usersInCategory: data,
      });
      // console.log(this.state.usersInCategory);
    });
  }


  handleSort = () => {
    this.setState({
      usersInCategory: [...this.state.usersInCategory].sort((a, b) => {
        if (this.state.sortUp){
          return  a.pseudo.localeCompare(b.pseudo);
        } else {
          return  b.pseudo.localeCompare(a.pseudo);
        }
      }
      ),
      sortUp: !this.state.sortUp
    });
  };


  handleClick = (id) => {
    this.props.history.push(`/mainProfile/${id}`);
  };

  render() {
  
    return (
      <div className="category-style">
        <div className="img--header-category">
          <h1>Improve your</h1>
          <SearchBar searchResult={this.handleSearchResult} />
        </div>

        <div className="btn-style">
          <button className="btn-filter">Filter by like ⇩</button>



          <button className="btn-filter" onClick={this.handleSort}>
            Recent Influencers 
            {this.state.sortUp 
            ?"⟱"
            : "⟰"
            }
          </button>
        </div>
        <div className="category-wrap">
          {this.state.usersInCategory.map((each) => (
            <div
              onClick={() => this.handleClick(each._id)}
              className="category-user"
              key={each._id}
            >
              <img className="category-user-img" src={each.image} alt="" />
              <p>{each.pseudo}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryPage;
