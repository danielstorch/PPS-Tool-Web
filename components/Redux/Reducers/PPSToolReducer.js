import { combineReducers } from 'redux';
import UploadXMLReducer from './UploadXMLReducer';
import NavigationReducer from './NavigationReducer';
import ActiveUploadXMLReducer from './ActiveUploadXMLReducer'

const PPSToolReducer = combineReducers({
  UploadXMLReducer,
  NavigationReducer,
  ActiveUploadXMLReducer
})

export default PPSToolReducer
