let pagamento = "debito";


//if(pagamento ==="debito"){
   console.log("recebe 10% de desconto")
//}
//else if(pagamento ==="dinheiro" || pagamento=== "pix") {
   console.log("15% de desconto")
//}
//else if(pagamento === "2x"){
   console.log("preços normal de etiqueta sem juros ")
//}
//else {
   console.log("preços normal de etiqueta mais juros de 10%")
//}
//let pagamento ="debito";

switch (pagamento) {
    case "debito":
        console.log("recebe 10% de desconto");
             break;
        case "dinheiro":
            console.log("15% de desconto");
  break;
       case "pix":
        console.log("15% de desconto");
        break;
        case "2x":
            console.log("preços normal de etiqueta sem juros ");
            break;
    default:
        console.log("preços normal de etiqueta mais juros de 10%");
        break;
}
