//getOwnPropertyDescriptors() attributes in javascript

function Employee()
{
    this.empName = "Iqsam";
    this.hello =  function()
          {
              alert("hello")//provides msg
          }
}

  // let employee = new Employee();
// console.log(Object.getOwnPropertyDescriptor(employee, 'empName'));

// //changing value of iqsam => Zara
// // employee.empName ="Zara";
// alert(employee.empName);

// //stop the chang in empName
// Object.defineProperty(employee, 'empName', {writable:false});
// employee.empName ="Zara";
// alert(employee.empName);
 
//enumerable
// to list out the properties of an object 

let employee = new Employee();
let result = Object.keys (employee);
alert(result);


//now i only want to get the hello property not the name
Object.defineProperty(employee, 'empName', {enumerable:false});
let demo = Object.keys (employee);
alert(demo);


//configurable//making the object itself restricted
Object.defineProperty(employee, 'empName', {configurable:false});