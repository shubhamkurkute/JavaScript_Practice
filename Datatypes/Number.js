// The number type defines both integer and float.
// Nan also belongs to number type.
// Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
//The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.


let number = 20;
console.log(number)

// Large number cannot be stored in number for values beyond 9007199254740991 or less than -9007199254740991
// So to avoid this javascript uses bigInt.
// number datatype does not provide exact value rather print nearest even value.
// We can also say that bigInt is used to store odd value

let num = 9007199254740999; // This will round off to nearest even value.
console.log(typeof(num))
let bigInt = 9007199254740999n; // the "n" at the end means it's a BigInt
console.log(typeof(bigInt)) 
