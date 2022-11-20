import Image from "next/image";
import React from "react";
//Framer
import { motion } from "framer-motion";

const WhoWeAre = () => {
    return(
        <div className={'pt-10'}>
            <motion.h1 
                className='py-4 text-center text-3xl'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
            >Wer wir sind?</motion.h1>
            <div>
                <motion.div 
                    className='flex flex-col md:flex-row md:justify-around py-6'
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: .7, delay: 1}}
                >
                    <Image src={'/assets/images/uber/Fies-min.jpg'} alt={'Johannes Fies photo'} width={400} height={200}></Image>
                    <Image src={'/assets/images/uber/Schmitz-min.jpg'} alt={'Johannes Schmitz photo'} width={400} height={200}></Image>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: .7, delay: 1.5}}
                    className='px-16'
                >
                    <p className="py-2">Wir sind ein junges Team engagierter Architekten und Ingenieure, die sich die ganzheitliche und integrale Gebäudeplanung zur Aufgabe gemacht haben.</p>
                    <p className="py-2">Dabei arbeiten wir digital vernetzt und bundesweit, um Projekte jeder Größenordnung zu realisieren. </p>
                    <p className="py-2">Durch die gemeinsame digitale Planung in allen Fachbereichen – insbesondere der Disziplinen Architektur, Statik, Technische Gebäude Ausrüstung, Energieberatung und Brandschutz – sind wir effizient und schaffen Synergien. So können wir unseren Auftraggeber*innen äußerste Planungssicherheit zusichern. </p>
                    <p className="py-2">Gemeinsame Server und digitale Gebäudemodelle helfen uns, die Schnittstellen zwischen den unterschiedlichen Planern transparent aufzulösen. Auf diese Weise stellen wir sicher, dass alle Mitwirkenden in den Planungsprozess involviert sind – von Anfang an und zu jeder Zeit.</p>
                    <h3 className="pt-2">Partner:</h3>
                    <p className="py-2">Wir, Johannes Fies und Johannes Schmitz, haben uns während des Architekturstudiums 2009 kenngelernt. Bereits seitdem planen wir Projekte im Team. Nach über zwölfjähriger Zusammenarbeit haben wir 2021 unser gemeinsames Büro gegründet. </p>
                    <p className="py-2">Wir freuen uns für Sie tätig zu werden!</p>
                </motion.div>
            </div>
        </div>
    )
}

export default WhoWeAre;