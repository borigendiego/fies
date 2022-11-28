import Image from "next/image";
import Link from "next/link";
import React from "react";
//

const Contact = () => {
    return(
        <div className='md:flex flex-col'>
            <h2>Kontakt</h2>
            <p>Sie können uns anrufen, schreiben oder uns besuchen.</p>
            <div className='flex mt-6'>
                <div className='flex flex-col  mr-4'>
                    <Image
                        width={25}
                        height={20}
                        src={'/assets/images/contact/location-white.png'}
                        alt={'Location icon'}
                     />
                     <p className='md:mt-4'>Leipziger Straße 38<br/> 28215 Bremen </p>
                     <p className='md:mt-2'>Ridler Straße 35<br/> 80339 München </p>
                </div>
                <div className='flex flex-col  mx-4'>
                    <Image
                        width={25}
                        height={20}
                        src={'/assets/images/contact/phone-white.png'}
                        alt={'Phone icon'}
                    />
                    <p className='md:mt-4'>Tel: +49 (0) 421 – 56 34 58 11</p>
                    <p className='md:mt-2'>Fax: +49 (0) 421 52 40 82 72</p>
                </div>
                <div className='flex flex-col ml-4'>
                    <Image
                        width={30}
                        height={20}
                        src={'/assets/images/contact/mail-white.png'}
                        alt={'Mail icon'}
                     />
                     <Link href={'/kontakt'}>
                        <p className='md:mt-4 hover:underline'>info@spektrum-holding.de</p>
                     </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact