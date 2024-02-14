//* sabse phelai yeh pata yeh pata kro rectangle par aya and move hua ya nahi

//* phr yeh pata karo ki hum center se left par hai ya center sai right par hai

//* ab yeh calculate karo hum center sai kitna left par hai aur jitna left par hai utni intensity badao and jitna right pai hai utna intensity badao

const rect = document.querySelector('#center')
rect.addEventListener('mousemove', function (details){
    var rectlocation = rect.getBoundingClientRect()
    const insiderect = details.clientX - rectlocation.left

    if(insiderect < rectlocation.width / 2){
        const redColor  = gsap.utils.mapRange(0, rectlocation.width/2, 255, 0, insiderect)
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        });
    }   else{
        const blueColor = gsap.utils.mapRange(rectlocation.width/2, rectlocation.width, 0, 255, insiderect)

        gsap.to(rect, {
            backgroundColor: `rgb(0, 0 ,${blueColor})`,
            ease: Power4
        });
    }
});

rect.addEventListener('mouseleave', function (){
    gsap.to(rect,{
        backgroundColor: '#a28089'
    })
})

