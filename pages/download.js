/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Home from '../components/Download'

import { connect } from 'react-redux';
import { setCurrentPage, closeOpenNavLeft } from '../components/Redux/Actions';

class DownloadPage extends Component {

componentDidMount(){
    	this.props.dispatch(setCurrentPage('Download'));
  	}
  	
  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }

}

export default connect(null, dispatch => ({ dispatch }))(DownloadPage) 