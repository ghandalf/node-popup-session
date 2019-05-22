import Application from "./Application";

const port = process.env.PORT || 3000;

Application.listen(port, (error) => {
    if (error) {
        return console.log(error);
    }

    return console.log(`Server is listening on port ${port}`);
})