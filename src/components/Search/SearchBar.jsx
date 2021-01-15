import axios from "axios";
import React, { Component } from "react";

class SearchBar extends Component {

handleChange = (event) => {
    console.log(event.target.value);
    // this.setState({
    //     query: this.search.value
    // })
    axios.get(
        `http://localhost:4000/api/category/search?searchText=${event.target.value}`
      )
      .then((response) => {
        this.props.searchResult(response.data);
      });
}



  render() {
    return (
      <form>
        <input onChange={this.handleChange} type="search"></input>
      </form>
    );
  }
}

export default SearchBar;
