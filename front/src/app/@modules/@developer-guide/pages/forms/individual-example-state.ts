import { User } from '../../../@common-dependencies/interfaces/user';

interface IndividualExampleState {
    user: User;
    roles: Array<string> // <----------------- not yet implemented !!!
}

var individualExampleState: IndividualExampleState = {
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

export { individualExampleState };
