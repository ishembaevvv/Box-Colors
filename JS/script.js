
const randomButton = document.getElementById('random');
const block = document.getElementById('block');
const color =  document.getElementById('color');

const ChangeBlock = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // block
    block.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor
    // button
    randomButton.style.color = "#" + randomColor;
    randomButton.style.borderColor = "#" + randomColor;
}

randomButton.addEventListener('click', ChangeBlock);
ChangeBlock();

