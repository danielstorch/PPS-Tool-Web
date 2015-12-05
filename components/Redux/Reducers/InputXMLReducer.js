import {SET_AUFTRAGSPLANUNG_DAMEN_INPUT_XML, SET_AUFTRAGSPLANUNG_HERREN_INPUT_XML, SET_AUFTRAGSPLANUNG_KINDER_INPUT_XML, SET_KAPAZITAETSPLANUNG_INPUT_XML, SET_KAUFTEILDISPOSITION_INPUT_XML, INIT_INPUT_XML , SET_INPUT_XML} from '../Actions';


const initialState = [{ 
      id : 'result_P-1',
      inputDataObject: {
        auftragsplanungInputXMLData : {
          Damen: {},
          Herren: {},
          Kinder: {}
        },
        kapazitaetsplanungInputXMLData: {},
        kaufteildispositionInputXMLData: {}
      }
    }]

export default function InputXMLReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_INPUT_XML:
      return [
        ...state,
        { 
          id: action.inputId,
          inputDataObject: {
            auftragsplanungInputXMLData : {
              Damen: {},
              Herren: {},
              Kinder: {}
            },
            kapazitaetsplanungInputXMLData: {},
            kaufteildispositionInputXMLData: {}
          }
        }
      ]
    case SET_INPUT_XML:
      return [
        ...state,
        {
          id: action.id,
          inputDataObject: action.inputXMLData
        }
      ]
    case SET_AUFTRAGSPLANUNG_DAMEN_INPUT_XML:
        return state.map(inputXML =>
          inputXML.id === action.id ?
            Object.assign({}, inputXML.inputDataObject.auftragsplanungInputXMLData, { Damen: action.auftragsDamenInputXML }) :
            inputXML
        )
    case SET_AUFTRAGSPLANUNG_HERREN_INPUT_XML:
    case SET_AUFTRAGSPLANUNG_KINDER_INPUT_XML:
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