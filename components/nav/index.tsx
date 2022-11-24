import Link from 'next/link'
import React from 'react'
import NAV_DATA from './constants'
//

//

const Nav = () => {
    return(
        <ul className='flex nav'>
            <li className=''>
                <Link 
                    href={'/uber/'} 
                    className={'hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
                >Über uns</Link>
                <ul className='sub-menu absolute hidden'>
                    <li><Link href={'/uber'}>Wir stellen uns vor</Link></li>
                    <li><Link href={'/uber#1'}>Forschung</Link></li>
                    <li><Link href={'/uber#2'}>BIM</Link></li>
                    <li><Link href={'/uber#3'}>Nachhaltigkeit</Link></li>
                    <li><Link href={'/uber#4'}>Bauen mit Holz</Link></li>
                </ul>
            </li>
            <li>
                <Link 
                    href={'/leistung/'} 
                    className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
                >Leistung</Link>
                <ul className='sub-menu absolute hidden'>
                    <li><Link href={'/leistung'}>Projektewicklung</Link></li>
                    <li><Link href={'/leistung'}>Architektur</Link></li>
                    <li><Link href={'/leistung'}>Statik</Link></li>
                </ul>
            </li>
            <li>
            <Link 
                    href={'/projekte/'} 
                    className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
                >Projekte</Link>
                <ul className='sub-menu absolute hidden'>
                    <li><Link href={'/projekte'}>Willich</Link></li>
                    <li><Link href={'/projekte'}>Airpark</Link></li>
                    <li><Link href={'/projekte'}>Heimstetten</Link></li>
                    <li><Link href={'/projekte'}>Pfaffenhofen</Link></li>
                    <li><Link href={'/projekte'}>Schwabelweis</Link></li>
                    <li><Link href={'/projekte'}>Karlsfeld</Link></li>
                </ul>
            </li>
            <li>
            <Link 
                    href={'/kontakt'} 
                    className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
                >
                    Kontakt
                </Link>
            </li>
        </ul>
    )
}

export default Nav