import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class Categories extends Component {
  state = {
      categories : []
  }
  componentDidMount = () => {
    axios.get('https://api.chucknorris.io/jokes/categories')
    .then(res =>{
        if(res.status === 200) {
            const categories = res.data;
            this.setState({categories : categories})
        }
      }
    )
  }

  renderCategory = (category, index) => {
    const categoryUrl = `/categories/${category}`
      return(
        <div className="category" key={index}>
          <a href={categoryUrl} className="category">
              {category}
          </a>
        </div>
    )
  }

  mapCategories = categories => {
    if (categories.length > 0) {
      return categories.map((category, index) => {
        return this.renderCategory(category, index)
      })
    } else {
      return (
        <div className="not-loaded">
          Categories Not Loaded
        </div>
      )
    }
  }
  
  render () {
    const {categories} = this.state;
    console.log(categories);
    return(
      <div>
        <SearchBar />
        <h3>Categories</h3>
        <div className="categories">
          { this.mapCategories(categories)}
        </div>
      </div>
    )
  }
}

export default Categories;