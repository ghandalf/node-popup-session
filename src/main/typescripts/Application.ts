import * as express from "express";

class Application {
    public express;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes() {
        const router = express.Router();
        router.get('/', (request, response) => {
            response.json({
                message: "Timeout this popup";
            })
            this.express.use('/', router);
        });        
    }
}
export default new Application().express;