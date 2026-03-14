/* 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10],
 crea una función **elevados** que sea el resultado de elevar cada número a si mismo. */

let numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados(numbers) {
  return numbers.map((n) => n ** n);
}
console.log(elevados(numbers));

/* FORMA DOS
elevados = numbers.map((n) => n ** n); */

/* FORMA TRES
function elevados(numbers) {
  let potencia = (n) => n ** n;
  let resultadoP = numbers.map(potencia);
  return resultadoP;
}
elevados(numbers);*/

/* 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'],
generar un segundo array que consiga generar de salida el resultado esperado. */

foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
result2 = foodList.map((food) => {
  if (food === "Pizza") return `Como soy de Italia, amo comer ${food}`;
  else if (food === "Ramen") return `Como soy de Japón, amo comer ${food}`;
  else if (food == "Paella") return `Como soy de Valencia, amo comer ${food}`;
  else return `Aunque no como carne, el Entrecot es sabroso`;
});

console.log(result2);

/* 3.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo 
 accediendo a las propiedades del objeto proporcionado: */

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];
/*
  [
    '${Pepe} es ${The Boss} y le gusta ${leer} y ${ver pelis}',
    '${Ana} es ${becaria} y le gusta ${nadar} y ${bailar}',
    '{${Luis} es ${programador} y le gusta ${dormir} y ${comprar}',
    '${Ana} es ${becaria} y le gusta ${nadar} y ${bailar}',
    '${Carlos} es ${secretario} y le gusta ${futbol} y ${queso}'
  ]
*/
const result3 = staff.map((item) => {
  let frase = `${item.name} es ${item.role} y le gusta ${item.hobbies[0]} y ${item.hobbies[1]}`;
  return frase;
});
console.log(result3);

// 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

result4 = numbers2.filter((n) => n % 2 != 0);
console.log(result4);

//5.- Dado el array foodList2, genera un segundo array result5 que filtre
// los platos veganos y saque una sentencia como la del ejemplo

foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];
/* ['Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!'] */

const platosVeganos = foodList2.filter((plato) => {
  if (plato.isVeggie) return plato;
});
result5 = platosVeganos.map((plato, index) => {
  const palabra = index % 2 == 0 ? "rico" : "rica";
  return `Que ${palabra} ${plato.name} me voy a comer!`;
});
console.log(result5);

//6.- Dado el array **inventory**,
// devolver un array con los nombres de los elementos
// que valgan más de 300 euros.

inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a Cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];
/*[
    'TV Samsung',
    'Viaje a Cancún'
  ] */

let elementosCaros = inventory.filter((item) => {
  return item.price > 300;
});
result6 = elementosCaros.map((n) => {
  return n.name;
});
console.log(result6);

//6.- Dado el siguiente array **numeros** [39, 2, 4, 25, 62],
// obten la multiplicación de todos los elementos del array

numeros3 = [39, 2, 4, 25, 62];

result7 = numeros3.reduce((a, b) => {
  return a * b;
});
console.log(result7);

//7.- Concatena todos los elementos del array con reduce
// para que devuelva una sola frase

const sentenceElements = [
  "Me",
  "llamo",
  ,
  /* Tu nombre aqui! */ "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

result8 = sentenceElements.reduce((acumuladorFrase, palabra, indice) => {
  
  if (indice === 3) palabra = "Karina";

  return acumuladorFrase + " " + palabra;
});
console.log(result8);

//8.- Obtener el monto total de los elementos que pertenecen a
// catergory "code" en el siguiente array.

books = [
  {
    name: " JS for dummies",
    author: "Emily A. Vander Veer",
    price: 20,
    category: "code",
  },
  {
    name: "Don Quijote de la Mancha",
    author: "Cervantes",
    price: 14,
    category: "novel",
  },
  {
    name: "Juego de tronos",
    author: "George R. Martin",
    price: 32,
    category: "Fantasy",
  },
  {
    name: "javascript the good parts",
    author: "Douglas Crockford",
    price: 40,
    category: "code",
  },
];
// Resultado --> 60

const librosCode = books.filter((libro) => {
  if (libro.category === "code") return libro;
});
console.log(librosCode);

/* let precios = librosCode.map(libro => {return libro.price});
console.log(precios);

let result9 = precios.reduce((acumulador, precioActual) => {
  return acumulador + precioActual;
});
console.log(result9);*/

let initialValue = 0 
let result9 = librosCode.reduce((acumulador, precioActual) => {
  return acumulador + precioActual.price;
}, initialValue);
console.log(result9);