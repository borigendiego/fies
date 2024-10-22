import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return(
        <ul className='md:flex hidden nav'>
            <li>
                <a
                    href={'/aktuelles'}
                    className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
                >
                    Aktuelles
                </a>
            </li>
            <li className=''>
                <Link
                    href={'/uber/'}
                    className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
                >Über uns
                </Link>
                <ul className={'sub-menu absolute hidden'}>
                    <a href={'/uber'}><li>Wir stellen uns vor</li></a>
                    <a href={'/uber#forschung'}><li>Forschung</li></a>
                    <a href={'/uber#bim'}><li>BIM</li></a>
                    <a href={'/uber#nachhaltigkeit'}><li>Nachhaltigkeit</li></a>
                    <a href={'/uber#bauen-mit-holz'}><li>Bauen mit holz</li></a>
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
                    <Link href={'/architektur'}><li>Architektur</li></Link>
                    <Link href={'/bauantrag'}><li>Bauantrag</li></Link>
                    <Link href={'/tragwerksplanung'}><li>Tragwerksplanung</li></Link>
                    <Link href={'/technische'}><li>Technische Gebäudeausrüstung</li></Link>
                    <Link href={'/brandschutz'}><li>Brandschutz</li></Link>
                    <Link href={'/energieberatung'}><li>Energieberatung</li></Link>
                    <Link href={'/projektentwicklung'}><li>Projektentwicklung</li></Link>
                    <Link href={'/finanzierung'}><li>Finanzierung</li></Link>
                    <Link href={'/sanierung'}><li>Sanierung</li></Link>
                    <Link href={'/grundstucksentwicklung'}><li>Grundstücks-entwicklung</li></Link>
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