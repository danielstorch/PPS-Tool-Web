var Reflux = require('reflux');
var PPSToolActions = require('../actions');

var PPSToolStore = Reflux.createStore({
  listenables: [PPSToolActions],

  data: {
    alertState: false
  },
  // called when the app component is loaded
  init() {
    console.log('PPSToolStore.init');
  },

  getInitialState() {
    return {
      alertState: this.data.alertState
    };
  }
});

module.exports = PPSToolStore;