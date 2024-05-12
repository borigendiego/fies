'use client'
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LightBox from '../LightBox/LightBox';

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

    const [openGallery, setOpenGallery] = useState(false);

    const toggleGallery = () => {
        setOpenGallery(!openGallery)
    }

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
        <div id={title} className={'grid grid-flow-row md:grid-flow-col md:my-8 max-w-[1400px] md:px-8 px-4 mx-auto border-b pb-20 scroll-m-10'}>
            <div className={'md:pt-16 pt-8 grid-cols-1'}>
                <div className={'flex flex-col md:flex-row md:mt-6 mb-12 items-baseline text-center'}>
                    <h2 className={'hbold'}>PROJEKT:</h2>
                    <p className={'md:text-4xl text-3xl md:pl-2'}>{title}</p>
                </div>
                <motion.div 
                    className={'grid grid-rows-4 grid-cols-1'}
                    variants={projektList}
                    initial={'hidden'}
                    whileInView={'visible'}
                    transition={{duration: .2, delay: .1}}
                    viewport={{once: true}}
                >
                    <motion.div 
                        className={'md:my-2 my-4 flex w-full justify-between'}
                        variants={projektItems}
                    >
                        <h3 className={''}>Ort:</h3>
                        <p className={'max-w-[200px] font-bold text-end'}>{ort}</p>
                    </motion.div>
                    <motion.div 
                        className={'md:my-2 my-4 flex w-full justify-between'} variants={projektItems}
                    >
                        <h3 className='mr-4 md:mr-0'>Projekt:</h3>
                        <p className='w-[250px] font-bold text-end'>{projekt}</p>
                    </motion.div>
                    <motion.div 
                        className={'md:my-2 my-4 w-full justify-between hidden'} variants={projektItems}
                    >
                        <h3 className=''>Baukosten:</h3>
                        <p className='font-bold text-end'>{baukosten}</p>
                    </motion.div>
                    <motion.div 
                        className={'md:my-2 my-4 flex w-full justify-between'} variants={projektItems}
                    >
                        <h3 className='mr-4 md:mr-0'>Leistung:</h3>
                        <p className='w-[200px] font-bold text-end'>{leistungen}</p>
                    </motion.div>
                    <motion.div 
                        className={'md:my-2 my-4 flex w-full justify-between'} variants={projektItems}
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
                {
                    gallery.length >= 1 ? 
                    <div className='relative md:h-[450px] md:w-[616px] w-full h-[200px]' onClick={toggleGallery}>
                        <div className='absolute left-0 top-0 w-full h-full bg-black/20 opacity-0 
                        duration-500 hover:opacity-100 cursor-pointer z-10' />
                        <Image
                            src={mainImage}
                            alt={''}
                            fill={true}
                        />
                    </div>
                    :
                    <div className='relative md:h-[450px] md:w-[616px] w-full h-[200px]'>
                        <Image
                            src={mainImage}
                            alt={''}
                            fill={true}
                        />
                    </div>
                }
                
                <motion.div className={'my-2 md:flex hidden w-full justify-end'} variants={projektItems}>
                    <div className={'max-w-[616px] max-h-[150px] flex gap-2 overflow-hidden flex-wrap'}>
                        {
                            gallery.map((val:any, index:any) => {
                                return(
                                    <div className='relative' key={index} onClick={toggleGallery}>
                                        <Image src={val.src} alt={''} height={150} width={200} />
                                        <div className='absolute left-0 top-0 w-full h-full bg-black/20 opacity-0 
                                            duration-500 hover:opacity-100 cursor-pointer z-10' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>
            </motion.div>
            <LightBox projectImages={gallery} isGalleryOpen={openGallery} closeGallery={toggleGallery} />
        </div>
    )
}

export default Projekt
