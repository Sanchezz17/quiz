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
    res.sendFile(path.join(rootDir, "static/index.html"));
});

const questions = [
    {
        name: "Какой тигр самый крупный?",
        options: ["Амурский", "Малазийский", "Индийский", "Суматранский"],
        answer: ["Индийский"]
    },
    {
        name: "Где живет коала?",
        options: [
            "В горной пещере",
            "В бамбуковом лесу",
            "В тропических лесах Новой Зеландии",
            "На эвкалиптовом дереве"
        ],
        answer: ["На эвкалиптовом дереве"]
    },
    {
        name: "Какого цвета хвост у зебры?",
        options: ["Белый", "Черный", "Серый", "Коричневый"],
        answer: ["Черный"]
    },
    {
        name: "Какое животное самое быстрое?",
        options: ["Лев", "Зебра", "Сапсан", "Гепард"],
        answer: ["Гепард"]
    },
];

app.get("/api/questions", (_, res) => {
    res.json(questions);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
