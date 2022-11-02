import Image from "next/image";
import React from "react";


type slideprops = {
    image: string,
    title: string,
    text: string,
}

const Slide = ({image, title, text}:slideprops) => {
    return(
        <div className="min-w-[450px] overflow-hidden transition-all duration-300 ease-in z-10 relative p-8">
            <div className="md:flex md:flex-col bg-indigo-500">
                <div className="pt-16 flex flex-col justify-center items-center">
                    <Image
                        src={image} 
                        alt={''}
                        width={100}
                        height={100} 
                    />
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Slide;