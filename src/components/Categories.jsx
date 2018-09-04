import React from 'react';
import {connect} from 'react-redux';
import * as categoryActions from '../redux/actions/categoryActions';
import { bindActionCreators } from 'redux';
import { 
  Card, 
  Loader,
  Header,
  Menu
} from 'semantic-ui-react';

class Categories extends React.Component{

  componentDidMount(){
    this.props.fetchCategories();
  }

  renderCard = (category, index) => {
    const categoryUrl = `/categories/${category}`
    return(
      <div className='categories__Card' key={index}>
        <Card href={categoryUrl} color='green' raised >
          <Card.Content>
            <Card.Header content={category} style={{ textTransform : 'capitalize' }}/>
          </Card.Content>
        </Card>
      </div>
    )
  }

  renderMenu = () => {
    return (
      <Menu></Menu>
    )
  }

  mapCategories = categories => {
    if (categories.length > 0){
      return categories.map((category, index) => {
        return this.renderCard(category, index);
      })
    } else {
      return (
        <div>
          Categories Not Loaded
        </div>
      )
    }
  }

  renderLoader = () => <Loader active={this.props.loading} inline />

  render(){
    const { categories, loading } = this.props;
    return(
      <div className='u-center-text'>
        <Header size='medium' color='grey' >Categories</Header>
        <p className="u-center-text">
          Chuck Norris demands you choose a category
        </p>
        <div className='categories'>
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
