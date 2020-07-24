import React from 'react';
import { List } from '@material-ui/core';
import Album from './album/Album';

export default function AlbumList({ albums }) {

    return (
        <>
            <List>
                { 
                    albums.map((album) => (
                        <Album album={album} key={album.id} />
                    ))
                }
            </List>
        </>
    );
}
