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

if (quantidade > 8) {
    let energ = document.querySelector('.energ')
    let carbo = document.querySelector('.carbo')
    let prote = document.querySelector('.prote')
    let gT = document.querySelector('.gT')
    let fibr = document.querySelector('.fibr')
    let vitC = document.querySelector('.vitC')
    let mag = document.querySelector('.mag')
    let texto = document.querySelector('.texto')
    
    let qnt = quantidade*15.3
    qnt = qnt.toFixed(2)
    energ.innerHTML = "Energia: "+ quantidade*58 +" Kcal",
    carbo.innerHTML = "Carboidratos: "+qnt+" g",
    qnt = quantidade*0.6
    qnt = qnt.toFixed(2)
    prote.innerHTML = "Proteinas: "+qnt + " g",
    qnt = quantidade*0.1
    qnt = qnt.toFixed(2)
    gT.innerHTML = "Gorduras totais: "+qnt + " g",
    qnt = quantidade*2.3
    qnt = qnt.toFixed(2)
    fibr.innerHTML = "Fibras: "+qnt + " g",
    qnt = quantidade*16.2
    qnt = qnt.toFixed(2)
    vitC.innerHTML = "Vitamina C: "+qnt + " mg",
    qnt = quantidade*18.0
    qnt = qnt.toFixed(2)
    mag.innerHTML = "Magnésio: "+ qnt + " mg"
    texto.innerHTML = "A quantidade de calorias representa "+ quantidade*3+"% do valor diário, mais do que 25%, melhor mudar de cardápio."
} else {
    let energ = document.querySelector('.energ')
    let carbo = document.querySelector('.carbo')
    let prote = document.querySelector('.prote')
    let gT = document.querySelector('.gT')
    let fibr = document.querySelector('.fibr')
    let vitC = document.querySelector('.vitC')
    let mag = document.querySelector('.mag')
    let texto = document.querySelector('.texto')
    
    let qnt = quantidade*15.3
    qnt = qnt.toFixed(2)
    energ.innerHTML = "Energia: "+ quantidade*58 +" Kcal",
    carbo.innerHTML = "Carboidratos: "+qnt+" g",
    qnt = quantidade*0.6
    qnt = qnt.toFixed(2)
    prote.innerHTML = "Proteinas: "+qnt + " g",
    qnt = quantidade*0.1
    qnt = qnt.toFixed(2)
    gT.innerHTML = "Gorduras totais: "+qnt + " g",
    qnt = quantidade*2.3
    qnt = qnt.toFixed(2)
    fibr.innerHTML = "Fibras: "+qnt + " g",
    qnt = quantidade*16.2
    qnt = qnt.toFixed(2)
    vitC.innerHTML = "Vitamina C: "+qnt + " mg",
    qnt = quantidade*18.0
    qnt = qnt.toFixed(2)
    mag.innerHTML = "Magnésio: "+ qnt + " mg"
}
