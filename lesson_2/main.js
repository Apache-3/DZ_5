// DOM - document object model

// ES5
// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementsByName('btn')
// const btns = document.getElementsByTagName('button')

// ES6

// const buttons = document.querySelectorAll('.btn')
// const btn = document.querySelector('#btn3')
// const btns = document.querySelectorAll('button')

// Делигирование событий

// buttons[0].style.background = 'red'
// buttons[0].classList.add('red')
// buttons[0].classList.remove('red')
// buttons.forEach((button) =>{
//     button.addEventListener('click', (event) =>{
//         if (event.target.classList.contains('red')){
//             event.target.classList.remove('red')
//         }else{
//             event.target.classList.add('red')
//         }
//     })
// })

// const wrapper = document.querySelector('.btn-block')
// const buttons = document.querySelectorAll('button')
//
// wrapper.onclick = (event) => {
//     if (event.target.tagName.toLowerCase() === 'button'){
//         event.target.onclick = (e) => {
//             if (e.target.classList.contains('red')){
//                 e.target.classList.remove('red')
//             }else{
//                 e.target.classList.add('red')
//             }
//         }
//     }
// }
//
// const newButton = document.createElement('button')
// wrapper.append(newButton)






