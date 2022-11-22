import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import KontaktComponent from '../components/kontaktComponent';

const News: NextPage = () => {
    return(
        <div>
            <Head>
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

export default News;