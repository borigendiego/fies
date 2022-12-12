import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Brandschutz = () => {
    return(
        <div className='flex flex-col md:flex-row border md:py-8'>
            <motion.div 
                className='mx-auto flex items-center py-4'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1}}
                viewport={{once: true}}
            >
                <Image 
                    src={'/assets/images/leistung/brandschutz.jpg'} 
                    height={200} 
                    width={700} 
                    alt={''}
                    className={'rounded-l-none md:rounded-xl'}
                />
            </motion.div>
            <motion.div 
                className='md:w-1/2 md:px-16 px-4 text-center md:text-left'
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .7, delay: .5}}
                viewport={{once: true}}
            >
                <h1 className='pt-4 font-semibold' id={'brandschutz'}>Brandschutz</h1>
                <p className='my-4'>
                    Egal ob Wohnhaus, Schule oder Bürogebäude, die Brandschutzplanung
                    ist für die Sicherheit eines jeden Gebäudes unerlässlich.
                    Wir betrachten den vorbeugenden Brandschutz von Beginn der Planung als untrennbaren Teil
                    der Architektur. Als oberstes Ziel gilt, im Brandfall die Sicherheit der
                    Nutzer sicherstellen zu können. Wir beziehen je nach Gebäudegröße und Nutzeranzahl
                    die notwendigen Abmessungen der ersten und zweiten Rettungswege sinnvoll in das
                    Gebäudekonzept mit ein. Ebenso erstellen wir die Entrauchungskonzepte für Gebäude
                    und Tiefgaragen, unter Berücksichtigung der unterschiedlichen Brandverhalten der
                    Baustoffe. Da im Falle eines Brandes die größte Gefahr von der Rauchentwicklung
                    im Gebäude ausgeht, ist es für die Planung besonders wichtig, das Brandverhalten
                    der Baustoffe und den Feuerwiderstand der tragenden Bauteile, mit den Entrauchungs-
                    und Fluchtwegkonzepten in Einklang zu bringen.
                </p>
                <p className='my-4'>
                    Nur durch eine sorgfältig abgestimmte Planung kann sichergestellt werden,
                    dass im Brandfall niemand zu Schaden kommt. Wir liefern qualifizierte
                    Brandschutzkonzepte, die auf die individuellen Gegebenheiten des Bauvorhabens
                    angepasst sind - Immer im Einklang mit den bauordnungsrechtlichen Vorschriften.
                </p>
            </motion.div>
        </div>
    )
}

export default Brandschutz