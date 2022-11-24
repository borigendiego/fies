import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';


type LayoutProps = {
    image: string,
    title?: string,
    text: any,
    id: any,
    reverse?: boolean
}

const Layout = ({ 
    image, 
    title, 
    text,
    id,
    reverse
}:LayoutProps) => {
    return(
        <div className={`flex md:h-screen relative my-6 flex-wrap ${reverse ? 'md:flex-row-reverse' : ''}`} id={`${id}`}>
            <motion.div 
                className={'w-full md:w-5/12 md:h-full h-52 relative mb-6 md:mb-0'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1.5, delay: .5}}
                viewport={{once: true}}
            >
               <Image src={image} alt={''} layout={'fill'} className={`object-cover rounded-2xl  ${reverse ? 'rounded-r-none' : 'rounded-l-none'}`} /> 
            </motion.div>
            <motion.div 
                className={'w-full md:w-7/12 md:flex md:flex-col md:justify-center md:items-center'}
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration:  1, delay: 1}}
                viewport={{once: true}}
            >
                <h1 className={'text-center text-[30px] mb-3 font-bold'}>
                    {title}
                </h1>
                <div className={'px-8 md:w-10/12'}>{text}</div>
            </motion.div>
        </div>
    )
}

export default Layout;