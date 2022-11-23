import Image from "next/image";
import Link from "next/link";
import React from "react";


type slideprops = {
    image: string,
    title: string,
    text: string,
}

const Slide = ({
    image,
    title, 
    text
}:slideprops) => {
    return(
        <div className="min-w-[450px] overflow-hidden transition-all duration-300 ease-in z-10 relative px-16">
            <Link href={'/buro'}>
                <div className="md:flex md:flex-col rounded-md hover-slide">
                    <div className={"py-6 flex flex-col duration-300 ease-in"}>
                        <div className={'relative w-full h-[200px]'}>
                            <Image
                                src={image} 
                                alt={''}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className="">
                            <h2 className="mt-4 font-bold">{title}</h2>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Slide;