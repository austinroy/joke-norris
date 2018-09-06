import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import logo from '../logo.png'

export class TitleBar extends Component {
  handleSearch = () =>{
    return console.log("Searching");
  }

  render() {

    return (
      <Header textAlign='center' size='large' dividing >
        <Image style={{ display: 'block' }} centered circular src={logo} /> 
        <Header.Content ><a href="/" className='app-title'>Joke Norris</a></Header.Content>
      </Header>
    )
  }
}

export default TitleBar;