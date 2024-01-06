import Image from "next/image";
import Link from "next/link";
import React from "react";
//

const Contact = () => {
    return(
        <div className='md:flex flex-col md:flex-row'>
            <div>
                <h2 className='text-center md:text-left font-semibold'>Kontakt</h2>
                <p className='text-center md:text-left'>Sie können uns anrufen, schreiben oder uns besuchen.</p>
                <div className='flex flex-col jus md:flex-row mt-6'>
                    <div className='flex flex-col md:mr-4 items-center md:items-start'>
                        <Image
                            width={25}
                            height={20}
                            src={'/assets/images/contact/location-white.png'}
                            alt={'Location icon'}
                        />
                        <a 
                            className='mt-4 w-[170px] md:w-auto text-center md:text-left font-bold cursor-pointer hover:underline'
                            href="https://www.google.com/maps/place/Leipziger+Str.+38,+28215+Bremen,+Alemania/@53.0936015,8.813952,19z/data=!3m1!4b1!4m6!3m5!1s0x47b1286efbdf8501:0xc4c3953301b1100f!8m2!3d53.0936007!4d8.8144992!16s%2Fg%2F11c172wbqz"
                            target="_blank" 
                            rel="noreferrer"
                        >Leipziger Straße 38<br/> 28215 Bremen</a>
                        <a 
                            className='mt-2 w-[170px] md:w-auto text-center md:text-left font-bold cursor-pointer hover:underline'
                            href="https://www.google.com/maps/place/Ridlerstra%C3%9Fe+35,+80339+M%C3%BCnchen,+Alemania/@48.1325308,11.5347825,17z/data=!3m1!4b1!4m6!3m5!1s0x479dd8af69e42e59:0x67238821b336dbd3!8m2!3d48.1325308!4d11.5347825!16s%2Fg%2F11c5c3jm3n"
                            target="_blank" 
                            rel="noreferrer"
                        >Ridler Straße 35<br/> 80339 München </a>
                    </div>
                    <div className='flex flex-col md:mx-4 items-center md:items-start mt-3 md:mt-0'>
                        <Image
                            width={25}
                            height={20}
                            src={'/assets/images/contact/phone-white.png'}
                            alt={'Phone icon'}
                        />
                        <a 
                            className='mt-4 font-bold cursor-pointer hover:underline' 
                            href="tel:+49 (0) 421 – 56 34 58 11"
                        >
                            Tel: +49 (0) 421 – 56 34 58 11
                        </a>
                        <a 
                            className='mt-2 font-bold cursor-pointer hover:underline'
                            href="tel:+49 (0) 421 52 40 82 72"
                        >Fax: +49 (0) 421 52 40 82 72
                        </a>
                    </div>
                    <div className='flex flex-col md:ml-4 items-center md:items-start mt-3 md:mt-0'>
                        <Image
                            width={30}
                            height={20}
                            src={'/assets/images/contact/mail-white.png'}
                            alt={'Mail icon'}
                        />
                        <Link href={'/kontakt'}>
                            <p className='mt-4 hover:underline'>info@spektrum-holding.de</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:pl-16 my-4 md:my-0">
                <h2 className='text-center md:text-left font-semibold pt-4 md:pt-0'>Informationen</h2>
                <div className="md:mt-4 text-center md:text-left flex flex-col">
                    <a className="cursor-pointer pt-2 hover:underline" href="/impressum">Impressum</a>
                    <a className="cursor-pointer pt-2 hover:underline" href="/datenschutzerklarung">Datenschutz</a>
                    <a className="cursor-pointer pt-2 hover:underline" href="">Credits</a>
                </div>
            </div>
        </div>
    )
}

export default Contact