const textElement = document.getElementById('text');
const text = 'Desenvolvedor de Software';
let index = 0;

function type() {
  textElement.textContent = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
  setTimeout(type, 100);
}

type();

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('menu-show');
});
