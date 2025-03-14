// Main.js
import initMenu from "./menu.js";
import initScroller from './scroller.js';
import initReturnToTop from './returnToTop.js';
import initFormValidation from './formValidation.js';
import initChangeCurremcy from './changeCurremcy.js';
import initPopUp from './popUp.js';

// import Slider from './slider.js';

document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initScroller();
    initPopUp(); 
    initReturnToTop();
    initFormValidation();
    initChangeCurremcy();


});
