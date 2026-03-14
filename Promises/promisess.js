// let promise1 = new Promise((resolve,reject) =>
// {
//     console.log("shanmukha"); //promise in pending state. so we need add resolve or reject. to get fulfilled or rejected
// });


// //Asynch code
// let promise2 = new Promise((resolve,reject) => 
// {
//     setTimeout(function sayMyName(){
//         console.log("my name is shashasha");
//     },1000);
//     resolve(1); //fufilled state
// });

// // using .then() , .catch()

// let promise3 = new Promise ((resolve,reject) => 
// {
//     let success = true;
//     if (success){
//         resolve("promise fulfilled")
//     }
//     else{
//         reject("promise Rejected")
//     }
// });

// promise3.then((message)=>
// {
//     console.log("message is "+message);
// }).catch((error)=>{
//     console.log("error"+error);
// });


let promise4 =  new Promise((resolve,reject)=>
{
    let success = true;
    if(success){
        resolve("promise fulfilled");
    }
    else{
        reject("promise rejected");
    }
});


//chaining promise
promise4.then((message)=>
{
    console.log("first msg:" + message);
    return "promise fulfilled second message";
}).then((message)=> {
    console.log("second msg:" + message);
    return 20;
}).then((message)=>{
    console.log("third msg:"+message);
}).catch((error)=>{
    console.error(error);
}).finally((message)=>{
    console.log("runs everytime");
})

let promise5 = new Promise((resolve,reject)=>
{
    setTimeout(resolve,1000, "first");
})

let promise6 = new Promise((resolve,reject)=>
{
    setTimeout(resolve,2000, "Second");
})

let promise7 = new Promise((resolve,reject)=>
{
    setTimeout(resolve,3000, "Third");
})


//an array of promises.
//Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
Promise.all([promise7,promise6,promise5]
    .then((values)=>{
        console.log(values);
    })
    .catch((error)=>{
        console.error("error:"+error);
    })
);


