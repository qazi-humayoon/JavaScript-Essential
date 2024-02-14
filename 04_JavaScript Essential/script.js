window.addEventListener('mousemove',function (detail){
    gsap.to('.cursor',{
        left: detail.clientX,
        right: detail.clientX,
        top: detail.clientY,
    })

})


//! Without using gsap library

// let main = document.querySelector('#main')
// let crsr = document.querySelector('.cursor')

// main.addEventListener('mousemove',function (move){
//     crsr.style.left = move.x + 'px'
//     crsr.style.top = move.y + 'px'

// })