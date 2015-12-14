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

      GL:{P3: 0,
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

    return (
      <div>
        <h1>Auftragsplanung Kinder-Fahrrad</h1>

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
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.P3}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.P3}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
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
                  value = {this._getWarehousestock("3")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("3")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("3")}
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
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E26}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E26}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
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
                  value = {Math.ceil(this._getWarehousestock("26")/3)}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("26")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("26")}
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
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E31}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E31}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
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
                  value = {this._getWarehousestock("31")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("31")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("31")}
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
                  hintText="Vertriebswunsch"
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
                  value = {Math.ceil(this._getWarehousestock("16")/3)}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("16")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("16")}
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
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E17}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E17}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
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
                  value = {Math.ceil(this._getWarehousestock("17")/3)}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("17")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("17")}
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
                hintText="Vertriebswunsch"
                errorText={this.state.errorText.E30}
                errorStyle={{color:'orange'}}
                onChange={this._handleVetriebswunschChange}
                value= {this.state.VR.E30}/>
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Bedarf für WS"
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
                value = {this._getWarehousestock("30")}
                disabled = {true}/>
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Warteschlange"
                value = {this._getWaitingslistworkstation("30")}
                disabled = {true}/>
              />
            </TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Bearbeitung"
                value = {this._getOrdersinwork("30")}
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
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E6}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E6}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
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
                  value = {this._getWarehousestock("6")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("6")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("6")}
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
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E12}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E12}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
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
                  value = {this._getWarehousestock("12")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("12")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("12")}
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
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E29}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E29}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
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
                  value = {this._getWarehousestock("29")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("29")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("29")}
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
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E9}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E9}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
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
                  value = {this._getWarehousestock("9")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("9")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("9")}
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
                  hintText="Vertriebswunsch"
                  errorText={this.state.errorText.E15}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}
                  value= {this.state.VR.E15}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
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
                  value = {this._getWarehousestock("15")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("15")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("15")}
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
                  hintText="Vertriebswunsch"
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
                  value = {this._getWarehousestock("20")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("20")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("20")}
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
