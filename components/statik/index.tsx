import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


const Statik = ( ) => {
    return(
        <div className={'flex justify-center items-center'} id={'#3'}>
            <div className='grid grid-cols-1 md:grid-cols-2 md:py-12'>
                <motion.div 
                className={'px-8 text-center md:text-left m-auto'}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration:  .7, delay: 1.5}}
                viewport={{once: true}}
                >
                    <p className='font-bold'>Die Statik ist ein essenzieller Bestandteil eines jeden Gebäudes. </p>
                    <p className='my-4'>
                        Das statische Konzept und der Architektonische Entwurf gehen um effizient zu planen
                        zu können binden wir die Grundidee des Statischen Systems von Anfang an in die Planung mit ein.
                    </p>
                    <p className='my-4'>
                        Das Aufgabenfeld erstreckt sich von Tragwerksplanung bei Altbauten, der Errichtung von Neubauten,
                        bis hin zu Spezialgebieten im Bereich Gerüstbau, Traggerüstbau, sowie Fassaden- und Glasfassadenbau.
                        Durch die umfassende Betreuung können sowohl kleinere als auch größere Vorhaben komplex bewertet werden.
                        Die objektbezogene Beratung des Bauherrn oder Architekten, sowie die ständige Suche nach wirtschaftlichen
                        und ästhetischen Lösungen, verstehen wir als unsere Aufgabe für eine erfolgreiche Tragwerksplanun
                    </p>
                </motion.div>
                <motion.div 
                    className={'m-auto'}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration:  1, delay: 1}}
                    viewport={{once: true}}
                >
                    <Image src={'/assets/images/leistung/statik.jpg'} alt={'Working people'} height={200} width={600} className={'md:rounded-xl'}/>
                </motion.div>
            </div>
        </div>
    )
}

export default Statik