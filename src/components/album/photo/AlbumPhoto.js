import React from "react";
import { connect } from 'react-redux';
import { useEffect } from "react";
import { getPhotos } from '../../../store/actions/albums';
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";

function AlbumPhoto({ getPhotos, photos }) {
    const { params } = useRouteMatch();

    useEffect(() => {
        getPhotos(params.id);
    });

    return (
        <>
            <GridList cellHeight={180} cols={4}>
                {photos.map((photo) => (
                    <GridListTile key={photo.id} cols={1}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <GridListTileBar title={photo.title} />
                    </GridListTile>
                ))}
            </GridList>
        </>
    );
}

const mapDispatchToprops = {
    getPhotos
};

function mapStateToProps(state) {
    return {
        photos: state.albums.photos,
    };
};

export default connect(mapStateToProps, mapDispatchToprops)(AlbumPhoto);