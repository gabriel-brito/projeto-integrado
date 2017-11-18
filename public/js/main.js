'use strict';

// variáveis imutáveis
var calcular = document.querySelector('#calcular'); //Botão

var sonho = document.querySelector('#sonho');
var salario = document.querySelector('#salario');
var gasto = document.querySelector('#gasto');
var resultado = document.querySelector('#resultado');

// variáveis mutáveis;
var liquidoMensal = 0;

function calculoFinal() {
  var tempoMeses = 0;
  var tempoAnos = 0;
  var strResultado = '';
  var valorRestante = 0;

  if (salario.value > 0 && sonho.value > 0 && gasto.value > 0) {
    liquidoMensal = salario.value - gasto.value;
    tempoMeses = Math.ceil(sonho.value / liquidoMensal);
    valorRestante = liquidoMensal * tempoMeses - sonho.value;
    if (tempoMeses > 12) {
      tempoAnos = Math.floor(tempoMeses / 12);
      tempoMeses -= tempoAnos * 12;
    }
    if (liquidoMensal > 0) {
      strResultado = 'Se voc\xEA economizar R$ ' + liquidoMensal + ' por m\xEAs, em ';
      if (tempoAnos > 0) {
        strResultado = strResultado & tempoAnos + ' anos ';
        if (tempoMeses > 0) {
          strResultado = strResultado & 'e ' + tempoMeses + ' meses ';
        }
      } else if (tempoMeses > 0) {
        strResultado = strResultado & tempoMeses + ' meses ';
      }
      strResultado = strResultado & 'você terá o suficiente para realizar seu sonho';
      if (valorRestante > 0) {
        strResultado = strResultado & ', e ainda sobrar\xE1 R$ ' + valorRestante + '!';
      } else {
        strResultado = strResultado & '!';
      }
      resultado.innerHTML = strResultado;
    } else {
      resultado.innerHTML = 'Você gasta mais que ganha :c';
    }
  } else {
    resultado.innerHTML = 'Nenhum valor pode ser negativo.';
  }
}

calcular.onclick = calculoFinal;