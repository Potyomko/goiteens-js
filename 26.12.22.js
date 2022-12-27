// ДЗ 10 завдання 4
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

let counterValue = 0;

function increment() {
    // counterValue += 1
    value.textContent = counterValue += 1
    // console.log(counterValue);
}

function decrement() {
    counterValue -= 1
    value.textContent = counterValue
    // console.log(counterValue);
}

// задача 3

const box = document.createElement('div')
box.classList.add('box')
box.style.backgroundColor = 'red';

counterContainer.appendChild(box);
counterContainer.insertAdjacentHTML('beforeend', '<div class="box" style="red">')