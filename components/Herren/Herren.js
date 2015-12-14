import React from 'react';
import './Herren.scss';
import mui from 'material-ui';
import _ from 'lodash'
import { connect } from 'react-redux';
import { setAuftragsplanungHerrenInputXML } from '../Redux/Actions';

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



class Herren extends React.Component {
  //this._handleClick = this._handleClick.bind(this);
  constructor() {
    super();
    this._getWarehousestock = this._getWarehousestock.bind(this);
    this._getWaitingslistworkstation = this._getWaitingslistworkstation.bind(this);
    this._getOrdersinwork = this._getOrdersinwork.bind(this);


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

      VR:{P1: 0,
        E26: 0,
        E51: 0,
        E16: 0,
        E17: 0,
        E50: 0,
        E4: 0,
        E10: 0,
        E49: 0,
        E7: 0,
        E13: 0,
        E18: 0},

      GL:{P1: 0,
        E26: 0,
        E51: 0,
        E16: 0,
        E17: 0,
        E50: 0,
        E4: 0,
        E10: 0,
        E49: 0,
        E7: 0,
        E13: 0,
        E18: 0},

      AU: {P1: 0,
        E26: 0,
        E51: 0,
        E16: 0,
        E17: 0,
        E50: 0,
        E4: 0,
        E10: 0,
        E49: 0,
        E7: 0,
        E13: 0,
        E18: 0},
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

  render() {

    return (
      <div>
        <h1>Auftragsplanung Herren-Fahrrad</h1>

        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          >
          <TableBody>
          <TableHeader >
            <TableRow selectable={this.state.selectable}>
              <TableHeaderColumn colSpan="7" tooltip='Herren Fahrrad' style={{textAlign: 'center'}}>
                Herren Fahrrad
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
              <TableRowColumn>P1</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.P1}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.P1}/>
              </TableRowColumn>
              <TableRowColumn>
              <TextField
                  hintText="Aktueller Lagerbestand"
                value = {this._getWarehousestock("1")}
                  disabled = {true}/>
            </TableRowColumn>
              <TableRowColumn>
              <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("1")}
                  disabled = {true}/>
                />
            </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("1")}
                  disabled = {true}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.P1}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E26</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.E26}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
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
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("26")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E26}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn displayBorder = {true}>E51</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.E51}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.E51}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this._getWarehousestock("51")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("51")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("51")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E51}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E16</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.E16}/>
                />
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
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("16")}
                  disabled = {true}/>
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
                  value= {this.state.VR.E17}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
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
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("17")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E17}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E50</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.E50}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.E50}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this._getWarehousestock("50")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("50")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("50")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E50}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E4</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.E4}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.E4}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this._getWarehousestock("4")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("4")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("4")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E4}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E10</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.E10}/>
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.E10}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this._getWarehousestock("10")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("10")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("10")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E10}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
            <TableRowColumn>E49</TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Vertriebswunsch"
                value= {this.state.VR.E49}/>
              />
            </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.E49}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this._getWarehousestock("49")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("49")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("49")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E49}
                  disabled = {true}/>
              </TableRowColumn>
          </TableRow>
            <TableRow>
              <TableRowColumn>E7</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.E7}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.E7}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this._getWarehousestock("7")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("7")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("7")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E7}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E13</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.E13}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.E13}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this._getWarehousestock("13")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("13")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("13")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E13}
                  disabled = {true}/>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E18</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"
                  value= {this.state.VR.E18}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS"
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand"
                  value= {this.state.GL.E18}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand"
                  value = {this._getWarehousestock("18")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange"
                  value = {this._getWaitingslistworkstation("18")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung"
                  value = {this._getOrdersinwork("18")}
                  disabled = {true}/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge"
                  value= {this.state.AU.E18}
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

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Herren)
