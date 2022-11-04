import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';

const News: NextPage = () => {
    return(
        <div>
            <Head>
                <Header />
            </Head>
            <main>
                <h1>NEWS</h1>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default News;