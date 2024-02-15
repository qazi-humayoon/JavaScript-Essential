let string = ''
const buttons = document.querySelectorAll('button')
const input = document.querySelector('input')
buttons.forEach(function (detail){
    detail.addEventListener('click',function(e){
        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string
        }

        else if(e.target.innerHTML == 'C'){
            string = ''
            input.value = string
        }
        else if(e.target.innerHTML =='?'){
            alert("Sorry Bro! It Won't Work :)")
        }
        else{
        string = string + e.target.innerHTML
        input.value = string
        }
        
    })

})

window.addEventListener('mousemove',function (detail){
    gsap.to('.cursor',{
        left: detail.clientX,
        right: detail.clientX,
        top: detail.clientY,
    })

})


const rect = document.querySelector('.rect')
rect.addEventListener('mousemove',function(e){
    // console.log(e.clientX);

    const rectLocation = rect.getBoundingClientRect()
    
    const insiderect = e.clientX - rectLocation.left

    if(insiderect < rectLocation.width / 2){
        const redColor  = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insiderect)
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        });
    } 
    else{
        const blueColor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width, 0,255,insiderect)

        gsap.to(rect,{
            backgroundColor: `rgb(0 , 0 , ${blueColor})`
        })

    }
})


rect.addEventListener('mouseleave', function (){
    gsap.to(rect,{
        backgroundColor: 'white'
    })
})

