import React from "react";
import { useRouter } from 'next/router';
//
import { motion, AnimatePresence } from 'framer-motion';

const Transition = ({ children }:any) => {

    const { asPath } = useRouter();

    const variants = {
        out: {
          opacity: 0,
          transition: {
            duration: 1
          }
        },
        in: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: .5
            }
        }
      };

    return (
		<div className="overflow-hidden">
			<AnimatePresence
	            initial={true}
	            exitBeforeEnter
	        >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate='in'
                    initial='out'
                    exit='out'
                >
                    {children}
                </motion.div>
	        </AnimatePresence>
		</div>
	);
};

export default Transition;