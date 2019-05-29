
export class Options {
    public static readonly SECONDS: number = 60;
    public static readonly MILISECONDS: number = 1000;
    // WARN_AFTER could be equal to REDIRECT_AFTER - THRESHOLD;
    public static readonly WARN_AFTER: number = 1080000; // 18 minutes
    public static readonly THRESHOLD: number = 120000;
    // Limit of time allocated to the session
    public static readonly REDIRECT_AFTER: number = 1200000; // 20 minutes
    // Time before we advice the customer by showing the popup
    public static readonly END_SESSION = 0;

    private title: string;
    private message: string;
    private logoutButton: string;
    private keepAliveButton: string;
    private keepAliveUrl: string;
    private ajaxType: string;
    private ajaxData: string;
    private redirUrl: string;
    private logoutUrl: string;
    private warnAfter: number;
    private redirectAfter: number;
    private keepAliveInterval: number;
    private keepAlive: boolean;
    private ignoreUserActivity: boolean;
    private onStart: boolean;
    private onWarn: boolean;
    private onRedir: boolean;
    private countdownMessage: boolean;
    private countdownBar: boolean;
    private countdownSmart: boolean;

    // Default values
    constructor() {
        this.title = "Your Session is About to Expire!";
        this.message = "Your session is about to expire.";
        this.logoutButton = "Logout";
        this.keepAliveButton = "Stay Connected";
        this.keepAliveUrl = "/keep-alive";
        this.ajaxType = "POST";
        this.ajaxData = "";
        this.redirUrl = "/timed-out";
        this.logoutUrl = "/log-out";
        this.warnAfter = Options.WARN_AFTER;
        this.redirectAfter = Options.REDIRECT_AFTER;
        this.keepAliveInterval = 5000;
        this.keepAlive = true;
        this.ignoreUserActivity = false;
        this.onStart = false;
        this.onWarn = false;
        this.onRedir = false;
        this.countdownMessage = false;
        this.countdownBar = false;
        this.countdownSmart = false;
    }

    public getTitle(): string {
        return this.title;
    }
    public getMessage(): string {
        return this.message;
    }
    public getLogoutButton(): string {
        return this.logoutButton;
    }
    public getKeepAliveButton(): string {
        return this.keepAliveButton;
    }
    public getKeepAliveUrl(): string {
        return this.keepAliveUrl;
    }
    public getAjaxType(): string {
        return this.ajaxType;
    }
    public getAjaxData(): string {
        return this.ajaxData;
    }
    public getRedirUrl(): string {
        return this.redirUrl;
    }
    public getLogoutUrl(): string {
        return this.logoutUrl;
    }
    public getWarnAfter(): number {
        return this.warnAfter;
    }
    public getRedirectAfter(): number {
        return this.redirectAfter;
    }
    public getKeepAliveInterval(): number {
        return this.keepAliveInterval;
    }
    public getKeepAlive(): boolean {
        return this.keepAlive;
    }
    public getIgnoreUserActivity(): boolean {
        return this.ignoreUserActivity;
    }
    public getOnStart(): boolean {
        return this.onStart;
    }
    public getOnWarn(): boolean {
        return this.onWarn;
    }
    public getOnRedir(): boolean {
        return this.onRedir;
    }
    public getCountdownMessage(): boolean {
        return this.countdownMessage;
    }
    public getCountdownBar(): boolean {
        return this.countdownBar;
    }
    public getCountdownSmart(): boolean {
        return this.countdownSmart;
    }

    public setTitle(value: string) {
        this.title = value;
    }
    public setMessage(value: string) {
        this.message = value;
    }
    public setLogoutButton(value: string) {
        this.logoutButton = value;
    }
    public setKeepAliveButton(value: string) {
        this.keepAliveButton = value;
    }
    public setKeepAliveUrl(value: string) {
        this.keepAliveUrl = value;
    }
    public setAjaxType(value: string) {
        this.ajaxType = value;
    }
    public setAjaxData(value: string) {
        this.ajaxData = value;
    }
    public setRedirUrl(value: string) {
        this.redirUrl = value;
    }
    public setLogoutUrl(value: string) {
        this.logoutUrl = value;
    }
    public setWarnAfter(value: number) {
        this.warnAfter = value;
    }
    public setRedirectAfter(value: number = Options.REDIRECT_AFTER) {
        this.redirectAfter = value;
    }
    public setKeepAliveInterval(value: number) {
        this.keepAliveInterval = value;
    }
    public setKeepAlive(value: boolean) {
        this.keepAlive = value;
    }
    public setIgnoreUserActivity(value: boolean) {
        this.ignoreUserActivity = value;
    }
    public setOnStart(value: boolean) {
        this.onStart = value;
    }
    public setOnWarn(value: boolean) {
        this.onWarn = value;
    }
    public setOnRedir(value: boolean) {
        this.onRedir = value;
    }
    public setCountdownMessage(value: boolean) {
        this.countdownMessage = value;
    }
    public setCountdownBar(value: boolean) {
        this.countdownBar = value;
    }
    public setCountdownSmart(value: boolean) {
        this.countdownSmart = value;
    }

    public toString(): string {
        return "Options ["
        + this.keepAliveUrl + ", "
        + this.ajaxData + ", "
        + this.redirUrl + ", "
        + this.logoutUrl + ", "
        + this.warnAfter + ", "
        + this.redirectAfter + ", "
        + this.keepAliveInterval + ", "
        + this.keepAlive + ", "
        + this.ignoreUserActivity + ", "
        + this.onStart + ", "
        + this.onWarn + ", "
        + this.onRedir + ", "
        + this.countdownMessage + ", "
        + this.countdownBar + ", "
        + this.countdownSmart + "]";
    }
}
