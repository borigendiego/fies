import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Finanzierung = () => {
    return(
        <div className='flex flex-col md:flex-row-reverse border md:py-8 scroll-mt-[100px]' id={'finanzierung'}>
            <motion.div 
                className='mx-auto flex items-center py-4'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1}}
                viewport={{once: true}}
            >
                <Image 
                    src={'/assets/images/leistung/finanzierung.jpg'} 
                    height={200} 
                    width={700} 
                    alt={''}
                    className={'rounded-r-none md:rounded-xl'}
                />
            </motion.div>
            <motion.div 
                className='md:w-1/2 md:px-16 px-4 text-center md:text-left'
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .7, delay: .5}}
                viewport={{once: true}}
            >
                <h1 className='pt-4 font-semibold'>Finanzierung</h1>
                <p className='my-4'>
                    Wenn Sie Hilfe bei der Finanzierung Ihres Bauvorhabens benötigen,
                    unterstützen wir Sie gerne! Wir arbeiten sowohl mit Banken als auch mit freien
                    Finanzierern zusammen und finden für Sie die besten Konditionen. Je nach Energie-Standard
                    des Gebäudes ist es möglich, Fördermittel für den Neubau, oder einer energetischen
                    Sanierung zu beantragen. Als Planer können wir frühzeitig passend zu Ihrem individuellen
                    Gebäude, die passenden Finanzierungen mit den entsprechenden Förderungen für
                    Sie zusammenstellen. So bietet die KfW (Kreditanstalt für Wiederaufbau) beispielsweise
                    im Rahmen ihrer Förderungen besonders niedrige Zinsen oder Tilgungszuschüsse für
                    energieeffiziente Gebäude.
                </p>
                <p className='my-4'>
                    In Abstimmung mit dem Gebäudekonzept und der jeweiligen Förderfähigkeit des Gebäudes
                    können so individuelle Finanzierungspläne erstellt werden, die genau zum Kapitalbedarf
                    und der Finanzierungsdauer passen. 
                </p>
            </motion.div>
        </div>
    )
}

export default Finanzierung