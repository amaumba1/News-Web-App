import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import Header from './Header';
//import DataList from './DataList'; 

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Header /> 
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input 
                icon='search' 
                placeholder='Search...' 
                value={this.state.searchTerm}
                onChange={this.onSearchChange}
                onSubmit={this.onSearchSubmit}
                />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
