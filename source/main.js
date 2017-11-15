// variáveis imutáveis
const calcular = document.querySelector("#calcular"); //Botão

const sonho = document.querySelector("#sonho");
const salario = document.querySelector("#salario");
const gasto = document.querySelector("#gasto");
const resultado = document.querySelector("#resultado");

// variáveis mutáveis;
let liquidoMensal = 0;

function calculoFinal() {
  let tempoMeses = 0;
  let tempoAnos = 0;

  if (salario.value > 0 && sonho.value > 0 && gasto.value > 0) {
    liquidoMensal = salario.value - gasto.value;
    tempoMeses = Math.ceil(sonho.value / liquidoMensal);
    if (tempoMeses > 12) {
      tempoAnos = Math.floor(tempoMeses / 12);
      tempoMeses -= tempoAnos * 12;
    }
    if (liquidoMensal > 0) {
      resultado.innerHTML = `Se você economizar ${liquidoMensal} por mês, em ${
        tempoAnos > 0
          ? tempoAnos + " anos e " + tempoMeses + " meses"
          : tempoMeses + " meses"
      } você terá o suficiente para realizar seu sonho, e ainda sobrará ${(tempoAnos *
        12 +
        tempoMeses) *
        liquidoMensal -
        sonho.value}.`;
    } else {
      resultado.innerHTML = `Você gasta mais que ganha :c`;
    }
  } else {
    resultado.innerHTML = `Nenhum valor pode ser negativo.`;
  }
}

calcular.onclick = calculoFinal;
