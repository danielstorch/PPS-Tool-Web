

/*
 * InputXMLReducer action creators and types
 */
export const SET_AUFTRAGSPLANUNG_INPUT_XML = 'SET_AUFTRAGSPLANUNG_INPUT_XML'
export const SET_KAPAZITAETSPLANUNG_INPUT_XML = 'SET_KAPAZITAETSPLANUNG_INPUT_XML'
export const SET_KAUFTEILDISPOSITION_INPUT_XML = 'SET_KAUFTEILDISPOSITION_INPUT_XML'
export const INIT_INPUT_XML = 'INIT_INPUT_XML'
export const SET_INPUT_XML = 'SET_INPUT_XML'

export function setInitInputXML(inputId) {
  return { type: INIT_INPUT_XML, inputId}
}

export function setInputXML(inputXML){
	return { type: SET_INPUT_XML, inputXML}
}

export function setAuftragsplanungInputXML(auftragsInputXML) {
  return { type: SET_AUFTRAGSPLANUNG_INPUT_XML, auftragsInputXML}
}

export function setKapazitaetsplanungInputXML(kapazitaetsplanungInputXML) {
  return { type: SET_KAPAZITAETSPLANUNG_INPUT_XML, kapazitaetsplanungInputXML}
}

export function setKaufteildispositionInputXML(kaufteildispositionInputXML) {
  return { type: SET_KAUFTEILDISPOSITION_INPUT_XML, kaufteildispositionInputXML}
}


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
