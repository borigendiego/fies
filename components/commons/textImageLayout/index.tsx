'use client'
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';


type LayoutProps = {
    image: string,
    title?: string,
    text: any,
    id: any,
    reverse?: boolean,
    textDisplay?: any
}

const Layout = ({ 
    image, 
    title, 
    text,
    id,
    reverse,
    textDisplay
}:LayoutProps) => {

    return(
        textDisplay 
        ?
            <div id={id} className={`flex relative my-4 py-20 flex-wrap border-b ${reverse ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                    className={'w-full md:w-6/12 md:h-auto relative mb-6 md:mb-0 md:px-32 px-4 text-center'}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration:  1.5, delay: .5}}
                    viewport={{once: true}}
                >
                    <p className="font-bold text-6xl percentage py-6">36%</p>
                    <p>
                        des weltweiten 
                        <strong> Energiebadarfs</strong> werden
                        direkt oder indirekt durch
                        Gebäude verbraucht
                    </p>
                    <p className="font-bold text-6xl percentage py-6">37%</p>
                    <p>
                        der weltweiten 
                        <strong> Emissionen</strong> werden
                        direkt oder indirekt durch
                        Gebäude erzeugt
                    </p>
                    <p className="font-bold text-6xl percentage py-6">55%</p>
                    <p>
                        der europäischen 
                        <strong> Emissionen</strong> müssen bis
                        2030, im Vergleich zum
                        Jahre 1990 eingespart
                        werden
                    </p>
                </motion.div>
                <motion.div 
                    className={'w-full md:w-6/12 md:flex md:flex-col md:justify-center md:items-center mx-auto'}
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration:  .5, delay: 1}}
                    viewport={{once: true}}
                >
                    <h1 className={'text-center text-[30px] mb-3 md:mt-0 mt-6 font-bold'}>
                        {title}
                    </h1>
                    <div className={'px-8 md:w-9/12 text-center md:text-left'}>{text}</div>
                </motion.div>
            </div>
            :
            <div className={`flex relative my-4 py-20 flex-wrap border-b ${reverse ? 'md:flex-row-reverse' : ''}`} id={`${id}`}>
                <motion.div 
                    className={'w-full md:w-6/12 md:h-auto h-52 relative mb-6 md:mb-0'}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration:  1, delay: .5}}
                    viewport={{once: true}}
                >
                    <Image src={image} alt={''} layout={'fill'} className={`object-cover md:rounded-2xl  ${reverse ? 'rounded-r-none' : 'rounded-l-none'}`} /> 
                </motion.div>
                <motion.div 
                    className={'w-full md:w-6/12 md:flex md:flex-col md:justify-center md:items-center mx-auto'}
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration:  .5, delay: 1}}
                    viewport={{once: true}}
                >
                    <h1 className={'text-center text-[30px] mb-3 md:mt-0 mt-6 font-bold'}>
                        {title}
                    </h1>
                    <div className={'px-8 md:w-9/12 text-center md:text-left'}>{text}</div>
                </motion.div>
            </div>
    )
}

export default Layout;