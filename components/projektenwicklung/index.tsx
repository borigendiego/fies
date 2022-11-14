import React from "react";
//
import { motion } from "framer-motion";


const Projektewicklung = () => {
    return(
        <div className='relative'>
            <motion.img 
                src='/assets/images/leistung/projektewick-bg.png' 
                className='absolute h-full w-full'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1, delay: 2}}
                viewport={{once: true}}
             />
            <div className='flex flex-col relative md:pl-16 md:pt-12 md:pb-12'>
                <motion.h1 
                    className='text-5xl'
                    initial={{opacity: 0, x:-30}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration:  .7, delay: 1}}
                    viewport={{once: true}}
                >Projektewicklung</motion.h1>
                <motion.div 
                    className='w-3/12'
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: .7, delay: 1.5}}
                    viewport={{once: true}}
                >
                    <p className='pt-5 text-lg'>
                        Jedes Grundstück hat seine Eigenheiten und seinen eigenen Zuschnitt.
                         Um Flächen effizient nutzen zu können, entwickeln wir maßgeschneiderte Konzepte zur individuellen Gebäudeplanung.
                          Immer im Einklang mit dem Rahmen von Bauordnungs- und Planungsrecht.
                    </p>
                    <p className='pt-5 pb-5 text-lg'>
                        Unser Ziel ist eine optimale Ausnutzung des Baulandes.
                         Durch die Planung nach Maß erreichen wir die größtmögliche Wertsteigerung des Grundstücks.
                          Gleichzeitig fördern wir so die ökologisch sinnvolle Nachverdichtung unserer Städte.
                    </p>
                    <a className='cursor-pointer font-semibold hover:underline'>Mehr sehen</a>
                </motion.div>
            </div>
        </div>
    )
}

export default Projektewicklung