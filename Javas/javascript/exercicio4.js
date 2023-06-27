//let peso = 86 ;
//let altura = 1.78;

//imc = peso / (altura*altura);
//console.log(imc);

//function imc(peso,altura){
    
  //  const resultado = peso / (altura*altura);
  // return resultado;
//}
//console.log(imc(81,1.79));


function imc(peso,altura){

    let resultado = peso /(altura*altura);

    if(resultado <=24.9 ){
        return "peso normal"
    }
    else if(resultado >=25 && resultado <=29.9 ){
        return "sobrepeso"
    }
    else if (resultado >=30 && resultado <=34.9){
        return "obesidade grau 1"
    }
    else if (resultado >=35 && resultado >=39.9){
        return "obesidade grau 2"
    }
    else {
        return "Obesidade grau 3"
    }
}
console.log(imc (89,1.89));
console.log(imc (81,1.79));
console.log(imc (40,1.50));





