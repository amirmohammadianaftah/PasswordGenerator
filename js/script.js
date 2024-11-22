const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const numBox = document.querySelector('.counter>div>div')
let num = 5
const generator = document.querySelector('.generator')
const inp = document.querySelectorAll('input')
const copy = document.querySelector('.copy')
const btnCopy = document.querySelector('.copy>button')

plus.addEventListener('click', () => {
    if (num == 12) {
        num = num
    } else {
        num = num + 1
        numBox.innerHTML = num
    }
})

minus.addEventListener('click', () => {
    if (num == 5) {
        num = num
    } else {
        num = num - 1
        numBox.innerHTML = num
    }
})

inp.forEach((val) => {
    val.addEventListener('focus', () => {
        // console.log(copy.children);
        btnCopy.style.opacity = '1'
        btnCopy.style.cursor = 'pointer'
        btnCopy.addEventListener('click', () => {
            inp.forEach((item, i) => {
                item.addEventListener('focus', () => {
                    // console.log(item.value);
                    navigator.clipboard.writeText(item.value)
                })
            })
        })
    })
})

generator.addEventListener('click', () => {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789!@#$%^&*()-_+=|<>{}[]"
    let first = ''
    let second = ''
    let third = ''
    let fourth = ''
    for (i = 0; i < num; i++) {
        first += characters[Math.floor(Math.random() * characters.length)]
    }
    for (i = 0; i < num; i++) {
        second += characters[Math.floor(Math.random() * characters.length)]
    }
    for (i = 0; i < num; i++) {
        third += characters[Math.floor(Math.random() * characters.length)]
    }
    for (i = 0; i < num; i++) {
        fourth += characters[Math.floor(Math.random() * characters.length)]
    }
    inp[0].value = first
    inp[1].value = second
    inp[2].value = third
    inp[3].value = fourth
})