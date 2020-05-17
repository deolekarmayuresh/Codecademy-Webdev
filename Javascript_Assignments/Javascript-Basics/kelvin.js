//Constant Kelvin declaration
const kelvin = 293;

//Conversion of kelvin to celsius
const celsius = kelvin - 273;
//console.log(celsius);

//equation for calculating Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//console.log(fahrenheit);

//conversion of celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit);
//console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//equation for calculating newton
let newton = celsius * (33/10);
//console.log(newton);

newton = Math.floor(newton);

//console.log(newton);
console.log(`The temperature is ${newton} degrees Newton.`);

//console.log(celsius);
console.log(`The temperature is ${celsius} degrees Celsius`);