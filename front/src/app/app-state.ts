import { User } from './@modules/@common-dependencies/interfaces/user';

interface extraAlert {
  show: Boolean;
  title: String;
  userMsg: String;
  devMsg: String;
}

interface RegisterState {
  user: User;
  roles: Array<string>; // <----------------- not yet implemented !!!
  alert: extraAlert;
}

const appState = {
  devMode: false,
  nav: {
    msg: 'hi'
  },
  lang: 'ua',
  cards: <any>[],
  currentCard: <any>{
    title: '',
    description: '',
    video: 'zKOQhgWQPM4'
  },
  user: {
    isLogged: false,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password1: '',
    password2: '',
    role: 'Guest',
    notes: null
  },
  roles: [ // <----------------- not yet implemented !!!
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ],
  alert: {
    show: false,
    title: 'About',
    userMsg: 'Some wrong or good',
    devMsg: 'Tech details'
  },
  pages: {
    cabinet: {
      subPage: 'profile'
    }
  },


  lessonsFlow: [
    {
      number: "0",
      name: "001 START",
      video: "ic-m1zBbisk",
      title: {
        en: "Intro",
        ua: "Вступне відео процесу навчання 'Веб Університет'"
      },
      description: {
        ua: "001 START"
      },
      text: {
        en: "Intro",
        ua: "Вступне відео процесу навчання 'Веб Університет'"
      }
    },
  ]


};

export default appState;