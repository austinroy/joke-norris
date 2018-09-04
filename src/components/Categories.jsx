import React, { Component } from 'react';
import SearchBar from './SearchBar';
import {connect} from 'react-redux';
import * as categoryActions from '../redux/actions/categoryActions';
import { bindActionCreators } from 'redux';
import { Loader } from 'semantic-ui-react';

class Categories extends Component {
  componentDidMount(){
    this.props.fetchCategories();
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

  renderLoader = () => <Loader active={this.props.loading} inline />
  
  render () {
    const { categories, loading } = this.props;
    console.log(categories);
    return(
      <div>
        <SearchBar />
        <h3>Categories</h3>
        <div className="categories">
          { 
            (loading ? this.renderLoader() : this.mapCategories(categories) )
          }
        </div>
      </div>
    )
  }
}
Categories.defaultProps ={
  loading : true,
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories : state.categories.data,
    loading : state.categories.loading,
    error : state.categories.error,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(categoryActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
