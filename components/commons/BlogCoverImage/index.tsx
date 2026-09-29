'use client'
import React, { useState } from 'react';
import Image from 'next/image';

type BlogCoverImageProps = {
    src: string,
    alt: string,
    width: number,
    height: number,
    className?: string,
    // Container height used for landscape images (cropped with object-cover)
    landscapeClassName: string,
    // Container height used for portrait images (shown whole with object-contain)
    portraitClassName: string,
    imageClassName?: string,
}

const BlogCoverImage = ({ src, alt, width, height, className = '', landscapeClassName, portraitClassName, imageClassName = '' }: BlogCoverImageProps) => {
    const [isPortrait, setIsPortrait] = useState(false);

    return (
        <div className={`relative ${className} ${isPortrait ? portraitClassName : landscapeClassName}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                onLoad={(e) => {
                    const { naturalWidth, naturalHeight } = e.currentTarget;
                    setIsPortrait(naturalHeight > naturalWidth);
                }}
                className={`w-full h-full object-center ${isPortrait ? 'object-contain' : 'object-cover'} ${imageClassName}`}
            />
        </div>
    );
};

export default BlogCoverImage;
