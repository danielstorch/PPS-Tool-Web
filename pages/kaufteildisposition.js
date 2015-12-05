/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCurrentPage, closeOpenNavLeft } from '../components/Redux/Actions';

class KaufteildispositionPage extends Component {

componentDidMount(){
    	this.props.dispatch(setCurrentPage('Kaufteildisposition'));
  	}
  	
  render() {
    return (
      <div>
        <h1>Kaufteildisposition Page</h1>
        <p>Coming soon.</p>
      </div>
    );
  }

}

export default connect(null, dispatch => ({ dispatch }))(KaufteildispositionPage) 