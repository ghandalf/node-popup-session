// import { ejs } from "ejs";
import { dirname } from "path";
import { Options } from "../domain/Options";

// - Go to page that has timer:
//  http://localhost:8080/web/personalservices/firestonecompleteautocare/applynow
// - Wait for warning message (1 minute before expiration)
// - Warning message is displayed
// - User has the chance to click on the "extend" button and continue
// - If use does not extend session, then the red banner is displayed
// - After the red banner is displayed, the user is redirected to the home page:
//     /web/personalservices/personal-services?pp_timeout=true
// - A banner is displayed on the home page
// $.sessionTimeout({
//     keepAliveUrl: 'keep-alive.html',
//     logoutUrl: 'login.html',
//     redirUrl: 'locked.html',
//     warnAfter: 2000,
//     redirAfter: 4000,
//     countdownMessage: 'Redirecting in {timer} seconds.'
// });
export class SessionTimeout {
    private countdown: number;
    private options: Options;

    constructor() {
        this.options = new Options();
        this.countdown = this.options.getRedirectAfter();
    }

    public getCountdown(): number {
        return this.countdown;
    }

    public startSessionTimer(
        redirectAfter: number = Options.REDIRECT_AFTER,
        warnAfter: number = Options.WARN_AFTER,
        redirectUrl: string, keepAliveUrl: string, logoutUrl: string): void {

        if ( ! this.areValided(redirectAfter, warnAfter) ) {
        //     // tslint:disable-next-line:no-console
        //     console.error('Miss configuration, call to SessionTimeout with "redirectAfter" must be '
        //         + ' equal or greater than "warnAfter".');
        }

        const interval = setInterval(() => {
            // tslint:disable-next-line:no-console
            console.log("\tcountdown: " + this.countdown);
            this.countdown--;

            // if any move on the screen resetCounter to warnAfter
            this.resetCountdown(warnAfter);

            // countdown until 0 where we show the banner
            if (this.countdown === Options.END_SESSION ) {
                // When we show the banner we don't reset the counter until decision
                // In the banner show [continue] -> redirect to current page
                    // // tslint:disable-next-line:no-console
                    // console.log("\tI want to continue... reset countdown from ["
                    //     + this.countdown + "] to [" + warnAfter  + "]");
                    // this.countdown = warnAfter;
                // In the banner show [logout] -> show red banner and redirect to home page ?pp_timeout=true
                    // if (this.countdown === Options.END_SESSION) {
                    //     clearInterval(interval);
                    //     // tslint:disable-next-line:no-console
                    //     console.log("\tRedirect to logout: End session reached countdown = " + this.countdown);
                    //     // Call logout
                    //     // ejs.renderFile(__dirname + "\\..\\..\\views\\pages\\"
                    //     // + this.logoutUrl + ".ejs", function(err, data) {
                    //     //     // tslint:disable-next-line:no-console
                    //     //     console.log(err || data);
                    //     // });
                    // }
                // tslint:disable-next-line:no-console
                console.log("\tYou have reached the warning timeout. Time to show the popup!!! warnAfter ["
                    + warnAfter + "], countdown [" + this.countdown + "]");
                // If continue resetCountdown, otherwise redirectUrl
                // Wait here to let the user click on Continue
                //    Banner with button text=Continue onClick=sessionTimeout.setContinue(true);
                //    Banner with button text=Exit onClick=sessionTimeout.setContinue(true);
            }

        }, Options.MILISECONDS);
    }

    public resetCountdown(value: number) {
        // tslint:disable-next-line:no-console
        console.log("Reset countdown: " + this.countdown + " to " + value);
        this.countdown = value;
    }

    public areValided(redirectAfter: number, warnAfter: number): boolean {
        return redirectAfter >= warnAfter;
    }
}
