function changeText(event) {
    console.log(event); //event object
    let fpara = document.getElementById('fpara');
    fpara.textContent = "hello world";
}

let fpara = document.getElementById('fpara');

//adding a event listener
fpara.addEventListener('click',changeText); // on clicking "hello dhuniya!!!!" it changes to "hello world"


//removing a event listener
//fpara.removeEventListener('click',changeText);
