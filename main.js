
let numero= prompt("ingrese su edad");
if (numero<=6){alert("vas a jardin de infantes");}
else if(numero<12){alert("vas a primaria");}
else{alert("vas a secundaria");}


const kiloPan= 400;
const mediaDocena= 600;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const descuentoEfectivo = 100;

let precioTotal= resta((suma(kiloPan,mediaDocena)),descuentoEfectivo);
console.log(precioTotal)


for( let rifa= 1; rifa<=10; rifa ++){
    let dni= prompt("ingrese su dni");
    alert(`rifa #${rifa} dni ${dni}`);
}


switch(chocolate){
    case "con leche":
        console.log("chocolate con leche");
        break;
    case"negro":
    console.log("chocolate negro");
    break;
    case"blanco":
    console.log("chocolate blanco");
    break;
    default:
        console.log("chocolate sin stock");
        break;
}