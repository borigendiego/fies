import React from 'react';
//
import { motion } from 'framer-motion';
import Image from 'next/image';

type ProjektTypes = {
    title: string,
    mainImage: string,
    ort: string,
    projekt: string,
    baukosten: string,
    leistungen: string,
    zeitraum: string,
}

const Projekt = ({title, mainImage, ort, projekt, baukosten, leistungen, zeitraum}:ProjektTypes) => {
    return(
        <div className='flex md:justify md:my-8 h-screen'>
            <div className='w-5/12 pl-20 pt-16'>
                <div className='flex items-center mt-6 mb-12'>
                    <h1 className='font-bold text-4xl'>PROJEKTE:</h1>
                    <p className='text-4xl pl-2'>{title}</p>
                </div>
                <div className='grid grid-rows-5'>
                    <div className='my-2  flex w-full'>
                        <h3 className='min-w-[250px]'>Ort:</h3>
                        <p className='max-w-[200px] font-bold'>{ort}</p>
                    </div>
                    <div className='my-2  flex w-full'>
                        <h3 className='min-w-[250px]'>Projekt:</h3>
                        <p className='w-[250px] font-bold'>{projekt}</p>
                    </div>
                    <div className='my-2  flex w-full'>
                        <h3 className='min-w-[250px]'>Baukosten:</h3>
                        <p className='font-bold'>{baukosten}</p>
                    </div>
                    <div className='my-2  flex w-full'>
                        <h3 className='min-w-[250px]'>Leistung:</h3>
                        <p className='w-[200px] font-bold'>{leistungen}</p>
                    </div>
                    <div className='my-2  flex w-full'>
                        <h3 className='min-w-[250px]'>Zeitraum:</h3>
                        <p className='font-bold'>{zeitraum}</p>
                    </div>
                </div>
            </div>
            <div className='w-7/12 flex items-center justify-center'>
                <Image
                    src={mainImage}
                    alt={''}
                    height={600}
                    width={600}
                 />
            </div>
        </div>
    )
}

export default Projekt