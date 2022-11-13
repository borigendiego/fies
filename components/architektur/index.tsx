import React from "react";
//
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../commons/textImageLayout";

const ArchitekturComp = () => {
    return(
        <div className='relative h-screen'>
            <div className='md:py-10 md: mt-20 w-6/12 border rounded-xl'>
                <h1 className='text-3xl'>Wir begleiten Sie von der Konzeption <br/>
                    bis zur Realisierung des Projekts.
                </h1>
            </div>
            <div className='flex w-full border rounded-xl'>
                <div className='w-2/6 pl-10 pt-10'>
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
                </div>
                <div className='pl-16 pt-32'>
                    <Image src={'/assets/images/leistung/architektur-image.png'} alt={'architekt image'} width={700} height={200} className={''}/>
                </div>
            </div>
        </div>
    )
}

export default ArchitekturComp;