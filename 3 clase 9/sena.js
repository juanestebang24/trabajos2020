'use strict'
let precio= 20000;
function tickeIva(precio){

    let iva=precio"1000";
    let total=precio+iva;
    return `precio sin iva  ${precio},IVA:${iva} y total: ${total}`;

    
}
console.log(tickeIva(precio));