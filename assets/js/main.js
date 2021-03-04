// CREARE UN ARRAY CON DEI COGNOMI ALL'INTERNO
var cognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];
console.log(cognomi);
// CHIEDERE ALL'UTENTE IL COGNOME
var cognomeUtente = prompt("Inserisci il tuo cognome");
console.log(cognomeUtente);

// INSERIRE IL COGNOME DENTRO L'ARRAY PRECENDEMTENTE CREATO
cognomi.push(cognomeUtente);
console.log(cognomi);

// ORDINARE ALFABETICAMENTE I COGNOMI DENTRO LA LISTA
cognomi.sort();
console.log(cognomi);

// STAMPARE LA LISTA IN ORDINE ALFABETICO
document.getElementById('lista-cognomi').innerHTML += "<li>" + cognomi[0] + "</li>" +
"<li>" + cognomi[1] + "</li>" +
"<li>" + cognomi[2] + "</li>" +
"<li>" + cognomi[3] + "</li>" +
"<li>" + cognomi[4] + "</li>" +
"<li>" + cognomi[5] + "</li>" +
"<li>" + cognomi[6] + "</li>";

// INDICARE LA POSIZIONE "UMANA" IN CUI IL COGNOME SI TROVA NELLA LISTA (POSIZIONE ARRAY + 1)
document.getElementById('posizione').innerHTML = "Sei al posto n. " + (cognomi.indexOf(cognomeUtente) + 1) + " nella lista dei cognomi";
