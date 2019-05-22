import express from "express";
import path from "path";

const app = express();
const port = 8686;

app.set("views", path.join(__dirname, "src/main/views"));
app.set("View engine", "ejs");

app.get( "/", (request: any, response: any) => {
    response.send( "Test timer extention..." );
});

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening at http://localhost:${port}`);
});
