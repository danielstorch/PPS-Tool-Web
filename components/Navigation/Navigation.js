// components/App.js
 
import React from 'react';
import mui from 'material-ui';
import './Navigation.scss';
import Link from '../Link';
 
 // dont need this anymore in react 1.0
 // but now we need it to register clicks like for the left navigation
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem;
 
export default class Navigation extends React.Component {
 
  constructor() {
    super();
 
    this._handleClick = this._handleClick.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this.state = { isDocked: false };
  }
 
  _handleClick(e) {
    e.preventDefault();
 
    this.refs.leftNav.toggle();
    this.setState({
      isDocked: !this.state.isDocked,
    });
  }
 
  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  render() {
    return (
      <div id="menu">
       <AppBar title='PPS-Tool' onLeftIconButtonTouchTap={this._handleClick} style={{"width":"100%" }}/>
          <LeftNav ref="leftNav" docked={this.state.isDocked} onChange={this._onLeftNavChange} style={{"top":"100% - <AppBar.height>" }}>
          
              <MenuItem index={0}>Menu</MenuItem>
              <MenuItem index={1}>
                <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
              </MenuItem>
              <MenuItem index={2}>
                <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
              </MenuItem>
              
          </LeftNav>
      </div>
    );
  }
 
}
 
Navigation.childContextTypes = {
  muiTheme: React.PropTypes.object
};
 
Navigation.contextTypes = {
  router: React.PropTypes.func
};