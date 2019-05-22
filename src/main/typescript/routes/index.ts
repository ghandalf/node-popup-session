import * as express from "express";

export const register = (app: express.Application) => {
    // Home page
    app.get( "/", (request: any, response: any) => {
        response.render( "index" );
    });

    // Once the popup is close
    app.get( "/timeout", (request: any, response: any) => {
        response.render( "timeout" );
    });

};
