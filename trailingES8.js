//trailing it is allowed in an array 

const numbers =[1,2,3,4,5];
console.log(numbers);
console.log(numbers.length);

//trailing comma=> simply a comma after a last item
const number =[1,2,3,4,5,,];
console.log(number);
console.log(number.length);

// trailing comma is skipped by forEach loop

const num =[1,2,3,4,5,,];
num.forEach(function(result)
{
    console.log(result);
})
//trailing with functions
function add(a,b,)
{
    return a+b;
}
console.log(add(2,40));

//trailing commas with function call
//when passsed as an argument while calling a function=>throws syntax error
// function output(,){} // SyntaxError: missing formal parameter
// (,)=>{}; //SyntaxError: expected expression, got ','
// output(,) //SyntaxError: expected expression, got ','


//when used with rest operators =>throws syntax error
// function test(...arg1,){} // SyntaxError: parameter after rest parameter
// (...arg1,)=>{} // SyntaxError: expected closing parenthesis, got ','
