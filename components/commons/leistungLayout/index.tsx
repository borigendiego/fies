'use client'
import React from "react";
//
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const LeistungLayout = ({id, title, text, image, reverse, detail}:any) => {
    return (
        <div id={id} className={`${reverse ? 'md:flex-row-reverse' : ''} border-t md:py-8 flex md:flex-row flex-col-reverse mt-8`}>
            <motion.div
                className={`${detail ? 'hidden' : ''} flex justify-center items-center px-6 text-center md:text-left md:w-1/2 md:mt-0 mt-8`}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration:  .7, delay: 1.5}}
                viewport={{once: true}}
            >
                <Link href={`/${id}`} className="text-center hover:underline cursor-pointer">
                    <h2 className='pt-4 font-semibold md:leading-4 leading-7'>{title}</h2>
                    <p>Entdecken</p>
                </Link>
            </motion.div>
            <motion.div
                className={`${detail ? '' : 'hidden'} px-6 md:text-left md:w-1/2 py-12`}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration:  .7, delay: 1.5}}
                viewport={{once: true}}
            >
                <h2 className='pt-4 font-semibold'>{title}</h2>
                {text}
            </motion.div>
            <motion.div
                className={'m-auto'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  .7, delay: .5}}
                viewport={{once: true}}
            >
                <Image
                    src={image}
                    alt={'architekt image'}
                    width={650}
                    height={300}
                    className={'md:rounded-xl'}
                />
            </motion.div>
        </div>
    )
}

export default LeistungLayout;