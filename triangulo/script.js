/*
Colocar imagem/tag html, a partir do document.write
document.write('<img class="triangulo" src="./images/triangulo.jpg" alt="deu ruim">')
*/

let lado1 = parseInt(prompt("Qual a largura do primeiro lado do seu triangulo?"))
let lado2 = parseInt(prompt("Qual a largura do segundo lado do seu triangulo?"))
let lado3 = parseInt(prompt("Qual a largura do terceiro lado do seu triangulo?"))

if ((lado1 == lado2) && (lado1 == lado3)){
    document.write('<section class="sec"> <p>Equilatero(Tudo Igual)</p> <img class="triangulo" src="./images/equilatero.png"></section>') 
}else if ((lado1 !== lado2) && (lado2 !== lado3) && (lado1 !== lado3)) {
    document.write('<section class="sec"><p>Isósceles (Todos diferentes) </p><img class="triangulo" src="./images/escaleno.png"></section>') 
}else{
    document.write('<section class="sec"><p>Escaleno(Só dois iguáis)</p><img class="triangulo" src="./images/isósceles.png"></section>') 
}
/*
document.write('<section class="sec"><p></p><img class="triangulo" src="./images/triangulo.png"></section>') */
