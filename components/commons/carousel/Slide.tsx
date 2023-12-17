import React, { useRef, useEffect, useState } from 'react';
import { CarouselType } from './constants';

const Slide = ({
    title,
    text,
    bgColor,
    colorSquare,
    content,
    linkTo,
    bgImage,
    lightBoxContent
}:CarouselType) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [showModal, setShowModal] = useState<any>({
        show: false,
    })

    useEffect(() => {
        const iframeElement = document.querySelector('iframe');
        let iframeURL = iframeElement && iframeElement?.getAttribute('src') ? iframeElement?.getAttribute('src') : '';

        console.log(iframeElement);
        if (dialogRef.current?.open && !showModal.show) {
            iframeURL = iframeURL?.replace('?autoplay=1&mute=1', '') ? iframeURL?.replace('?autoplay=1&mute=1', '') : '';
            iframeElement?.setAttribute('src', iframeURL);
            dialogRef.current?.close();

        } else if (!dialogRef.current?.open && showModal.show) {
            iframeURL += '?autoplay=1&mute=1';
            iframeElement?.setAttribute('src', iframeURL ? iframeURL : '');
            dialogRef.current?.showModal();

        }
      }, [showModal.show]);

    return(
        <div className="min-w-[360px] overflow-hidden transition-all duration-300 ease-in z-10 relative md:px-16">
            {
                lightBoxContent
                ? <>
                    <div className="md:flex md:flex-col rounded-md hover-slide cursor-pointer" onClick={() => setShowModal({show: true})}>
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
                    <dialog ref={dialogRef}>
                        <span className={'flex justify-end items-center mb-2'}>
                            <svg className={'ml-2 cursor-pointer'} onClick={() => setShowModal({show: false})} xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </span>
                        {lightBoxContent}
                    </dialog>
                </>
                : <a href={linkTo}>
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
            }
        </div>
    )
}

export default Slide;