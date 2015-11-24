var Reflux = require('reflux');
var PPSToolActions = require('../actions');
var React = require('react');

var PPSToolStore = Reflux.createStore({
  listenables: [PPSToolActions],

  data: {
    activePeriodState: 0,
    resultPeriodesData: [{}]
  },
  // called when the app component is loaded
  init() {
    console.log('PPSToolStore.init');
    this.getAllResultPeriodesFromLocalStorage();

  },

  getInitialState() {
    return {
      activePeriodState: this.data.activePeriodState,
      resultPeriodesData: this.data.resultPeriodesData
    };
  },

  getAllResultPeriodesFromLocalStorage(){

    if(window.localStorage) {
      for ( var i = 0, len = localStorage.length; i < len; ++i ) {

        console.log( localStorage.key( i ) );
      }
    } else {
      console.log( "NO LOCALSTORAGE" );
    }
  },

  addResultPeriod(resultPeriode){
    
    this.trigger(this.data);
  },

  deleteAllResultPeriodesFromData(){

  },

  deleteAllResultPeriodesFromLocalStorage(){

  }
});

module.exports = PPSToolStore;