import React from 'react';
//Components
import { Gallery } from 'react-grid-gallery';

type galleryImages = {
    gallery: any
}

const ProjektGallery = ({gallery}:galleryImages) => {

    const IMAGES = gallery.map((value: any, index: any) => {
        return {
            src: value.src,
            thumbnail: value.thumbnail,
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            caption: `Picture ${index}`
        }
    });

    return (
        <Gallery enableImageSelection={false} images={IMAGES} />
    )
};

export default ProjektGallery