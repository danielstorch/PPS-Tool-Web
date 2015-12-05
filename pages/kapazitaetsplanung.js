/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCurrentPage, closeOpenNavLeft } from '../components/Redux/Actions';
import SortableSimple from '../components/test/index';


class Kapazitaetsplanung extends Component {

componentDidMount(){
    	this.props.dispatch(setCurrentPage('Kapazitätsplanung'));
  	}
  	
  render() {
    return (
      <div>
        <SortableSimple/>
      </div>
    );
  }

}

export default connect(null, dispatch => ({ dispatch }))(Kapazitaetsplanung) 