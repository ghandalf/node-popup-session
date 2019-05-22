var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "express", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const express_1 = __importDefault(require("express"));
    const path_1 = __importDefault(require("path"));
    const app = express_1.default();
    const port = 8686;
    app.set("views", path_1.default.join(__dirname, "src/main/views"));
    app.set("View engine", "ejs");
    app.get("/", (request, response) => {
        response.send("Test timer extention...");
    });
    app.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server is listening at http://localhost:${port}`);
    });
});
//# sourceMappingURL=index.js.map