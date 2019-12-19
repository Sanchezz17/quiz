const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const rootDir = process.cwd();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.static('static'));

app.use(cookieParser());

app.use(bodyParser.json());

app.get("/", (_, res) => {
    res.sendFile(path.join(rootDir, "static/index.hbs"));
});

const questions = [
    {
        name: "Какой тигр самый крупный?",
        index: 1,
        imageURL: "https://images.wallpaperscraft.com/image/tiger_aggression_teeth_predator_big_cat_106887_1600x1200.jpg",
        options: [
            {option: "Амурский"},  {option:"Малазийский"}, {option:"Индийский"}, {option:"Суматранский"}
        ],
        answer: ["Индийский"]
    },
    {
        name: "Где живет коала?",
        index: 2,
        imageURL: "https://versiya.info/uploads/posts/2019-02/1550993623_s1200.jpg",
        options: [
            {option: "В горной пещере"},
            {option: "В бамбуковом лесу"},
            {option: "В тропических лесах Новой Зеландии"},
            {option: "На эвкалиптовом дереве"}
        ],
        answer: ["На эвкалиптовом дереве"]
    },
    {
        name: "Какого цвета хвост у зебры?",
        index: 3,
        imageURL: "http://fullhdwallpapers.ru/image/animals/2852/tri-zebry.jpg",
        options: [
            {option: "Белый"}, {option: "Черный"}, {option: "Серый"}, {option: "Коричневый"}
        ],
        answer: ["Черный"]
    },
    {
        name: "Какое животное самое быстрое?",
        index: 4,
        imageURL: "https://s1.1zoom.ru/big3/25/Cheetahs_Cubs_Two_Grass_527375_2048x1152.jpg",
        options: [
            {option: "Лев"}, {option: "Зебра"}, {option: "Сапсан"}, {option: "Гепард"}
        ],
        answer: ["Гепард"]
    },
];

app.get("/api/questions", (_, res) => {
    res.json(questions);
});

app.post("/", (req, res) => {
    let result = req.body;
    let score = 0;
    for (const question of questions) {
        if (result[question.index]) {
            if (result[question.index] === question.answer) {
                score++;
            }
        } else {
            console.log(`have no answer for question ${question.name}`)
        }
    }
    res.send({score});
});

app.listen(port, () => console.log(`App listening on port ${port}`));
