const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")

document.addEventListener('DOMContentLoaded', ()=> {

let timer = document.getElementById("counter")
let count = setInterval(function(){timer.innerText +1},1000)

//minus
minus.addEventListener("click", function(e){
    timer.innerText = parseInt(timer.innerText) -1
})

//plus
plus.addEventListener("click", function(e){
    timer.innerText = parseInt(timer.innerText) +1
})

//like
let likeHash ={}
const ul = document.getElementsByTagName("ul")[0]
heart.addEventListener("click", function(e){
   let likedTime = timer.innerText

    if (!likeHash[likedTime]){
        likeHash[likedTime] = 0  
    }
    likeHash[likedTime] +=1
    let li;
    if (likeHash[likedTime]== 1){
     li = document.createElement("li")
    li.id = likedTime
   
    ul.appendChild(li)
    }
    else{
        li = document.getElementById(likedTime)    
    }
    li.innerText = `${likedTime} has been liked ${likeHash[likedTime]} times`
})

//leave a comment
let form = document.getElementById("comment-form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    let input = document.getElementById("comment-input")
    let div = document.getElementsByTagName("div")[0]
     let comment = document.createElement("p")
     comment.innerText = input.value
    div.appendChild(comment)
        e.target.reset()
})    
//pause
const toPause = document.getElementById("pause")
    toPause.addEventListener("click",function(e){
           if (toPause.innerText === "pause"){
            clearInterval(count)
            plus.disabled = true
            minus.disabled = true
            heart.disabled = true
           toPause.innerText = "resume"
           }
           else{
            plus.disabled = false
            minus.disabled = false
            heart.disabled = false
            toPause.innerText = "pause"
            
            count = setInterval(function(){timer.innerText= parseInt(timer.innerText) +1},1000)
           }
       })
});
// 