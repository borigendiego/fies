import React from 'react';
import '../../styles/globals.scss';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/header';
import WhoWeAre from '../../components/whoWeAre';

import Footer from '../../components/footer';
import LayoutDisplayer from '../../components/layoutDisplayer';
import Button from '../../components/commons/homeButton';


const Uber: NextPage = () => {
    return(
        <div className='page'>
            <Head>
                <title>SPEKTRUM - Über</title>
                <meta name="description" content="SPEKTRUM - Über" />
            </Head>
            <main>
                <Button />
                <Header />
                <WhoWeAre />
                <LayoutDisplayer />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Uber;