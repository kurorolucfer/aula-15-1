const tela = document.getElementById("tela")
const porcentagem = document.getElementById("porcentagem")
const limpar = document.getElementById("limpar")
const divisao = document.getElementById("divisao")
const multiplicacao = document.getElementById("multiplicacao")
const subtracao = document.getElementById("subtracao")
const adicao = document.getElementById("adicao")
const zero = document.getElementById("zero")
const um = document.getElementById("um")
const dois = document.getElementById("dois")
const tres = document.getElementById("tres")
const quatro = document.getElementById("quatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")
const sete = document.getElementById("sete")
const oito = document.getElementById("oito")
const nove = document.getElementById("nove")
const calcular =document.getElementById("calcular")

let listaNumeros = []

calcular.addEventListener('click', () =>{
    const arrayStringada = listaNumeros.join("")//JOIN transforma 
    const resultado = eval(arrayStringada)
    listaNumeros = [resultado]
    atualizarTela()
})

function atualizarTela() {
    //antes de fazer o laço , ele limpa a tela
    tela.textContent = ""
    //faz o laço de repetiçao , colocando tudo que tem no array AGORA!
    listaNumeros.map(item => tela.textContent += item)
}
function limparTela (){
    tela.textContent = "0"
    listaNumeros = []
} 


porcentagem.addEventListener("click",() =>{
    listaNumeros.push("%")
    atualizarTela()
})
limpar.addEventListener("click",() =>{
   limparTela()
})
divisao.addEventListener("click",() =>{
    listaNumeros.push("/")
    atualizarTela()
})
multiplicacao.addEventListener("click",() =>{
    listaNumeros.push("*")
    atualizarTela()
})
subtracao.addEventListener("click",() =>{
    listaNumeros.push("-")
    atualizarTela()
})
adicao.addEventListener("click",() =>{
    listaNumeros.push("+")
    atualizarTela()
})
zero.addEventListener("click",() =>{
    listaNumeros.push(0)
    atualizarTela()
    if(zero <= 0) {

    }
})
//um.addEventListener("click", function() {})
um.addEventListener("click", () => { //arrow function
    //adiciona um novo numero(1)
    listaNumeros.push(1)
    //executaa funçao de atualizar a tela
    atualizarTela()
})
dois.addEventListener("click",() =>{
    listaNumeros.push(2)
    atualizarTela()
})
tres.addEventListener("click",() =>{
    listaNumeros.push(3)
    atualizarTela()
})
quatro.addEventListener("click",() =>{
    listaNumeros.push(4)
    atualizarTela()
})
cinco.addEventListener("click",() =>{
    listaNumeros.push(5)
    atualizarTela()
})
seis.addEventListener("click",() =>{
    listaNumeros.push(6)
    atualizarTela()
})
sete.addEventListener("click",() =>{
    listaNumeros.push(7)
    atualizarTela()
})
oito.addEventListener("click",() =>{
    listaNumeros.push(8)
    atualizarTela()
})
nove.addEventListener("click",() =>{
    listaNumeros.push(9)
    atualizarTela()
})

