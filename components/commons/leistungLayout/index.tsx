'use client'
import React from "react";
//
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const LeistungLayout = ({id, title, text, image, reverse, detail}:any) => {
    return (
        <div id={id} className={`${reverse ? 'md:flex-row-reverse' : ''} md:py-8 px-4 flex md:flex-row flex-col-reverse mt-8`}>
            <motion.div
                className={`${detail ? 'hidden' : ''} flex flex-col justify-center items-center px-6 text-center md:text-left md:w-1/2 md:mt-0 mt-8`}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration:  .7, delay: 1.5}}
                viewport={{once: true}}
            >
                <h2 className='pt-4 font-semibold md:leading-4 leading-7'>{title}</h2>
                <Link href={`/${id}`} className="text-center mt-3">
                    <button className="py-2 px-4 rounded-xl duration-500 bg-[#89adcd99] cursor-pointer hover:bg-[#9dc2e2b1] hover:underline font-bold">
                        Mehr lesen
                    </button>
                </Link>
            </motion.div>
            <motion.div
                className={`${detail ? '' : 'hidden'} px-6 md:text-left md:w-1/2 pt-4 pb-10`}
                initial={{opacity: 0, y: 40}}
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
                    className={'rounded-xl'}
                />
            </motion.div>
        </div>
    )
}

export default LeistungLayout;