import { User } from '../../interfaces/user';

interface RegisterState {
    user: User;
    roles: Array<string> // <----------------- not yet implemented !!!
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
    ]
};

export { registerState };
