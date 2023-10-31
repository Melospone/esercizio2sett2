/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 20;
let numero2 = 10;

if (numero1 < numero2) {
  console.log("Il numero 20 è più grande");
} else if (numero1 > numero2) {
  console.log("Il numero 10 è più grande");
} else {
  console.log("I numeri sono uguali");
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 12;

if (numero3 !== 7) {
  console.log("not equal");
} else {
  ("i 2 numeri sono uguali");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let divisibile = 10;

if (divisibile % 5 === 0) {
  console.log("il numero è divisibile");
} else {
  console.log("il numero non è divisibile");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 18;

if (num1 === 8 && num2 === 8 || num1 - num2 === 8 || num1 + num2 === 8) {
  console.log("uno dei numeri è 8 e sottraendoli o sommandoli il risultato è 8");
} else {
  console.log("nessuno dei numeri è 8 e non risulta 8 se si sommano o sottragono");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 50;

if (totalShoppingCart + 10 > 50) {
  console.log("hai diritto alla spedione gratuita");
} else if (totalShoppingCart + 10 == 50) {
  console.log("il tuo carello è pari a 50€, aggiungi anche solo 1€ per aver diritto alla spedizione gratuita");
} else {
  console.log("il tuo carello non supera 50€, non hai diritto alla spedizione gratuita")
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 50;
let spedizione = 10;
let sconto = 20;
let calcolo = totalShoppingCart2 * sconto / 100;
let valoreSconto = totalShoppingCart2 - calcolo;
let valoreFinale = valoreSconto


if (valoreFinale > 50) {
  console.log("hai diritto alla spedione gratuita");
} else if (valoreFinale == 50) {
  console.log("il tuo carello è pari a 50€, aggiungi anche solo 1€ per aver diritto alla spedizione gratuita");
} else {
  console.log("il tuo carello non supera 50€, non hai diritto alla spedizione gratuita")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore1 = 18;
let valore2 = 23;
let valore3 = 22;

if (valore1 >= valore2 && valore1 >= valore3) {
  console.log(valore1, valore2, valore3)
} else if (valore2 >= valore1 && valore2 >= valore3) {
  console.log(valore2, valore3, valore1);
} else if (valore3 >= valore1 && valore3 >= valore2) {
  console.log(valore3, valore2, valore1);
} else {
  console.log(valore2, valore1, valore3);
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa1 = "marco";

if (typeof stringa1 === "number") {
  console.log(stringa1 + " è un numero");
} else {
  console.log(stringa1 + " è una stringa");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pariDispari = 18

if (pariDispari % 2 === 0) {
  console.log(pariDispari + "  è pari");
} else {
  console.log(pariDispari + "  è dispari");
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
