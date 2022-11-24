import React from "react";
//
import { motion } from "framer-motion";

const ProjektComponent = () => {
    return(
        <div className={'flex flex-col justify-center items-center my-10'}>
            <motion.div 
                className={'projekts-banner p-8 rounded-xl hidden'}
                initial={{opacity: 0, scale: .8}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration:  .5, delay: .5}}
                viewport={{once: true}}
            >
                <h1 className={'text-white text-center text-2xl'}>PROJEKTE:</h1>
                <p className={'text-white text-center text-2xl'}>Wir ubernehmen</p>
                <p className={'text-white mt-8 text-xl'}>
                    Ihre PROJEKTE deutschlandweit,<br/>
                    in jeder GroBenourdnung
                </p>
            </motion.div>
        </div>
    )
}

export default ProjektComponent;