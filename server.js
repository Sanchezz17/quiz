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
        imageURL: "https://images.wallpaperscraft.com/image/tiger_aggression_teeth_predator_big_cat_106887_1600x1200.jpg",
        options: ["Амурский", "Малазийский", "Индийский", "Суматранский"],
        answer: ["Индийский"]
    },
    {
        name: "Где живет коала?",
        imageURL: "https://versiya.info/uploads/posts/2019-02/1550993623_s1200.jpg",
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
        imageURL: "http://fullhdwallpapers.ru/image/animals/2852/tri-zebry.jpg",
        options: ["Белый", "Черный", "Серый", "Коричневый"],
        answer: ["Черный"]
    },
    {
        name: "Какое животное самое быстрое?",
        imageURL: "https://s1.1zoom.ru/big3/25/Cheetahs_Cubs_Two_Grass_527375_2048x1152.jpg",
        options: ["Лев", "Зебра", "Сапсан", "Гепард"],
        answer: ["Гепард"]
    },
];

app.get("/api/questions", (_, res) => {
    res.json(questions);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
