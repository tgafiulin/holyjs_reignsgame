import type { GameCard } from '../shared/types';

import demoImage from '../assets/images/demo.jpg';
import demo2Image from '../assets/images/demo2.png';

export const CARDS: GameCard[] = [
  {
    id: 'taxi',
    text: 'Вызовешь такси до аэропорта?',
    image: demoImage,
    yes: { money: -1, health: 0, mood: 1, burnout: 0 },
    no: { money: 1, health: -1, mood: -1, burnout: 1 },
  },
  {
    id: 'last-feature',
    text: 'Перед вылетом просят допилить фичу. Остаёшься?',
    image: demoImage,
    yes: { money: 1, health: -1, mood: -1, burnout: 2 },
    no: { money: -1, health: 0, mood: 1, burnout: -1 },
  },
  {
    id: 'merch',
    text: 'На стенде конференции продают мерч. Покупаешь?',
    image: demoImage,
    yes: { money: -1, health: 0, mood: 2, burnout: 0 },
    no: { money: 0, health: 0, mood: -1, burnout: 0 },
  },
  {
    id: 'afterparty',
    text: 'После докладов зовут на афтепати. Идёшь?',
    image: demoImage,
    yes: { money: -1, health: -1, mood: 2, burnout: -1 },
    no: { money: 0, health: 1, mood: -1, burnout: 0 },
  },
  {
    id: 'hotel-gym',
    text: 'В отеле есть спортзал. Сходишь утром?',
    image: demoImage,
    yes: { money: 0, health: 2, mood: 1, burnout: -1 },
    no: { money: 0, health: -1, mood: 0, burnout: 1 },
  },
  {
    id: 'coworking',
    text: 'День без докладов. Арендовать коворкинг и поработать?',
    image: demoImage,
    yes: { money: -1, health: 0, mood: -1, burnout: 2 },
    no: { money: 0, health: 1, mood: 1, burnout: -2 },
  },
  {
    id: 'shaurma',
    text: 'Пойдёшь в ресторан в центре на обед?',
    image: demoImage,
    yes: { money: -2, health: 1, mood: 1, burnout: 0 },
    no: { money: 1, health: -1, mood: 0, burnout: 0 },
  },
  {
    id: 'slack',
    text: 'В отпуске пишут в рабочий слак. Отвечаешь?',
    image: demoImage,
    yes: { money: 0, health: 0, mood: -1, burnout: 2 },
    no: { money: 0, health: 0, mood: 1, burnout: -1 },
  },
  {
    id: 'talk',
    text: 'Предложили выступить с докладом. Соглашаешься?',
    image: demo2Image,
    yes: { money: 1, health: -1, mood: 2, burnout: 2 },
    no: { money: 0, health: 0, mood: -1, burnout: -1 },
  },
  {
    id: 'sightseeing',
    text: 'Выпал свободный день. Пойти гулять по городу?',
    image: demo2Image,
    yes: { money: -1, health: 1, mood: 2, burnout: -2 },
    no: { money: 0, health: 0, mood: -1, burnout: 0 },
  },
  {
    id: 'insurance',
    text: 'Оформить страховку на поездку?',
    image: demo2Image,
    yes: { money: -1, health: 0, mood: 0, burnout: 0 },
    no: { money: 0, health: -2, mood: -1, burnout: 0 },
  },
  {
    id: 'networking',
    text: 'На митапе незнакомец рассказывает про свой стартап. Слушаешь?',
    image: demo2Image,
    yes: { money: 0, health: 0, mood: 1, burnout: 0 },
    no: { money: 0, health: 0, mood: -1, burnout: -1 },
  },
  {
    id: 'red-eye',
    text: 'Билет на рейс с вылетом в 6 утра дешевле. Брать?',
    image: demo2Image,
    yes: { money: 1, health: -2, mood: -1, burnout: 1 },
    no: { money: -1, health: 0, mood: 0, burnout: 0 },
  },
  {
    id: 'roommate',
    text: 'Дешевле снять номер на двоих с коллегой. Соглашаешься?',
    image: demo2Image,
    yes: { money: 1, health: 0, mood: -1, burnout: 0 },
    no: { money: -1, health: 0, mood: 1, burnout: 0 },
  },
  {
    id: 'presentation',
    text: 'Нужно дописать слайды в самолёте. Делаешь?',
    image: demo2Image,
    yes: { money: 0, health: -1, mood: -1, burnout: 2 },
    no: { money: 0, health: 0, mood: 1, burnout: -1 },
  },
];
