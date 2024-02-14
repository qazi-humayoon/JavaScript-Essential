//! without gsap for a single images

// let elem1 = document.querySelector('#elem1')
// let elemimg = document.querySelector('#elem1 img')
// elem1.addEventListener('mousemove',function (details){
//     elemimg.style.left = details.x + 'px' 
//     elemimg.style.right = details.y + 'px' 

// })

// elem1.addEventListener('mouseenter',function (details){
//     elemimg.style.opacity = 1

// })

//! without gsap for all the images

// let elem1 = document.querySelectorAll('.elem')
// elem1.forEach(function(val){
//     val.addEventListener('mouseenter',function (){
//         val.childNodes[3].style.opacity = 1
        
//     });
//     val.addEventListener('mouseleave',function(){
//         val.childNodes[3].style.opacity = 0    
//     });
    
//     val.addEventListener('mousemove',function (detail){
//         val.childNodes[3].style.left = detail.x + 'px'
//         val.childNodes[3].style.top = detail.y + 'px'

//     })

// })

//? Using gsap and selecting all the images

const elem1 = document.querySelectorAll('.elem')
elem1.forEach(function(values){
    values.addEventListener('mouseenter',function(){
        values.childNodes[3].style.opacity = 1
    })
    values.addEventListener('mouseleave',function(){
        values.childNodes[3].style.opacity = 0
    })
    values.addEventListener('mousemove',function(detail){
        gsap.to('img',{
            left: detail.clientX
        })
    })

})

//*? Using gsap and selecting the single image

// const elem1 = document.querySelector('#elem1')
// const image = document.querySelector('#elem1 img')
// elem1.addEventListener('mouseenter',function(){
//     image.style.opacity = 1  
//   })

// elem1.addEventListener('mouseleave',function(){
//     image.style.opacity = 0
// })
// elem1.addEventListener('mousemove',function (detail){
//     const val = elem1.getBoundingClientRect();
    // const xval = gsap.utils.mapRange(0,val.width, 50, val.width - 200,detail.clientX )
    
//     gsap.to(image,{
//         left: xval
//     })
// })