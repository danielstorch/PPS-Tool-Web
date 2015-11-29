/*
 * action types
 */

export const SAVE_UPLOAD_RESULTS_XML = 'SAVE_UPLOAD_XML'
export const REMOVE_UPLOAD_RESULTS_XML = 'REMOVE_UPLOAD_RESULTS_XML'
export const OVERRWRITE_UPLOAD_RESULTS_XML = 'OVERRWRITE_UPLOAD_RESULTS_XML'
export const SET_ACTIVE_UPLOAD_RESULTS_XML = 'SET_ACTIVE_UPLOAD_RESULTS_XML'

/*
 * action creators
 */

export function saveUploadResultsXML(uploadedResultsXML) {
  return { type: SAVE_UPLOAD_RESULTS_XML, uploadedResultsXML }
}

export function removeUploadResultsXML(id) {
  return { type: REMOVE_UPLOAD_RESULTS_XML, id }
}

export function overrwriteUploadResultsXML(uploadedResultsXML) {
  return { type: OVERRWRITE_UPLOAD_RESULTS_XML, uploadedResultsXML }
}

export function setActiveUploadResultsXML(id) {
  return { type: SET_ACTIVE_UPLOAD_RESULTS_XML, id }
}