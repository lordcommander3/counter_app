const increment= document.querySelector('#increment-btn')
const decrement= document.querySelector('#decrement-btn')
const counterEl=document.querySelector('#counter')
const ulElement=document.querySelector('#list-item')
let counter = 0
function incrementCounter(){
    counter++
    counterEl.innerText = counter

    //create Element
    const li =document.createElement('li') 
    li.setAttribute('data-counter',counter)
    li.innerHTML = '<b>Sentence</b> ' + counter
    if(
        counter %  2===0 ){
            li.setAttribute('class','green')
        }else{
                li.setAttribute('class','blue')
            }
        
    
    
    //append that child
   ulElement.appendChild(li)

}
function decrementCounter(){
    const li=ulElement.querySelector('[data-counter="'+counter+'"]')
     li.remove()
    counter--
    counterEl.innerText = counter

    
}
increment.addEventListener('click',incrementCounter)
decrement.addEventListener('click',decrementCounter)