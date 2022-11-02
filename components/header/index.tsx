import React from 'react'
import Image from 'next/image'
import Nav from '../nav'
//

//

const Header = () => {
    /*
    if (process.browser) {
        // Client-side-only code
        const stickyFunction = () => window.addEventListener('scroll', function() {
            let navigation = document.querySelector('nav');

            if (navigation) {
                navigation.classList.toggle('sticky', window.scrollY > 0);
            }
        })
        stickyFunction();
    }
    */

    return(
        <nav className='bg-slate-500 md:flex md:justify-around md:py-4 fixed w-full'>
            <Image
                src={'/vercel.svg'} 
                alt={''}
                width={100}
                height={100}
            />
            <Nav />
        </nav>
    )
}

export default Header

