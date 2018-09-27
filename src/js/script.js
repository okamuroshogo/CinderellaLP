import { BASE_DIR } from '../constants.yml'
import Sample from '@/lib/Sample';
import _ from 'lodash';

const sample = new Sample({
    name: 'world'
});

let wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', () => {
    console.log(`hello, ${sample.name}. Base directory is ${BASE_DIR}.`);
});

let els = document.getElementsByClassName("animate");
var animatedElCount = 0;

const addAnimation = els => {
  for (let i = 0; i < els.length; i++) {
    if(els[i].offsetTop < window.pageYOffset + window.innerHeight + 750 && !els[i].className.includes("animated")) {
      els[i].className += " animated fadeInUp slower";
      els[i].style.visibility = "visible";
      animatedElCount++;
    }
  }
  if(animatedElCount == els.length) {
    window.removeEventListener('scroll', onScrollEvent);
  }
};
const onScrollEvent = _.throttle(() => addAnimation(els), 100);
window.addEventListener('scroll', onScrollEvent);
