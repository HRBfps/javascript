// média de 3 notas
/*let nota1 = parseFloat(prompt("Informe a primeira nota"));
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

/*
let numero = parseInt(prompt("Mim dê papai:")) 
alert("Seu numero ao quadrado é: "+numero * numero+" ("+ numero +" Vezes "+ numero +")") //só multipliquei por ele mesmo(numero*numero)
*/

let n1 = parseInt(prompt("manda um numero(1)"))
let n2 = parseInt(prompt("manda um numero(2)"))
let n3 = parseInt(prompt("manda um numero(3)"))
let n4 = parseInt(prompt("manda um numero(4)"))
let n5 = parseInt(prompt("manda um numero(5)"))

if (n1 > n2)+(n1 > n3)+(n1 > n4)+(n1 > n5);{
    alert("O maior numero é: "+n1);
}else if (n2 > n1)+(n2 > n3)+(n2 > n4)+(n2 > n5);{
    alert("O maior numeor é: "+n2)
}