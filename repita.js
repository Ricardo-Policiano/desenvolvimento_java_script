function acaobotao() {
    var sairloop, valor1, valor2
    do{
        valor1 = prompt("digite o valor1: ")
        valor2 = prompt("digite o valor2: ")
        document.getElementById("paragrafo").innerText = "resultado: " + (parseInt(valor1) + parseInt(valor2) )
        sairloop = prompt("deseja sair? S/N")
    }while(sairloop == "N")
}