const icons = document.querySelectorAll('.section-1-icons i')
const icons_1 = document.querySelectorAll('.section-1-icons-1 i')
let counter = 1;
let counter_1 = 1;

setInterval( () => {

    ++counter;
    const icon = document.querySelector('.section-1-icons .change')

    icon.classList.remove('change')

    if(counter> icons.length){
        counter =1;
        icons[0].classList.add('change')
    }else{ 
        icon.nextElementSibling.classList.add('change')
    }
    
}, 2000)

