//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var isAuthorised = "";

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
        isAuthorised = true;
    }
    next();
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(checkPassword);

app.post("/check", (req, res) => {
    if(isAuthorised)
        res.sendFile(__dirname + '/public/secret.html');
    else
        res.sendFile(__dirname + '/public/index.html');
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});