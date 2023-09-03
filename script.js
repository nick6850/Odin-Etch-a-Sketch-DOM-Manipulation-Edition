const canvas = document.querySelector('#canvas')

function create_grid(num) {
    for (let index = 0; index < num ** 2; index++) {
        let new_div = document.createElement('div')
        new_div.addEventListener('mouseover', () => {
            color1 = Math.floor((Math.random() * 255)) + 1
            color2 = Math.floor((Math.random() * 255)) + 1
            color3 = Math.floor((Math.random() * 255)) + 1 
            new_div.style.background = `rgb(${color1}, ${color2}, ${color3})`;
        } )

        new_div.style.border = '1px black solid'
        size = 600 / num - 2
        new_div.style.height = `${size}px`
        new_div.style.width = `${size}px`
        canvas.appendChild(new_div)
    }
}


create_grid(16)




const button = document.querySelector('#btn')
const number = document.querySelector('#num')

button.addEventListener('click', function() {
    canvas.innerHTML = ''
    create_grid(number.value)}
    )