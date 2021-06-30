

let a1 = document.querySelector('#a1')

function changeColor() {
  document.body.style.backgroundColor = 'rgb(200, 200, 0, .05)';
}

function changeColorBack() {
  document.body.style.backgroundColor = 'teal';
}


a1.addEventListener('mouseover', changeColor)
a1.addEventListener('mouseleave', changeColorBack)


let a2 = document.querySelector('#a2')

function changeColor2() {
  document.body.style.backgroundColor = 'rgb(300, 0, 0, .1)';
  
  a2.style.height = '175px';
  a2.style.width = '175px';

}

function changeColorBack2() {
  document.body.style.backgroundColor = 'teal';
  a2.style.top = '150px';


}

function goBack() {
  a2.removeEventListener('mouseleave', changeColorBack2)
  a2.style.top = '300px'
}


a2.addEventListener('mouseover', changeColor2)
a2.addEventListener('mouseleave', changeColorBack2)
a2.addEventListener('click', goBack)
