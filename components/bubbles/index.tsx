'use client'
import React from "react";
import { motion } from "framer-motion";
import { BUBBLES_DATA } from "./constants";

const Bubbles = () => {
    const imagesChild = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: 0},
    }


    return(
        <div className="min-h-[100vh] relative md:flex hidden mt-6 justify-center p-3">
            <div className={'justify-center w-full relative max-w-[1300px]'}>
                {
                    BUBBLES_DATA.map((value) => {
                        return(
                            <motion.div 
                                className={`${value.customClass} outer-b `}
                                style={{
                                    left: value.left,
                                    top: value.top,
                                    right: value.right
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
        </div>
    )
}

export default Bubbles;
