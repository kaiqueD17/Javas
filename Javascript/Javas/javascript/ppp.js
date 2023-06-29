function calcularimposto(salario){
    let aliquota;
    if(salario >=0 && salario <=1100){
        return aliquota = 0.01;
    }else if(salario >=1100.01 && salario <=2500){
        return aliquota = 0.1;
    }else{
        return aliquota = 0.15;
    }

}
const valorsalario = 2000;
const valorbeneficio = 250;

const valorimposto = calcularimposto(valorsalario) * valorsalario;
console.log(valorimposto);

const total = valorsalario - valorimposto + valorbeneficio;
console.log(total)
    



