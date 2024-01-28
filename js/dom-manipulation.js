const body = document.querySelector('body');

//a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');

p.style.color = 'red';
p.textContent = "Hey, I'm red!";

body.appendChild(p);

//an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');

h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

body.appendChild(h3);

//a <div> with a black border and pink background color with the following elements inside of it:
//    another <h1> that says “I’m in a div”
//    a <p> that says “ME TOO!”
//    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// DIV
const div = document.createElement('div');

div.style.border = 'black';
div.style.backgroundColor = 'pink';

//H1
const h1 = document.createElement('h1');

h1.textContent = "I'm in a div";

div.appendChild(h1);

//P

const p_2 = document.createElement('p');

p_2.textContent = "ME TOO!";

div.appendChild(p_2);

// ADD DIV TO CONTAINER

body.appendChild(div);


// ----------------- DOM EVENTS

// the JavaScript file
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// the JavaScript file
    // const btn = document.querySelector('#btn');
    // btn.addEventListener('click', () => {
    //   alert("Hello World");
    // });

// // METHOD 1
// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//     }

// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn = document.querySelector('#btn')

// METHOD 2
// btn.onclick = alertFunction;

// METHOD 3
//btn.addEventListener('click', alertFunction);

// Another THING
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });