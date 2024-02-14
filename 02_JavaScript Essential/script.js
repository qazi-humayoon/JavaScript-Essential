const btn = document.querySelector('.add')
const heading = document.querySelector('h5')
let flag = 0 //* Logic for single button changing
btn.addEventListener('click',function(e){
    
    if(flag === 0){
        heading.innerHTML = "Friends"
        heading.style.color = 'green'
        btn.innerHTML = 'Remove Friend' 
        flag = 1
    }   else{
        heading.innerHTML = "Stranger"
        heading.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        flag = 0
    }
})


//* Logic if there consists two buttons
// const remove = document.querySelector('.remove')
// remove.addEventListener('click',function(detail){
//         heading.innerHTML = "Stranger"
//         heading.style.color = 'red'

// })