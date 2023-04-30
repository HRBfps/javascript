//calculadora em js

function soma() {
    let x = parseInt(document.getElementById('n1').value)
    let y = parseInt(document.getElementById('n2').value)

    return document.getElementById('resultado').value = x+y
}

function sub() {
    let x = parseInt(document.getElementById('n1').value)
    let y = parseInt(document.getElementById('n2').value)

    return document.getElementById('resultado').value = x-y
}

function div() {
    let x = parseInt(document.getElementById('n1').value)
    let y = parseInt(document.getElementById('n2').value)

    return document.getElementById('resultado').value = x/y
}

function mult() {
    let x = parseInt(document.getElementById('n1').value)
    let y = parseInt(document.getElementById('n2').value)

    return document.getElementById('resultado').value = x*y
}