const w=document.querySelector('.w')
const a=document.querySelector('.a')
const s=document.querySelector('.s')
const d=document.querySelector('.d')
const j=document.querySelector('.j')
const k=document.querySelector('.k')
const l=document.querySelector('.l')


function playw(){
    var audio= new Audio('https://files.codingninjas.in/tom-1-28537.mp3')
    audio.play();
}
function playa(){
    var audio= new Audio('https://files.codingninjas.in/tom-2-28541.mp3')
    audio.play();
}
function plays(){
    var audio= new Audio('https://files.codingninjas.in/tom-3-28542.mp3')
    audio.play();
}

function playd(){
    var audio= new Audio('https://files.codingninjas.in/tom-4-28543.mp3')
    audio.play();
}

function playj(){
    var audio= new Audio('https://files.codingninjas.in/snare-28545.mp3')
    audio.play();
}

function playk(){
    var audio= new Audio('https://files.codingninjas.in/crash-28546.mp3')
    audio.play();
}

function playl(){
    var audio= new Audio('https://files.codingninjas.in/kick-bass-28547.mp3')
    audio.play();
}

document.body.addEventListener('keydown',(event)=>
{ 
     switch (event.key) {
        case 'w':
            playw()
            console.log(event.key)
            break;
        case 'a':
            playa()
            console.log(event.key)
            break;
        case's':
            plays()
            console.log(event.key)
            break;
        case 'd':
            playd()
            console.log(event.key)
            break;
        case 'j':
            playj()
            console.log(event.key)
            break;
        case 'k':
            playk()
            console.log(event.key)
            break;
        case 'l':
            playl()
            console.log(event.key)
            break;
     }


})