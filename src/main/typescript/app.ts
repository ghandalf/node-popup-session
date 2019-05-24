import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routes from "./routes";

// https://developer.okta.com/blog/2018/11/15/node-express-typescript
// Read the .env file
dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// set path for static assets
app.use(express.static(path.join(__dirname, "javascript")));

routes.register(app);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening at http://localhost:${port}`);
});
