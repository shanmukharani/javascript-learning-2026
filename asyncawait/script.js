// async function greet() {

//     setTimeout(function(){
//         console.log("hello world!!!")
//     },3000);
    
// }

// greet();
// let output = greet(); //async function always returns a promise
 

async function getdata() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //parse json - async
    let data = await response.json();
    console.log(data); 
 }
 getdata(); 