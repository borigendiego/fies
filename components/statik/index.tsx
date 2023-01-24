import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


const Statik = ( ) => {
    return(
        <div className={'flex justify-center items-center'} id='tragwerksplanung'>
            <div className='flex md:flex-row-reverse flex-col-reverse py-12'>
                <motion.div 
                className={'px-8 text-center md:text-left m-auto md:w-1/2 pt-8 md:pt-0'}
                id={'statik'}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration:  .7, delay: 1.5}}
                viewport={{once: true}}
                >
                    <motion.h1 
                        className={'md:text-5xl font-semibold py-6'}
                        initial={{opacity: 0, x:-30}}
                        whileInView={{opacity: 1, x:0}}
                        transition={{duration:  .7, delay: 1}}
                        viewport={{once: true}}
                    >Tragwerksplanung</motion.h1>
                    <p className='my-4'>
                        Die Statik eines Gebäudes ist essenzieller Bestandteil seiner Planung. Daher binden wir die
                        Tragwerksplanung von Beginn der Planung in das architektonische Konzept mit ein. Durch die
                        frühzeitige Abstimmung mit den architektonischen Erfordernissen ermöglichen wir eine sinnvolle und
                        kostensparende Konstruktion des Bauwerkes.
                    </p>
                    <p className='my-4'>
                        Durch die gleichzeitige Planung von Architektur und Statik finden wir eine Konstruktion, die im
                        Einklang mit der räumlichen Aufteilung des Bauwerkes steht. Durch eine gleichmäßige Verteilung der
                        Lasten können die tragenden Bauteile einheitlich und ausgewogen konstruiert werden. Anhand von
                        digitalen Gebäudemodellen können wir als Architekten und Ingenieure sehen, wie alle Komponenten
                        des Entwurfs zusammenwirken. Ideal aufeinander abgestimmt, können wir so die Struktur des
                        Gebäudes optimieren und die effizienteste Methode für seine Konstruktion wählen. Ebenso können
                        wir anhand der Gebäudemodelle die kritischen Faktoren wie Kosten und Zeit digital überlagern. Die
                        Auswirkungen der im Entwurf getroffenen Entscheidungen, wie beispielsweise die Gebäudeform und
                        das Baumaterial, können so in verschiedenen Varianten überprüft und miteinander verglichen
                        werden.
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