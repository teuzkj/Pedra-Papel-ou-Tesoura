idade = prompt("Quantos anos voce tem? ")
if(idade < 18) {
  alert("Voce NÃO pode jogar o jogo! ")
}
if (idade >= 18) {
  escolhaJogador = prompt("Digite 1-pedra,2-papel ou 3-tesoura ")
escolhaComputador = Math.floor(Math.random() * 3) + 1
  
  // Jogador Pedra, Computador Pedra --> empate
// Jogador Tesoura, computador Tesoura --> empate 
// Jogador Papel, Computador Papel --> Empate
  
if (escolhaJogador == escolhaComputador ) {
  alert('EMPATE')
}

// Jogador Pedra, Computador Tesoura ---> Jogador vence
// Computador Pedra, Jogador Tesoura --> Jogador perde
  
if(escolhaJogador == 1) {
  if(escolhaComputador == 3)
    alert("Jogador venceu, PARABENS!")
}
  
if(escolhaJogador == 3) {
  if(escolhaComputador == 1)
    alert("VOCE PERDEU!")
}

// Jogador tesoura, Computador Papel --> Jogador vence
// Computador Tesoura, Jogador Papel --> Jogador perde
  
if(escolhaJogador == 3) {
  if(escolhaComputador == 2)
    alert("jogador venceu, PARABENS!")
}
  
if(escolhaJogador == 2) {
  if(escolhaComputador == 3)
    alert("VOCE PERDEU!")
}
 

// Jogador Papel, Computador Pedra --> Jogador vence
// Computador Papel, Jogador Pedra --> Jogador perde

  if(escolhaJogador == 2) {
  if(escolhaComputador == 1)
    alert("jogador venceu, PARABENS!")
}
  
if(escolhaJogador == 1) {
  if(escolhaComputador == 2)
    alert("VOCE PERDEU!")
}
  

 alert("escolhaComputador: " + escolhaComputador)
}