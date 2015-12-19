import React from 'react';
import './Gesamt.scss';
import mui from 'material-ui';
import _ from 'lodash'
import { connect } from 'react-redux';

var TableBody = mui.TableBody
  , TableHeader = mui.TableHeader
  , TableRow = mui.TableRow
  , Table = mui.Table
  , TableHeaderColumn = mui.TableHeaderColumn
  , TableRowColumn = mui.TableRowColumn
  , Dialog = mui.Dialog
  , Snackbar = mui.Snackbar
  , TextField = mui.TextField;


class Gesamt extends React.Component {
  constructor() {
    super();

    this.state = {
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
      height: '300px',
      P1: {
        P1: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P2: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P3: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        Summe: {
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0
        }
      },
      P2: {
        P1: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P2: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P3: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        Summe: {
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0
        }
      },
      P3: {
        P1: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P2: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P3: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        Summe: {
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0
        }
      },
      P4: {
        P1: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P2: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P3: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        Summe: {
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0
        }
      },
      P5: {
        P1: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P2: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P3: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        Summe: {
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0
        }
      },
      P6: {
        P1: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P2: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P3: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        Summe: {
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0
        }
      },
      P7: {
        P1: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P2: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        P3: {
          BedarfPeriode: 0,
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0,
          Lagerbestand: 0
        },
        Summe: {
          ProduktionLager: 0,
          ProduktionGesamt: 0,
          ProduktionAuftraege: 0
        }
      }
    };

  }

  _handleRequestClose(buttonClicked) {
    if (!buttonClicked && this.state.modal) return;
    this.setState({
      openDialogStandardActions: false
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

    return (
     <div>
      <h1>Auftragsplanung Gesamt</h1>
        <div>
              <div style={{ "width": "100%", "textAlign": "center" }}>
                <h3>Periode 1</h3>
              </div>
              <div>
                  <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    selectable={this.state.selectable}
                    >
                    <TableBody>
                    <TableHeader >
                      <TableRow selectable={this.state.selectable}>
                        <TableHeaderColumn colSpan="6" tooltip='Gesamt' style={{textAlign: 'center'}}>
                          Gesamt
                        </TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    </TableBody>

                    <TableBody displayRowCheckbox={this.state.displayRowCheckbox}>
                      <TableRow>
                        <TableRowColumn>
                        </TableRowColumn>
                        <TableRowColumn>
                          Lagerbestand
                        </TableRowColumn>
                        <TableRowColumn>
                          Bedarf in der Periode
                        </TableRowColumn>
                        <TableRowColumn>
                          Produktion für Aufträge
                        </TableRowColumn>
                        <TableRowColumn>
                        Produktion für Lager
                      </TableRowColumn>
                        <TableRowColumn>
                        Produktion gesamt
                      </TableRowColumn>
                      </TableRow>

                      <TableRow>
                        <TableRowColumn>
                          P1
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Lagerbestand"/>
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Bedarf in der Periode"/>
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Produktion für Aufträge"/>
                        </TableRowColumn>
                        <TableRowColumn>
                        <TextField
                              hintText="Produktion für Lage"/>
                      </TableRowColumn>
                        <TableRowColumn>
                        <TextField
                              hintText="Produktion gesamt"/>
                      </TableRowColumn>
                      </TableRow>

                      <TableRow>
                        <TableRowColumn>
                          P2
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Lagerbestand"/>
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Bedarf in der Periode"/>
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Produktion für Aufträge"/>
                        </TableRowColumn>
                        <TableRowColumn>
                        <TextField
                              hintText="Produktion für Lage"/>
                      </TableRowColumn>
                        <TableRowColumn>
                        <TextField
                              hintText="Produktion gesamt"/>
                      </TableRowColumn>
                      </TableRow>

                      <TableRow>
                        <TableRowColumn>
                          P3
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Lagerbestand"/>
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Bedarf in der Periode"/>
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Produktion für Aufträge"/>
                        </TableRowColumn>
                        <TableRowColumn>
                        <TextField
                              hintText="Produktion für Lage"/>
                      </TableRowColumn>
                        <TableRowColumn>
                        <TextField
                              hintText="Produktion gesamt"/>
                      </TableRowColumn>
                      </TableRow>

                      <TableRow>
                        <TableRowColumn>
                          Summe
                        </TableRowColumn>
                        <TableRowColumn>
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Bedarf in der Periode"/>
                        </TableRowColumn>
                        <TableRowColumn>
                          <TextField
                              hintText="Produktion für Aufträge"/>
                        </TableRowColumn>
                        <TableRowColumn>
                        <TextField
                              hintText="Produktion für Lage"/>
                      </TableRowColumn>
                        <TableRowColumn>
                        <TextField
                              hintText="Produktion gesamt"/>
                      </TableRowColumn>
                      </TableRow>

                    </TableBody>
                  </Table>
              </div>
        </div>
      <div>
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

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Gesamt)
