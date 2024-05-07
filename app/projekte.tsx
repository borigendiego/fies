import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import ProjektComponent from '../components/projektPageComponent';
import ProjektDisplayer from '../components/projektDisplayer';
import Footer from '../components/footer';
import Button from '../components/commons/homeButton';

const Projekte: NextPage = () => {
    return(
        <div>
            <Head>
                <title>SPEKTRUM - Projekte</title>
                <meta name="description" content="SPEKTRUM - Projekte" />
            </Head>
            <main>
                <Button />
                <Header />
                <ProjektComponent />
                <ProjektDisplayer />
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Projekte;