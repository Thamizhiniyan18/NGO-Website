const highlightPrograms = document.querySelector('.highlight-programs')
const slide = document.querySelectorAll('.slide')
const round = document.querySelectorAll('.round')
const projects = document.querySelector('.projects')
const programs = document.querySelector('.programs')
const highlightNumbers = document.querySelector('.highlight-numbers')
const latestNews = document.querySelector('.latest-news')
const campaign = document.querySelector('.campaign')
const voultary = document.querySelector('.voultary-positions')
let currentActive = 0 

setBgToBody()
window.addEventListener('scroll', originalPosition())

function update() {
    round.forEach((round, idx) => {
        if(idx <= currentActive)
        {
            round.classList.add('active');
        }
        else
        {
            round.classList.remove('active');
        }
    })
}

function removeactiveclasses() { 
    round.forEach((round ,idx) => {
        if(idx !== currentActive)
        {
            round.classList.remove('active');
        }
    })
}

function setBgToBody() {
  highlightPrograms.style.backgroundImage = slide[currentActive].style.backgroundImage
}

function setActiveSlide() {
  slide.forEach((slide) => slide.classList.remove('show'))

  slide[currentActive].classList.add('show')
}

setInterval(function(){
    currentActive++;
    if(currentActive > slide.length - 1)
    {
        currentActive = 0;
    }
    
    setBgToBody()
    setActiveSlide()
    update()
    removeactiveclasses() 
}
, 5000);

function originalPosition() {
    const trigger = window.innerHeight;
    const boxBottom = latestNews.getBoundingClientRect().top;
    // const endTrigger = window.innerHeight;
    console.log('Trigger : ', trigger)
    console.log('boxBottom : ', boxBottom)
    // console.log('endTrigger : ', endTrigger)


    if(trigger >= boxBottom) {
        campaign.classList.add('originalPosition')
        voultary.classList.add('originalPosition')
    }

    else {
        campaign.classList.remove('originalPosition')
        voultary.classList.remove('originalPosition')
    }
}