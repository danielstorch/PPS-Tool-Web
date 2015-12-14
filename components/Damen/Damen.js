import React from 'react';
import './Damen.scss';
import mui from 'material-ui';
import _ from 'lodash'
import { connect } from 'react-redux';
import { setAuftragsplanungDamenInputXML } from '../Redux/Actions';

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



class Damen extends React.Component {
  //this._handleClick = this._handleClick.bind(this);
  constructor() {
    super();
    this._getWarehousestock = this._getWarehousestock.bind(this);
    this._handleVetriebswunschChange = this._handleVetriebswunschChange.bind(this);

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

      VR:{P2: 0,
          E26: 0,
          E56: 0,
          E16: 0,
          E17: 0,
          E55: 0,
          E5: 0,
          E11: 0,
          E54: 0,
          E8: 0,
          E14: 0,
          E19: 0},

      GL:{P2: 0,
          E26: 0,
          E56: 0,
          E16: 0,
          E17: 0,
          E55: 0,
          E5: 0,
          E11: 0,
          E54: 0,
          E8: 0,
          E14: 0,
          E19: 0},

      AU: {P2: 0,
          E26: 0,
          E56: 0,
          E16: 0,
          E17: 0,
          E55: 0,
          E5: 0,
          E11: 0,
          E54: 0,
          E8: 0,
          E14: 0,
          E19: 0},

      errorText:{P2: '',
          E26: '',
          E56: '',
          E16: '',
          E17: '',
          E55: '',
          E5: '',
          E11: '',
          E54: '',
          E8: '',
          E14: '',
          E19: ''
        }
    };

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
   
    return amount
  }

  _getWaitingslistworkstation(articleId){
    var activePeriodID = this.props.ActiveUploadXML.activeUploadXMLData.id.substring(7);
    var currentInputXML = this.props.InputXMLs.find(xml => xml.id.substring(6) === activePeriodID); 

    var currentAmount = 0;
    if(currentInputXML){
      currentInputXML.inputDataObject.results.waitinglistworkstations[0].workplace.forEach(function (elementStation){
        if(elementStation.waitinglist){
            elementStation.waitinglist.forEach(function (elementWaitinglist){
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

  render() {
       
    return (
      <div>
        <h1>Auftragsplanung Damen-Fahrrad</h1>

        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          >
          <TableBody>
          <TableHeader >
            <TableRow selectable={this.state.selectable}>
              <TableHeaderColumn colSpan="7" tooltip='Damen Fahrrad' style={{textAlign: 'center'}}>
                Damen Fahrrad
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
              <TableRowColumn>P2</TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="P2"
                  hintText="Vertriebswunsch"
                  value={this.state.VR.P2}
                  errorText={this.state.errorText.P2}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.P2}/>
              </TableRowColumn>
              <TableRowColumn>
              <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("2")}
                  disabled={true}/>
            </TableRowColumn>
              <TableRowColumn>
              <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("2")}
                  disabled={true}/>
            </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("2")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value = {this.state.AU.P2}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E26</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value = {this.state.VR.E26}
                  id="E26"
                  errorText={this.state.errorText.E26}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E26}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("26")/3}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value={this._getWaitingslistworkstation("26")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("26")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E26}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn displayBorder = {true}>E56</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" 
                  value={this.state.VR.E56}
                  id="E56"
                  errorText={this.state.errorText.E56}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E56}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("56")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("56")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("56")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E56}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E16</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E16"
                  hintText="Vertriebswunsch" 
                  value={this.state.VR.E16}
                  errorText={this.state.errorText.E16}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E16}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("16")/3}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("16")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("16")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E16}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E17</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E17"
                  hintText="Vertriebswunsch" 
                  value={this.state.VR.E17}
                  errorText={this.state.errorText.E17}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E17}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("17")/3}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("17")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("17")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E17}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E55</TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E55"
                  hintText="Vertriebswunsch" 
                  value={this.state.VR.E55}
                  errorText={this.state.errorText.E55}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E55}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("55")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("55")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("55")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E55}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E5</TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E5"
                  hintText="Vertriebswunsch" 
                  value={this.state.VR.E5}
                  errorText={this.state.errorText.E5}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value={this.state.GL.E5}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("5")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("5")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("5")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E5}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E11</TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E11"
                  hintText="Vertriebswunsch" 
                value={this.state.VR.E11}
                errorText={this.state.errorText.E11}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E11}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("11")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("11")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("11")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E11}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
            <TableRowColumn>E54</TableRowColumn>
            <TableRowColumn>
              <TextField
                id="E54"
                hintText="Vertriebswunsch" 
                value={this.state.VR.E54}
                errorText={this.state.errorText.E54}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
            </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E54}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("54")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("54")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("54")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E54}
                  disabled={true}/>
              </TableRowColumn>
          </TableRow>
            <TableRow>
              <TableRowColumn>E8</TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E8"
                  hintText="Vertriebswunsch" 
                  value={this.state.VR.E8}
                  errorText={this.state.errorText.E8}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E8}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("8")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("8")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("8")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E8}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E14</TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E14"
                  hintText="Vertriebswunsch" 
                  value={this.state.VR.E14}
                  errorText={this.state.errorText.E14}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E14}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("14")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("14")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("14")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E14}
                  disabled={true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E19</TableRowColumn>
              <TableRowColumn>
                <TextField
                  id="E19"
                  hintText="Vertriebswunsch" 
                  value={this.state.VR.E19}
                  errorText={this.state.errorText.E19}
                  errorStyle={{color:'orange'}}
                  onChange={this._handleVetriebswunschChange}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" 
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" 
                  value={this.state.GL.E19}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" 
                  value={this._getWarehousestock("19")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" 
                  value={this._getWaitingslistworkstation("19")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" 
                  value = {this._getOrdersinwork("19")}
                  disabled={true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" 
                  value = {this.state.AU.E19}
                  disabled={true}/>
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

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Damen)
