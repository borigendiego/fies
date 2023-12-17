import React from 'react';
import dynamic from 'next/dynamic'
//@ts-ignore
const Lightroom: any = dynamic(() => import('react-lightbox-gallery'), {
    ssr: false
})

type galleryImages = {
    gallery: any
}

const ProjektGallery = ({gallery}:galleryImages) => {
    const IMAGES = gallery.map((value: any, index: any) => {
        return {
            src: value.src,
            desc: '',
            sub: ''
        }
    });

    const settings = {
        columnCount:{
          default:3,
          mobile:3,
          tab:4
        },
        mode: 'dark'
    }

    return (
        <div className={'image-gallery'}>
            <Lightroom images={IMAGES} settings={settings} />
        </div>

    )
};

export default ProjektGallery