import shuffle from "../utils/shuffle";

export const staticQuestions = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Xiangqi_Cannon_%28Trad%29.svg/2560px-Xiangqi_Cannon_%28Trad%29.svg.png",
    title: "Какая фигура представлена на изображении?",
    variants: ["Слон", "Пешка", "Пушка"],
    helper: "Фигура в игре в городок.",
    correct: 2,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Xiangqi_Advisor_(Trad).svg/1280px-Xiangqi_Advisor_(Trad).svg.png",
    title: "Какая фигура представлена на изображении?",
    variants: ["Губернатор", "Конь", "Ладья"],
    helper:
      "Может издать указ о закрытии пунктов приёма лома цветных металлов в городе Красноярск.",
    correct: 0,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Xiangqi_Elephant_%28Trad%29.svg/2560px-Xiangqi_Elephant_%28Trad%29.svg.png",
    title: "Какая фигура представлена на изображении?",
    variants: ["Конь", "Слон", "Пешка"],
    helper:
      "Военнослужащий срочной службы, отслуживший больше половины, но меньше трёх четвертей срока.",
    correct: 1,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Xiangqi_Horse_%28Trad%29.svg/2560px-Xiangqi_Horse_%28Trad%29.svg.png",
    title: "Какая фигура представлена на изображении?",
    variants: ["Конь", "Пешка", "Слон"],
    helper: "Древнее название созвездия Пегаса.",
    correct: 0,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Xiangqi_Soldier_%28Trad%29.svg/2560px-Xiangqi_Soldier_%28Trad%29.svg.png",
    title: "Какая фигура представлена на изображении?",
    variants: ["Пушка", "Пешка", "Слон"],
    helper: "Незначительный, несамостоятельный человек, действующий по указанию других.",
    correct: 1,
  },
  {
    img: "",
    title: "Какова ценность фигуры под названием «Ладья»?",
    variants: ["Два", "Семь", "Девять"],
    helper: "… классов, пора в ПТУ.",
    correct: 2,
  },
  {
    img: "",
    title: "Какова размерность игрового поля в линиях?",
    variants: ["9x10 линиий", "9x9 линиий", "10x11 линиий"],
    helper: "Сама доска 10x10, но вспомним, что есть река.",
    correct: 0,
  },
  {
    img: "",
    title: "Какова цель игры «Сянци»?",
    variants: [
      "Захватить губернатора соперника",
      "Достичь ладьёй края игрового поля стороны соперника",
      "Захватить вражеского генерала",
    ],
    helper:
      "Данная цель соответствует одной из целей разведчиков или диверсантов в военное время реальной жизни.",
    correct: 2,
  },
];

export const questions = shuffle(staticQuestions)