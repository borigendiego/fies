import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Bubbles from '../../components/bubbles';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungDisplayer from '../../components/commons/leistungDisplayer';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Leistung',
    description: 'SPEKTRUM - Lesitung',
}

const Leistung: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <Bubbles />
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Leistung;
