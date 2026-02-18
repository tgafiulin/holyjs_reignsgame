import type { GameCard } from '../shared/types';

export const CARDS: GameCard[] = [
  {
    id: 'taxi',
    text: 'Вызовешь такси до аэропорта или поедешь на метро?',
    yes: { money: -1, health: 0, mood: 1, burnout: 0 },
    no: { money: 1, health: -1, mood: -1, burnout: 1 },
  },
  {
    id: 'last-feature',
    text: 'Перед вылетом просят допилить фичу. Остаёшься?',
    yes: { money: 1, health: -1, mood: -1, burnout: 2 },
    no: { money: -1, health: 0, mood: 1, burnout: -1 },
  },
  {
    id: 'merch',
    text: 'На стенде конференции продают мерч. Покупаешь?',
    yes: { money: -1, health: 0, mood: 2, burnout: 0 },
    no: { money: 0, health: 0, mood: -1, burnout: 0 },
  },
  {
    id: 'afterparty',
    text: 'После докладов зовут на афтепати. Идёшь?',
    yes: { money: -1, health: -1, mood: 2, burnout: -1 },
    no: { money: 0, health: 1, mood: -1, burnout: 0 },
  },
  {
    id: 'hotel-gym',
    text: 'В отеле есть спортзал. Сходишь утром?',
    yes: { money: 0, health: 2, mood: 1, burnout: -1 },
    no: { money: 0, health: -1, mood: 0, burnout: 1 },
  },
  {
    id: 'coworking',
    text: 'День без докладов. Арендовать коворкинг и поработать?',
    yes: { money: -1, health: 0, mood: -1, burnout: 2 },
    no: { money: 0, health: 1, mood: 1, burnout: -2 },
  },
  {
    id: 'shaurma',
    text: 'Обед: шаурма у входа или ресторан в центре?',
    yes: { money: 1, health: -1, mood: 0, burnout: 0 },
    no: { money: -2, health: 1, mood: 1, burnout: 0 },
  },
  {
    id: 'slack',
    text: 'В отпуске пишут в рабочий слак. Отвечаешь?',
    yes: { money: 0, health: 0, mood: -1, burnout: 2 },
    no: { money: 0, health: 0, mood: 1, burnout: -1 },
  },
  {
    id: 'talk',
    text: 'Предложили выступить с докладом. Соглашаешься?',
    yes: { money: 1, health: -1, mood: 2, burnout: 2 },
    no: { money: 0, health: 0, mood: -1, burnout: -1 },
  },
  {
    id: 'sightseeing',
    text: 'Выпал свободный день. Пойти гулять по городу?',
    yes: { money: -1, health: 1, mood: 2, burnout: -2 },
    no: { money: 0, health: 0, mood: -1, burnout: 0 },
  },
  {
    id: 'insurance',
    text: 'Оформить страховку на поездку?',
    yes: { money: -1, health: 0, mood: 0, burnout: 0 },
    no: { money: 0, health: -2, mood: -1, burnout: 0 },
  },
  {
    id: 'networking',
    text: 'На митапе незнакомец рассказывает про свой стартап. Слушаешь?',
    yes: { money: 0, health: 0, mood: 1, burnout: 0 },
    no: { money: 0, health: 0, mood: -1, burnout: -1 },
  },
  {
    id: 'red-eye',
    text: 'Билет на рейс с вылетом в 6 утра дешевле. Брать?',
    yes: { money: 1, health: -2, mood: -1, burnout: 1 },
    no: { money: -1, health: 0, mood: 0, burnout: 0 },
  },
  {
    id: 'roommate',
    text: 'Дешевле снять номер на двоих с коллегой. Соглашаешься?',
    yes: { money: 1, health: 0, mood: -1, burnout: 0 },
    no: { money: -1, health: 0, mood: 1, burnout: 0 },
  },
  {
    id: 'presentation',
    text: 'Нужно дописать слайды в самолёте. Делаешь?',
    yes: { money: 0, health: -1, mood: -1, burnout: 2 },
    no: { money: 0, health: 0, mood: 1, burnout: -1 },
  },
];
