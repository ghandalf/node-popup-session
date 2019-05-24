import ejs from "ejs";
import { dirname } from "path";

const SECONDS: number = 60;
const MILISECONDS: number = 1000;
// Limit of time allocated to the session
const REDIRECT_AFTER: number = 20;
// Time before we advice the customer by showing the popup
const WARN_AFTER: number = 18; // REDIRECT_AFTER - THRESHOLD;
const END_SESSION = 0;

export class SessionTimeout {
    private countdown: number;
    private redirectAfter: number;
    private warnAfter: number;
    private redirectUrl: string;
    private keepAliveUrl: string;
    private logoutUrl: string;
    private continue: boolean;

    constructor() {
        this.countdown = REDIRECT_AFTER;
        this.redirectAfter = REDIRECT_AFTER;
        this.warnAfter = WARN_AFTER;
        this.redirectUrl = "";
        this.keepAliveUrl = "";
        this.logoutUrl = "";
        this.continue = false;
    }

    public getCountdown(): number {
        return this.countdown;
    }
    public getRedirectAfter(): number {
        return this.redirectAfter;
    }
    public setRedirectAfter(value: number = REDIRECT_AFTER) {
        this.redirectAfter = value;
    }
    public getWarnAfter(): number {
        return this.warnAfter;
    }
    public setWarnAfter(value: number = WARN_AFTER) {
        this.warnAfter = value;
    }
    public getRedirectUrl(): string {
        return this.redirectUrl;
    }
    public setRedirectUrl(value: string) {
        this.redirectUrl = value;
    }
    public getKeepAliveUrl(): string {
        return this.keepAliveUrl;
    }
    public setKeepAliveUrl(value: string) {
        this.keepAliveUrl = value;
    }

    public getLogoutUrl(): string {
        return this.logoutUrl;
    }
    public setLogoutUrl(value: string) {
        this.logoutUrl = value;
    }
    public getContinue(): boolean {
        return this.continue;
    }
    public setContinue(value: boolean) {
        this.continue = value;
    }

    public startSessionTimer(redirectAfter: number = REDIRECT_AFTER, warnAfter: number = WARN_AFTER,
                             redirectUrl: string, keepAliveUrl: string, logoutUrl: string): boolean {
        const succeed = true;
        if ( ! this.areValided(redirectAfter, warnAfter) ) {
        //     // tslint:disable-next-line:no-console
        //     console.error('Miss configuration, call to SessionTimeout with "redirectAfter" must be '
        //         + ' equal or greater than "warnAfter".');
            return false;
        }

        this.redirectAfter = redirectAfter;
        this.warnAfter = warnAfter;
        this.countdown = this.redirectAfter;
        this.redirectUrl = redirectUrl;
        this.keepAliveUrl = keepAliveUrl;
        this.logoutUrl = logoutUrl;
        const wantToContinue: boolean = false;

        const interval = setInterval(() => {
            // tslint:disable-next-line:no-console
            console.log("\tcountdown: " + this.countdown);
            this.countdown--;
            this.warnAfter--;

            // - Go to page that has timer:
            //  http://localhost:8080/web/personalservices/firestonecompleteautocare/applynow
            // - Wait for warning message (1 minute before expiration)
            // - Warning message is displayed
            // - User has the chance to click on the "extend" button and continue
            // - If use does not extend session, then the red banner is displayed
            // - After the red banner is displayed, the user is redirected to the home page:
            //     /web/personalservices/personal-services?pp_timeout=true
            // - A banner is displayed on the home page

            if ( this.warnAfter === 0 ) {
                // tslint:disable-next-line:no-console
                console.log("\tYou have reached the warning timeout. Time to show the popup!!! warnAfter ["
                    + this.warnAfter + "], countdown [" + this.countdown + "]");
                // If continue resetCountdown, otherwise redirectUrl
                // Wait here to let the user click on Continue
                //    Banner with button text=Continue onClick=sessionTimeout.setContinue(true);
                //    Banner with button text=Exit onClick=sessionTimeout.setContinue(true);
                //    Here
                if ( this.getContinue() ) {
                    // tslint:disable-next-line:no-console
                    console.log("\tI want to continue... reset countdown from ["
                        + this.countdown + "] to [" + redirectAfter  + "]");
                    this.countdown = redirectAfter;
                    this.warnAfter = warnAfter;
                }
                // if ( wantToContinue ) {
                //     ejs.renderFile(__dirname + "\\..\\..\\views\\pages\\"
                // + this.keepAliveUrl + ".ejs", function(err, data) {
                //         // tslint:disable-next-line:no-console
                //         console.log(err || data);
                //     });
                // }
            }
            if (this.countdown === END_SESSION) {
                clearInterval(interval);
                // tslint:disable-next-line:no-console
                console.log("\tRedirect to logout: End session reached countdown = " + this.countdown);
                // Call logout
                // ejs.renderFile(__dirname + "\\..\\..\\views\\pages\\"
                // + this.logoutUrl + ".ejs", function(err, data) {
                //     // tslint:disable-next-line:no-console
                //     console.log(err || data);
                // });
            }

        }, MILISECONDS);
        return succeed;
    }

    public resetCountdown(value: number = REDIRECT_AFTER) {
        // tslint:disable-next-line:no-console
        console.log("Reset countdown: " + this.countdown + " to " + value);
        this.countdown = value;
    }

    public areValided(redirectAfter: number, warnAfter: number): boolean {
        return redirectAfter >= warnAfter;
    }
}
