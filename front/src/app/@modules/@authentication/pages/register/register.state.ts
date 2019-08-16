import { User } from '../../../@common-dependencies/interfaces/user';

interface extraAlert {
    show: Boolean;
    title: String;
    body: String;
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
        title: '',
        body: ''
    }
};

export { registerState };
