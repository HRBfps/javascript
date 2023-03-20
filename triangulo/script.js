/*
Colocar imagem/tag html, a partir do document.write
document.write('<img class="triangulo" src="./images/triangulo.jpg" alt="deu ruim">')
*/

let lado1 = parseInt(prompt("Qual a largura do primeiro lado do seu triangulo?"))
let lado2 = parseInt(prompt("Qual a largura do segundo lado do seu triangulo?"))
let lado3 = parseInt(prompt("Qual a largura do terceiro lado do seu triangulo?"))

if (lado1 <= lado2 + lado3 &&
    lado2 <= lado3 + lado1 &&
    lado3 <= lado1 + lado2) {
        if ((lado1 == lado2) && (lado1 == lado3)){
            document.write('<p>Equilatero(Tudo Igual)</p> <section class="sec"><img class="triangulo" src="./images/equilatero.png"></section>') 
        }else if ((lado1 !== lado2) && (lado2 !== lado3) && (lado1 !== lado3)) {
            document.write('<p>Escaleno(Todos iguais)</p> <section class="sec"> <img class="triangulo" src="./images/escaleno.png"></section>') 
        }else{
            document.write('<p>Isósceles(Só dois iguais)</p> <section class="sec"> </p><img class="triangulo" src="./images/isósceles.png"></section>') 
        }
    }else {
        document.write('<p class="erro">isso nem é triangulo bobao</p>')
    }
/*
document.write('<section class="sec"><p></p><img class="triangulo" src="./images/triangulo.png"></section>') */
