// components/App.js
 
import React, { PropTypes } from 'react';
import mui from 'material-ui';
import './Navigation.scss';
import Link from '../Link';
import { connect } from 'react-redux';
import { saveUploadResultsXML, setActiveUploadResultsXMLData, setInputXML } from '../Redux/Actions';

 
 // dont need this anymore in react 1.0
 // but now we need it to register clicks like for the left navigation
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem
  , IconButton = mui.IconButton
  , MenuDivider = mui.MenuDivider
  , DropDownMenu = mui.DropDownMenu;
 
class Navigation extends React.Component {

  constructor() {
    super();
 
    this._handleClick = this._handleClick.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this.state = { 
                    isDocked: false
                  , iconClassName: "AppBar-icon-open" 
                  , currentPage: "Home"
                 };
  }

  componentDidMount(){

    if (window.localStorage) {
      //Check local storage for result xmls
      for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        var key = localStorage.key( i );
        if(key.charAt(0) === 'r'){
          var localData = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
          this.props.dispatch(saveUploadResultsXML(localData));
        }

        if(key.charAt(0) === 'i'){
            var localData = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
            this.props.dispatch(setInputXML(key, localData));
        }
      }
      
    }else{
      alert('LocalStorage is not supported in your browser');
    }
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
        iconClassName: "AppBar-icon-close",
      });
    }else{
      this.setState({
        iconClassName: "AppBar-icon-open",
      });
    }
  }
 
  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  _onDropDownPeriodChange(e) {

    for(let uploadResults of this.props.UploadXMLReducer) {
      if(uploadResults.id === e.target.value){
        this.props.dispatch(setActiveUploadResultsXMLData(uploadResults));
        break;
      }else if(e.target.value === 'result_P-1'){
        this.props.dispatch(setActiveUploadResultsXMLData({id:"result_P-1"}));
      }
    }

  }

  getStyles() {
    let styles = {
      title1: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        paddingTop: 0,
        letterSpacing: 0,
        fontWeight: 400,
        color: '#ffffff',
        lineHeight: '64px',
        fontSize: 24,
        display: 'inline-block',
        width: '50%'
      },

      title2: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        paddingTop: 0,
        letterSpacing: 0,
        fontWeight: 400,
        color: '#ffffff',
        lineHeight: '64px',
        fontSize: 24,
        display: 'inline-block'
      }
    };

    return styles;
  }

  render() {

    //Create DropDown menuitems
    let menuItems = [{payload: 'result_P-1', text: 'choose Result'}];
    for(let uploadResults of this.props.UploadXMLReducer) {
      menuItems.push({payload: uploadResults.id, text: uploadResults.id});
    }

    return (
        <div id="menu">
          <AppBar title={
                    <div>
                      <h1 style={this.getStyles().title1} >PPSTool</h1>
                      <h1  style={this.getStyles().title2}>{this.props.NavigationReducer.CurrentPage}</h1>
                    </div>
                  }
                  iconClassNameLeft={this.state.iconClassName} 
                  onLeftIconButtonTouchTap={this._handleClick} 
                  style={{"width":"100%" }}
                  iconStyleRight={{"marginTop": "0"}}
                  iconElementRight={
                    <div>
                      <DropDownMenu menuItems={menuItems} onChange={this._onDropDownPeriodChange.bind(this)} style={{"display": "inline-block", "marginRight": "1000"}} labelStyle={{"color": "#ffffff"}}> </DropDownMenu>
                    </div>}/>

          <LeftNav ref="leftNav" docked={this.state.isDocked} style={{"top":"100% - <AppBar.height>" }}>
              <MenuItem index={0} iconClassName="MenuItem-icon-home" iconStyle={{"marginRight":"0px", "top":"10px"}}>
                <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
              </MenuItem>
              <MenuItem index={1} iconClassName="MenuItem-icon-anleitung" iconStyle={{"marginRight":"0px", "top":"10px"}}>
                <a className="Navigation-link" href="/anleitung" onClick={Link.handleClick}>Tool Anleitung</a>
              </MenuItem>
              <MenuItem index={2} iconClassName="MenuItem-icon-tips" iconStyle={{"marginRight":"0px", "top":"10px"}}>
                <a className="Navigation-link" href="/tipps" onClick={Link.handleClick}>Tips und Tricks</a>
              </MenuItem>
              <MenuItem index={3} iconClassName="MenuItem-icon-metriken" iconStyle={{"marginRight":"0px", "top":"10px"}}>
                <a className="Navigation-link" href="/metriken" onClick={Link.handleClick}>Metriken</a>
              </MenuItem>
              <MenuItem index={4} className="Navigation-divider">
              </MenuItem>
              <MenuItem index={5} iconClassName="MenuItem-icon-auftragsplanung" iconStyle={{"marginRight":"0px", "top":"10px"}}>
                <a className="Navigation-title">Auftragsplanung</a>
              </MenuItem>
                  <MenuItem index={6} style={{"lineHeight":"30px" }}>
                    <a className="Navigation-sub-link" href="/auftragsplanung/gesamt" onClick={Link.handleClick} >Gesamt</a>
                  </MenuItem>
                  <MenuItem index={7} style={{"lineHeight":"30px" }}>
                    <a className="Navigation-sub-link" href="/auftragsplanung/damen" onClick={Link.handleClick}>Damen</a>
                  </MenuItem>
                  <MenuItem index={8} style={{"lineHeight":"30px"}}>
                    <a className="Navigation-sub-link" href="/auftragsplanung/herren" onClick={Link.handleClick}>Herren</a>
                  </MenuItem>
                  <MenuItem index={9} style={{"lineHeight":"30px"}}>
                    <a className="Navigation-sub-link" href="/auftragsplanung/kinder" onClick={Link.handleClick}>Kinder</a>
                  </MenuItem>
              <MenuItem index={10} iconClassName="MenuItem-icon-kaufteildisposition" iconStyle={{"marginRight":"0px", "top":"10px"}}>
                <a className="Navigation-link" href="/kaufteildisposition" onClick={Link.handleClick}>Kaufteildisposition</a>
              </MenuItem>
              <MenuItem index={11} iconClassName="MenuItem-icon-kapazitaetsplanung" iconStyle={{"marginRight":"0px", "top":"10px"}}>
                <a className="Navigation-link" href="/kapazitaetsplanung" onClick={Link.handleClick}>Kapazitätsplanung</a>
              </MenuItem>
              <MenuItem index={12} iconClassName="MenuItem-icon-upload" iconStyle={{"marginRight":"0px", "top":"10px"}}>
                <a className="Navigation-link" href="/upload" onClick={Link.handleClick}>Upload</a>
              </MenuItem>
              <MenuItem index={13} iconClassName="MenuItem-icon-download" iconStyle={{"marginRight":"0px", "top":"10px"}}>
                <a className="Navigation-link" href="/download" onClick={Link.handleClick}>Download</a>
              </MenuItem>
              <MenuItem index={14} iconClassName="MenuItem-icon-settings" iconStyle={{"marginRight":"0px", "top":"10px"}}>
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

Navigation.propTypes = {
  UploadXMLReducer: PropTypes.array.isRequired,
  NavigationReducer: PropTypes.object.isRequired,
  ActiveUploadXML: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    NavigationReducer: state.NavigationReducer,
    UploadXMLReducer: state.UploadXMLReducer,
    
    ActiveUploadXML: state.ActiveUploadXMLReducer
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   }
// }

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Navigation)