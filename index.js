const $inputA = document.querySelector("#inputA");
const $inputB = document.querySelector("#inputB");
const $resultado = document.querySelector("#resultado");

const $btnSumar = document.querySelector("#btn-sumar");
const $btnRestar = document.querySelector("#btn-restar");
const $btnMultiplicar = document.querySelector("#btn-multiplicar");
const $btnDividir = document.querySelector("#btn-dividir");

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

$btnSumar.addEventListener("click", () => {
  console.log('123')
  const a = Number($inputA.value);
  const b = Number($inputB.value);
  $resultado.textContent = sumar(a, b);
});

$btnRestar.addEventListener("click", () => {
  const a = Number($inputA.value);
  const b = Number($inputB.value);
  $resultado.textContent = restar(a, b);
});

$btnMultiplicar.addEventListener("click", () => {
  const a = Number($inputA.value);
  const b = Number($inputB.value);
  $resultado.textContent = multiplicar(a, b);
});

$btnDividir.addEventListener("click", () => {
  const a = Number($inputA.value);
  const b = Number($inputB.value);
  $resultado.textContent = dividir(a, b);
});
