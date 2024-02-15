
const hours  = document.querySelector('#hrs')
const minutes  = document.querySelector('#mins')
const seconds  = document.querySelector('#secs')
// console.log(currentTime.getHours());

// console.log(currentTime.getMinutes());
// console.log(currentTime.getSeconds());

function testing(){
    const currentTime = new Date()
    hours.innerHTML = (currentTime.getHours()< 10 ? "0" :"") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()< 10 ? "0" :"") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()< 10 ? "0" :"") + currentTime.getSeconds();
    
}

setInterval(testing,1000)


