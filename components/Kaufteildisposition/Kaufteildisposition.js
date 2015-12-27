import React from 'react';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import './Kaufteildisposition.scss';
import mui from 'material-ui';
import _ from 'lodash'
import Link from '../Link';
import { connect } from 'react-redux';
import { setKaufteildispositionInputXML, resetKaufteildispositionInputXML } from '../Redux/Actions';

var TableBody = mui.TableBody
  , TableHeader = mui.TableHeader
  , TableRow = mui.TableRow
  , Table = mui.Table
  , TableHeaderColumn = mui.TableHeaderColumn
  , TableRowColumn = mui.TableRowColumn
  , Dialog = mui.Dialog
  , Snackbar = mui.Snackbar
  , TextField = mui.TextField
  , RaisedButton = mui.RaisedButton
  , DropDownMenu = mui.DropDownMenu
  , MenuItem = mui.MenuItem
  , Toggle = mui.Toggle;





class Kaufteildisposition extends React.Component {

  constructor() {
    super();
    this._getAnfangsbestand = this._getAnfangsbestand.bind(this);
    this._handleBestellungMengeChange = this._handleBestellungMengeChange.bind(this);
    this._handleBestellungArtChange = this._handleBestellungArtChange.bind(this);
    this._handleDetailModeChange = this._handleDetailModeChange.bind(this);
    this._handleDropDownChange = this._handleDropDownChange.bind(this);
    this._handleSaveButtonClick = this._handleSaveButtonClick.bind(this);
    this._handleProgrammPlanChange = this._handleProgrammPlanChange.bind(this);
    this._handleResetButtonClick = this._handleResetButtonClick.bind(this);
    this._handleRequestClose = this._handleRequestClose.bind(this);
    this._updateLocalStorage = this._updateLocalStorage.bind(this);

    this.state = {
      currentPeriode:"",
      modal: true,
      openDialogStandardActions: false,
      dialogTitle: "Dialog",
      dialogText: "DialogText",
      snackBarautoHideDuration: 3000,
      snackBarmessage: 'Save completed!',

      resetButtonDisabled: true,
      displayRowCheckbox: false,
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,
      height: '650px',
      heightt: '50px',
      buttonDisabled: false,

      currentPeriode: "",
      dropDownValue: 0,
      detailMode: false,

      Perioden:{
        periode1:0,
        periode2:0,
        periode3:0,
        periode4:0
      },

      Produktionsplan1:{
        P1:0,
        P2:0,
        P3:0
      },
      Produktionsplan2:{
        P1:0,
        P2:0,
        P3:0
      },
      Produktionsplan3:{
        P1:0,
        P2:0,
        P3:0
      },
      Produktionsplan4:{
        P1:0,
        P2:0,
        P3:0
      },

      Lieferzeit:{
        E21: 1.8,
        E22: 1.7,
        E23: 1.2,
        E24: 3.2,
        E25: 0.9,
        E27: 0.9,
        E28: 1.7,
        E32: 2.1,
        E33: 1.9,
        E34: 1.6,
        E35: 2.2,
        E36: 1.2,
        E37: 1.5,
        E38: 1.7,
        E39: 1.5,
        E40: 1.7,
        E41: 0.9,
        E42: 1.2,
        E43: 2,
        E44: 1,
        E45: 1.7,
        E46: 0.9,
        E47: 1.1,
        E48: 1,
        E52: 1.6,
        E53: 1.6,
        E57: 1.7,
        E58: 1.6,
        E59: 1.7,
      },

      Abweichung:{
        E21: 0.4,
        E22: 0.4,
        E23: 0.2,
        E24: 0.3,
        E25: 0.2,
        E27: 0.2,
        E28: 0.4,
        E32: 0.5,
        E33: 0.5,
        E34: 0.3,
        E35: 0.4,
        E36: 0.1,
        E37: 0.3,
        E38: 0.4,
        E39: 0.3,
        E40: 0.2,
        E41: 0.2,
        E42: 0.3,
        E43: 0.5,
        E44: 0.2,
        E45: 0.3,
        E46: 0.3,
        E47: 0.1,
        E48: 0.2,
        E52: 0.4,
        E53: 0.2,
        E57: 0.3,
        E58: 0.5,
        E59: 0.2,
      },

      BenoetigtFuerP1:{
        E21: 1,
        E22: 0,
        E23: 0,
        E24: 7,
        E25: 4,
        E27: 2,
        E28: 4,
        E32: 3,
        E33: 0,
        E34: 0,
        E35: 4,
        E36: 1,
        E37: 1,
        E38: 1,
        E39: 2,
        E40: 1,
        E41: 1,
        E42: 2,
        E43: 1,
        E44: 3,
        E45: 1,
        E46: 1,
        E47: 1,
        E48: 2,
        E52: 2,
        E53: 72,
        E57: 0,
        E58: 0,
        E59: 2,
      },

      BenoetigtFuerP2:{
        E21: 0,
        E22: 1,
        E23: 0,
        E24: 7,
        E25: 4,
        E27: 2,
        E28: 5,
        E32: 3,
        E33: 0,
        E34: 0,
        E35: 4,
        E36: 1,
        E37: 1,
        E38: 1,
        E39: 2,
        E40: 1,
        E41: 1,
        E42: 2,
        E43: 1,
        E44: 3,
        E45: 1,
        E46: 1,
        E47: 1,
        E48: 2,
        E52: 0,
        E53: 0,
        E57: 2,
        E58: 72,
        E59: 2,
      },

      BenoetigtFuerP3:{
        E21: 0,
        E22: 0,
        E23: 1,
        E24: 7,
        E25: 4,
        E27: 2,
        E28: 6,
        E32: 3,
        E33: 2,
        E34: 72,
        E35: 4,
        E36: 1,
        E37: 1,
        E38: 1,
        E39: 2,
        E40: 1,
        E41: 1,
        E42: 2,
        E43: 1,
        E44: 3,
        E45: 1,
        E46: 1,
        E47: 1,
        E48: 2,
        E52: 0,
        E53: 0,
        E57: 0,
        E58: 0,
        E59: 2,
      },

      Diskontmenge:{
        E21: 300,
        E22: 300,
        E23: 300,
        E24: 6100,
        E25: 3600,
        E27: 1800,
        E28: 4500,
        E32: 2700,
        E33: 900,
        E34: 22000,
        E35: 3600,
        E36: 900,
        E37: 900,
        E38: 300,
        E39: 1800,
        E40: 900,
        E41: 900,
        E42: 1800,
        E43: 2700,
        E44: 900,
        E45: 900,
        E46: 900,
        E47: 900,
        E48: 1800,
        E52: 600,
        E53: 22000,
        E57: 600,
        E58: 22000,
        E59: 1800,
      },

      Anfangsbestand:{
        E21: 0,
        E22: 0,
        E23: 0,
        E24: 0,
        E25: 0,
        E27: 0,
        E28: 0,
        E32: 0,
        E33: 0,
        E34: 0,
        E35: 0,
        E36: 0,
        E37: 0,
        E38: 0,
        E39: 0,
        E40: 0,
        E41: 0,
        E42: 0,
        E43: 0,
        E44: 0,
        E45: 0,
        E46: 0,
        E47: 0,
        E48: 0,
        E52: 0,
        E53: 0,
        E57: 0,
        E58: 0,
        E59: 0,
      },

      Bedarf1:{
        E21: 0,
        E22: 0,
        E23: 0,
        E24: 0,
        E25: 0,
        E27: 0,
        E28: 0,
        E32: 0,
        E33: 0,
        E34: 0,
        E35: 0,
        E36: 0,
        E37: 0,
        E38: 0,
        E39: 0,
        E40: 0,
        E41: 0,
        E42: 0,
        E43: 0,
        E44: 0,
        E45: 0,
        E46: 0,
        E47: 0,
        E48: 0,
        E52: 0,
        E53: 0,
        E57: 0,
        E58: 0,
        E59: 0,
      },

      Bedarf2:{
        E21: 0,
        E22: 0,
        E23: 0,
        E24: 0,
        E25: 0,
        E27: 0,
        E28: 0,
        E32: 0,
        E33: 0,
        E34: 0,
        E35: 0,
        E36: 0,
        E37: 0,
        E38: 0,
        E39: 0,
        E40: 0,
        E41: 0,
        E42: 0,
        E43: 0,
        E44: 0,
        E45: 0,
        E46: 0,
        E47: 0,
        E48: 0,
        E52: 0,
        E53: 0,
        E57: 0,
        E58: 0,
        E59: 0,
      },

      Bedarf3:{
        E21: 0,
        E22: 0,
        E23: 0,
        E24: 0,
        E25: 0,
        E27: 0,
        E28: 0,
        E32: 0,
        E33: 0,
        E34: 0,
        E35: 0,
        E36: 0,
        E37: 0,
        E38: 0,
        E39: 0,
        E40: 0,
        E41: 0,
        E42: 0,
        E43: 0,
        E44: 0,
        E45: 0,
        E46: 0,
        E47: 0,
        E48: 0,
        E52: 0,
        E53: 0,
        E57: 0,
        E58: 0,
        E59: 0,
      },

      Bedarf4:{
        E21: 0,
        E22: 0,
        E23: 0,
        E24: 0,
        E25: 0,
        E27: 0,
        E28: 0,
        E32: 0,
        E33: 0,
        E34: 0,
        E35: 0,
        E36: 0,
        E37: 0,
        E38: 0,
        E39: 0,
        E40: 0,
        E41: 0,
        E42: 0,
        E43: 0,
        E44: 0,
        E45: 0,
        E46: 0,
        E47: 0,
        E48: 0,
        E52: 0,
        E53: 0,
        E57: 0,
        E58: 0,
        E59: 0,
      },

      BestellungMenge:{
        E21: 0,
        E22: 0,
        E23: 0,
        E24: 0,
        E25: 0,
        E27: 0,
        E28: 0,
        E32: 0,
        E33: 0,
        E34: 0,
        E35: 0,
        E36: 0,
        E37: 0,
        E38: 0,
        E39: 0,
        E40: 0,
        E41: 0,
        E42: 0,
        E43: 0,
        E44: 0,
        E45: 0,
        E46: 0,
        E47: 0,
        E48: 0,
        E52: 0,
        E53: 0,
        E57: 0,
        E58: 0,
        E59: 0,
      },

      BestellungArt:{
        E21: false,
        E22: false,
        E23: false,
        E24: false,
        E25: false,
        E27: false,
        E28: false,
        E32: false,
        E33: false,
        E34: false,
        E35: false,
        E36: false,
        E37: false,
        E38: false,
        E39: false,
        E40: false,
        E41: false,
        E42: false,
        E43: false,
        E44: false,
        E45: false,
        E46: false,
        E47: false,
        E48: false,
        E52: false,
        E53: false,
        E57: false,
        E58: false,
        E59: false,
      },

      errorTextBestellungMenge:{
        E21: '',
        E22: '',
        E23: '',
        E24: '',
        E25: '',
        E27: '',
        E28: '',
        E32: '',
        E33: '',
        E34: '',
        E35: '',
        E36: '',
        E37: '',
        E38: '',
        E39: '',
        E40: '',
        E41: '',
        E42: '',
        E43: '',
        E44: '',
        E45: '',
        E46: '',
        E47: '',
        E48: '',
        E52: '',
        E53: '',
        E57: '',
        E58: '',
        E59: '',
      }
    };

  }

   componentWillMount(){
    this._updateVariables(true)
  }

  componentDidUpdate(){

    this._updateVariables(false);

  }

  _updateVariables(initial){

    var activePeriodID = this.props.ActiveUploadXML.activeUploadXMLData.id.substring(7);
    var currentInputXML = this.props.InputXMLs.find(xml => xml.id.substring(6) === activePeriodID);

    if(initial == true || this.state.currentPeriode != activePeriodID){

      if(currentInputXML){

        if( currentInputXML && currentInputXML.inputDataObject.kaufteildisposition ){

          this.state.dropDownValue = currentInputXML.inputDataObject.kaufteildisposition.DropDownValue

          this.state.BestellungArt.E21 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E21
          this.state.BestellungArt.E22 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E22
          this.state.BestellungArt.E23 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E23
          this.state.BestellungArt.E24 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E24
          this.state.BestellungArt.E25 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E25
          this.state.BestellungArt.E27 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E27
          this.state.BestellungArt.E28 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E28
          this.state.BestellungArt.E32 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E32
          this.state.BestellungArt.E33 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E33
          this.state.BestellungArt.E34 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E34
          this.state.BestellungArt.E35 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E35
          this.state.BestellungArt.E36 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E36
          this.state.BestellungArt.E37 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E37
          this.state.BestellungArt.E38 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E38
          this.state.BestellungArt.E39 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E39
          this.state.BestellungArt.E40 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E40
          this.state.BestellungArt.E41 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E41
          this.state.BestellungArt.E42 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E42
          this.state.BestellungArt.E43 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E43
          this.state.BestellungArt.E44 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E44
          this.state.BestellungArt.E45 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E45
          this.state.BestellungArt.E46 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E46
          this.state.BestellungArt.E47 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E47
          this.state.BestellungArt.E48 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E48
          this.state.BestellungArt.E52 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E52
          this.state.BestellungArt.E53 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E53
          this.state.BestellungArt.E57 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E57
          this.state.BestellungArt.E58 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E58
          this.state.BestellungArt.E59 = currentInputXML.inputDataObject.kaufteildisposition.BestellungArt.E59

          this.state.BestellungMenge.E21 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E21
          this.state.BestellungMenge.E22 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E22
          this.state.BestellungMenge.E23 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E23
          this.state.BestellungMenge.E24 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E24
          this.state.BestellungMenge.E25 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E25
          this.state.BestellungMenge.E27 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E27
          this.state.BestellungMenge.E28 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E28
          this.state.BestellungMenge.E32 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E32
          this.state.BestellungMenge.E33 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E33
          this.state.BestellungMenge.E34 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E34
          this.state.BestellungMenge.E35 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E35
          this.state.BestellungMenge.E36 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E36
          this.state.BestellungMenge.E37 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E37
          this.state.BestellungMenge.E38 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E38
          this.state.BestellungMenge.E39 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E39
          this.state.BestellungMenge.E40 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E40
          this.state.BestellungMenge.E41 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E41
          this.state.BestellungMenge.E42 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E42
          this.state.BestellungMenge.E43 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E43
          this.state.BestellungMenge.E44 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E44
          this.state.BestellungMenge.E45 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E45
          this.state.BestellungMenge.E46 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E46
          this.state.BestellungMenge.E47 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E47
          this.state.BestellungMenge.E48 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E48
          this.state.BestellungMenge.E52 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E52
          this.state.BestellungMenge.E53 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E53
          this.state.BestellungMenge.E57 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E57
          this.state.BestellungMenge.E58 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E58
          this.state.BestellungMenge.E59 = currentInputXML.inputDataObject.kaufteildisposition.BestellungMenge.E59

          this.state.resetButtonDisabled = false

        } else{

          this.state.dropDownValue = 0

          this.state.BestellungArt.E21 = false
          this.state.BestellungArt.E22 = false
          this.state.BestellungArt.E23 = false
          this.state.BestellungArt.E24 = false
          this.state.BestellungArt.E25 = false
          this.state.BestellungArt.E27 = false
          this.state.BestellungArt.E28 = false
          this.state.BestellungArt.E32 = false
          this.state.BestellungArt.E33 = false
          this.state.BestellungArt.E34 = false
          this.state.BestellungArt.E35 = false
          this.state.BestellungArt.E36 = false
          this.state.BestellungArt.E37 = false
          this.state.BestellungArt.E38 = false
          this.state.BestellungArt.E39 = false
          this.state.BestellungArt.E40 = false
          this.state.BestellungArt.E41 = false
          this.state.BestellungArt.E42 = false
          this.state.BestellungArt.E43 = false
          this.state.BestellungArt.E44 = false
          this.state.BestellungArt.E45 = false
          this.state.BestellungArt.E46 = false
          this.state.BestellungArt.E47 = false
          this.state.BestellungArt.E48 = false
          this.state.BestellungArt.E52 = false
          this.state.BestellungArt.E53 = false
          this.state.BestellungArt.E57 = false
          this.state.BestellungArt.E58 = false
          this.state.BestellungArt.E59 = false

          this.state.BestellungMenge.E21 = 0
          this.state.BestellungMenge.E22 = 0
          this.state.BestellungMenge.E23 = 0
          this.state.BestellungMenge.E24 = 0
          this.state.BestellungMenge.E25 = 0
          this.state.BestellungMenge.E27 = 0
          this.state.BestellungMenge.E28 = 0
          this.state.BestellungMenge.E32 = 0
          this.state.BestellungMenge.E33 = 0
          this.state.BestellungMenge.E34 = 0
          this.state.BestellungMenge.E35 = 0
          this.state.BestellungMenge.E36 = 0
          this.state.BestellungMenge.E37 = 0
          this.state.BestellungMenge.E38 = 0
          this.state.BestellungMenge.E39 = 0
          this.state.BestellungMenge.E40 = 0
          this.state.BestellungMenge.E41 = 0
          this.state.BestellungMenge.E42 = 0
          this.state.BestellungMenge.E43 = 0
          this.state.BestellungMenge.E44 = 0
          this.state.BestellungMenge.E45 = 0
          this.state.BestellungMenge.E46 = 0
          this.state.BestellungMenge.E47 = 0
          this.state.BestellungMenge.E48 = 0
          this.state.BestellungMenge.E52 = 0
          this.state.BestellungMenge.E53 = 0
          this.state.BestellungMenge.E57 = 0
          this.state.BestellungMenge.E58 = 0
          this.state.BestellungMenge.E59 = 0

          this.state.resetButtonDisabled = true

        }
      }else{

          this.state.dropDownValue = 0

          
          this.state.BestellungArt.E21 = false
          this.state.BestellungArt.E22 = false
          this.state.BestellungArt.E23 = false
          this.state.BestellungArt.E24 = false
          this.state.BestellungArt.E25 = false
          this.state.BestellungArt.E27 = false
          this.state.BestellungArt.E28 = false
          this.state.BestellungArt.E32 = false
          this.state.BestellungArt.E33 = false
          this.state.BestellungArt.E34 = false
          this.state.BestellungArt.E35 = false
          this.state.BestellungArt.E36 = false
          this.state.BestellungArt.E37 = false
          this.state.BestellungArt.E38 = false
          this.state.BestellungArt.E39 = false
          this.state.BestellungArt.E40 = false
          this.state.BestellungArt.E41 = false
          this.state.BestellungArt.E42 = false
          this.state.BestellungArt.E43 = false
          this.state.BestellungArt.E44 = false
          this.state.BestellungArt.E45 = false
          this.state.BestellungArt.E46 = false
          this.state.BestellungArt.E47 = false
          this.state.BestellungArt.E48 = false
          this.state.BestellungArt.E52 = false
          this.state.BestellungArt.E53 = false
          this.state.BestellungArt.E57 = false
          this.state.BestellungArt.E58 = false
          this.state.BestellungArt.E59 = false

          this.state.BestellungMenge.E21 = 0
          this.state.BestellungMenge.E22 = 0
          this.state.BestellungMenge.E23 = 0
          this.state.BestellungMenge.E24 = 0
          this.state.BestellungMenge.E25 = 0
          this.state.BestellungMenge.E27 = 0
          this.state.BestellungMenge.E28 = 0
          this.state.BestellungMenge.E32 = 0
          this.state.BestellungMenge.E33 = 0
          this.state.BestellungMenge.E34 = 0
          this.state.BestellungMenge.E35 = 0
          this.state.BestellungMenge.E36 = 0
          this.state.BestellungMenge.E37 = 0
          this.state.BestellungMenge.E38 = 0
          this.state.BestellungMenge.E39 = 0
          this.state.BestellungMenge.E40 = 0
          this.state.BestellungMenge.E41 = 0
          this.state.BestellungMenge.E42 = 0
          this.state.BestellungMenge.E43 = 0
          this.state.BestellungMenge.E44 = 0
          this.state.BestellungMenge.E45 = 0
          this.state.BestellungMenge.E46 = 0
          this.state.BestellungMenge.E47 = 0
          this.state.BestellungMenge.E48 = 0
          this.state.BestellungMenge.E52 = 0
          this.state.BestellungMenge.E53 = 0
          this.state.BestellungMenge.E57 = 0
          this.state.BestellungMenge.E58 = 0
          this.state.BestellungMenge.E59 = 0

          this.state.resetButtonDisabled = true
      }
      
      this.setState({
        currentPeriode: activePeriodID
      });

    }


  }

  _getAnfangsbestand(articleId){

    var activePeriodID = this.props.ActiveUploadXML.activeUploadXMLData.id.substring(7);
    var currentInputXML = this.props.InputXMLs.find(xml => xml.id.substring(6) === activePeriodID);

    var amount = 0;
    if(currentInputXML){
      currentInputXML.inputDataObject.results.warehousestock[0].article.forEach(function (element){
        if(element.$.id === articleId){
          amount = parseInt(element.$.amount) + amount
        }
      }.bind(this))

    }

    return Math.round(amount);
  }

  _getZukunftbestand(articleId){

    var activePeriodID = this.props.ActiveUploadXML.activeUploadXMLData.id.substring(7);
    var currentInputXML = this.props.InputXMLs.find(xml => xml.id.substring(6) === activePeriodID);

    var amount = 0;
    if(currentInputXML){
      currentInputXML.inputDataObject.results.futureinwardstockmovement[0].order.forEach(function (element){
        if(element.$.article === articleId){
          amount = parseInt(element.$.amount) + amount
        }
      }.bind(this))

    }

    return Math.round(amount);
  }

  _handleDropDownChange(e, index, value){
    this.setState({
      dropDownValue : value
    })

    this._updateVariables(false);
  }

  _handleProgrammPlanChange(e){

  }

  _handleBestellungArtChange(e){
    let articleId = e.target.id

    let BestellungArtList = this.state.BestellungArt;
    console.log("davor",BestellungArtList[articleId])
    BestellungArtList[articleId] = !BestellungArtList[articleId]

    console.log("danach",BestellungArtList[articleId])
    this.setState({
      BestellungArt: BestellungArtList
    });
  }

  _handleBestellungMengeChange(e){

    let articleId = e.target.id
    let value = e.target.value;
    let BestellungMengeList = this.state.BestellungMenge;
    let errorTextBestellungMengeList = this.state.errorTextBestellungMenge

    let isNumeric = !isNaN(parseFloat(value)) && isFinite(value);

    if(isNumeric){
      errorTextBestellungMengeList[articleId] = ''
    }else{
      errorTextBestellungMengeList[articleId] = 'This field must be numeric.'
      value = 0
    }
    BestellungMengeList[articleId] = parseInt(value)


    this.setState({
      BestellungMenge: BestellungMengeList,
      errorTextBestellungMenge: errorTextBestellungMengeList
    });

    this._updateVariables(false);
  }

  _updateLocalStorage(){
    if (window.localStorage) {
          var activePeriodID = this.props.ActiveUploadXML.activeUploadXMLData.id.substring(7);
          var currentInputXML = this.props.InputXMLs.find(xml => xml.id.substring(6) === activePeriodID);
          console.log(currentInputXML)
          localStorage.removeItem(currentInputXML.id);
          localStorage.setItem(currentInputXML.id, JSON.stringify(currentInputXML.inputDataObject));
          
        }else{
          alert('LocalStorage is not supported in your browser');
        }
  }

  _handleSaveButtonClick(e){

    var errorlol = false;
    if(this.props.ActiveUploadXML.activeUploadXMLData.id !=='result_P-1'){

      Object.keys(this.state.errorTextBestellungMenge).forEach(function(key) {
          if(this.state.errorTextBestellungMenge[key] !== ''){
            errorlol = true;
          }
      }.bind(this));

      if(!errorlol){
        var kaufteildisposition = {
                                    Lieferzeit: this.state.Lieferzeit,
                                    Abweichung: this.state.Abweichung,
                                    BenoetigtFuerP1: this.state.BenoetigtFuerP1,
                                    BenoetigtFuerP2: this.state.BenoetigtFuerP2,
                                    BenoetigtFuerP3: this.state.BenoetigtFuerP3,
                                    Diskontmenge: this.state.Diskontmenge,
                                    Anfangsbestand: this.state.Anfangsbestand,
                                    Bedarf1: this.state.Bedarf1,
                                    Bedarf2: this.state.Bedarf2,
                                    Bedarf3: this.state.Bedarf3,
                                    Bedarf4: this.state.Bedarf4,
                                    BestellungMenge: this.state.BestellungMenge,
                                    BestellungArt: this.state.BestellungArt,
                                    DropDownValue: this.state.dropDownValue
                                  }
        this.props.dispatch(setKaufteildispositionInputXML(kaufteildisposition, this.props.ActiveUploadXML.activeUploadXMLData.id));
        this._updateLocalStorage();
        this.refs.snackbar.show();

        this.setState({
          resetButtonDisabled: false
        });
      }else{
              this.setState({
                openDialogStandardActions: true,
                dialogTitle: "Error",
                dialogText: "Please be sure that every field is a numeric"
              });
      }

    }else{
              this.setState({
                openDialogStandardActions: true,
                dialogTitle: "Error",
                dialogText: "Please choose a vaild periode"
              });
    }
  }

  _handleRequestClose(buttonClicked) {
    if (!buttonClicked && this.state.modal) return;
    this.setState({
      openDialogStandardActions: false
    });
  }

  _handleResetButtonClick(e){
    this.props.dispatch(resetKaufteildispositionInputXML(this.props.ActiveUploadXML.activeUploadXMLData.id))

    let BestellungArtList = this.state.BestellungArt;
    let BestellungMengeList = this.state.BestellungMenge;


          BestellungArtList.E21 = false
          BestellungArtList.E22 = false
          BestellungArtList.E23 = false
          BestellungArtList.E24 = false
          BestellungArtList.E25 = false
          BestellungArtList.E27 = false
          BestellungArtList.E28 = false
          BestellungArtList.E32 = false
          BestellungArtList.E33 = false
          BestellungArtList.E34 = false
          BestellungArtList.E35 = false
          BestellungArtList.E36 = false
          BestellungArtList.E37 = false
          BestellungArtList.E38 = false
          BestellungArtList.E39 = false
          BestellungArtList.E40 = false
          BestellungArtList.E41 = false
          BestellungArtList.E42 = false
          BestellungArtList.E43 = false
          BestellungArtList.E44 = false
          BestellungArtList.E45 = false
          BestellungArtList.E46 = false
          BestellungArtList.E47 = false
          BestellungArtList.E48 = false
          BestellungArtList.E52 = false
          BestellungArtList.E53 = false
          BestellungArtList.E57 = false
          BestellungArtList.E58 = false
          BestellungArtList.E59 = false

          BestellungMengeList.E21 = 0
          BestellungMengeList.E22 = 0
          BestellungMengeList.E23 = 0
          BestellungMengeList.E24 = 0
          BestellungMengeList.E25 = 0
          BestellungMengeList.E27 = 0
          BestellungMengeList.E28 = 0
          BestellungMengeList.E32 = 0
          BestellungMengeList.E33 = 0
          BestellungMengeList.E34 = 0
          BestellungMengeList.E35 = 0
          BestellungMengeList.E36 = 0
          BestellungMengeList.E37 = 0
          BestellungMengeList.E38 = 0
          BestellungMengeList.E39 = 0
          BestellungMengeList.E40 = 0
          BestellungMengeList.E41 = 0
          BestellungMengeList.E42 = 0
          BestellungMengeList.E43 = 0
          BestellungMengeList.E44 = 0
          BestellungMengeList.E45 = 0
          BestellungMengeList.E46 = 0
          BestellungMengeList.E47 = 0
          BestellungMengeList.E48 = 0
          BestellungMengeList.E52 = 0
          BestellungMengeList.E53 = 0
          BestellungMengeList.E57 = 0
          BestellungMengeList.E58 = 0
          BestellungMengeList.E59 = 0

    this.setState({
          resetButtonDisabled: true,
          BestellungArt: BestellungArtList,
          BestellungMenge: BestellungMengeList
        });

    this._updateVariables(false);

    this._updateLocalStorage();
  }

  _handleDetailModeChange(e){
    console.log(!this.state.detailMode)
    this.setState({
      detailMode: !this.state.detailMode
    });
  }

  _onDialogOk() {
    this.setState({
      openDialogStandardActions: false
    });
  }

  render() {

      let standardActions = [
      { text: 'Ok', onTouchTap: this._onDialogOk.bind(this), ref: 'ok' }
    ];

      //Create DropDown menuitems
    let menuItems = [{payload: '0', text: 'Normal'},{payload: '1', text: 'Optimistisch'},{payload: '2', text: 'Pesimistisch'}];


    return (
      <div>
        <div>
          <h1>Kaufteildisposition</h1>
          <RaisedButton label="Save" primary={true} onTouchTap={this._handleSaveButtonClick}/>
          <RaisedButton label="Reset" secondary={true} disabled={this.state.resetButtonDisabled} onTouchTap={this._handleResetButtonClick}/>
          <Toggle
                style={{"display": "inline-block", "width":"10%", "marginLeft":"10px", "paddingTop":"5px"}}
                name="Detail mode"
                value="Detail mode"
                onToggle={this._handleDetailModeChange}
                defaultToggled={this.state.detailMode}/>

         <div className="navigationButtons"> 
          <div className="beforeButtonWrapper" >
            <a className="beforeButton" href="/kapazitaetsplanung" onClick={Link.handleClick}>previous</a>
          </div>
          <div className="nextButtonWrapper">
            <a className="nextButton" href="/download" onClick={Link.handleClick}>next!</a>
          </div>
        </div>

        <Table
          height={this.state.heightt}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          >
          <TableHeader adjustForCheckbox={this.state.displayRowCheckbox} displaySelectAll={this.state.displayRowCheckbox} enableSelectAll={this.state.enableSelectAll}>
           <TableRow>
              <TableHeaderColumn colSpan="5" tooltip='Produktionsprogramm' style={{textAlign: 'center'}}>
                Produktionsprogramm
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip='Periode'>Periode</TableHeaderColumn>
              <TableHeaderColumn tooltip='Periode1'>Periode1</TableHeaderColumn>
              <TableHeaderColumn tooltip='Periode2'>Periode2</TableHeaderColumn>
              <TableHeaderColumn tooltip='Periode3'>Periode3</TableHeaderColumn>
              <TableHeaderColumn tooltip='Periode4'>Periode4</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={this.state.displayRowCheckbox}>
            <TableRow>
              <TableRowColumn>
                P1
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Produktionsplan1"
                  disabled = {true}
                  value= {this.state.Produktionsplan1.P1}/>
              </TableRowColumn>
              <TableRowColumn>
               <TextField
                  hintText="Produktionsplan1"
                  value= {this.state.Produktionsplan2.P1}/>
              </TableRowColumn>
              <TableRowColumn>
              <TextField
                  hintText="Produktionsplan1"
                  value= {this.state.Produktionsplan3.P1}/>
              </TableRowColumn>
              <TableRowColumn>
              <TextField
                  hintText="Produktionsplan1"
                  value= {this.state.Produktionsplan4.P1}/>
            </TableRowColumn>
            </TableRow>

          </TableBody>
        </Table>

        
        <DropDownMenu  menuItems={menuItems} onChange={this._handleDropDownChange} > 
        </DropDownMenu>

        { this.state.detailMode ?
        (
          
              <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                selectable={this.state.selectable}
                >
                <TableHeader adjustForCheckbox={this.state.displayRowCheckbox} displaySelectAll={this.state.displayRowCheckbox} enableSelectAll={this.state.enableSelectAll}>
                <TableRow>
                    <TableHeaderColumn >Item No.</TableHeaderColumn>
                    <TableHeaderColumn >Lieferzeit</TableHeaderColumn>
                    <TableHeaderColumn >Abweichung</TableHeaderColumn>
                    <TableHeaderColumn colSpan="3"  style={{textAlign: 'center'}}>
                      Benötigt für:
                    </TableHeaderColumn>
                    <TableHeaderColumn >Diskontmenge</TableHeaderColumn>
                    <TableHeaderColumn >Anfangsbestand</TableHeaderColumn>
                    <TableHeaderColumn colSpan="4"  style={{textAlign: 'center'}}>
                      Bedarf
                    </TableHeaderColumn>
                    <TableHeaderColumn colSpan="2"  style={{textAlign: 'center'}}>
                      Bestellung
                    </TableHeaderColumn>
                  </TableRow>
                  <TableRow>
                    <TableHeaderColumn colSpan="3"  ></TableHeaderColumn>
                    <TableHeaderColumn >P1(Herren)</TableHeaderColumn>
                    <TableHeaderColumn >P2(Frauen)</TableHeaderColumn>
                    <TableHeaderColumn >P3(Kinder)</TableHeaderColumn>
                    <TableHeaderColumn colSpan="2"  ></TableHeaderColumn>
                    <TableHeaderColumn >Bedarf1</TableHeaderColumn>
                    <TableHeaderColumn >Bedarf2</TableHeaderColumn>
                    <TableHeaderColumn >Bedarf3</TableHeaderColumn>
                    <TableHeaderColumn >Bedarf4</TableHeaderColumn>
                    <TableHeaderColumn >Menge</TableHeaderColumn>
                    <TableHeaderColumn >Art</TableHeaderColumn>
                  </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={this.state.displayRowCheckbox}>
                  <TableRow>
                    <TableRowColumn>
                      E21
                    </TableRowColumn>
                    <TableRowColumn>
                      <TextField
                        hintText="Lieferzeit"
                        disabled = {true}
                        value= {this.state.Lieferzeit.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="Abweichung"
                        disabled = {true}
                        value= {this.state.Abweichung.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="BenoetigtFuerP1"
                        disabled = {true}
                        value= {this.state.BenoetigtFuerP1.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="BenoetigtFuerP2"
                        disabled = {true}
                        value= {this.state.BenoetigtFuerP2.E21}/>
                  </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="BenoetigtFuerP3"
                        disabled = {true}
                        value= {this.state.BenoetigtFuerP3.E21}/>
                  </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="Diskontmenge"
                        disabled = {true}
                        value= {this.state.Diskontmenge.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="Anfangsbestand"
                        disabled = {true}
                        value= {this.state.Anfangsbestand.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="Bedarf1"
                        disabled = {true}
                        value= {this.state.Bedarf1.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="Bedarf2"
                        disabled = {true}
                        value= {this.state.Bedarf2.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="Bedarf3"
                        disabled = {true}
                        value= {this.state.Bedarf3.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                    <TextField
                        hintText="Bedarf4"
                        disabled = {true}
                        value= {this.state.Bedarf4.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                      <TextField
                        hintText="BestellungMenge"
                        id="E21"
                        errorText={this.state.errorTextBestellungMenge.E21}
                        errorStyle={{color:'orange'}}
                        onChange={this._handleBestellungMengeChange}
                        value= {this.state.BestellungMenge.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                      <Toggle
                        name="toggleE21"
                        value="toggleE21"
                        onToggle={this._handleBestellungArtChange}
                        defaultToggled={this.state.BestellungArt.E21}/>
                    </TableRowColumn>
                  </TableRow>

                </TableBody>
              </Table>

        ) :
        (
              <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                selectable={this.state.selectable}
                >
                <TableHeader adjustForCheckbox={this.state.displayRowCheckbox} displaySelectAll={this.state.displayRowCheckbox} enableSelectAll={this.state.enableSelectAll}>
                <TableRow>
                    <TableHeaderColumn >Item No.</TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign: 'center'}}>
                      Bestellung
                    </TableHeaderColumn>
                    <TableHeaderColumn ></TableHeaderColumn>
                  </TableRow>
                  <TableRow>
                    <TableHeaderColumn ></TableHeaderColumn>
                    <TableHeaderColumn >Menge</TableHeaderColumn>
                    <TableHeaderColumn >Art</TableHeaderColumn>
                  </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={this.state.displayRowCheckbox}>
                  <TableRow>
                    <TableRowColumn>
                      E21
                    </TableRowColumn>
                    <TableRowColumn>
                      <TextField
                        hintText="BestellungMenge"
                        id="E21"
                        errorText={this.state.errorTextBestellungMenge.E21}
                        errorStyle={{color:'orange'}}
                        onChange={this._handleBestellungMengeChange}
                        value= {this.state.BestellungMenge.E21}/>
                    </TableRowColumn>
                    <TableRowColumn>
                      <Toggle
                        name="toggleE21"
                        value="toggleE21"
                        onToggle={this._handleBestellungArtChange}
                        defaultToggled={this.state.BestellungArt.E21}/>
                    </TableRowColumn>
                  </TableRow>

                </TableBody>
              </Table>
          

        )
      }

      </div>
        <Dialog
                ref="standardDialog"
                title={this.state.dialogTitle}
                actions={standardActions}
                actionFocus="ok"
                open={this.state.openDialogStandardActions}
                onRequestClose={this._handleRequestClose}>
                {this.state.dialogText}
          </Dialog>
          <Snackbar
                ref="snackbar"
                message={this.state.snackBarmessage}
                autoHideDuration={this.state.snackBarautoHideDuration}
                style={{"textAlign":"center"}}>
              </Snackbar>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    ActiveUploadXML: state.ActiveUploadXMLReducer,
    InputXMLs: state.InputXMLReducer
  }
}

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Kaufteildisposition)



 // { detailMode ?
 //                (
 //                  <TableRowColumn>
 //                  <TextField
 //                      hintText="Bedarf2"
 //                      disabled = {true}
 //                      value= {this.state.Bedarf2.E21}/>
 //                  </TableRowColumn>
 //                  <TableRowColumn>
 //                  <TextField
 //                      hintText="Bedarf3"
 //                      disabled = {true}
 //                      value= {this.state.Bedarf3.E21}/>
 //                  </TableRowColumn>
 //                  <TableRowColumn>
 //                  <TextField
 //                      hintText="Bedarf4"
 //                      disabled = {true}
 //                      value= {this.state.Bedarf4.E21}/>
 //                  </TableRowColumn>
 //                  <TableRowColumn>
 //                    <TextField
 //                      hintText="BestellungMenge"
 //                      id="E21"
 //                      errorText={this.state.errorTextBestellungMenge.E21}
 //                      errorStyle={{color:'orange'}}
 //                      onChange={this._handleBestellungMengeChange}
 //                      value= {this.state.BestellungMenge.E21}/>
 //                  </TableRowColumn>
 //                  <TableRowColumn>
 //                    <Toggle
 //                      name="toggleE21"
 //                      value="toggleE21"
 //                      onToggle={this._handleBestellungArtChange}
 //                      defaultToggled={this.state.BestellungArt.E21}/>
 //                  </TableRowColumn>
 //                  ) :
 //                  (
 //                    <TableRowColumn>
 //                    <TextField
 //                        hintText="Bedarf2"
 //                        disabled = {true}
 //                        value= {this.state.Bedarf2.E21}/>
 //                    </TableRowColumn>
 //                  )
 //              }