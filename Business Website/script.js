// Navbar
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar')

// Menu lines
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')
// end of Menu lines

menu.addEventListener('click', () =>{
    navbar.classList.toggle('change');
    
    // Menu lines
    line1.classList.toggle('change');
    line3.classList.toggle('change');
    line2.classList.toggle('change')
    // End of Menu lines
})
// End of Navbar

// Section-2 video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')
const controls = document.querySelector('.controls')

const playPause = () =>{
    if(video.paused){
        video.play();
        btn.className = 'far fa-pause-circle';
        video.style.opacity= '0.8'
    }else{
        video.pause();
        btn.className = 'far fa-play-circle'
        video.style.opacity ='0.3'
    }
    
}

btn.addEventListener('click', ()=> {
    playPause()
})

// use a DOM method time update event

video.addEventListener('timeupdate', ()=>{
    console.log(video.currentTime, video.duration);
    let barLen = (video.currentTime *100)/video.duration;
    bar.style.width = barLen + '%';

    // Now when video ends we want btn icon to change to play
    // bar length to become zero, opacity to 0.3
    if(video.ended){
        btn.className = 'far fa-play-circle';
        video.style.opacity = '0.3';

        setTimeout( 
            function(){controls.style.transform = 'translateY(0)';}, 500)
    }
})


// End of Section-2 video

// Swiper class Section-3

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
  });




// End of Swiper class Section-3