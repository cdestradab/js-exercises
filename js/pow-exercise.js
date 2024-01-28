const para = document.createElement('p');
const my_input = document.querySelector('.my-input');

function pow (x, n) {
    return x**n;
  }

my_input.addEventListener('click', () => {
    const number_x = document.getElementById('value_x');
    const number_n = document.getElementById('value_n');
    para.textContent = `The result of ${number_x.value} to the power of ${number_n.value} is ` + pow(parseFloat(number_x.value), parseFloat(number_n.value))
})

//----

const section = document.querySelector('section');

section.appendChild(para);