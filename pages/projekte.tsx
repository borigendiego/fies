import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import ProjektComponent from '../components/projektPageComponent';
import ProjektDisplayer from '../components/projektDisplayer';

const Projekte: NextPage = () => {
    return(
        <div>
            <Head>
            </Head>
            <main>
                <Header />
                <ProjektComponent />
                <ProjektDisplayer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Projekte;