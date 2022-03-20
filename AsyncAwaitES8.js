//async,await

async function functionName()
{
    console.log("hello world");
}
functionName();

//async with arrow function
const functionName1 = async() => {
    //function body
    //await
}
//await inside the async

async function functionName2()
{
   let asyncResult1 = await ourAsyncFunction1();
   let asyncResult2 = await ourAsyncFunction2();

return asyncResult1 + asyncResult2;
}
//example


//example
function mypromise()
{
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve('promise is resolved')

        }, 3000);
    });
}

async function ourMessage(){
    const msg = await mypromise();
    console.log(`message : ${msg}`);

}

ourMessage();

//multiple await functions
function FirstPromise()
{
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve(' First Promise is Resolved')

        }, 2000);
    });
}
function SecondPromise()
{
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve(' Second Promise is Resolved')

        }, 3000);
    });
}

function ThirdPromise()
{
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve(' Third Promise is Resolved')

        }, 5000);
    });
}

async function message() 
{
    const first= await FirstPromise();
    const second= await SecondPromise();
    const third= await ThirdPromise();


console.log(`${first} ${second} ${third}`);

}
message();


