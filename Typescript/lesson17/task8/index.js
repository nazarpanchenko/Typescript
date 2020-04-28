export const timer = {
    secondsPassed : 0,
    minsPassed : 0,

    _interval: null,
    startTimer() {
        this._interval = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },

    startTimer : function() {
        setInterval(this._interval, 5000);
    },

    getTime : function() {
        if (this.secondsPassed < 10) {
            return '' + this.minsPassed + ':0' + this.secondsPassed;
        } else {
            return '' + this.minsPassed + ':' + this.secondsPassed;
        }
    },

    stopTimer : function() {
        clearInterval(this._interval);
    },

    resetTimer : function() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }

};
