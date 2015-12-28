import {SET_LANGUAGE} from '../Actions';


const initialState = {
  activeLanguage: {
      id: 'DE',
      strings : {
        Home:'Home',
        Anleitung: 'Tool Anleitung',
        Auftragsplanung: 'Auftragsplanung',
        Gesamt: 'Gesamt',
        Damen: 'Damen',
        Herren: 'Herren',
        Kinder: 'Kinder',
        Kaufteildisposition: 'Kaufteildisposition',
        Upload: 'Upload',
        Kapazitaetsplanung: 'Kapazitätsplanung',
        Download:'Export',
        Settings:'Settings',
        TippsundTricks:'Tipps und Tricks',
        Metriken:'Metriken',
        Speichern:'Speichern',
        Reset: 'Zurücksetzen',
        NumericError: 'Muss eine Nummer sein',
        TitelDamen: 'Auftragsplanung Damen-Fahrrad',
        TitelHerren: 'Auftragsplanung Herren-Fahrrad',
        TitelKinder: 'Auftragsplanung Kinder-Fahrrad',
        Next: 'Weiter',
        Back: 'Zurück',
        DamenFahrrad:'Damen Fahrrad',
        HerrenFahrrad:'Herren Fahrrad',
        KinderFahrrad:'Kinder Fahrrad',
        Artikel:'Artikel',
        Vertriebswunsch:'Vertriebswunsch',
        BedarfWS: 'Bedarf für WS',
        GeplanterLagerbestand: 'Geplanter Lagerbestand',
        AktuellerLagerbestand: 'Aktueller Lagerbestand',
        Warteschlange: 'Warteschlagen',
        Bearbeitung: 'Bearbeitung',
        Aufträge: 'Aufträge',
        ErrorSaveNumeric: 'bitte stelle sicher das alle Eingaben Zahlen sind',
        ErrorSavePeriod: 'Bitte wähle eine Periode'
      }},
      languages:[{
            id: 'DE',
            strings : {
              Home:'Home',
              Anleitung: 'Tool Anleitung',
              Auftragsplanung: 'Auftragsplanung',
              Gesamt: 'Gesamt',
              Damen: 'Damen',
              Herren: 'Herren',
              Kinder: 'Kinder',
              Kaufteildisposition: 'Kaufteildisposition',
              Upload: 'Upload',
              Kapazitaetsplanung: 'Kapazitätsplanung',
              Download:'Export',
              Settings:'Settings',
              TippsundTricks:'Tipps und Tricks',
              Metriken:'Metriken',
              Speichern:'Speichern',
              Reset: 'Zurücksetzen',
              NumericError: 'Muss eine Nummer sein',
              TitelDamen: 'Auftragsplanung Damen-Fahrrad',
              TitelHerren: 'Auftragsplanung Herren-Fahrrad',
              TitelKinder: 'Auftragsplanung Kinder-Fahrrad',
              Next: 'Weiter',
              Back: 'Zurück',
              DamenFahrrad:'Damen Fahrrad',
              HerrenFahrrad:'Herren Fahrrad',
              KinderFahrrad:'Kinder Fahrrad',
              Artikel:'Artikel',
              Vertriebswunsch:'Vertriebswunsch',
              BedarfWS: 'Bedarf für WS',
              GeplanterLagerbestand: 'Geplanter Lagerbestand',
              AktuellerLagerbestand: 'Aktueller Lagerbestand',
              Warteschlange: 'Warteschlagen',
              Bearbeitung: 'Bearbeitung',
              Aufträge: 'Aufträge',
              ErrorSaveNumeric: 'bitte stelle sicher das alle Eingaben Zahlen sind',
              ErrorSavePeriod: 'Bitte wähle eine Periode'



            }},
            {
            id: 'EN',
            strings : {
              Home:'Home',
              Anleitung: 'Tool instructions',
              Auftragsplanung: 'Order planning',
              Gesamt: 'Total',
              Damen: 'Women',
              Herren: 'Men',
              Kinder: 'Children',
              Kaufteildisposition: 'Purchase planning',
              Upload: 'Upload',
              Kapazitaetsplanung: 'Capacity Planning',
              Download:'Export',
              Settings:'Settings',
              TippsundTricks:'Tips and Tricks',
              Metriken:'Metrics',
              Speichern:'Save',
              Reset: 'Reset',
              NumericError: 'this field must be numeric',
              TitelDamen: 'OrderPlaning women bike',
              TitelHerren: 'OrderPlaning men bike',
              TitelKinder: 'OrderPlaning children bike',
              Next: 'next',
              Back: 'previous',
              DamenFahrrad:'women bike',
              HerrenFahrrad:'Men bike',
              KinderFahrrad:'Children bike',
              Artikel:'article',
              Vertriebswunsch:'sales wish',
              BedarfWS: 'demand waitinglist',
              GeplanterLagerbestand: 'planed stock',
              AktuellerLagerbestand: 'current stock',
              Warteschlange: 'waitinglist',
              Bearbeitung: 'in progress',
              Aufträge: 'assigments',
              ErrorSaveNumeric: 'Please be sure that every field is a numeric',
              ErrorSavePeriod: 'Please choose a vaild periode'


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
