

let thisThing = "what?"
document.querySelector('div').innerHTML = thisThing


let button = document.querySelector('button')
let counter = document.querySelector('#counter')

let count = 0

function add() {
  counter.innerHTML = count;
  if (count === 10) {
    
    counter.innerHTML = "You have won";
    counter.style.lineHeight = '65px';
    counter.style.fontSize = '50px';
    button.removeEventListener('click', add)
  }
  
  count++

  
}

button.addEventListener('click', add)