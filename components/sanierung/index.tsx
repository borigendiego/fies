import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


const Sanierung = () => {
    return(
        <div className='flex'>
            <motion.div 
                className='mx-auto flex items-center'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1}}
                viewport={{once: true}}
            >
                <Image 
                    src={'/assets/images/projekts/pfaffenhofen/Pfaffenhofen-1-min.jpeg'} 
                    height={200} 
                    width={700} 
                    alt={''}
                    className={'rounded-xl rounded-l-none'}
                />
            </motion.div>
            <motion.div 
                className='w-1/2 px-16'
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .7, delay: .5}}
                viewport={{once: true}}
            >
                <h1 className='pt-4'>Sanierung</h1>
                <p className='my-4'>
                    Laut der Deutschen Energie-Agentur müssen bis spätestens 2050 etwa drei Viertel der 22
                    Millionen Gebäude in Deutschland saniert werden – das entspricht ungefähr 2.500
                    Gebäuden täglich.
                </p>
                <p className='my-4'>
                    Die meisten dieser Gebäude wurden noch vor Inkrafttreten der ersten
                     Wärmeschutzverordnung im Jahre 1979 errichtet. Problematisch, denn
                      durchschnittliche Altbauten verbrauchen statistisch drei- bis fünfmal
                       so viel Energie, wie vergleichbare Neubauten.
                </p>
                <p className='my-4'>
                    Die Klimaziele sind politisch gesetzt und der Gebäudebestand ist
                     der größte Verursacher von Emissionen innerhalb des Sektors.
                      Für den Erfolg der Energiewende müssen hier nun dringend die Emissionen gesenkt werden.
                </p>
                <p className='my-4'>
                    Um die "graue Energie" zu nutzen, die bereits zur Herstellung
                     vorhandener Gebäude aufgewendet wurde, ist es alternativlos den
                      Bestand zu ertüchtigen und energetisch zu sanieren. 
                      Ein Vorteil für die Ökobilanz und die Betriebskosten des Gebäudes,
                       der zusätzlich die Aufenthalts- und Wohnqualität erhöht.
                </p>
                <p className='my-4'>
                    Mit fortschreitendem demografischem Wandel wird zudem altersgerechtes
                     und barrierefreies Wohnen immer wichtiger. Neben den staatlichen 
                     Förderungen für die Sanierungsmaßnahmen ein zusätzlicher Grund für
                      die Bestandssanierung.
                </p>
                <p className='my-4 italic'>
                    Wir als Architekten und Ingenieure sehen in der Sanierung ein
                     enormes Potenzial – sowohl in ökologischer, 
                     als auch ökonomischer Hinsicht.
                </p>
            </motion.div>
        </div>
    )
}

export default Sanierung