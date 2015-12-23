// components/App.js
 
import React, { PropTypes } from 'react';
import mui from 'material-ui';
import { connect } from 'react-redux';
import './Home.scss';
import Link from '../Link';

var RaisedButton = mui.RaisedButton,
    FontIcon = mui.FontIcon,
    FloatingActionButton = mui.FloatingActionButton;
 
class Home extends React.Component {

  constructor() {
    super();
 
  }

  render() {

    return (
        <div>
          <div className="wrappper">
            <h1 className="headder"> Welcome to the PSS-Tool from ZweiRad! </h1>

            <div className="shake-slow shake-constant shake-constant--hover startButtonWrapper">
                <a className="startButton" href="/auftragsplanung/gesamt" onClick={Link.handleClick}>Start here!</a>
            </div>
          </div>

        </div>
    );
  }
 
}

function mapStateToProps(state) {
  return {
    internationalReducer: state.internationalReducer
  }
}

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Home)