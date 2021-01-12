const sliderContainer = document.querySelector(".slider__wrapper"),
jsSlider = document.getElementById("slider");
let currentSlider = document.querySelector(".slider .active");

const sliderOne = document.querySelector(".slider__one"),
sliderFive = document.querySelector(".slider__five");

const cloneSliderOne = sliderOne.cloneNode(),
cloneSliderFive = sliderFive.cloneNode();

const SLIDER_WIDTH = 400;
const SLIDER_SPEED = 300;

function clickHandler(e){
    const className = e.target.classList.value;
    let currentSliderNum = currentSlider.getAttribute(["data-num"]);
    
    if(className === "next__btn"){
        currentSlider.classList.remove("active");
        currentSlider = jsSlider.childNodes[currentSliderNum*2+1];
        currentSlider.classList.add("active");
        jsSlider.style.transition = `transform ${SLIDER_SPEED}ms linear`;
        jsSlider.style.transform = `translateX(-${SLIDER_WIDTH*(currentSliderNum)}px)`;
    } else if(className === "prev__btn"){
        currentSlider.classList.remove("active");
        currentSlider = jsSlider.childNodes[(currentSliderNum-2)*2+1];
        currentSlider.classList.add("active");
        jsSlider.style.transition = `transform ${SLIDER_SPEED}ms linear`;
        jsSlider.style.transform = `translateX(-${SLIDER_WIDTH*(currentSliderNum-2)}px)`;
    } else {
        try {
            console.log(e);
        } catch(error){
            error("this is error!!");
        }
    }
}

sliderContainer.addEventListener('click', clickHandler);
