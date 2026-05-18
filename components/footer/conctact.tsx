import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    return(
        <div className='md:flex flex-col md:flex-row'>
            <div>
                <h2 className='text-center md:text-left font-semibold'>Kontakt</h2>
                <p className='text-center md:text-left w-3/4 mx-auto md:mx-0 md:w-full'>Sie können uns anrufen, schreiben oder uns besuchen.</p>
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
                            href="https://www.google.com/maps/place/Unser+Lieben+Frauen+Kirchhof+8,+28195+Bremen,+Germany/@53.0766146,8.8064759,16.86z/data=!4m6!3m5!1s0x47b12810eada1db3:0x2d8db4b364b80ea5!8m2!3d53.0768867!4d8.8078657!16s%2Fg%2F11bw3ytz5j?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Unser Lieben Frauen Kirchhof 8, <br/> 28195 Bremen
                        </a>
                        <a
                            className='mt-2 w-[170px] md:w-auto text-center md:text-left font-bold cursor-pointer hover:underline'
                            href="https://www.google.com/maps/place/Max-Planck-Stra%C3%9Fe+17,+85716+Unterschlei%C3%9Fheim,+Germany/@48.2830205,11.5616178,17z/data=!3m1!4b1!4m6!3m5!1s0x479e71cec07b71cb:0xd74e9f97545efc93!8m2!3d48.2830205!4d11.5641927!16s%2Fg%2F11b8v5t_cj?entry=ttu"
                            target="_blank"
                            rel="noreferrer"
                        >Max-Planck-Straße 17<br/> 85716 Unterschleißheim </a>
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
                            href="tel:+4942117306777"
                        >
                            Tel: +49 (0) 421 17 30 67-77
                        </a>
                        <a
                            className='mt-2 font-bold cursor-pointer hover:underline'
                            href="tel:+4942117306778"
                        >Fax: +49 (0) 421 17 30 67-78
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
                            <p className='mt-4 hover:underline'>info@spektrum-architektur.de</p>
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
