(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.register = (app) => {
        // Home page
        app.get("/", (request, response) => {
            response.render("index");
        });
        // Once the popup is close
        app.get("/timeout", (request, response) => {
            response.render("timeout");
        });
    };
});
//# sourceMappingURL=index.js.map