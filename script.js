//função para adicionar os números na lista
let valores = []
let numero = document.getElementById('txtnumero');//pega o número inserido
let lista = document.getElementById('lista');//pega o elemento tabela
let aviso = document.getElementById('aviso');//elemento aviso
let resposta = document.getElementById('resultado');
  
function verificarNumero(num){
  
  if (Number(num) >= 1 && Number(num) <= 100){
    return true;
  }else {
    return false;
  }
}

//o jeito que guanabara fez
function verificarRepeticao(num,listagem){
  if (listagem.indexOf(Number(num)) != -1){
    return true;
  }else{
    return false;
  }
}



function adicionar(){
  
  //valida se o número que foi inserido tá entre 1 e 100 ou se o campo ta vazio
  if (verificarNumero(numero.value) && !verificarRepeticao(numero.value, valores)){
    aviso.innerHTML = 'ta massa!';
    valores.push(Number(numero.value));
    let item = document.createElement('option');
    item.text = `valor ${numero.value} add`;
    lista.appendChild(item);
  }else{
    aviso.innerHTML = 'ta podi'
  }
  numero.value = '';
  numero.focus();
  resposta.value = '';
}
//essa função não está mostrando o número na lista 😭🤔

//função finalizar que mostra resultados na tela
  //numeros cadastrados
  //maior número
  //menor número
  //soma dos valores inseridos
  //média dos valores inseridos
function finalizar(){
  if (valores.length == 0){
    alert('OPS! Tem que adicionar valores antes de finalizar 😬');
  }else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores [0];
    let soma = 0;
    let media = 0;

    for(let contador in valores){
      soma += valores[contador]
      if(valores[contador] > maior)
        maior = valores[contador]
      if (valores[contador] < menor)
        menor = valores[contador]
    }
    media = soma / total;
    resposta.innerHTML = '';
    resposta.innerHTML += `<p>Temos ${total} números cadastrados</p>`;
    resposta.innerHTML += `<p>O maior valor é ${maior}</p>`;
    resposta.innerHTML += `<p>O menor valor é ${menor}</p>`;
    resposta.innerHTML += `<p>A média dos valores é ${media}</p>`;
  }
}
