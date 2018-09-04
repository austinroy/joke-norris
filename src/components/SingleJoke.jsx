import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import * as jokeActions from '../redux/actions/jokeActions';
import { bindActionCreators } from 'redux';
import { Loader } from 'semantic-ui-react';

class SingleJoke extends Component {
	state = {
		joke: {}
	}

  componentDidMount(){
    const category = this.props.match.params.category
    this.props.fetchJokes(category);
  }
	
	renderJoke = joke => {
    const category = this.props.match.params.category
    if (joke){
      return(
        <div key={joke.id}>
          <div>
            <h1>{category}</h1>
            <p>{joke.value}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Joke Not Loaded
        </div>
      )
		}
  }
  
  renderLoader = () => <Loader active={this.props.loading} inline />

	render(){
		const { joke, loading } = this.props;
		return(
			<div className="singlejoke">
        <SearchBar />
				{
          (loading ? this.renderLoader() : this.renderJoke(joke) )
        }
			</div>
		)
	}
}

SingleJoke.defaultProps ={
  loading : true,
}

const mapStateToProps = (state, ownProps) => {
  return {
    joke : state.joke.data,
    loading : state.joke.loading,
    error : state.joke.error,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(jokeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJoke);