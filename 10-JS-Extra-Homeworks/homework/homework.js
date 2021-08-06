// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for(var prop in objeto){
    matriz.push([prop, objeto[prop]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  var obj = {};
  var aux;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    for (var j = 97; j < 123; j++) {
      if (string.charCodeAt(i) === j) {
        if (obj[string.charAt(i)]) {
            aux = string.charAt(i);
            obj[aux] = obj[aux] + 1;
        } else {
            aux = string.charAt(i);
            obj[aux] = 1;
        }
      }
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var str = '';
  for (var i = 0; i < s.length; i++) {
    if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 ){
      str += s.charAt(i);
    }
  }
  for (var i = 0; i < s.length; i++) {
    if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122 ){
      str += s.charAt(i);
    }
  }
  return str;
}


function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var str2 = '';
  var array = str.split(' ');

  function reverse(s) {
    let str1 = '';
    let aux = s.length;
    while (aux >= 0) {
      str1 = str1 + s.charAt(aux)
      aux--;
    }
    return str1;
  }
  for (var i = 0; i < array.length; i++) {
    str2 = str2.concat(' ' ,reverse(array[i]));
  }
  return str2.trim();
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var esCapicua;
  var n = numero.toString();
  var aux = n.length, aux2;

  if (n.length % 2 === 0) {
    aux2 = n.length / 2;
  } else {
    aux2 = (n.length - 1) / 2;
  }

  for (var i = 0; i < aux2; i++) {
    if (n.charAt(i) === n.charAt(aux-1)) {
      esCapicua = "Es capicua";
      aux--;
    } else {
      esCapicua = "No es capicua";
    }
  }
  return esCapicua;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var str = '';
  var arr = cadena.toLowerCase().split('');
  for (var i = 0; i < cadena.length; i++) {
    if (arr[i] !== 'a' && arr[i] !== 'b' && arr[i] !== 'c') {
      str += cadena.charAt(i);
    }
  }
  return str;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length-i; j++) {
      if (arr[j].length < arr[j-1].length) {
        aux = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = aux;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var array = [];
  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        array.push(arreglo1[i]);
      }
    }
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
