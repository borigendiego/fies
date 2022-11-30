import React from "react";
//
import { motion } from "framer-motion";

const LeistungComp = () => {
    return(
        <div className={'py-32 flex flex-col items-center'}>
            <div className='mx-auto px-12'>
                <motion.p 
                    className='text-center leading-loose text-lg'
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: .7, delay: 1}}
                >
                    Beim Bau und in der Planung überschneiden sich die verschiedenen Disziplinen, der unterschiedlichen Fachbereiche.<br/>
                    Unser Ziel ist es ganzheitlich zu planen, sodass von Anfang an und zu jeder Zeit, alle Beteiligten in den Planungsprozess eingebunden sind.<br/> 
                    Für unsere Bauherren können wir auf diese Weise die größtmögliche Planungssicherheit schaffen.
                </motion.p>
            </div>
            <motion.div 
                className='bg-sky-500 h-[3px] w-1/2 rounded-xl mt-12' 
                initial={{opacity: 0}}
                whileInView={{opacity: .3}}
                viewport={{once: true}}
                transition={{duration: 1, delay: 1.5}}
            />
        </div>
    )
}

export default LeistungComp;