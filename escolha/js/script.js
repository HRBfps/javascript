//escolher a pagina
let opcao = parseInt(prompt("Digite a pagina desejada (1 a 3)"))

switch(opcao) {
    case 1: 
        location.href = './pages/pagina1.html'
        break
    case 2: 
        location.href = './pages/pagina2.html'
        break
    case 3: 
        location.href = './pages/pagina3.html'
        break
    default:
        location.href = './index.html'
}