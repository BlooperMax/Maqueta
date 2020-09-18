import "./styles.css";
import { init } from "./js/Componentes";

const progressBar = document.querySelector('#progress-bar');
const navbar      = document.querySelector('#navbar');
const nav         = document.querySelector('.nav');
const wrap        = document.querySelector('#wrap');
const anchors     = document.querySelectorAll('.anchor');
const svgs        = document.querySelectorAll('svg');
const separator   = document.querySelector('#navseparator');
const btn         = document.querySelector('#boton');
const distanciaY  = navbar.offsetTop;

init('inicio');

const scrollTo = function(to, duration) {
    const
    element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    },
    animateScroll = function() {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if(currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
        else {
            element.scrollTop = to;
        }
    };
    animateScroll();
};


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
    scrollTo(0,1000);
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
        btn.classList.remove('hidden');

        for( let anchor of anchors){
            anchor.classList.add('nav-animate');
        }
        for( let svg of svgs){
            svg.classList.add('svg-inline--fx')
            svg.classList.remove('svg-inline--fa')
        }
    }else{
        navbar.classList.remove('stiky');
        nav.classList.remove('animate');
        separator.classList.add('hidden');
        btn.classList.add('hidden');
        for( let anchor of anchors){
            anchor.classList.remove('nav-animate');
        }
        for( let svg of svgs){
            svg.classList.remove('svg-inline--fx')
            svg.classList.add('svg-inline--fa')
        }
    }
};

btn.addEventListener('click',()=>{
    scrollTo(0,1250);
})

