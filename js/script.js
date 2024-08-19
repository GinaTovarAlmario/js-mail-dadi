/*ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato*/
// controllo tutto sia ok
console.log('js ok');
/*
1- mi servirà una variabile per il numero random utente e una per il numero random pc e per il messaggio 
2- dovrò generare due numeri casuali con la formula
3- devo controllare quale dei due numeri è il più alto 
4- annunciare chi è il vincitore*/

// FASE PREPARAZIONE
const userRandomNumber=Math.floor(Math.random()*6)+1;
console.log('numero casuale utente :',userRandomNumber);

const pcRandomNumber=Math.floor(Math.random()*6)+1;
console.log('numero casuale pc:',pcRandomNumber);

let resultMessage ='';
// FASE RACCOLTA DATI

// FASE LAVORAZIONE DATI
if (userRandomNumber > pcRandomNumber){
    resultMessage = "Complimenti! L'utente ha vinto!";
} else if ( userRandomNumber < pcRandomNumber){
    resultMessage = "Ha vinto il PC!";
} else {
    resultMessage = "Abbiamo un pareggio!";
}
console.log(resultMessage);
// FASE DI OUTPUT









/*ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// FASE PREPARAZIONE

// FASE RACCOLTA DATI

// FASE LAVORAZIONE DATI

// FASE DI OUTPUT
