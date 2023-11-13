class Timer {
    constructor(durationIput, startButton, pauseButton, callbacks) {
        this.durationIput = durationIput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;


        }


        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.puse);
    }

    start = () => {

        if (this.onStart) {
            this.onStart(this.timeRemainig);
        }

        //  repeated execution of a function
        this.interval = setInterval(this.tick, 20);

    
    };
    puse = () => {
        clearInterval(this.interval);
    }
    
    tick = () => {
        // const timeRemainig = this.timeRemainig;

        // if (this.timeRemainig >= 1) {
        //     this.timeRemainig = this.timeRemainig - 1;
        // }

        // this.timeRemainig = this.timeRemainig - 1;

        if (this.timeRemainig <= 0) {
            this.puse();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemainig = this.timeRemainig - .02;
            if (this.onTick) {
                this.onTick(this.timeRemainig);
            }
            }


    };
    

    //  get make execut functhion without calling it
    get timeRemainig() {
        return parseFloat(this.durationIput.value);
    }

    set timeRemainig(time) {
        // round to 2 decimel
        this.durationIput.value = time.toFixed(2);
    }

}