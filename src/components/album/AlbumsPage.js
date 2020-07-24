import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { getAlbums } from '../../store/actions/albums';
import { getUsers } from '../../store/actions/users';
import AlbumList from './AlbumList';
import AlbumPhoto from './photo/AlbumPhoto';

function AlbumsPage({getUsers, getAlbums, albums}) {
    
    useEffect(() => {
        getAlbums();
        getUsers();
    }, [getAlbums, getUsers]);

    const { path } = useRouteMatch();
    
    return (
        <Switch>
            <Route path={path + '/'} exact>
                <AlbumList albums={albums}/>
            </Route>
            <Route path={path + '/:id'}>
                <AlbumPhoto/>
            </Route>
        </Switch>
    );
}

const mapDispatchToprops = {
    getAlbums,
    getUsers
};

const mapStateToProps = (state) => {

    const albums = state.albums.albums.map((album) => {
            const getUser = state.users.users.find((user) => user.id === album.userId);
            return {
                ...album,
                name: getUser ? getUser.name : null,
            };
        });
    
    return { albums };
};

export default connect(mapStateToProps, mapDispatchToprops)(AlbumsPage);
