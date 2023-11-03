

let counterValue = document.querySelectorAll('.counter');

let countBtn = document.querySelector('.count__btn');


let message = document.querySelector('.msg');



counterValue.forEach(counter=>{


  let endingValue =  counter.dataset.key;
  let count = 0;
  let duration = 100;
  
  
    let counting = setInterval(() => {
            counter.innerHTML= count++;
  
            if(count > endingValue){
              clearInterval( counting)
            }
  }, duration / endingValue);
  






countBtn.addEventListener('click',()=>{
  
  message.style = "transform:translateX(0)"

  setTimeout(() => {
   message.style = "transform:translateX(150%)"
  }, 3000);
 
 
 
     })
 
    
})

