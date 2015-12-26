// components/App.js
 
import React, { PropTypes } from 'react';
import mui from 'material-ui';
import { connect } from 'react-redux';
import './Download.scss';
import Link from '../Link';

import update from 'react/lib/update';
import Card from './Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import xml2js from 'xml2js';

var RaisedButton = mui.RaisedButton;

const style = {
  width: 400,
  textAlign: "center"
};
 
@DragDropContext(HTML5Backend)
class Downlaod extends React.Component {

  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this._downloadXML = this._downloadXML.bind(this);
    this.state = {
      cards: [{
        id: 1,
        text: 'Write a cool JS library'
      }, {
        id: 2,
        text: 'Make it generic enough'
      }, {
        id: 3,
        text: 'Write README'
      }, {
        id: 4,
        text: 'Create some examples'
      }, {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
      }, {
        id: 6,
        text: '???'
      }, {
        id: 7,
        text: 'PROFIT'
      }]
    };
  }

 
  _downloadXML(){
    var prof = {};

    var builder = new xml2js.Builder({rootName:'profiles'});
    var profiles = builder.buildObject(prof);

    console.log(profiles); // <-- show me the XML
    // var url='../documenten/Master-File.xls';    
    window.open(profiles,'Download');  

  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  }

  render() {
    const { cards } = this.state;

    console.log(cards)

    return (
      <div className="wrapperdownload">

      <h1>Export Xml</h1>
          
          <RaisedButton style={{"margin": "10px"}} label="Secondary" secondary={true} label="Add Order" />
          <div style={style}>
            {cards.map((card, i) => {
              return (
                <Card key={card.id}
                      index={i}
                      id={card.id}
                      text={card.text}
                      moveCard={this.moveCard} />
              );
            })}
          
          </div>
        <RaisedButton label="Secondary" secondary={true} label="Download" onTouchTap={this._downloadXML}/>
        
      </div>
    );
  }
 
}

function mapStateToProps(state) {
  return {
    ActiveUploadXML: state.ActiveUploadXMLReducer,
    InputXMLs: state.InputXMLReducer,
    internationalReducer: state.internationalReducer
  }
}

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Downlaod)
