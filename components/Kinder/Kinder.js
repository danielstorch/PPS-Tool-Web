import React from 'react';
import './Kinder.scss';
import mui from 'material-ui';
import _ from 'lodash'
import { connect } from 'react-redux';
import { setAuftragsplanungKinderInputXML } from '../Redux/Actions';

const Table = require('material-ui/lib/table/table');
const TableBody = require('material-ui/lib/table/table-body');
const TableFooter = require('material-ui/lib/table/table-footer');
const TableHeader = require('material-ui/lib/table/table-header');
const TableHeaderColumn = require('material-ui/lib/table/table-header-column');
const TableRow = require('material-ui/lib/table/table-row');
const TableRowColumn = require('material-ui/lib/table/table-row-column');
const RaisedButton = require('material-ui/lib/raised-button');



const TextField = require('material-ui/lib/text-field');



var Dialog = mui.Dialog
  , Snackbar = mui.Snackbar;



class Kinder extends React.Component {
  //this._handleClick = this._handleClick.bind(this);
  constructor() {
    super();
    this._getWarehousestock = this._getWarehousestock.bind(this);
    this._getWaitingslistworkstation = this._getWaitingslistworkstation.bind(this);
    this._getOrdersinwork = this._getOrdersinwork.bind(this);
    this._handleVetriebswunschChange = this._handleVetriebswunschChange.bind(this);
    this._handleLagerBestandChange = this._handleLagerBestandChange.bind(this);


    this.state = {
      modal: true,
      openDialogStandardActions: false,
      dialogTitle: "Dialog",
      dialogText: "DialogText",
      displayRowCheckbox: false,
      xmlValid: false,
      snackBarautoHideDuration: 3000,
      snackBarmessage: 'Upload done!',
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,
      height: '650px',
      buttonDisabled: false,

      VR:{P3: 0,
        E26: 0,
        E31: 0,
        E16: 0,
        E17: 0,
        E30: 0,
        E6: 0,
        E12: 0,
        E29: 0,
        E9: 0,
        E15: 0,
        E20: 0},

      BW:{P3: 0,
        E26: 0,
        E31: 0,
        E16: 0,
        E17: 0,
        E30: 0,
        E6: 0,
        E12: 0,
        E29: 0,
        E9: 0,
        E15: 0,
        E20: 0},

      GL: {P3: 0,
        E26: 0,
        E31: 0,
        E16: 0,
        E17: 0,
        E30: 0,
        E6: 0,
        E12: 0,
        E29: 0,
        E9: 0,
        E15: 0,
        E20: 0},

      AL: {P3: 0,
        E26: 0,
        E31: 0,
        E16: 0,
        E17: 0,
        E30: 0,
        E6: 0,
        E12: 0,
        E29: 0,
        E9: 0,
        E15: 0,
        E20: 0},


      WS: {P3: 0,
        E26: 0,
        E31: 0,
        E16: 0,
        E17: 0,
        E30: 0,
        E6: 0,
        E12: 0,
        E29: 0,
        E9: 0,
        E15: 0,
        E20: 0},

      BA: {P3: 0,
        E26: 0,
        E31: 0,
        E16: 0,
        E17: 0,
        E30: 0,
        E6: 0,
        E12: 0,
        E29: 0,
        E9: 0,
        E15: 0,
        E20: 0},

      AU: {P3: 0,
        E26: 0,
        E31: 0,
        E16: 0,
        E17: 0,
        E30: 0,
        E6: 0,
        E12: 0,
        E29: 0,
        E9: 0,
        E15: 0,
        E20: 0},

      errorText:{P3: '',
        E26: '',
        E31: '',
        E16: '',
        E17: '',
        E30: '',
        E6: '',
        E12: '',
        E29: '',
        E9: '',
        E15: '',
        E20: ''},

      errorTextGL:{P3: '',
        E26: '',
        E31: '',
        E16: '',
        E17: '',
        E30: '',
        E6: '',
        E12: '',
        E29: '',
        E9: '',
        E15: '',
        E20: ''}

    };

  }

  componentWillMount(){
    console.log('componentWillMount');
    this._updateVariables();
  }

  shouldComponentUpdate(){
    return true;
  }

  componentWillReceiveProps(){
    this._updateVariables();

  }

  _updateVariables(){
    console.log('_updateVariables Method');



    //BW
    this.state.BW.E26 = this._getWaitingslistworkstation('3');
    this.state.BW.E31 = this._getWaitingslistworkstation('3');
    this.state.BW.E16 = this._getWaitingslistworkstation('31');
    this.state.BW.E17 = this._getWaitingslistworkstation('31');
    this.state.BW.E30 = this._getWaitingslistworkstation('31');
    this.state.BW.E6 = this._getWaitingslistworkstation('30');
    this.state.BW.E12 = this._getWaitingslistworkstation('30');
    this.state.BW.E29 = this._getWaitingslistworkstation('30');
    this.state.BW.E9 = this._getWaitingslistworkstation('29');
    this.state.BW.E15 = this._getWaitingslistworkstation('29');
    this.state.BW.E20 = this._getWaitingslistworkstation('29');

    //AL
    this.state.AL.P3 = this._getWarehousestock('3');
    this.state.AL.E26 = Math.ceil(this._getWarehousestock('26'));
    this.state.AL.E31 = this._getWarehousestock('31');
    this.state.AL.E16 = Math.ceil(this._getWarehousestock('16'));
    this.state.AL.E17 = Math.ceil(this._getWarehousestock('17'));
    this.state.AL.E30 = this._getWarehousestock('30');
    this.state.AL.E6 = this._getWarehousestock('6');
    this.state.AL.E12 = this._getWarehousestock('12');
    this.state.AL.E29 = this._getWarehousestock('29');
    this.state.AL.E9 = this._getWarehousestock('9');
    this.state.AL.E15 = this._getWarehousestock('15');
    this.state.AL.E20 = this._getWarehousestock('20');

    //WS
    this.state.WS.P3 = this._getWaitingslistworkstation('3');
    this.state.WS.E26 = this._getWaitingslistworkstation('26');
    this.state.WS.E31 = this._getWaitingslistworkstation('31');
    this.state.WS.E16 = this._getWaitingslistworkstation('16');
    this.state.WS.E17 = this._getWaitingslistworkstation('17');
    this.state.WS.E30 = this._getWaitingslistworkstation('30');
    this.state.WS.E6 = this._getWaitingslistworkstation('6');
    this.state.WS.E12 = this._getWaitingslistworkstation('12');
    this.state.WS.E29 = this._getWaitingslistworkstation('29');
    this.state.WS.E9 = this._getWaitingslistworkstation('9');
    this.state.WS.E15 = this._getWaitingslistworkstation('15');
    this.state.WS.E20 = this._getWaitingslistworkstation('20');

    //BA
    this.state.BA.P3 = this._getOrdersinwork('3');
    this.state.BA.E26 = this._getOrdersinwork('26');
    this.state.BA.E31 = this._getOrdersinwork('31');
    this.state.BA.E16 = this._getOrdersinwork('16');
    this.state.BA.E17 = this._getOrdersinwork('17');
    this.state.BA.E30 = this._getOrdersinwork('30');
    this.state.BA.E6 = this._getOrdersinwork('6');
    this.state.BA.E12 = this._getOrdersinwork('12');
    this.state.BA.E29 = this._getOrdersinwork('29');
    this.state.BA.E9 = this._getOrdersinwork('9');
    this.state.BA.E15 = this._getOrdersinwork('15');
    this.state.BA.E20 = this._getOrdersinwork('20');

    console.log(this._getOrdersinwork('18'));



  }

  getWarteschlangeAmountINPUT(id, isResult, inputXML){
    var amount = 0;
    var xmlData;
    if(isResult){

      var results = this.props.ActiveUploadXML.activeUploadXMLData.uploadedResultsDataObject.results;

      for(let workplace of results.waitinglistworkstations[0].workplace) {
        if(workplace.hasOwnProperty('waitinglist')){
          for(let waitinglist of workplace.waitinglist){
            if(waitinglist.$.item === id){
              amount += parseInt(waitinglist.$.amount);
            }
          }
        }
      }
    }

    return amount;
  }

  _getWarehousestock(articleId){

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

    console.log("Warehousestock: "+ articleId, amount)

    return Math.round(amount);
  }

  _getWaitingslistworkstation(articleId){
    var activePeriodID = this.props.ActiveUploadXML.activeUploadXMLData.id.substring(7);
    var currentInputXML = this.props.InputXMLs.find(xml => xml.id.substring(6) === activePeriodID);

    var currentAmount = 0;
    if(currentInputXML){
      currentInputXML.inputDataObject.results.waitinglistworkstations[0].workplace.forEach(function (elementStation){
        if(elementStation.waitinglist){
          elementStation.waitinglist.foreach(function (elementWaitinglist){
            if(elementWaitinglist.$.item === articleId){
              currentAmount = parseInt(elementWaitinglist.$.amount) + currentAmount
            }
          }.bind(this))
        }
      }.bind(this))

    }

    console.log("Waitingslistworkstation: "+ articleId, currentAmount)
    return currentAmount
  }

  _getOrdersinwork(articleId){
    var activePeriodID = this.props.ActiveUploadXML.activeUploadXMLData.id.substring(7);
    var currentInputXML = this.props.InputXMLs.find(xml => xml.id.substring(6) === activePeriodID);

    var currentAmount = 0;
    if(currentInputXML){
      currentInputXML.inputDataObject.results.ordersinwork[0].workplace.forEach(function (elementWorkplace){
        if(elementWorkplace.$.item === articleId){
          currentAmount = parseInt(elementWorkplace.$.amount) + currentAmount
        }
      }.bind(this))

    }

    console.log("Ordersinwork: "+ articleId, currentAmount)
    return currentAmount
  }

  _handleVetriebswunschChange(e){

    let articleId = e.target.id
    let value = e.target.value;
    let VRList = this.state.VR;
    let errorTextList = this.state.errorText

    let isNumeric = !isNaN(parseFloat(value)) && isFinite(value);

    if(isNumeric){
      errorTextList[articleId] = ''
    }else{
      errorTextList[articleId] = 'This field must be numeric.'
    }
    VRList[articleId] = value

    this.setState({
      errorText: errorTextList,
      VR: VRList
    });
  }

  _handleLagerBestandChange(e){

    let articleId = e.target.id
    let value = e.target.value;
    let VRList = this.state.GL;
    let errorTextList = this.state.errorTextGL

    let isNumeric = !isNaN(parseFloat(value)) && isFinite(value);

    if(isNumeric){
      errorTextList[articleId] = ''
    }else{
      errorTextList[articleId] = 'This field must be numeric.'
    }
    VRList[articleId] = value

    this.setState({
      errorTextGL: errorTextList,
      GL: VRList
    });
  }

  render() {

    if(this.state.currentPeriode !== this.props.ActiveUploadXML.activeUploadXMLData.id){
      this._updateVariables()
      console.log("ALLES WIRD GEUPDATED")
    }

    return (
      <div>
        <h1>Auftragsplanung Kinder-Fahrrad</h1>

        <RaisedButton label="Default" primary={true} disabled={this.state.buttonDisabled}/>

        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          >
          <TableBody>
          <TableHeader >
            <TableRow selectable={this.state.selectable}>
              <TableHeaderColumn colSpan="7" tooltip='Kinder Fahrrad' style={{textAlign: 'center'}}>
                Kinder Fahrrad
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          </TableBody>

          <TableBody displayRowCheckbox={this.state.displayRowCheckbox}>
          <TableRow>
              <TableRowColumn>
                Artikel
              </TableRowColumn>
              <TableRowColumn>
                Vertriebswunsch
              </TableRowColumn>
              <TableRowColumn>
                Bedarf für WS
              </TableRowColumn>
              <TableRowColumn>
                Geplanter Lagerbestand
              </TableRowColumn>
              <TableRowColumn>
              Aktueller Lagerbestand
            </TableRowColumn>
              <TableRowColumn>
              Warteschlange
            </TableRowColumn>
              <TableRowColumn>
                Bearbeitung
              </TableRowColumn>
              <TableRowColumn>
                Aufträge
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>P3</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  id="P3"
                  errorText={this.state.errorText.P3}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.P3}/>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="P3"
                  errorText={this.state.errorTextGL.P3}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.P3}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.P3}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.P3}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.P3}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.P3}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E26</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  id="E26"
                  errorText={this.state.errorText.E26}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E26}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E26}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="E26"
                  errorText={this.state.errorTextGL.E26}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.E26}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E26}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E26}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E26}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E26}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn displayBorder = {true}>E31</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  id="E31"
                  errorText={this.state.errorText.E31}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E31}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E31}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="E31"
                  errorText={this.state.errorTextGL.E31}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.E31}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E31}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E31}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E31}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E31}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E16</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E16"
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E16}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E16}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E16}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.E16}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E16}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E16}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E16}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E16}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E17</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  id="E17"
                  errorText={this.state.errorText.E17}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E17}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E17}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="E17"
                  errorText={this.state.errorTextGL.E17}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.E17}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E17}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E17}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E17}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E17}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E30</TableRowColumn>
              <TableRowColumn>
              <TextField
                hintText="Vertriebswunsch"
                id="E30"
                errorText={this.state.errorText.E30}
                errorStyle={{color:'orange'}}
                onChange={this._handleVetriebswunschChange}
                value= {this.state.VR.E30}/>
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Bedarf für WS"
                value = {this.state.BW.E30}
                disabled = {true}/>
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Geplanter Lagerbestand"
                id="E30"
                errorText={this.state.errorTextGL.E30}
                errorStyle={{color:'orange'}}
                onChange={this._handleLagerBestandChange}
                value= {this.state.GL.E30}/>
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Aktueller Lagerbestand"
                value = {this.state.AL.E30}
                disabled = {true}/>
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Warteschlange"
                value = {this.state.WS.E30}
                disabled = {true}/>
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Bearbeitung"
                value = {this.state.BA.E30}
                disabled = {true}/>
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Aufträge"
                value= {this.state.AU.E30}
                disabled = {true}/>
            </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E6</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  id="E6"
                  errorText={this.state.errorText.E6}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E6}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E6}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="E6"
                  errorText={this.state.errorTextGL.E6}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.E6}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E6}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E6}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E6}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E6}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E12</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  id="E12"
                  errorText={this.state.errorText.E12}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E12}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E12}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="E12"
                  errorText={this.state.errorTextGL.E12}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.E12}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E12}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E12}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E12}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E12}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
            <TableRowColumn>E29</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  id="E29"
                  errorText={this.state.errorText.E29}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E29}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E29}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="E29"
                  errorText={this.state.errorTextGL.E29}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.E29}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E29}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E29}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E29}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E29}
                  disabled = {true}/>
              </TableRowColumn>
          </TableRow>
            <TableRow>
              <TableRowColumn>E9</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  id="E9"
                  errorText={this.state.errorText.E9}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E9}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E9}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="E9"
                  errorText={this.state.errorTextGL.E9}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.E9}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E9}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E9}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E9}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E9}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E15</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  id="E15"
                  errorText={this.state.errorText.E15}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E15}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E15}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="E15"
                  errorText={this.state.errorTextGL.E15}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.E15}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E15}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E15}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E15}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E15}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E20</TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E20"
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E20}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E20}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  value = {this.state.BW.E20}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  id="E20"
                  errorText={this.state.errorTextGL.E20}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleLagerBestandChange}
                  value= {this.state.GL.E20}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this.state.AL.E20}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this.state.WS.E20}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this.state.BA.E20}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E20}
                  disabled = {true}/>
              </TableRowColumn>

            </TableRow>

          </TableBody>
        </Table>

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

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Kinder)
