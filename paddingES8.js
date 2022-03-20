//ES8
//f1 => padding 
//padStart(target,padString)
let price='1234';
console.log(price.padStart(9,6));
console.log(price.padStart(1));// will resturn the origginal string
console.log(price.padStart(9,'Iqsam Sofi'));//it will not return sofi as the length should be equal to 9
let cost= '1234'.padStart(30,'I');
console.log(cost);
console.log(cost.length);
console.log(typeof(cost));

//if we donot pass the padstring option, it takes blank spaces of its own
let price1= '1234'.padStart(9);
console.log(price1);
console.log(price1.length);


//padEnd(target, padstring)
let productPrice= '1234'.padEnd(19,6);
console.log(productPrice);
console.log(productPrice.length);
console.log(typeof(productPrice));

//take blank spaces when not passing the padstring option
let productPrice1= '1234'.padEnd(19);
console.log(productPrice1);
console.log(productPrice1.length);
console.log(typeof(productPrice1));

