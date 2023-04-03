function soma() {
    let valor1 = parseInt(document.getElementById("valor1").value)
    let valor2 = parseInt(document.getElementById("valor2").value)
    
    let soma = valor1 + valor2
    let resultado = document.getElementById("resultado").value = soma;
}