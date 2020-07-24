import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';
import '../albumPage.scss'

export default function Album({ album }) {
    const history = useHistory();
    const { url } = useRouteMatch();

    function onAlbumClick() {
        history.push(url + '/' + album.id);
    }

    return (
        <ListItem onClick={onAlbumClick} className='cursor-style'>
            <ListItemAvatar>
                <Avatar>
                    {/* <ImageIcon /> */}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={album.name} secondary={album.title} />
        </ListItem>
    );
}