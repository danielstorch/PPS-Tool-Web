// components/App.js
 
import React, { PropTypes } from 'react';
import mui from 'material-ui';
import './Kapazitaetsplanung.scss';
import { connect } from 'react-redux';
import { } from '../Redux/Actions';

 
 class Kapazitaetsplanung extends React.Component {

  constructor() {
    super();
 
    
  }

  componentDidMount(){

    
  }


  render() {

    return (
        
    );
  }
 
}
 
Kapazitaetsplanung.childContextTypes = {
  muiTheme: React.PropTypes.object
};
 
Kapazitaetsplanung.contextTypes = {
  router: React.PropTypes.func
};


function mapStateToProps(state) {
  return {
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   }
// }

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Kapazitaetsplanung)