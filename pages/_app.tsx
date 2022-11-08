import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//framer


export default function App({ Component, pageProps }: AppProps) {

//intento de animar las transiciones de rutas

  const { asPath } = useRouter();

  const variants = {
      out: {
        opacity: 0,
        transition: {
          duration: .5
        }
      },
      in: {
          opacity: 1,
          transition: {
              duration: .5,
              delay: .5
          }
      }
    };


  return (
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
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
