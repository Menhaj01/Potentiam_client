import { Search } from "grommet-icons";
import React from "react";
import "../styles/home.css";
import SearchBar from "../components/Search/SearchBar";
import axios from "axios";

class Home extends React.Component {

  state= {
    categories: [],
  }

handleSearchResult = (Categories) => {
this.setState({
  categories: Categories
})
}

componentDidMount(){
  axios.get(
    `http://localhost:4000/api/category/all`
  )
  .then((response) => {
    this.setState({
      categories: response.data
    })
  });
}

  render() {
    return (
      <div className="homepage">
        <div className="img--header-home">
          <h1>Get a new influence</h1>
            <SearchBar searchResult={this.handleSearchResult}/>
        </div>
        <div className="categories-home">
        {this.state.categories.map((category) => (
            <button>{category.name}</button>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
