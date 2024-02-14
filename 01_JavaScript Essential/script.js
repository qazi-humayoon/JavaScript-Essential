// window.addEventListener('mousemove', function(details){
//     let rect = document.querySelector('#rect')
//     let xval = gsap.utils.mapRange(0,window.innerWidth, 200 + rect.getBoundingClientRect().width / 2, window.innerWidth - (200 + rect.getBoundingClientRect().width / 2),details.clientX );


//     gsap.to('#rect',{
//         left: xval,
//         ease: Power3
//     })

// })

// window.addEventListener('mousemove',function (details){

//     let rect = document.querySelector('#rect')

//     let xval = gsap.utils.mapRange(0,window.innerWidth, 200 + rect.getBoundingClientRect().width / 2, window.innerWidth -  (200 + rect.getBoundingClientRect().width / 2),details.clientX)

//     gsap.to('#rect',{
//         left: xval
//     })

// })

window.addEventListener('mousemove',function (d){
    let rect = document.querySelector('#rect')
let xval = gsap.utils.mapRange(0,window.innerWidth, 200 + rect.getBoundingClientRect().width / 2, window.innerWidth - (200 + rect.getBoundingClientRect().width / 2), d.clientX)
    gsap.to('#rect',{
        left: xval,
        ease: Power3
    });

})

window.addEventListener('mousemove',function (e){
    // let rect = document.querySelector('#rect')
    console.log(e.clientY);
    let yVal = gsap.utils.mapRange(0,window.innerHeight ,250 , window.innerHeight -  250, e.clientY)
    gsap.to('#rect',{
        top: yVal,
        ease: Power4
    })

})