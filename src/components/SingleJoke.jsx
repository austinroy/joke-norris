import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as jokeActions from '../redux/actions/jokeActions';
import { bindActionCreators } from 'redux';
import { 
  Loader,
  Segment,
  Label,
  Button,
  Icon
} from 'semantic-ui-react';

export class SingleJoke extends Component {
	state = {
		joke: {}
	}

  componentDidMount(){
    const category = this.props.match.params.category
    this.props.fetchJokes(category);
  }

  refresh = () => {
    window.location.reload();
  }
	
	renderJoke = joke => {
    const category = this.props.match.params.category
    if (joke){
      return(
        <Segment raised key={joke.id}>
          <Label as='a' color='red' ribbon size='massive' style={{ textTransform : 'uppercase'}}>
            {category}
          </Label>
          <div >
            <div>
              <p className='joke'>{joke.value}</p>
            </div>
          </div>
          <Button primary icon labelPosition='right' href='/'>
            <Icon name='home' />
            Choose Category
          </Button>
          <Button positive color='teal' icon labelPosition='right'onClick={this.refresh}>
            Next
            <Icon name='right arrow' />
          </Button>
        </Segment>
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
			<div>
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