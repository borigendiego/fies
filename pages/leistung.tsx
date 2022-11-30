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

const Leistung: NextPage = () => {
    return(
        <div>
            <Head>
            </Head>
            <main>
                <Header />
                <LeistungComp />
                <Projektewicklung />
                <ArchitekturComp />
                <Statik />
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