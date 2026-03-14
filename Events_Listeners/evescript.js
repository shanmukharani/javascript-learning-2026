let fpara = document.getElementById('fpara');

function changeText(event) {
    console.log(event); //event object   
    fpara.textContent = "hello world";
}
//adding a event listener
fpara.addEventListener('click',changeText); // on clicking "hello dhuniya!!!!" it changes to "hello world"


//removing a event listener
//fpara.removeEventListener('click',changeText);


//changing default action. preventing a default action
let atag = document.getElementById('fanchor');
atag.addEventListener('click',function(event){
    event.preventDefault();
    atag.textContent = "default action changed"
})

//alert event on a button
function alertbtn(){
    alert("You clicked the button")
}
let btn = document.getElementById('btn');
btn.addEventListener('click',alertbtn);

//applying single listener(alert message) to multiple elements in a parent element

function alertmsg(event){
    alert("you clicked on: " + event.target.textContent);
}

// let paras = document.querySelectorAll('p');
// for(let i =0;i<paras.length; i++)
// {
//     let para = paras[i];
//     para.addEventListener('click',alertmsg);
// }

//or we can just add it to the parent element
let mydiv = document.getElementById('fdiv');
mydiv.addEventListener('click',alertmsg)

