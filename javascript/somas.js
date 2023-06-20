let nota1=60;

let nota2=70;

let nota3 =100;

let nota4=50;


let media = (nota1+nota2+nota3+nota4)/4;
console.log(media);

if(media <=39.99){
    console.log("Reprovado");
}else if(media >= 40 && media <= 60.99){
    console.log("Recuperaçao");
}else{
    console.log("Aprovado");
}
