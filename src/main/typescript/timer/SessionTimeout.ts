const SECONDS: number = 60;
const MILISECONDS: number = 1000;
// Warning one minute before we reach timeout limit
// It timeout=3 warning will be at LIMIT=TIMEOUT-WARNING

// Limit of time allocated to the session
const SESSION_TIME_LIMIT: number = 20;
// Time before we reach the SESSION_TIME_LIMIT
const THRESHOLD: number = 4; // Warning at 16 min
// Time to reach to show the popup
const WARNING: number = SESSION_TIME_LIMIT - THRESHOLD;
const END_SESSION = 0;

export class SessionTimeout {
    private counter: number;
    private sessionTimeout: number;
    private threshold: number;
    private warning: number;

    constructor() {
        this.counter = SESSION_TIME_LIMIT;
        this.sessionTimeout = SESSION_TIME_LIMIT;
        this.threshold = THRESHOLD;
        this.warning = WARNING;
    }

    public getSessionTimeout(): number {
        return this.sessionTimeout;
    }
    public setSessionTimeout(value: number) {
        this.sessionTimeout = value;
    }
    public getThreshold(): number {
        return this.threshold;
    }
    public setThreshold(value: number) {
        this.threshold = value;
    }
    public getWarning(): number {
        return this.warning;
    }

    public startSessionTimer(sessionTimeout: number, threshold: number) {
        this.sessionTimeout = sessionTimeout;
        this.threshold = threshold;
        this.warning = sessionTimeout - threshold;

        const interval = setInterval(() => {
            // tslint:disable-next-line:no-console
            console.log("counter: " + this.sessionTimeout);
            this.sessionTimeout--;

            if ( this.sessionTimeout === this.warning ) {
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

    public resetCounter(value: number = SESSION_TIME_LIMIT) {
        // tslint:disable-next-line:no-console
        console.log("Reset counter: " + this.counter + " to " + value);
        this.counter = value;
    }

    public getCounter(): number {
        return this.counter;
    }
}
