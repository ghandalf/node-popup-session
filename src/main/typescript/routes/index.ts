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
    // Basic test
    app.get( "/basic", (request: any, response: any) => {
        response.render( "pages/basic" );
    });
    // Keep Alive
    app.get( "/keep-alive", (request: any, response: any) => {
        response.render( "pages/keep-alive" );
    });

    app.get( "/locked", (request: any, response: any) => {
        response.render( "pages/locked" );
    });

    app.get( "/login", (request: any, response: any) => {
        response.render( "pages/login" );
    });

};
