/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
     if (x === y) {
      return true
   } else if (x != y ){ 
      return false; 
   }

}

function tienenMismaLongitud(str1, str2) {
   if ( str1.length === str2.length) {
      return true;
   } else {
       return false; 
   }

   // Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.
   // Tu código:
}



function menosQueNoventa(num) {

   if (num < 90) {
      return true;
   } else {
      return false;
   }

   // Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:
}

function mayorQueCincuenta(num) {
   if (num > 50) {
      return true; 
   } else {
      return false; 
   }
   // Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:
}

function esPar(num) {
   if (num % 2 == 0) {
      return true;
   } else {
      return false; 
   }
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:

   // num % 2 == 0 se saca el par 
}

function esImpar(num) {
   if (num % 2) {
      return true;
   } else {
      return false; 
   }
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
