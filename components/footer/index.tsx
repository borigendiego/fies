'use client'
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { motion } from 'framer-motion';
import Contact from './conctact';

const toTop = () => {
    document.documentElement.scrollTop = 0;
}

const Footer = () => {
    return (
        <div>
            <motion.div 
                className='md:flex md:pt-16 pt-10 md:pb-8 pb-4 justify-around bg-[#89ADCD]' 
                id='#FOOTER'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  .7, delay: .5}}
                viewport={{once: true}}
            >
                <motion.div
                    initial={{opacity: 0, y: 15}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: .5 , delay: 1}}
                    viewport={{once: true}}
                >
                    <Contact />
                </motion.div>
                <motion.button 
                className='footer-b cursor-pointer text-lg h-8 hover:underline hidden md:block font-semibold'
                onClick={toTop}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{delay: 2}}
                >
                    Zurück
                </motion.button>
            </motion.div> 
            <CookieConsent
                location={"bottom"}
                buttonText={'Alle akzeptieren'}
                cookieName={"Datenschutzeinstellungen"}
                style={{ background: "#2B373B" }}
                buttonStyle={{ 
                    color: "#4e503b",
                    padding: '5px',
                    margin: '18px',
                    fontSize: '16px'
                }}
                expires={150}
                buttonWrapperClasses={'m-auto'}
                enableDeclineButton
                declineButtonText={'Nur Notwendige Cookies'}
                declineButtonStyle={{
                    background: "rgb(255, 212, 45)",
                    border: 0,
                    borderRadius: 0,
                    boxShadow: 'none',
                    color: 'rgb(78, 80, 59)',
                    flex: '0 0 auto',
                    padding: '5px',
                    margin: '18px',
                    fontSize: '16px'
                }}
            >
                <div className={'px-10 py-4'}>
                    <p className={'text-[14px]'}>Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.</p>
                    <p className={'text-[14px]'}>Wenn Sie unter 16 Jahre alt sind und Ihre Zustimmung zu freiwilligen Diensten geben möchten, müssen Sie Ihre Erziehungsberechtigten um Erlaubnis bitten.</p>
                    <p className={'text-[14px]'}>Personenbezogene Daten können verarbeitet werden (z. B. IP-Adressen), z. B. für personalisierte Anzeigen und Inhalte oder Anzeigen- und Inhaltsmessung. Weitere Informationen über die Verwendung Ihrer Daten finden Sie in unserer Datenschutzerklärung. Sie können Ihre Auswahl jederzeit unter Einstellungen widerrufen oder anpassen.</p>
                    <a className={'text-[#ffd42d] underline cursor-pointer text-[14px]'} href={'/datenschutzerklarung'}>
                    Datenschutzeinstellungen
                    </a>
                    <a className={'text-[#ffd42d] underline cursor-pointer ml-3 text-[14px]'} href={'/impressum'}>
                        Impressum
                    </a>
                </div>
            </CookieConsent>
        </div>
       
    )
}

export default Footer;
