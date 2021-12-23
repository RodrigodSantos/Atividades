function somar(n1, n2){
  return `${n1} + ${n2} = ${n1 + n2}`
}
function subtrair(n1, n2){
  return `${n1} - ${n2} = ${n1 - n2}`
}
function multiplicar(n1, n2){
  return `${n1} * ${n2} = ${n1 * n2}`
}
function dividir(n1, n2){
  return `${n1} / ${n2} = ${n1 / n2}`
}
var n1 = Number(prompt('Digite um número:'));
var op = prompt('Digite a opetação desejada:');
var n2 = Number(prompt('Digite outro número:'));
if (op ==='+'){
  var res = somar(n1, n2) // 'let' não funcionaria
}else if (op === '-'){
  var res = subtrair(n1, n2)
}else if (op === '*'){
  var res = multiplicar(n1, n2)
}else if (op === '/'){
  var res = dividir(n1, n2)
}
alert(res)
console.log(res); // -> não funcionaria se a váriavel fosse atribuida em "let" não funcionaria
