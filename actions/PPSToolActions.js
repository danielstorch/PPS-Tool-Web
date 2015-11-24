'use strict';

var Reflux = require("reflux");

var PPSToolActions = Reflux.createActions([
    // user actions
    'saveResultData',
    'deleteResultData',
    'deleteInputData',
    'saveInputData',
    'changeActivePeriod'
]);

module.exports = PPSToolActions;