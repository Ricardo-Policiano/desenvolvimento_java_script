
var nome, nota1, nota2;
nome = prompt("digite o seu nome:")
nota1 = prompt("digite a nota1:")
nota2 = prompt("digite a nota2:")

media = (parseInt (nota1) + parseInt (nota2)) / 2;

if (media >= 5 ){
   alert("aprovado!" + nome)
}
else
   alert("reprovado!" + nome); 



