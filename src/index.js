import "./styles.css";
import { init } from "./js/Componentes";

const progressBar = document.querySelector('#progress-bar');
const navbar      = document.querySelector('#navbar');
const nav         = document.querySelector('.nav');
const wrap         = document.querySelector('#wrap');
const anchors     = document.querySelectorAll('.anchor');
const svgs         = document.querySelectorAll('svg');
const separator   = document.querySelector('#navseparator')
const distanciaY  = navbar.offsetTop;



init('inicio');
wrap.addEventListener('click',(event)=>{
    const pathEvent    = event.path[0].classList;
    if(pathEvent.contains('inicio')){
        init('inicio');
    }else if(pathEvent.contains('sad')){
        init('sad');
    }else if(pathEvent.contains('wallet')){
        init('wallet');
    }else if(pathEvent.contains('heart')){
        init('heart');
    }else if(pathEvent.contains('plus')){
        init('plus');
    }else if(pathEvent.contains('cake')){
        init('cake');
    }
})

window.onscroll = () => {
    const scroll = document.documentElement.scrollTop;
    const height =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const divide = scroll / height;

    progressBar.style.width = (divide * 100)+ '%';
    progressBar.textContent = parseInt(divide * 100)+ '%';

    if(window.scrollY >= distanciaY){
        navbar.classList.add('stiky');
        nav.classList.add('animate');
        separator.classList.remove('hidden');
        for( let anchor of anchors){
            anchor.classList.add('nav-animate');
        }
        for( let svg of svgs){
            svg.classList.add('svg-inline--fx')
            svg.classList.remove('svg-inline--fa')
        }
    }else{
        navbar.classList.remove('stiky');
        separator.classList.add('hidden');
        nav.classList.remove('animate');
        for( let anchor of anchors){
            anchor.classList.remove('nav-animate');
        }
        for( let svg of svgs){
            svg.classList.remove('svg-inline--fx')
            svg.classList.add('svg-inline--fa')
        }
    }
};
