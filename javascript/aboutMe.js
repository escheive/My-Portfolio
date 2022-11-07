// javascript for about me page

// CAROUSEL //
// for carousel on about me page displaying programming languages

// make our text array
const textArray = document.getElementsByClassName('carouselText')


// starting places for carousel
let previousContentIndex = 0;
let currentContentIndex = 0;

const firstIndex = 0; // first index of array
const lastIndex = textArray.length - 1; // last index of array


// make next button active
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')

const hideOldContent = () => textArray[previousContentIndex].style.display = 'none'
const showNewContent = () => textArray[currentContentIndex].style.display = 'inline'

// function for rotating to the next text in carousel
const carouselNext = () => {
    // see next image, old img disappears, new img appears
    currentContentIndex += 1;
    // reset array when we reach end
    if(currentContentIndex > lastIndex) {
        currentContentIndex = firstIndex
    }
    hideOldContent()
    showNewContent()
    previousContentIndex = currentContentIndex

}


const carouselBack = () => {

    // when button clicked, show previous text in array

    currentContentIndex -= 1;
    // reset array when we reach beginning
    if(currentContentIndex < firstIndex) {
        currentContentIndex = lastIndex
    }

    hideOldContent()
    showNewContent()
    previousContentIndex = currentContentIndex

}


const load = () => {
    
    setInterval(carouselNext, 2000); // auto rotate every 2 seconds

}


// quiz on about me

// grabbing the questions to use as buttons
const revealAnswers = document.querySelector('h5')


// grab the answers so that we can reveal them or hide them
const answers = document.querySelectorAll('.answer')


// keep track if answers are revealed or not
let areAnswersRevealed = 'no'


// function for revealing answers to about me quiz

const showAnswer = () => {
    if(areAnswersRevealed === 'no'){
        for(i=0; i < 3; i++){
            answers[i].style.display = 'block'
            areAnswersRevealed = 'yes'
        }
    }else{
        for(i=0; i < 3; i++){
            answers[i].style.display = 'none'
            areAnswersRevealed = 'no'
        }
    }
}


// Event Listeners


// for page load to start carousel on about me page
window.addEventListener('load', load);
// for revealing answers on about me quiz
revealAnswers.addEventListener('click', showAnswer)