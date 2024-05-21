'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Projektewicklung = () => {
    return(
        <div id={'projektentwicklung'} className='flex md:flex-row-reverse flex-col border-t md:py-8 mt-8 scroll-mt-[8rem]'>
            <motion.div
                className={'m-auto'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1}}
                viewport={{once: true}}
            >
                <Image
                    src={'/assets/images/projekts/schwabelweis/Schwabelweis-1.webp'}
                    width={650}
                    height={200}
                    alt={'Jedes Grundstück hat seine Eigenheiten und seinen eigenen Zuschnitt.'}
                    className={'md:rounded-xl'}
                />
            </motion.div>
            <motion.div
                className={'px-6 text-center md:text-left md:w-1/2'}
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .7, delay: .5}}
                viewport={{once: true}}
            >
                <h1 className='pt-4 font-semibold'>Projektentwicklung</h1>
                <p className='my-4'>
                    Jedes Grundstück hat seine Eigenheiten und seinen eigenen Zuschnitt.
                    Um Flächen effizient nutzen zu können, entwickeln wir maßgeschneiderte Konzepte zur individuellen Gebäudeplanung.
                    Immer im Einklang mit dem Rahmen von Bauordnungs- und Planungsrecht.
                </p>
                <p className='my-4'>
                    Unser Ziel ist eine optimale Ausnutzung des Baulandes.
                    Durch die Planung nach Maß erreichen wir die größtmögliche Wertsteigerung des Grundstücks.
                    Gleichzeitig fördern wir so die ökologisch sinnvolle Nachverdichtung unserer Städte.
                </p>
            </motion.div>
        </div>
    )
}

export default Projektewicklung