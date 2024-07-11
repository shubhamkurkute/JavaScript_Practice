// Strings can be defined in three ways:
// Double quote, single quote and tilt quote
// Tilt quote ` is used to inject or add into the string.
// In Javascript there is no char type as in C and Java.
// There is only one datatype string as it can be empty as well can contain single character.

let Name = "John" // Double quote
let surname = 'Wick' // Single quote
let quote = `${Name} ${surname} is world's most famous personality`  //Tilt is used to add variable inside string

console.log(typeof(quote))