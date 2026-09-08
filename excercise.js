/* Excercise - Stopwatch */

function Stopwatch() {

    let startTime = 0, elapsedTime = 0, started = false; 

    this.start = function() {
        if(started) {
            throw new Error("Already Started");
        }

        started = true;

        startTime = performance.now();
    }
    
    this.stop = function() {
        if (!started) {
            throw new Error("Already Stopped");
        }

        started = false;

        elapsedTime += (performance.now() - startTime);
    }

    this.reset = function() {
        startTime = 0;
        elapsedTime = 0;
        started = false;
    }

    this.time = function() {
        
        if (started) {
            return console.log((performance.now() - startTime + elapsedTime) / 1000);
        }

        return console.log ((elapsedTime)/1000);
    }

}

const sw = new Stopwatch();