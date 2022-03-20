// ES8
//object. entries() // will print arrays conating key value pair

const user={
    firstName : "iqsam",
     lastName: 'sofi',
     age: 22,

}
console.log(Object.entries(user));

//object.values() => it will gives only values
console.log(Object.values(user));

//object.getOwnPropertyDescriptor =>This method returns an object containing all own property descriptors of an object.
console.log(Object.getOwnPropertyDescriptors(user));

//if we have an empty object
 const emptyObject = {

 }
 console.log(Object.entries(emptyObject));//return empty list

 console.log(Object.values(emptyObject));// return empty list

 console.log(Object.getOwnPropertyDescriptors(emptyObject));//return empty array 


