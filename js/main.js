/* Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 */

/* all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
 */

function randomNumber(min, max) {
    var random = Math.floor( Math.random() * (max - min + 1) ) + min;
    return random;
  }
  
  var arrayCM = [];

var difficoltà = parseInt(prompt("Scegli il livello di difficoltà: 0 = facile, 1 = intermedio, 2 = difficile"));

switch (difficoltà) {
    case 2:
        var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 50 fino a quando non vinci'));
        for(var i = 0; i < 16; i++){
            arrayCM.push(randomNumber(1,50))
           if(arrayCM.includes(randomNumber) && (arrayCM.indexOf(random) === -1)) arrayCM.push(random)
          };
          console.log(arrayCM);
          
          for(var i = 0; i <= 34; i++){
            var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 100 fino a quando non vinci'));
            if(arrayCM.includes(numeroInserito)){
                alert('Hai perso '+'hai totalizzato ' + i +' punti');
                break;
              }
            
            if((isNaN(numeroInserito) == false) && ((numeroInserito > 0) && (numeroInserito <= 100))) {
                continue;
            }
            
            else{
              alert("Valore inserito non valido");
            }
          };
    break;
    case 1:
        var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 80 fino a quando non vinci'));
        for(var i = 0; i < 16; i++){
            arrayCM.push(randomNumber(1,80))
           if(arrayCM.includes(randomNumber) && (arrayCM.indexOf(random) === -1)) arrayCM.push(random)
          };
          console.log(arrayCM);
          
          for(var i = 0; i <= 64; i++){
            var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 100 fino a quando non vinci'));
            if(arrayCM.includes(numeroInserito)){
                alert('Hai perso '+'hai totalizzato ' + i +' punti');
                break;
              }
            
            if((isNaN(numeroInserito) == false) && ((numeroInserito > 0) && (numeroInserito <= 100))) {
                continue;
            }
            
            else{
              alert("Valore inserito non valido");
            }
          };
    break;
    case 0: 
        var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 100 fino a quando non vinci'));
        for(var i = 0; i < 16; i++){
            arrayCM.push(randomNumber(1,100))
           if(arrayCM.includes(randomNumber) && (arrayCM.indexOf(random) === -1)) arrayCM.push(random)
          };
          console.log(arrayCM);
          
          for(var i = 0; i <= 84; i++){
            var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 100 fino a quando non vinci'));
            if(arrayCM.includes(numeroInserito)){
                alert('Hai perso '+'hai totalizzato ' + i +' punti');
                break;
              }
            
            if((isNaN(numeroInserito) == false) && ((numeroInserito > 0) && (numeroInserito <= 100))) {
                continue;
            }
            
            else{
              alert("Valore inserito non valido");
            }
          };
    break;
}
  
  for(var i = 0; i < 16; i++){
    arrayCM.push(randomNumber(1,100))
   if(arrayCM.includes(randomNumber) && (arrayCM.indexOf(random) === -1)) arrayCM.push(random)
  };
  console.log(arrayCM);
  
  for(var i = 0; i <= 84; i++){
    var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 100 fino a quando non vinci'));
    if(arrayCM.includes(numeroInserito)){
        alert('Hai perso '+'hai totalizzato ' + i +' punti');
        break;
      }
    
    if((isNaN(numeroInserito) == false) && ((numeroInserito > 0) && (numeroInserito <= 100))) {
        continue;
    }
    
    else{
      alert("Valore inserito non valido");
    }
  };