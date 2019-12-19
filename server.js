const express = require("express");
const path = require("path");
// import * as path from "path";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

const rootDir = process.cwd();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.static('static'));

app.get("/", (_, res) => {
    res.sendFile(path.join(rootDir, "static/index.hbs"));
});

app.listen(port, () => console.log(`App listening on port ${port}`));
