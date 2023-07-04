//animation backgraund
VANTA.FOG({
    el: "#wrap",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xfff4df,
    midtoneColor: 0xffd2fa,
    lowlightColor: 0xd2ecff,
    baseColor: 0xecdcff,
    blurFactor: 0.8,
    zoom: 0.5,
    speed: 1.5
})

//burger


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function (){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
