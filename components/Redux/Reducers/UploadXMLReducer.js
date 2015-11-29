import { SAVE_UPLOAD_RESULTS_XML, OVERRWRITE_UPLOAD_RESULTS_XML, REMOVE_UPLOAD_RESULTS_XML, SET_ACTIVE_UPLOAD_RESULTS_XML } from '../Actions';

export default function upload(state = [], action) {
  switch (action.type) {
    case SAVE_UPLOAD_RESULTS_XML:
      return [
        ...state,
        {
          id: "result_P" + action.uploadedResultsXML.results.$.period,
          uploadedResultsDataObject: action.uploadedResultsXML
        }
      ]
    case OVERRWRITE_UPLOAD_RESULTS_XML:
        var objectid = "result_P" + action.uploadedResultsXML.results.$.period
        const uploadedResultsXMLDeleted = state.filter(uploadResultXML =>
          uploadResultXML.id !== objectid
        )

        return [
        ...uploadedResultsXMLDeleted,
        {
          id: "result_P" + action.uploadedResultsXML.results.$.period,
          uploadedResultsDataObject: action.uploadedResultsXML
        }
      ]

    case REMOVE_UPLOAD_RESULTS_XML:
        return state.filter(uploadResultXML =>
          uploadResultXML.id !== action.id
        )

    case SET_ACTIVE_UPLOAD_RESULTS_XML:
        return [
        ...state,
        {
          activeUploadXMLID: action.id
        }
      ]
    default:
      return state
  }
}