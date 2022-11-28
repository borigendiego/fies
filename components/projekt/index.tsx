import React from 'react';
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

const Projekt = ({
    title,
    mainImage,
    ort,
    projekt, 
    baukosten, 
    leistungen, 
    zeitraum, 
    gallery,
}:ProjektTypes) => {

    const projektList = {
        visible: { 
            opacity: 1,
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
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -25 },
    }

    return(
        <div className={'grid grid-flow-row md:grid-flow-col md:my-8 max-w-[1400px] px-8 mx-auto border-b pb-20'}>
            <div className={'pt-16 grid-cols-1'}>
                <div className={'flex mt-6 mb-12 items-baseline'}>
                    <h1 className={'font-bold'}>PROJEKT:</h1>
                    <p className={'text-4xl pl-2'}>{title}</p>
                </div>
                <motion.div 
                    className={'grid grid-rows-5 grid-cols-1'}
                    variants={projektList}
                    initial={'hidden'}
                    whileInView={'visible'}
                    transition={{duration:  .7, delay: .5}}
                    viewport={{once: true}}
                >
                    <motion.div 
                        className={'my-2 flex w-full justify-between'}
                        variants={projektItems}
                    >
                        <h3 className={''}>Ort:</h3>
                        <p className={'max-w-[200px] font-bold text-end'}>{ort}</p>
                    </motion.div>
                    <motion.div 
                        className={'my-2 flex w-full justify-between'} variants={projektItems}
                    >
                        <h3 className=''>Projekt:</h3>
                        <p className='w-[250px] font-bold text-end'>{projekt}</p>
                    </motion.div>
                    <motion.div 
                        className={'my-2 w-full justify-between hidden'} variants={projektItems}
                    >
                        <h3 className=''>Baukosten:</h3>
                        <p className='font-bold text-end'>{baukosten}</p>
                    </motion.div>
                    <motion.div 
                        className={'my-2 flex w-full justify-between'} variants={projektItems}
                    >
                        <h3 className=''>Leistung:</h3>
                        <p className='w-[200px] font-bold text-end'>{leistungen}</p>
                    </motion.div>
                    <motion.div 
                        className={'my-2 flex w-full justify-between'} variants={projektItems}
                    >
                        <h3 className=''>Zeitraum:</h3>
                        <p className='font-bold text-end'>{zeitraum}</p>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div 
                className={'flex flex-col items-end justify-center'}
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
                 <motion.div className={'my-2 flex w-full justify-end'} variants={projektItems}>
                    <div className={'max-w-[600px]'}>
                        {
                            gallery.length > 0 && <ProjektGallery gallery={gallery} />
                        }
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projekt