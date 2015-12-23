import React from 'react';
import './Kapazitaetsplanung.scss';
import mui from 'material-ui';
import _ from 'lodash'
import { connect } from 'react-redux';
import { setKapazitaetsplanungInputXML } from '../Redux/Actions';

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



class Kapazitaetsplanung extends React.Component {
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
      height: '1500px',


      Auftragsmenge:{E4: 50,
        E5: 0,
        E6: 100,
        E7: 0,
        E8: 0,
        E9: 100,
        E10: 50,
        E11: 0,
        E12: 100,
        E13: 0,
        E14: 0,
        E15: 100,
        E16: 250,
        E17: 250,
        E18: 0,
        E19: 0,
        E20: 100,
        E26: 300,
        E49: 50,
        E54: 0,
        E29: 150,
        E50: 100,
        E55: 100,
        E30: 100,
        E51: 100,
        E56: 100,
        E31: 100,
        P1: 100,
        P2: 100,
        P3: 150},

      Arbeitsplatz1:{
        E49:0,
        E54:0,
        E29:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:60,
        RüstVorgänge:1,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz2:{
        E50:0,
        E55:0,
        E30:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:80,
        RüstVorgänge:1.4,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz3:{
        E51:0,
        E56:0,
        E31:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:60,
        RüstVorgänge:1.67,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz4:{
        P1:0,
        P2:0,
        P3:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:80,
        RüstVorgänge:1,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz6:{
        E16:0,
        E18:0,
        E19:0,
        E20:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:60,
        RüstVorgänge:1,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz7:{
        E10:0,
        E11:0,
        E12:0,
        E13:0,
        E14:0,
        E15:0,
        E18:0,
        E19:0,
        E20:0,
        E26:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:200,
        RüstVorgänge:3,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz8:{
        E10:0,
        E11:0,
        E12:0,
        E13:0,
        E14:0,
        E15:0,
        E18:0,
        E19:0,
        E20:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:135,
        RüstVorgänge:2.67,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz9:{
        E10:0,
        E11:0,
        E12:0,
        E13:0,
        E14:0,
        E15:0,
        E18:0,
        E19:0,
        E20:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:135,
        RüstVorgänge:1,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz10:{
        E4:0,
        E5:0,
        E6:0,
        E7:0,
        E8:0,
        E9:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:120,
        RüstVorgänge:1,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz11:{
        E10:0,
        E11:0,
        E12:0,
        E13:0,
        E14:0,
        E15:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:120,
        RüstVorgänge:1,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz12:{
        E10:0,
        E11:0,
        E12:0,
        E13:0,
        E14:0,
        E15:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:0,
        RüstVorgänge:0,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz13:{
        E10:0,
        E11:0,
        E12:0,
        E13:0,
        E14:0,
        E15:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:0,
        RüstVorgänge:0,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz14:{
        E16:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:0,
        RüstVorgänge:0,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},

      Arbeitsplatz15:{
        E17:0,
        E26:0,
        Kapazitätsbedarf:0,
        RüstzeitVorgang:30,
        RüstVorgänge:7,
        RüstzeitGesamt:0,
        Warteschlange:0,
        Gesamtkapazitätbedarf:0,
        Schichten:0,
        Überstunden:0},


    };

  }

  _updateVariables(){
    console.log('_updateVariables Method');

    this.state.Arbeitsplatz1.E49 = 6* this.state.Auftragsmenge.E49;
    this.state.Arbeitsplatz1.E54 = 6* this.state.Auftragsmenge.E54;
    this.state.Arbeitsplatz1.E29 = 6* this.state.Auftragsmenge.E29;

    this.state.Arbeitsplatz2.E50 = 5* this.state.Auftragsmenge.E50;
    this.state.Arbeitsplatz2.E55 = 5* this.state.Auftragsmenge.E55;
    this.state.Arbeitsplatz2.E30 = 5* this.state.Auftragsmenge.E30;

    this.state.Arbeitsplatz3.E51 = 5* this.state.Auftragsmenge.E51;
    this.state.Arbeitsplatz3.E56 = 6* this.state.Auftragsmenge.E56;
    this.state.Arbeitsplatz3.E31 = 6* this.state.Auftragsmenge.E31;

    this.state.Arbeitsplatz4.P1 = 6* this.state.Auftragsmenge.P1;
    this.state.Arbeitsplatz4.P2 = 7* this.state.Auftragsmenge.P2;
    this.state.Arbeitsplatz4.P3 = 7* this.state.Auftragsmenge.P3;

    this.state.Arbeitsplatz6.E16 = 2* this.state.Auftragsmenge.E16;
    this.state.Arbeitsplatz6.E18 = 3* this.state.Auftragsmenge.E18;
    this.state.Arbeitsplatz6.E19 = 3* this.state.Auftragsmenge.E19;
    this.state.Arbeitsplatz6.E20 = 3* this.state.Auftragsmenge.E20;

    this.state.Arbeitsplatz7.E10 = 2* this.state.Auftragsmenge.E10;
    this.state.Arbeitsplatz7.E11 = 2* this.state.Auftragsmenge.E11;
    this.state.Arbeitsplatz7.E12 = 2* this.state.Auftragsmenge.E12;
    this.state.Arbeitsplatz7.E13 = 2* this.state.Auftragsmenge.E13;
    this.state.Arbeitsplatz7.E14 = 2* this.state.Auftragsmenge.E14;
    this.state.Arbeitsplatz7.E15 = 2* this.state.Auftragsmenge.E15;
    this.state.Arbeitsplatz7.E18 = 2* this.state.Auftragsmenge.E18;
    this.state.Arbeitsplatz7.E19 = 2* this.state.Auftragsmenge.E19;
    this.state.Arbeitsplatz7.E20 = 2* this.state.Auftragsmenge.E20;
    this.state.Arbeitsplatz7.E26 = 2* this.state.Auftragsmenge.E26;

    this.state.Arbeitsplatz8.E10 = this.state.Auftragsmenge.E10;
    this.state.Arbeitsplatz8.E11 = 2* this.state.Auftragsmenge.E11;
    this.state.Arbeitsplatz8.E12 = 2* this.state.Auftragsmenge.E12;
    this.state.Arbeitsplatz8.E13 = this.state.Auftragsmenge.E13;
    this.state.Arbeitsplatz8.E14 = 2* this.state.Auftragsmenge.E14;
    this.state.Arbeitsplatz8.E15 = 2* this.state.Auftragsmenge.E15;
    this.state.Arbeitsplatz8.E18 = 3* this.state.Auftragsmenge.E18;
    this.state.Arbeitsplatz8.E19 = 3* this.state.Auftragsmenge.E19;
    this.state.Arbeitsplatz8.E20 = 3* this.state.Auftragsmenge.E20;

    this.state.Arbeitsplatz9.E10 = 3* this.state.Auftragsmenge.E10;
    this.state.Arbeitsplatz9.E11 = 3* this.state.Auftragsmenge.E11;
    this.state.Arbeitsplatz9.E12 = 3* this.state.Auftragsmenge.E12;
    this.state.Arbeitsplatz9.E13 = 3* this.state.Auftragsmenge.E13;
    this.state.Arbeitsplatz9.E14 = 3* this.state.Auftragsmenge.E14;
    this.state.Arbeitsplatz9.E15 = 3* this.state.Auftragsmenge.E15;
    this.state.Arbeitsplatz9.E18 = 2* this.state.Auftragsmenge.E18;
    this.state.Arbeitsplatz9.E19 = 2* this.state.Auftragsmenge.E19;
    this.state.Arbeitsplatz9.E20 = 2* this.state.Auftragsmenge.E20;

    this.state.Arbeitsplatz10.E4 = 4* this.state.Auftragsmenge.E4;
    this.state.Arbeitsplatz10.E5 = 4* this.state.Auftragsmenge.E5;
    this.state.Arbeitsplatz10.E6 = 4* this.state.Auftragsmenge.E6;
    this.state.Arbeitsplatz10.E7 = 4* this.state.Auftragsmenge.E7;
    this.state.Arbeitsplatz10.E8 = 4* this.state.Auftragsmenge.E8;
    this.state.Arbeitsplatz10.E9 = 4* this.state.Auftragsmenge.E9;

    this.state.Arbeitsplatz11.E4 = 3* this.state.Auftragsmenge.E4;
    this.state.Arbeitsplatz11.E5 = 3* this.state.Auftragsmenge.E5;
    this.state.Arbeitsplatz11.E6 = 3* this.state.Auftragsmenge.E6;
    this.state.Arbeitsplatz11.E7 = 3* this.state.Auftragsmenge.E7;
    this.state.Arbeitsplatz11.E8 = 3* this.state.Auftragsmenge.E8;
    this.state.Arbeitsplatz11.E9 = 3* this.state.Auftragsmenge.E9;

    this.state.Arbeitsplatz12.E10 = 3* this.state.Auftragsmenge.E10;
    this.state.Arbeitsplatz12.E11 = 3* this.state.Auftragsmenge.E11;
    this.state.Arbeitsplatz12.E12 = 3* this.state.Auftragsmenge.E12;
    this.state.Arbeitsplatz12.E13 = 3* this.state.Auftragsmenge.E13;
    this.state.Arbeitsplatz12.E14 = 3* this.state.Auftragsmenge.E14;
    this.state.Arbeitsplatz12.E15 = 3* this.state.Auftragsmenge.E15;

    this.state.Arbeitsplatz13.E10 = 2* this.state.Auftragsmenge.E10;
    this.state.Arbeitsplatz13.E11 = 2* this.state.Auftragsmenge.E11;
    this.state.Arbeitsplatz13.E12 = 2* this.state.Auftragsmenge.E12;
    this.state.Arbeitsplatz13.E13 = 2* this.state.Auftragsmenge.E13;
    this.state.Arbeitsplatz13.E14 = 2* this.state.Auftragsmenge.E14;
    this.state.Arbeitsplatz13.E15 = 2* this.state.Auftragsmenge.E15;

    this.state.Arbeitsplatz14.E16 = 3* this.state.Auftragsmenge.E16;

    this.state.Arbeitsplatz15.E17 = 3* this.state.Auftragsmenge.E17;
    this.state.Arbeitsplatz15.E26 = 3* this.state.Auftragsmenge.E26;

    this.state.Arbeitsplatz1.Kapazitätsbedarf = this.state.Arbeitsplatz1.E29 + this.state.Arbeitsplatz1.E49 + this.state.Arbeitsplatz1.E54;
    this.state.Arbeitsplatz2.Kapazitätsbedarf = this.state.Arbeitsplatz2.E30 + this.state.Arbeitsplatz2.E50 + this.state.Arbeitsplatz2.E55;
    this.state.Arbeitsplatz3.Kapazitätsbedarf = this.state.Arbeitsplatz3.E31 + this.state.Arbeitsplatz3.E51 + this.state.Arbeitsplatz3.E56;
    this.state.Arbeitsplatz4.Kapazitätsbedarf = this.state.Arbeitsplatz4.P1 + this.state.Arbeitsplatz4.P2 + this.state.Arbeitsplatz4.P3;

    this.state.Arbeitsplatz6.Kapazitätsbedarf = this.state.Arbeitsplatz6.E16 + this.state.Arbeitsplatz6.E18 + this.state.Arbeitsplatz6.E19 + this.state.Arbeitsplatz6.E20;
    this.state.Arbeitsplatz7.Kapazitätsbedarf = this.state.Arbeitsplatz7.E10 + this.state.Arbeitsplatz7.E11 + this.state.Arbeitsplatz7.E12 + this.state.Arbeitsplatz7.E13 + this.state.Arbeitsplatz7.E14 + this.state.Arbeitsplatz7.E15 + this.state.Arbeitsplatz7.E18 + this.state.Arbeitsplatz7.E19 + this.state.Arbeitsplatz7.E20 + this.state.Arbeitsplatz7.E26;
    this.state.Arbeitsplatz8.Kapazitätsbedarf = this.state.Arbeitsplatz8.E10 + this.state.Arbeitsplatz8.E11 + this.state.Arbeitsplatz8.E12 + this.state.Arbeitsplatz8.E13 + this.state.Arbeitsplatz8.E14 + this.state.Arbeitsplatz8.E15 + this.state.Arbeitsplatz8.E18 + this.state.Arbeitsplatz8.E19 + this.state.Arbeitsplatz8.E20;
    this.state.Arbeitsplatz9.Kapazitätsbedarf = this.state.Arbeitsplatz9.E10 + this.state.Arbeitsplatz9.E11 + this.state.Arbeitsplatz9.E12 + this.state.Arbeitsplatz9.E13 + this.state.Arbeitsplatz9.E14 + this.state.Arbeitsplatz9.E15 + this.state.Arbeitsplatz9.E18 + this.state.Arbeitsplatz9.E19 + this.state.Arbeitsplatz9.E20;

    this.state.Arbeitsplatz10.Kapazitätsbedarf = this.state.Arbeitsplatz10.E4 + this.state.Arbeitsplatz10.E5 + this.state.Arbeitsplatz10.E6 + this.state.Arbeitsplatz10.E7 + this.state.Arbeitsplatz10.E8 + this.state.Arbeitsplatz10.E9;
    this.state.Arbeitsplatz11.Kapazitätsbedarf = this.state.Arbeitsplatz11.E4 + this.state.Arbeitsplatz11.E5 + this.state.Arbeitsplatz11.E6 + this.state.Arbeitsplatz11.E7 + this.state.Arbeitsplatz11.E8 + this.state.Arbeitsplatz11.E9;

    this.state.Arbeitsplatz12.Kapazitätsbedarf = this.state.Arbeitsplatz12.E10 + this.state.Arbeitsplatz12.E11 + this.state.Arbeitsplatz12.E12 + this.state.Arbeitsplatz12.E13 + this.state.Arbeitsplatz12.E14 + this.state.Arbeitsplatz12.E15;
    this.state.Arbeitsplatz13.Kapazitätsbedarf = this.state.Arbeitsplatz13.E10 + this.state.Arbeitsplatz13.E11 + this.state.Arbeitsplatz13.E12 + this.state.Arbeitsplatz13.E13 + this.state.Arbeitsplatz13.E14 + this.state.Arbeitsplatz13.E15;

    this.state.Arbeitsplatz14.Kapazitätsbedarf = this.state.Arbeitsplatz14.E16;
    this.state.Arbeitsplatz15.Kapazitätsbedarf = this.state.Arbeitsplatz15.E17 + this.state.Arbeitsplatz15.E26;

    this.state.Arbeitsplatz1.RüstzeitGesamt = this.state.Arbeitsplatz1.RüstzeitVorgang * this.state.Arbeitsplatz1.RüstVorgänge;
    this.state.Arbeitsplatz2.RüstzeitGesamt = this.state.Arbeitsplatz2.RüstzeitVorgang * this.state.Arbeitsplatz2.RüstVorgänge;
    this.state.Arbeitsplatz3.RüstzeitGesamt = this.state.Arbeitsplatz3.RüstzeitVorgang * this.state.Arbeitsplatz3.RüstVorgänge;
    this.state.Arbeitsplatz4.RüstzeitGesamt = this.state.Arbeitsplatz4.RüstzeitVorgang * this.state.Arbeitsplatz4.RüstVorgänge;
    this.state.Arbeitsplatz6.RüstzeitGesamt = this.state.Arbeitsplatz6.RüstzeitVorgang * this.state.Arbeitsplatz6.RüstVorgänge;
    this.state.Arbeitsplatz7.RüstzeitGesamt = this.state.Arbeitsplatz7.RüstzeitVorgang * this.state.Arbeitsplatz7.RüstVorgänge;
    this.state.Arbeitsplatz8.RüstzeitGesamt = this.state.Arbeitsplatz8.RüstzeitVorgang * this.state.Arbeitsplatz8.RüstVorgänge;
    this.state.Arbeitsplatz9.RüstzeitGesamt = this.state.Arbeitsplatz9.RüstzeitVorgang * this.state.Arbeitsplatz9.RüstVorgänge;
    this.state.Arbeitsplatz10.RüstzeitGesamt = this.state.Arbeitsplatz10.RüstzeitVorgang * this.state.Arbeitsplatz10.RüstVorgänge;
    this.state.Arbeitsplatz11.RüstzeitGesamt = this.state.Arbeitsplatz11.RüstzeitVorgang * this.state.Arbeitsplatz11.RüstVorgänge;
    this.state.Arbeitsplatz12.RüstzeitGesamt = this.state.Arbeitsplatz12.RüstzeitVorgang * this.state.Arbeitsplatz12.RüstVorgänge;
    this.state.Arbeitsplatz13.RüstzeitGesamt = this.state.Arbeitsplatz13.RüstzeitVorgang * this.state.Arbeitsplatz13.RüstVorgänge;
    this.state.Arbeitsplatz14.RüstzeitGesamt = this.state.Arbeitsplatz14.RüstzeitVorgang * this.state.Arbeitsplatz14.RüstVorgänge;
    this.state.Arbeitsplatz15.RüstzeitGesamt = this.state.Arbeitsplatz15.RüstzeitVorgang * this.state.Arbeitsplatz15.RüstVorgänge;


    this.state.Arbeitsplatz1.Gesamtkapazitätbedarf = this.state.Arbeitsplatz1.Kapazitätsbedarf + this.state.Arbeitsplatz1.RüstzeitGesamt + this.state.Arbeitsplatz1.Warteschlange;
    this.state.Arbeitsplatz2.Gesamtkapazitätbedarf = this.state.Arbeitsplatz2.Kapazitätsbedarf + this.state.Arbeitsplatz2.RüstzeitGesamt + this.state.Arbeitsplatz2.Warteschlange;
    this.state.Arbeitsplatz3.Gesamtkapazitätbedarf = this.state.Arbeitsplatz3.Kapazitätsbedarf + this.state.Arbeitsplatz3.RüstzeitGesamt + this.state.Arbeitsplatz3.Warteschlange;
    this.state.Arbeitsplatz4.Gesamtkapazitätbedarf = this.state.Arbeitsplatz4.Kapazitätsbedarf + this.state.Arbeitsplatz4.RüstzeitGesamt + this.state.Arbeitsplatz4.Warteschlange;
    this.state.Arbeitsplatz6.Gesamtkapazitätbedarf = this.state.Arbeitsplatz6.Kapazitätsbedarf + this.state.Arbeitsplatz6.RüstzeitGesamt + this.state.Arbeitsplatz6.Warteschlange;
    this.state.Arbeitsplatz7.Gesamtkapazitätbedarf = this.state.Arbeitsplatz7.Kapazitätsbedarf + this.state.Arbeitsplatz7.RüstzeitGesamt + this.state.Arbeitsplatz7.Warteschlange;
    this.state.Arbeitsplatz8.Gesamtkapazitätbedarf = this.state.Arbeitsplatz8.Kapazitätsbedarf + this.state.Arbeitsplatz8.RüstzeitGesamt + this.state.Arbeitsplatz8.Warteschlange;
    this.state.Arbeitsplatz9.Gesamtkapazitätbedarf = this.state.Arbeitsplatz9.Kapazitätsbedarf + this.state.Arbeitsplatz9.RüstzeitGesamt + this.state.Arbeitsplatz9.Warteschlange;
    this.state.Arbeitsplatz10.Gesamtkapazitätbedarf = this.state.Arbeitsplatz10.Kapazitätsbedarf + this.state.Arbeitsplatz10.RüstzeitGesamt + this.state.Arbeitsplatz10.Warteschlange;
    this.state.Arbeitsplatz11.Gesamtkapazitätbedarf = this.state.Arbeitsplatz11.Kapazitätsbedarf + this.state.Arbeitsplatz11.RüstzeitGesamt + this.state.Arbeitsplatz11.Warteschlange;
    this.state.Arbeitsplatz12.Gesamtkapazitätbedarf = this.state.Arbeitsplatz12.Kapazitätsbedarf + this.state.Arbeitsplatz12.RüstzeitGesamt + this.state.Arbeitsplatz12.Warteschlange;
    this.state.Arbeitsplatz13.Gesamtkapazitätbedarf = this.state.Arbeitsplatz13.Kapazitätsbedarf + this.state.Arbeitsplatz13.RüstzeitGesamt + this.state.Arbeitsplatz13.Warteschlange;
    this.state.Arbeitsplatz14.Gesamtkapazitätbedarf = this.state.Arbeitsplatz14.Kapazitätsbedarf + this.state.Arbeitsplatz14.RüstzeitGesamt + this.state.Arbeitsplatz14.Warteschlange;
    this.state.Arbeitsplatz15.Gesamtkapazitätbedarf = this.state.Arbeitsplatz15.Kapazitätsbedarf + this.state.Arbeitsplatz15.RüstzeitGesamt + this.state.Arbeitsplatz15.Warteschlange;
  }

  render(){

    this._updateVariables();
    return (
      <div>
        <h1>Auftragsplanung Kapazitaetsplanung-Fahrrad</h1>

        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          >
          <TableBody>
            <TableHeader >
              <TableRow selectable={this.state.selectable}>
                <TableHeaderColumn colSpan="7" tooltip='Kapazitaetsplanung Fahrrad' style={{textAlign: 'center'}}>
                  Kapazitaetsplanung Fahrrad
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
          </TableBody>

          <TableBody displayRowCheckbox={this.state.displayRowCheckbox}>
            <TableRow>
              <TableRowColumn>
                Bezeichnung
              </TableRowColumn>
              <TableRowColumn>
                Teile-Art
              </TableRowColumn>
              <TableRowColumn>
                Sach-Nr
              </TableRowColumn>
              <TableRowColumn>
                Auftragsmenge
              </TableRowColumn>
              <TableRowColumn>
                1
              </TableRowColumn>
              <TableRowColumn>
                2
              </TableRowColumn>
              <TableRowColumn>
                3
              </TableRowColumn>
              <TableRowColumn>
                4
              </TableRowColumn>
              <TableRowColumn>
                5
              </TableRowColumn>
              <TableRowColumn>
                6
              </TableRowColumn>
              <TableRowColumn>
                7
              </TableRowColumn>
              <TableRowColumn>
                8
              </TableRowColumn>
              <TableRowColumn>
                9
              </TableRowColumn>
              <TableRowColumn>
                10
              </TableRowColumn>
              <TableRowColumn>
                11
              </TableRowColumn>
              <TableRowColumn>
                12
              </TableRowColumn>
              <TableRowColumn>
                13
              </TableRowColumn>
              <TableRowColumn>
                14
              </TableRowColumn>
              <TableRowColumn>
                15
              </TableRowColumn>

            </TableRow>



            //Hinterrad
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                K
              </TableRowColumn>
              <TableRowColumn>
                E4
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E4}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.E4}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.E4}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                Hinterrad
              </TableRowColumn>
              <TableRowColumn>
                D
              </TableRowColumn>
              <TableRowColumn>
                E5
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E5}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.E5}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.E5}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow iconClassName="TableRow-bottom-border">
              <TableRowColumn iconClassName="TableRow-bottom-border">

              </TableRowColumn>
              <TableRowColumn  iconClassName="TableRow-bottom-border">
                H
              </TableRowColumn>
              <TableRowColumn>
                E6
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E6}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.E6}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.E6}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>

            //Vorderrad
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                K
              </TableRowColumn>
              <TableRowColumn>
                E7
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E7}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.E7}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.E7}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                Vorderrad
              </TableRowColumn>
              <TableRowColumn>
                D
              </TableRowColumn>
              <TableRowColumn>
                E8
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E8}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.E8}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.E8}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                H
              </TableRowColumn>
              <TableRowColumn>
                E9
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E9}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.E9}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.E9}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>


            //Schutzblech hinten
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                K
              </TableRowColumn>
              <TableRowColumn>
                E10
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E10}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E10}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.E10}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.E10}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.E10}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.E10}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                Schutzblech hinten
              </TableRowColumn>
              <TableRowColumn>
                D
              </TableRowColumn>
              <TableRowColumn>
                E11
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E11}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E11}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.E11}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.E11}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.E11}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.E11}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                H
              </TableRowColumn>
              <TableRowColumn>
                E12
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E12}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E12}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.E12}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.E12}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.E12}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.E12}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>

            //Schutzblech vorne
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                K
              </TableRowColumn>
              <TableRowColumn>
                E13
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E13}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E13}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.E13}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.E13}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.E13}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.E13}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                Schutzblech vorne
              </TableRowColumn>
              <TableRowColumn>
                D
              </TableRowColumn>
              <TableRowColumn>
                E14
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E14}

              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E14}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.E14}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.E14}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.E14}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.E14}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                H
              </TableRowColumn>
              <TableRowColumn>
                E15
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E15}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E15}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.E15}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.E15}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.E15}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.E15}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>


            //Lenker
            <TableRow>
              <TableRowColumn>
                Lenker
              </TableRowColumn>
              <TableRowColumn>
                KDH
              </TableRowColumn>
              <TableRowColumn>
                E16
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E16}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.E16}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz14.E16}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>

            //Sattel
            <TableRow>
              <TableRowColumn>
                Sattel
              </TableRowColumn>
              <TableRowColumn>
                KDH
              </TableRowColumn>
              <TableRowColumn>
                E17
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E17}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.E17}
              </TableRowColumn>
            </TableRow>

            //Rahmen
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                K
              </TableRowColumn>
              <TableRowColumn>
                E18
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E18}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.E18}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E18}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.E18}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.E18}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                Rahmen
              </TableRowColumn>
              <TableRowColumn>
                D
              </TableRowColumn>
              <TableRowColumn>
                E19
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E19}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.E19}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E19}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.E19}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.E19}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                H
              </TableRowColumn>
              <TableRowColumn>
                E20
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E20}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.E20}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E20}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.E20}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.E20}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>

            //Pedale
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                KDH
              </TableRowColumn>
              <TableRowColumn>
                E26
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E26}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.E26}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.E26}
              </TableRowColumn>
            </TableRow>

            //Vorderrad komplett
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                K
              </TableRowColumn>
              <TableRowColumn>
                E49
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E49}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.E49}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                Rahmen
              </TableRowColumn>
              <TableRowColumn>
                D
              </TableRowColumn>
              <TableRowColumn>
                E54
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E54}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.E54}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                H
              </TableRowColumn>
              <TableRowColumn>
                E29
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E29}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.E29}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>


            //Rahmen und Räder
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                K
              </TableRowColumn>
              <TableRowColumn>
                E50
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E50}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.E50}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                Rahmen und Räder
              </TableRowColumn>
              <TableRowColumn>
                D
              </TableRowColumn>
              <TableRowColumn>
                E55
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E55}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.E55}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                H
              </TableRowColumn>
              <TableRowColumn>
                E30
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E30}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.E30}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>

            //Fahrrad ohne Pedale
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                K
              </TableRowColumn>
              <TableRowColumn>
                E51
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E51}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.E51}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                Fahrrad ohne Pedal
              </TableRowColumn>
              <TableRowColumn>
                D
              </TableRowColumn>
              <TableRowColumn>
                E56
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E56}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.E56}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                H
              </TableRowColumn>
              <TableRowColumn>
                E31
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.E31}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.E31}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>



            //Fahrrad komplett
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                K
              </TableRowColumn>
              <TableRowColumn>
                P1
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.P1}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.P1}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                Fahrrad komplett
              </TableRowColumn>
              <TableRowColumn>
                D
              </TableRowColumn>
              <TableRowColumn>
                P2
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.P2}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.P2}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>

              </TableRowColumn>
              <TableRowColumn>
                H
              </TableRowColumn>
              <TableRowColumn>
                P3
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Auftragsmenge.P3}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.P3}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
            </TableRow>

            //Kapazitätsplanung (neu)
            <TableRow>
              <TableRowColumn>
                Kapazitätsplanung (neu)
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz14.Kapazitätsbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.Kapazitätsbedarf}
              </TableRowColumn>

          </TableRow>


            //Rüstzeit pro Vorgang
            <TableRow>
              <TableRowColumn>
              Rüstzeit pro Vorgang
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz14.RüstzeitVorgang}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.RüstzeitVorgang}
              </TableRowColumn>
            </TableRow>

            //Rüstungsvorgänge
            <TableRow>
              <TableRowColumn>
                Rüstungsvorgänge
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz14.RüstVorgänge}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.RüstVorgänge}
              </TableRowColumn>
            </TableRow>

            //Rüstzeit Gesamt
            <TableRow>
              <TableRowColumn>
                Rüstzeit Gesamt
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz14.RüstzeitGesamt}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.RüstzeitGesamt}
              </TableRowColumn>
            </TableRow>

            //Warteschlange
            <TableRow>
              <TableRowColumn>
                Warteschlange
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz14.Warteschlange}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.Warteschlange}
              </TableRowColumn>
            </TableRow>

            //Gesamtkapazitätsbedarf
            <TableRow>
              <TableRowColumn>
                Gesamtkapazitätsbedarf
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz14.Gesamtkapazitätbedarf}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.Gesamtkapazitätbedarf}
              </TableRowColumn>
            </TableRow>

            //Schichten
            <TableRow>
              <TableRowColumn>
                Schichten
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.Schichten}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz14.Schichten}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.Schichten}
              </TableRowColumn>
            </TableRow>

            //Überstunden
            <TableRow>
              <TableRowColumn>
                Überstunden
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz1.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz2.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz3.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz4.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz6.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz7.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz8.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz9.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz10.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz11.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz12.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz13.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz14.Überstunden}
              </TableRowColumn>
              <TableRowColumn>
                {this.state.Arbeitsplatz15.Überstunden}
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

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Kapazitaetsplanung)
