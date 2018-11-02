import {BASE_DIR} from '../constants.yml'
import _ from 'lodash';

import lottie from "lottie-web";

const hero = document.querySelector(".js-hero");
window.addEventListener('load', () => {
    lottie.loadAnimation({
        container: hero, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/data/data.json' // the path to the animation json
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
