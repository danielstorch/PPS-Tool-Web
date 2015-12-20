// components/App.js
 
import React, { PropTypes } from 'react';
import mui from 'material-ui';
import { connect } from 'react-redux';
import './Download.scss';
import Link from '../Link';
 
class Downlaod extends React.Component {

  constructor() {
    super();
 
  }

  render() {

    return (
      <div> </div>
       
    );
  }
 
}

function mapStateToProps(state) {
  return {
    internationalReducer: state.internationalReducer
  }
}

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Downlaod)