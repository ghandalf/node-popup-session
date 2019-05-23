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
        // Basic test
        app.get("/basic", (request, response) => {
            response.render("pages/basic");
        });
        // Keep Alive
        app.get("/keep-alive", (request, response) => {
            response.render("pages/keep-alive");
        });
        app.get("/locked", (request, response) => {
            response.render("pages/locked");
        });
        app.get("/login", (request, response) => {
            response.render("pages/login");
        });
    };
});
//# sourceMappingURL=index.js.map