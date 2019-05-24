import { expect } from "chai";
import { SessionTimeout } from "./SessionTimeout";

describe("startSessionTimer", () => {
    const sessionTimeout = new SessionTimeout();
    it("should show countdown", () => {
        const redirectAfter = 2;
        const warnafter = 1;
        const redirectUrl = "/";
        const keepAliveUrl = "/keep-alive";
        const logoutUrl = "/timeout";
        const actualWarning = redirectAfter - warnafter;
        sessionTimeout.startSessionTimer(redirectAfter, warnafter, redirectUrl, keepAliveUrl, logoutUrl);
        expect(sessionTimeout.getRedirectAfter() - sessionTimeout.getWarnAfter()).to.equal(actualWarning);
    });
    it("should be true", () => {
        const redirectAfter: number = 2;
        const warnAfter: number = 2;
        const expected: boolean = true;
        expect(sessionTimeout.areValided(redirectAfter, warnAfter)).to.equal(expected);
    });
});

// describe("Test areValided", () +> {
// });
