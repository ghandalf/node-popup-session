(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const SECONDS = 60;
    const MILISECONDS = 1000;
    // Warning one minute before we reach timeout limit
    // It timeout=3 warning will be at LIMIT=TIMEOUT-WARNING
    // Limit of time allocated to the session
    const SESSION_TIME_LIMIT = 20;
    // Time before we reach the SESSION_TIME_LIMIT
    const THRESHOLD = 4; // Warning at 16 min
    // Time to reach to show the popup
    const WARNING = SESSION_TIME_LIMIT - THRESHOLD;
    const END_SESSION = 0;
    class Timer {
        constructor() {
            this.counter = SESSION_TIME_LIMIT;
            this.sessionTimeout = SESSION_TIME_LIMIT;
            this.threshold = THRESHOLD;
            this.warning = WARNING;
        }
        getSessionTimeout() {
            return this.sessionTimeout;
        }
        setSessionTimeout(value) {
            this.sessionTimeout = value;
        }
        getThreshold() {
            return this.threshold;
        }
        setThreshold(value) {
            this.threshold = value;
        }
        getWarning() {
            return this.warning;
        }
        startSessionTimer(sessionTimeout, threshold) {
            this.sessionTimeout = sessionTimeout;
            this.threshold = threshold;
            this.warning = sessionTimeout - threshold;
            const interval = setInterval(() => {
                // tslint:disable-next-line:no-console
                console.log("counter: " + this.sessionTimeout);
                this.sessionTimeout--;
                if (this.sessionTimeout === this.warning) {
                    // clearInterval();
                    // tslint:disable-next-line:no-console
                    console.log("WARNING open popup!!! counter: " + this.sessionTimeout);
                }
                if (this.sessionTimeout === END_SESSION) {
                    clearInterval(interval);
                    // tslint:disable-next-line:no-console
                    console.log("Session timeout reached counter: " + this.sessionTimeout);
                }
            }, MILISECONDS);
        }
        resetCounter(value = SESSION_TIME_LIMIT) {
            // tslint:disable-next-line:no-console
            console.log("Reset counter: " + this.counter + " to " + value);
            this.counter = value;
        }
        getCounter() {
            return this.counter;
        }
    }
    exports.Timer = Timer;
});
//# sourceMappingURL=Timer.js.map