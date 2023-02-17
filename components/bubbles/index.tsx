import React from "react";
import { motion } from "framer-motion";
import { BUBBLES_DATA } from "./constants";

const Bubbles = () => {

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
        hidden: {opacity: 0, y: 50},
    }


    return(
        <div className="h-screen relative flex mt-[5%]">
            {
                BUBBLES_DATA.map((value, index) => {
                    return(
                        <motion.div 
                            className={`${value.customClass} outer-b`}
                            style={{
                                left: value.left,
                                top: value.top
                            }}
                            variants={imagesChild}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{once: true}}
                            transition={{duration: 1, delay: value.delay}}
                        >
                            <motion.a 
                            className={`inner-b`}
                            variants={imagesChild} 
                            transition={{duration: .7, delay: value.delay}}
                            href={`${value.link}`}
                            >
                                {value.title}
                            </motion.a>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default Bubbles;

/**
 * 
 * <motion.div className="flex justify-center items-center h-screen mb-60 relative">
            <motion.div className='outer-b bg-red-400 w-[300px] h-[300px] right-[55%] top-[20%]'>
                <a className='inner-b bg-red-500 w-[200px] h-[200px]' href="#brandschutz">BRANDSCHUTZ</a>
            </motion.div>
            <motion.div className='outer-b bg-blue-400 w-[250px] h-[250px] left-[50%]'>
                <a className='inner-b bg-blue-600 w-[150px] h-[150px] hover:w-[170px] hover:h-[170px]' href="#">TGA</a>
            </motion.div>
            <motion.div className='outer-b bg-yellow-400 w-[400px] h-[400px] top-[60%] right-flex justify-end[45%] flex justify-end'>
                <a className='inner-b bg-yellow-600 w-[300px] h-[300px] hover:w-[320px] hover:h-[320px]' href="#projektenwicklung">PROJEKTENWICKLUNG</a>
            </motion.div>
            <motion.div className='outer-b bg-green-400 w-[350px] h-[350px] left-[70%] flex justify-end'>
                <a className='inner-b bg-green-600 w-[250px] h-[250px] hover:w-[270px] hover:h-[270px]' href="#energieberatung">ENERGIEBERATUNG</a>
            </motion.div>
            <motion.div className='outer-b bg-slate-400 w-[300px] h-[300px] left-[25px] flex justify-end items-end'>
                <a className='inner-b bg-slate-600 w-[200px] h-[200px] hover:w-[220px] hover:h-[220px]' href="#architektur">ARCHITEKTUR</a>
            </motion.div>
            <motion.div className='outer-b bg-orange-400 w-[350px] h-[350px] left-[10%] top-[80%]'>
                <a className='inner-b bg-orange-600 w-[250px] h-[250px] hover:w-[270px] hover:h-[270px]' href="finanzierung">FINANZIERUNG</a>
            </motion.div>
            <motion.div className='outer-b bg-purple-400 w-[300px] h-[300px] left-[75%] top-[65%] flex justify-end items-end'>
                <a className='inner-b bg-purple-600 w-[200px] h-[200px] hover:w-[220px] hover:h-[220px]' href="#statik">STATIK</a>
            </motion.div>
        </motion.div>
 */