// ES7
//includes feature
let numbers= [1,2,3,4,5,6];

if (numbers.includes(2))
{
    console.log("array contains the value");
}
else{
    console.log("array does not contains the value");
}

//old method for the same was using indexOf()

if(numbers.indexOf(2) !== -1) {  console.log("value is present in the array");}


// searching for Nan using indexOf()

let data= [1,2,3,4,5,6,NaN];
console.log(data.indexOf(NaN));  //return -1

// searching for Nan using includes()
console.log(data.includes(NaN));// true


//example
let names= ["Mehnaz", "Aysha","Sahiba", "Abdul Wahid"]
console.log(names.includes('iqsam'));// returns false 

console.log(names.includes("Aysha"));//returns true