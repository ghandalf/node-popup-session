import { expect } from "chai";
import { SessionTimeout } from "./SessionTimeout";

describe("startSessionTimer", () => {
    it("should show count down", () => {
        const sessionTimeout = new SessionTimeout();
        const timeout = 4;
        const threshold = 2;
        const actualWarning = timeout - threshold;
        sessionTimeout.startSessionTimer(timeout, threshold);
        expect(sessionTimeout.getWarning()).to.equal(actualWarning);
    });
});
