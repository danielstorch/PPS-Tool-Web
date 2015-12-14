import {SAVE_INPUT_XML,SET_AUFTRAGSPLANUNG_DAMEN_INPUT_XML, SET_AUFTRAGSPLANUNG_HERREN_INPUT_XML, 
  SET_AUFTRAGSPLANUNG_KINDER_INPUT_XML, SET_KAPAZITAETSPLANUNG_INPUT_XML, SET_KAUFTEILDISPOSITION_INPUT_XML, 
  INIT_INPUT_XML , SET_INPUT_XML, RESET_AUFTRAGSPLANUNG_HERREN_INPUT_XML, RESET_AUFTRAGSPLANUNG_KINDER_INPUT_XML,
  RESET_AUFTRAGSPLANUNG_DAMEN_INPUT_XML} from '../Actions';

export default function InputXMLReducer(state = [], action) {
  switch (action.type) {
    case SAVE_INPUT_XML:
        return [
          ...state,
          {
            id: "input_P" + action.inputXML.results.$.period,
            inputDataObject: action.inputXML
          }
        ]
    case RESET_AUFTRAGSPLANUNG_DAMEN_INPUT_XML:
      return state.map(inputXML =>
          inputXML.id.substring(6) === action.id.substring(7) ?
            Object.assign({}, inputXML, inputXML.inputDataObject['auftragsDamenInputXML'] = []) :
            inputXML)
    case RESET_AUFTRAGSPLANUNG_HERREN_INPUT_XML:
      return state.map(inputXML =>
          inputXML.id.substring(6) === action.id.substring(7) ?
            Object.assign({}, inputXML, inputXML.inputDataObject['auftragsHerrenInputXML']= []) :
            inputXML)
    case RESET_AUFTRAGSPLANUNG_KINDER_INPUT_XML:
    return state.map(inputXML =>
          inputXML.id.substring(6) === action.id.substring(7) ?
            Object.assign({}, inputXML, inputXML.inputDataObject['auftragsKinderInputXML']= []) :
            inputXML)
    case SET_AUFTRAGSPLANUNG_DAMEN_INPUT_XML:
      return state.map(inputXML =>
          inputXML.id.substring(6) === action.id.substring(7) ?
            Object.assign({}, inputXML, inputXML.inputDataObject['auftragsDamenInputXML']= action.auftragsDamenInputXML) :
            inputXML)

    case SET_AUFTRAGSPLANUNG_HERREN_INPUT_XML:
      return state.map(inputXML =>
          inputXML.id.substring(6) === action.id.substring(7) ?
            Object.assign({}, inputXML, inputXML.inputDataObject['auftragsHerrenInputXML']= action.auftragsHerrenInputXML) :
            inputXML)
    case SET_AUFTRAGSPLANUNG_KINDER_INPUT_XML:
      return state.map(inputXML =>
          inputXML.id.substring(6) === action.id.substring(7) ?
            Object.assign({}, inputXML, inputXML.inputDataObject['auftragsKinderInputXML']= action.auftragsKinderInputXML) :
            inputXML)
    case SET_KAPAZITAETSPLANUNG_INPUT_XML:
    return Object.assign({}, state, {
        kapazitaetsplanungInputXMLData : action.kapazitaetsplanungInputXML
      });
    case SET_KAUFTEILDISPOSITION_INPUT_XML:
    return Object.assign({}, state, {
        kaufteildispositionInputXMLData : action.kaufteildispositionInputXML
      });
    default:
      return state
  }
}