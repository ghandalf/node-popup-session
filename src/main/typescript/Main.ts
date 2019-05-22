import stdio from "stdio";

import { timingSafeEqual } from "crypto";
import { resolve } from "url";
import { Timer } from "./timer/Timer";

export class Main {

    private timer: Timer;

    private opts = stdio.getopt({
        timer: { key: "t", args: 0, description: "Test Timer countDown" },
    });

    constructor() {
        this.timer = new Timer();
    }

    public main(): void {
        if (this.opts.timer) {
            // tslint:disable-next-line:no-console
            console.log("Begin");
            this.timer.countDown();
            this.timer.resetCounter(14);
            if (this.timer.getCounter() > 12) {
                this.timer.resetCounter(10);
            }
        }
    }

    private sleep(miliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, miliseconds));
    }
}

const main = new Main();
main.main();
