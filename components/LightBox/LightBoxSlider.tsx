'use client'
import React, {useState} from 'react';
import Image from 'next/image';

const LightBoxSlider = ({projectImages}:any) => {



    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) => {
            if (index === projectImages.length - 1) return 0;
            return index + 1;
        })
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return projectImages.length - 1;
            return index - 1;
        })
    }

    return (
        <div className=''>
            <div className={'md:relative w-screen z-10'}>
                <div className="flex items-center md:max-w-[850px] max-h-[85vh] overflow-hidden mx-auto">
                    {
                        projectImages.map((val:any, index:any) => (
                            <div
                                key={index}
                                className='md:w-[850px] md:min-h-[450px] duration-500'
                                style={{
                                    translate: `${-100 * imageIndex}%`,
                                }}
                                onClick={showNextImage}
                            >
                                <Image
                                    className='max-w-[100vw]'
                                    src={val.src} 
                                    alt=''
                                    key={index}
                                    width={850}
                                    height={450}
                                />
                            </div>

                        ))
                    }
                </div>

                <button
                    className={`${imageIndex === 0 ? 'hidden' : ''} absolute md:top-0 md:bottom-0 bottom-[5%] md:left-[10%] left-[5%] cursor-pointer text-white duration-500 p-2 hover:bg-[#ffffff33]`}
                    onClick={showPrevImage}
                >
                    <svg width="25" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                        <path d="M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z" fill="white"/>
                    </svg>
                </button>
                <button
                    className="absolute md:top-0 md:bottom-0 bottom-[5%] md:right-[10%] right-[5%] cursor-pointer text-white duration-500 p-2 hover:bg-[#ffffff33]"
                    onClick={showNextImage}
                >
                    <svg width="25" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z" fill="white"/>
                    </svg>
                </button>
            <p className='text-white text-center pt-4'>{`${imageIndex + 1}`} | {projectImages.length}</p>
            </div>
        </div>
    );
};

export default LightBoxSlider;