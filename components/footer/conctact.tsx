import Image from "next/image";
import React from "react";
//

const Contact = () => {
    return(
        <div className='md:flex flex-col'>
            <h2>Kontakte</h2>
            <p>Sie können uns anrufen, schreiben oder besuchen.</p>
            <div className='flex mt-6'>
                <a className='flex flex-col justify-around mr-4 cursor-pointer footer-a'>
                    <Image
                        width={25}
                        height={20}
                        src={'/assets/images/contact/location-white.png'}
                        alt={'Location icon'}
                     />
                     <p className=''>Leipziger Strasse 38,<br/> Bremen</p>
                </a>
                <a className='flex flex-col justify-around mx-4 cursor-pointer footer-a'>
                    <Image
                        width={25}
                        height={20}
                        src={'/assets/images/contact/phone-white.png'}
                        alt={'Phone icon'}
                     />
                     <p>+ 0421 56 34 58 11</p>

                </a>
                <a className='flex flex-col justify-around ml-4 cursor-pointer footer-a'>
                    <Image
                        width={30}
                        height={20}
                        src={'/assets/images/contact/mail-white.png'}
                        alt={'Mail icon'}
                     />
                     <p>info@fies-architekten.de</p>
                </a>
            </div>
        </div>
    )
}

export default Contact