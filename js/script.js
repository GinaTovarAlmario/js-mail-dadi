/*ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato*/
// controllo tutto sia ok
console.log('js ok');
/*
1- mi servirà una variabile per il numero random utente e una per il numero random pc e per il messaggio e prendere l'elememnto dal DOM
che mi servirà per stampare inpagina
2- dovrò generare due numeri casuali con la formula
3- devo controllare quale dei due numeri è il più alto 
4- annunciare chi è il vincitore*/

// FASE PREPARAZIONE
const result = document.getElementById('result');
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
result.innerText = `Numero casuale utente: ${userRandomNumber}\n Numero casuale pc: ${pcRandomNumber}.\n ${resultMessage}`;
/*ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

/*
1- mi servirà una variabile per le mail autorizzate e per il messagio per stampare in pagina
2- nel DOM dovrò creare il mio form con uno spazio mail e un bottone
3- dovrò chiedere all'utente di inserire una mail attraverso elementi in pagina
4- dovrò controllare se la mail inserita dall'utente è nella lista di mail autorizzate
5- se la mail è inclusa diamo un messaggio di benvenuto
6- se la mail non è inclusa diamo un messaggio negativo
7- uso la variabile creata all'inizio per stampare il risultato in pagina
*/

// FASE PREPARAZIONE
const emailAuthorized = ["me.gina@gmail.com","me.paola@gmail.com","pagi@gmail.com","gipa@yahoo.it","folino@hotmail.it","triglia@hotmail.it"];
let receivedEmail ='';
// FASE RACCOLTA DATI
const button = document.querySelector('button');
const emailField = document.getElementById('email');
// FASE LAVORAZIONE DATI
button.addEventListener('click',function(){
    const receivedEmail = emailField.value.trim();
    console.log(receivedEmail);
    // uso una variabile di appoggio
    let finalMessage ='';
    for(i=0; i< emailAuthorized.length; i++){
        if(emailAuthorized[i]=== receivedEmail){
            finalMessage ='email autorizzata. Bentornato';
        }
    }
    // se finalMessage è ancora uguale a stringa vuota non ho avuto nessuna corrispondenza
    if (finalMessage === ''){
        finalMessage ='email non autorizzata!';
    }
    // FASE DI OUTPUT
    console.log(finalMessage);
    alert(finalMessage);
});
