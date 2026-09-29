'use client'
import Image from "next/image";
import React from "react";
//Framer
import { motion } from "framer-motion";

const WhoWeAre = () => {

    const imagesAnimations = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: .5,
              },
        },
        hidden: {
            opacity: 0,
            y: 30,
            x: 0,
            transition: {
                when: "afterChildren",
              },
            },
    }

    const imagesChild = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: 50}
    }

    const profileCircle = 'relative mx-auto w-[310px] max-w-[80vw] aspect-square rounded-full overflow-hidden'

    return(
        <div className={'pt-2'}>
            <motion.h1
                className={'text-center font-semibold mt-6'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: .5, delay: .7}}

            >Wir stellen uns vor</motion.h1>
            <div>
                <motion.div
                    className='flex flex-col md:flex-row md:justify-around py-6'
                    variants={imagesAnimations}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 1.2}}
                >
                    <motion.div variants={imagesChild} transition={{duration: .5, delay:1}}>
                        <div className={profileCircle}>
                            <Image src={'/assets/images/uber/Fies.webp'} alt={'Johannes Fies photo'} width={3027} height={3027} sizes={'340px'} className={'absolute max-w-none h-auto'} style={{width: '108.5%', left: '-2.1%', top: '-2.1%'}}/>
                        </div>
                        <p className="text-center font-semibold mt-4">Johannes Fies, M.A. Architekt</p>
                    </motion.div>
                    <motion.div variants={imagesChild} transition={{duration: .5, delay:1.4}} className={'mt-10 md:mt-0'}>
                        <div className={profileCircle}>
                            <Image src={'/assets/images/uber/Schmitz-min.jpg'} alt={'Johannes Schmitz photo'} width={3307} height={3000} sizes={'450px'} className={'absolute max-w-none h-auto'} style={{width: '133%', left: '-19.6%', top: '-3%'}}/>
                        </div>
                        <p className="text-center font-semibold mt-4">Johannes Schmitz, M.A. Architekt</p>
                    </motion.div>

                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: .7, delay: 2}}
                    className={'flex md:flex-row flex-col justify-around px-16 my-14 text-center md:text-left'}
                >
                    <div className='md:w-7/12'>
                        <p className="py-2">Wir sind ein junges Team engagierter Architekten und Ingenieuren, die sich die ganzheitliche und integrale Gebäudeplanung zur Aufgabe gemacht haben.</p>
                        <p className="py-2">Dabei arbeiten wir digital vernetzt und bundesweit, um Projekte jeder Größenordnung zu realisieren. </p>
                        <p className="py-2">Durch die gemeinsame digitale Planung in allen Fachbereichen – insbesondere der Disziplinen Architektur, Statik, Technische Gebäude Ausrüstung, Energieberatung und Brandschutz – sind wir effizient und schaffen Synergien. So können wir unseren Auftraggeber*innen äußerste Planungssicherheit zusichern. </p>
                        <p className="py-2">Gemeinsame Server und digitale Gebäudemodelle helfen uns, die Schnittstellen zwischen den unterschiedlichen Planern transparent aufzulösen. Auf diese Weise stellen wir sicher, dass alle Mitwirkenden in den Planungsprozess involviert sind – von Anfang an und zu jeder Zeit.</p>
                        <h3 className={"py-4 md:mt-0 mt-6"}>Partner:</h3>
                        <p className="py-2">Wir, Johannes Fies und Johannes Schmitz, haben uns während des Architekturstudiums 2009 kenngelernt. Bereits seitdem planen wir Projekte im Team. Nach über zwölfjähriger Zusammenarbeit haben wir 2021 unser gemeinsames Büro gegründet. </p>
                        <p className="py-2 font-semibold">Wir freuen uns für Sie tätig zu werden!</p>
                    </div>
                    <Image src={'/assets/images/uber/uber-map.png'} alt={'Map'} height={200} width={400} className="md:mt-0 mt-6"/>
                </motion.div>
            </div>
        </div>
    )
}

export default WhoWeAre;
