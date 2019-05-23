import { expect } from "chai";
import { Timer } from "./Timer";

describe("startSessionTimer", () => {
    it("should show count down", () => {
        const timer = new Timer();
        const timeout = 4;
        const threshold = 2;
        const actualWarning = timeout - threshold;
        timer.startSessionTimer(timeout, threshold);
        expect(timer.getWarning()).to.equal(actualWarning);
    });
});
