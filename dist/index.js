var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "dotenv", "express", "path", "./routes"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const dotenv_1 = __importDefault(require("dotenv"));
    const express_1 = __importDefault(require("express"));
    const path_1 = __importDefault(require("path"));
    const routes = __importStar(require("./routes"));
    // https://developer.okta.com/blog/2018/11/15/node-express-typescript
    // Read the .env file
    dotenv_1.default.config();
    const port = process.env.SERVER_PORT;
    const app = express_1.default();
    app.set("views", path_1.default.join(__dirname, "views"));
    app.set("view engine", "ejs");
    // set path for static assets
    app.use(express_1.default.static(path_1.default.join(__dirname, "javascript")));
    routes.register(app);
    app.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server is listening at http://localhost:${port}`);
    });
});
//# sourceMappingURL=index.js.map