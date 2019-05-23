var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "stdio", "./timer/Timer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const stdio_1 = __importDefault(require("stdio"));
    // import { timingSafeEqual } from "crypto";
    // import { resolve } from "url";
    const Timer_1 = require("./timer/Timer");
    class Main {
        constructor() {
            this.opts = stdio_1.default.getopt({
                timer: { key: "t", args: 0, description: "Test Timer countDown" },
            });
            this.timer = new Timer_1.Timer();
        }
        main() {
            if (this.opts.timer) {
                // tslint:disable-next-line:no-console
                console.log("Begin");
                const timeout = 20;
                const threshold = 2;
                this.timer.startSessionTimer(timeout, threshold);
                this.timer.resetCounter(14);
                if (this.timer.getCounter() > 12) {
                    this.timer.resetCounter(10);
                }
            }
        }
        sleep(miliseconds) {
            return new Promise((resolve) => setTimeout(resolve, miliseconds));
        }
    }
    exports.Main = Main;
    const main = new Main();
    main.main();
});
//# sourceMappingURL=Main.js.map