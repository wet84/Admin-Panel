import api from '../../api';

export const ACTION_GET_ALBUMS = 'ACTION_GET_ALBUMS';
export const getAlbums = () => (dispatch) => {
    api.get('albums').then((resp) =>
        dispatch({
            type: ACTION_GET_ALBUMS,
            payload: resp.data,
        })
    );
};

export const ACTION_GET_PHOTOS = 'ACTION_GET_PHOTOS';
export function getPhotos (params){
    return function (dispatch) {
        api.get(`photos?albumId=${params}`).then((resp) =>
            dispatch({
                type: ACTION_GET_PHOTOS,
                payload: resp.data,
            })
        );
    }
};