import stdio from "stdio";

// import { timingSafeEqual } from "crypto";
// import { resolve } from "url";
import { SessionTimeout } from "./timer/SessionTimeout";

export class Main {

    private sessionTimeout: SessionTimeout;

    private opts = stdio.getopt({
        sessionTimeout: { key: "t", args: 0, description: "Test SessionTimeout countDown" },
    });

    constructor() {
        this.sessionTimeout = new SessionTimeout();
    }

    public main(): void {
        if (this.opts.sessionTimeout) {
            // tslint:disable-next-line:no-console
            console.log("Begin");
            const timeout = 20;
            const threshold = 2;
            const redirectUrl = "/";
            const keepAliveUrl = "/keep-alive";
            const logoutUrl = "/timeout";
            this.sessionTimeout.startSessionTimer(timeout, threshold, redirectUrl, keepAliveUrl, logoutUrl);
            this.sessionTimeout.resetCountdown(14);
            if (this.sessionTimeout.getCountdown() > 12) {
                this.sessionTimeout.resetCountdown(10);
            }
        }
    }

    private sleep(miliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, miliseconds));
    }
}

const main = new Main();
main.main();
