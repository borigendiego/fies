import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Projektewicklung from '../../components/projektenwicklung';
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
import LeistungDisplayer from '../../components/commons/leistungDisplayer';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Leistung',
    description: 'SPEKTRUM - Lesitung',
}

const Leistung: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <Bubbles />
                <LeistungDisplayer detail={false} />
                <Grundstuck />
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Leistung;
