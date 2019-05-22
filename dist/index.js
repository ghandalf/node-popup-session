// import { Application } from "./Application";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "express"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // const port = process.env.PORT || 3000;
    // Application.listen(port, (error: any) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     return console.log(`Server is listening on port ${port}`);
    // })
    const express_1 = __importDefault(require("express"));
    const app = express_1.default();
    const port = 8686;
    app.get("/", (request, response) => {
        response.send("Test timer extention...");
    });
    app.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server is listening at http://localhost:${port}`);
    });
});
//# sourceMappingURL=index.js.map