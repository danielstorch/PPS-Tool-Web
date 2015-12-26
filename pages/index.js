/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCurrentPage, closeOpenNavLeft } from '../components/Redux/Actions';

import Home from '../components/Home'
import UploadXML from '../components/UploadXML'

class HomePage extends Component {
	componentDidMount(){
    	this.props.dispatch(setCurrentPage('Home'));
  	}

  render() {
    return (
      <div>
        <Home/>
        <UploadXML/>
      </div>
    );
  }

}

// Wrap the component to inject dispatch and state into it
export default connect(null, dispatch => ({ dispatch }))(HomePage) 
