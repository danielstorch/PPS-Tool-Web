/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCurrentPage, closeOpenNavLeft } from '../components/Redux/Actions';

class Home extends Component {
	componentDidMount(){
    	this.props.dispatch(setCurrentPage('Home'));
  	}

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Coming soon.</p>
      </div>
    );
  }

}

// Wrap the component to inject dispatch and state into it
export default connect(null, dispatch => ({ dispatch }))(Home) 
