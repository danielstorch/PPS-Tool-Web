/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCurrentPage, closeOpenNavLeft } from '../components/Redux/Actions';

class AnleitungPage extends Component {

componentDidMount(){
    	this.props.dispatch(setCurrentPage('Anleitung'));
    	
  	}
  	
  render() {
    return (
      <div>
      </div>
    );
  }

}

export default connect(null, dispatch => ({ dispatch }))(AnleitungPage) 
