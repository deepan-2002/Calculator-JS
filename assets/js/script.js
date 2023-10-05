let inputEl = document.querySelector('input')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        if (event.target.innerText == '=') {
            string = String(eval(string))
            inputEl.value = string
        }
        else if (event.target.innerText == 'AC') {
            string = ''
            inputEl.value = string
        }
        else if (event.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1)
            inputEl.value = string
        }
        else if (event.target.id == 'plusMinus') {
            string = String(-eval(string))
            inputEl.value = string
        }

        else {
            string += event.target.innerText
            inputEl.value = string
        }
    })
})