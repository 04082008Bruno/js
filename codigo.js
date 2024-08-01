let NOME;
let NASC;
let ANO;
let IDADE;
let DOG;
let IDADEDOG;
let qualCalculo; 

resultado = ANO - NASC;
NOME = prompt("Qual seu nome?")
NASC = parseInt(prompt("Você nasceu quando?  "));
ANO =  parseInt(prompt("Em que ano estamos?  "));
IDADE = ANO - NASC;

alert(NOME + "  Você tem " + IDADE );

DOG = parseInt(prompt("O seu cachorro nasceu quando? "));
ANO = parseInt(prompt("Em que ano estamos ?"));
IDADEDOG = (ANO - DOG) * 7;
alert("O seu cachorro tem " + Math.floor(IDADEDOG) );

qualCalculo = parseInt("Digite uma idade humana e 2 para idade canina ")

if(qualCalculo == 1){
    alert( NOME + "A idade é"+ IDADE)
}
else if(qualCalculo ==2){
    alert(NOME + ",a idade em anos caninos é" + IDADEDOG)
}
else {
    alert(NOME + ", por favor digite um número válido")
}
