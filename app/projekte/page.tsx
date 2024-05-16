import React from 'react';
import '../../styles/globals.scss';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/header';
import ProjektDisplayer from '../../components/projektDisplayer';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'SPEKTRUM | Projekte',
    description: 'SPEKTRUM - Projekte',
}

const Projekte: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <ProjektDisplayer />
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Projekte;