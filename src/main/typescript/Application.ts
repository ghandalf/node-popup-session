import express from "express";

export class Application {
    public express: any;

    constructor() {
        this.express = express();
        // this.mountRoutes();
    }

    // private mountRoutes() {
    //     const router = express.Router();
    //     router.get("/", (request: any, response: any) => {
    //         response.json({
    //             message: "Timeout this popup",
    //         });
    //         this.express.use("/", router);
    //     });
    // }

}
export default new Application().express;
