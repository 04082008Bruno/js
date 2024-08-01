    //variaveis
    /* let anoNascimento;
     let anoAtual;
     let resultado;
     let idadeCachorro;
     let nome;
     let qualCalculo;


     //entrada de dados pelo usuario
     nome = prompt("Qual seu nome?");
     anoNacimento = parseInt(prompt("Qual o ano de nacimento?"));
     anoAtual = parseInt(prompt("Qual o ano atual?"));

   //primeiro desafio
   resultado = anoAtual - anoNacimento;


   //segundo desafio
   idadeCachorro = resultado * 7;

   
   //terceiro desafio

   //quarto desafio
   qualCalculo = parseInt(prompt("Digite 1 pra idade Humana ou 2 para idade Canina"));

   //mostrar resultado
   if(qualCalculo == 1){
      alert(nome + ", a idade é: " + resultado);
   }
   else if(qualCalculo == 2){
      alert(nome + ", aidade em anos caninos é: " + idadeCachorro);
   } else {
      alert(nome + ", por favor digite um numero valido.");
   }*/

  
  
  
   //desafio ultimato
   // fazer uma calculadora que verefica quantos pontos um estudante
   //precisa para passar de ano no ultimo trimestre

   //dica: o estudante precisa informar as notas do primeiro e segundo trimestre 
   //com esses dadosa calculadora precisa informar quantos pontos ele precisa para passar 
   //de ano no terceiro trimestre. se o estudante ja tiver passado no segundo trimestre,
   //madar uma messsagem de parabens!

   //utilizar como média o valor 6.0


let nota1;
let nota2;
let resultado;

nota1 = parseInt(prompt("qual a nota do 1trim?"));
nota2 = parseInt(prompt("qual a nota do 2trim?"));

resultado = 180 - (nota1+nota2);

if(resultado > 0){
    alert("ainda precisa de " + resultado + "para passar.");
} else {
    alert("Parabéns! Você já etá aprovado!");
}
