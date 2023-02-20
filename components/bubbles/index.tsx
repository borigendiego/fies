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
        <div className="h-[110vh] relative md:flex hidden overflow-x-hidden mt-6">
            {
                BUBBLES_DATA.map((value, index) => {
                    return(
                        <motion.div 
                            className={`${value.customClass} outer-b `}
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
