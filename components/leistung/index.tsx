'use client'
import React from "react";
//
import { motion } from "framer-motion";

const LeistungComp = () => {
    return(
        <div className={'py-32 flex-col items-center h-screen hidden'}>
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
        </div>
    )
}

export default LeistungComp;