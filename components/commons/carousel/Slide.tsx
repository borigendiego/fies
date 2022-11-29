import React from 'react';
import { CarouselType } from './constants';

const Slide = ({
    title, 
    text,
    bgColor,
    colorSquare,
    content,
    linkTo,
    bgImage
}:CarouselType) => {
    return(
        <div className="min-w-[360px] overflow-hidden transition-all duration-300 ease-in z-10 relative md:px-16">
            <a href={linkTo}>
                {
                    colorSquare 
                    ? <div className="md:flex md:flex-col rounded-md hover-slide">
                        <div 
                            className={'p-6 flex flex-col duration-300 ease-in w-[300px] h-[300px] justify-between md:mx-0 mx-auto'}
                            style={{ backgroundColor: bgColor }}
                        >
                            <p className={'text-white text-[20px]'}>
                                {title}
                            </p>
                            {content}
                        </div>
                    </div>
                    : <div className="md:flex md:flex-col rounded-md hover-slide">
                        <div 
                            className={'flex flex-col duration-300 ease-in w-[300px] h-[300px] justify-end bg-cover bg-center md:mx-0 mx-auto'}
                            style={{ 
                                backgroundImage: `url(${bgImage})`,
                            }}
                        >
                            <p className={'text-[18px] p-2 bg-[#abaaaa87] text-white'}>
                                {title}
                            </p>
                        </div>
                    </div>
                }
            </a>
        </div>
    )
}

export default Slide;