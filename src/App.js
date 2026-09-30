import "./styles.css";
import data from "./unfaelle.json";

export default function App() {
  const unfaelle = data; // Unfaelle ist ein Array mit Objekten aus der unfaelle.json Datei.
  
  // Übung 1a
  console.log(unfaelle);        // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  console.log(unfaelle.length); // 20
  console.log(unfaelle[unfaelle.length - 1])          // {id_unfall: 5877, typ: 'Auffahrunfall', schwere: '2 Unfall mit Leichtverletzten', jahr: '2016', monat: 9, …}
  const letzterUnfall = unfaelle[unfaelle.length - 1] // {id_unfall: 5877, typ: 'Auffahrunfall', schwere: '2 Unfall mit Leichtverletzten', jahr: '2016', monat: 9, …}
  console.log (letzterUnfall)                         // {id_unfall: 5877, typ: 'Auffahrunfall', schwere: '2 Unfall mit Leichtverletzten', jahr: '2016', monat: 9, …}

  // Übung 1b
  console.log(letzterUnfall.id_unfall)    // 5877
  console.log(letzterUnfall.schwere)      // 2 Unfall mit Leichtverletzten
  const detailsUnfall = `${letzterUnfall.id_unfall} : ${letzterUnfall.schwere}`
  console.log(detailsUnfall) // 5877 : 2 Unfall mit Leichtverletzten


  // Übung 2
  const unfaelleNebenstrassen = unfaelle.filter(unfall => unfall.strasseart === "Nebenstrasse")
  console.log(unfaelleNebenstrassen)


  // Übung 3
  const veloUnfall = unfaelle.find(unfall => unfall.fahrrd_bet === true && unfall.jahr === "2015" && unfall.monat === 11);
  console.log(veloUnfall);    // {id_unfall: 4962, typ: 'Überqueren der Fahrbahn', schwere: '2 Unfall mit Leichtverletzten', jahr: '2015', monat: 11, …}

  // Übung 4
  // <ol> {unfaelle.map(unfall => (<li key={unfall.id_unfall}>{unfall.id_unfall}</li>))} </ol>
  // nochmals erklären lassen, nur mit KI lösbar gewesen
  
  return (
    <div className="App">

      <div>
        {detailsUnfall}
      </div>

      <ol>
        {unfaelle.map(unfall => (<li key={unfall.id_unfall}>{unfall.id_unfall}</li>))}
      </ol>
    
    </div> 
  );
}