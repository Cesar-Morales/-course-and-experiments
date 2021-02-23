console.log('Hello from js');

function changeFromJs(){
    const elementsToChange = document.querySelectorAll('.js-target');
    for(let i = 0; i < elementsToChange.length; i++){
        const eachElement = elementsToChange[i];
        eachElement.innerText = 'Modified by JavaScript';
        eachElement.style.color = '#8a2be2';
    }
    console.log('Button pressed!')
}

const box = document.querySelector('.color-box');
const inputColor = document.querySelector('.input-color');

// 'change' event append when unfocus in input (click off the input = unfocus)
inputColor.addEventListener('change', function(){
    box.style.backgroundColor = inputColor.value;
});