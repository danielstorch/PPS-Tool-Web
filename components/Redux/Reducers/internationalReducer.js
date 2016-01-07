import {SET_LANGUAGE} from "../Actions";


const initialState = {
  activeLanguage: {
      id: 'DE',
            strings : {
              Home:'Home',
              Anleitung: 'Anleitung',
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
              NumericError: 'Nur Zahlen zulässig!',
              TitelDamen: 'Auftragsplanung Damen-Fahrrad',
              TitelHerren: 'Auftragsplanung Herren-Fahrrad',
              TitelKinder: 'Auftragsplanung Kinder-Fahrrad',
              TitelGesamt: 'Auftragsplanung Gesamt',
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
              ErrorSaveNumeric: "Bitte stellen Sie sicher, dass alle Eingaben aus Zahlen bestehen!",
              ErrorSavePeriod: "Bitte wählen Sie eine Periode aus!",
              ErrorKleinerDrei: "max. drei Schichten möglich!",
              Lagerbestand: 'Lagerbestand',
              Prognose: 'Prognose',
              ProduktionFürAufträge: 'Produktion für Aufträge',
              ProduktionFürLager: 'Produktion für Lager',
              ProduktionGesamt: 'Produktion Gesamt',
              Summe: 'Summe',
              Willkommen: 'Willkommen zu dem PSS-Tool der Gruppe ZweiRad!',
              Starten: "Planungsworkflow starten!",
              DropFile: 'XML-Datei per Drag & Drop oder Klicken importieren',
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
              KapazitätsbedarfNeu: 'Kapazitätsbedarf',
              RüstzeitProVorgang: 'Rüstzeit pro Vorgang',
              RüstVorgänge: 'Rüstvorgänge',
              RüstzeitGesamt: 'Rüstzeit Gesamt',
              Gesamtkapazitätsbedarf: 'Gesamtkapazitätsbedarf',
              Schichten: 'Schichten',
              Überstunden: 'Überstunden',
              Lieferzeit:'Lieferzeit',
              Abweichung:'Abweichung',
              BenötigtFür:'Benötigt für',
              Diskontmenge:'Diskontmenge',
              AnfangsBestand:'Anfangsbestand',
              Bedarf:'Bedarf',
              Bestellung:'Bestellung',
              Menge:'Menge',
              Art:'Art Normal/Eil',
              Normal:'Normal',
              Pesimistisch:'Pessimistisch',
              Optimistisch:'Optimistisch',
              TitelKaufteilDisposition:'Kaufteildisposition',
              Periode: 'Periode',
              ProduktionsProgramm: 'Produktionsprogramm',
              DropDownNormal: 'Normal',
              DropDownPessimistisch: 'Pessimistisch',
              DropDownOptimistisch: 'Optimistisch',
              localStorageDeleteButton: 'Speicher löschen',
              PeriodeWählen: 'Periode wählen',
              TitelExport: 'XML-Datei exportieren',
              ExportSplitFalscheId:"Falsche ID",
              ExportSplitKleinerNul: "muss > 0 sein",
              ExportSplitKleinerAlsGesamt: "Wert ist > als die gesamte Bestellung",
              ExportSplitMax: "Kann ein Produkt max 9 mal splitten",
              ExportSplitHeader: "Aufträge splitten",
              ExportSplitIDFloating: "Artikel ID",
              ExportSplitIDHint: "z.B. E5",
              ExportSplitQuantityFloat: "Quantity",
              ExportSplitQuantityHint: "z.B. 100",
              ExportDownloadButton: "Download",
              CardIndex: "Index: ",
              CardType: "Produkttyp: ",
              CardArticleId: "Artikel ID: ",
              CardMenge: "Menge: ", 
              DropDownPeriode: "Periode auswählen",




      }},
      languages:[{
            id: 'DE',
            strings : {
              Home:'Home',
              Anleitung: 'Anleitung',
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
              NumericError: 'Nur Zahlen zulässig!',
              TitelDamen: 'Auftragsplanung Damen-Fahrrad',
              TitelHerren: 'Auftragsplanung Herren-Fahrrad',
              TitelKinder: 'Auftragsplanung Kinder-Fahrrad',
              TitelGesamt: 'Auftragsplanung Gesamt',
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
              ErrorSaveNumeric: "Bitte stellen Sie sicher, dass alle Eingaben aus Zahlen bestehen!",
              ErrorSavePeriod: "Bitte wählen Sie eine Periode aus!",
              ErrorKleinerDrei: "max. drei Schichten möglich!",
              Lagerbestand: 'Lagerbestand',
              Prognose: 'Prognose',
              ProduktionFürAufträge: 'Produktion für Aufträge',
              ProduktionFürLager: 'Produktion für Lager',
              ProduktionGesamt: 'Produktion Gesamt',
              Summe: 'Summe',
              Willkommen: 'Willkommen zu dem PSS-Tool der Gruppe ZweiRad!',
              Starten: "Planungsworkflow starten!",
              DropFile: 'XML-Datei per Drag & Drop oder Klicken importieren',
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
              KapazitätsbedarfNeu: 'Kapazitätsbedarf',
              RüstzeitProVorgang: 'Rüstzeit pro Vorgang',
              RüstVorgänge: 'Rüstvorgänge',
              RüstzeitGesamt: 'Rüstzeit Gesamt',
              Gesamtkapazitätsbedarf: 'Gesamtkapazitätsbedarf',
              Schichten: 'Schichten',
              Überstunden: 'Überstunden',
              Lieferzeit:'Lieferzeit',
              Abweichung:'Abweichung',
              BenötigtFür:'Benötigt für',
              Diskontmenge:'Diskontmenge',
              AnfangsBestand:'Anfangsbestand',
              Bedarf:'Bedarf',
              Bestellung:'Bestellung',
              Menge:'Menge',
              Art:'Art Normal/Eil',
              Normal:'Normal',
              Pesimistisch:'Pessimistisch',
              Optimistisch:'Optimistisch',
              TitelKaufteilDisposition:'Kaufteildisposition',
              Periode: 'Periode',
              ProduktionsProgramm: 'Produktionsprogramm',
              DropDownNormal: 'Normal',
              DropDownPessimistisch: 'Pessimistisch',
              DropDownOptimistisch: 'Optimistisch',
              localStorageDeleteButton: 'Speicher löschen',
              PeriodeWählen: 'Periode wählen',
              TitelExport: 'XML-Datei exportieren',
              ExportSplitFalscheId:"Falsche ID",
              ExportSplitKleinerNul: "muss > 0 sein",
              ExportSplitKleinerAlsGesamt: "Wert ist > als die gesamte Bestellung",
              ExportSplitMax: "Kann ein Produkt max 9 mal splitten",
              ExportSplitHeader: "Aufträge splitten",
              ExportSplitIDFloating: "Artikel ID",
              ExportSplitIDHint: "z.B. E5",
              ExportSplitQuantityFloat: "Quantity",
              ExportSplitQuantityHint: "z.B. 100",
              ExportDownloadButton: "Download",
              CardIndex: "Index: ",
              CardType: "Produkttyp: ",
              CardArticleId: "Artikel ID: ",
              CardMenge: "Menge: ", 
              DropDownPeriode: "Periode auswählen",


            }},
            {
            id: 'EN',
            strings : {
              Home:'Home',
              Anleitung: "Instructions",
              Auftragsplanung: "Order Planning",
              Gesamt: 'Total',
              Damen: 'Women',
              Herren: 'Men',
              Kinder: 'Children',
              Kaufteildisposition: 'Purchase Planning',
              Upload: 'Upload',
              Kapazitaetsplanung: 'Capacity Planning',
              Download:'Export',
              Settings:'Settings',
              TippsundTricks:'Tips and Tricks',
              Metriken:'Metrics',
              Speichern:'Save',
              Reset: 'Reset',
              NumericError: 'this field must be numeric',
              TitelDamen: 'Order planning women bike',
              TitelHerren: 'Order planning men bike',
              TitelKinder: 'Order planning children bike',
              TitelGesamt: 'forecast planing',
              Next: 'next',
              Back: 'previous',
              DamenFahrrad:"Women Bike",
              HerrenFahrrad:'Men Bike',
              KinderFahrrad:'Children Bike',
              Artikel:'article',
              Vertriebswunsch:'sales wish',
              BedarfWS: 'demand waitinglist',
              GeplanterLagerbestand: 'planned stock',
              AktuellerLagerbestand: 'current stock',
              Warteschlange: 'waitinglist',
              Bearbeitung: 'in progress',
              Aufträge: 'assignments',
              ErrorSaveNumeric: 'Please be sure that every field is a numeric',
              ErrorSavePeriod: 'Please choose a vaild period',
              ErrorKleinerDrei: 'must be less than 3',
              Lagerbestand: 'stock',
              Prognose: 'forecast',
              ProduktionFürAufträge: 'production for assignments',
              ProduktionFürLager: 'production for stock',
              ProduktionGesamt: 'production overall',
              Summe: 'Sum',
              Willkommen: 'Welcome to the PSS-Tool from ZweiRad!',
              Starten: "Start Workflow!",
              DropFile: "Try dropping some files here, or click to select files to upload.",
              Bezeichnung: 'description',
              TeileArt: 'kind of part',
              SachNR: "part-no.",
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
              KapazitätsbedarfNeu: 'capacity requirements',
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
              ProduktionsProgramm: 'production programm',
              DropDownNormal: 'normal',
              DropDownPessimistisch: 'pessimistic',
              DropDownOptimistisch: 'optimistic',
              localStorageDeleteButton: 'Delete Storage',
              PeriodeWählen: 'choose period',
              TitelExport: "Export XML-file",
              ExportSplitFalscheId:"wrong ID",
              ExportSplitKleinerNul: "have to  > 0",
              ExportSplitKleinerAlsGesamt: "Value is > than the entire order",
              ExportSplitMax: "Kann ein Produkt max 9 mal splitten",
              ExportSplitHeader: "Split a assignment",
              ExportSplitIDFloating: "Article ID",
              ExportSplitIDHint: "e. g. E5",
              ExportSplitQuantityFloat: "Quantity",
              ExportSplitQuantityHint: "e. g. 100",
              ExportDownloadButton: "Download",
              CardIndex: "Index: ",
              CardType: "Type: ",
              CardArticleId: "Article ID: ",
              CardMenge: "amount: ", 
              DropDownPeriode: "choose period",

            }},{
            id: 'RO',
            strings : {
              Home:"Acasa",
            Anleitung: "Instructiuni",
            Auftragsplanung: "Plan Vanzari",
            Gesamt: "Total",
            Damen: "Dame",
            Herren: "Barbati",
            Kinder: "Copii",
            Kaufteildisposition: "Dispozitia de Achizitii",
            Upload: "Incarca",
            Kapazitaetsplanung: "Plan Capacitate",
            Download:"Exporta",
            Settings:"Setari",
            TippsundTricks:"Ajutor",
            Metriken:"Cantitate",
            Speichern:"Salveaza",
            Reset: "Reseteaza",
            NumericError: "Numai Cifre acceptate!",
            TitelDamen: "Plan Vanzari Biciclete Dame",
            TitelHerren: "Plan Vanzari Biciclete Barbati",
            TitelKinder: "Plan Vanzari Biciclete Copii",
            TitelGesamt: "Plan Vanzari Total",
            Next: "Innainte",
            Back: "Innapoi",
            DamenFahrrad:"Biciclete Dame",
            HerrenFahrrad:"Biciclete Barbati",
            KinderFahrrad:"Biciclete Copii",
            Artikel:"Articol",
            Vertriebswunsch:"Dorinza Vanzari",
            BedarfWS: "Necesitate WS",
            GeplanterLagerbestand: "Stoc planificat",
            AktuellerLagerbestand: "Stoc aktual",
            Warteschlange: "In asteptare",
            Bearbeitung: "In lucru",
            Aufträge: "Comenzi",
            ErrorSaveNumeric: "Va rugam sa va asigurati ca numai cifre sunt introduse!",
            ErrorSavePeriod: "Va rugam sa alegeti o perioada!",
            ErrorKleinerDrei: "max. trei ture posibil!",
            Lagerbestand: "Stoc",
            Prognose: "Prognoza",
            ProduktionFürAufträge: "Productie pentru comenzi",
            ProduktionFürLager: "Productie pentru stoc",
            ProduktionGesamt: "Productie totala",
            Summe: "Suma",
            Willkommen: "Bine ati venit la PSS-Tool - Grupa ZweiRad!",
            Starten: "Porneste Planificarea!",
            DropFile: "Importa XML-Datei per Drag & Drop sau per Buton",
            Bezeichnung: "Descriere",
            TeileArt: "Categorie Titlu",
            SachNR: "Nr. Cur.",
            Auftragsmenge: "Cantitate Comanda",
            Arbeitsplatz: "Loc Munca",
            Hinterrad: "Roata spate",
            Vorderrad: "Roata fata",
            SchutzblechHinten: "Aripa spate",
            SchutzblechVorne: "Aripa fata",
            Lenker: "Coarne",
            Sattel: "Sa",
            Rahmen: "Rama",
            Pedale: "Pedale",
            VorderradKomplett: "Roata fata completa",
            RahmenUndRäder: "Rama si Roti",
            FahrradOhnePedale: "Bicicleta fara Pedale",
            FahrradKomplett: "Bicicleta completa",
            KapazitätsbedarfNeu: "Necesitate Capacitate",
            RüstzeitProVorgang: "Adaptare pro Comanda",
            RüstVorgänge: "Numar Adaptari",
            RüstzeitGesamt: "Total Adaptari",
            Gesamtkapazitätsbedarf: "Necesar Capacitate Totala",
            Schichten: "Ture",
            Überstunden: "Ore Suplimentare",
            Lieferzeit:"Timp Livrare",
            Abweichung:"Deviere",
            BenötigtFür:"Necesar pentru",
            Diskontmenge:"Cantitate discount",
            AnfangsBestand:"Stoc de inceput",
            Bedarf:"Capacitate",
            Bestellung:"Comanda",
            Menge:"Cantitate",
            Art:"Tip Normal/Urgent",
            Normal:"Normal",
            Pesimistisch:"Pesimist",
            Optimistisch:"Optimist",
            TitelKaufteilDisposition:"Dispozitie de Achizitii",
            Periode: "Perioada",
            ProduktionsProgramm: "Program Productie",
            DropDownNormal: "Normal",
            DropDownPessimistisch: "Pesimist",
            DropDownOptimistisch: "Optimist",
            localStorageDeleteButton: "Sterge date salvate",
            PeriodeWählen: "Alege Perioada",
            TitelExport: "Exporta XML-Fisier",
            ExportSplitFalscheId:"ID Fals",
            ExportSplitKleinerNul: "trebuie sa fie > 0",
            ExportSplitKleinerAlsGesamt: "Valoarea este > decat comanda totala",
            ExportSplitMax: "Un Produs poate fi max de 9 ori impartit",
            ExportSplitHeader: "Imparte Comenzi",
            ExportSplitIDFloating: "ID Articol",
            ExportSplitIDHint: "de exp. E5",
            ExportSplitQuantityFloat: "Cantitate",
            ExportSplitQuantityHint: "de exp. 100",
            ExportDownloadButton: "Descarca",
            CardIndex: "Index: ",
            CardType: "Tip Produs: ",
            CardArticleId: "ID Articol: ",
            CardMenge: "Cantitate: ", 
            DropDownPeriode: "Alege Perioada"}},{

            id: 'FR',
            strings : {
              Home:"Acasa",
            Anleitung: "Instructiuni",
            Auftragsplanung: "Plan Vanzari",
            Gesamt: "Total",
            Damen: "Dame",
            Herren: "Barbati",
            Kinder: "Copii",
            Kaufteildisposition: "Dispozitia de Achizitii",
            Upload: "Incarca",
            Kapazitaetsplanung: "Plan Capacitate",
            Download:"Exporta",
            Settings:"Setari",
            TippsundTricks:"Ajutor",
            Metriken:"Cantitate",
            Speichern:"Salveaza",
            Reset: "Reseteaza",
            NumericError: "Numai Cifre acceptate!",
            TitelDamen: "Plan Vanzari Biciclete Dame",
            TitelHerren: "Plan Vanzari Biciclete Barbati",
            TitelKinder: "Plan Vanzari Biciclete Copii",
            TitelGesamt: "Plan Vanzari Total",
            Next: "Innainte",
            Back: "Innapoi",
            DamenFahrrad:"Biciclete Dame",
            HerrenFahrrad:"Biciclete Barbati",
            KinderFahrrad:"Biciclete Copii",
            Artikel:"Articol",
            Vertriebswunsch:"Dorinza Vanzari",
            BedarfWS: "Necesitate WS",
            GeplanterLagerbestand: "Stoc planificat",
            AktuellerLagerbestand: "Stoc aktual",
            Warteschlange: "In asteptare",
            Bearbeitung: "In lucru",
            Aufträge: "Comenzi",
            ErrorSaveNumeric: "Va rugam sa va asigurati ca numai cifre sunt introduse!",
            ErrorSavePeriod: "Va rugam sa alegeti o perioada!",
            ErrorKleinerDrei: "max. trei ture posibil!",
            Lagerbestand: "Stoc",
            Prognose: "Prognoza",
            ProduktionFürAufträge: "Productie pentru comenzi",
            ProduktionFürLager: "Productie pentru stoc",
            ProduktionGesamt: "Productie totala",
            Summe: "Suma",
            Willkommen: "Bine ati venit la PSS-Tool - Grupa ZweiRad!",
            Starten: "Porneste Planificarea!",
            DropFile: "Importa XML-Datei per Drag & Drop sau per Buton",
            Bezeichnung: "Descriere",
            TeileArt: "Categorie Titlu",
            SachNR: "Nr. Cur.",
            Auftragsmenge: "Cantitate Comanda",
            Arbeitsplatz: "Loc Munca",
            Hinterrad: "Roata spate",
            Vorderrad: "Roata fata",
            SchutzblechHinten: "Aripa spate",
            SchutzblechVorne: "Aripa fata",
            Lenker: "Coarne",
            Sattel: "Sa",
            Rahmen: "Rama",
            Pedale: "Pedale",
            VorderradKomplett: "Roata fata completa",
            RahmenUndRäder: "Rama si Roti",
            FahrradOhnePedale: "Bicicleta fara Pedale",
            FahrradKomplett: "Bicicleta completa",
            KapazitätsbedarfNeu: "Necesitate Capacitate",
            RüstzeitProVorgang: "Adaptare pro Comanda",
            RüstVorgänge: "Numar Adaptari",
            RüstzeitGesamt: "Total Adaptari",
            Gesamtkapazitätsbedarf: "Necesar Capacitate Totala",
            Schichten: "Ture",
            Überstunden: "Ore Suplimentare",
            Lieferzeit:"Timp Livrare",
            Abweichung:"Deviere",
            BenötigtFür:"Necesar pentru",
            Diskontmenge:"Cantitate discount",
            AnfangsBestand:"Stoc de inceput",
            Bedarf:"Capacitate",
            Bestellung:"Comanda",
            Menge:"Cantitate",
            Art:"Tip Normal/Urgent",
            Normal:"Normal",
            Pesimistisch:"Pesimist",
            Optimistisch:"Optimist",
            TitelKaufteilDisposition:"Dispozitie de Achizitii",
            Periode: "Perioada",
            ProduktionsProgramm: "Program Productie",
            DropDownNormal: "Normal",
            DropDownPessimistisch: "Pesimist",
            DropDownOptimistisch: "Optimist",
            localStorageDeleteButton: "Sterge date salvate",
            PeriodeWählen: "Alege Perioada",
            TitelExport: "Exporta XML-Fisier",
            ExportSplitFalscheId:"ID Fals",
            ExportSplitKleinerNul: "trebuie sa fie > 0",
            ExportSplitKleinerAlsGesamt: "Valoarea este > decat comanda totala",
            ExportSplitMax: "Un Produs poate fi max de 9 ori impartit",
            ExportSplitHeader: "Imparte Comenzi",
            ExportSplitIDFloating: "ID Articol",
            ExportSplitIDHint: "de exp. E5",
            ExportSplitQuantityFloat: "Cantitate",
            ExportSplitQuantityHint: "de exp. 100",
            ExportDownloadButton: "Descarca",
            CardIndex: "Index: ",
            CardType: "Tip Produs: ",
            CardArticleId: "ID Articol: ",
            CardMenge: "Cantitate: ", 
            DropDownPeriode: "Alege Perioada"}}
            ]}


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

