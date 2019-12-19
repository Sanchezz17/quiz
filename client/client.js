const bootstrap = require("bootstrap");
const Handlebars = require("handlebars");

const answers = fetch('/api/questions').then(d => d.json());
const a = {
    name: "Какое животное самое быстрое?",
    imageURL: "https://s1.1zoom.ru/big3/25/Cheetahs_Cubs_Two_Grass_527375_2048x1152.jpg",
    options: [
        {option: "Лев"}, {option: "Зебра"}, {option: "Сапсан"}, {option: "Гепард"}],
    answer: ["Гепард"]
};
const templateScript = document.querySelector('#text-template');
const template = Handlebars.compile(templateScript);
document.querySelector('.question_form').append(template(a));

