import React from "react";
import { motion } from "framer-motion";



const Bubbles = () => {
    return(
        <div className="flex justify-center items-center h-screen mb-60 relative">
            <div className='outer-b bg-red-400 w-[300px] h-[300px] right-[55%] top-[20%]'>
                <a className='inner-b bg-red-600 w-[200px] h-[200px]' href="#brandschutz">BRANDSCHUTZ</a>
            </div>
            <div className='outer-b bg-blue-400 w-[250px] h-[250px] left-[50%]'>
                <a className='inner-b bg-blue-600 w-[150px] h-[150px] hover:w-[170px] hover:h-[170px]' href="#">TGA</a>
            </div>
            <div className='outer-b bg-yellow-400 w-[400px] h-[400px] top-[60%] right-flex justify-end[45%] flex justify-end'>
                <a className='inner-b bg-yellow-600 w-[300px] h-[300px] hover:w-[320px] hover:h-[320px]' href="#projektenwicklung">PROJEKTENWICKLUNG</a>
            </div>
            <div className='outer-b bg-green-400 w-[350px] h-[350px] left-[70%] flex justify-end'>
                <a className='inner-b bg-green-600 w-[250px] h-[250px] hover:w-[270px] hover:h-[270px]' href="#energieberatung">ENERGIEBERATUNG</a>
            </div>
            <div className='outer-b bg-slate-400 w-[300px] h-[300px] left-[25px] flex justify-end items-end'>
                <a className='inner-b bg-slate-600 w-[200px] h-[200px] hover:w-[220px] hover:h-[220px]' href="#architektur">ARCHITEKTUR</a>
            </div>
            <div className='outer-b bg-orange-400 w-[350px] h-[350px] left-[10%] top-[80%]'>
                <a className='inner-b bg-orange-600 w-[250px] h-[250px] hover:w-[270px] hover:h-[270px]' href="finanzierung">FINANZIERUNG</a>
            </div>
            <div className='outer-b bg-purple-400 w-[300px] h-[300px] left-[75%] top-[65%] flex justify-end items-end'>
                <a className='inner-b bg-purple-600 w-[200px] h-[200px] hover:w-[220px] hover:h-[220px]' href="#statik">STATIK</a>
            </div>
        </div>
    )
}

export default Bubbles;