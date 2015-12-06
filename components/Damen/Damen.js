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
      height: '650px'
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
                  hintText="Vertriebswunsch"/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
              <TextField
                  hintText="Aktueller Lagerbestand" />
            </TableRowColumn>
              <TableRowColumn>
              <TextField
                  hintText="Warteschlange" />
            </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E26</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch"/>
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn displayBorder = {true}>E56</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E16</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn><b><font color="red">E17</font></b></TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E55</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E5</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E11</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
            <TableRowColumn>E54</TableRowColumn>
            <TableRowColumn>
              <TextField
                hintText="Vertriebswunsch" />
            </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
          </TableRow>
            <TableRow>
              <TableRowColumn>E8</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E14</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>E19</TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Vertriebswunsch" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bedarf für WS" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Geplanter Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aktueller Lagerbestand" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Warteschlange" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Bearbeitung" />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Aufträge" />
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
