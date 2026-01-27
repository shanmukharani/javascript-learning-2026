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

let add1 = document.querySelector('p');
add1.appendChild(fhead);





