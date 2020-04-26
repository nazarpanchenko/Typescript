export const timer = {
    secondsPassed : 0,
    minsPassed : 0,
    startTimer : function() {
        let timerID = function() {
            if (this.secondsPassed == 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }

            this.secondsPassed += 5;
        };

        setInterval(timerID, 5000);
    },
    getTime : function() {
        return '' + this.minsPassed + ':' + this.secondsPassed;
    },
    stopTimer : function() {
        clearInterval(this.startTimer.timerID);
    },
    resetTimer : function() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }
};

