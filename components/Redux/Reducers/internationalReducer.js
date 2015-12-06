import {SET_LANGUAGE} from '../Actions';


const initialState = {
  activeLanguage: {
      id: 'DE',
      strings : {
        Navigation0:'Home',
        Navigation1: 'Tool Anleitung',
        Navigation2: 'Auftragsplanung',
        Navigation3: 'Gesamt',
        Navigation4: 'Damen',
        Navigation5: 'Herren',
        Navigation6: 'Kinder',
        Navigation7: 'Kaufteildisposition',
        Navigation8: 'Upload',
        Navigation9: 'Kapazitätsplanung',
        Navigation10:'Download',
        Navigation11:'Settings',
        Navigation12:'Tipps und Tricks',
        Navigation13:'Metriken'
      }},
      languages:[{
            id: 'DE',
            strings : {
              Navigation0:'Home',
              Navigation1: 'Tool Anleitung',
              Navigation2: 'Auftragsplanung',
              Navigation3: 'Gesamt',
              Navigation4: 'Damen',
              Navigation5: 'Herren',
              Navigation6: 'Kinder',
              Navigation7: 'Kaufteildisposition',
              Navigation8: 'Upload',
              Navigation9: 'Kapazitätsplanung',
              Navigation10:'Download',
              Navigation11:'Settings',
              Navigation12:'Tipps und Tricks',
              Navigation13:'Metriken'
            }},
            {
            id: 'EN',
            strings : {
              Navigation0:'Home',
              Navigation1: 'Tool instructions',
              Navigation2: 'Order planning',
              Navigation3: 'Total',
              Navigation4: 'Women',
              Navigation5: 'Menn',
              Navigation6: 'Children',
              Navigation7: 'Purchas planning',
              Navigation8: 'Upload',
              Navigation9: 'Capacity Planning',
              Navigation10:'Download',
              Navigation11:'Settings',
              Navigation12:'Tips and Tricks',
              Navigation13:'Metrics'
            }}
]}


export default function internationalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
    console.log('dssdsds')
  var statelol = state
    statelol.activeLanguage = action.languagee
        return statelol//
    default:
      return state
  }
}