/* var idad = 14 // var não é clean code
let idade = 14 // let deixa vc mudar depois

idade = 213
const idadee = 14 // const e let sao parecidos

let nome = "Henri :)" // String
let numero = 402 // Int
let numeroFlutuante = 2.58 // Float
let condicao = true // boolean

console.log(typeof nome)
console.log(typeof numero)
console.log(typeof numeroFlutuante)
console.log(typeof condicao)
*/

//let soma1 = prompt("Numerozinho: ")
//let soma2 = prompt("Digita ai rei: ")
//let soma = soma1 + soma2

//console.log(soma)
//document.write(soma)
let quantidade = prompt("quantidade de porções(100g) de jabuticaba")

let energ = document.querySelector('.energ')
let carbo = document.querySelector('.carbo')
let prote = document.querySelector('.prote')
let gT = document.querySelector('.gT')
let fibr = document.querySelector('.fibr')
let vitC = document.querySelector('.vitC')
let mag = document.querySelector('.mag')

energ.innerHTML = "Energia: "+ quantidade*58 +" Kcal",
carbo.innerHTML = "Carboidratos: "+quantidade*15.3+" g",
prote.innerHTML = "Proteinas: "+quantidade*0.6 + " g",
gT.innerHTML = "Gorduras totais: "+quantidade*0.1 + " g",
fibr.innerHTML = "Fibras: "+quantidade*2.3 + " g",
vitC.innerHTML = "Vitamina C: "+quantidade*16.2 + " mg",
mag.innerHTML = "Magnésio: "+quantidade*18.0 + " mg"

