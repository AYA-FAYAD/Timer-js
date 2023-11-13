const durationIput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)


let duration;
const timer = new Timer(durationIput, startButton, pauseButton, {
    // callback method
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemainig) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemainig / duration - perimeter);
        
    },
    onComplete() {
        console.log('Timer is complete')
    }
});