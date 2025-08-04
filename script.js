let numero;
let chute;
let tentativas;
function geraRandom(){
  numero=  Math.floor(Math.random() * 10) + 1;
  alert("Número gerado com sucesso!")
  tentativas = 5;
  document.getElementById("secao").innerHTML = "X";
  document.getElementById("botao1").disabled = true;
  document.getElementById("botao2").disabled = false;
}
/// VERIFICA SE O NUMERO É IGUAL AO CHUTE
function verificaChute(){
  chute = document.getElementById("valor").value;
  if (chute == numero){
    alert("Acertou!")
    document.getElementById("secao").innerHTML = numero;
    document.getElementById("botao1").disabled = false;
    document.getElementById("botao2").disabled = true;
  }else{
    alert("Ainda não foi dessa vez!")
    if (chute > numero){
      alert("O número é menor!")
    }
   if (chute < numero){
      alert("O número é maior!")
   }
    tentativas = tentativas - 1
    alert("Tentativas restantes: " + tentativas)
  }
  verificaTentativas()
}

///function verificaTentativas()
function  verificaTentativas(){
  if (tentativas == 0){
    alert("Suas tentativas acabaram!")
    alert("O número era: " + numero)
    alert("Reinicie o jogo para tentar novamente!")
    document.getElementById("secao").innerHTML = numero
    document.getElementById("botao1").disabled = false;
    document.getElementById("botao2").disabled = true;
  }
}