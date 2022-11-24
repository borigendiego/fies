import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import ProjektComponent from '../components/projektPageComponent';
import ProjektDisplayer from '../components/projektDisplayer';
import Footer from '../components/footer';

const Projekte: NextPage = () => {
    return(
        <div>
            <Head>
            </Head>
            <main>
                <Header />
                <h1 className={'text-center text-[60px] mt-6 md:mt-12'}>Projekte</h1>
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