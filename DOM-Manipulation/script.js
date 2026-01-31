//dom manipulation styling html

// to access a specific HTML element by Id so JavaScript can manipulate it.
const para = document.getElementById("fpara");
para.style.backgroundColor = "red";

const heading = document.getElementById("fheading");

// to access a specific HTML element by ClassName so JavaScript can manipulate it.
const textmatter = document.getElementsByClassName("textmatter");
textmatter[0].style.backgroundColor = "orange";
textmatter[1].style.backgroundColor = "lightblue";

//to access a specific HTML element by TagName so JavaScript can manipulate it.
const p = document.getElementsByTagName("p");
p[3].style.backgroundColor = "yellow";

//to access a html elements using css selector rules
const para1 = document.querySelector('#tpara'); //Id
para1.style.backgroundColor = "pink";

const textmatter1 = document.querySelector('.textmatter'); //ClassName
const p1 = document.querySelector('p'); //tags
// returns only the first element, when multiple matches found because it follows CSS selector behavior and is optimized for single-element selection. 

//to return all
const p2 = document.querySelectorAll('p'); //If no matches are found, it returns an empty NodeList.


//modifying
//innerHTML
let ele1 =  document.getElementById("123");
let con1 = ele1.innerHTML;
console.log(con1);

//innertext
let ele2 = document.getElementById("mydiv");
let con2 = ele2.innerText;
console.log(con2);

//outerHTML
let ele3 =  document.getElementById("456");
let con3 = ele3.outerHTML;
console.log(con3);

//textcontent
let ele4 =  document.getElementById("789");
let con4 = ele4.textContent
console.log(con4);


//creating elements
let fhead = document.createElement('h2');
fhead.textContent = "adding element";

//adding element
document.body.appendChild(fhead);
// appendChild moves the element if it already exists in the DOM
let add1 = document.querySelector('p');
add1.appendChild(fhead);  // adds at last 

//using insertAdjacentElement() - we can add at the position we want 

let adj1 = document.createElement('h4');
adj1.textContent = "inserting element beforebegin";
mydiv123.insertAdjacentElement('beforebegin', adj1);

let adj2 = document.createElement('h4');
adj2.textContent = "inserting element afterbegin";
mydiv123.insertAdjacentElement('afterbegin', adj2);

let adj3 = document.createElement('h4');
adj3.textContent = "inserting element beforeend";
mydiv123.insertAdjacentElement('beforeend', adj3);

let adj4 = document.createElement('h4');
adj4.textContent = "inserting element afterend";
mydiv123.insertAdjacentElement('afterend', adj4);

//removing 
let parent = document.querySelector('#mydiv123');
let child = document.querySelector('#para123');
parent.removeChild(child);


// dom manipulation styling css

//using .style. - doesnt overwrite styles
let paraele1 = document.getElementById('secpara'); //get
paraele1.style.backgroundColor = 'gray'; //set
paraele1.style.color = 'white';
paraele1.style.fontSize = '30px';

//using .cssText  - for get and set multiple css inline elements. It works only with inline styles. overwrites styles
let divele1 = document.getElementById('sdiv');
divele1.style.cssText; //get
divele1.style.cssText = 'color: red; font-size: 20px; background-color: pink; padding: 0.5rem;' //set

//using setAttribute() . it is used to add or change an HTML attribute on an element.

let img1 = document.getElementById("pic");
img1.setAttribute("src", "image.jpg");
img1.setAttribute("alt", "profile picture");

// classList is a property of a DOM element that lets you add, remove, toggle, and check CSS classes easily.

let list1 = document.getElementById('firpara');
list1.classList.add('active');
list1.classList.remove('card');
list1.classList.toggle('card');