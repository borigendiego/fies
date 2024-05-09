import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/header';
import KontaktComponent from '../../components/kontaktComponent';

const Kontakt: NextPage = () => {
    return(
        <div>
            <Head>
                <title>SPEKTRUM - Kontakt</title>
                <meta name="description" content="SPEKTRUM - Kontakt" />
            </Head>
            <main>
                <Header isHomePage />
                <KontaktComponent />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Kontakt;