//animation backgraund
VANTA.FOG({
    el: "#wrap",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xAA56FE,
    midtoneColor: 0xFE56D9,
    lowlightColor: 0x56FEFE,
    baseColor: 0xFFF5DD,
    blurFactor: 0.8,
    zoom: 0.8,
    speed: 1.5
})

//burger


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function (){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
