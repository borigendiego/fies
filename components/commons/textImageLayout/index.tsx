import Image from "next/image";
import React from "react";

type LayoutProps = {
    image: string,
    title?: string,
    text: any,
    reverse?: boolean
}

const Layout = ({image, title, text, reverse}:LayoutProps) => {
    return(
        <div className={`flex h-screen relative my-6 ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className='w-5/12 h-full relative'>
               <Image src={image} alt={''} layout={'fill'} className={`object-cover rounded-2xl  ${reverse ? 'rounded-r-none' : 'rounded-l-none'}`} /> 
            </div>
            <div className='w-7/12 md:flex md:flex-col md:justify-center md:items-center'>
                <h1 className='text-center'>{title}</h1>
                <p className='px-8'>{text}</p>
            </div>
        </div>
    )
}

export default Layout;