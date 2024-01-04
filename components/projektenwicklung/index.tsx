import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Projektewicklung = () => {
    return(
        <div className='flex md:flex-row-reverse flex-col-reverse border md:py-8'>
            <div className={'md:w-1/2 md:px-16 px-4 text-center md:text-left scroll-mt-[150px]'} id={'projektentwicklung'}>
                <motion.h1 
                    className={'md:text-5xl font-semibold py-4'}
                    initial={{opacity: 0, x:-30}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration:  .7, delay: 1}}
                    viewport={{once: true}}
                >Projektentwicklung</motion.h1>
                <motion.div 
                    className=''
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: .7, delay: 1.5}}
                    viewport={{once: true}}
                >
                    <p className='pt-5'>
                        Jedes Grundstück hat seine Eigenheiten und seinen eigenen Zuschnitt.
                         Um Flächen effizient nutzen zu können, entwickeln wir maßgeschneiderte Konzepte zur individuellen Gebäudeplanung.
                          Immer im Einklang mit dem Rahmen von Bauordnungs- und Planungsrecht.
                    </p>
                    <p className='pt-5 pb-5'>
                        Unser Ziel ist eine optimale Ausnutzung des Baulandes.
                         Durch die Planung nach Maß erreichen wir die größtmögliche Wertsteigerung des Grundstücks.
                          Gleichzeitig fördern wir so die ökologisch sinnvolle Nachverdichtung unserer Städte.
                    </p>
                </motion.div>
            </div>
            <motion.div 
                className='mx-auto flex items-center py-4'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1}}
                viewport={{once: true}}
            >
                <Image 
                    src={'/assets/images/projekts/schwabelweis/Schwabelweis-1.png'} 
                    height={200} 
                    width={700} 
                    alt={''}
                    className={'rounded-r-none md:rounded-xl'}
                />
            </motion.div>
        </div>
    )
}

export default Projektewicklung