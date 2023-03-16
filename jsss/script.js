/* média de 3 notas (1)

let nota1 = parseFloat(prompt("Informe a primeira nota"));
let nota2 = parseFloat(prompt("Informe a segunda nota"));
let nota3 = parseFloat(prompt("Informe a terceira nota"));

let res = ("a média das notas foram", (nota1+nota2+nota3) /3)
res = res.toFixed(2)

if (res >= 7) {
    alert("Sua média foi: "+ res + "Aprovado!")
}else {
    alert("Sua média foi:   "+ res + "Reprovado")
}
*/
//Colocar imagem/tag html, a partir do document.write
//document.write('<img class="triangulo" src="./images/triangulo.jpg" alt="deu ruim">')

/* Número ao quadrado (2)
let numero = parseInt(prompt("Mim dê papai:")) 
alert("Seu numero ao quadrado é: "+numero * numero+" ("+ numero +" Vezes "+ numero +")") //só multipliquei por ele mesmo(numero*numero)
*/
/* Maior e Menor (3)
let maior = 0
let menor = 0

let n1 = parseInt(prompt("manda um numero(1)"))
if (n1 >= maior) {
    maior = n1
    menor = n1
}
let n2 = parseInt(prompt("manda um numero(2)"))
if (n2 >= maior) {
    maior = n2
}else {
    menor = n2
}
let n3 = parseInt(prompt("manda um numero(3)"))
if (n3 > maior) {
    maior = n3
}else {
    if (n3 < menor) {
        menor = n3
    }
}
let n4 = parseInt(prompt("manda um numero(4)"))
if (n4 > maior) {
    maior = n4
}else {
    if (n4 < menor) {
        menor = n4
    }
}
let n5 = parseInt(prompt("manda um numero(5)"))
if (n5 > maior) {
    maior = n5
}else {
    if (n5 < menor) {
        menor = n5
    }
} 
document.write("O maior é: ", maior+"<br>")
document.write("O menor é: ", menor)
*/