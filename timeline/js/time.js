// Função que captura o valor da idade, acrescenta 50 e devolve para a página
function newIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeFutura = parseInt(idade) + 50; 

    return document.getElementById('idade_futura').value = idadeFutura;  
}
//função que captura o valor da idade e acrescenta 20 dessa vez
function newIdade2() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeFutura2 = parseInt(idade) + 20; 

    return document.getElementById('idade_futura2').value = idadeFutura2;  
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaNovo() {
    let url = 'images/novo.jpeg';

    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('novo').appendChild(img);    
}
//Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e insere na página
function carregaMedio() {
    let url = 'images/medio.jpeg';

    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('medio').appendChild(img);    
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaIdoso() {
    let url = 'images/old.jpeg';

    let img = new Image(250,250);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}

