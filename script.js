/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
Il tipo Stringa è un valore che è sempre scritto tra le virgolette o gli apici. In questo modo "GIACOMO" 'carote' - ma la sua particolarità è che può essere una parola, una lettera e perfino un numero (che di base viene considerato dal computer come una parola) - se anche volessimo fare un'operazione di addizione tra due stringhe non troveremmo altro che le due stringhe accostate di default assieme senza spazio. Come nell'esempio*/
let s11 = "Samsung s11"
let s12 = "Samsung s12"
console.log(s11 + s12); // sarà Samsungs11SamsungS12 
/*
Il tipo Numero è proprio quello che sembra. Un semplice numero con cui si possono fare le operazioni (somma, sottrazione ecc.) e quando viene definito non deve essere scritto in nessun modo particolare - semplicemente così come è. Es.*/
const friends = 5
console.log(friends); // sarà 5
/*
Il tipo Booleano ha solo due risultati: True che vuol dire vero e False che vuol dire falso. In pratica è un tipo di dato che determinata la correttezza di quello che abbiamo scritto. Per esempio */
console.log(5+4 === 9);  //sarà True
console.log(5+4 === 11); //sarà False


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name = "Emanuele Zollo" 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* name = "Giacomo Poretti"
 console.log(name);ù
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 === name2 ? "Bravo, hai ragione": "No, hai sbagliato amico");

let lCname1 = name1.toLowerCase();
let lCname2 = name2.toLowerCase();
console.log(lCname1 === lCname2 ? "Bravo, hai ragione": "No, hai sbagliato amico");