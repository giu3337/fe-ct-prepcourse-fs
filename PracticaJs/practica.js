// AND && 


// Bucles 
// Acciones repetitivas

let arreglo = ['hola' , 'holatu' , 'holahola'];
 let palabrasUnidas = arreglo.join(' ')
console.log(palabrasUnidas);
let metodoInclude = arreglo.include('hola')


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


// Arrays 

let listaDeCompras = [];
listaDeCompras[3] = 'Tomates'; 
listaDeCompras[1] = 'Lechuga'
console.log(listaDeCompras.length);


// console.log(listaDeCompras);

// let elementoDelArray = listaDeCompras[1];

// console.log(elementoDelArray); 


// Metodos Arrays 

//Split 

let palabra = 'Henri'; 
let palabraSeparada = palabra.split('') // separar la palabra por cada espacio
console.log(palabraSeparada);
palabraSeparada.pop();
palabraSeparada.push('y')
console.log(palabraSeparada);
let palabraArreglada = palabraSeparada.join('')
console.log(palabraArreglada);

let numeros = [1,2,3,4];
// numeros.forEach((num) => console.log(num)); 
// numeros.forEach(num => {if(num === 3) console.log(num)})

let masUno = numeros.map((num) => { // se puede hacer cambios 
    return num + 1; 
})

console.log(masUno);


// Bucles Arrelos 


// For 

// let array = [1,2,3,4,5]; 
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]); // accion sobre cada elemento
    
// }

 function encontrarLetraP (string) {
    let letras = string.split('')
    
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === 'p')
        return 'Si contiene una P'; 
         {
            
        }
        
    }
 }

console.log(encontrarLetraP('javascript'));
console.log(encontrarLetraP('Java'));


// While 

let arr = []; 
while (arr.length < 5) { // condiciones 
    arr.push('Boom')
}

console.log(arr);
/* 
Métodos de inserción

1

1
El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.

2

2
El método pop() elimina y devuelve el último elemento de un arreglo.

3

3
El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

4

4
El método shift() elimina y devuelve el primer elemento de un arreglo.

Métodos varios

1

1
El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.

2

2
El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.

3

3
El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.

4

4
El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
*/


 





//Join