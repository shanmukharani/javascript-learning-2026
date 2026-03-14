
//performance measure
const t1 = performance.now();

//code1 to print 10 paragraphs
for(let i =1;i<=10;i++)
{
    let p1 = document.createElement('p');
    p1.textContent = "this is para" + i;
    document.body.appendChild(p1);
}

const t2 = performance.now();

//performance printing
console.log("total time taken by code1: "+ (t2-t1)); //total time taken by code1: 0.2999999998137355


//code2 
const t3 = performance.now();
let mydiv = document.createElement('div');

for(let i =1;i<=10;i++)
{
    let p2 = document.createElement('p');
    p2.textContent = "this is para " + i + " inside a div";
    mydiv.appendChild(p2);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("total time taken by code2: "+ (t4-t3)); //total time taken by code2: 0. here number of reflows and repaints are less here than code 1


//Document fragment - lightweight container used to build DOM elements in memory before adding them to the real DOM. it is faster

let fragment = document.createDocumentFragment();

for(let i=1;i<=5;i++){
    let para = document.createElement('p');
    para.textContent = "this is para "+i+" by Document fragment";
    fragment.appendChild(para); //no reflow or no repaint
}
//below line takes one reflow and one repaint
document.body.appendChild(fragment);
