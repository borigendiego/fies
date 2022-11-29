import React from "react";
//
import Image from "next/image";
import { motion } from "framer-motion";

const ArchitekturComp = () => {
    return(
        <div className='relative' id={'#2'}>
            <div className='md:py-10 mt-20 md:w-6/12 md:pl-10 px-2 md:pr-0 border rounded-xl rounded-l-none rounded-b-none'>
                <motion.h1 
                    className='text-3xl'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration:  1, delay: .5}}
                    viewport={{once: true}}
                >Wir begleiten Sie von der Konzeption <br/>
                    bis zur Realisierung des Projekts.
                </motion.h1>
            </div>
            <div className='flex md:flex-row flex-col-reverse w-full border rounded-xl rounded-l-none rounded-r-none'>
                <motion.div 
                    className='md:w-2/6 md:pl-10 pt-10 px-2 md:pr-0 text-center'
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration:  .7, delay: 1.5}}
                    viewport={{once: true}}
                >
                    <p className='py-2 text-base'>
                        Im Bereich des Hochbaus bieten wir Ihnen umfangreiche Planungs- und Beratungsleistungen an.
                        Wir Planen und realisieren Gebäude verschiedenster Größenordnung und Funktionen, von der ersten Standortanalyse bis zur Inbetriebnahme des fertigen Bauwerks.
                    </p>
                    <p className='py-2 text-base'>
                        Unser Leistungsspektrum umfasst nicht nur die Arbeit des klassischen Architekten,
                        sondern auch die ganzheitliche Umsetzung von komplexen Bauaufgaben als Generalplaner.
                        Bei Bedarf verantworten wir die Organisation eines integralen Planungsteams aus sämtlichen,
                        für den Bau erforderlichen Fachbereichen, wie z.B. der Tragwerksplanung, technischen Gebäudeausrüstung, Freianlagen, sowie der Bauphysik.
                    </p>
                    <p className='py-2 text-base'>
                        Unser Anspruch ist es, mit unserer Planung ein optimales, wirtschaftliches Ergebnis für unsere Bauherren zu erzielen.
                        Dies erreichen wir vor allem durch die frühe Einbindung aller am Bau beteiligten Disziplinen.
                        Auf diesem Weg können sehr früh die ersten Unstimmigkeiten ausgeräumt und schnell belastbare Grundlagen für die weitere Planung geschaffen werden.
                        Aufgrund der interdisziplinären Zusammenarbeit können bereits in den ersten Planungsphasen Qualitäten und Standards für das gesamte
                        Bauvorhaben festgelegt werden, wodurch die Kostensicherheit enorm erhöht wird.
                    </p>
                </motion.div>
                <motion.div 
                    className='md:pt-32 pt-12 mx-auto'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration:  1, delay: 1}}
                    viewport={{once: true}}
                >
                    <Image src={'/assets/images/leistung/architektur-image.png'} alt={'architekt image'} width={650} height={200} className={'md:rounded-xl'}/>
                </motion.div>
            </div>
        </div>
    )
}

export default ArchitekturComp;