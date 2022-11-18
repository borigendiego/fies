import React from 'react';
//
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjektGallery from '../projektGallery';

type ProjektTypes = {
    title: string,
    mainImage: string,
    ort: string,
    projekt: string,
    baukosten: string,
    leistungen: string,
    zeitraum: string,
    gallery?: any,
}


const Projekt = ({title, mainImage, ort, projekt, baukosten, leistungen, zeitraum, gallery}:ProjektTypes) => {

    const projektList = {
        visible: { 
            opacity: 1,
            x: 20,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.5,
              }, 
        },
        hidden: {
            opacity: 0,
            x: 0,
            transition: {
                when: "afterChildren",
              },
            },
    }

    const projektItems = {
        visible: { opacity: 1, x: 25 },
        hidden: { opacity: 0, x: 0 },
    }

    return(
        <div className='flex md:justify md:my-8 h-screen'>
            <div className='w-5/12 pl-20 pt-16'>
                <div className='flex items-center mt-6 mb-12'>
                    <h1 className='font-bold text-4xl'>PROJEKTE:</h1>
                    <p className='text-4xl pl-2'>{title}</p>
                </div>
                <motion.div 
                    className='grid grid-rows-5'
                    variants={projektList}
                    initial={'hidden'}
                    whileInView={'visible'}
                    transition={{duration:  .7, delay: .5}}
                    viewport={{once: true}}
                >
                    <motion.div 
                        className='my-2  flex w-full'
                        variants={projektItems}
                    >
                        <h3 className='min-w-[250px]'>Ort:</h3>
                        <p className='max-w-[200px] font-bold'>{ort}</p>
                    </motion.div>
                    <motion.div className='my-2  flex w-full' variants={projektItems}>
                        <h3 className='min-w-[250px]'>Projekt:</h3>
                        <p className='w-[250px] font-bold'>{projekt}</p>
                    </motion.div>
                    <motion.div className='my-2  flex w-full' variants={projektItems}>
                        <h3 className='min-w-[250px]'>Baukosten:</h3>
                        <p className='font-bold'>{baukosten}</p>
                    </motion.div>
                    <motion.div className='my-2  flex w-full' variants={projektItems}>
                        <h3 className='min-w-[250px]'>Leistung:</h3>
                        <p className='w-[200px] font-bold'>{leistungen}</p>
                    </motion.div>
                    <motion.div className='my-2  flex w-full' variants={projektItems}>
                        <h3 className='min-w-[250px]'>Zeitraum:</h3>
                        <p className='font-bold'>{zeitraum}</p>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div 
                className='w-7/12 flex flex-col items-center justify-center'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1, delay: 1}}
                viewport={{once: true}}
            >
                <Image
                    src={mainImage}
                    alt={''}
                    height={600}
                    width={600}
                 />
                 <div className='h-[40vh] w-[550px] overflow-y-scroll z-50'>
                    {
                        gallery && <ProjektGallery gallery={gallery} />
                    }
                 </div>
            </motion.div>
        </div>
    )
}

export default Projekt