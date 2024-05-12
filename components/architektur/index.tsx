'use client'
import React from "react";
//
import Image from "next/image";
import { motion } from "framer-motion";

const ArchitekturComp = () => {
    return(
        <div>
            <div className={'border flex md:flex-row flex-col-reverse mt-8'}>
                <motion.div
                    className={'py-12 px-6 text-center md:text-left md:w-1/2'}
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration:  .7, delay: 1.5}}
                    viewport={{once: true}}
                >
                    <h1 className='pt-4 font-semibold scroll-mt-[150px]' id={'architektur'}>Architektur</h1>
                    <p className='py-2 text-base'>
                        Im Bereich des Hochbaus bieten wir Ihnen umfangreiche Planungs- und Beratungsleistungen an.
                        Wir planen und realisieren Gebäude verschiedenster Größenordnung und Funktionen, von der ersten Standortanalyse bis zur Inbetriebnahme des fertigen Bauwerks.
                    </p>
                    <p className='py-2 text-base'>
                    Unser Leistungsspektrum umfasst als freiberufliche Architekten die Beratung, Betreuung und Vertretung unserer Auftraggeber*Innen in allen die Planung, Ausführung und Überwachung eines Vorhabens betreffenden Angelegenheiten. Bei Bedarf verantworten wir hierbei als Generalplaner die Organisation eines integralen Planungsteams aus sämtlichen, für den Bau erforderlichen Fachbereichen, wie z.B. der Tragwerksplanung, technischen Gebäudeausrüstung, Freianlagen, sowie der Bauphysik.
                    </p>
                    <p className='py-2 text-base'>
                        Unser Anspruch ist es, mit unserer Planung ein optimales, wirtschaftliches Ergebnis für unsere Bauherren zu erzielen.
                        Dies erreichen wir vor allem durch die frühe Einbindung aller am Bau beteiligten Disziplinen.
                        Auf diesem Weg können sehr früh die ersten Unstimmigkeiten ausgeräumt und schnell belastbare Grundlagen für die weitere Planung geschaffen werden.
                        Aufgrund der interdisziplinären Zusammenarbeit können bereits in den ersten Planungsphasen Qualitäten und Standards für das gesamte Bauvorhaben festgelegt werden, wodurch die Kostensicherheit enorm erhöht wird.
                    </p>
                </motion.div>
                <motion.div
                    className={'m-auto'}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration:  .7, delay: .5}}
                    viewport={{once: true}}
                >
                    <Image src={'/assets/images/leistung/architektur-image.webp'} alt={'architekt image'} width={650} height={200} className={'md:rounded-xl'}/>
                </motion.div>
            </div>
        </div>
    )
}

export default ArchitekturComp;