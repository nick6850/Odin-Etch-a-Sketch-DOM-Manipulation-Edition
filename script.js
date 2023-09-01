const canvas = document.querySelector('#canvas')

function create_grid(num) {
    for (let index = 0; index < num ** 2; index++) {
        let new_div = document.createElement('div')
        new_div.addEventListener('mouseover', () => {
            new_div.style.background = 'black';
        } )

        new_div.style.border = '1px black solid'
        size = 600 / num - 2
        new_div.style.height = `${size}px`
        new_div.style.width = `${size}px`
        canvas.appendChild(new_div)
    }
}






const button = document.querySelector('#btn')
const number = document.querySelector('#num')

button.addEventListener('click', function() {
    canvas.innerHTML = ''
    create_grid(number.value)}
    )