import api from '../../api';

export const ACTION_GET_USERS = 'ACTION_GET_USERS';
export const getUsers = () => (dispatch) => {
    api.get('users').then((resp) =>
        dispatch({
            type: ACTION_GET_USERS,
            payload: resp.data,
        })
    );
};

export const ACTION_UPDATE_USER = 'ACTION_UPDATE_USER';
export const ACTION_ADD_NEW_USER = 'ACTION_ADD_NEW_USER';
export function saveUser(changes) {
    return function (dispatch) {
        if (changes.id) {
        api.put('users/' + changes.id, changes).then((resp) =>
            dispatch({
                type: ACTION_UPDATE_USER,
                payload: resp.data,
            })
        );
        } else {
        api.post('users', changes).then((resp) =>
            dispatch({
                type: ACTION_ADD_NEW_USER,
                payload: resp.data,
            })
        );
        }
    };
}

export const ACTION_DELETE_USER = 'ACTION_DELETE_USER';
export const deleteUser = (id) => (dispatch) => {
    api.delete('users/' + id).then(() =>
        dispatch({
            type: ACTION_DELETE_USER,
            payload: id,
        })
    );
};
