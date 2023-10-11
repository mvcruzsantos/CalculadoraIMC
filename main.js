// Esta é a maneira de chamar a função do javascript. É semelhante a construção do java


// declaramos as tres variáveis que vamos utilizar. Note que o tipo é Float, uma vez que terá número quebrado.
// ao declarar a variável, eu digo como e de onde eu vou buscar. 
// variável peso, é parseFloat, que é para converter para float e dizer que getelement (pega o elemento) da id peso, que estará no input de label peso. 
// o mesmo para altura. a variável resultado, ela será dada em string (texto), logo, n tem pq converter para float (parseFloat) nem dizer que é valor (.value).Float
// assim, fica mais curto a obtenção da variável.

// calculo
// para o cáculo, criamos uma nova variável (que já pode ser declarada no momento do resutado), e colocamos como será feito o cálculo.altura


// note que, o resultado do cálculo será a variável "resultado", que vai equivaler ao id resultado, que está no p que será impresso; E é essa variável que precisará ser impressa.

// aí é trabalhar com o if, else. no FileSystem, resultado.textContent ="texto a imprimir". Depois, pode aplicar pontualmente o css direto no java script


function calcule(){
var peso= parseFloat(document.getElementById("peso").value)
var altura= parseFloat(document.getElementById("altura").value)
var resultado= document.getElementById("resposta")

var imc= peso/(altura*altura);

if (imc<18.5){
resultado.textContent="baixo peso";
// resultado.style.color= "#90ee90";
resultado.style.backgroundcolor= "green";
}else if(imc>18,5 && imc<=24,99){

resultado.textContent="peso normal";
// resultado.style.color= "#ffff00";
resultado.style.backgroundcolor= "yellow";
}else if(imc>24,99 && imc<=29,99){

resultado.textContent="sobrepeso";
// resultado.style.color= "#ff7f00";
resultado.style.backgroundcolor= "orange";
}else if(imc>30){
resultado.textContent="obesidade";
// resultado.style.color= "#ff0000";
resultado.style.backgroundcolor= "red";
}else{
resultado.textContent="Erro no Cálculo";
}

}