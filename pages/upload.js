/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import UploadXML from '../components/UploadXML'

import { connect } from 'react-redux';
import { setCurrentPage, closeOpenNavLeft } from '../components/Redux/Actions';

class Upload extends Component {

	componentDidMount(){
    	this.props.dispatch(setCurrentPage('Upload'));
    	this.props.toggleLeftNav();
  	}
  	
  render() {
    return (
      <div>
        <UploadXML/>
      </div>
    );
  }

}

// Wrap the component to inject dispatch and state into it
export default connect(null, dispatch => ({ dispatch }))(Upload) 