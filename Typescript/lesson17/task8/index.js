export const timer = {
    secondsPassed : 0,
    minsPassed : 0,

    timerID : function() {
        if (this.secondsPassed == 60) {
            this.secondsPassed = 0;
            this.minsPassed += 1;
        }
    
        this.secondsPassed += 5;
    },

    startTimer : function() {
        setInterval(this.timerID, 5000);
    },

    getTime : function() {
        if (this.secondsPassed < 10) {
            return '' + this.minsPassed + ':0' + this.secondsPassed;
        } else {
            return '' + this.minsPassed + ':' + this.secondsPassed;
        }
    },

    stopTimer : function() {
        clearInterval(this.timerID);
    },

    resetTimer : function() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }

};
