import { SET_ACTIVE_UPLOAD_RESULTS_XML_DATA } from '../Actions';

export default function upload(state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_UPLOAD_RESULTS_XML_DATA:
      return Object.assign({}, state, {
          activeUploadXMLData : action.activeUploadResultsXML
        });
    default:
      return state
  }
}