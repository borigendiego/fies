import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Projektewicklung from '../../components/projektenwicklung';
import LeistungComp from '../../components/leistung';
import ArchitekturComp from '../../components/architektur';
import Statik from '../../components/statik';
import Footer from '../../components/footer';
import Sanierung from '../../components/sanierung';
import Grundstuck from '../../components/Grundstuck7';
import Technische from '../../components/technische';
import Brandschutz from '../../components/brandschutz';
import Energieberatung from '../../components/energieberatung';
import Finanzierung from '../../components/finanzierung';
import Bubbles from '../../components/bubbles';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import Bauantrag from '../../components/Bauantrag';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Leistung',
    description: 'SPEKTRUM - Lesitung',
}

const Leistung: NextPage = () => {
    return(
        <div>
            <main className='overflow-hidden'>
                <Button />
                <Header />
                <LeistungComp />
                <Bubbles />
                <ArchitekturComp />
                <Statik />
                <Technische />
                <Brandschutz />
                <Energieberatung />
                <Projektewicklung />
                <Finanzierung />
                <Sanierung />
                <Bauantrag />
                <Grundstuck />
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Leistung;