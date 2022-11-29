import Image from "next/image";
import Link from "next/link";
import React from "react";
//

const Contact = () => {
    return(
        <div className='md:flex flex-col'>
            <h2 className='text-center md:text-left font-semibold'>Kontakt</h2>
            <p className='text-center md:text-left'>Sie können uns anrufen, schreiben oder uns besuchen.</p>
            <div className='flex flex-col md:flex-row mt-6'>
                <div className='flex flex-col md:mr-4 items-center md:items-start'>
                    <Image
                        width={25}
                        height={20}
                        src={'/assets/images/contact/location-white.png'}
                        alt={'Location icon'}
                     />
                     <p className='mt-4 w-[170px] md:w-auto text-center md:text-left'>Leipziger Straße 38<br/> 28215 Bremen </p>
                     <p className='mt-2 w-[170px] md:w-auto text-center md:text-left'>Ridler Straße 35<br/> 80339 München </p>
                </div>
                <div className='flex flex-col md:mx-4 items-center md:items-start mt-3 md:mt-0'>
                    <Image
                        width={25}
                        height={20}
                        src={'/assets/images/contact/phone-white.png'}
                        alt={'Phone icon'}
                    />
                    <p className='mt-4'>Tel: +49 (0) 421 – 56 34 58 11</p>
                    <p className='mt-2'>Fax: +49 (0) 421 52 40 82 72</p>
                </div>
                <div className='flex flex-col md:ml-4 items-center md:items-start mt-3 md:mt-0'>
                    <Image
                        width={30}
                        height={20}
                        src={'/assets/images/contact/mail-white.png'}
                        alt={'Mail icon'}
                     />
                     <Link href={'/kontakt'}>
                        <p className='mt-4 hover:underline font-semibold md:font-normal'>info@spektrum-holding.de</p>
                     </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact