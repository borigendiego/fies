import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Energieberatung = () => {
    return(
        <div className='flex flex-col md:flex-row-reverse border md:py-8' id={'energieberatung'}>
            <motion.div 
                className='mx-auto flex items-center py-4'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1}}
                viewport={{once: true}}
            >
                <Image 
                    src={'/assets/images/leistung/energieberatung.jpg'} 
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
                <h1 className='pt-4 font-semibold'>Energieberatung</h1>
                <p className='my-4'>
                    Über die Lebensdauer von 50 Jahren gerechnet, fallen nur ca.
                    15 % der Gesamtkosten, die von einem Gebäude verursacht werden,
                    auf seine Baukosten an. 5 % entstehen im Durchschnitt durch seine Abbruchs-
                    und Planungskosten. Die restlichen 80 % und damit der mit Abstand größte Teil
                    der Gesamtkosten, entfallen auf die Instandhaltungs- und Betriebskosten des Gebäudes.
                </p>
                <p className='my-4'>
                    Daher ist es nicht nur ökologisch, sondern auch ökonomisch sehr sinnvoll,
                    ein Gebäude energieeffizient zu planen und zu bauen. Mit einer höheren Anfangsinvestition
                    können so deutlich höhere Kosten vermieden werden, die durch die spätere Nutzung
                    des Gebäudes entstehen. 
                </p>
                <p className='my-4'>
                    Wir erstellen Energiekonzepte, bei denen die anfänglichen Mehrkosten durch staatliche
                    Zuschüsse subventioniert werden. Durch vergünstigte Zinsen über geförderte Kredite der KfW
                    (Kreditanstalt für Wiederaufbau) amortisieren sich die anfänglichen Kosten besonders
                    schnell..
                </p>
                <p className='my-4'>
                    Wir möchten eine langfristige Lösung finden, die sowohl die Umwelt schont und
                    gleichzeitig wirtschaftlich sinnvoll ist. Die Umsetzung der Energiekonzepte wird
                    von unseren Energieberatern auf der Baustelle überwacht und dokumentiert.
                    Die KfW erhält die Protokolle zur Bestätigung und gibt Ihre Förderung frei.
                </p>
            </motion.div>
        </div>
    )
}

export default Energieberatung