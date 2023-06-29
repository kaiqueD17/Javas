//function parouimpar(numero) {
  ///  if( numero % 2===0){
  //  console.log( numero + " e par");
//}else{
  //  console.log( numero + " e impar");
//}
//}
//parouimpar(20)

function pessoa(idade){
    if(idade <=5){
         return "Bebe"
    }
 
else if (idade <=13 && idade >=17){
 return "Criança"
}else if(idade <=17){
    return "adolecente"
}else if(idade <=60){
    return "Adulto"
}else if(idade <=80){
    return "idoso"
}else{
    return "anciao"
}
}
