
  function randomNumber(min, max) {
    var random = Math.floor( Math.random() * (max - min + 1) ) + min;
    return random;
  }
  
  var arrayCM = [];
  
  for(var i = 0; i < 16; i++){
    arrayCM.push(randomNumber(1,100))
   if(arrayCM.includes(randomNumber) && (numeriPc.indexOf(random) === -1)) arrayCM.push(random)
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