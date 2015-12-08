/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCurrentPage, closeOpenNavLeft } from '../components/Redux/Actions';
import Kapazitaetsplanung from '../components/Kapazitaetsplanung'

export default class extends Component {

  render() {
    return (
      <div>
        <Kapazitaetsplanung/>
      </div>
    );
  }

}

export default connect(null, dispatch => ({ dispatch }))(Kapazitaetsplanung)
