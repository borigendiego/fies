import Link from 'next/link';
import React from 'react';

const VideoReproductor = ({isReproductorOpen, closeReproductor}:any) => {
    return (
        <div 
            className={`${isReproductorOpen ? '' : 'hidden'} h-screen w-full fixed top-0 left-0 z-40 bg-black/95
            flex flex-col justify-center items-center`}
         >
            <button className='absolute z-30 md:right-12 right-[5%] top-6 p-2 cursor-pointer' onClick={closeReproductor}>
                <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.575 7.975L1.675 12.875C1.49167 13.0583 1.25833 13.15 0.975 13.15C0.691667 13.15 0.458333 13.0583 0.275 12.875C0.0916663 12.6917 0 12.4583 0 12.175C0 11.8917 0.0916663 11.6583 0.275 11.475L5.175 6.575L0.275 1.675C0.0916663 1.49167 0 1.25833 0 0.975C0 0.691667 0.0916663 0.458333 0.275 0.275C0.458333 0.0916663 0.691667 0 0.975 0C1.25833 0 1.49167 0.0916663 1.675 0.275L6.575 5.175L11.475 0.275C11.6583 0.0916663 11.8917 0 12.175 0C12.4583 0 12.6917 0.0916663 12.875 0.275C13.0583 0.458333 13.15 0.691667 13.15 0.975C13.15 1.25833 13.0583 1.49167 12.875 1.675L7.975 6.575L12.875 11.475C13.0583 11.6583 13.15 11.8917 13.15 12.175C13.15 12.4583 13.0583 12.6917 12.875 12.875C12.6917 13.0583 12.4583 13.15 12.175 13.15C11.8917 13.15 11.6583 13.0583 11.475 12.875L6.575 7.975Z" fill="white"/>
                </svg>
            </button>
            <video autoPlay controls className={'object-cover h-[550px] w-[900px]'}>
                <source src={'https://res.cloudinary.com/du31j65g6/video/upload/v1705396237/Spektrum/Willich_Zeitraffer_comp_h8mthy.mp4'} type="video/mp4" />
            </video>
            <a href="/projekte/#Willich" className='text-white flex hover:underline pt-10 md:pt-4'>
                Projekt &rarr;
            </a>
        </div>
    );
};

export default VideoReproductor;