// variáveis imutáveis
const calcular = document.querySelector('#calcular'); // botão

const sonho = document.querySelector('#sonho');
const salario = document.querySelector('#salario');
const gasto = document.querySelector('#gasto');
const resultado = document.querySelector('#resultado');

// variáveis mutáveis;
let liquidoMensal = 0;

function alternarClasses(elemento, classe) {
  elemento.classList.remove('alert-info', 'alert-warning', 'alert-success', 'alert-danger');
  elemento.classList.add(classe);
}
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
      resultado.innerHTML = `Se você economizar R$ ${liquidoMensal} por mês, em ${
        tempoAnos > 0 ? `${tempoAnos} ano(s) e ${tempoMeses} mes(es)` : `${tempoMeses} mes(es)`
      } você terá o suficiente para realizar seu sonho, e ainda sobrará R$ ${
        (((tempoAnos * 12) + tempoMeses) * liquidoMensal) - sonho.value
      }.`;
      alternarClasses(resultado, 'alert-success');
    } else {
      resultado.innerHTML = 'Você gasta mais que ganha :c';
      alternarClasses(resultado, 'alert-warning');
    }
  } else {
    resultado.innerHTML = 'Nenhum valor pode ser negativo.';
    alternarClasses(resultado, 'alert-danger');
  }
}
calcular.onclick = calculoFinal;
