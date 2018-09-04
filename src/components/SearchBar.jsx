import React, { Component } from 'react'
import { 
    Menu,
    Search
} from 'semantic-ui-react'

export default class SearchBar extends Component {

  render() {

    return (
        <Menu pointing secondary stackable>
          <Menu.Item active>
              <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="icon" className="menubar__icon"/>
          </Menu.Item>
          <Menu.Item name='Chuck Norris' active onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
                <Search
                
                />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    )
  }
}