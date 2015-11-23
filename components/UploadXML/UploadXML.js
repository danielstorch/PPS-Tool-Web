import React from 'react';
import './UploadXML.scss';
import Dropzone from 'react-dropzone'


export default class UploadXML extends React.Component {
 
  constructor() {
    super();
  }

  _onDrop(files) {
      console.log('Received files: ', files);
    }

  render() {
    return (
      <div>
            <Dropzone onDrop={this._onDrop} multiple={false}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
      </div>
    );
  }
 
}