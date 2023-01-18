// AND && 


// Bucles 
// Acciones repetitivas


// For

let suma = 0; 
// for (let i = 0; i < 5; i++) {
//     suma = suma + i; 
//     console.log('Variable de iteracion ' , i);   /// sabemos cantidad de pasos segundo parametro 
// }

//  console.log(suma);


// While  // no sabemos cuantos pasos hay que llevar 

while (suma < 3) {
    suma = suma + 1; 
    console.log(suma);
}


function sacar3digitos (num) {
    return`${num}`.length
}

console.log(sacar3digitos(22));