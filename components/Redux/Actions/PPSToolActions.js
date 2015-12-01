

/*
 * ActiveUploadXMLReducer action creators and types
 */
export const SET_ACTIVE_UPLOAD_RESULTS_XML_DATA = 'SET_ACTIVE_UPLOAD_RESULTS_XML_DATA'

export function setActiveUploadResultsXMLData(activeUploadResultsXML) {
  return { type: SET_ACTIVE_UPLOAD_RESULTS_XML_DATA, activeUploadResultsXML}
}
/*
 * Navigation action creators and types
 */
export const CLOSE_OPEN_NAV_LEFT = 'CLOSE_OPEN_NAV_LEFT'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export function closeOpenNavLeft(trueOrFalseValue) {
  return { type: CLOSE_OPEN_NAV_LEFT, trueOrFalseValue}
}

export function setCurrentPage(newPage) {
  return { type: SET_CURRENT_PAGE, newPage}
}

/*
 * UploadXMLReducer action creators and types
 */

export const SAVE_UPLOAD_RESULTS_XML = 'SAVE_UPLOAD_XML'
export const REMOVE_UPLOAD_RESULTS_XML = 'REMOVE_UPLOAD_RESULTS_XML'
export const OVERRWRITE_UPLOAD_RESULTS_XML = 'OVERRWRITE_UPLOAD_RESULTS_XML'


export function saveUploadResultsXML(uploadedResultsXML) {
  return { type: SAVE_UPLOAD_RESULTS_XML, uploadedResultsXML }
}

export function removeUploadResultsXML(id) {
  return { type: REMOVE_UPLOAD_RESULTS_XML, id }
}

export function overrwriteUploadResultsXML(uploadedResultsXML) {
  return { type: OVERRWRITE_UPLOAD_RESULTS_XML, uploadedResultsXML }
}
