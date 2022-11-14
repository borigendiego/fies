import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import Projektewicklung from '../components/projektenwicklung';
import LeistungComp from '../components/leistung';
import ArchitekturComp from '../components/architektur';
import Statik from '../components/statik';

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
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Leistung;