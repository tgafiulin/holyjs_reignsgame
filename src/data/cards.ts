import type { GameCard } from "../shared/types";

import demoImage from "../assets/images/demo.jpg";
import demo2Image from "../assets/images/demo2.png";
import demo3Image from "../assets/images/demo3.jpg";

export const CARDS: GameCard[] = [
  {
    id: "taxi",
    format: "yesno",
    text: "Вызовешь такси до аэропорта?",
    image: demoImage,
    yes: { money: -1, health: 0, expertise: 0, chill: 0 },
    no: { money: 1, health: -1, expertise: 0, chill: -1 },
  },
  {
    id: "last-feature",
    format: "yesno",
    text: "Перед вылетом просят допилить фичу. Остаёшься?",
    image: demoImage,
    yes: { money: 1, health: -1, expertise: 0, chill: -2 },
    no: { money: -1, health: 0, expertise: 0, chill: 1 },
  },
  {
    id: "merch",
    format: "yesno",
    text: "На стенде конференции продают мерч. Покупаешь?",
    image: demoImage,
    yes: { money: -1, health: 0, expertise: 0, chill: 0 },
    no: { money: 0, health: 0, expertise: 0, chill: 0 },
  },
  {
    id: "afterparty",
    format: "yesno",
    text: "После докладов зовут на афтепати. Идёшь?",
    image: demoImage,
    yes: { money: -1, health: -1, expertise: 2, chill: 1 },
    no: { money: 0, health: 1, expertise: -1, chill: 1 },
  },
  {
    id: "hotel-gym",
    format: "yesno",
    text: "В отеле есть спортзал. Сходишь утром?",
    image: demoImage,
    yes: { money: 0, health: 2, expertise: 0, chill: 1 },
    no: { money: 0, health: -1, expertise: 0, chill: -1 },
  },
  {
    id: "coworking",
    format: "yesno",
    text: "День без докладов. Арендовать коворкинг и поработать?",
    image: demoImage,
    yes: { money: -1, health: 0, expertise: 0, chill: -2 },
    no: { money: 0, health: 1, expertise: 1, chill: 2 },
  },
  {
    id: "shaurma",
    format: "yesno",
    text: "Пойдёшь в ресторан в центре на обед?",
    image: demoImage,
    yes: { money: -2, health: 1, expertise: 0, chill: 0 },
    no: { money: 1, health: -1, expertise: 0, chill: 0 },
  },
  {
    id: "slack",
    format: "yesno",
    text: "В отпуске пишут в рабочий слак. Отвечаешь?",
    image: demoImage,
    yes: { money: 0, health: 0, expertise: 0, chill: -2 },
    no: { money: 0, health: 0, expertise: 0, chill: 1 },
  },
  {
    id: "talk",
    format: "yesno",
    text: "Предложили выступить с докладом. Соглашаешься?",
    image: demo2Image,
    yes: { money: 1, health: -1, expertise: 2, chill: -2 },
    no: { money: 0, health: 0, expertise: -1, chill: 1 },
  },
  {
    id: "sightseeing",
    format: "yesno",
    text: "Выпал свободный день. Пойти гулять по городу?",
    image: demo2Image,
    yes: { money: -1, health: 1, expertise: 1, chill: 2 },
    no: { money: 0, health: 0, expertise: -1, chill: 0 },
  },
  {
    id: "insurance",
    format: "yesno",
    text: "Оформить страховку на поездку?",
    image: demo2Image,
    yes: { money: -1, health: 0, expertise: 1, chill: 0 },
    no: { money: 0, health: -2, expertise: -1, chill: 0 },
  },
  {
    id: "networking",
    format: "yesno",
    text: "На митапе незнакомец рассказывает про свой стартап. Слушаешь?",
    image: demo2Image,
    yes: { money: 0, health: 0, expertise: 1, chill: 0 },
    no: { money: 0, health: 0, expertise: -1, chill: 1 },
  },
  {
    id: "red-eye",
    format: "yesno",
    text: "Билет на рейс с вылетом в 6 утра дешевле. Брать?",
    image: demo2Image,
    yes: { money: 1, health: -2, expertise: -1, chill: -1 },
    no: { money: -1, health: 0, expertise: 0, chill: 0 },
  },
  {
    id: "roommate",
    format: "yesno",
    text: "Дешевле снять номер на двоих с коллегой. Соглашаешься?",
    image: demo2Image,
    yes: { money: 1, health: 0, expertise: 0, chill: 0 },
    no: { money: -1, health: 0, expertise: 0, chill: 0 },
  },
  {
    id: "presentation",
    format: "yesno",
    text: "Нужно дописать слайды в самолёте. Делаешь?",
    image: demo2Image,
    yes: { money: 0, health: -1, expertise: 1, chill: -2 },
    no: { money: 0, health: 0, expertise: 0, chill: 1 },
  },
  {
    id: "lunch",
    format: "choice",
    text: "Где пообедаешь в перерыве между докладами?",
    image: demoImage,
    options: [
      {
        label: "Фастфуд в лобби",
        deltas: { money: 0, health: -1, expertise: 0, chill: 0 },
      },
      {
        label: "Ресторан рядом",
        deltas: { money: -2, health: 1, expertise: 2, chill: 1 },
      },
      {
        label: "Съесть припасённый сэндвич",
        deltas: { money: 1, health: 0, expertise: 0, chill: 0 },
      },
    ],
  },
  {
    id: "evening",
    format: "choice",
    text: "Вечер после первого дня конференции. Как проведёшь?",
    image: demo2Image,
    options: [
      {
        label: "В номере, отдохнуть",
        deltas: { money: 0, health: 2, expertise: 0, chill: 2 },
      },
      {
        label: "На афтепати с коллегами",
        deltas: { money: -1, health: -1, expertise: 2, chill: 1 },
      },
      {
        label: "Поработать в лобби отеля",
        deltas: { money: 0, health: -1, expertise: 0, chill: -2 },
      },
    ],
  },
  {
    id: "guitar",
    format: "choice",
    text: "Тебе в руки попала гитара. Что сыграешь?",
    image: demo3Image,
    options: [
      {
        label: "Батарейку",
        deltas: { money: 0, health: 0, expertise: -3, chill: 0 },
      },
      {
        label: "18 берёз",
        deltas: { money: 0, health: 0, expertise: 1, chill: 1 },
      },
    ],
  },
];
