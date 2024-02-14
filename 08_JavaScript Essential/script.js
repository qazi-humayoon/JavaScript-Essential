const displaytime = document.querySelector('#timing')
let [second,minute,hour] = [0,0,0]
let kill = null;

const stopi = document.querySelector('#stop')
const playing = document.querySelector('#play')
const restarting = document.querySelector('#restart')



playing.addEventListener('click',function(e){
    function playwatch(){
        second++;
        if(second === 60){
            second = 0;
            minute++;
        } if(minute === 60){
            minute = 0;
            hour ++;
            
        }
        let h = hour < 10 ? '0' + hour : hour;
        let m = minute < 10 ? '0' + minute : minute;
        let s = second < 10 ? '0' + second : second;
        displaytime.innerHTML = h + ':' + m + ':' + s;

    }

    function calling(){
        kill = setInterval(playwatch,1000);
    }
    calling();

})

stopi.addEventListener('click',function (d){
    clearInterval(kill)

})


restarting.addEventListener('click',function(e){
    function stopping(){
        clearInterval(kill);
        [second,minute,hour] = [0, 0, 0];
        displaytime.innerHTML = "00:00:00"
    }
   stopping();

});
