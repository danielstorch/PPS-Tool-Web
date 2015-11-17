// components/App.js
 
import React from 'react';
import mui from 'material-ui';
import './Navigation.scss';
import Link from '../Link';
 
 // dont need this anymore in react 1.0
 // but now we need it to register clicks like for the left navigation
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem
  , IconButton = mui.IconButton
  , MenuDivider = mui.MenuDivider;
 
export default class Navigation extends React.Component {
 
  constructor() {
    super();
 
    this._handleClick = this._handleClick.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this.state = { 
                    isDocked: false
                  , iconClassName: "icon-open" 
                  , currentPage: "Home"
                 };
  }
 
  _handleClick(e) {
    e.preventDefault();
 
    //über this.state.isDocked ging es nicht, es hat beim start nicht reagiert
    var isDocked = !this.state.isDocked;

    this.refs.leftNav.toggle();
    this.setState({
      isDocked: !this.state.isDocked,
    });

    if(isDocked){
      this.setState({
        iconClassName: "icon-close",
      });
    }else{
      this.setState({
        iconClassName: "icon-open",
      });
    }
  }
 
  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  _onLeftNavClick(){
    this.setState({
        currentPage: "About",
    });
  }

  render() {
    return (
      <div id="menu">
        <AppBar title="PPS-Tool" iconClassNameLeft={this.state.iconClassName} onLeftIconButtonTouchTap={this._handleClick} style={{"width":"100%" }}
                iconElementRight={<h1 className="current-page">current-page</h1>}/>

        <LeftNav ref="leftNav" docked={this.state.isDocked} onChange={this._onLeftNavChange} style={{"top":"100% - <AppBar.height>" }}>
            <MenuItem index={0}>
              <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
            </MenuItem>
            <MenuItem index={1}>
              <a className="Navigation-link" href="/anleitung" onClick={Link.handleClick}>Tool Anleitung</a>
            </MenuItem>
            <MenuItem index={2}>
              <a className="Navigation-link" href="/tips" onClick={Link.handleClick}>Tips und Tricks</a>
            </MenuItem>
            <MenuItem index={3}>
              <a className="Navigation-link" href="/metriken" onClick={Link.handleClick}>Metriken</a>
            </MenuItem>
            <MenuItem index={4} className="Navigation-divider"></MenuItem>
            <MenuItem index={5}>
              <a className="Navigation-title">Dispositionsplanung</a>
            </MenuItem>
            <MenuItem index={6} style={{"lineHeight":"30px" }}>
              <a className="Navigation-sub-link" href="/dispositionsplanung/damen" onClick={Link.handleClick}>Damen</a>
            </MenuItem>
            <MenuItem index={7} style={{"lineHeight":"30px"}}>
              <a className="Navigation-sub-link" href="/dispositionsplanung/herren" onClick={Link.handleClick}>Herren</a>
            </MenuItem>
            <MenuItem index={8} style={{"lineHeight":"30px"}}>
              <a className="Navigation-sub-link" href="/dispositionsplanung/kinder" onClick={Link.handleClick}>Kinder</a>
            </MenuItem>
            <MenuItem index={9}>
              <a className="Navigation-link" href="/kaufteildisposition" onClick={Link.handleClick}>Kaufteildisposition</a>
            </MenuItem>
            <MenuItem index={10}>
              <a className="Navigation-link" href="/kapazitaetsplanung" onClick={Link.handleClick}>Kapazitätsplanung</a>
            </MenuItem>
            <MenuItem index={11}>
              <a className="Navigation-link" href="/upload" onClick={Link.handleClick}>Upload</a>
            </MenuItem>
            <MenuItem index={12}>
              <a className="Navigation-link" href="/download" onClick={Link.handleClick}>Download</a>
            </MenuItem>
            <MenuItem index={13}>
              <a className="Navigation-link" href="/settings" onClick={Link.handleClick}>Settings</a>
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