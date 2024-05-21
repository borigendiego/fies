'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Technische = () => {
    return (
        <div id={'technische'} className={'border flex md:flex-row-reverse flex-col-reverse mt-8 scroll-mt-[8rem]'}>
            <motion.div
                className={'py-12 px-6 text-center md:text-left md:w-1/2'}
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .7, delay: .5}}
                viewport={{once: true}}
            >
                <h1 className='pt-4 font-semibold'>Technische Gebäudeausrüstung</h1>
                <p className='my-4'>
                    Die Planung der Technischen Gebäudeausrüstung nimmt einen zunehmend größeren Stellenwert ein.
                    Insbesondere das Konzept der Gebäudeheizung, Kühlung und Belüftung ist ein fester Bestandteil
                    des energetischen Konzeptes einer jeden Planung. Die individuellen Größen und Bedarfe,
                    die aus dem architektonischen Entwurf entstehen, werden durch Heizlastenberechnungen
                    planerisch erfasst und mit unterschiedlichen Konzepten der Anlagentechnik abgedeckt.
                    Hierbei ist es besonders wichtig, dass die einzelnen Komponenten ideal aufeinander
                    abgestimmt sind. Um die genaue Größe der Anlagentechnik zu bestimmen, wird bereits
                    im Vorfeld der voraussichtliche Energiebedarf des Gebäudes ermittelt.
                </p>
                <p className='my-4'>
                    Die Vielzahl der Leitungen für Lüftung, Sanitär und Elektro,
                    die bei modernen Gebäuden zum Einsatz kommt, muss im Vorfeld optimal dimensioniert
                    und geplant werden. Anhand unserer 3D- Gebäudemodelle können wir den Flächenbedarf
                    für die Anlagentechnik grafisch im Modell ablesen und eine effiziente Strang- und
                    Leitungsführung entwickeln.
                </p>
                <p className='my-4'>
                    Das Ergebnis unserer Planung ist eine optimal abgestimmte Verteilung der gesamten Haustechnik,
                    deren Anlagengröße maßgerecht auf die Bedarfe des Gebäudes zugeschnitten ist.
                </p>
            </motion.div>
            <motion.div
                className={'m-auto'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1}}
                viewport={{once: true}}
            >
                <Image
                    src={'/assets/images/leistung/technische.webp'}
                    width={650}
                    height={200}
                    alt={'Die Planung der Technischen Gebäudeausrüstung nimmt einen zunehmend größeren Stellenwert ein.'}
                    className={'md:rounded-xl'}
                />
            </motion.div>

        </div>
    )
}

export default Technische