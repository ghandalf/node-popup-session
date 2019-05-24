import { expect } from "chai";
import { SessionTimeout } from "./SessionTimeout";

describe("startSessionTimer", () => {
    const sessionTimeout = new SessionTimeout();
    it("startSessionTimer should return false", () => {
        const redirectAfter = 2;
        const warnAfter = 3;
        const redirectUrl = "/";
        const keepAliveUrl = "/keep-alive";
        const logoutUrl = "/timeout";
        const expected = false;
        const actual = sessionTimeout.startSessionTimer(redirectAfter, warnAfter, redirectUrl, keepAliveUrl, logoutUrl);
        expect(actual).to.equal(expected);
    });
    it("startSessionTimer should reset countdown once", () => {
        const redirectAfter = 12;
        const warnAfter = 8;
        const redirectUrl = "/";
        const keepAliveUrl = "/keep-alive";
        const logoutUrl = "/timeout";
        let wantToContinue: boolean = false;
        sessionTimeout.startSessionTimer(redirectAfter, warnAfter, redirectUrl, keepAliveUrl, logoutUrl);
        expect(sessionTimeout.getContinue()).to.equal(wantToContinue);
        wantToContinue = true;
        sessionTimeout.setContinue(false);
        expect(sessionTimeout.getCountdown()).to.equal(redirectAfter);
    });

    // it("startSessionTimer should show countdown", () => {
    //     const redirectAfter = 2;
    //     const warnAfter = 1;
    //     const redirectUrl = "/";
    //     const keepAliveUrl = "/keep-alive";
    //     const logoutUrl = "/timeout";
    //     const actualWarning = redirectAfter - warnAfter;
    //     sessionTimeout.startSessionTimer(redirectAfter, warnAfter, redirectUrl, keepAliveUrl, logoutUrl);
    //     expect(sessionTimeout.getRedirectAfter() - sessionTimeout.getWarnAfter()).to.equal(actualWarning);
    // });
    it("areValided should be true", () => {
        const redirectAfter: number = 2;
        const warnAfter: number = 2;
        const expected: boolean = true;
        expect(sessionTimeout.areValided(redirectAfter, warnAfter)).to.equal(expected);
    });
    it("areValided should be false", () => {
        const redirectAfter: number = 2;
        const warnAfter: number = 3;
        const expected: boolean = false;
        expect(sessionTimeout.areValided(redirectAfter, warnAfter)).to.equal(expected);
    });
});

// describe("Test areValided", () +> {
// });
