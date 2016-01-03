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
        DamenFahrrad:'Damen-Fahrrad',
        HerrenFahrrad:'Herren-Fahrrad',
        KinderFahrrad:'Kinder-Fahrrad',
        TitelGesamt: 'Auftragsplanung gesamt',
        Artikel:'Artikel',
        Vertriebswunsch:'Vertriebswunsch',
        BedarfWS: 'Bedarf für WS',
        GeplanterLagerbestand: 'Geplanter Lagerbestand',
        AktuellerLagerbestand: 'Aktueller Lagerbestand',
        Warteschlange: 'Warteschlangen',
        Bearbeitung: 'Bearbeitung',
        Aufträge: 'Aufträge',
        ErrorSaveNumeric: 'bitte stelle sicher das alle Eingaben Zahlen sind',
        ErrorSavePeriod: 'Bitte wähle eine Periode',
        ErrorKleinerDrei: 'Muss kleiner 3 sein',
        Lagerbestand: 'Lagerbestand',
        Prognose: 'Prognose',
        ProduktionFürAufträge: 'Produktion für Aufträge',
        ProduktionFürLager: 'Produktion für Lager',
        ProduktionGesamt: 'Produktion Gesamt',
        Summe: 'Summe',
        Willkommen: 'Willkommen zu dem PSS-Tool der Gruppe ZweiRad!',
        Starten: 'Hier Starten!',
        DropFile: 'Ziehe eine Datei hierher, oder klicke hier, um zu starten',
        Bezeichnung: 'Bezeichnung',
        TeileArt: 'Teile-Art',
        SachNR: 'Sach-Nr.',
        Auftragsmenge: 'Auftragsmenge',
        Arbeitsplatz: 'Arbeitsplatz',
        Hinterrad: 'Hinterrad',
        Vorderrad: 'Vorderrad',
        SchutzblechHinten: 'Schutzblech hinten',
        SchutzblechVorne: 'Schutzblech vorne',
        Lenker: 'Lenker',
        Sattel: 'Sattel',
        Rahmen: 'Rahmen',
        Pedale: 'Pedale',
        VorderradKomplett: 'Vorderrad komplett',
        RahmenUndRäder: 'Rahmen und Räder',
        FahrradOhnePedale: 'Fahrrad ohne Pedale',
        FahrradKomplett: 'Fahrrad komplett',
        KapazitätsbedarfNeu: 'Kapazitätsbedarf (neu)',
        RüstzeitProVorgang: 'Rüstzeit pro Vorgang',
        RüstVorgänge: 'Rüstvorgänge',
        RüstzeitGesamt: 'Rüstzeit Gesamt',
        Gesamtkapazitätsbedarf: 'Gesamtkapazitätsbedarf',
        Schichten: 'Schichten',
        Überstunden: 'Überstunden',
        Lieferzeit:'Lieferzeit',
        Abweichung:'Abweichung',
        BenötigtFür:'Produktzuordnung',
        Diskontmenge:'Diskontmenge',
        AnfangsBestand:'Anfangsbestand',
        Bedarf:'Bedarf',
        Bestellung:'Bestellung',
        Menge:'Menge',
        Art:'Art',
        Normal:'Normal',
        Pesimistisch:'Pesimistisch',
        Optimistisch:'Optimistisch',
        TitelKaufteilDisposition:'Kaufteildisposition',
        Periode: 'Periode',
        ProduktionsProgramm: 'Produktionsprogramm',
        DropDownNormal: 'Normal',
        DropDownPessimistisch: 'Pessimistisch',
        DropDownOptimistisch: 'Optimistisch',
        localStorageDeleteButton: 'Lösche Speicher',
        PeriodeWählen: 'Periode wählen'



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
              TitelGesamt: 'Auftragsplanung gesamt',
              Next: 'Weiter',
              Back: 'Zurück',
              DamenFahrrad:'Damen-Fahrrad',
              HerrenFahrrad:'Herren-Fahrrad',
              KinderFahrrad:'Kinder-Fahrrad',
              Artikel:'Artikel',
              Vertriebswunsch:'Vertriebswunsch',
              BedarfWS: 'Bedarf für WS',
              GeplanterLagerbestand: 'Geplanter Lagerbestand',
              AktuellerLagerbestand: 'Aktueller Lagerbestand',
              Warteschlange: 'Warteschlangen',
              Bearbeitung: 'Bearbeitung',
              Aufträge: 'Aufträge',
              ErrorSaveNumeric: 'bitte stelle sicher das alle Eingaben Zahlen sind',
              ErrorSavePeriod: 'Bitte wähle eine Periode',
              ErrorKleinerDrei: 'Muss kleiner 3 sein',
              Lagerbestand: 'Lagerbestand',
              Prognose: 'Prognose',
              ProduktionFürAufträge: 'Produktion für Aufträge',
              ProduktionFürLager: 'Produktion für Lager',
              ProduktionGesamt: 'Produktion Gesamt',
              Summe: 'Summe',
              Willkommen: 'Willkommen zu dem PSS-Tool der Gruppe ZweiRad!',
              Starten: 'Hier Starten!',
              DropFile: 'Ziehe eine Datei hierher, um zu starten',
              Bezeichnung: 'Bezeichnung',
              TeileArt: 'Teile-Art',
              SachNR: 'Sach-Nr.',
              Auftragsmenge: 'Auftragsmenge',
              Arbeitsplatz: 'Arbeitsplatz',
              Hinterrad: 'Hinterrad',
              Vorderrad: 'Vorderrad',
              SchutzblechHinten: 'Schutzblech hinten',
              SchutzblechVorne: 'Schutzblech vorne',
              Lenker: 'Lenker',
              Sattel: 'Sattel',
              Rahmen: 'Rahmen',
              Pedale: 'Pedale',
              VorderradKomplett: 'Vorderrad komplett',
              RahmenUndRäder: 'Rahmen und Räder',
              FahrradOhnePedale: 'Fahrrad ohne Pedale',
              FahrradKomplett: 'Fahrrad komplett',
              KapazitätsbedarfNeu: 'Kapazitätsbedarf (neu)',
              RüstzeitProVorgang: 'Rüstzeit pro Vorgang',
              RüstVorgänge: 'Rüstvorgänge',
              RüstzeitGesamt: 'Rüstzeit Gesamt',
              Gesamtkapazitätsbedarf: 'Gesamtkapazitätsbedarf',
              Schichten: 'Schichten',
              Überstunden: 'Überstunen',
              Lieferzeit:'Lieferzeit',
              Abweichung:'Abweichung',
              BenötigtFür:'Benötigt für',
              Diskontmenge:'Diskontmenge',
              AnfangsBestand:'Anfangsbestand',
              Bedarf:'Bedarf',
              Bestellung:'Bestellung',
              Menge:'Menge',
              Art:'Art',
              Normal:'Normal',
              Pesimistisch:'Pesimistisch',
              Optimistisch:'Optimistisch',
              TitelKaufteilDisposition:'Kaufteildisposition',
              Periode: 'Periode',
              ProduktionsProgramm: 'Produktionsprogramm',
              DropDownNormal: 'Normal',
              DropDownPessimistisch: 'Pessimistisch',
              DropDownOptimistisch: 'Optimistisch',
              localStorageDeleteButton: 'Lösche Speicher',
              PeriodeWählen: 'Periode wählen'


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
              TitelDamen: 'Order planing women bike',
              TitelHerren: 'Order planing men bike',
              TitelKinder: 'Order planing children bike',
              TitelGesamt: 'forecast planing',
              Next: 'next',
              Back: 'previous',
              DamenFahrrad:'women bike',
              HerrenFahrrad:'Men bike',
              KinderFahrrad:'Children bike',
              Artikel:'article',
              Vertriebswunsch:'sales wish',
              BedarfWS: 'demand waitinglist',
              GeplanterLagerbestand: 'planned stock',
              AktuellerLagerbestand: 'current stock',
              Warteschlange: 'waitinglist',
              Bearbeitung: 'in progress',
              Aufträge: 'assigments',
              ErrorSaveNumeric: 'Please be sure that every field is a numeric',
              ErrorSavePeriod: 'Please choose a vaild periode',
              ErrorKleinerDrei: 'must be less than 3',
              Lagerbestand: 'stock',
              Prognose: 'forecast',
              ProduktionFürAufträge: 'production for assignments',
              ProduktionFürLager: 'production for stock',
              ProduktionGesamt: 'production overall',
              Summe: 'Sum',
              Willkommen: 'Welcome to the PSS-Tool from ZweiRad!',
              Starten: 'Start here!',
              DropFile: 'Try dropping some files here, or click to select files to upload.',
              Bezeichnung: 'description',
              TeileArt: 'kind of part',
              SachNR: 'part-nr.',
              Auftragsmenge: 'order quantity',
              Arbeitsplatz: 'workstation',
              Hinterrad: 'wheel back',
              Vorderrad: 'wheel front',
              SchutzblechHinten: 'mudguard back',
              SchutzblechVorne: 'mudguard front',
              Lenker: 'handlebar',
              Sattel: 'saddle',
              Rahmen: 'frame',
              Pedale: 'pedals',
              VorderradKomplett: 'wheel front complete',
              RahmenUndRäder: 'frame and wheels',
              FahrradOhnePedale: 'bike without pedals',
              FahrradKomplett: 'bike complete',
              KapazitätsbedarfNeu: 'capacity requirements (new)',
              RüstzeitProVorgang: 'setup time per operation',
              RüstVorgänge: 'operations',
              RüstzeitGesamt: 'setup time sum',
              Gesamtkapazitätsbedarf: 'capacity requirements sum',
              Schichten: 'shifts',
              Überstunden: 'overtime',
              Lieferzeit:'delivery time',
              Abweichung:'difference',
              BenötigtFür:'needed for',
              Diskontmenge:'discont amount',
              AnfangsBestand:'starting stock',
              Bedarf:'demand',
              Bestellung:'order',
              Menge:'amount',
              Art:'kind',
              Normal:'normal',
              Pesimistisch:'pessimistic',
              Optimistisch:'optimistic',
              TitelKaufteilDisposition:'Purchase Part Disposition',
              Periode: 'periode',
              ProduktionsProgramm: 'productionprogramm',
              DropDownNormal: 'normal',
              DropDownPessimistisch: 'pessimistic',
              DropDownOptimistisch: 'optimistic',
              localStorageDeleteButton: 'Delete storage',
              PeriodeWählen: 'choose periode'


            }}]}


export default function internationalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
    console.log(action.languagee)
    console.log("Language Davor: ", state)
    let newLanguage = state.languages.filter(item => item.id === action.languagee)[0]

    // var statelol = state
    // statelol.activeLanguage = action.languagee
    console.log("Language Danach: ", Object.assign({}, state, { activeLanguage: newLanguage }))
        return Object.assign({}, state, { activeLanguage: newLanguage });
    default:
      return state
  }
}

