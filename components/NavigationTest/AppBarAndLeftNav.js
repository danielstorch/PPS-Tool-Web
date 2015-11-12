// components/App.js
 
import React from 'react';
import mui from 'material-ui';
 
 // dont need this anymore in react 1.0
 // but now we need it to register clicks like for the left navigation
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem;
 
// Define menu items for LeftNav
let menuItems = [
  { 
    route: '/', 
    text: 'Home' 
  },
  { 
    route: 'about', 
    text: 'About' 
  },
  { 
    type: MenuItem.Types.SUBHEADER, 
    text: 'Resources' 
  },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/callemall/material-ui',
     text: 'GitHub'
  }
];
 
export default class AppBarAndLeftNav extends React.Component {
 
  constructor() {
    super();
 
    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }
 
  _handleClick(e) {
    e.preventDefault();
 
    this.refs.leftNav.toggle();
  }
 
  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    
  }
 
  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  render() {
    return (
      <div id="menu">
        <header>
            <AppBar title='PPS-Tool' onLeftIconButtonTouchTap={this._handleClick} />
        </header>
        <LeftNav
          style={{"top":"100% - <AppBar.height>" }}
          ref="leftNav"
          docked={false}
          menuItems={menuItems}
          selectedIndex={this._getSelectedIndex()}
          onChange={this._onLeftNavChange} />
      </div>
    );
  }
 
}
 
AppBarAndLeftNav.childContextTypes = {
  muiTheme: React.PropTypes.object
};
 
AppBarAndLeftNav.contextTypes = {
  router: React.PropTypes.func
};