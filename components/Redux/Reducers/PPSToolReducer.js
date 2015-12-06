import { combineReducers } from 'redux';
import UploadXMLReducer from './UploadXMLReducer';
import NavigationReducer from './NavigationReducer';
import ActiveUploadXMLReducer from './ActiveUploadXMLReducer'
import InputXMLReducer from './InputXMLReducer'
import internationalReducer from './internationalReducer'

const PPSToolReducer = combineReducers({
  UploadXMLReducer,
  NavigationReducer,
  ActiveUploadXMLReducer,
  InputXMLReducer,
  internationalReducer
})

export default PPSToolReducer
