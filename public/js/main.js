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

  if (salario.value > 0 && sonho.value > 0 && gasto.value > 0) {
    liquidoMensal = salario.value - gasto.value;
    tempoMeses = Math.ceil(sonho.value / liquidoMensal);
    if (tempoMeses > 12) {
      tempoAnos = Math.floor(tempoMeses / 12);
      tempoMeses -= tempoAnos * 12;
    }
    if (liquidoMensal > 0) {
      resultado.innerHTML = 'Se voc\xEA economizar R$ ' + liquidoMensal + ' por m\xEAs, em ' + (tempoAnos > 0 ? tempoAnos + ' ano(s) e ' + tempoMeses + ' mes(es)' : tempoMeses + ' mes(es)') + ' voc\xEA ter\xE1 o suficiente para realizar seu sonho, e ainda sobrar\xE1 R$ ' + ((tempoAnos * 12 + tempoMeses) * liquidoMensal - sonho.value) + '.';
    } else {
      resultado.innerHTML = 'Você gasta mais que ganha :c';
    }
  } else {
    resultado.innerHTML = 'Nenhum valor pode ser negativo.';
  }
}

calcular.onclick = calculoFinal;