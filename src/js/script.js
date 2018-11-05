import {BASE_DIR} from '../constants.yml'
import _ from 'lodash';

import lottie from "lottie-web";
import {TweenMax, Power2} from "gsap";

const hero = document.querySelector(".js-hero");

window.addEventListener('load', () => {

    TweenMax.set(hero, {
        opacity: 0
    });

    const animation = lottie.loadAnimation({
        container: hero, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/data/data.json', // the path to the animation json
    });

    TweenMax.to(hero, 2, {
        opacity: 1,
        ease: Power2.easeOut,
        oncomplete: () => {
            animation.play();
        }
    });
})

let els = document.getElementsByClassName("animate");
let animatedElCount = 0;

const addAnimation = els => {
    for (let i = 0; i < els.length; i++) {
        if (els[i].offsetTop < window.pageYOffset + window.innerHeight + 750 && !els[i].className.includes("animated")) {
            els[i].className += " animated fadeInUp slower";
            els[i].style.visibility = "visible";
            animatedElCount++;
        }
    }
    if (animatedElCount == els.length) {
        window.removeEventListener('scroll', onScrollEvent);
    }
};
const onScrollEvent = _.throttle(() => addAnimation(els), 100);
window.addEventListener('scroll', onScrollEvent);
