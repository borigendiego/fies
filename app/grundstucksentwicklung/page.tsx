import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';
import Grundstuck from '../../components/Grundstuck7';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Grundstücksentwicklung',
    description: 'SPEKTRUM - Grundstücksentwicklung',
}

const Grundstücksentwicklung: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <Grundstuck />
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Grundstücksentwicklung;