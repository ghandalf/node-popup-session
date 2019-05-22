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

export class Timer {
    private counter: number;
    // private sessionTimeout: number;
    // private threshold: number;

    constructor() {
        this.counter = SESSION_TIME_LIMIT;
    }

    public countDown() {

        const interval = setInterval(() => {
            // tslint:disable-next-line:no-console
            console.log("counter: " + this.counter);
            this.counter--;

            if ( this.counter == WARNING ) {
                // clearInterval();
                // tslint:disable-next-line:no-console
                console.log("WARNING open popup!!! counter: " + this.counter);
            }
            if (this.counter == END_SESSION) {
                clearInterval(interval);
            }

        }, MILISECONDS);
    }

    public resetCounter(value: number) {
        // tslint:disable-next-line:no-console
        console.log("Reset counter: " + this.counter + " to " + value);
        this.counter = SESSION_TIME_LIMIT;
    }

    public getCounter(): number {
        return this.counter;
    }
}
