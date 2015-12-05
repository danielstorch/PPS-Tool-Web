import { SET_ACTIVE_UPLOAD_RESULTS_XML_DATA } from '../Actions';


const initialState = {
	activeUploadXMLData : {id: 'result_P-1'}
  }

export default function ActiveUploadXMLReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_UPLOAD_RESULTS_XML_DATA:
      return Object.assign({}, state, {
          activeUploadXMLData : action.activeUploadResultsXML
        });
    default:
      return state
  }
}