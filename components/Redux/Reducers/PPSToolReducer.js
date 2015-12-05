import { combineReducers } from 'redux';
import UploadXMLReducer from './UploadXMLReducer';
import NavigationReducer from './NavigationReducer';
import ActiveUploadXMLReducer from './ActiveUploadXMLReducer'
import InputXMLReducer from './InputXMLReducer'

const PPSToolReducer = combineReducers({
  UploadXMLReducer,
  NavigationReducer,
  ActiveUploadXMLReducer,
  InputXMLReducer
})

export default PPSToolReducer
