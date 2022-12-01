import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import Projektewicklung from '../components/projektenwicklung';
import LeistungComp from '../components/leistung';
import ArchitekturComp from '../components/architektur';
import Statik from '../components/statik';
import Footer from '../components/footer';
import Sanierung from '../components/sanierung';
import Grundstuck from '../components/Grundstuck7';
import Technische from '../components/technische';
import Brandschutz from '../components/brandschutz';
import Energieberatung from '../components/energieberatung';
import Finanzierung from '../components/finanzierung';

const Leistung: NextPage = () => {
    return(
        <div>
            <Head>
                <title>SPEKTRUM - Leistung</title>
                <meta name="description" content="SPEKTRUM - Lesitung" />
            </Head>
            <main>
                <Header />
                <LeistungComp />
                <ArchitekturComp />
                <Statik />
                <Technische />
                <Brandschutz />
                <Energieberatung />
                <Projektewicklung />
                <Finanzierung />
                <Sanierung />
                <Grundstuck />
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Leistung;