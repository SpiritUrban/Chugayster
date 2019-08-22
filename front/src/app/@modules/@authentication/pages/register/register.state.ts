import { User } from '../../../@common-dependencies/interfaces/user';

interface extraAlert {
    show: Boolean;
    title: String;
    body: String;
    bodyDev: String;
}

interface RegisterState {
    user: User;
    roles: Array<string>; // <----------------- not yet implemented !!!
    alert: extraAlert;
}

var registerState: RegisterState = {
    user: {
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
        show: true,
        title: 'About',
        body: 'Some wrong or good',
        bodyDev: 'Tech details'
    }
};

export { registerState };
