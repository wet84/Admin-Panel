import { 
    ACTION_GET_USERS,
    ACTION_UPDATE_USER,
    ACTION_ADD_NEW_USER,
    ACTION_DELETE_USER,

} from '../actions/users';

const initialState = {
    users: [],
};

function updateUser(users, user) {
    return users.map((item) => (item.id === user.id ? user : item));
}

export default function (state = initialState, { type, payload }) {

    switch (type) {
        case ACTION_GET_USERS:
            return { ...state, users: payload };

        case ACTION_UPDATE_USER:
            return {
                ...state,
                users: updateUser(state.users, payload),
            };

        case ACTION_ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, payload],
            };

        case ACTION_DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== payload),
            };
        default:
            return state;
    }
}