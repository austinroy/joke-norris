import React, { Component } from 'react';
import axios from 'axios'

class SingleJoke extends Component {
	state = {
		joke: {}
	}

  componentDidMount = () => {
		const category = this.props.match.params.category;

    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res =>{
        if(res.status === 200) {
            const joke = res.data;
            this.setState({joke : joke})
        }
      }
    )
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

	render(){
		const { joke } = this.state;
		return(
			<div className="singlejoke">
				{this.renderJoke(joke)}
			</div>
		)
	}
}

export default SingleJoke;