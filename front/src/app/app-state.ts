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
  }
  };

 export default appState;