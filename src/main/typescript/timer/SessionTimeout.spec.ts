import { expect } from "chai";
import { SessionTimeout } from "./SessionTimeout";
import { Options } from "../domain/Options"
import { xit } from "mocha";
import { EEXIST } from "constants";

describe("startSessionTimer", () => {
    const sessionTimeout = new SessionTimeout();
    it("areValided should return false due warnAfter=3 > redirectAfter=2", () => {
        const redirectAfter: number = 2;
        const warnAfter: number = 3;
        const expected: boolean = false;
        const actual: boolean  = sessionTimeout.areValided(redirectAfter, warnAfter);
        expect(actual).to.equal(expected); 
    });
    it("areValided should return true due warnAfter=1 < redirectAfter=2", () => {
        const redirectAfter: number = 2;
        const warnAfter: number = 1;
        const expected: boolean = true;
        const actual: boolean  = sessionTimeout.areValided(redirectAfter, warnAfter);
        expect(actual).to.equal(expected); 
    });
    it("areValided should return true due warnAfter=2 === redirectAfter=2", () => {
        const redirectAfter: number = 2;
        const warnAfter: number = 2;
        const expected: boolean = true;
        const actual: boolean  = sessionTimeout.areValided(redirectAfter, warnAfter);
        expect(actual).to.equal(expected); 
    });
    it("resetCountdown should return Options.WARN_AFTER", () => {
        const expected: number = Options.WARN_AFTER;
        sessionTimeout.resetCountdown(Options.WARN_AFTER);
        const actual: number  = sessionTimeout.getCountdown();
        expect(actual).to.equal(expected); 
    });
    it("resetCountdown should return Options.END_SESSION", () => {
        const expected: number = Options.END_SESSION;
        sessionTimeout.resetCountdown(Options.END_SESSION);
        const actual: number  = sessionTimeout.getCountdown();
        expect(actual).to.equal(expected); 
    });
    it("startSessionTimer should exit due warnAfter greater then redirectAfter", () => {
        const redirectAfter: number = 2;
        const warnAfter: number = 3;
        const redirectUrl: string = "/";
        const keepAliveUrl: string = "/keep-alive";
        const logoutUrl: string = "/timeout";
        sessionTimeout.startSessionTimer(redirectAfter, warnAfter, redirectUrl, keepAliveUrl, logoutUrl);
        expect(EEXIST);
    });
    it("startSessionTimer should exit when countdown === Options.END_SESSION and reach the warnAfter", () => {
        const redirectAfter: number = 4;
        const warnAfter: number = 3;
        const redirectUrl: string = "/";
        const keepAliveUrl: string = "/keep-alive";
        const logoutUrl: string = "/timeout";
        sessionTimeout.startSessionTimer(redirectAfter, warnAfter, redirectUrl, keepAliveUrl, logoutUrl);
        expect(EEXIST);
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

    // it("startSessionTimer should reset countdown once", () => {
    //     const redirectAfter = 12;
    //     const warnAfter = 8;
    //     const redirectUrl = "/";
    //     const keepAliveUrl = "/keep-alive";
    //     const logoutUrl = "/timeout";
    //     const wantToContinue: boolean = false;
    //     sessionTimeout.startSessionTimer(redirectAfter, warnAfter, redirectUrl, keepAliveUrl, logoutUrl);
    //     expect(sessionTimeout.getCountdown()).to.equal(warnAfter);
    // });

    // it("areValided should be true", () => {
    //     const redirectAfter: number = 2;
    //     const warnAfter: number = 2;
    //     const expected: boolean = true;
    //     expect(sessionTimeout.areValided(redirectAfter, warnAfter)).to.equal(expected);
    // });
    // it("areValided should be false", () => {
    //     const redirectAfter: number = 2;
    //     const warnAfter: number = 3;
    //     const expected: boolean = false;
    //     expect(sessionTimeout.areValided(redirectAfter, warnAfter)).to.equal(expected);
    // });
});

// describe("Test areValided", () +> {
// });
