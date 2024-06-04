import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return(
        <ul className='md:flex hidden nav'>
            <li>
                <a
                    href={'/#aktuelles'}
                    className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
                >
                    Aktuelles
                </a>
            </li>
            <li className=''>
                <Link
                    href={'/uber/'}
                    className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
                >Über uns</Link>
                <ul className={'sub-menu absolute hidden'}>
                    <li><a href={'/uber'}>Wir stellen uns vor</a></li>
                    <li><a href={'/uber#1'}>Forschung</a></li>
                    <li><a href={'/uber#2'}>BIM</a></li>
                    <li><a href={'/uber#3'}>Nachhaltigkeit</a></li>
                    <li><a href={'/uber#4'}>Bauen mit Holz</a></li>
                </ul>
            </li>
            <li>
                <Link
                    href={'/leistung/'}
                    className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
                >
                    Leistung
                </Link>
                <ul className={'sub-menu absolute hidden'}>
                    <li><Link href={'/architektur'}>Architektur</Link></li>
                    <li><Link href={'/bauantrag'}>Bauantrag</Link></li>
                    <li><Link href={'/tragwerksplanung'}>Tragwerksplanung</Link></li>
                    <li><Link href={'/technische'}>Technische Gebäudeausrüstung</Link></li>
                    <li><Link href={'/brandschutz'}>Brandschutz</Link></li>
                    <li><Link href={'/energieberatung'}>Energieberatung</Link></li>
                    <li><Link href={'/projektentwicklung'}>Projektentwicklung</Link></li>
                    <li><Link href={'/finanzierung'}>Finanzierung</Link></li>
                    <li><Link href={'/sanierung'}>Sanierung</Link></li>
                    <li><Link href={'/grundstucksentwicklung'}>Grundstücks-entwicklung</Link></li>
                </ul>
            </li>
            <li>
            <Link
                href={'/projekte/'}
                className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
            >
                Projekte
            </Link>
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